const base = import.meta.env.BASE_URL;

const projects = [
  {
    slug: 'safetransact-fraud-detection',
    title: 'SafeTransact: Intelligent Financial Fraud Detection System',
    shortTitle: 'Fraud Detection in Credit Card Transactions',
    description:
      'Developed a machine learning fraud detection system using XGBoost, Random Forest, LightGBM, and more. Applied SMOTE resampling and SHAP for model explainability. Integrated the final model into a web interface using Python and Flask for real-time predictions.',
    image: `${base}images/Project 1.png`,
    images: [
      `${base}images/UI design 1.png`,
      `${base}images/UI design 2.png`,
      `${base}images/UI design 3.png`,
    ],
    tech: ['Python', 'R', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'SHAP', 'Flask', 'SMOTE'],
    reverse: false,

    // --- Full detail page content ---
    introduction: `In today's digital world, online financial transactions have become extremely common. However, with this growth comes a major challenge — financial fraud. Detecting fraudulent transactions accurately and quickly is critical for banks, fintech companies, and online platforms.

SafeTransact was developed to address this challenge by using machine learning techniques to detect fraudulent transactions in real time. The system combines data science, machine learning, and web technologies to create a complete fraud detection solution that is both accurate and user-friendly.`,

    goals: [
      'Detect fraudulent financial transactions using machine learning',
      'Compare multiple ML models and select the most accurate one',
      'Deploy the best model in a real-world web application',
      'Provide a simple interface for users to analyze transactions instantly',
      'Improve fraud detection accuracy with advanced techniques',
      'Handle real-world transaction data effectively',
      'Provide both batch and real-time detection capabilities',
    ],

    coreConcept: `The system works through a streamlined pipeline: users enter transaction details, the data is processed and cleaned, the machine learning model analyzes the transaction, and the system predicts whether the transaction is Fraudulent or Legitimate.

As described in the system flow — users make transactions, the system analyzes patterns, and a fraud alert is generated if the transaction appears suspicious.`,

    techStack: {
      languages: ['Python (Main development language)', 'R (Used for model comparison)'],
      mlModels: ['Random Forest', 'Gradient Boosting', 'XGBoost', 'LightGBM', 'Logistic Regression', 'Support Vector Machine (SVM)'],
      dataLibraries: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Pandas & NumPy', 'SMOTE (Handling class imbalance)'],
      webDev: ['Flask (Backend framework)', 'HTML / CSS (Frontend UI)'],
      tools: ['Joblib (Model saving & loading)', 'Browser-based interface (Chrome/Edge/Firefox)'],
    },

    architecture: [
      { layer: 'User Interface Layer', detail: 'Users input transaction details via web application' },
      { layer: 'Processing Layer', detail: 'Data preprocessing, feature engineering, and model prediction' },
      { layer: 'Machine Learning Layer', detail: 'Trained model evaluates fraud probability using ensemble methods' },
      { layer: 'Output Layer', detail: 'Displays prediction result — Fraud or Legitimate — with confidence score' },
    ],

    methodology: [
      { phase: 'Data Handling', items: ['Data exploration & visualization', 'Cleaning & preprocessing', 'Feature engineering'] },
      { phase: 'Handling Imbalance', items: ['Applied SMOTE to balance fraud vs non-fraud data'] },
      { phase: 'Model Development', items: ['Trained 6 different ML models', 'Tuned hyperparameters using GridSearchCV'] },
      { phase: 'Evaluation', items: ['ROC-AUC analysis', 'Precision, Recall & F1-Score', '5-Fold Cross-Validation', 'SHAP explainability analysis'] },
      { phase: 'Deployment', items: ['Best model deployed using Flask web application'] },
    ],

    features: [
      'Real-time fraud detection',
      'High accuracy using advanced ML models',
      'Supports large transaction datasets',
      'Secure data handling',
      'User-friendly web interface',
      'Model comparison and evaluation',
      'Scalable architecture for high-frequency transactions',
    ],

    challenges: [
      'Handling imbalanced datasets (very few fraud cases vs legitimate)',
      'Selecting the best model among six candidates',
      'Ensuring real-time performance and low latency',
      'Integrating ML model seamlessly with web application',
    ],

    achievements: [
      'Successfully built an end-to-end fraud detection system',
      'Compared multiple ML models and selected the best performer',
      'Developed a fully working web application',
      'Achieved high model performance using proper evaluation techniques',
      'Implemented a complete ML pipeline — from data to deployment',
    ],

    futureImprovements: [
      'Add real-time streaming data integration',
      'Improve model accuracy with deep learning approaches',
      'Add user authentication and analytics dashboards',
      'Deploy on cloud infrastructure (AWS/Azure)',
    ],

    conclusion: `SafeTransact is a complete, practical solution for financial fraud detection. It demonstrates how machine learning can be applied to solve real-world problems efficiently. The system is technically feasible, cost-effective (fully open-source), and designed for scalability and security.

This project is highly relevant for banks, fintech companies, and payment platforms looking to enhance their fraud prevention capabilities. It showcases a powerful combination of Machine Learning, Data Engineering, and Web Development — not just a model, but a complete intelligent system ready for real-world application.`,
  },
  {
    slug: 'conversational-bi-chatbot',
    title: 'Conversational BI Chatbot',
    shortTitle: 'Conversational BI Chatbot',
    description:
      'Built a Sinhala\u2013English AI chatbot for querying business data using natural language. Developed with FlowiseAI, LangChain, and Google AI embeddings. Enables real-time data querying from CSV and PDF datasets, providing instant responses to analytical questions.',
    image: `${base}images/coding.gif`,
    images: [],
    tech: ['FlowiseAI', 'LangChain', 'Google AI', 'Python'],
    reverse: true,

    introduction: `Built a Sinhala\u2013English AI chatbot for querying business data using natural language. Developed with FlowiseAI, LangChain, and Google AI embeddings. Enables real-time data querying from CSV and PDF datasets, providing instant responses to analytical questions.`,
    goals: [],
    coreConcept: '',
    techStack: null,
    architecture: [],
    methodology: [],
    features: [
      'Sinhala and English language support',
      'Natural language querying of business data',
      'CSV and PDF data source integration',
      'Real-time analytical responses',
    ],
    challenges: [],
    achievements: [],
    futureImprovements: [],
    conclusion: '',
  },
];

export default projects;
