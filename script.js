const jobDescriptions = [
    "Software Engineer with experience in Python and machine learning.",
    "Data Scientist with strong background in statistics and data analysis.",
    "Web Developer skilled in JavaScript and front-end frameworks.",
    // Add your job descriptions here
];

function getRecommendation() {
    const description = document.getElementById('description').value;
    const result = recommendJob(description, jobDescriptions);
    
    document.getElementById('jobTitle').innerText = "Recommended Job:";
    document.getElementById('jobDescription').innerText = result.description;
    document.getElementById('similarity').innerText = `Similarity: ${result.similarity.toFixed(2)}`;
}
