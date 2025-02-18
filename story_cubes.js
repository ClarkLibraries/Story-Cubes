// Story cube categories and options
const categories = {
    "Research Process & Information Seeking": [
        "Initiation", "Selection", "Exploration", "Formulation", 
        "Collection", "Presentation", "Assessment", "Seeking information", 
        "Exploring sources", "Documenting research"
    ],
    "Source Credibility & Evaluation": [
        "Source evaluation", "Authority", "Purpose", "Publication & format", 
        "Relevance", "Date of publication", "Author credibility", 
        "Intended audience", "Scholarly vs popular", "Fact-checking"
    ],
    "Bias, Ethics & Digital Challenges": [
        "Algorithm bias", "Digital inequality", "Marginalization", 
        "Systemic bias", "Inclusive metadata", "Ethical use", "Reputation", 
        "Institutional bias", "Corporate sponsorship", "Misinformation"
    ],
    "Emotions": [
        "Excitement (from Joy)", "Grief (from Sadness)", "Anxiety (from Fear)", 
        "Frustration (from Anger)", "Amazement (from Surprise)", "Disgust", 
        "Affection (from Love)", "Remorse (from Guilt)", 
        "Humiliation (from Shame)", "Optimism (from Hope)"
    ]
};

// Function to roll a story cube
function rollCube(category) {
    const options = categories[category];
    return options[Math.floor(Math.random() * options.length)];
}

// Function to roll all four cubes
function rollStoryCubes() {
    let result = {};
    for (let category in categories) {
        result[category] = rollCube(category);
    }
    return result;
}

// Run the function and display the result
console.log("Your Story Cubes Roll:");
console.log(rollStoryCubes());
