import json
import os

docs_dir = r'E:\Gen AI Online Batch Morning tue-sat\AI_Course\public\docs'
sequence_file = os.path.join(docs_dir, 'sequence.json')

with open(sequence_file, 'r', encoding='utf-8') as f:
    sequence = json.load(f)

# Find the indices
try:
    oops_idx = sequence.index("python_oops.md")
    ds_idx = sequence.index("python_data_structures.md")

    # Swap them
    sequence[oops_idx], sequence[ds_idx] = sequence[ds_idx], sequence[oops_idx]

    with open(sequence_file, 'w', encoding='utf-8') as f:
        json.dump(sequence, f, indent=2)
    
    print("Successfully swapped python_oops.md and python_data_structures.md in sequence.json.")
except ValueError:
    print("Could not find one of the files in sequence.json.")
