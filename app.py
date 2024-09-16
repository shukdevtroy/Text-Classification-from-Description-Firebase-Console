import streamlit as st
import joblib
import numpy as np
import string
from sklearn.metrics.pairwise import cosine_similarity
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from nltk.corpus import wordnet
from nltk import pos_tag
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk


import pandas as pd

# Load your job data
dfp = pd.read_excel('Job Description.XLSX')  # Update with the correct path to your data file

# Download necessary NLTK data
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('wordnet')
nltk.download('punkt_tab')
nltk.download('averaged_perceptron_tagger_eng')

# Define the tokenizer function
stopwords_list = stopwords.words('english')
lemmatizer = WordNetLemmatizer()


def my_tokenizer(doc):
    words = word_tokenize(doc)
    pos_tags = pos_tag(words)
    non_stopwords = [w for w in pos_tags if not w[0].lower() in stopwords_list]
    non_punctuation = [
        w for w in non_stopwords if not w[0] in string.punctuation
    ]
    lemmas = []
    for w in non_punctuation:
        if w[1].startswith('J'):
            pos = wordnet.ADJ
        elif w[1].startswith('V'):
            pos = wordnet.VERB
        elif w[1].startswith('N'):
            pos = wordnet.NOUN
        elif w[1].startswith('R'):
            pos = wordnet.ADV
        else:
            pos = wordnet.NOUN
        lemmas.append(lemmatizer.lemmatize(w[0], pos))
    return lemmas


# Load models
tfidf_vectorizer = TfidfVectorizer(tokenizer=my_tokenizer)
loaded_tfidf_vectorizer = joblib.load('tfidf_vectorizer_model.joblib')
loaded_tfidf_matrix = joblib.load('tfidf_matrix_model.joblib')

def recommend_job(description):
    query_vect = loaded_tfidf_vectorizer.transform([description])
    similarity = cosine_similarity(query_vect, loaded_tfidf_matrix)
    max_similarity = np.argmax(similarity, axis=None)
    return similarity[0, max_similarity], dfp.iloc[max_similarity][
        'Job Description'], dfp.iloc[max_similarity]['Job Title']


# Streamlit app
st.title("Job Recommendation System")

# Job description input and recommendation
description = st.text_area("Enter Job Description:")
if st.button("Get Recommendation"):
    if description:
        similarity, closest_description, job_title = recommend_job(description)
        st.write(f"Closest Description found: {closest_description}")
        st.write(f"Similarity: {similarity:.2%}")
        st.write(f"Job Position Recommended: {job_title}")

    else:
        st.write("Please enter a description.")


