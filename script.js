document.getElementById('recommendButton').addEventListener('click', function() {
    const jobDescription = document.getElementById('jobDescription').value;
    
    // Simulating a recommendation process
    const output = `Closest Description found for "${jobDescription}":\nJob Position Recommended: Software Developer\nSimilarity: 85%`;
    
    document.getElementById('output').innerText = output;
});
