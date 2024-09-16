document.getElementById('recommendButton').addEventListener('click', function() {
    const description = document.getElementById('jobDescription').value;

    fetch('https://feedback-job-recommendation-default-rtdb.firebaseio.com/job_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobDescription: description })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('recommendationOutput').innerText = 
            `Closest Description found: ${data.closest_description}\n` +
            `Similarity: ${data.similarity}\n` +
            `Job Position Recommended: ${data.job_title}`;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('refreshButton').addEventListener('click', function() {
    document.getElementById('jobDescription').value = '';
    document.getElementById('recommendationOutput').innerText = '';
});

document.getElementById('submitFeedbackButton').addEventListener('click', function() {
    const email = document.getElementById('userEmail').value;
    const feedback = document.getElementById('userFeedback').value;

    fetch('https://feedback-job-recommendation-default-rtdb.firebaseio.com/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_email: email, feedback: feedback })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('feedbackDisplay').innerText = 'Thank you for your feedback!';
    })
    .catch(error => console.error('Error:', error));
});

// Function to load feedback
function loadFeedback() {
    fetch('https://feedback-job-recommendation-default-rtdb.firebaseio.com/feedback')
    .then(response => response.json())
    .then(data => {
        let feedbackText = '';
        data.forEach(feedback => {
            feedbackText += `Email: ${feedback.user_email}\nFeedback: ${feedback.feedback}\n\n`;
        });
        document.getElementById('feedbackDisplay').innerText = feedbackText || 'No feedback available.';
    })
    .catch(error => console.error('Error:', error));
}

// Load feedback on page load
loadFeedback();

