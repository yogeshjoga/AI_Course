import os

docs_dir = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs'
files_to_update = [
    "python_intro_to_coding.md",
    "python_datatypes.md",
    "python_loops.md",
    "python_data_structures.md",
    "python_libs_pydantic.md",
    "fastapi_basics.md",
    "fastapi_api_design.md",
    "api_testing_postman.md",
    "mcp_openmcp_design.md"
]

for filename in files_to_update:
    filepath = os.path.join(docs_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the topic string
    new_content = content.replace('topic: "Python & FastAPI"', 'topic: "Python with FastAPI"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Updated topic to 'Python with FastAPI' in all 9 files.")
