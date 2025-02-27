TextIQ - AI-powered Text Analyzer 📝
TextIQ is a smart and user-friendly text processing tool that enhances productivity by providing multiple text transformation features in a seamless, modern UI. Designed for efficiency, TextIQ simplifies text analysis with AI-powered grammar correction, sentiment analysis, and more.

✨ Features
✔ Text Formatting: Convert text to UPPERCASE or lowercase
✔ Punctuation Removal: Clean up unnecessary punctuation marks
✔ Email Extraction: Detect and extract email addresses from text
✔ Secure Password Generator: Convert text into a strong password
✔ AI-powered Sentiment Analysis: Determine the sentiment of the text (Positive, Neutral, Negative)
✔ Grammar Check & Correction: Detect grammar mistakes and suggest corrections
✔ Light & Dark Mode Toggle: Enhance readability based on user preference

🛠️ Tech Stack
🔹 Frontend: HTML, CSS, JavaScript
🔹 Backend: Flask (Python)
🔹 AI Features: Natural Language Processing (NLP) for grammar check & sentiment analysis
🔹 Deployment: Local Flask server

📂 Folder Structure
bash
Copy
Edit
TextIQ/
│── backend/
│   ├── app.py            # Flask backend server
│   ├── requirements.txt  # Dependencies
│
├── static/
│   ├── script.js         # JavaScript for interactivity
│   ├── style.css         # Styles for UI
│   ├── logo-light.png    # Light mode logo
│   ├── logo-dark.png     # Dark mode logo
│
├── templates/
│   ├── index.html        # Main UI file
│
└── venv/                 # Virtual environment (optional)
🚀 Getting Started
Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR-GITHUB-USERNAME/TextIQ.git
cd TextIQ
Step 2: Set Up a Virtual Environment (Optional but Recommended)
bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate     # On Windows
Step 3: Install Required Dependencies
bash
Copy
Edit
pip install -r backend/requirements.txt
Step 4: Run the Application
bash
Copy
Edit
python backend/app.py
The server will start at http://127.0.0.1:5000/

💡 How to Use
1️⃣ Enter or paste text into the input box.
2️⃣ Choose a transformation (Uppercase, Lowercase, etc.).
3️⃣ Click "Analyze" to process the text.
4️⃣ View results in the output section.
5️⃣ Toggle between Light & Dark Mode for a better experience.

📌 Push Project to GitHub
Once everything is working, follow these steps to push the project to GitHub:

bash
Copy
Edit
git init
git add .
git commit -m "Initial commit for TextIQ"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/TextIQ.git
git push -u origin main
Replace YOUR-GITHUB-USERNAME with your actual GitHub username.

