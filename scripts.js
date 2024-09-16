document.addEventListener('DOMContentLoaded', function() {
    const recommendButton = document.getElementById('recommend-button');
    const submitFeedbackButton = document.getElementById('submit-feedback');
    const jobDescriptionTextarea = document.getElementById('job-description');
    const recommendationResultDiv = document.getElementById('recommendation-result');
    const userEmailInput = document.getElementById('user-email');
    const userFeedbackTextarea = document.getElementById('user-feedback');

    recommendButton.addEventListener('click', function() {
        const jobDescription = jobDescriptionTextarea.value.trim();
        if (jobDescription) {
            // Simulate server response
            simulateRecommendation(jobDescription);
        } else {
            recommendationResultDiv.innerHTML = 'Please enter a job description.';
        }
    });

    submitFeedbackButton.addEventListener('click', function() {
        const email = userEmailInput.value.trim();
        const feedback = userFeedbackTextarea.value.trim();
        if (email && feedback) {
            // Simulate feedback submission
            submitFeedback(email, feedback);
        } else {
            alert('Please provide both email and feedback.');
        }
    });

    function simulateRecommendation(description) {
        // Simulated response
        const simulatedResponse = {
            closestDescription: 'We found a matching job description...',
            similarity: '85%',
            jobTitle: 'Business Intelligence Developer'
        };

        recommendationResultDiv.innerHTML = `
            <p>Closest Description found: ${simulatedResponse.closestDescription}</p>
            <p>Similarity: ${simulatedResponse.similarity}</p>
            <p>Job Position Recommended: ${simulatedResponse.jobTitle}</p>
        `;
    }

    function submitFeedback(email, feedback) {
        // Simulate feedback submission
        console.log(`Feedback from ${email}: ${feedback}`);
        alert('Thank you for your feedback!');
        userEmailInput.value = '';
        userFeedbackTextarea.value = '';
    }
});
