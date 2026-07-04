# RAG and Vector Databases Quick Reference

## Retrieval-Augmented Generation (RAG)
RAG is an AI framework for improving the quality of LLM-generated responses by grounding the model on external sources of knowledge.
- **Why RAG?** Solves hallucination problems, allows LLMs to access private/company data, and keeps answers up-to-date without expensive re-training.
- **Pipeline:** User Query -> Retriever searches Knowledge Base -> Relevant docs retrieved -> Added to LLM Prompt -> LLM Generates final answer.

## Knowledge Base & Documents
- **What to store:** FAQs, Return Policies, Product Manuals, and Business Data.
- **What NOT to store:** Sensitive PII like user passwords.

## Embeddings & Vector Databases
- **Embeddings:** Numerical representation of text data, allowing the AI to understand semantic meaning rather than just exact keyword matches.
- **Vector DB:** Specialized databases (like Pinecone, Weaviate, Milvus) that store embeddings.
- **Similarity Search:** Finding text with similar semantic meaning, not just exact keyword matches.
