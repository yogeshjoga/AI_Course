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
    const files = fs.readdirSync(docsDir);
    const manifest = [];

    files.forEach(file => {
      if (!file.endsWith('.md')) return;

      const filePath = path.join(docsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      const { metadata, rawBody } = parseFrontmatter(content);
      const questionCount = countQuestions(rawBody);
      const resourceCount = countResources(rawBody);

      // Construct a default metadata structure if not provided in frontmatter
      const id = file.replace('.md', '');
      const title = metadata.title || id.replace(/[_-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const topic = metadata.topic || 'General';
      const date = metadata.date || new Date().toISOString().split('T')[0];
      const description = metadata.description || `Class MCQ test for ${topic}`;
      const timing = metadata.timing || '9:00 AM - 10:00 AM IST';

      manifest.push({
        id,
        title,
        topic,
        date,
        timing,
        description,
        file,
        questionCount,
        resourceCount
      });

      console.log(`✅ Indexed: ${file} [Topic: ${topic}] [Questions: ${questionCount}]`);
    });

    // Sort quizzes by day number ascending
    const getDayNumber = (id) => {
      const match = id.match(/^day(\d+)_/i);
      return match ? parseInt(match[1], 10) : 999;
    };
    manifest.sort((a, b) => getDayNumber(a.id) - getDayNumber(b.id));

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`🎉 Manifest compiled successfully! Saved ${manifest.length} quizzes to ${manifestPath}`);
  } catch (error) {
    console.error('❌ Error generating manifest:', error);
  }
};

generateManifest();
