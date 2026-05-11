# PrescriptionReader

AI-powered handwritten prescription digitizer for Indian healthcare.

Converts messy handwritten prescriptions into **structured, validated digital records** in seconds using lightweight AI models.

## Live Demo

**Try it here:**  
[PrescriptionReader Live Demo](https://prescription-sable.vercel.app/?utm_source=chatgpt.com)

---

## Problem

Millions of handwritten prescriptions are written daily in India, causing:

- Medication misreads
- Dosage confusion
- Pharmacist interpretation errors
- Patient safety risks

PrescriptionReader solves this by instantly converting handwritten prescriptions into clean digital records.

---

## Features

- Handwritten prescription OCR
- Structured medicine extraction
- Dosage + frequency detection
- Drug validation (Indian + OpenFDA database)
- Confidence scoring
- PDF export
- Graceful failure handling

---

## How It Works

**Pipeline**

Upload Image  
→ OpenCV Preprocessing  
→ TrOCR OCR  
→ Llama 3.2 Extraction  
→ Drug Validation  
→ Structured Output + PDF Export

---

## Tech Stack

### Backend
- Python 3.11
- FastAPI
- SQLAlchemy
- OpenCV
- ReportLab

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS

### AI Models
- TrOCR-large
- Llama 3.2 3B

### Infrastructure
- Docker
- SQLite

---

## Performance

- **Processing Time:** 5–18 sec
- **Cost per Prescription:** ~$0.001
- **Medicine Accuracy:** 72–84%

---

## Run Locally

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Docker

```bash
docker-compose up --build
```

Frontend → `localhost:3000`  
Backend → `localhost:8000`

---

## Why This Project?

PrescriptionReader proves that **efficient weak models + strong engineering** can build affordable healthcare AI.

---

## License

MIT License
