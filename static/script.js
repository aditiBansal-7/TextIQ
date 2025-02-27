document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const analyzeBtn = document.getElementById("analyze-btn");
    const textInput = document.getElementById("text-input");
    const originalText = document.getElementById("original-text");
    const correctedText = document.getElementById("corrected-text");
    const grammarIssues = document.getElementById("grammar-issues");
    const options = document.querySelectorAll(".option-btn");

    let selectedOption = null;

    // Function to update colors based on theme
    function updateThemeColors() {
        if (body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Dark Mode";
            analyzeBtn.style.backgroundColor = "#1c6dc2"; // Blue in light mode
        } else {
            themeToggle.textContent = "☀️ Light Mode";
            analyzeBtn.style.backgroundColor = "#ff914d"; // Orange in dark mode
        }
    }

    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");
        updateThemeColors();
    });

    // Initial Theme Colors Setup
    updateThemeColors();

    // Selecting an Option
    options.forEach(button => {
        button.addEventListener("click", function () {
            options.forEach(btn => btn.classList.remove("selected")); // Remove existing selections
            button.classList.add("selected"); // Highlight selected option
            selectedOption = button.textContent.trim(); // Store selected option
        });
    });

    // Analyze Button Click Event
    analyzeBtn.addEventListener("click", function () {
        const inputText = textInput.value.trim();

        if (!inputText) {
            alert("Please enter some text to analyze.");
            return;
        }

        if (!selectedOption) {
            alert("Please select an option before analyzing.");
            return;
        }

        // Prepare data for backend
        const requestData = {
            text: inputText,
            option: selectedOption.toLowerCase().replace(/\s+/g, "_")
        };

        // Sending request to Flask backend
        fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            // Display original and corrected text
            originalText.textContent = data.original_text || inputText;
            correctedText.textContent = data.corrected_text || inputText;

            // Display grammar issues if available
            if (data.grammar && data.grammar.length > 0) {
                grammarIssues.innerHTML = "<strong>Grammar Issues:</strong><ul>";
                data.grammar.forEach(issue => {
                    grammarIssues.innerHTML += `<li>${issue.error} → Suggestion: "${issue.suggestion.join(", ")}"</li>`;
                });
                grammarIssues.innerHTML += "</ul>";
            } else {
                grammarIssues.innerHTML = "<strong>No grammar issues found.</strong>";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        });
    });
});
