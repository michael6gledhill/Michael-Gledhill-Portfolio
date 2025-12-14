/**
 * AI-ASSISTANT.JS - Client-Side AI Q&A Assistant
 * 
 * This module implements a keyword-based Q&A system that answers questions
 * about the cadet's profile, achievements, and experience.
 * 
 * CUSTOMIZATION GUIDE:
 * 1. This system uses pattern matching against profile.json data
 * 2. Edit the qaPatterns object to add more questions/answers
 * 3. For advanced users: connect to external AI APIs by modifying queryAI()
 * 4. All responses are generated from profile data - update profile.json to change answers
 */

/**
 * Knowledge base for Q&A system
 * Maps keywords to response generation functions
 */
const qaPatterns = {
    // Leadership roles and positions
    leadership: {
        keywords: ['leadership', 'role', 'position', 'held', 'duty', 'responsibilities'],
        generateResponse: (data) => {
            if (!data.experience || data.experience.length === 0) {
                return "I haven't documented any leadership roles yet. Check back soon!";
            }
            
            const roles = data.experience.map(exp => `${exp.title} (${exp.date})`).join(', ');
            return `My leadership roles include: ${roles}. Each position has helped me develop key skills in team coordination, strategic thinking, and cadet mentorship.`;
        }
    },
    
    // CAP Training
    training: {
        keywords: ['training', 'course', 'certifid', 'qualified', 'completed', 'school'],
        generateResponse: (data) => {
            const awards = data.awards ? data.awards.filter(a => 
                a.description?.toLowerCase().includes('training') || 
                a.title?.toLowerCase().includes('school')
            ) : [];
            
            if (awards.length === 0) {
                return "I've completed various CAP training programs. Update profile.json to showcase specific certifications!";
            }
            
            const training = awards.map(a => a.title).join(', ');
            return `I've completed the following CAP training: ${training}.`;
        }
    },
    
    // Accomplishments
    accomplishments: {
        keywords: ['accomplish', 'achieve', 'best', 'proud', 'success'],
        generateResponse: (data) => {
            if (!data.awards || data.awards.length === 0) {
                return "I'm proud of my contributions to CAP. Add awards to profile.json to highlight specific accomplishments!";
            }
            
            const topAwards = data.awards.slice(0, 3);
            const accomplishments = topAwards.map(a => a.title).join(', ');
            return `Some of my proudest accomplishments include receiving: ${accomplishments}. These represent my dedication to excellence and service in Civil Air Patrol.`;
        }
    },
    
    // Awards and recognition
    awards: {
        keywords: ['award', 'medal', 'recognition', 'honor', 'ribbon'],
        generateResponse: (data) => {
            if (!data.awards || data.awards.length === 0) {
                return "I have earned several awards. Add them to profile.json to showcase your achievements!";
            }
            
            const awardsList = data.awards.map(a => `${a.title} (${a.date})`).join(', ');
            return `My awards and recognitions include: ${awardsList}. Each represents a milestone in my CAP journey.`;
        }
    },
    
    // Service and activities
    service: {
        keywords: ['service', 'volunteer', 'activity', 'event', 'encampment', 'emergency'],
        generateResponse: (data) => {
            if (!data.activities || data.activities.length === 0) {
                return "I'm involved in various CAP activities. Add details to profile.json to share your service record!";
            }
            
            const activities = data.activities.slice(0, 3).map(a => a.title).join(', ');
            return `I've participated in several CAP activities including: ${activities}. These experiences have deepened my commitment to CAP's missions.`;
        }
    },
    
    // CAP background
    background: {
        keywords: ['bio', 'background', 'about', 'tell', 'who', 'yourself', 'story'],
        generateResponse: (data) => {
            return data.bio || "I'm a dedicated Civil Air Patrol member committed to leadership, excellence, and service. Update profile.json to add your personal story!";
        }
    },
    
    // Rank information
    rank: {
        keywords: ['rank', 'promoted', 'promotion', 'cadet', 'officer'],
        generateResponse: (data) => {
            const rank = data.rank || 'Cadet';
            return `My current rank is ${rank}. My journey through CAP has been marked by progressive responsibility and a commitment to developing the next generation of aerospace leaders.`;
        }
    },
    
    // Skills
    skills: {
        keywords: ['skill', 'expertise', 'capable', 'trained', 'competent'],
        generateResponse: (data) => {
            if (!data.skills) {
                return "I have developed a range of leadership and technical skills. Add them to profile.json!";
            }
            
            const leadershipSkills = (data.skills.leadership || []).slice(0, 3).join(', ');
            const technicalSkills = (data.skills.technical || []).slice(0, 3).join(', ');
            
            let response = "My key skills include: ";
            if (leadershipSkills) response += `Leadership - ${leadershipSkills}. `;
            if (technicalSkills) response += `Technical - ${technicalSkills}.`;
            
            return response || "I'm developing diverse skill sets. Update profile.json to highlight your competencies!";
        }
    },
    
    // Contact/collaboration
    collaboration: {
        keywords: ['contact', 'reach', 'connect', 'work', 'together', 'collaborate', 'email'],
        generateResponse: (data) => {
            const contact = data.contact || 'Use the links in the footer to get in touch!';
            return `I'd love to discuss leadership, CAP, or aviation! ${contact}`;
        }
    },
    
    // Default responses
    general: {
        keywords: [],
        generateResponse: (data) => {
            return `That's a great question! Browse my portfolio sections to learn more about my CAP experience, awards, and accomplishments. Or try asking about my leadership roles, training, or achievements!`;
        }
    }
};

/**
 * Main AI query function - processes user input and generates response
 * @param {string} query - User's question
 * @param {object} profileData - User's profile data from profile.json
 * @returns {string} AI response
 */
function queryAI(query, profileData) {
    const lowerQuery = query.toLowerCase();
    
    // Find matching pattern
    for (const [key, pattern] of Object.entries(qaPatterns)) {
        if (pattern.keywords.length === 0) continue; // Skip default
        
        const hasMatch = pattern.keywords.some(keyword => 
            lowerQuery.includes(keyword)
        );
        
        if (hasMatch) {
            try {
                return pattern.generateResponse(profileData);
            } catch (error) {
                console.error(`Error generating response for pattern ${key}:`, error);
                return qaPatterns.general.generateResponse(profileData);
            }
        }
    }
    
    // Fall back to general response
    return qaPatterns.general.generateResponse(profileData);
}

/**
 * Alternative: Connect to External AI API
 * FUTURE ENHANCEMENT: Uncomment and configure to use external AI services
 * 
 * async function queryExternalAI(query, profileData) {
 *     // Example: Connect to OpenAI API
 *     const response = await fetch('https://api.openai.com/v1/chat/completions', {
 *         method: 'POST',
 *         headers: {
 *             'Content-Type': 'application/json',
 *             'Authorization': `Bearer ${YOUR_API_KEY}`
 *         },
 *         body: JSON.stringify({
 *             model: 'gpt-3.5-turbo',
 *             messages: [{
 *                 role: 'user',
 *                 content: `Based on this CAP cadet profile: ${JSON.stringify(profileData)}, answer: ${query}`
 *             }],
 *             max_tokens: 200
 *         })
 *     });
 *     
 *     const data = await response.json();
 *     return data.choices[0].message.content;
 * }
 * 
 * STEPS TO IMPLEMENT:
 * 1. Get API key from external service (OpenAI, Anthropic, etc.)
 * 2. Replace YOUR_API_KEY above
 * 3. Update queryAI() to call queryExternalAI() instead
 * 4. Store API key securely (not in client-side code in production!)
 * 5. Consider using a backend proxy for security
 */

/**
 * Display user message in chat
 * @param {string} message - Message text
 */
function displayUserMessage(message) {
    const messagesContainer = document.getElementById('ai-messages');
    const messageEl = document.createElement('div');
    messageEl.className = 'ai-message ai-user';
    messageEl.innerHTML = `<p>${escapeHTML(message)}</p>`;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Display bot response in chat
 * @param {string} response - Response text
 */
function displayBotMessage(response) {
    const messagesContainer = document.getElementById('ai-messages');
    const messageEl = document.createElement('div');
    messageEl.className = 'ai-message ai-bot';
    messageEl.innerHTML = `<p>${escapeHTML(response)}</p>`;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHTML(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Handle user query submission
 * @param {string} userQuery - User's question
 */
function handleUserQuery(userQuery) {
    if (!userQuery.trim()) return;
    
    // Display user message
    displayUserMessage(userQuery);
    
    // Generate and display bot response
    if (profileData) {
        const response = queryAI(userQuery, profileData);
        
        // Simulate slight delay for better UX
        setTimeout(() => {
            displayBotMessage(response);
        }, 300);
    } else {
        displayBotMessage("I'm still loading profile data. Please try again in a moment!");
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    
    // Send button click
    if (aiSend) {
        aiSend.addEventListener('click', () => {
            const query = aiInput.value;
            if (query.trim()) {
                handleUserQuery(query);
                aiInput.value = '';
                aiInput.focus();
            }
        });
    }
    
    // Enter key to send
    if (aiInput) {
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = aiInput.value;
                if (query.trim()) {
                    handleUserQuery(query);
                    aiInput.value = '';
                }
            }
        });
    }
    
    // Suggestion buttons
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            if (question) {
                aiInput.value = question;
                handleUserQuery(question);
            }
        });
    });
});
