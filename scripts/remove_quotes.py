import re
file_path = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs\designing_youtube_part_1.md'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace quotes around the options:
# Match A. "some text" and replace with A. some text
new_text = re.sub(r'([A-D]\.)\s+"(.*?)"', r'\1 \2', text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)
print('Quotes successfully removed!')
