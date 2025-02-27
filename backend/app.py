from flask import Flask, render_template, request, jsonify
import re
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import language_tool_python

app = Flask(__name__, template_folder="../templates", static_folder="../static")

# Initialize NLP tools
nltk.download("vader_lexicon")
sia = SentimentIntensityAnalyzer()
grammar_tool = language_tool_python.LanguageTool("en-US")


def remove_punctuation(text):
    return re.sub(r'[^\w\s]', '', text)


def extract_emails(text):
    return re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)


def convert_to_password(text):
    if len(text) < 3:
        return "Too short!"
    return text.capitalize()[:3] + "@" + text[3:] + "1"


def analyze_sentiment(text):
    score = sia.polarity_scores(text)["compound"]
    if score > 0.2:
        return "Positive 😊"
    elif score < -0.2:
        return "Negative 😞"
    else:
        return "Neutral 😐"


def check_grammar(text):
    matches = grammar_tool.check(text)
    errors = [{"error": match.message, "suggestion": match.replacements} for match in matches]
    corrected_text = grammar_tool.correct(text)  # Auto-corrected version of the text
    return errors, corrected_text


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data.get("text", "")
    actions = data.get("actions", [])

    result = {"original_text": text, "modified_text": text}

    if "UPPERCASE" in actions:
        result["modified_text"] = text.upper()
    if "lowercase" in actions:
        result["modified_text"] = text.lower()
    if "Remove Punctuation" in actions:
        result["modified_text"] = remove_punctuation(result["modified_text"])
    if "Extract Emails" in actions:
        result["emails"] = extract_emails(text)
    if "Convert to Password" in actions:
        result["modified_text"] = convert_to_password(text)
    if "Sentiment Analysis" in actions:
        result["sentiment"] = analyze_sentiment(text)
    if "Grammar Check" in actions:
        grammar_issues, corrected_text = check_grammar(text)
        result["grammar"] = grammar_issues
        result["corrected_text"] = corrected_text  # Returning corrected text

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
