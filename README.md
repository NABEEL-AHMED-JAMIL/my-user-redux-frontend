## Overview: Processing Stock Data with RAG and Ollma3

This project implements a Retrieval-Augmented Generation (RAG) approach to process and analyze stock data using Ollma3.

### What is RAG?

RAG combines **retrieval** of relevant data with **generation** of natural language responses. Instead of relying solely on pretrained models, it retrieves contextually relevant stock data to provide accurate and informed answers.

### How It Works

1. **Upload Stock Data**

   Users upload stock data files (CSV, Parquet formats).

2. **Data Processing**

   The system parses the files and extracts meaningful financial data.

3. **Vector Embedding**

   Extracted data points are converted into vector embeddings using Ollma3 embedding models.

4. **Vector Storage**

   These embeddings are stored in a vector database for efficient similarity search.

5. **Query & Retrieval**

   User queries are transformed into embeddings and used to retrieve the most relevant stock data vectors.

6. **Answer Generation**

   The retrieved data is passed as context to OpenAI’s GPT model, which generates detailed, context-aware natural language responses.

### Benefits

- Provides accurate and up-to-date insights based on real stock data.
- Supports complex user queries leveraging vector similarity search.
- Flexible and scalable for various stock data formats and volumes.

### Technologies Used

- Angular (Frontend UI)
- Spring Boot (Backend processing)
- Ollma3 API (Embeddings and GPT generation)
- PostgreSQL + pgvector (Vector database)
- CSV and Parquet parsers

---

Feel free to reach out if you need assistance setting up the data pipeline or integrating the OpenAI API.
