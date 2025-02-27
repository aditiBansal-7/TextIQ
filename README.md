# TextIQ

**TextIQ** is a modern and user-friendly **Text Analyzer** web application designed to process text efficiently. It offers various functionalities such as case conversion, punctuation removal, email extraction, password generation, sentiment analysis, and grammar checking.

## 🚀 Features

- **Case Conversion:** Convert text to UPPERCASE or lowercase.
- **Punctuation Removal:** Remove all punctuation from text.
- **Email Extraction:** Extract email addresses from the given text.
- **Password Generator:** Convert text into a strong password.
- **Sentiment Analysis:** Detects whether the text conveys a positive, negative, or neutral sentiment.
- **Grammar Check:** Identifies grammatical issues and suggests corrections.
- **Dark/Light Mode Toggle:** Switch between dark and light themes for better user experience.

## 🎨 UI & UX

- **Minimalistic and Responsive Design**
- **Color Theme Support:**
  - Light Mode: Blue Buttons (`#1c6dc2`)
  - Dark Mode: Orange Buttons (`#ff914d`)
- **Dynamic Logo Switching** based on the selected theme.

## 📂 Folder Structure

TextIQ/ │── backend/ │ ├── app.py # Flask backend │ ├── requirements.txt # Dependencies │ │── static/ │ ├── images/ # Stores the logo and other assets │ ├── script.js # Frontend JavaScript │ ├── style.css # Styling for the UI │ │── templates/ │ ├── index.html # Main frontend file │ │── venv/ # Virtual environment (optional) │── README.md # Project documentation

bash
Copy
Edit

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/aditiBansal-7/TextIQ.git
cd TextIQ
2️⃣ Create & Activate Virtual Environment
bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
3️⃣ Install Dependencies
bash
Copy
Edit
pip install -r backend/requirements.txt
4️⃣ Run the Application
bash
Copy
Edit
python backend/app.py
The app will be accessible at: http://127.0.0.1:5000

🖼️ Screenshots
Light Mode	Dark Mode
🔗 Live Demo
(If deployed, add the link here)
