// Initialize Firebase
const firebaseConfig = {    
    type: "service_account",
    project_id: "feedback-job-recommendation",
    private_key_id: "3863863b606d1fa3e631c497361d9baa4418c81b",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCbw+A1zyeuAjPJ\nkRdvzI0X5o/Wru/T/ZAcK1a2jp5st1TvKLYa0nJe7JpfoFcxX49swUchVt93bI/h\nrdUlx179CMOAQ9lVRDZzcSNjTG59i7YCeLoZPmElRAw1TvfPtVzUBbxGXe/M9olF\nMM04pbodK4eNV3lH3W58rIVWpWcmrcnxkKyc28h3D9yLOUR9k76zA3X99nfkm2/j\nXPyVqr3G8tca1VPq+ZuS1au5SPIuKxwVKazNoT9ak6u741DmX1Dc+cylvzpc8Rr0\nLQI09HYNhx1gZGSfizm3B1eb77CzjE210w1RjI/rRlODKgLIhZvnNmzaTropc0BJ\nyDxsKBdDAgMBAAECggEAA7csd13meD1KNYIO4+SJ7pxoRZ4XpMOcIa7/MFrT/9Ko\n0EYRf731QFehfJ115vzD1ZEBlYVksf6hORoQlUErtyishg10txbNZl84H7ZNvml2\nr2CE2TxNoevgq8ijRaK4zzGx1Gelx8Ny1ZPZRANEAhUeyc19MZ5Du3xfk9151+vs\nymKW1m9eiiom+/tOk3qFH1EF5OlhlSOMOhsz0e6ulJue8er/Plsqzbr032cp/Bac\ngHHQLfX2jAZOQb092lwhHCM+acOr6ZI940FqiEDhlZv7CRL8gHY6mzHp0TGsKU39\neNp+FBR5mniVD2rALHNkkI8FlNgbnj0Jwg8GTl1ZyQKBgQDSAi/zmKmtq2U+3cpS\n7gDNhSGr8Q6N5L9Si6+V8wD5+WFT4qUPidDe2LYSmLUA6Ro7AdNSgCldeBqhX2oz\nyLz1yz4fSae1xsnXsZxdnJc1S9CSchUYOw9szI5//C/25DcZlI6ImuQHKw3k3eun\n3kthxDDtjDnZWt41+MX1FiXImwKBgQC94J0fSeed7JY9cDZ5TmaMCiZVSs6Ym7M+\nEaelIfeC+t6GZba7Wx1bbQFShl2xb3kGIWDJIZ8QmnPKXqp4ySNBvjjYEnNLNo6O\nObfAlpq5r06PRUe3eMUiiaRfbQfuPAstBeFbCMGazOiamwx50Gpem7l/33DYBDb9\nKdxYYDoyeQKBgAFW5jtlg9+JslGeVIYG4pZs/PP9y5v4E4hRP8NzE1SE1KwWS/s3\nY8+oDjE8LBtfYT1zG4fxLVJdS74vv5uo8huXOkQ00g8Ev5DSny6xqv06CJCGjb/j\n0ItfGqGSWDP47KkLG4Wfh0jMa4BEMhaWAmETQUSimlPakoRBm/GePIt1AoGBAJBQ\nrrtAPbVvQ0WRCyYp65EWicob4GhnNtW/L284INpBeG4n0roV53s8n1us2nto4VBC\ngEB+uFozOjyetOy224A1Zxj69Pw+jB0XS00qapEk6A3Gt1qAhTzZ5r/Mq9Fre4cN\nyBmbzyKsCUKxA8t2F9Kug0/ocOkOUwkaDupwwOrpAoGAGSi24v6l/Xn0gspH5SD/\nX0lRAv2CEq5sGBoFLfJKTC5mV8g2t0m+eulM19sWOj9Zm91aOdVR12lGiJDf7gBL\nvoeZ5M10phCn5v33ivBf2VtltKaIW/P8VknlhX9DDxlV1LyU3gojqyqM8GDv7QZy\nCn0FrgdHzBXIkwvk3Bv9mWc=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-n6zig@feedback-job-recommendation.iam.gserviceaccount.com",
    client_id: "108047627447645108973",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    databaseURL: "https://feedback-job-recommendation-default-rtdb.firebaseio.com/",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n6zig%40feedback-job-recommendation.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};

firebase.initializeApp(firebaseConfig);

const feedbackRef = firebase.database().ref('/feedback');

document.getElementById('recommendButton').addEventListener('click', function() {
    const jobDescription = document.getElementById('jobDescription').value;

    // Simulate a recommendation process
    const output = `Closest Description found for "${jobDescription}":\nJob Position Recommended: Software Developer\nSimilarity: 85%`;
    
    document.getElementById('output').innerText = output;
});

document.getElementById('submitFeedbackButton').addEventListener('click', function() {
    const userEmail = document.getElementById('userEmail').value;
    const userFeedback = document.getElementById('userFeedback').value;

    if (userEmail && userFeedback) {
        feedbackRef.push({
            user_email: userEmail,
            feedback: userFeedback
        });
        alert("Feedback submitted!");
        document.getElementById('userEmail').value = "";
        document.getElementById('userFeedback').value = "";
        loadFeedback();
    } else {
        alert("Both User Email and Feedback are required.");
    }
});

function loadFeedback() {
    feedbackRef.once('value', function(snapshot) {
        let feedbacks = snapshot.val();
        let feedbackText = "";
        
        for (let key in feedbacks) {
            feedbackText += `Email: ${feedbacks[key].user_email}\nFeedback: ${feedbacks[key].feedback}\n------------------------\n`;
        }
        
        document.getElementById('feedbackDisplay').value = feedbackText || "No feedback available.";
    });
}

// Load feedback on page load
loadFeedback();
