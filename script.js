document.getElementById('recommendBtn').addEventListener('click', function() {
    var description = document.getElementById('description').value;
    var output = document.getElementById('output');

    if (!description) {
        output.value = 'Please enter a description of the job.';
        return;
    }

    // Simulated recommendation logic
    var closestDescription = 'Simulated closest description for: ' + description;
    var similarity = Math.random().toFixed(2); // Simulated similarity score

    output.value = `Closest Description found: ${closestDescription}\n` +
                   `Similarity: ${similarity * 100}%\n` +
                   'Job Position Recommended: Simulated Job Title';
});
