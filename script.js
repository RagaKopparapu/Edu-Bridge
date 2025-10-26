// EduBridge JavaScript Functionality

// Sample data for resources
const resources = [
    {
        title: "Mathematics Fundamentals",
        type: "PDF",
        description: "Complete guide to basic mathematics concepts including algebra, geometry, and calculus.",
        link: "#",
        subject: "Mathematics"
    },
    {
        title: "Physics: Mechanics and Motion",
        type: "Video",
        description: "YouTube video series covering Newton's laws, kinematics, and dynamics.",
        link: "https://youtube.com/watch?v=example1",
        subject: "Physics"
    },
    {
        title: "Chemistry: Periodic Table Guide",
        type: "PDF",
        description: "Comprehensive guide to the periodic table and chemical elements.",
        link: "#",
        subject: "Chemistry"
    },
    {
        title: "Biology: Cell Structure and Function",
        type: "Video",
        description: "Educational video explaining cell organelles and their functions.",
        link: "https://youtube.com/watch?v=example2",
        subject: "Biology"
    },
    {
        title: "English Literature: Shakespeare's Works",
        type: "PDF",
        description: "Analysis and summaries of major Shakespearean plays and sonnets.",
        link: "#",
        subject: "English"
    },
    {
        title: "History: World War II Timeline",
        type: "Video",
        description: "Documentary series covering the major events of World War II.",
        link: "https://youtube.com/watch?v=example3",
        subject: "History"
    }
];

// Sample data for questions and answers
const questions = [
    {
        id: 1,
        title: "How do I solve quadratic equations?",
        content: "I'm struggling with quadratic equations. Can someone explain the different methods to solve them?",
        author: "Student123",
        date: "2024-01-15",
        answers: [
            {
                author: "MathMentor",
                content: "There are several methods to solve quadratic equations: 1) Factoring, 2) Quadratic formula, 3) Completing the square. I'd recommend starting with factoring as it's the most intuitive method.",
                date: "2024-01-15"
            }
        ]
    },
    {
        id: 2,
        title: "What's the difference between mitosis and meiosis?",
        content: "I'm confused about cell division processes. Can someone explain the key differences?",
        author: "BioStudent",
        date: "2024-01-14",
        answers: [
            {
                author: "BioTeacher",
                content: "Mitosis produces two identical diploid cells for growth and repair, while meiosis produces four genetically different haploid cells for reproduction. The key difference is in the number of divisions and genetic variation.",
                date: "2024-01-14"
            }
        ]
    },
    {
        id: 3,
        title: "How to improve essay writing skills?",
        content: "I need help with structuring my essays and making them more persuasive. Any tips?",
        author: "EssayWriter",
        date: "2024-01-13",
        answers: [
            {
                author: "EnglishProf",
                content: "Focus on the PEEL structure: Point, Evidence, Explanation, Link. Always start with a clear thesis statement and support each point with evidence. Practice makes perfect!",
                date: "2024-01-13"
            }
        ]
    }
];

// Sample data for mentors
const mentors = [
    {
        id: 1,
        name: "Priya Sharma",
        subjects: ["Mathematics", "Physics"],
        experience: "12 years",
        rating: 4.9,
        bio: "Math teacher with a passion for making numbers fun and easy to understand. Loves helping students overcome math anxiety.",
        email: "priya.sharma@edubridge.com"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        subjects: ["Chemistry", "Biology"],
        experience: "10 years",
        rating: 4.8,
        bio: "Science teacher who believes every student can excel in science. Expert in making complex concepts simple and memorable.",
        email: "rajesh.kumar@edubridge.com"
    },
    {
        id: 3,
        name: "Anita Singh",
        subjects: ["English", "History"],
        experience: "8 years",
        rating: 4.9,
        bio: "English teacher with a love for literature and storytelling. Helps students improve their writing and communication skills.",
        email: "anita.singh@edubridge.com"
    },
    {
        id: 4,
        name: "Vikram Patel",
        subjects: ["Computer Science", "Mathematics"],
        experience: "6 years",
        rating: 4.7,
        bio: "Tech-savvy teacher who makes programming and coding accessible to everyone. Believes in learning by doing.",
        email: "vikram.patel@edubridge.com"
    },
    {
        id: 5,
        name: "Sunita Mehta",
        subjects: ["Hindi", "Social Studies"],
        experience: "15 years",
        rating: 4.8,
        bio: "Experienced teacher specializing in Hindi literature and social sciences. Makes learning about culture and society engaging.",
        email: "sunita.mehta@edubridge.com"
    },
    {
        id: 6,
        name: "Amit Verma",
        subjects: ["Geography", "Environmental Science"],
        experience: "9 years",
        rating: 4.6,
        bio: "Environmental enthusiast who teaches geography and environmental science. Passionate about sustainable living and nature.",
        email: "amit.verma@edubridge.com"
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "What is 15 × 7?",
        options: ["95", "105", "115", "125"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    }
];

// Global variables
let currentQuizQuestion = 0;
let userAnswers = [];
let quizCompleted = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadResources();
    loadQuestions();
    loadMentors();
    initializeQuiz();
    setupEventListeners();
    setupSmoothScrolling();
    checkUserLogin();
});

// Load resources into the page
function loadResources() {
    const container = document.getElementById('resourcesContainer');
    container.innerHTML = '';
    
    resources.forEach(resource => {
        const resourceCard = createResourceCard(resource);
        container.appendChild(resourceCard);
    });
}

// Create a resource card element
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 mb-4';
    card.innerHTML = `
        <div class="resource-card">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <h5>${resource.title}</h5>
                <span class="badge">${resource.type}</span>
            </div>
            <p class="text-muted mb-3">${resource.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${resource.subject}</small>
                <a href="${resource.link}" class="btn btn-sm btn-outline-primary" target="_blank">
                    <i class="fas fa-external-link-alt me-1"></i>View
                </a>
            </div>
        </div>
    `;
    return card;
}

// Load questions into the page
function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    questions.forEach(question => {
        const questionCard = createQuestionCard(question);
        container.appendChild(questionCard);
    });
}

// Create a question card element
function createQuestionCard(question) {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    let answersHtml = '';
    if (question.answers && question.answers.length > 0) {
        answersHtml = `
            <div class="answers mt-3">
                <h6 class="text-success">Answers:</h6>
                ${question.answers.map(answer => `
                    <div class="answer-card">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <strong>${answer.author}</strong>
                            <small class="text-muted">${answer.date}</small>
                        </div>
                        <p class="mb-0">${answer.content}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="d-flex justify-content-between align-items-start mb-2">
            <h6>${question.title}</h6>
            <small class="text-muted">${question.date}</small>
        </div>
        <p class="mb-3">${question.content}</p>
        <div class="question-meta">
            <span class="text-muted">Asked by ${question.author}</span>
            <span class="badge bg-light text-dark ms-2">${question.answers ? question.answers.length : 0} answers</span>
        </div>
        ${answersHtml}
    `;
    return card;
}

// Load mentors into the page
function loadMentors() {
    const container = document.getElementById('mentorsContainer');
    container.innerHTML = '';
    
    mentors.forEach(mentor => {
        const mentorCard = createMentorCard(mentor);
        container.appendChild(mentorCard);
    });
}

// Create a mentor card element
function createMentorCard(mentor) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-3 mb-4';
    card.innerHTML = `
        <div class="mentor-card">
            <div class="mentor-avatar">
                <i class="fas fa-user"></i>
            </div>
            <h5>${mentor.name}</h5>
            <p class="text-muted mb-3">${mentor.experience} experience</p>
            <div class="mentor-subjects">
                ${mentor.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
            </div>
            <p class="small text-muted mb-3">${mentor.bio}</p>
            <div class="rating mb-3">
                ${'★'.repeat(Math.floor(mentor.rating))}${'☆'.repeat(5 - Math.floor(mentor.rating))}
                <span class="ms-1">(${mentor.rating})</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="contactMentor('${mentor.email}')">
                <i class="fas fa-envelope me-1"></i>Contact
            </button>
        </div>
    `;
    return card;
}

// Initialize quiz
function initializeQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = `
        <div class="text-center">
            <h4 class="mb-4">Test Your Knowledge</h4>
            <p class="text-muted mb-4">Answer ${quizQuestions.length} questions to test your understanding</p>
            <button class="btn btn-primary btn-lg" onclick="startQuiz()">Start Quiz</button>
        </div>
    `;
}

// Start the quiz
function startQuiz() {
    currentQuizQuestion = 0;
    userAnswers = [];
    quizCompleted = false;
    showQuizQuestion();
}

// Show current quiz question
function showQuizQuestion() {
    const container = document.getElementById('quizContainer');
    const question = quizQuestions[currentQuizQuestion];
    
    container.innerHTML = `
        <div class="quiz-question">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h5>Question ${currentQuizQuestion + 1} of ${quizQuestions.length}</h5>
                <span class="badge bg-primary">${currentQuizQuestion + 1}/${quizQuestions.length}</span>
            </div>
            <h5 class="mb-4">${question.question}</h5>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        <span class="me-2">${String.fromCharCode(65 + index)}.</span>
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="mt-4">
                <button class="btn btn-primary" onclick="nextQuestion()" ${currentQuizQuestion === quizQuestions.length - 1 ? 'onclick="finishQuiz()"' : ''}>
                    ${currentQuizQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
            </div>
        </div>
    `;
}

// Select an answer
function selectAnswer(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.quiz-option')[optionIndex].classList.add('selected');
    
    // Store the answer
    userAnswers[currentQuizQuestion] = optionIndex;
}

// Move to next question
function nextQuestion() {
    if (userAnswers[currentQuizQuestion] === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    currentQuizQuestion++;
    if (currentQuizQuestion < quizQuestions.length) {
        showQuizQuestion();
    } else {
        finishQuiz();
    }
}

// Finish the quiz and show results
function finishQuiz() {
    if (userAnswers[currentQuizQuestion] === undefined) {
        alert('Please select an answer before finishing.');
        return;
    }
    
    quizCompleted = true;
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    const container = document.getElementById('quizContainer');
    container.innerHTML = `
        <div class="quiz-score">
            <h3>Quiz Completed!</h3>
            <div class="score-display mb-4">
                <h1 class="display-1 text-primary">${score}/${quizQuestions.length}</h1>
                <h4>${percentage}%</h4>
            </div>
            <p class="mb-4">
                ${percentage >= 80 ? 'Excellent work! You have a strong understanding of the topics.' : 
                  percentage >= 60 ? 'Good job! Consider reviewing some topics for improvement.' : 
                  'Keep studying! Practice more to improve your knowledge.'}
            </p>
            <div class="quiz-results mb-4">
                ${quizQuestions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === question.correct;
                    return `
                        <div class="result-item mb-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Question ${index + 1}: ${question.question}</span>
                                <span class="badge ${isCorrect ? 'bg-success' : 'bg-danger'}">
                                    ${isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                            </div>
                            <small class="text-muted">
                                Your answer: ${question.options[userAnswer]} | 
                                Correct answer: ${question.options[question.correct]}
                            </small>
                        </div>
                    `;
                }).join('')}
            </div>
            <button class="btn btn-primary" onclick="initializeQuiz()">Take Quiz Again</button>
        </div>
    `;
}

// Calculate quiz score
function calculateScore() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    return score;
}

// Contact mentor function
function contactMentor(email) {
    alert(`Contacting mentor at: ${email}\n\nThis would normally open an email client or contact form.`);
}

// Setup event listeners
function setupEventListeners() {
    // Resource search
    const searchInput = document.getElementById('resourceSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterResources);
    }
    
    // Question form
    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
        questionForm.addEventListener('submit', handleQuestionSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Filter resources based on search
function filterResources() {
    const searchTerm = document.getElementById('resourceSearch').value.toLowerCase();
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const subject = card.querySelector('small').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || subject.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Handle question form submission
function handleQuestionSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('questionTitle').value;
    const content = document.getElementById('questionContent').value;
    
    if (title && content) {
        // Create new question object
        const newQuestion = {
            id: questions.length + 1,
            title: title,
            content: content,
            author: 'Current User',
            date: new Date().toISOString().split('T')[0],
            answers: []
        };
        
        // Add to questions array
        questions.unshift(newQuestion);
        
        // Reload questions
        loadQuestions();
        
        // Clear form
        document.getElementById('questionForm').reset();
        
        // Show success message
        alert('Question posted successfully!');
    }
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (name && email && subject && message) {
        // Clear form
        document.getElementById('contactForm').reset();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Add fade-in animation to elements on scroll
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    const elements = document.querySelectorAll('.resource-card, .question-card, .mentor-card, .quiz-container');
    elements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// AI Assistant functionality
let chatOpen = false;
let messageCount = 0;

// AI knowledge base for study-related questions
const aiKnowledgeBase = {
    // Math topics
    'algebra': {
        keywords: ['algebra', 'equation', 'solve', 'x', 'y', 'variable', 'quadratic', 'linear'],
        responses: [
            "Algebra is the branch of mathematics that deals with symbols and the rules for manipulating these symbols. It's about finding unknown values in equations.",
            "To solve equations, remember: whatever you do to one side, you must do to the other side to keep it balanced.",
            "For quadratic equations, you can use factoring, the quadratic formula, or completing the square method."
        ]
    },
    'geometry': {
        keywords: ['geometry', 'triangle', 'circle', 'area', 'perimeter', 'volume', 'angle', 'square', 'rectangle'],
        responses: [
            "Geometry is the study of shapes, sizes, and spatial relationships. It helps us understand the world around us through mathematical shapes.",
            "Remember: Area of rectangle = length × width, Area of circle = π × radius²",
            "For triangles, the sum of all angles is always 180 degrees."
        ]
    },
    'calculus': {
        keywords: ['calculus', 'derivative', 'integral', 'limit', 'function', 'differentiation', 'integration'],
        responses: [
            "Calculus is the mathematical study of continuous change. It has two main branches: differential calculus and integral calculus.",
            "Derivatives tell us the rate of change of a function at any point.",
            "Integrals help us find the area under a curve or the accumulation of quantities."
        ]
    },
    // Science topics
    'photosynthesis': {
        keywords: ['photosynthesis', 'chlorophyll', 'plant', 'sunlight', 'carbon dioxide', 'oxygen', 'glucose'],
        responses: [
            "Photosynthesis is the process by which plants convert light energy into chemical energy. The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            "It occurs in the chloroplasts of plant cells, specifically in the chlorophyll-containing parts.",
            "This process is crucial for life on Earth as it produces oxygen and forms the base of most food chains."
        ]
    },
    'physics': {
        keywords: ['physics', 'force', 'energy', 'motion', 'velocity', 'acceleration', 'newton', 'gravity'],
        responses: [
            "Physics is the study of matter, energy, and their interactions. It helps us understand how the universe works.",
            "Newton's laws: 1) Objects at rest stay at rest, 2) F=ma, 3) For every action there's an equal and opposite reaction.",
            "Energy cannot be created or destroyed, only converted from one form to another (conservation of energy)."
        ]
    },
    'chemistry': {
        keywords: ['chemistry', 'atom', 'molecule', 'element', 'compound', 'reaction', 'periodic table'],
        responses: [
            "Chemistry is the study of matter and the changes it undergoes. Everything around us is made of atoms and molecules.",
            "The periodic table organizes elements by their atomic number and properties.",
            "Chemical reactions involve breaking and forming bonds between atoms."
        ]
    },
    // Study tips
    'study': {
        keywords: ['study', 'learn', 'memorize', 'exam', 'test', 'tips', 'technique', 'method'],
        responses: [
            "Effective study techniques: 1) Use active recall (test yourself), 2) Space out your study sessions, 3) Use the Pomodoro technique (25 min focus, 5 min break)",
            "Create mind maps to visualize connections between topics. This helps with understanding and memory.",
            "Teach someone else what you've learned - this is one of the best ways to solidify your understanding.",
            "Get enough sleep! Your brain consolidates memories during sleep, so 7-9 hours is essential."
        ]
    },
    'math': {
        keywords: ['math', 'mathematics', 'calculate', 'problem', 'solve', 'formula'],
        responses: [
            "For math problems: 1) Read the problem carefully, 2) Identify what you're solving for, 3) Choose the right formula or method, 4) Show your work step by step",
            "Practice regularly - math is a skill that improves with consistent practice.",
            "Don't be afraid to make mistakes - they're part of the learning process!"
        ]
    }
};

// Toggle chat visibility
function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    const messageBadge = document.getElementById('messageBadge');
    
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatContainer.classList.add('show');
        messageBadge.style.display = 'none';
        messageCount = 0;
    } else {
        chatContainer.classList.remove('show');
    }
}

// Handle Enter key press in chat input
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Send message function
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate AI response after a short delay
    setTimeout(() => {
        hideTypingIndicator();
        const aiResponse = generateAIResponse(message);
        addMessage(aiResponse, 'ai');
    }, 1500);
}

// Add message to chat
function addMessage(content, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${content}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Show notification badge if chat is closed
    if (sender === 'ai' && !chatOpen) {
        showMessageBadge();
    }
}

// Show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Show message badge
function showMessageBadge() {
    const messageBadge = document.getElementById('messageBadge');
    messageCount++;
    messageBadge.textContent = messageCount;
    messageBadge.style.display = 'flex';
}

// Generate AI response based on user input
function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for specific topics
    for (const [topic, data] of Object.entries(aiKnowledgeBase)) {
        const hasKeyword = data.keywords.some(keyword => message.includes(keyword));
        if (hasKeyword) {
            const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
            return randomResponse;
        }
    }
    
    // Check for math problems (simple pattern matching)
    if (message.includes('solve') && (message.includes('x') || message.includes('='))) {
        return solveMathProblem(userMessage);
    }
    
    // Check for study-related questions
    if (message.includes('how') && (message.includes('study') || message.includes('learn'))) {
        return "Here are some effective study strategies:\n\n1. **Active Recall**: Test yourself regularly instead of just re-reading\n2. **Spaced Repetition**: Review material at increasing intervals\n3. **Pomodoro Technique**: Study for 25 minutes, then take a 5-minute break\n4. **Teach Others**: Explain concepts to someone else\n5. **Create Mind Maps**: Visualize connections between topics\n\nWhat specific subject are you studying? I can provide more targeted advice!";
    }
    
    // Default responses
    const defaultResponses = [
        "That's a great question! I'd be happy to help you understand this topic better. Could you provide more details about what specific aspect you'd like to learn about?",
        "I'm here to help with your studies! Could you tell me which subject this relates to? I can provide explanations, examples, or study tips.",
        "Interesting question! To give you the best help, could you specify which subject or topic you're asking about? I can explain concepts, solve problems, or provide study strategies.",
        "I'd love to help you with that! What subject area is this related to? I can provide detailed explanations and examples to help you understand better."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Solve simple math problems
function solveMathProblem(problem) {
    try {
        // Extract equation from the problem
        const equation = problem.replace(/[^0-9+\-*/().x= ]/g, '').trim();
        
        if (equation.includes('2x + 5 = 15')) {
            return "Let me solve this step by step:\n\n2x + 5 = 15\n\nStep 1: Subtract 5 from both sides\n2x = 15 - 5\n2x = 10\n\nStep 2: Divide both sides by 2\nx = 10 ÷ 2\nx = 5\n\nSo the answer is x = 5!";
        }
        
        if (equation.includes('x') && equation.includes('=')) {
            return "I can help you solve this equation! For linear equations like this, remember to:\n\n1. **Isolate the variable** (get x by itself)\n2. **Do the same operation to both sides**\n3. **Simplify step by step**\n\nCould you write the equation more clearly? For example: '2x + 3 = 11'";
        }
        
        return "I'd be happy to help you solve this math problem! Could you write the equation more clearly? For example: '2x + 5 = 15' or '3x - 7 = 14'";
        
    } catch (error) {
        return "I'd love to help you with this math problem! Could you write it out more clearly? For example: '2x + 5 = 15'";
    }
}

// Ask quick question (for quick buttons)
function askQuickQuestion(question) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value = question;
    sendMessage();
}

// Initialize AI assistant when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add AI assistant initialization here if needed
    console.log('AI Study Assistant initialized!');
});

// Login/Logout functionality
function checkUserLogin() {
    const userData = localStorage.getItem('edubridge_user');
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    const userName = document.getElementById('userName');
    
    if (userData) {
        const user = JSON.parse(userData);
        userName.textContent = `Welcome, ${user.name}`;
        userInfo.style.display = 'flex';
        loginBtn.style.display = 'none';
    } else {
        // Redirect to login page if not authenticated
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('edubridge_user');
    showMessage('Logged out successfully! Redirecting to login...', 'success');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message-toast');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}
