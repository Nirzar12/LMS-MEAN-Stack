from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Function to create PDF
def create_pdf(filename, title, content):
    c = canvas.Canvas(filename, pagesize=letter)
    width, height = letter
    c.setFont("Helvetica", 12)

    # Add Title
    c.setFont("Helvetica-Bold", 16)
    c.drawString(100, height - 100, title)

    # Add Content
    c.setFont("Helvetica", 12)
    text_object = c.beginText(100, height - 140)
    text_object.setTextOrigin(100, height - 140)
    text_object.textLines(content)
    c.drawText(text_object)

    c.save()

# Course content for each chapter
course_content = [
    {
        "title": "Introduction to Machine Learning and its Applications",
        "content": """
        Machine Learning (ML) is a subset of artificial intelligence that allows computers to learn from data
        without explicit programming. ML algorithms improve automatically as they are exposed to more data. 
        Applications of ML include recommendation systems, speech recognition, image processing, autonomous vehicles, and more.
        """
    },
    {
        "title": "Supervised Learning: Concepts and Algorithms",
        "content": """
        Supervised learning is a type of machine learning where the model is trained on labeled data. 
        The algorithm learns from input-output pairs to make predictions. Common algorithms include Linear Regression, 
        Decision Trees, and Support Vector Machines (SVM).
        """
    },
    {
        "title": "Unsupervised Learning: Clustering and Dimensionality Reduction",
        "content": """
        Unsupervised learning deals with unlabeled data and aims to find hidden patterns or intrinsic structures.
        Common techniques include clustering (e.g., K-means) and dimensionality reduction (e.g., PCA).
        These techniques are widely used in customer segmentation and feature extraction.
        """
    },
    {
        "title": "Model Evaluation and Hyperparameter Tuning",
        "content": """
        Model evaluation is the process of assessing the performance of a machine learning model. 
        Techniques like cross-validation, confusion matrix, and ROC curves help assess accuracy, precision, recall, etc.
        Hyperparameter tuning is the process of adjusting the parameters of the model to improve performance using techniques like grid search.
        """
    },
    {
        "title": "Deep Learning and Neural Networks: An Overview",
        "content": """
        Deep learning is a subset of machine learning that uses neural networks with many layers (also known as deep neural networks).
        These models excel at tasks like image and speech recognition. Techniques include Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs).
        """
    }
]

# Generate PDFs for each chapter
for i, chapter in enumerate(course_content, start=1):
    filename = f"ch-{i}.pdf"
    create_pdf(filename, chapter["title"], chapter["content"])

print("PDFs generated successfully.")
