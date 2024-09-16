document.addEventListener('DOMContentLoaded', (event) => {
    const recommendBtn = document.getElementById('recommendBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
    
    const descriptionField = document.getElementById('description');
    const outputField = document.getElementById('output');
    const feedbackEmailField = document.getElementById('user-email');
    const feedbackTextField = document.getElementById('feedback-text');
    const feedbackDisplayField = document.getElementById('feedbackDisplay');
    
    recommendBtn.addEventListener('click', () => {
        const description = descriptionField.value;
        // Call the recommendation API or function
        fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description })
        })
        .then(response => response.json())
        .then(data => {
            outputField.value = `Closest Description found: ${data.description}\nSimilarity: ${data.similarity}\nJob Position Recommended: ${data.title}`;
        })
        .catch(error => console.error('Error:', error));
    });

    refreshBtn.addEventListener('click', () => {
        descriptionField.value = '';
        outputField.value = '';
    });

    submitFeedbackBtn.addEventListener('click', () => {
        const email = feedbackEmailField.value;
        const feedback = feedbackTextField.value;
        
        fetch('/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, feedback })
        })
        .then(response => response.json())
        .then(() => {
            feedbackEmailField.value = '';
            feedbackTextField.value = '';
        })
        .catch(error => console.error('Error:', error));
    });

    // Load feedbacks on page load
    fetch('/feedbacks')
        .then(response => response.json())
        .then(data => {
            const feedbacks = data.feedbacks.map(feedback => `Email: ${feedback.email}\nFeedback: ${feedback.feedback}`).join('\n\n');
            feedbackDisplayField.value = feedbacks;
        })
        .catch(error => console.error('Error:', error));
});
