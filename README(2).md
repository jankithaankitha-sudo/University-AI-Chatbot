# 🎓 University AI Chatbot

> An intelligent RAG-powered assistant for university students, faculty, and staff — delivering instant, accurate answers from real institutional documents.

**Chanakya University · 
Prompt Engineering Project · 
J Ankitha (25PG00168)**

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Purpose & Motivation](#-purpose--motivation)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [RAG System](#-rag-system)
- [System Prompt](#-system-prompt)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Video Presentation](#-video-presentation)
- [Future Enhancements](#-future-enhancements)

---

## 📌 Project Overview

The **University AI Chatbot Assistant** is an AI-powered conversational agent built to serve students, faculty, and staff at a university. It leverages a **Retrieval-Augmented Generation (RAG)** architecture to provide accurate, context-aware responses by grounding answers in real institutional documents such as:

- Syllabi and course catalogs
- Timetables and exam schedules
- Campus facility guides
- Admission procedures and university policies

By combining large language models with an institutional knowledge base, the chatbot delivers reliable information in real time — improving student engagement and reducing the workload on university support staff.

---

## 💡 Purpose & Motivation

University students often struggle to find quick answers to common academic and administrative questions. Traditional FAQ pages and portals are static, hard to navigate, and frequently outdated.

This chatbot solves that by:

- ✅ Providing **instant, accurate responses** based on real university documents
- ✅ Allowing **knowledge base updates** without retraining the AI model
- ✅ Offering a **conversational interface** that feels natural and intuitive
- ✅ **Reducing the workload** on administrative staff for repetitive queries

---

## ✨ Features

| Feature | Description |
|---|---|
| 🗣️ Natural Language Q&A | Ask questions in plain language about any university topic |
| 📚 RAG-Powered Retrieval | Fetches answers from uploaded institutional documents |
| 🔍 Semantic Search | Searches across course catalogs, schedules, and policies |
| 📎 Source Citations | Responses include references to source documents |
| 📄 Multi-Format Support | Ingests PDF, DOCX, and TXT knowledge base files |
| 🔄 Easy Knowledge Updates | Update the knowledge base without any model retraining |
| 🌐 Web Chat Interface | Clean, browser-based chat UI |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Language Model | LLM (e.g., GPT / open-source equivalent) |
| RAG Framework | LangChain / LlamaIndex |
| Vector Store | FAISS / ChromaDB |
| Embeddings | OpenAI Embeddings / Sentence Transformers |
| Backend | Python / FastAPI |
| Frontend | HTML, CSS, JavaScript |
| Document Formats | PDF, DOCX, TXT |

---

## 🏗️ System Architecture

```
User Query
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│                    Chat Interface (Web UI)               │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Query Processing & Embedding               │
└─────────────────────────┬───────────────────────────────┘
                          │
             ┌────────────▼────────────┐
             │      Vector Store       │  ◄── University Documents
             │  (Semantic Search)      │       (PDF, DOCX, TXT)
             └────────────┬────────────┘
                          │ Top-K Relevant Chunks
                          ▼
┌─────────────────────────────────────────────────────────┐
│         LLM  +  Retrieved Context  =  Response          │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
                 Accurate, Grounded Answer
```

---

## 🔁 RAG System

**Retrieval-Augmented Generation (RAG)** is an AI architecture that combines three steps:

1. **Retrieval** — Searches the custom knowledge base for relevant information
2. **Augmentation** — Injects the retrieved context into the prompt
3. **Generation** — Uses an LLM to generate an accurate, grounded response

### Why RAG for this project?

One of the major advantages of a RAG system is that you can **update or modify the knowledge source** (documents, files, databases) at any time **without changing or retraining the model**. This provides far greater flexibility compared to fine-tuning.

For a university setting, this is critical — exam schedules, course offerings, and policies change every semester. With RAG, the knowledge base can be updated instantly, keeping the chatbot accurate with zero model retraining.

---

## 🤖 System Prompt

The chatbot is guided by the following system prompt:

```
You are a helpful and knowledgeable University AI Assistant.

Your role is to assist students, faculty, and staff with queries related to
academics, campus life, administrative processes, and university policies.

You must answer questions ONLY using the information available in the
retrieved university documents. Do not generate or assume information
that is not available in the knowledge base.

If information is unavailable, clearly inform the user and suggest
checking official university sources.

You have access to official university documents including:
  - Course catalogs and syllabi
  - Exam schedules and timetables
  - University rules and regulations
  - Hostel and campus facility information
  - Fee structures and scholarship details
```

---

## 🚀 Usage

1. Navigate to the chat interface in your browser
2. Type any university-related question in the chat box
3. The bot retrieves relevant content from the knowledge base and generates an accurate response
4. Ask follow-up questions naturally — the chatbot maintains conversation context

### Example Queries

```
"What is the MCA fee structure?"
"What hostel facilities are available on campus?"
"What are the placement opportunities for MCA students?"
"When is the next exam schedule released?"
"What are the admission requirements for this course?"
```

---

## 📁 Project Structure

UNIVERSITY-AI-RAG-CHATBOT/
│
├── backend/
│   │
│   ├── data/
│   │   └── vectors.json
│   │
│   ├── node_modules/
│   │
│   ├── .env
│   ├── app.js
│   ├── embed.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── README.md
│
└── university.txt



## 🎥 Video Presentation

The video presentation covers:

- **Application Overview** — What the chatbot does and who it serves
- **System Prompt** — How the LLM is instructed to behave
- **RAG System Implementation** — Architecture walkthrough and tech choices
- **How RAG Helps** — Why retrieval improves accuracy
- **Why RAG Was Chosen** — Advantages over fine-tuning for a university use case

📺 **Watch here:** [OneDrive Video Link](https://1drv.ms/v/c/1124208da2e8b094/IQDr1kEk3NAIQZVrObs6w-QUAT9R_kq_oNaqeo4CgWgSKoE?e=oPq0ZH)

📂 **Google Drive:** [Download Project Files](https://drive.google.com/uc?id=1ecGYygC2WlTn4H-A6lorzAmmmsA1NeYC&export=download)

---

## 🔮 Future Enhancements

- 🌍 **Multi-language support** for regional students
- 🎤 **Voice input/output interface**
- 🔗 **Integration with university ERP/Portal APIs**
- 🔐 **Student login** for personalized responses (results, attendance)
- 🖥️ **Admin dashboard** for easy knowledge base management
- 📱 **Mobile app version**

---

