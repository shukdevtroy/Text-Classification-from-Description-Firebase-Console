# Job Description Recommendation System

## Overview

This project is a job description recommendation system that utilizes Natural Language Processing (NLP) techniques to find and recommend the closest matching job descriptions from a dataset based on a given input job description. The system uses TF-IDF (Term Frequency-Inverse Document Frequency) vectorization and cosine similarity to measure the similarity between job descriptions. 

Additionally, it integrates Firebase for feedback submission and job data storage, providing an interactive user experience through widgets in a Jupyter notebook environment (e.g., Google Colab).

## Features

- **TF-IDF Vectorization**: Converts job descriptions into numerical vectors for similarity computation.
- **Cosine Similarity Calculation**: Finds the most similar job description to the input.
- **Interactive Widgets**: Provides a user interface for input and output using `ipywidgets`.
- **Firebase Integration**: Allows users to submit feedback and store job data.

## Setup and Installation

### Prerequisites

- Python 3.x
- Google Colab or Jupyter Notebook
- Necessary Python libraries (see `Requirements` section)

### Required Libraries

To run this project, you will need the following Python libraries. Install them using pip:

```bash
pip install pandas numpy nltk scikit-learn ipywidgets firebase-admin
```

### Setup

1. **Clone the Repository**

   Clone the repository to your local machine or Google Colab environment.

   ```bash
   git clone https://github.com/shukdevtroy/Text-Classification-from-Description-Firebase-Console.git
   cd Text-Classification-from-Description-Firebase-Console
   ```

2. **Upload Files**

   Ensure you have the following files uploaded to your Google Drive or working directory:

   - Job description dataset (`Job Description.XLSX`)
   - Firebase service account key JSON file (`feedback-job-recommendation-firebase-adminsdk-n6zig-3863863b60.json`)

   Update the paths in the code accordingly.

3. **Run the Notebook**

   Open the Jupyter Notebook or Google Colab and run the cells sequentially. Make sure you mount your Google Drive if you're using Google Colab:

   ```python
   from google.colab import drive
   drive.mount('/content/drive/')
   ```

## Usage

1. **Run Initialization Cells**

   Execute the cells to import libraries, load the dataset, and initialize the models. This includes setting up the TF-IDF vectorizer, saving the models, and initializing Firebase.

2. **Interact with Widgets**

   Use the interactive widgets to:
   
   - Enter a job description.
   - Get job position recommendations based on similarity.
   - Submit feedback.

3. **Feedback and Job Data Submission**

   - Provide feedback through the feedback form.
   - Job descriptions and recommended job titles are saved to Firebase for analysis.

## Code Walkthrough

- **Data Preparation**: Handles the preprocessing of job descriptions including tokenization, lemmatization, and removal of stopwords and punctuation.
- **Model Training**: Uses TF-IDF vectorization to convert job descriptions into numerical vectors.
- **Job Description Matching**: Computes cosine similarity to find the most similar job descriptions.
- **Firebase Integration**: Handles feedback submission and job data storage.
- **Interactive Widgets**: Provides an interactive interface for user input and output.

## Firebase Configuration

1. **Firebase Setup**

-   Ensure that Firebase is configured with your project. The service account JSON file should be correctly set up and accessible.
-   Go to [Firebase Console Sign in](https://console.firebase.google.com/u/0/)
-   Click Create a project
-   After that click on `Build` and then `Realtime Database`
   

2. **Database Rules**

-   ![Example Image](https://github.com/shukdevtroy/Text-Classification-from-Description-Firebase-Console/blob/main/images/Configuration%20of%20Firebase%20console.png)
-   

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact:

- **Email**: shukdevdatta@gmail.com
- **GitHub**: [yourusername](https://github.com/shukdevtroy)
- **WhatsApp**: [Click here to chat](https://wa.me/+8801719296601)

---

Feel free to adjust the paths, filenames, and contact details as per your specific project setup and requirements.

