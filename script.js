const langToggle = document.getElementById('lang-toggle');
let currentLang = 'pt';

const translations = {
    pt: {
        "nav-about": "Sobre",
        "nav-skills": "Habilidades",
        "nav-career": "Carreira",
        "nav-edu": "Formação",
        "nav-contact-menu": "Contato",
        "hero-badge": "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        "hero-title": "Walisson Patrick Helmer",
        "hero-desc": "Estudante de ADS e especialista em gestão. Focado em transição para Desenvolvimento de Software e Suporte em TI.",
        "btn-cv": "Baixar Currículo",
        "obj-title": "OBJETIVO PROFISSIONAL",
        "obj-desc-p": "Estudante de Análise e Desenvolvimento de Sistemas, com experiência em gestão de empresas e equipes, atendimento ao cliente, suporte técnico e vendas.",
        "obj-quote": "Busco oportunidade de estágio nas áreas de Desenvolvimento de Sistemas ou Suporte em TI, com foco em aplicar meus conhecimentos técnicos, aprimorar minhas habilidades práticas e contribuir para a criação de soluções eficientes.",
        "edu-title": "FORMAÇÃO ACADÊMICA",
        "edu-1-h": "Análise e Desenvolvimento de Sistemas",
        "edu-1-p": "Faculdade Impacta | Conclusão prevista: Dezembro/2027",
        "edu-2-h": "Técnico em Programação e Jogos Digitais",
        "edu-2-p": "Formação Profissionalizante | 1200h",
        "skills-title": "HABILIDADES TÉCNICAS",
        "skill-1": "Linguagens & Web",
        "skill-2": "Sistemas & Dados",
        "skill-4": "Design & IA",
        "skill-5": "Gestão & Vendas",
        "exp-title": "EXPERIÊNCIA PROFISSIONAL",
        "exp-now": "Atual",
        "exp-label-prev": "Anterior",
        "exp-1-role": "CEO / Administrador",
        "exp-1-desc": "Gestão de redes sociais, vendas, equipe e treinamentos. Controle financeiro e compras.",
        "exp-2-role": "Telemarketing e Suporte TI",
        "exp-2-desc": "Atendimento técnico e suporte de primeiro nível em infraestrutura.",
        "foot-h2": "Interessado no meu perfil?",
        "foot-loc": "Belo Horizonte, MG • CEP: 30690-260"
    },
    en: {
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-career": "Career",
        "nav-edu": "Education",
        "nav-contact-menu": "Contact",
        "hero-badge": "SYSTEMS ANALYSIS AND DEVELOPMENT",
        "hero-title": "Walisson Patrick Helmer",
        "hero-desc": "SAD Student and management specialist. Focused on transitioning to Software Development and IT Support.",
        "btn-cv": "Download CV",
        "obj-title": "PROFESSIONAL OBJECTIVE",
        "obj-desc-p": "Systems Analysis and Development student, with experience in business and team management, customer service, technical support, and sales.",
        "obj-quote": "I am seeking an internship in Software Development or IT Support, focusing on applying my technical knowledge, improving practical skills, and contributing to efficient solutions.",
        "edu-title": "ACADEMIC BACKGROUND",
        "edu-1-h": "Systems Analysis and Development",
        "edu-1-p": "Impacta College | Expected Graduation: December 2027",
        "edu-2-h": "Programming and Digital Games Technician",
        "edu-2-p": "Professional Training | 1200h",
        "skills-title": "TECHNICAL SKILLS",
        "skill-1": "Languages & Web",
        "skill-2": "Systems & Data",
        "skill-4": "Design & AI",
        "skill-5": "Management & Sales",
        "exp-title": "PROFESSIONAL EXPERIENCE",
        "exp-now": "Current",
        "exp-label-prev": "Previous",
        "exp-1-role": "CEO / Administrator",
        "exp-1-desc": "Social media management, sales, team leading, and training. Financial control and purchasing.",
        "exp-2-role": "Telemarketing and IT Support",
        "exp-2-desc": "Technical service and first-level infrastructure support.",
        "foot-h2": "Interested in my profile?",
        "foot-loc": "Belo Horizonte, Brazil • ZIP: 30690-260"
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.innerText = currentLang === 'pt' ? 'EN' : 'PT';
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});