/**
 * Parses MCQ quiz markdown or plain text content into structured question arrays.
 * 
 * Supports both markdown format:
 * ## Question 1: Title
 * - [ ] A) Option text
 * **Correct Answer:** A
 * 
 * And raw text format:
 * Q1. Title
 * A. Option text
 * Answer:
 * ✅ A. Option text
 */
export function parseQuizMarkdown(mdContent) {
  if (!mdContent) return [];

  // Strip frontmatter first if present
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const cleanContent = mdContent.replace(frontmatterRegex, '');
  
  const lines = cleanContent.split('\n');
  const questions = [];
  let currentQuestion = null;
  let collectingExplanation = false;
  let expectingAnswerLetter = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Check if we found a new question heading
    // Matches: ## Question 1: Title, ## Q 1: Title, Q1. Title, Q1: Title, Question 1: Title
    const questionMatch = trimmedLine.match(/^(?:##\s+)?(?:Question|Q)\s*(\d+)[\.:-\s]\s*(.*)/i);
    if (questionMatch) {
      if (currentQuestion) {
        questions.push(currentQuestion);
      }
      currentQuestion = {
        questionText: questionMatch[2] ? questionMatch[2].trim() : '',
        options: [],
        correctAnswer: '',
        explanation: ''
      };
      collectingExplanation = false;
      expectingAnswerLetter = false;
      continue;
    }

    if (!currentQuestion) continue;

    // Check if we are expecting the correct answer letter on this line
    if (expectingAnswerLetter && trimmedLine !== '') {
      // Matches: ✅ C. Text, C. Text, **C**, C)
      const letterMatch = trimmedLine.match(/^(?:[^\w\s]*\s*)*([A-D])\b/i);
      if (letterMatch) {
        currentQuestion.correctAnswer = letterMatch[1].toUpperCase();
        expectingAnswerLetter = false;
        continue;
      }
    }

    // Check if we found the correct answer label (same line or multi-line)
    const answerLabelMatch = trimmedLine.match(/^\*\*Correct Answer:\*\*\s*(.*)/i) || 
                              trimmedLine.match(/^Correct Answer:\s*(.*)/i) ||
                              trimmedLine.match(/^\*\*Answer:\*\*\s*(.*)/i) ||
                              trimmedLine.match(/^Answer:\s*(.*)/i);
    if (answerLabelMatch) {
      const restOfLine = answerLabelMatch[1].trim();
      // If the letter is on the same line, e.g. "Answer: C" or "Answer: ✅ C"
      const letterMatch = restOfLine.match(/^(?:[^\w\s]*\s*)*([A-D])\b/i);
      if (letterMatch) {
        currentQuestion.correctAnswer = letterMatch[1].toUpperCase();
      } else {
        // Answer is on the next line
        expectingAnswerLetter = true;
      }
      continue;
    }

    // Check if we found the explanation block
    const explanationStartMatch = trimmedLine.match(/^\*\*Explanation:\*\*\s*(.*)/i) ||
                                  trimmedLine.match(/^Explanation:\s*(.*)/i);
    if (explanationStartMatch) {
      collectingExplanation = true;
      currentQuestion.explanation = explanationStartMatch[1].trim();
      continue;
    }

    // If we're collecting explanation, append subsequent lines
    if (collectingExplanation) {
      if (trimmedLine === '---') {
        collectingExplanation = false; // Divider ends explanation block
      } else {
        if (currentQuestion.explanation) {
          currentQuestion.explanation += '\n' + line;
        } else {
          currentQuestion.explanation = line;
        }
      }
      continue;
    }

    // Check if we are parsing options (A, B, C, D)
    // Matches patterns like: - [ ] A) Text, - A) Text, - A. Text, A) Text, A. Text, A.Text
    const optionMatch = trimmedLine.match(/^(?:-\s+\[\s*\]|-\s+)?\s*([A-D])\s*[\).]\s*(.*)/i);
    if (optionMatch) {
      const optionLetter = optionMatch[1].toUpperCase();
      const optionText = optionMatch[2].trim();
      
      if (!currentQuestion.options.find(o => o.id === optionLetter)) {
        currentQuestion.options.push({
          id: optionLetter,
          text: optionText
        });
      }
      continue;
    }

    // Fallback: Check if we are parsing a bullet option WITHOUT a letter prefix (e.g. "- Option Text" or "- [ ] Option Text")
    const fallbackOptionMatch = trimmedLine.match(/^(?:-\s+\[\s*\]\s*|-\s+)(.*)/i);
    if (fallbackOptionMatch && currentQuestion.options.length < 4) {
      const nextLetter = ['A', 'B', 'C', 'D'][currentQuestion.options.length];
      const optionText = fallbackOptionMatch[1].trim();
      
      // Ensure we don't accidentally treat headers, answers or explanations as bullet options
      if (
        optionText && 
        !optionText.startsWith('##') && 
        !optionText.startsWith('**Correct Answer') && 
        !optionText.startsWith('**Explanation') && 
        !optionText.toLowerCase().startsWith('answer') && 
        !optionText.toLowerCase().startsWith('explanation')
      ) {
        currentQuestion.options.push({
          id: nextLetter,
          text: optionText
        });
        continue;
      }
    }

    // If it doesn't match options, answer, explanation, and we are not in explanation mode
    // it must be the question body (e.g. details between the header and options)
    if (trimmedLine !== '' && trimmedLine !== '---' && currentQuestion.options.length === 0) {
      if (currentQuestion.questionText) {
        currentQuestion.questionText += '\n' + trimmedLine;
      } else {
        currentQuestion.questionText = trimmedLine;
      }
    }
  }

  // Push the last question
  if (currentQuestion) {
    questions.push(currentQuestion);
  }

  // Final cleanup: clean up trailing/leading spaces and format markdown codes
  return questions.map(q => {
    return {
      ...q,
      questionText: q.questionText.trim(),
      explanation: q.explanation.trim()
    };
  }).filter(q => q.options.length > 0 && q.correctAnswer !== '');
}
