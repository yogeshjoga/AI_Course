import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowDown,
  Search, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  Lightbulb, 
  Clock, 
  Sliders, 
  AlertTriangle, 
  Target, 
  Info,
  Workflow,
  Sparkles,
  Cpu,
  Zap,
  Play,
  RefreshCw,
  Network
} from 'lucide-react';

const terminologyData = [
  // General Data Science
  { 
    term: 'Dataset', 
    category: 'General Data Science', 
    definition: 'A structured collection of data, often in tabular form, used for training or testing models.', 
    details: '📊 Flow Diagram:\nRaw Data Source ──(Collection)──> Structured Table ──(Dataset)──> [Train / Val / Test Split]\n\n💡 Why It Exists:\nAI cannot learn without examples. The dataset is the "experience" of the model.\n\n📚 Example:\nSuppose you want to predict house prices:\nSize | Bedrooms | Price\n1200 | 2 | $50,000\n1800 | 3 | $90,000\n2400 | 4 | $150,000\n\n⏱️ When To Use:\nAlways. Every AI, ML, Deep Learning, and LLM system starts with a dataset.' 
  },
  { 
    term: 'Feature', 
    category: 'General Data Science', 
    definition: 'An input variable used to make predictions.', 
    details: '📊 Flow Diagram:\nInput Features:\n[ Size: 1800 sq ft ] ──┐\n[ Bedrooms: 3      ] ──┼──> Model ──> Predicted Label: [ Price: $90,000 ]\n[ Age: 5 years     ] ──┘\n\n💡 Why It Exists:\nModels need specific inputs to calculate predictions. Features are the variables the model learns from.\n\n📚 Example:\nIn House Price Prediction:\n- Size (House area)\n- Bedrooms (Number of rooms)\n- Age (Age of house)\n\nNote: Price is NOT a feature. Price is the label.\n\n⏱️ When To Use:\nWhenever training a model. The model learns relationships between features and labels.' 
  },
  { 
    term: 'Label', 
    category: 'General Data Science', 
    definition: 'The output or target variable in supervised learning.', 
    details: '📊 Flow Diagram:\nInput features ──> Model ──> Prediction ──[Matches?]──> Ground Truth Label (Spam/Not Spam)\n\n💡 Why It Exists:\nSupervised learning requires the "correct answer" to learn the mapping from inputs to outputs.\n\n📚 Example:\nIn Spam Detection:\n- Input Email: "Congratulations! You won $1000"\n- Label: Spam\n\nIn House Price Prediction:\n- Label: Price' 
  },
  { 
    term: 'Data Collection', 
    category: 'General Data Science', 
    definition: 'Gathering data from various sources to build a dataset.', 
    details: '📊 Flow Diagram:\n[Websites] ──┬──>\n[APIs]     ──┼──> [Gathering Pipeline] ──> Raw Dataset (CSV/JSON/SQL)\n[Databases] ──┘\n\n💡 Why It Exists:\nBefore clean datasets can be processed, data must be assembled from different files and networks.\n\n📚 Example:\nQuery Google Search API → Download reviews → Store in a CSV file.' 
  },
  { 
    term: 'Data Preprocessing', 
    category: 'General Data Science', 
    definition: 'Cleaning and transforming raw data before training.', 
    details: '📊 Flow Diagram:\nRaw Data (Messy) ──> [Deduplication] ──> [Imputation] ──> [Scaling/Encoding] ──> Model-Ready Data\n\n💡 Why Needed:\nRaw data is usually messy. It contains duplicates, casing variations, or format errors.\n\n📚 Example:\n"John", "john", "JOHN" must all be cleaned and normalized to "john" to prevent model confusion.\n\n🔧 Common Steps:\n- Remove duplicates (e.g. John, John → John)\n- Handle Missing Values (impute or remove)\n- Normalize (scaling values to the same range, e.g. Salary=100000, Age=25 → Salary=1.0, Age=0.25 so salary does not dominate learning)\n- Encoding (converting text categories like "Red", "Blue", "Green" to numbers like [1,0,0], [0,1,0], [0,0,1] via One-Hot Encoding).' 
  },
  { 
    term: 'Outlier', 
    category: 'General Data Science', 
    definition: 'Data points that differ significantly from other observations.', 
    details: '📊 Flow Diagram:\nData Stream: [ 30k, 35k, 40k, 10M (Outlier!), 45k ]\n                                  │\n                                  └──(Action)──> [ Remove / Cap / Investigate ]\n\n💡 Why It Exists:\nAnomalous observations arise from entry errors, edge cases, or extreme occurrences.\n\n📚 Example:\nNormal salaries: $30k, $35k, $40k, $45k.\nOutlier salary: $10 million.\n\n⚠️ Problem:\nCan confuse model training and heavily skew results.\n\n🔧 Solution:\n- Remove outliers\n- Cap outliers\n- Investigate causes' 
  },
  { 
    term: 'Feature Engineering', 
    category: 'General Data Science', 
    definition: 'Creating better features from existing data.', 
    details: '📊 Flow Diagram:\nBase Feature: Date of Birth ──> [Extraction Logic] ──> New Features: [Age, Birth Month, Day of Week]\n\n💡 Why It Exists:\nRaw variables often hide direct patterns. Structuring them makes learning easier for models.\n\n📚 Example:\nOriginal input: Date of Birth.\nNew Engineered Features:\n- Age\n- Birth Month\n- Birth Year\n- Day of Week' 
  },

  // AI/ML Core
  { 
    term: 'Model', 
    category: 'AI/ML Core', 
    definition: 'A mathematical representation trained to make predictions or decisions.', 
    details: '📊 Flow Diagram:\nInputs (Features) ───> [ Mathematical Function (w*x + b) ] ───> Output (Prediction)\n\n💡 Why It Exists:\nIt represents the learned rules that map features to outputs.\n\n📚 Example:\n- Input: Size = 1500 sq ft\n- Output Prediction: Price = $80,000\n\nThe model has learned this mapping mathematical formula.' 
  },
  { 
    term: 'Training', 
    category: 'AI/ML Core', 
    definition: 'The process of teaching a model using data.', 
    details: '📊 Flow Diagram:\nFeatures ──> Model ──> Prediction ──> Loss (Error) ──> Backpropagation ──> Update weights ──> (Loop)\n\n🔄 Process:\nData → Model → Prediction → Error (Loss) → Update Weights (Optimizer) → Repeat' 
  },
  { 
    term: 'Validation', 
    category: 'AI/ML Core', 
    definition: 'A subset of data used during training to tune hyperparameters and check progress.', 
    details: '📊 Flow Diagram:\nDataset ──> Split ──> [ Train (70%) ] ──> Fit weights ──┐\n                   ──> [ Validation (15%) ] ──> Tune hyperparameters ──┘\n\n💡 Why It Exists:\nValidation acts as a practice exam. It helps you check if the model generalizes well and tunes settings (like learning rate) without leaking test data.' 
  },
  { 
    term: 'Testing', 
    category: 'AI/ML Core', 
    definition: 'Evaluating final model performance on unseen data.', 
    details: '📊 Flow Diagram:\nTrained Model (Weights Frozen) ──> [ Test Dataset (15% Unseen) ] ──> Final Generalization Metric\n\n💡 Why It Exists:\nActs as the "final exam" for the model. It is used only after training is complete to obtain an unbiased metric of real-world capability.' 
  },
  { 
    term: 'Overfitting', 
    category: 'AI/ML Core', 
    definition: 'When a model memorizes training noise instead of the underlying signal.', 
    details: '📊 Flow Diagram:\nTraining Epochs ───> [ Memorizes Noise ] ───> Train Error: Low 📉 / Test Error: High 📈\n\n📚 Example:\n- Training Accuracy: 99%\n- Test Accuracy: 50%\n\n⚠️ Cause:\nOver-learning or too complex of a model.\n\n🔧 Fixes:\n- Gather more data\n- Apply Dropout\n- Use Regularization' 
  },
  { 
    term: 'Underfitting', 
    category: 'AI/ML Core', 
    definition: 'When a model is too simple to capture the underlying patterns.', 
    details: '📊 Flow Diagram:\nSimple Model ───> [ Misses Trend ] ───> Train Error: High 📈 / Test Error: High 📈\n\n📚 Example:\n- Training Accuracy: 45%\n- Testing Accuracy: 42%\n\n🔧 Fixes:\n- Use a bigger model\n- Train longer\n- Engineer better features' 
  },
  { 
    term: 'Hyperparameters', 
    category: 'AI/ML Core', 
    definition: 'Settings chosen by the developer BEFORE training starts.', 
    details: '📊 Flow Diagram:\nDeveloper ──> Choose Settings (Learning Rate, Batch Size, Epochs) ──> Train Model ──> Weights Learned\n\n💡 Why They Exist:\nTo control and optimize the model learning process.\n\n📚 Examples:\n- Learning Rate: 0.001\n- Batch Size: 32\n- Epochs: 10' 
  },
  { 
    term: 'Loss Function', 
    category: 'AI/ML Core', 
    definition: 'A metric that quantifies the difference between predicted and actual values.', 
    details: '📊 Flow Diagram:\nActual Label (Y) ──┐\n                   ├──> [ Loss Function ] ──> Loss Score (Error Distance)\nPredicted (Y_pred) ──┘\n\n📚 Example:\n- Real Price: 100\n- Predicted Price: 90\n- Loss: 10\n\n🎯 Goal:\nMinimize the Loss score during training.' 
  },
  { 
    term: 'Gradient Descent', 
    category: 'AI/ML Core', 
    definition: 'An optimization algorithm used to minimize the loss function.', 
    details: '📊 Flow Diagram:\nCurrent Loss ──> Calculate Gradient (Slope) ──> Adjust Weights Downward ──> Minimum Loss (Valley)\n\n🏔️ Analogy:\nImagine walking down a foggy mountain. The top of the mountain represents high loss (error), and the valley bottom represents minimum loss. Gradient Descent calculates the slope and takes steps downhill until error is minimized.' 
  },
  { 
    term: 'Epoch', 
    category: 'AI/ML Core', 
    definition: 'One complete pass through the entire training dataset.', 
    details: '📊 Flow Diagram:\n[ Dataset: 1000 samples ] ──> Pass 1 (Epoch 1) ──> Pass 2 (Epoch 2) ──> converged\n\n📚 Example:\n- Dataset has 1000 images.\n- Epoch 1: Model sees all 1000 images.\n- Epoch 2: Model sees all 1000 images again (updating weights further).' 
  },
  { 
    term: 'Batch', 
    category: 'AI/ML Core', 
    definition: 'A small subset of the dataset processed by the model at one time.', 
    details: '📊 Flow Diagram:\n[ Dataset: 1000 samples ]\n├── Batch 1 (100) ──> Update Weights ──┐\n├── Batch 2 (100) ──> Update Weights ──┼──> Complete 10 batches = 1 Epoch\n└── Batch 10 (100) ──> Update Weights ─┘\n\n📚 Example:\n- Dataset = 1000 images\n- Batch Size = 100\n- Result: 10 batches per epoch.' 
  },

  // Deep Learning Terms
  { 
    term: 'Neural Network', 
    category: 'AI/ML Core', 
    definition: 'A model architecture inspired by biological neural connections.', 
    details: '📊 Flow Diagram:\nInput Layer (x) ───> Hidden Layer (Weights/Bias) ───> Activation ───> Output Layer (y)\n\n🏗️ Structure:\nInput Layer → Hidden Layers → Output Layer' 
  },
  { 
    term: 'Weight', 
    category: 'AI/ML Core', 
    definition: 'The importance or strength assigned to a specific input connection.', 
    details: '📊 Flow Diagram:\nInput x1 ───(w1 = 0.8)───┐\nInput x2 ───(w2 = 0.1)───┼──> ∑ (w_i * x_i) + b ──> Activation\nInput x3 ───(w3 = 0.05)──┘\n\n💡 Why It Exists:\nThe model adjusts weights during training to focus on important features and make accurate predictions.' 
  },
  { 
    term: 'Bias', 
    category: 'AI/ML Core', 
    definition: 'An extra constant parameter added to help shift activation outputs.', 
    details: '📊 Flow Diagram:\nInput weighted sum (∑ w*x) ───> [ Add Bias (+b) ] ───> Activation Function\n\n💡 Why It Exists:\nProvides the neural layers with extra flexibility, similar to the intercept constant (b) in a linear equation (y = mx + b).' 
  },
  { 
    term: 'Activation Function', 
    category: 'AI/ML Core', 
    definition: 'Adds non-linearity to neural network calculations.', 
    details: '📊 Flow Diagram:\nLinear Sum (z) ───> [ Activation Function (e.g. ReLU) ] ───> Non-Linear Output (a)\n\n💡 Why Needed:\nWithout activation functions, deep networks would collapse into a single linear regression. Non-linearity lets networks learn complex patterns.\n\n📚 Examples:\n- ReLU\n- Sigmoid\n- Tanh\n- GELU' 
  },
  { 
    term: 'Backpropagation', 
    category: 'AI/ML Core', 
    definition: 'The method used to calculate error gradients and update weights.', 
    details: '📊 Flow Diagram:\nForward Pass: Features ──> Model ──> Loss\nBackward Pass: Loss ──(Derivative)──> Gradients ──> Update Weights (w = w - lr * dw)\n\n🔄 Process:\nPrediction → Calculate Error → Send Error Back → Update Weights' 
  },

  // LLM Vocabulary
  { 
    term: 'Token', 
    category: 'LLM (Large Language Model)', 
    definition: 'A piece of text (word, subword, or character) processed by the model.', 
    details: '📊 Flow Diagram:\nInput: "ChatGPT" ───(Tokenizer)───> Subwords: ["Chat", "GPT"] ───> Token IDs: [2939, 4820]\n\n📚 Example:\n"ChatGPT is amazing" → ["Chat", "GPT", " is", " amazing"]\n\nTokens are the vocabulary units of LLMs.' 
  },
  { 
    term: 'Embedding', 
    category: 'LLM (Large Language Model)', 
    definition: 'A numerical vector representing semantic meaning.', 
    details: '📊 Flow Diagram:\nToken: "King" ───(Embedding Model)───> [ 0.12, -0.45, 0.78, ... (1536 dim vector) ]\n\nSimilar meanings are placed close to each other in high-dimensional vector spaces.' 
  },
  { 
    term: 'Transformer', 
    category: 'LLM (Large Language Model)', 
    definition: 'The dominant neural network architecture behind modern LLMs.', 
    details: '📊 Flow Diagram:\nInput Tokens ───> [ Multi-Head Attention ] ───> [ Feed Forward ] ───> Output Tokens (Parallelized)\n\n📄 Source:\nOriginally published in the paper "Attention Is All You Need".\n\n💡 Why Important:\nAllows processing of long text context in parallel, powering GPT, Claude, Gemini, and Llama.' 
  },
  { 
    term: 'Attention Mechanism', 
    category: 'LLM (Large Language Model)', 
    definition: 'Allows the model to focus on important related words.', 
    details: '📊 Flow Diagram:\n"The cat sat on the mat because it was tired"\n  └─────────────────────────────▲ (Attention weight: 0.92)\n\nAttention connects "it" → "cat".' 
  },
  { 
    term: 'Context Window', 
    category: 'LLM (Large Language Model)', 
    definition: 'The maximum tokens a model can process in one turn.', 
    details: '📊 Flow Diagram:\nInput Prompts + Conversation History ───> [ Context Window Limit ] ───> Output Generation\n\n📊 Example:\n128K tokens context window allows inserting entire codebases or books directly into a prompt.' 
  },
  { 
    term: 'Inference', 
    category: 'LLM (Large Language Model)', 
    definition: 'Using a trained model to generate predictions or outputs.', 
    details: '📊 Flow Diagram:\nInput Prompt ───> [ Trained Model (Weights Frozen) ] ───> Generated Output\n\n🔄 Comparison:\n- Training: Heavy math, weights are updated (learning)\n- Inference: Fast prediction, weights are frozen (applying)' 
  },
  { 
    term: 'Fine-Tuning', 
    category: 'LLM (Large Language Model)', 
    definition: 'Continuing to train a pre-trained model on specialized data.', 
    details: '📊 Flow Diagram:\nPretrained Model (General) ──> Train on Domain Data (weights adjust) ──> Finetuned Model (Specialized)\n\n📊 Example:\n- Base Model: General English text completer\n- Fine-Tuning: Train on medical documents\n- Result: Specialized medical assistant' 
  },
  { 
    term: 'Instruction Tuning', 
    category: 'LLM (Large Language Model)', 
    definition: 'Training a model to follow commands and instructions.', 
    details: '📊 Flow Diagram:\nBase Model (Completer) ──> Train on Prompt-Response pairs ──> Conversational Assistant\n\n📊 Example:\nTeaching a base completer how to reply correctly when asked to "Summarize this:" rather than just completing the sentence.' 
  },
  { 
    term: 'Zero-Shot Learning', 
    category: 'LLM (Large Language Model)', 
    definition: 'Performing a task with no examples provided in the prompt.', 
    details: '📊 Flow Diagram:\nZero-Shot: Prompt (No examples) ──> LLM ──> Answer\n\n💬 Example Prompt:\n"Translate English to French: Hello"\nResponse: "Bonjour"' 
  },
  { 
    term: 'Few-Shot Learning', 
    category: 'LLM (Large Language Model)', 
    definition: 'Providing a few prompt examples to show expected patterns.', 
    details: '📊 Flow Diagram:\nFew-Shot: Prompt (Examples + Question) ──> LLM ──> Answer (Aligned to examples)\n\n💬 Example Prompt:\nDog -> Animal\nCat -> Animal\nRose -> Plant\nApple ->\n\nResponse: "Fruit"' 
  },

  // Prompt Engineering
  { 
    term: 'Prompt', 
    category: 'Prompt Engineering', 
    definition: 'The input text instructions given to an LLM.', 
    details: '📊 Flow Diagram:\nUser Query ──> [ Prompt Formatting ] ──> Input to LLM ──> Response\n\n💬 Example:\n"Explain neural networks like I am 10 years old."' 
  },
  { 
    term: 'System Prompt', 
    category: 'Prompt Engineering', 
    definition: 'Hidden configurations that define assistant behavior.', 
    details: '📊 Flow Diagram:\nSystem Prompt (Rules) ──┐\nUser Prompt (Query) ────┼──> Combined Input ──> LLM ──> Response\n\n💬 Example:\n"You are a helpful coding assistant. Do not output explanations, only raw code."\n\nControls persona boundaries.' 
  },
  { 
    term: 'User Prompt', 
    category: 'Prompt Engineering', 
    definition: 'The direct query entered by the user.', 
    details: '📊 Flow Diagram:\nUser Input Text ──> [ User Prompt Section ] ──> LLM Input\n\n💬 Example:\n"Write Python code to compute factorials."' 
  },
  { 
    term: 'Temperature', 
    category: 'Prompt Engineering', 
    definition: 'Controls creativity and randomness of the output.', 
    details: '📊 Flow Diagram:\nToken Probabilities ───> [ Temp Scaling ] ───> Low Temp: Deterministic / High Temp: Random\n\n🎛️ Settings:\n- Low (0.1): Predictable, highly logical (great for code/math).\n- High (1.5): Random, highly creative (great for creative writing).' 
  },
  { 
    term: 'Top-K Sampling', 
    category: 'Prompt Engineering', 
    definition: 'Filters candidate next-tokens to the Top K choices.', 
    details: '📊 Flow Diagram:\nCandidates: [ word1 (40%), word2 (30%), word3 (15%), word4 (10%), word5 (5%) ]\nTop-K (K=2):  Select from [word1, word2]\n\n📊 Example:\nIf K = 10, the model only selects from the 10 most probable next words.' 
  },
  { 
    term: 'Top-P Sampling', 
    category: 'Prompt Engineering', 
    definition: 'Filters candidate next-tokens to cumulative probability P.', 
    details: '📊 Flow Diagram:\nCandidates: [ word1 (40%), word2 (30%), word3 (15%), word4 (10%), word5 (5%) ]\nTop-P (P=0.85): Select from [word1, word2, word3] (cumulative sum = 85%)\n\n📊 Example:\nIf P = 0.95, the model considers the smallest pool of words that combine to cover 95% of the probability distribution.' 
  },
  { 
    term: 'Chain-of-Thought', 
    category: 'Prompt Engineering', 
    definition: 'Encouraging the model to reason step-by-step.', 
    details: '📊 Flow Diagram:\nQuestion ──> Prompt (Think step-by-step) ──> Reasoning Steps ──> Final Answer (High Accuracy)\n\n💬 Example:\nAdding "Solve this step-by-step" to a math prompt increases reasoning accuracy.' 
  },
  { 
    term: 'Prompt Template', 
    category: 'Prompt Engineering', 
    definition: 'A reusable format for structuring inputs dynamically.', 
    details: '📊 Flow Diagram:\nVariables: {topic, tone} ───> [ Template Structure ] ───> Formatted System Prompt\n\n💬 Example:\n"Role: {role}\nTask: {task}\nInput: {input}"' 
  },

  // RAG (Retrieval-Augmented Generation)
  { 
    term: 'RAG', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'A pattern that augments LLM generation with external database files.', 
    details: '📊 Flow Diagram:\nQuestion ──> [ Retriever ] ──> Vector Store ──> Top Chunks ──> [ Prompt Injection ] ──> LLM Generator ──> Answer\n\n🔄 Architecture Flow:\nUser Question → Retriever → Vector DB → Relevant Chunks → Context Injection → LLM → Factual Answer.' 
  },
  { 
    term: 'Retriever', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'Component that fetches relevant documents from a knowledge base.', 
    details: '📊 Flow Diagram:\nQuery ──> [ Retriever ] ──> Docs ──┐\nQuery ─────────────────────────────┴──> [ Generator ] ──> Grounded Answer\n\n📊 Example:\nUser asks: "Company leave policy". The Retriever searches internal PDF files and fetches the leaf policies section.' 
  },
  { 
    term: 'Generator', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'The LLM that uses retrieved documents to write grounded answers.', 
    details: '📊 Flow Diagram:\nUser Query + Retrieved Chunks ──> [ LLM Generator ] ──> Grounded Factual Answer\n\n💡 Why It Exists:\nTo synthesize text and ensure final responses are backed by real retrieved facts, reducing hallucinations.' 
  },
  { 
    term: 'Chunking', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'Splitting large documents into smaller text chunks.', 
    details: '📊 Flow Diagram:\nLarge Document (10k tokens) ───> [ Splitter ] ───> Chunks [ 1 (200 tokens), 2 (200 tokens) ... ]\n\n📊 Example:\nSplitting a 100-page PDF file into 500 individual chunks of 200 tokens each. Helps retrieve relevant sections precisely.' 
  },
  { 
    term: 'Vector Store', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'A database that stores embeddings for fast similarity search.', 
    details: '📊 Flow Diagram:\nText Chunks ──> Embedding Model ──> Vectors ──> [ Vector Store ANN Index ]\n\n📊 Examples:\n- Pinecone\n- Milvus\n- Chroma\n- FAISS' 
  },
  { 
    term: 'Similarity Search', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'Finding document chunks closest in meaning to a query vector.', 
    details: '📊 Flow Diagram:\nQuery Vector ──(Cosine Distance)──> [ Candidate Vectors ] ──> Closest Semantic Chunks\n\n📊 Example:\nCalculating cosine distances to match query vector "How many vacation days?" with stored chunk "Annual Leave Policy".' 
  },
  { 
    term: 'Context Injection', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'Adding retrieved documents directly into the prompt context block.', 
    details: '📊 Flow Diagram:\n[ HR Leaves Policy Chunk ] + "Question: How many days?" ───> Injected Prompt Context\n\n💬 Structure:\n[Retrieved Text context] + [User Question] + [Answer Factually Guidelines]' 
  },
  { 
    term: 'Hybrid Search', 
    category: 'RAG (Retrieval-Augmented Generation)', 
    definition: 'Combines keyword search and vector search.', 
    details: '📊 Flow Diagram:\nQuery ──┬──> Lexical Search (BM25: exact keywords) ───┐\n        └──> Vector Search (Cosine: semantic concepts) ──┼──> [ Reciprocal Rank Fusion ] ──> Combined Top Docs\n\n🔧 Formula:\nKeyword Search (exact terms) + Vector Search (semantic meaning) = Maximum search accuracy.' 
  },

  // AI Hardware & GPU
  { 
    term: 'CPU', 
    category: 'AI Hardware & GPU', 
    definition: 'Central Processing Unit - the general-purpose main processor.', 
    details: '📊 Flow Diagram:\nCPU:  Input Task ──> [ Core 1 ] ──> [ Core 2 ] ──> (Sequential / Multi-tasking)\n\n⚙️ Good For:\n- Running OS tasks\n- Business logic\n- Loading datasets\n\nNot ideal for massive AI calculations due to sequential cores.' 
  },
  { 
    term: 'GPU', 
    category: 'AI Hardware & GPU', 
    definition: 'Graphics Processing Unit - highly parallel processor with thousands of cores.', 
    details: '📊 Flow Diagram:\nGPU:  Input Matrix ──> [ Thousands of smaller cores ] ──> (Simultaneous Parallel Math)\n\n⚙️ Good For:\n- Matrix multiplication\n- Parallel floating point operations\n- Deep learning training' 
  },
  { 
    term: 'Why GPU Beats CPU', 
    category: 'AI Hardware & GPU', 
    definition: 'Comparison of compute architectures.', 
    details: '📊 Flow Diagram:\nCPU (Sequential): Task 1 ──> Task 2 ──> Task 3 (Slow for large matrices)\nGPU (Parallel):   Task 1 ──┐\n                  Task 2 ──┼──> [ Simultaneous Cores ] ──> Output (Fast Matrix Math)\n                  Task 3 ──┘\n\n⚔️ CPU vs GPU:\n- CPU: 16 to 64 highly powerful cores executing sequentially.\n- GPU: Thousands of smaller cores executing in parallel.\n\nSince neural networks require billions of repetitive matrix multiplications, parallel GPUs perform them exponentially faster.' 
  },
  { 
    term: 'CUDA', 
    category: 'AI Hardware & GPU', 
    definition: 'NVIDIA\'s computing platform allowing general computations on GPUs.', 
    details: '📊 Flow Diagram:\nPyTorch / Python Code ───> [ CUDA Layer ] ───> GPU Cores (Executes Parallel Math)\n\n💻 Comparison:\n- Without CUDA: GPU only draws graphics and gaming layouts.\n- With CUDA: GPU runs PyTorch code and trains LLM models.' 
  },
  { 
    term: 'CUDA Core', 
    category: 'AI Hardware & GPU', 
    definition: 'Basic compute execution unit inside NVIDIA GPUs.', 
    details: '📊 Flow Diagram:\nInput Equations ───> [ CUDA Core 1 ] [ CUDA Core 2 ] ... [ CUDA Core N ] ───> Output Results\n\n⚙️ Details:\nExecutes basic mathematical computations in parallel. Higher core counts increase parallel throughput.' 
  },
  { 
    term: 'Tensor Core', 
    category: 'AI Hardware & GPU', 
    definition: 'Special hardware blocks in GPUs optimized for matrix operations.', 
    details: '📊 Flow Diagram:\nMatrix A x Matrix B + Matrix C ───(Tensor Core Multi-Accumulate)───> Result Matrix (1 Cycle)\n\n⚙️ Details:\nExecutes matrix multiply-accumulate operations in a single clock cycle, making deep learning calculations far faster than standard CUDA cores.' 
  },
  { 
    term: 'VRAM', 
    category: 'AI Hardware & GPU', 
    definition: 'Video memory built directly on the GPU card.', 
    details: '📊 Flow Diagram:\nSSD (Disk) ──> System RAM (CPU processes) ──> GPU VRAM (Weights & Tensors for GPU)\n\n⚙️ Details:\nStores active model weights, tensors, and batch calculations during execution. For example, an RTX 4090 has 24 GB of VRAM.' 
  },
  { 
    term: 'RAM', 
    category: 'AI Hardware & GPU', 
    definition: 'System memory used to hold temporary working data.', 
    details: '📊 Flow Diagram:\nStorage (SSD/HDD) ──> System RAM ──(Copy)──> GPU VRAM\n\n⚙️ Details:\nStores the raw dataset, system libraries, and operating system processes before transferring them to VRAM.' 
  },
  { 
    term: 'Tensor', 
    category: 'AI Hardware & GPU', 
    definition: 'A multi-dimensional array of numbers used in deep learning.', 
    details: '📊 Flow Diagram:\nScalar (0D: 5) ──> Vector (1D: [5,2]) ──> Matrix (2D: [[5,2],[1,3]]) ──> Tensor (3D+: Multi-Array)\n\n📊 Examples:\n- 0D: Scalar (single number)\n- 1D: Vector (list of numbers)\n- 2D: Matrix (2D grid of numbers)\n- 3D+: Tensor (e.g. RGB images or video streams)' 
  },
  { 
    term: 'FLOPS', 
    category: 'AI Hardware & GPU', 
    definition: 'Floating Point Operations Per Second.', 
    details: '📊 Flow Diagram:\nOperations Counter / Time (Seconds) ───> FLOPS rating\n\n📈 Details:\nMeasures compute execution speeds by counting how many decimal equations a processor can solve per second.' 
  },
  { 
    term: 'TFLOPS', 
    category: 'AI Hardware & GPU', 
    definition: 'Trillions of floating point operations per second.', 
    details: '📊 Flow Diagram:\nTFLOPS = FLOPS / 10^12 (Trillions of equations per second)\n\n📈 Details:\nHigher TFLOPS ratings indicate faster AI training and inference computations.' 
  },
  { 
    term: 'Mixed Precision Training', 
    category: 'AI Hardware & GPU', 
    definition: 'Uses both 16-bit and 32-bit floating points during training.', 
    details: '📊 Flow Diagram:\nFP32 Weights (Accurate) ───(Cast)───> FP16 Activations (Fast & Low VRAM) ───> Backward Pass ───> FP32 Weight Update\n\n⚙️ Benefits:\nUses FP16/BF16 to calculate activations faster (saving VRAM) while keeping FP32 for weights updates to maintain accuracy.' 
  },
  { 
    term: 'FP32', 
    category: 'AI Hardware & GPU', 
    definition: '32-bit single-precision floating-point format.', 
    details: '📊 Flow Diagram:\nFP32:  [ Sign (1b) ] [ Exponent (8b)  ] [ Mantissa (23b) ] (High Precision)\n\n⚙️ Details:\nHigh precision, but takes double the memory storage and runs slower than FP16.' 
  },
  { 
    term: 'FP16', 
    category: 'AI Hardware & GPU', 
    definition: '16-bit half-precision floating-point format.', 
    details: '📊 Flow Diagram:\nFP16:  [ Sign (1b) ] [ Exponent (5b)  ] [ Mantissa (10b) ] (Low VRAM)\n\n⚙️ Details:\nConsumes 50% less memory than FP32, allowing larger models and faster training batches.' 
  },
  { 
    term: 'BF16', 
    category: 'AI Hardware & GPU', 
    definition: 'Brain Floating Point 16-bit format.', 
    details: '📊 Flow Diagram:\nBF16:  [ Sign (1b) ] [ Exponent (8b)  ] [ Mantissa (7b)  ] (Stable Range)\n\n⚙️ Details:\nHas the same dynamic range as FP32, making it much more numerically stable during LLM training than FP16.' 
  },
  { 
    term: 'Quantization', 
    category: 'AI Hardware & GPU', 
    definition: 'Reducing the numeric precision of weights (e.g. FP16 to INT8).', 
    details: '📊 Flow Diagram:\nModel Weights (FP16: 2 bytes) ───(Scale/Clip)───> Compressed Weights (INT8: 1 byte)\n\n⚙️ Benefits:\nAllows running massive LLMs on smaller, lower-VRAM consumer laptops with minimal accuracy loss.' 
  },
  { 
    term: 'Distributed Training', 
    category: 'AI Hardware & GPU', 
    definition: 'Training models across multiple GPUs.', 
    details: '📊 Flow Diagram:\nDataset ──> Split ──┬──> GPU 1 (Processes Part 1) ──┐\n                    └──> GPU 2 (Processes Part 2) ──┼──> Average Gradients ──> Update Weights\n\n⚙️ Details:\nAllows training models that exceed the memory limits of a single GPU by sharing load across network connections.' 
  },
  { 
    term: 'Data Parallelism', 
    category: 'AI Hardware & GPU', 
    definition: 'Splitting dataset chunks across multiple copies of the model.', 
    details: '📊 Flow Diagram:\nData Parallelism:  [ Model copy on GPU 1 ] ──> Batch A  | [ Model copy on GPU 2 ] ──> Batch B\n\n⚙️ Details:\nEach GPU processes a separate data batch and averages gradients during backpropagation updates.' 
  },
  { 
    term: 'Model Parallelism', 
    category: 'AI Hardware & GPU', 
    definition: 'Splitting model layers or parameters across multiple GPUs.', 
    details: '📊 Flow Diagram:\nModel Parallelism: [ Model Part 1 on GPU 1 ] ──> Layer 1-10 | [ Model Part 2 on GPU 2 ] ──> Layer 11-20\n\n⚙️ Details:\nRequired for massive LLMs whose model weights exceed the VRAM limit of a single GPU.' 
  },

  // AI Pipelines
  {
    term: 'AI Pipeline (Real World)',
    category: 'AI Pipelines',
    definition: 'The end-to-end steps to prepare, train, evaluate, and deploy a machine learning model.',
    details: '📊 Real-World Pipeline Flow:\n\n1. Collect Dataset\n      ↓\n2. Clean Data\n      ↓\n3. Handle Missing Values\n      ↓\n4. Remove Outliers\n      ↓\n5. Feature Engineering\n      ↓\n6. Train/Test Split\n      ↓\n7. Select Model\n      ↓\n8. Train Model\n      ↓\n9. Tune Hyperparameters\n      ↓\n10. Validate\n      ↓\n11. Test\n      ↓\n12. Deploy\n      ↓\n13. Inference'
  },
  {
    term: 'LLM Pipeline',
    category: 'AI Pipelines',
    definition: 'The workflow of tokenizing, pre-training, fine-tuning, and deploying Large Language Models.',
    details: '📊 LLM Pipeline Flow:\n\nCollect Documents\n       ↓\nCleaning\n       ↓\nTokenization\n       ↓\nEmbeddings\n       ↓\nPretraining\n       ↓\nFine-Tuning\n       ↓\nEvaluation\n       ↓\nDeployment\n       ↓\nInference'
  },
  {
    term: 'RAG Pipeline',
    category: 'AI Pipelines',
    definition: 'The workflow of chunking context documents, indexing vector stores, and injecting context to ground LLM outputs.',
    details: '📊 RAG Pipeline Flow:\n\nPDFs / Docs\n       ↓\nChunking\n       ↓\nEmbeddings\n       ↓\nVector Database\n       ↓\nRetriever\n       ↓\nRelevant Chunks\n       ↓\nContext Injection\n       ↓\nLLM\n       ↓\nFinal Answer'
  }
];

// Helper to strip all emojis and special character symbols from titles/content
const stripEmojis = (str) => {
  if (!str) return '';
  return str
    .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|\u2692|\u26CF/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const cleanTitle = (title) => {
  return stripEmojis(title).replace(/:$/, '').trim();
};

// Helper to parse term details
const parseDetails = (details) => {
  if (!details) return { diagram: null, sections: [] };

  const paragraphs = details.split(/\n\n+/);
  let diagram = null;
  const sections = [];

  paragraphs.forEach(p => {
    const trimmed = p.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('📊')) {
      const lines = trimmed.split('\n');
      const headerLine = lines[0];
      const title = headerLine.replace(/^📊\s*/, '').replace(/:$/, '').trim();
      const body = lines.slice(1).join('\n');
      diagram = { title, content: body };
    } else {
      const lines = trimmed.split('\n');
      const firstLine = lines[0];
      const colonIdx = firstLine.indexOf(':');

      const isHeader = colonIdx > 0 && colonIdx < 35 && (
        firstLine.charCodeAt(0) > 127 || 
        firstLine.toLowerCase().startsWith('note') || 
        firstLine.toLowerCase().startsWith('process') || 
        firstLine.toLowerCase().startsWith('analogy') ||
        firstLine.toLowerCase().startsWith('comparison') ||
        firstLine.toLowerCase().startsWith('common') ||
        firstLine.toLowerCase().startsWith('fixes') ||
        firstLine.toLowerCase().startsWith('cause') ||
        firstLine.toLowerCase().startsWith('problem') ||
        firstLine.toLowerCase().startsWith('settings') ||
        firstLine.toLowerCase().startsWith('benefits') ||
        firstLine.toLowerCase().startsWith('formula')
      );

      if (isHeader) {
        const title = firstLine.substring(0, colonIdx).trim();
        const firstLineBody = firstLine.substring(colonIdx + 1).trim();
        const remainingBody = lines.slice(1).join('\n').trim();
        
        let content = '';
        if (firstLineBody) {
          content = remainingBody ? firstLineBody + '\n' + remainingBody : firstLineBody;
        } else {
          content = remainingBody;
        }
        
        sections.push({ type: 'section', title, content });
      } else {
        sections.push({ type: 'text', content: trimmed });
      }
    }
  });

  return { diagram, sections };
};

// Helper to determine icon styles
const getSectionStyle = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('why')) {
    return { iconColor: '#d97706', borderColor: '#eab308', iconBg: '#fef3c7' };
  }
  if (lower.includes('example') || lower.includes('source') || lower.includes('prompt')) {
    return { iconColor: '#059669', borderColor: '#10b981', iconBg: '#dcfce7' };
  }
  if (lower.includes('when')) {
    return { iconColor: '#7c3aed', borderColor: '#8b5cf6', iconBg: '#f3e8ff' };
  }
  if (lower.includes('process') || lower.includes('common') || lower.includes('formula')) {
    return { iconColor: '#2563eb', borderColor: '#3b82f6', iconBg: '#dbeafe' };
  }
  if (lower.includes('problem') || lower.includes('cause') || lower.includes('warning') || lower.includes('danger') || lower.includes('issue')) {
    return { iconColor: '#dc2626', borderColor: '#ef4444', iconBg: '#fee2e2' };
  }
  if (lower.includes('goal') || lower.includes('target')) {
    return { iconColor: '#db2777', borderColor: '#ec4899', iconBg: '#fce7f3' };
  }
  if (lower.includes('details') || lower.includes('settings') || lower.includes('benefits') || lower.includes('fixes') || lower.includes('comparison')) {
    return { iconColor: '#0284c7', borderColor: '#0ea5e9', iconBg: '#e0f2fe' };
  }
  return { iconColor: '#4b5563', borderColor: '#94a3b8', iconBg: '#f1f5f9' };
};

const renderIcon = (title, iconColor) => {
  const lower = title.toLowerCase();
  if (lower.includes('why')) {
    return <Lightbulb size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('example') || lower.includes('source') || lower.includes('prompt')) {
    return <BookOpen size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('when')) {
    return <Clock size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('process') || lower.includes('common') || lower.includes('formula')) {
    return <Workflow size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('problem') || lower.includes('cause') || lower.includes('warning') || lower.includes('danger') || lower.includes('issue')) {
    return <AlertTriangle size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('goal') || lower.includes('target')) {
    return <Target size={15} style={{ color: iconColor }} />;
  }
  if (lower.includes('details') || lower.includes('settings') || lower.includes('benefits') || lower.includes('fixes') || lower.includes('comparison')) {
    return <Sliders size={15} style={{ color: iconColor }} />;
  }
  return <Info size={15} style={{ color: iconColor }} />;
};

const renderContent = (content) => {
  const lines = content.split('\n');
  const elements = [];
  let currentGroup = [];
  let isMonospaceGroup = false;

  const pushCurrentGroup = () => {
    if (currentGroup.length === 0) return;
    const text = currentGroup.join('\n');
    if (isMonospaceGroup) {
      elements.push(
        <pre key={elements.length} style={{
          margin: '10px 0',
          padding: '12px 16px',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
          fontSize: '0.82rem',
          color: '#334155',
          overflowX: 'auto',
          lineHeight: '1.5',
          whiteSpace: 'pre'
        }}>
          {text}
        </pre>
      );
    } else {
      elements.push(
        <div key={elements.length} style={{ margin: '8px 0', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-body)', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
          {stripEmojis(text)}
        </div>
      );
    }
    currentGroup = [];
  };

  lines.forEach(line => {
    const isMonoLine = line.includes('|') || 
                       /\[.+\]\s+\[.+\]/.test(line) ||
                       line.includes('──') ||
                       line.includes('├──') ||
                       line.includes('└──') ||
                       /\s{3,}/.test(line);

    if (isMonoLine) {
      if (!isMonospaceGroup && currentGroup.length > 0) {
        pushCurrentGroup();
      }
      isMonospaceGroup = true;
      currentGroup.push(line);
    } else {
      if (isMonospaceGroup && currentGroup.length > 0) {
        pushCurrentGroup();
      }
      isMonospaceGroup = false;
      currentGroup.push(line);
    }
  });

  pushCurrentGroup();
  return elements;
};

// Interactive Flowchart Diagram Components

const ConvergentLayout = ({ inputs, processNode, outputNode }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '10px 0', minWidth: '600px' }}>
      {/* Inputs Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, flexShrink: 0, alignItems: 'center' }}>
        {inputs.map((input, idx) => (
          <div key={idx} className="flow-node-hover" style={{
            backgroundColor: '#f8fafc',
            border: '1.5px solid #cbd5e1',
            borderRadius: '8px',
            padding: '10px 14px',
            fontSize: '0.8rem',
            fontWeight: '700',
            color: '#334155',
            textAlign: 'center',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            flexShrink: 0,
            width: 'fit-content',
            minWidth: 'max-content',
            whiteSpace: 'nowrap'
          }}>
            {stripEmojis(input)}
          </div>
        ))}
      </div>
      
      {/* Connector */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '32px', 
        height: '32px', 
        borderRadius: '50%', 
        backgroundColor: '#eff6ff', 
        border: '1px solid #bfdbfe', 
        color: '#2563eb', 
        flexShrink: 0,
        boxShadow: '0 2px 4px rgba(37, 99, 235, 0.06)'
      }}>
        <ArrowRight size={14} />
      </div>

      {/* Middle Process Node */}
      <div className="flow-node-hover" style={{
        backgroundColor: 'var(--color-primary-bg)',
        border: '2px solid var(--color-primary)',
        borderRadius: '10px',
        padding: '16px 20px',
        fontSize: '0.85rem',
        fontWeight: '800',
        color: 'var(--color-primary)',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(26, 115, 232, 0.1)',
        minWidth: '130px',
        flex: 1.2,
        flexShrink: 0,
        width: 'fit-content',
        minWidth: 'max-content',
        whiteSpace: 'nowrap'
      }}>
        {stripEmojis(processNode)}
      </div>

      {/* Connector */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '32px', 
        height: '32px', 
        borderRadius: '50%', 
        backgroundColor: '#eff6ff', 
        border: '1px solid #bfdbfe', 
        color: '#2563eb', 
        flexShrink: 0,
        boxShadow: '0 2px 4px rgba(37, 99, 235, 0.06)'
      }}>
        <ArrowRight size={14} />
      </div>

      {/* Output Node */}
      <div className="flow-node-hover" style={{
        backgroundColor: '#ecfdf5',
        border: '2px solid #10b981',
        borderRadius: '10px',
        padding: '16px 20px',
        fontSize: '0.85rem',
        fontWeight: '800',
        color: '#064e3b',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)',
        flex: 1.2,
        flexShrink: 0,
        width: 'fit-content',
        minWidth: 'max-content',
        whiteSpace: 'nowrap'
      }}>
        {stripEmojis(outputNode)}
      </div>
    </div>
  );
};

const BranchingMergeLayout = ({ startNode, branches, endNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '10px 0', width: '100%', minWidth: '600px' }}>
      {/* Start Node */}
      <div className="flow-node-hover" style={{
        backgroundColor: '#f8fafc',
        border: '1.5px solid #cbd5e1',
        borderRadius: '8px',
        padding: '12px 18px',
        fontSize: '0.82rem',
        fontWeight: '700',
        color: '#334155',
        textAlign: 'center',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        minWidth: '160px',
        flexShrink: 0,
        width: 'fit-content',
        minWidth: 'max-content',
        whiteSpace: 'nowrap'
      }}>
        {stripEmojis(startNode)}
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '28px', 
        height: '28px', 
        borderRadius: '50%', 
        backgroundColor: '#eff6ff', 
        border: '1px solid #bfdbfe', 
        color: '#2563eb', 
        margin: '-4px 0',
        flexShrink: 0
      }}>
        <ArrowDown size={13} />
      </div>

      {/* Branches row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', width: '100%', flexShrink: 0 }}>
        {branches.map((branch, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#f0f7ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '10px',
            padding: '14px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            flexShrink: 0
          }}>
            {branch.steps.map((step, sIdx) => (
              <React.Fragment key={sIdx}>
                {sIdx > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '4px 0', flexShrink: 0 }}>
                    <ArrowDown size={12} />
                  </div>
                )}
                <span className="flow-node-hover" style={{ 
                  fontSize: '0.78rem', 
                  fontWeight: '700', 
                  color: '#1e3a8a',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d0dbe5',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  flexShrink: 0,
                  width: 'fit-content',
                  minWidth: 'max-content',
                  whiteSpace: 'nowrap'
                }}>
                  {stripEmojis(step)}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {endNode && (
        <>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '28px', 
            height: '28px', 
            borderRadius: '50%', 
            backgroundColor: '#eff6ff', 
            border: '1px solid #bfdbfe', 
            color: '#2563eb', 
            margin: '-4px 0',
            flexShrink: 0
          }}>
            <ArrowDown size={13} />
          </div>
          {/* End Node */}
          <div className="flow-node-hover" style={{
            backgroundColor: '#ecfdf4',
            border: '1.5px solid #10b981',
            borderRadius: '10px',
            padding: '12px 18px',
            fontSize: '0.82rem',
            fontWeight: '800',
            color: '#064e3b',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            minWidth: '180px',
            flexShrink: 0,
            width: 'fit-content',
            minWidth: 'max-content',
            whiteSpace: 'nowrap'
          }}>
            {stripEmojis(endNode)}
          </div>
        </>
      )}
    </div>
  );
};

const OutlierLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '10px 0' }}>
      {/* Stream row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>Data Stream:</span>
        {['$30k', '$35k', '$40k'].map((val, idx) => (
          <div key={idx} className="flow-node-hover" style={{ backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', fontSize: '0.8rem', color: '#475569', fontWeight: '700', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            {val}
          </div>
        ))}
        <div style={{
          backgroundColor: '#fee2e2',
          border: '2px solid #ef4444',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '0.8rem',
          fontWeight: '800',
          color: '#991b1b',
          boxShadow: '0 0 8px rgba(239, 68, 68, 0.15)',
          cursor: 'default',
          flexShrink: 0,
          width: 'fit-content',
          minWidth: 'max-content',
          whiteSpace: 'nowrap'
        }}>
          $10M (Outlier)
        </div>
        <div style={{ backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '6px', padding: '8px 12px', fontSize: '0.8rem', color: '#475569', fontWeight: '700', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
          $45k
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '32px', 
        height: '32px', 
        borderRadius: '50%', 
        backgroundColor: '#fee2e2', 
        border: '1px solid #fca5a5', 
        color: '#ef4444', 
        margin: '-6px 0',
        flexShrink: 0,
        boxShadow: '0 2px 4px rgba(239, 68, 68, 0.06)'
      }}>
        <ArrowDown size={14} />
      </div>

      {/* Action Node */}
      <div className="flow-node-hover" style={{
        backgroundColor: '#fffbeb',
        border: '1.5px solid #fde68a',
        borderRadius: '8px',
        padding: '12px 20px',
        fontSize: '0.8rem',
        fontWeight: '700',
        color: '#92400e',
        textAlign: 'center',
        maxWidth: '320px',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '6px', color: '#b45309', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.03em', flexShrink: 0 }}>
          <AlertTriangle size={13} /> Action Required
        </div>
        <span style={{ fontWeight: '500', fontSize: '0.78rem', color: '#b45309', display: 'block', lineHeight: '1.4', flexShrink: 0 }}>
          Remove, Cap, or Investigate the outlier to prevent skewing model weights.
        </span>
      </div>
    </div>
  );
};

const GpuVsCpuLayout = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', width: '100%', flexWrap: 'wrap', minWidth: '600px' }}>
      {/* CPU Column */}
      <div style={{ flex: 1, border: '1.5px solid var(--border-color)', borderRadius: '10px', padding: '16px', backgroundColor: '#f8fafc', flexShrink: 0 }}>
        <h5 style={{ fontSize: '0.82rem', fontWeight: '800', color: '#475569', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <Cpu size={14} /> CPU (Sequential)
        </h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
          {['Task 1', 'Task 2', 'Task 3'].map((task, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', margin: '2px 0', flexShrink: 0 }}>
                  <ArrowDown size={12} />
                </div>
              )}
              <div className="flow-node-hover" style={{ backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1', padding: '8px 12px', borderRadius: '6px', fontSize: '0.78rem', width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: '700', color: '#475569', flexShrink: 0 }}>{task}</div>
            </React.Fragment>
          ))}
          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '10px', fontWeight: '500', flexShrink: 0 }}>
            Slow for massive matrix algebra
          </div>
        </div>
      </div>

      {/* GPU Column */}
      <div style={{ flex: 1, border: '2.5px solid var(--color-primary)', borderRadius: '10px', padding: '16px', backgroundColor: '#f0f7ff', flexShrink: 0 }}>
        <h5 style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <Zap size={14} /> GPU (Parallel)
        </h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', width: '100%', flexShrink: 0 }}>
            {['Task 1', 'Task 2', 'Task 3'].map((task, idx) => (
              <div key={idx} className="flow-node-hover" style={{ backgroundColor: '#ffffff', border: '1.5px solid #bfdbfe', padding: '6px 8px', borderRadius: '6px', fontSize: '0.72rem', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: '700', color: '#1e3a8a' }}>{task}</div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '2px 0', flexShrink: 0 }}>
            <ArrowDown size={12} />
          </div>
          <div className="flow-node-hover" style={{
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '0.78rem',
            fontWeight: '800',
            textAlign: 'center',
            flexShrink: 0,
            width: 'fit-content',
            minWidth: 'max-content',
            whiteSpace: 'nowrap'
          }}>
            Thousands of Parallel Cores
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '2px 0', flexShrink: 0 }}>
            <ArrowDown size={12} />
          </div>
          <div className="flow-node-hover" style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '8px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800', textAlign: 'center', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Simultaneous Output
          </div>
        </div>
      </div>
    </div>
  );
};

const ParallelismLayout = ({ type }) => {
  const isData = type === 'data';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', minWidth: '600px' }}>
      <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.03em', flexShrink: 0 }}>
        {isData ? 'Splitting batches across GPU copies' : 'Splitting model weights across GPU layers'}
      </div>
      <div style={{ display: 'flex', gap: '16px', width: '100%', flexShrink: 0 }}>
        <div style={{ flex: 1, backgroundColor: '#f0f7ff', border: '1.5px solid #bfdbfe', borderRadius: '8px', padding: '14px', textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '8px', flexShrink: 0 }}>GPU 1</div>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #d0dbe5', borderRadius: '6px', padding: '6px', fontSize: '0.75rem', color: '#334155', fontWeight: '700', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', margin: '0 auto' }}>
            {isData ? 'Model Copy' : 'Layers 1 - 10'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '6px 0', flexShrink: 0 }}>
            <ArrowDown size={12} />
          </div>
          <div className="flow-node-hover" style={{ fontSize: '0.72rem', color: '#1e3a8a', fontWeight: '700', backgroundColor: '#ffffff', padding: '6px', borderRadius: '4px', border: '1px solid #bfdbfe', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', margin: '0 auto' }}>
            {isData ? 'Processes Batch A' : 'Forward Pass Part 1'}
          </div>
        </div>
        
        <div style={{ flex: 1, backgroundColor: '#f0f7ff', border: '1.5px solid #bfdbfe', borderRadius: '8px', padding: '14px', textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '8px', flexShrink: 0 }}>GPU 2</div>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #d0dbe5', borderRadius: '6px', padding: '6px', fontSize: '0.75rem', color: '#334155', fontWeight: '700', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', margin: '0 auto' }}>
            {isData ? 'Model Copy' : 'Layers 11 - 20'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '6px 0', flexShrink: 0 }}>
            <ArrowDown size={12} />
          </div>
          <div className="flow-node-hover" style={{ fontSize: '0.72rem', color: '#1e3a8a', fontWeight: '700', backgroundColor: '#ffffff', padding: '6px', borderRadius: '4px', border: '1px solid #bfdbfe', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap', margin: '0 auto' }}>
            {isData ? 'Processes Batch B' : 'Forward Pass Part 2'}
          </div>
        </div>
      </div>
    </div>
  );
};

const BackpropLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', minWidth: '600px' }}>
      {/* Forward Pass */}
      <div style={{ border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '14px', backgroundColor: '#f8fafc', flexShrink: 0 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.03em', flexShrink: 0 }}>
          <Play size={12} /> Forward Pass
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '10px', flexShrink: 0 }}>
          <span className="flow-node-hover" style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#334155', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Features</span>
          <ArrowRight size={14} style={{ color: '#94a3b8', flexShrink: 0 }} />
          <span className="flow-node-hover" style={{ backgroundColor: '#dbeafe', border: '1.5px solid #3b82f6', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#1d4ed8', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Model</span>
          <ArrowRight size={14} style={{ color: '#94a3b8', flexShrink: 0 }} />
          <span className="flow-node-hover" style={{ backgroundColor: '#fee2e2', border: '1.5px solid #f87171', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#b91c1c', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Loss (Error)</span>
        </div>
      </div>

      {/* Backward Pass */}
      <div style={{ border: '1.5px solid #bfdbfe', borderRadius: '8px', padding: '14px', backgroundColor: '#f0f7ff', flexShrink: 0 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.03em', flexShrink: 0 }}>
          <RefreshCw size={12} /> Backward Pass
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '10px', flexShrink: 0 }}>
          <span className="flow-node-hover" style={{ backgroundColor: '#fee2e2', border: '1.5px solid #f87171', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#b91c1c', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Loss (Error)</span>
          <ArrowRight size={14} style={{ color: '#3b82f6', flexShrink: 0 }} />
          <span className="flow-node-hover" style={{ backgroundColor: '#fef3c7', border: '1.5px solid #f59e0b', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#b45309', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Gradients</span>
          <ArrowRight size={14} style={{ color: '#3b82f6', flexShrink: 0 }} />
          <span className="flow-node-hover" style={{ backgroundColor: '#dcfce7', border: '1.5px solid #10b981', padding: '6px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#15803d', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Update Weights</span>
        </div>
      </div>
    </div>
  );
};

const LinearFlowLayout = ({ nodes, labels }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '16px', 
      padding: '16px 8px', 
      overflowX: 'auto',
      width: '100%',
      justifyContent: nodes.length <= 3 ? 'center' : 'flex-start'
    }}>
      {nodes.map((node, idx) => {
        const isLast = idx === nodes.length - 1;
        const arrowLabel = labels[idx];
        
        return (
          <React.Fragment key={idx}>
            {/* Node Card */}
            <div 
              className="flow-node-hover"
              style={{
                backgroundColor: idx === 0 ? '#f8fafc' : (isLast ? '#ecfdf5' : '#f0f7ff'),
                border: `1.5px solid ${idx === 0 ? '#cbd5e1' : (isLast ? '#10b981' : '#3b82f6')}`,
                borderRadius: '8px',
                padding: '12px 18px',
                fontSize: '0.78rem',
                fontWeight: '700',
                color: idx === 0 ? '#475569' : (isLast ? '#064e3b' : '#1e3a8a'),
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                flexShrink: 0,
                width: 'fit-content',
                minWidth: 'max-content'
              }}
            >
              {stripEmojis(node)}
            </div>

            {/* Connecting Arrow */}
            {!isLast && (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '6px',
                minWidth: arrowLabel ? '90px' : '50px',
                padding: '0 4px',
                flexShrink: 0 
              }}>
                {arrowLabel ? (
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: '800',
                    color: '#2563eb',
                    backgroundColor: '#e0f2fe',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    flexShrink: 0,
                    lineHeight: '1.2'
                  }}>
                    {stripEmojis(arrowLabel)}
                  </span>
                ) : (
                  <div style={{ height: '14px' }} />
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#2563eb',
                  flexShrink: 0
                }}>
                  <ArrowRight size={13} />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const VerticalFlowLayout = ({ steps }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0', width: '100%' }}>
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        return (
          <React.Fragment key={idx}>
            {/* Step Card */}
            <div 
              className="flow-node-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: idx === 0 ? '#f8fafc' : (isLast ? '#ecfdf5' : '#ffffff'),
                border: `1.5px solid ${idx === 0 ? '#cbd5e1' : (isLast ? '#10b981' : '#cbd5e5')}`,
                borderRadius: '8px',
                padding: '10px 16px',
                width: '85%',
                maxWidth: '420px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.01)',
                position: 'relative',
                flexShrink: 0
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: idx === 0 ? '#cbd5e1' : (isLast ? '#d1e7dd' : '#dbeafe'),
                color: idx === 0 ? '#475569' : (isLast ? '#0f5132' : '#1d4ed8'),
                fontSize: '0.72rem',
                fontWeight: '800',
                flexShrink: 0
              }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#334155', flexShrink: 0 }}>
                {stripEmojis(step)}
              </span>
            </div>

            {/* Down Arrow */}
            {!isLast && (
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#2563eb',
                margin: '2px 0',
                flexShrink: 0,
                boxShadow: '0 1px 2px rgba(37, 99, 235, 0.05)'
              }}>
                <ArrowDown size={13} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const parseVerticalFlow = (content) => {
  const lines = content.split('\n');
  const steps = [];
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    if (trimmed === '↓' || trimmed === '│' || trimmed === '|') return;
    const cleaned = trimmed.replace(/^\d+\.\s*/, '');
    steps.push(cleaned);
  });
  return steps;
};

const parseLinearFlow = (content) => {
  const arrowRegex = /──(?:[([]([^)\]\n]+)[)\]])?──>|──>|-->/g;
  const nodes = content.split(/──(?:[([][^)\]\n]+[)\]])?──>|──>|-->/);
  
  const labels = [];
  let match;
  while ((match = arrowRegex.exec(content)) !== null) {
    labels.push(match[1] || '');
  }
  
  const formattedNodes = nodes.map(node => {
    let text = node.trim();
    if (text.startsWith('[') && text.endsWith(']')) {
      text = text.substring(1, text.length - 1).trim();
    }
    return text;
  }).filter(Boolean);
  
  return { nodes: formattedNodes, labels };
};

const InteractiveDiagram = ({ term, diagram }) => {
  if (!diagram) return null;
  
  const content = diagram.content;
  const termLower = term.toLowerCase();

  if (termLower === 'feature' || termLower === 'data collection') {
    const inputs = termLower === 'feature' 
      ? ['Size (1800 sq ft)', 'Bedrooms (3)', 'Age (5 years)']
      : ['Websites', 'APIs', 'Databases'];
    const process = termLower === 'feature' ? 'Model' : 'Gathering Pipeline';
    const output = termLower === 'feature' ? 'Predicted Price: $90,000' : 'Raw Dataset (CSV/JSON/SQL)';
    return <ConvergentLayout inputs={inputs} processNode={process} outputNode={output} />;
  }

  if (termLower === 'weight') {
    return (
      <ConvergentLayout 
        inputs={['Input x1 (w1 = 0.8)', 'Input x2 (w2 = 0.1)', 'Input x3 (w3 = 0.05)']} 
        processNode='Weighted Sum: ∑(w_i * x_i) + b' 
        outputNode='Activation Function' 
      />
    );
  }

  if (termLower === 'loss function') {
    return (
      <ConvergentLayout 
        inputs={['Actual Label (Y)', 'Predicted (Y_pred)']} 
        processNode='Loss Function' 
        outputNode='Loss Score (Error Distance)' 
      />
    );
  }

  if (termLower === 'retriever') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', minWidth: '600px' }}>
        {/* Step 1: Query to Retriever to Docs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
          <div className="flow-node-hover" style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '10px 14px', fontSize: '0.8rem', fontWeight: '700', color: '#334155', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Query (User Question)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', flexShrink: 0 }}>
            <ArrowRight size={13} />
          </div>
          <div className="flow-node-hover" style={{ backgroundColor: 'var(--color-primary-bg)', border: '2px solid var(--color-primary)', borderRadius: '10px', padding: '12px 18px', fontSize: '0.82rem', fontWeight: '800', color: 'var(--color-primary)', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Retriever
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', flexShrink: 0 }}>
            <ArrowRight size={13} />
          </div>
          <div className="flow-node-hover" style={{ backgroundColor: '#ecfdf5', border: '2.5px solid #10b981', borderRadius: '10px', padding: '12px 18px', fontSize: '0.82rem', fontWeight: '800', color: '#064e3b', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Retrieved Docs
          </div>
        </div>

        {/* Step 2: Merge Query & Docs into Generator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '-4px 0', flexShrink: 0 }}>
          <ArrowDown size={14} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div className="flow-node-hover" style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '8px 12px', fontSize: '0.75rem', fontWeight: '700', color: '#475569', textAlign: 'center', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
              Original Query
            </div>
            <div className="flow-node-hover" style={{ backgroundColor: '#ecfdf5', border: '1.5px solid #10b981', borderRadius: '8px', padding: '8px 12px', fontSize: '0.75rem', fontWeight: '700', color: '#064e3b', textAlign: 'center', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
              Retrieved Docs
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', flexShrink: 0 }}>
            <ArrowRight size={13} />
          </div>
          <div className="flow-node-hover" style={{ backgroundColor: '#fdf2f8', border: '2px solid #db2777', borderRadius: '10px', padding: '14px 20px', fontSize: '0.82rem', fontWeight: '800', color: '#9d174d', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Generator (LLM)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', flexShrink: 0 }}>
            <ArrowRight size={13} />
          </div>
          <div className="flow-node-hover" style={{ backgroundColor: '#f0fdf4', border: '2.5px solid #15803d', borderRadius: '10px', padding: '14px 20px', fontSize: '0.82rem', fontWeight: '800', color: '#14532d', flexShrink: 0, width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
            Grounded Answer
          </div>
        </div>
      </div>
    );
  }

  if (termLower === 'batch') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%', minWidth: '600px' }}>
        {/* Start Node */}
        <div className="flow-node-hover" style={{
          backgroundColor: '#f8fafc',
          border: '1.5px solid #cbd5e1',
          borderRadius: '8px',
          padding: '12px 18px',
          fontSize: '0.82rem',
          fontWeight: '700',
          color: '#334155',
          textAlign: 'center',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          minWidth: '180px',
          flexShrink: 0,
          width: 'fit-content',
          minWidth: 'max-content',
          whiteSpace: 'nowrap'
        }}>
          Dataset: 1000 samples
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '28px', 
          height: '28px', 
          borderRadius: '50%', 
          backgroundColor: '#eff6ff', 
          border: '1px solid #bfdbfe', 
          color: '#2563eb', 
          margin: '-4px 0',
          flexShrink: 0
        }}>
          <ArrowDown size={13} />
        </div>

        {/* Batches row */}
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '16px', width: '100%', flexShrink: 0 }}>
          {['Batch 1 (100 samples)', 'Batch 2 (100 samples)', 'Batch 10 (100 samples)'].map((batchText, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
              backgroundColor: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              borderRadius: '10px',
              padding: '14px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              flexShrink: 0
            }}>
              <span className="flow-node-hover" style={{ 
                fontSize: '0.78rem', 
                fontWeight: '700', 
                color: '#334155',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '6px 10px',
                borderRadius: '6px',
                flexShrink: 0,
                width: 'fit-content',
                minWidth: 'max-content',
                whiteSpace: 'nowrap'
              }}>
                {batchText}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', margin: '6px 0', flexShrink: 0 }}>
                <ArrowDown size={12} />
              </div>
              <span className="flow-node-hover" style={{ 
                fontSize: '0.75rem', 
                fontWeight: '700', 
                color: '#1e3a8a',
                backgroundColor: '#eff6ff',
                border: '1.5px solid #bfdbfe',
                padding: '6px 10px',
                borderRadius: '6px',
                flexShrink: 0,
                width: 'fit-content',
                minWidth: 'max-content',
                whiteSpace: 'nowrap'
              }}>
                Update Weights
              </span>
            </div>
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '28px', 
          height: '28px', 
          borderRadius: '50%', 
          backgroundColor: '#ecfdf5', 
          border: '1px solid #a7f3d0', 
          color: '#059669', 
          margin: '-4px 0',
          flexShrink: 0
        }}>
          <ArrowDown size={13} />
        </div>

        {/* End Node */}
        <div className="flow-node-hover" style={{
          backgroundColor: '#ecfdf4',
          border: '2px solid #10b981',
          borderRadius: '10px',
          padding: '12px 18px',
          fontSize: '0.82rem',
          fontWeight: '800',
          color: '#064e3b',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          flexShrink: 0,
          width: 'fit-content',
          minWidth: 'max-content',
          whiteSpace: 'nowrap'
        }}>
          Complete 10 batches = 1 Epoch
        </div>
      </div>
    );
  }

  if (termLower === 'attention mechanism') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '10px', width: '100%', minWidth: '500px' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px', 
          justifyContent: 'center', 
          backgroundColor: '#f8fafc', 
          padding: '16px', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0', 
          width: '100%' 
        }}>
          {["The", "cat", "sat", "on", "the", "mat", "because", "it", "was", "tired"].map((word, idx) => {
            const isCat = word.toLowerCase() === 'cat';
            const isIt = word.toLowerCase() === 'it';
            return (
              <span 
                key={idx} 
                className="flow-node-hover"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: isCat || isIt ? '800' : '500',
                  color: isCat ? '#b91c1c' : (isIt ? '#2563eb' : '#475569'),
                  backgroundColor: isCat ? '#fee2e2' : (isIt ? '#dbeafe' : 'transparent'),
                  border: isCat ? '1px solid #f87171' : (isIt ? '1px solid #60a5fa' : '1px solid transparent'),
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'default'
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', backgroundColor: '#f0f7ff', border: '1.5px solid #bfdbfe', borderRadius: '8px', padding: '10px 16px', width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1e3a8a' }}>Attention weight: 0.92</span>
          <ArrowRight size={14} style={{ color: '#3b82f6' }} />
          <span style={{ fontSize: '0.78rem', fontWeight: '600', color: '#2563eb', width: 'fit-content', minWidth: 'max-content', whiteSpace: 'nowrap' }}>Connects "it" to "cat"</span>
        </div>
      </div>
    );
  }

  if (termLower === 'outlier') {
    return <OutlierLayout />;
  }

  if (termLower === 'why gpu beats cpu') {
    return <GpuVsCpuLayout />;
  }

  if (termLower === 'validation') {
    return (
      <BranchingMergeLayout 
        startNode="Dataset Split" 
        branches={[
          { steps: ['Train Split (70%)', 'Fit weights to train model'] },
          { steps: ['Validation Split (15%)', 'Tune hyperparameters'] }
        ]}
        endNode="Final Trained Model"
      />
    );
  }

  if (termLower === 'distributed training') {
    return (
      <BranchingMergeLayout 
        startNode="Dataset Split" 
        branches={[
          { steps: ['GPU 1 processes Part 1'] },
          { steps: ['GPU 2 processes Part 2'] }
        ]}
        endNode="Average Gradients & Update Weights"
      />
    );
  }

  if (termLower === 'hybrid search') {
    return (
      <BranchingMergeLayout 
        startNode="User Query" 
        branches={[
          { steps: ['Lexical Search (BM25)', 'Match exact keywords'] },
          { steps: ['Vector Search (Cosine)', 'Match semantic concepts'] }
        ]}
        endNode="Reciprocal Rank Fusion (Fusion Top Docs)"
      />
    );
  }

  if (termLower === 'data parallelism') {
    return <ParallelismLayout type="data" />;
  }

  if (termLower === 'model parallelism') {
    return <ParallelismLayout type="model" />;
  }

  if (termLower === 'backpropagation') {
    return <BackpropLayout />;
  }

  const isVertical = content.includes('↓') || content.includes('│') || content.includes('|') && content.includes('\n');
  if (isVertical) {
    const steps = parseVerticalFlow(content);
    return <VerticalFlowLayout steps={steps} />;
  }

  const linearData = parseLinearFlow(content);
  if (linearData.nodes.length > 1) {
    return <LinearFlowLayout nodes={linearData.nodes} labels={linearData.labels} />;
  }

  return (
    <pre style={{
      margin: 0,
      padding: '12px 16px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      fontFamily: 'Consolas, Monaco, monospace',
      fontSize: '0.82rem',
      color: '#334155',
      overflowX: 'auto',
      whiteSpace: 'pre'
    }}>
      {content}
    </pre>
  );
};

export default function TerminologyView({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState(terminologyData[0]);

  const parsedDetails = useMemo(() => {
    return parseDetails(selectedTerm?.details);
  }, [selectedTerm]);

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(terminologyData.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter terms
  const filteredTerms = useMemo(() => {
    return terminologyData.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.details.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Select the first term in list if the current selected term is filtered out
  React.useEffect(() => {
    if (filteredTerms.length > 0 && !filteredTerms.some(t => t.term === selectedTerm?.term)) {
      setSelectedTerm(filteredTerms[0]);
    }
  }, [filteredTerms, selectedTerm]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 65px)', backgroundColor: 'var(--bg-main)' }}>
      <style>{`
        .term-sidebar-item {
          padding: 12px 16px;
          cursor: pointer;
          border-left: 4px solid transparent;
          transition: all var(--transition-fast);
          border-bottom: 1px solid #f1f5f9;
        }
        .term-sidebar-item:hover {
          background-color: #f8fafc;
        }
        .term-sidebar-item.active {
          background-color: var(--color-primary-bg);
          border-left-color: var(--color-primary);
        }
        .category-pill {
          padding: 4px 10px;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .details-container {
          animation: slideUp 0.25s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .flow-node-hover {
          transition: all var(--transition-fast) !important;
          cursor: default;
        }
        .flow-node-hover:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(26, 115, 232, 0.15) !important;
          border-color: var(--color-primary) !important;
        }
      `}</style>


      {/* Top Header Panel */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={onBack}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', marginRight: '4px' }}
          >
            <ArrowLeft size={18} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={22} style={{ color: 'var(--color-primary)' }} />
            <h1 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              Course Terminology
            </h1>
          </div>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {terminologyData.length} Terms cataloged
        </div>
      </div>

      {/* Main Split Layout */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Terms List Sidebar */}
        <div style={{ 
          width: '320px', 
          backgroundColor: '#ffffff', 
          borderRight: '1px solid var(--border-color)', 
          display: 'flex', 
          flexDirection: 'column', 
          flexShrink: 0 
        }}>
          {/* Search container */}
          <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ position: 'relative', width: '100%', marginBottom: '12px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 36px',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid transparent',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category selection */}
            <select
              value={activeCategory}
              onChange={e => setActiveCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                color: 'var(--text-primary)',
                fontSize: '0.82rem',
                fontWeight: '600',
                outline: 'none'
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
              ))}
            </select>
          </div>

          {/* Scrolling Term names list */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {filteredTerms.length > 0 ? (
              filteredTerms.map(item => {
                const isActive = selectedTerm?.term === item.term;
                
                // Compact tag colors
                const tagBg = item.category.includes('RAG') ? '#e0f2fe' : 
                              item.category.includes('LLM') ? '#fdf2f8' :
                              item.category.includes('Prompt') ? '#faf5ff' :
                              item.category.includes('AI/ML') ? '#ecfdf5' : 
                              item.category.includes('Pipelines') ? '#fef3c7' : '#f0f9ff';
                const tagColor = item.category.includes('RAG') ? '#0369a1' : 
                                item.category.includes('LLM') ? '#be185d' :
                                item.category.includes('Prompt') ? '#6b21a8' :
                                item.category.includes('AI/ML') ? '#047857' : 
                                item.category.includes('Pipelines') ? '#b45309' : '#0284c7';
                
                return (
                  <div 
                    key={item.term}
                    className={`term-sidebar-item${isActive ? ' active' : ''}`}
                    onClick={() => setSelectedTerm(item)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ 
                        fontWeight: '700', 
                        fontSize: '0.88rem',
                        color: isActive ? 'var(--color-primary)' : 'var(--text-primary)' 
                      }}>
                        {item.term}
                      </span>
                    </div>
                    <span className="category-pill" style={{ backgroundColor: tagBg, color: tagColor, fontSize: '0.62rem', padding: '2px 6px' }}>
                      {item.category.split(' ')[0]}
                    </span>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: '32px 16px', textAlignment: 'center', color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center' }}>
                No terms match search.
              </div>
            )}
          </div>
        </div>

        {/* Right Details content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
          {selectedTerm ? (
            <div className="details-container" style={{ maxWidth: '750px', margin: '0 auto' }}>
              
              {/* Term card header */}
              <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px', backgroundColor: '#ffffff', borderLeft: '5px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="category-pill" style={{ 
                    backgroundColor: 'var(--color-primary-bg)', 
                    color: 'var(--color-primary)',
                    padding: '4px 10px'
                  }}>
                    {selectedTerm.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Layers size={12} /> Vocabulary
                  </span>
                </div>
                
                <h2 style={{ fontSize: '2rem', fontWeight: '850', color: '#1e293b', marginBottom: '16px' }}>
                  {selectedTerm.term}
                </h2>
                
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: '1.55', fontWeight: '500' }}>
                  {selectedTerm.definition}
                </p>
              </div>

              {/* Flowchart Card */}
              {parsedDetails.diagram && (
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  padding: '24px',
                  marginBottom: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)'
                }}>
                  {/* Title Bar */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '20px', 
                    borderBottom: '1px solid #f1f5f9', 
                    paddingBottom: '12px' 
                  }}>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-primary-bg)',
                      color: 'var(--color-primary)'
                    }}>
                      <Network size={16} />
                    </span>
                    <span style={{ 
                      color: '#1e293b', 
                      fontSize: '0.88rem', 
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {cleanTitle(parsedDetails.diagram.title) || 'Process Flowchart'}
                    </span>
                  </div>
                  {/* Interactive Layout Component */}
                  <div style={{
                    backgroundColor: '#fafcff', // very soft blue tint
                    border: '1px dashed #bfdbfe',
                    borderRadius: '8px',
                    padding: '20px',
                    overflowX: 'auto'
                  }}>
                    <InteractiveDiagram term={selectedTerm.term} diagram={parsedDetails.diagram} />
                  </div>
                </div>
              )}


              {/* Term detailed explanation cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {parsedDetails.sections.map((item, idx) => {
                  if (item.type === 'section') {
                    const styleMeta = getSectionStyle(item.title);
                    const titleCleaned = cleanTitle(item.title);
                    
                    return (
                      <div 
                        key={idx} 
                        style={{ 
                          backgroundColor: '#ffffff',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border-color)',
                          borderLeft: `5px solid ${styleMeta.borderColor}`,
                          padding: '24px',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.01)',
                          transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                        }}
                      >
                        <h4 style={{ 
                          margin: '0 0 14px 0', 
                          fontSize: '0.95rem', 
                          fontWeight: '800', 
                          color: '#1e293b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em'
                        }}>
                          <span style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            backgroundColor: styleMeta.iconBg,
                            flexShrink: 0
                          }}>
                            {renderIcon(item.title, styleMeta.iconColor)}
                          </span>
                          {titleCleaned}
                        </h4>
                        
                        <div>
                          {renderContent(item.content)}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div 
                        key={idx} 
                        style={{ 
                          backgroundColor: '#ffffff',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border-color)',
                          padding: '20px 24px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                      >
                        {renderContent(item.content)}
                      </div>
                    );
                  }
                })}
              </div>

            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-muted)' }}>
              Select a terminology definition from the list.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
