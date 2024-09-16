function recommendJob() {
    const description = document.getElementById('description').value;
    
    if (description) {
        // For now, just display a simple message.
        // In real implementation, you would call your backend API here.
        document.getElementById('output').innerText = 'Recommendation logic is not yet implemented.';
    } else {
        document.getElementById('output').innerText = 'Please enter a job description.';
    }
}

function refresh() {
    document.getElementById('description').value = '';
    document.getElementById('output').innerText = '';
}
