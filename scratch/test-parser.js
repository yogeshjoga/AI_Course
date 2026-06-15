import fs from 'fs';
import path from 'path';
import { parseQuizMarkdown } from '../src/utils/quizParser.js';

const filePath = path.join(process.cwd(), 'public', 'docs', 'day3_python_fastapi_async.md');
const content = fs.readFileSync(filePath, 'utf-8');

console.log('--- File Raw Preview (first 500 chars) ---');
console.log(content.slice(0, 500));
console.log('-----------------------------------------');

const questions = parseQuizMarkdown(content);
console.log('Parsed Questions count:', questions.length);
if (questions.length === 0) {
  // Let's run a line-by-line trace
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const cleanContent = content.replace(frontmatterRegex, '');
  const lines = cleanContent.split('\n');
  console.log('Total clean lines:', lines.length);
  for (let i = 0; i < Math.min(25, lines.length); i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const qMatch = trimmed.match(/^##\s+(?:Question|Q)\s*\d+(?:\s*[:-\s]\s*(.*))?$/i);
    const optMatch = trimmed.match(/^(?:-\s+\[\s*\]|-\s+)?([A-D])\s*[\).]\s*(.*)/i);
    const ansMatch = trimmed.match(/^\*\*Correct Answer:\*\*\s*([A-D])/i);
    console.log(`Line ${i + 1}: [${trimmed}] | QMatch: ${!!qMatch} | OptMatch: ${!!optMatch} | AnsMatch: ${!!ansMatch}`);
  }
} else {
  console.log('Sample parsed question 1:', JSON.stringify(questions[0], null, 2));
}
