// All site content lives here. Edit this file to update the homepage —
// no component changes are needed for new publications, talks, etc.

export const profile = {
  name: "Iftitahu Ni'mah",
  nickname: 'Tita',
  role: 'Research Scientist',
  photo: 'images/profile.png',
  tagline: 'Deep Learning · NLP · Natural Language Generation',
  location: 'Bandung, Indonesia',
  affiliations: [
    {
      text: 'Research Scientist, Center for Data and Information Sciences,',
      org: 'BRIN',
      url: 'https://www.brin.go.id/',
    },
    {
      text: 'PhD candidate, Data and AI cluster,',
      org: 'Eindhoven University of Technology (TU/e)',
      url: 'https://www.tue.nl/en/',
    },
  ],
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WtqgzVgAAAAJ&hl=en' },
    { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Iftitahu-Nimah' },
    { label: 'GitHub', url: 'https://github.com/inimah' },
    { label: 'X / Twitter', url: 'https://x.com/IftitahuNimah' },
  ],
};

export const bio = [
  "Iftitahu Ni'mah (Tita) is a research scientist at BRIN, Indonesia. She is also a PhD candidate at Eindhoven University of Technology with the research topic “Regularizing and Evaluating Deep Learning for Controllable and Resource Constrained NLP”, supervised by Prof. Dr. Mykola Pechenizkiy (promotor), and Dr. Vlado Menkovski and Dr. Meng Fang (co-promotors).",
  'Her current research interests centre on (1) Machine Learning for NLP and (2) Evaluating and Analyzing NLP Systems.',
];

export const interests = [
  {
    title: 'Open-domain learning',
    text: 'Learning, adapting, and generalizing in an open domain setting.',
  },
  {
    title: 'Low-resource NLP',
    text: 'Learning effectively and/or efficiently under low resource constraints, and representation disparity in the context of language and data scarcity.',
  },
  {
    title: 'Controllable & diverse generation',
    text: 'Diversifying Natural Language Generation and building controllable language models.',
  },
  {
    title: 'Evaluation & interpretability',
    text: 'Evaluating language models, attention networks, and explanation methods for NLP systems.',
  },
];

// `me` marks the author string to highlight in the author list.
export const me = 'Nimah, I.';

export const publications = [
  {
    title: 'A Simple Contrastive Embedding Framework for Low-Resource Fake News Detection',
    authors: 'Nimah, I., et al.',
    venue: 'Neural Computing and Applications',
    short: 'NCA',
    type: 'Journal',
    year: 2025,
    date: '2025-08-05',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/article/10.1007/s00521-025-11467-0' },
      { label: 'DOI', url: 'https://doi.org/10.1007/s00521-025-11467-0' },
    ],
  },
  {
    title: 'Can BERT Learn Evidence-Aware Representation for Low Resource Fake News Detection?',
    authors: 'Wijayanti, R. and Nimah, I.',
    venue: '2024 International Conference on Computer, Control, Informatics and its Applications (IC3INA), Bandung, Indonesia',
    short: 'IC3INA',
    type: 'Conference',
    year: 2024,
    date: '2024-10-10',
    abstract:
      'Evidence-aware fake news detection aims to automatically capture the claim-evidence interaction. In particular, the method aspires to mimic how human fact-checkers verify the veracity of a claim based on a piece of information, facts, or data as evidence that can either support or contradict the claim. However, current evidence-aware approaches, which are mainly constructed of LSTM and Graph Neural Network (GNN), suffer from the lack of high quality data in a low resource scenario of fake news detection. In this study, we want to further investigate the capability of BERT as a backbone architecture for evidence-aware fake news detection task.',
    links: [{ label: 'Paper', url: 'https://doi.org/10.1109/IC3INA64086.2024.10732358' }],
  },
  {
    title: 'NLG Evaluation Beyond Correlation Analysis: An Empirical Metric Preference Checklist',
    authors: 'Nimah, I., et al.',
    venue: 'Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1240–1266, Toronto, Canada',
    short: 'ACL',
    type: 'Conference',
    year: 2023,
    date: '2023-05-05',
    links: [{ label: 'PDF', url: 'https://aclanthology.org/2023.acl-long.69.pdf' }],
  },
  {
    title: 'ProtoInfoMax: Prototypical Networks with Mutual Information Maximization for Out-of-Domain Detection',
    authors: 'Nimah, I., et al.',
    venue: 'Findings of the Association for Computational Linguistics: EMNLP 2021, pp. 1606–1617, Punta Cana, Dominican Republic',
    short: 'EMNLP Findings',
    type: 'Conference',
    year: 2021,
    date: '2021-11-01',
    links: [{ label: 'Paper', url: 'https://aclanthology.org/2021.findings-emnlp.138/' }],
  },
  {
    title: 'Efficient and Effective Training of Sparse Recurrent Neural Networks',
    authors: 'Liu, S., et al.',
    venue: 'Neural Computing and Applications, 33, 9625–9636',
    short: 'NCA',
    type: 'Journal',
    year: 2021,
    date: '2021-01-08',
    links: [
      { label: 'Paper', url: 'https://link.springer.com/article/10.1007/s00521-021-05727-y' },
      { label: 'DOI', url: 'https://doi.org/10.1007/s00521-021-05727-y' },
    ],
  },
  {
    title: 'Looking Deeper into Deep Learning Model: Attribution-based Explanations of TextCNN',
    authors: 'Xiong, W., et al.',
    venue: 'NIPS 2018 Workshop on Challenges and Opportunities for AI in Financial Services: the Impact of Fairness, Explainability, Accuracy, and Privacy, Montréal, Canada',
    short: 'NeurIPS Workshop',
    type: 'Workshop',
    year: 2018,
    date: '2018-11-08',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/1811.03970' }],
  },
];

export const talks = [
  {
    title: 'Workshop HPC Internal BRIN: Slurm Basics',
    type: 'Workshop / Tutorial',
    venue: 'BRIN KST Samaun Samadikun Bandung (offline and recorded)',
    location: 'Bandung, Indonesia',
    date: '2024-11-20',
    links: [{ label: 'Materials', url: 'https://github.com/hpc-mahameru/samples' }],
  },
  {
    title: 'Webinar PRSDI Seri #4: Toward Comprehensive Processing of Indonesian Texts Using Latest NLP Technologies',
    type: 'Webinar',
    venue: 'BRIN KST Samaun Samadikun Bandung (online webinar)',
    location: 'Bandung, Indonesia',
    date: '2024-05-15',
    links: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=suc28pJjZyE' }],
  },
  {
    title: 'Workshop / Tutorial on Deep Learning Architectures',
    type: 'Tutorial',
    venue: 'Indonesian Institute of Sciences (online from the Netherlands)',
    location: 'Bandung, Indonesia',
    date: '2017-12-13',
    links: [{ label: 'Materials', url: 'https://github.com/inimah/Workshop-DL' }],
  },
];

export const reviewing = [
  { venue: 'ACL 2024', tracks: ['Resources and Evaluation', 'Semantics: Sentence-level Semantics, Textual Inference and Other areas', 'Theme Track: Open science, open data, and open models for reproducible NLP research'] },
  { venue: 'EMNLP 2024', tracks: ['Resources and Evaluation', 'Theme Track: Efficiency in Model Algorithms, Training, and Inference'] },
  { venue: 'EMNLP 2023', tracks: ['Natural Language Generation', 'Language Modeling and Analysis of Language Models', 'Machine Learning for NLP', 'Interpretability, Interactivity, and Analysis of Models for NLP', 'Industry Track'] },
  { venue: 'ACL 2023', tracks: ['Generation', 'Interpretability and Analysis of Models for NLP', 'Explainable AI (XAI)'] },
  { venue: 'EMNLP 2022', tracks: ['Interpretability, Interactivity and Analysis of Models for NLP', 'Language Modeling and Analysis of Language Models'] },
  {
    venue: 'Indonesian international conferences',
    items: [
      { label: 'IC3INA 2017', url: 'http://situs.opi.lipi.go.id/ic3ina2017/' },
      { label: 'NISS 2022', url: 'https://niss22.medi-ast.org/' },
    ],
  },
];

export const editorial = [
  {
    role: 'Section Editor',
    venue: 'Jurnal Elektronika dan Telekomunikasi (JET), national journal, Sinta 2',
    url: 'https://sinta.kemdikbud.go.id/journals/profile/931',
    year: '2024',
  },
];

export const teaching = [
  {
    title: 'Recommender Systems, Spring 2019',
    type: 'Master program course',
    role: 'Teaching Assistant (Tutor) for “Deep Learning for NLP”',
    venue: 'Eindhoven University of Technology, Department of Mathematics and Computer Science',
    date: '2019-05-01',
  },
  {
    title: 'Recommender Systems, Spring 2018',
    type: 'Master program course',
    role: 'Teaching Assistant (Tutor) for “Deep Learning for NLP”',
    venue: 'Eindhoven University of Technology, Department of Mathematics and Computer Science',
    date: '2018-03-08',
  },
];

export const supervising = [
  {
    title: 'Looking Deeper into Deep Learning Model: Attribution-based Explanations of TextCNN',
    detail: 'Workshop publication output, NIPS 2018 Workshop on AI in Financial Services. Student: Xiong, W. Project: Know Your Customer (KYC). Supervisor: Pechenizkiy, M.',
    url: 'https://arxiv.org/abs/1811.03970',
  },
  {
    title: 'Feature Extraction and Feature Evaluation Framework for Document Representation',
    detail: "Master thesis by Wang, Y. (27 Nov 2017). Project: Know Your Customer (KYC). Supervisors: Ni'mah, I. (1st), Menkovski, V., Wilbik, A.; external coach: van Ipenburg, W.",
  },
];

export const service = [
  { period: '2024–present', text: 'Member of the NLP Research Group, Center for Data and Information Sciences, BRIN' },
  { period: '2021–present', text: 'Member of the Center for Data and Information Sciences, BRIN' },
  { period: '2018–present', text: 'Administrator of the High Performance Computing (HPC) DAI cluster, TU/e' },
  { period: '2017–2019', text: 'Research investigator, Know Your Customer (KYC) project, DAI cluster, TU/e' },
  { period: '2021', text: 'Student participant and volunteer, EMNLP 2021' },
  { period: '2018', text: 'Student participant, EMNLP 2018' },
  { period: '2015–2016', text: 'Organizing committee (treasury), IC3INA 2015 and IC3INA 2016' },
];

export const education = [
  {
    period: '2017–present',
    title: 'Ph.D., Mathematics and Computer Science',
    org: 'Eindhoven University of Technology, the Netherlands',
    detail: '“Regularizing and Evaluating Deep Learning for Controllable and Resource Constrained NLP”',
  },
  {
    period: '2013',
    title: 'M.Sc., Master of Information Technology',
    org: 'Monash University, Melbourne, Australia',
    detail: '“Bayesian Networks Classifier for Predicting Long-Term Customer Spending Patterns”',
  },
  {
    period: '2008',
    title: 'B.Sc., Bachelor of Informatics',
    org: 'Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia',
    detail: '“Text Detection and Character Recognition Using Fuzzy Image Processing”',
  },
];

export const experience = [
  {
    period: '2021–present',
    title: 'Research Scientist',
    org: 'Center for Data and Information Sciences, BRIN, Bandung, Indonesia',
  },
  {
    period: '2017–present',
    title: 'PhD Candidate',
    org: 'Eindhoven University of Technology, the Netherlands',
    detail: 'Supervisors: Prof. Dr. Mykola Pechenizkiy, Dr. Vlado Menkovski, Dr. Meng Fang.',
  },
  {
    period: 'Fall 2016',
    title: 'Research Intern',
    org: 'CERN, Geneva, Switzerland & Heidelberg University, Germany',
    detail: 'Preliminary research on Deep Learning for Physics. Supervisor: Dr. Rifki Sadikin.',
  },
  {
    period: '2014–2016',
    title: 'Research Assistant',
    org: 'Indonesian Institute of Sciences (LIPI)',
    detail: 'Deep Learning for Physics and Speech Recognition. Supervisors: Dr. Rifki Sadikin, Dr. Hilman F. Pardede.',
  },
  {
    period: '2010–2011',
    title: 'Research Assistant',
    org: 'Indonesian Institute of Sciences (LIPI)',
    detail: 'Applied research.',
  },
  {
    period: '2008–2010',
    title: 'Administrator, Engineer, and Educator',
    org: 'e-Government Project, Otorita Batam & POSDATA South Korea',
    detail: 'Administered the main SSO portal and groupware system; bridged end-users and the main developer; trained end-users.',
  },
];

export const awards = [
  {
    period: '2017–2021',
    title: 'Beasiswa Pendidikan Indonesia (BPI) – LPDP',
    detail: 'Doctoral scholarship, Eindhoven University of Technology. Issuer: Lembaga Pengelola Dana Pendidikan (LPDP) Indonesia.',
  },
  {
    period: '2012–2013',
    title: 'Australia Awards Scholarship (AAS)',
    detail: 'Master scholarship, Monash University. Issuer: Department of Foreign Affairs and Trade (DFAT) Australia.',
  },
  {
    period: '2008',
    title: 'e-Government Fellowship Training, Seoul, South Korea',
    detail: 'Issuer: Ministry of Communication and Information, Indonesia. Organizer: POSDATA and Korea Productivity Centre (KPC).',
  },
];

export const projects = [
  {
    period: '2016',
    title: 'Deep Learning for Particle Identification in High Energy Physics',
    detail: 'Machine Learning. Indonesian Institute of Sciences, ALICE TPC CERN, Heidelberg University.',
  },
  {
    period: '2011–2012',
    title: 'Weather station monitoring system',
    detail: 'Software Engineering and Data Analysis. LIPI, BMKG, Ministry of Marine Affairs and Fisheries.',
  },
  {
    period: '2011–2012',
    title: 'Decision Support System (DSS) for the Minapolitan area',
    detail: 'Software Engineering and Data Analysis. LIPI, Ministry of Marine Affairs and Fisheries.',
  },
  {
    period: '2011–2012',
    title: 'Tide and sea level monitoring system',
    detail: 'Software Engineering and Data Analysis. LIPI, Ministry of Marine Affairs and Fisheries.',
  },
];
