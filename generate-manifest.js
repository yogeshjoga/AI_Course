import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public', 'docs');
const manifestPath = path.join(docsDir, 'manifest.json');

// Ensure docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

console.log('🔍 Scanning public/docs for MCQ markdown files...');

const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = content.match(frontmatterRegex);
  const metadata = {};
  
  if (match) {
    const yamlLines = match[1].split('\n');
    yamlLines.forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim().replace(/^['"]|['"]$/g, ''); // Remove surrounding quotes
        metadata[key] = value;
      }
    });
  }
  
  return { metadata, rawBody: match ? content.slice(match[0].length) : content };
};

const countQuestions = (body) => {
  // Count headings starting with ## Question, ## Q, Q1., Question 1.
  const questionRegex = /^(?:##\s+)?(?:Question|Q)\s*\d+[\.:-\s]/gim;
  const matches = body.match(questionRegex);
  return matches ? matches.length : 0;
};

const countResources = (body) => {
  const questionIndex = body.search(/^(?:##\s+)?(?:Question|Q)\s*\d+[\.:-\s]/im);
  const intro = questionIndex !== -1 ? body.substring(0, questionIndex) : body;
  const lines = intro.split('\n');
  const headings = lines.filter(line => {
    const trimmed = line.trim();
    return trimmed.startsWith('### ') && 
           !trimmed.toLowerCase().includes('class timing') && 
           !trimmed.toLowerCase().includes('welcome to');
  });
  return headings.length;
};

const generateManifest = () => {
  try {
    const sequencePath = path.join(docsDir, 'sequence.json');
    if (!fs.existsSync(sequencePath)) {
      throw new Error(`sequence.json not found at ${sequencePath}`);
    }

    const sequence = JSON.parse(fs.readFileSync(sequencePath, 'utf-8'));
    const manifest = [];

    sequence.forEach((file, index) => {
      const filePath = path.join(docsDir, file);
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️ Warning: file ${file} listed in sequence.json does not exist.`);
        return;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      const { metadata, rawBody } = parseFrontmatter(content);
      const questionCount = countQuestions(rawBody);
      const resourceCount = countResources(rawBody);

      const id = file.replace('.md', '');
      const dayNumber = index + 1;

      // Clean "Day X - " prefix if any from title
      let cleanTitle = metadata.title || id.replace(/[_-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      cleanTitle = cleanTitle.replace(/^Day\s*\d+\s*-\s*/i, '').trim();

      const isReference = metadata.isReference === 'true' || metadata.isReference === true;
      const title = isReference ? cleanTitle : `Day ${dayNumber} - ${cleanTitle}`;
      const topic = metadata.topic || 'General';
      const date = metadata.date || new Date().toISOString().split('T')[0];
      const description = metadata.description || `Class MCQ test for ${topic}`;
      const timing = metadata.timing || '9:00 AM - 10:00 AM IST';

      manifest.push({
        id,
        title,
        dayNumber,
        topic,
        date,
        description,
        file,
        questionCount,
        resourceCount,
        isReference
      });

      console.log(`✅ Indexed: ${file} [Day: ${dayNumber}] [Topic: ${topic}] [Questions: ${questionCount}]`);
    });

    // Sort by day number ascending
    manifest.sort((a, b) => a.dayNumber - b.dayNumber);

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`🎉 Manifest compiled successfully! Saved ${manifest.length} quizzes to ${manifestPath}`);
  } catch (error) {
    console.error('❌ Error generating manifest:', error);
  }
};

generateManifest();
