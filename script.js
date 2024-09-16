// Initialize lemmatizer and tokenizer
const natural = window.natural;
const { Tokenizer, WordTokenizer } = natural;
const tokenizer = new WordTokenizer();
const stopwords = natural.stopwords;

function tokenizeAndLemmatize(text) {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(text);
    const filteredWords = words.filter(word => !stopwords.includes(word.toLowerCase()));

    // Implement lemmatization (simple example, not as sophisticated as nltk's)
    // For demonstration purposes, we'll skip lemmatization
    return filteredWords;
}

// Dummy TF-IDF vectorizer
function computeTFIDF(query, documents) {
    // Placeholder for real TF-IDF computation
    // You should use a library or implement a proper TF-IDF calculation
    return documents.map(doc => Math.random()); // Random values for demo
}

function recommendJob(description, jobDescriptions) {
    const queryTokens = tokenizeAndLemmatize(description);
    const similarities = computeTFIDF(queryTokens, jobDescriptions);

    const maxIndex = similarities.indexOf(Math.max(...similarities));
    return {
        similarity: similarities[maxIndex],
        description: jobDescriptions[maxIndex]
    };
}

function getRecommendation() {
    const description = document.getElementById('description').value;
    const jobDescriptions = [
        "Software Engineer with experience in Python and machine learning.",
        "Data Scientist with strong background in statistics and data analysis.",
        "Web Developer skilled in JavaScript and front-end frameworks.",
        // Add your job descriptions here
    ];
    const result = recommendJob(description, jobDescriptions);

    document.getElementById('jobTitle').innerText = "Recommended Job:";
    document.getElementById('jobDescription').innerText = result.description;
    document.getElementById('similarity').innerText = `Similarity: ${result.similarity.toFixed(2)}`;
}
