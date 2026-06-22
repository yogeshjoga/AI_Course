import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public', 'docs');
const files = fs.readdirSync(docsDir);

// Filter files matching day{N}_day_{N}_...md where N >= 6
const targetFiles = [];
files.forEach(file => {
  if (!file.endsWith('.md')) return;
  const match = file.match(/^day(\d+)_day_\d+_(.+)\.md$/);
  if (match) {
    const dayNum = parseInt(match[1], 10);
    if (dayNum >= 6) {
      targetFiles.push({
        filename: file,
        dayNum,
        restOfName: match[2]
      });
    }
  }
});

// Sort in descending order to prevent overwriting
targetFiles.sort((a, b) => b.dayNum - a.dayNum);

console.log('🚀 Shifting files in descending order...');
targetFiles.forEach(fileInfo => {
  const oldPath = path.join(docsDir, fileInfo.filename);
  const newDayNum = fileInfo.dayNum + 1;
  const newFilename = `day${newDayNum}_day_${newDayNum}_${fileInfo.restOfName}.md`;
  const newPath = path.join(docsDir, newFilename);

  console.log(`- Renaming: ${fileInfo.filename} -> ${newFilename}`);

  let content = fs.readFileSync(oldPath, 'utf-8');

  // Replace "Day X" with "Day X+1" in frontmatter title and body headings
  const oldDayStr = `Day ${fileInfo.dayNum}`;
  const newDayStr = `Day ${newDayNum}`;
  
  const dayRegex = new RegExp(`Day\\s+${fileInfo.dayNum}\\b`, 'g');
  content = content.replace(dayRegex, newDayStr);

  fs.writeFileSync(newPath, content, 'utf-8');
  fs.unlinkSync(oldPath);
});

console.log('🎉 Migration shift complete!');
