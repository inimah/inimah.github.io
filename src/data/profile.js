// All site content lives here. Edit this file to update the homepage —
// no component changes are needed for new publications, talks, etc.

export const profile = {
  name: "Iftitahu Ni'mah",
  nickname: 'Tita',
  role: 'Research Scientist',
  photo: 'images/profile.png',
  tagline: 'AI · NLP · NLG . Evaluation',
  affiliations: [
    {
      text: 'Research Scientist, Center for Data and Information Sciences,',
      org: 'BRIN',
      url: 'https://brin.go.id/orei/pusat-riset-sains-data-dan-informasi/page/selamat-datang-4',
    },
    {
      text: 'Research Fellow, Data and AI cluster,',
      org: 'Eindhoven University of Technology (TU/e)',
      url: 'https://research.tue.nl/en/persons/iftitahu-nimah/',
    },
  ],
  links: [
    { label: 'Email', url: 'mailto:ifti001@brin.go.id' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WtqgzVgAAAAJ&hl=en' },
    { label: 'OpenReview', url: 'https://openreview.net/profile?id=%7EIftitahu_Ni%27mah1' },
    { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Iftitahu-Nimah' },
    { label: 'GitHub', url: 'https://github.com/inimah' },
    { label: 'X / Twitter', url: 'https://x.com/IftitahuNimah' },
  ],
};

export const bio = [
  "Iftitahu Ni'mah (Tita) is a research scientist at Pusat Riset Sains Data dan Informasi, Natural Language Processing Research Group, BRIN, Indonesia.",
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

// Student recruitment announcement, shown below the biography.
// Set `open: false` to hide it; `email` adds a "Contact me" button when filled in.
export const openings = {
  open: true,
  title: 'Now accepting students',
  levels: ['S1 · Undergraduate research project', 'S2 · Graduate (Master) project'],
  intro:
    'I am looking for motivated undergraduate (S1) and graduate (S2) students for research projects at the NLP Research Group, BRIN. Projects can be carried out as a final project (skripsi/tesis) or research internship, and are available on the topics below.',
  topics: [
    {
      title: 'Large Language Models and Retrieval Augmented Generation for Legal Document Processing and Question Answering',
      text: 'Building and evaluating LLM + RAG pipelines (retrieval, chunking, answer generation) for question answering over Indonesian legal documents.',
      levels: ['S1', 'S2'],
    },
    {
      title: 'Memory Profiling and Safety Guardrails for Adolescent Mental Health Chatbot',
      text: 'Designing conversational memory and safety guardrails for a culturally appropriate mental health chatbot for Indonesian adolescents.',
      levels: ['S1', 'S2'],
    },
    {
      title: 'Large Language Models and Text-to-Speech for Disaster Communication in Low Resource Indonesian Local Languages',
      text: 'Using LLMs and text-to-speech to deliver disaster information in Indonesian local languages with limited data.',
      levels: ['S1', 'S2'],
    },
  ],
  email: 'ifti001@brin.go.id',
};

// Research group panel, shown under the announcement.
// Logos: put an image in public/images/logos/ and set `logo: 'images/logos/<file>'`.
// Without a logo, a tile with the `short` name is shown instead.
export const group = {
  name: 'Natural Language Processing Research Group',
  org: 'Pusat Riset Sains Data dan Informasi (PRSDI), BRIN',
  url: 'https://brin.go.id/orei/pusat-riset-sains-data-dan-informasi/page/selamat-datang-4',
  intro:
    'The NLP Research Group at the Research Center for Data and Information Sciences, BRIN, works on language technology for Indonesian, including large language models, retrieval augmented generation, mental health chatbots, fact checking, and resources for Indonesian local languages.',
  graduates: [
    {
      name: 'Muhamad Arjun Dewana',
      level: 'S1',
      year: '2026',
      university: 'Universitas Pendidikan Indonesia, Kampus Cibiru',
      project: 'Pengembangan Framework Retrieval Augmented Generation (RAG) untuk Sistem Tanya Jawab Dokumen Hukum Berbasis Skenario',
    },
  ],
  universities: [
    { name: 'Institut Teknologi Bandung', short: 'ITB', url: 'https://www.itb.ac.id/', logo: 'images/logos/itb.png' },
    { name: 'Universitas Indonesia', short: 'UI', url: 'https://www.ui.ac.id/', logo: 'images/logos/ui.png' },
    { name: 'Universitas Pendidikan Indonesia', short: 'UPI', url: 'https://www.upi.edu/', logo: 'images/logos/upi.png' },
    { name: 'Universitas Handayani Makassar', short: 'Handayani', url: 'https://handayani.ac.id/', logo: 'images/logos/unhan_makassar.png' },
    { name: 'Eindhoven University of Technology', short: 'TU/e', url: 'https://www.tue.nl/en/', logo: 'images/logos/tue.png' },
    { name: 'Universitas of Liverpool', short: 'Liverpool', url: 'https://www.liverpool.ac.uk/', logo: 'images/logos/liverpool.png' },
  ],
};

// `me` marks the author string to highlight in the author list.
export const me = 'Nimah, I.';

export const publications = [
  {
    title: 'Evaluating Indonesian Mental Health Chatbots via Agentic Simulation: When Ethics and Realism Win',
    authors: 'Nimah, I. and Nugraheni, E. and Wijayanti, R. and Fausiah, F. and Mubasyiroh, R. and Irmansyah and Pechenizkiy, M.',
    venue: '2026 International Conference on Computer, Control, Informatics and its Applications (IC3INA), Lombok, Mataram, Indonesia',
    short: 'IC3INA',
    type: 'Conference',
    year: 2026,
    date: '2026-09-03',
    abstract:
      'Agentic simulation or AI roleplaying offers a viable approach to scale the costly safety evaluation of AI chatbots. However, simulating conversation between two AI agents primarily involves decision making on how to better frame agents’ roles and how to share sessions between agents during simulation of multi-turn conversation.',
    links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org' },
           { label: 'Code', url: 'https://github.com/inimah/agent-simulation-mental-id' },
           ],
  },
  {
    title: 'Generating Informative Non-Diagnostic Titles for Mental Health Dialogues',
    authors: 'Wijayanti, R. and Nimah, I. and Nugraheni, E. and Rozie, A. F.',
    venue: '2026 International Conference on Computer, Control, Informatics and its Applications (IC3INA), Lombok, Mataram, Indonesia',
    short: 'IC3INA',
    type: 'Conference',
    year: 2026,
    date: '2026-09-03',
    abstract:
      'Automatically generated titles help users navigate and retrieve previous counseling sessions. This paper presents an LLM-assisted framework for generating counseling dialogue titles that support both tasks. The framework constructs a silver standard title dataset through LLM generation and multi-judge evaluation, then fine-tunes compact sequence-to-sequence models.',
    links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org' }],
  },
  {
    title: 'MATH-IDN: A Multilingual Mathematical Problem Solving Dataset Featuring Local Languages in Indonesia',
    authors: 'Xiao, X. and Nimah, I. and Wabula, Y. and Pechenizkiy, M. and Fang, M.',
    venue: 'Findings of the Association for Computational Linguistics: EACL 2026',
    short: 'EACL',
    type: 'Conference',
    year: 2026,
    date: '2026-03-24',
    links: [{ label: 'Paper', url: 'https://aclanthology.org/2026.findings-eacl.231/' },
           { label: 'Data', url: 'https://data.brin.go.id/dataverse/lokamath-qa' },
           ],
  },
  {
    title: 'Evaluating Retrieval Augmented Generation (RAG) Chunking Strategy for Question Answering in Indonesian Law of The Sea',
    authors: 'Nimah, I. and Aini, L. R. and Fajri, R. and Pebiana, S. and Hidayati, N. N. and Wijayanti, R.',
    venue: '2025 International Conference on Computer, Control, Informatics and its Applications (IC3INA), Jakarta, Indonesia',
    short: 'IC3INA',
    type: 'Conference',
    year: 2025,
    date: '2025-10-15',
    abstract:
      'We study the evaluation of Retrieval-Augmented Generation (RAG) for question and answering (QA) in legal domain, particularly Law No. 17 of 2008 about maritime law and shipping in Indonesia.',
    links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11325153' }],
  },
  {
    title: 'Explaining Mental Disorder Classification in Dialogues: Turn-Level Analysis and Label Dynamics',
    authors: 'Wijayanti, R. and Nimah, I. and Nugraheni, E. and Heryana, A.',
    venue: '2025 International Conference on Computer, Control, Informatics and its Applications (IC3INA), Jakarta, Indonesia',
    short: 'IC3INA',
    type: 'Conference',
    year: 2025,
    date: '2025-10-15',
    abstract:
      'This study proposes a multi-turn dialogue-based approach to classify mental disorders in Indonesian, utilizing a pretrained BERT model and multi-CLS dialogue representations. Each [CLS] per turn is processed using an attentive pooling mechanism to generate a final prediction. As part of the explainability protocol, we analyze attention distributions, perform perturbation-based faithfulness tests (role-level ablation, turn-level leave-one-out, progressive context insertion), and evaluate label dynamics to trace label transitions between turns.',
    links: [{ label: 'Paper', url: 'https://doi.org/10.1109/IC3INA68387.2025.11325640' }],
  },
  {
    title: 'A Simple Contrastive Embedding Framework for Low-Resource Fake News Detection',
    authors: 'Nimah, I., et al.',
    venue: 'Neural Computing and Applications',
    short: 'NCAA',
    type: 'Journal',
    year: 2025,
    date: '2025-08-05',
    links: [{ label: 'Paper', url: 'https://link.springer.com/article/10.1007/s00521-025-11467-0' },
           { label: 'Code', url: 'https://github.com/inimah/contrast-BERT' },
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
    links: [{ label: 'Paper', url: 'https://aclanthology.org/2023.acl-long.69.pdf' },
           { label: 'Code', url: 'https://github.com/inimah/metric-preference-checklist' },
           ],
  },
  {
    title: 'ProtoInfoMax: Prototypical Networks with Mutual Information Maximization for Out-of-Domain Detection',
    authors: 'Nimah, I., et al.',
    venue: 'Findings of the Association for Computational Linguistics: EMNLP 2021, pp. 1606–1617, Punta Cana, Dominican Republic',
    short: 'EMNLP Findings',
    type: 'Conference',
    year: 2021,
    date: '2021-11-01',
    links: [{ label: 'Paper', url: 'https://aclanthology.org/2021.findings-emnlp.138/' },
           { label: 'Code', url: 'https://github.com/inimah/protoinfomax' },
           ],
  },
  {
    title: 'Efficient and Effective Training of Sparse Recurrent Neural Networks',
    authors: 'Liu, S., et al.',
    venue: 'Neural Computing and Applications, 33, 9625–9636',
    short: 'NCAA',
    type: 'Journal',
    year: 2021,
    date: '2021-01-08',
    links: [{ label: 'Paper', url: 'https://link.springer.com/article/10.1007/s00521-021-05727-y' }],
  },
  {
    title: 'Looking Deeper into Deep Learning Model: Attribution-based Explanations of TextCNN',
    authors: 'Xiong, W., et al.',
    venue: 'NIPS 2018 Workshop on Challenges and Opportunities for AI in Financial Services: the Impact of Fairness, Explainability, Accuracy, and Privacy, Montréal, Canada',
    short: 'NeurIPS Workshop',
    type: 'Workshop',
    year: 2018,
    date: '2018-11-08',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/1811.03970' }],
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
    title: 'Pengembangan Framework Retrieval Augmented Generation (RAG) untuk Sistem Tanya Jawab Dokumen Hukum Berbasis Skenario',
    detail: 'Undergraduate project (S1) by Muhamad Arjun Dewana (July, 2026), Universitas Pendidikan Indonesia, Prodi Teknik Komputer, Kampus Cibiru Bandung, Indonesia.',
  },
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
  { period: '2018–2021', text: 'Administrator of the High Performance Computing (HPC) DAI cluster, TU/e' },
  { period: '2017–2019', text: 'Research investigator, Know Your Customer (KYC) project, DAI cluster, TU/e' },
  { period: '2021', text: 'Student participant and volunteer, EMNLP 2021' },
  { period: '2018', text: 'Student participant, EMNLP 2018' },
  { period: '2015–2016', text: 'Organizing committee (treasury), IC3INA 2015 and IC3INA 2016' },
];

export const education = [
  {
    period: '2026',
    title: 'Ph.D., Mathematics and Computer Science',
    org: 'Eindhoven University of Technology, the Netherlands',
    detail: '“Contrastive Learning and Evaluation in Low Resource Scenario of Natural Language Processing”',
  },
  {
    period: '2014',
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
    period: '2026–present',
    title: 'Research Fellow',
    org: 'Eindhoven University of Technology, the Netherlands',
    detail: 'Advisor: Prof. Dr. Mykola Pechenizkiy',
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
    period: '2026',
    title: 'CALM-ID (Corpus of Adolescent Mental Health – Indonesia Dialogue): Korpus Percakapan Bahasa Indonesia untuk Pelatihan dan Evaluasi Chatbot Kesehatan Mental Remaja',
    detail: 'Large Language Model; Dataset. BRIN Indonesia.',
  },
  {
    period: '2026',
    title: 'Pengembangan Lanjut Purwarupa Chatbot ’Teta’ (Teman Cerita) yang Sesuai Budaya Indonesia sebagai Media Intervensi Psikologis Sederhana pada Remaja dengan Masalah Kesehatan Jiwa Ringan',
    detail: 'Large Language Model; Chatbot. BRIN Indonesia.',
  },
  {
    period: '2025',
    title: 'Pengembangan Chatbot AI sebagai Sistem Pendukung Keputusan untuk Sinkronisasi Regulasi Keamanan Laut di Indonesia',
    detail: 'Large Language Model; Retrieval Augmented Generation. BRIN Indonesia.',
  },
  {
    period: '2025',
    title: 'Pengembangan Model Low-Intensity Psychological Intervention Berupa Behaviour Activation Berbasis Chatbot Dengan Mechine Learning Untuk Masalah Kesehatan Jiwa Pada Remaja',
    detail: 'Large Language Model. BRIN Indonesia.',
  },
  {
    period: '2024',
    title: 'Pengembangan Data dan Metode Pengecekan Fakta Berbasis Large Language Models (LLMs)',
    detail: 'Machine Learning; Fake News Detection. BRIN Indonesia.',
  },
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
