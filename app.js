// ========== CONFIGURATION ==========
const CONFIG = {
    PROMO_CODE: 'DBZ5',
    FIRST_DEPOSIT_BONUS: '3000F',
    YOUTUBE_LINK: 'https://youtube.com/shorts/8WcwWFXelM8?si=3mk-7gfDPMl509x-',
    YOUTUBE_TITLE: 'Vidéo d\'inscription Rapide',
    BOOKMAKERS: [
        { 
            name: '1XBET', 
            inscription: 'https://affpa.top/L?tag=d_3539418m_97c_&site=3539418&ad=97',
            telecharger: 'https://1xbet.fr.uptodown.com/android',
            color: '🔵'
        },
        { 
            name: 'MELBET', 
            inscription: 'https://refpa3665.com/L?tag=d_3616934m_2170c_&site=3616934&ad=2170',
            telecharger: 'https://melbet.fr.uptodown.com/android',
            color: '🟠'
        },
        { 
            name: 'PARIPESA', 
            inscription: 'https://paripesa.bet/dbz5',
            telecharger: 'https://paripesa.fr.uptodown.com/android',
            color: '🔵'
        },
        { 
            name: 'BETWINNER', 
            inscription: 'https://betwinner.com/amp/en',
            telecharger: 'https://betwinner.fr.uptodown.com/android',
            color: '⚪'
        },
        { 
            name: 'WINWIN', 
            inscription: 'https://refpa712080.pro/L?tag=d_4492720m_64485c_&site=4492720&ad=64485',
            telecharger: 'https://org-winwin-client.fr.uptodown.com/android',
            color: '🟢'
        },
        { 
            name: 'MEGAPARI', 
            inscription: 'https://dbz5.megapari-642806.net',
            telecharger: 'https://megapari.uptodown.com/android',
            color: '💜'
        },
        { 
            name: 'LINEBET', 
            inscription: 'https://linebet.com?promo=DBZ5',
            telecharger: 'https://linebet.com/download',
            color: '🟡'
        }
    ],
    SOCIAL_NETWORKS: [
        { name: 'Canal Telegram', icon: '✈', url: 'https://t.me/+ohW8MWN_N5QyNTE0' },
        { name: 'Contact Telegram', icon: '🟢', url: 'https://t.me/inconnu_xpro' },
        { name: 'Chaîne WhatsApp', icon: '💬', url: 'https://whatsapp.com/channel/0029Vb6ZPNE3bbV9ZlCKLO1q' },
        { name: 'Page Facebook', icon: 'f', url: 'https://www.facebook.com/share/14PYiWiBJ4k/?mibextid=wwXIfr' },
        { name: 'Compte TikTok', icon: '🎵', url: 'https://www.tiktok.com/@goat.p8?_r=1&_t=ZS-96vbLEwPpgn' }
    ],
    GAME_TIPS: [
        { title: 'Comprendre les cotes', url: 'https://www.youtube.com/results?search_query=comprendre+les+cotes+pari+sportif' },
        { title: 'Gestion de bankroll', url: 'https://www.youtube.com/results?search_query=gestion+bankroll+pari+sportif' },
        { title: 'Astuces football', url: 'https://www.youtube.com/results?search_query=astuces+pari+football+debutant' },
        { title: 'Erreurs a eviter', url: 'https://www.youtube.com/results?search_query=erreurs+a+eviter+pari+sportif' },
        { title: 'Tutoriel DBZ5', url: 'https://youtube.com/shorts/8WcwWFXelM8?si=3mk-7gfDPMl509x-' }
    ],
    COTE_VIDEOS: [
        { title: 'FIFA', url: 'https://www.youtube.com/results?search_query=astuces+jeu+FIFA+pari' },
        { title: 'JEU21', url: 'https://www.youtube.com/results?search_query=astuces+jeu+21+cartes' },
        { title: 'POKER', url: 'https://www.youtube.com/results?search_query=astuces+poker+debutant' },
        { title: 'PARI SPORTIF', url: 'https://www.youtube.com/results?search_query=astuces+pari+sportif+debutant' }
    ]
};

// ========== KNOWLEDGE BASE ==========
const KNOWLEDGE_BASE = {
    'inscription|s\'inscrire|compte|créer un compte': {
        title: 'Comment s\'inscrire',
        responses: [
            `🏆 Bienvenue! 👋\n\n📝 Pour s'inscrire avec le code promo ${CONFIG.PROMO_CODE}:\n\n1️⃣ Cliquez sur le lien d'inscription ci-dessous\n2️⃣ Remplissez vos informations\n3️⃣ ⚠️ IMPORTANT: Il est OBLIGATOIRE de faire un dépôt pour activer le compte!\n4️⃣ 💰 Première recharge: ${CONFIG.FIRST_DEPOSIT_BONUS} bonus!\n5️⃣ Commencez à parier!\n\n🎁 Tous les liens et téléchargements en bas de page! 👇`,
            
            `📱 Liens d'inscription disponibles:\n\n🔵 1XBET\n🟠 MELBET\n🔵 PARIPESA\n⚪ BETWINNER\n🟢 WINWIN\n💜 MEGAPARI\n🟡 LINEBET\n\n⚠️ Les inscriptions SANS dépôt ne marchent PAS\n💰 Dépôt minimum requis: ${CONFIG.FIRST_DEPOSIT_BONUS} bonus!\n\n👉 Utilisez les liens en bas de page avec le code: ${CONFIG.PROMO_CODE}`,
            
            `✅ Voici comment faire:\n\n1️⃣ Inscrivez-vous via nos liens\n2️⃣ Confirmez votre email\n3️⃣ Faites un dépôt (obligatoire!)\n4️⃣ Recevez ${CONFIG.FIRST_DEPOSIT_BONUS} bonus!\n5️⃣ Activez votre compte\n\n❌ ATTENTION: Sans dépôt = pas d'accès au compte!\n\n✨ Tous les bookmakers en bas de page!`
        ]
    },
    'coupon|télécharger|download|grosse cote|application': {
        title: 'Problème de téléchargement de coupon',
        responses: [
            `📥 Téléchargement des applications\n\n${CONFIG.BOOKMAKERS.map(bm => `${bm.color} ${bm.name}\nLien téléchargement: ${bm.telecharger}\nLien inscription: ${bm.inscription}`).join('\n\n')}\n\n⚠️ Instructions obligatoires:\n1️⃣ Faites une inscription complète avec le code promo ${CONFIG.PROMO_CODE}\n2️⃣ Faites la première recharge de ${CONFIG.FIRST_DEPOSIT_BONUS}\n3️⃣ Remplissez obligatoirement le profil personnel de votre compte\n4️⃣ Vérifiez que le compte est complet avant de jouer`,
            
            `📥 Liens directs de téléchargement\n\n${CONFIG.BOOKMAKERS.map(bm => `${bm.color} ${bm.name}: ${bm.telecharger}`).join('\n')}\n\nObligatoire après téléchargement:\n✅ Inscription complète avec le code ${CONFIG.PROMO_CODE}\n✅ Première recharge de ${CONFIG.FIRST_DEPOSIT_BONUS}\n✅ Profil personnel du compte entièrement rempli`,
            
            `Pour télécharger les applications:\n\n${CONFIG.BOOKMAKERS.map(bm => `⬇️ ${bm.name}\n${bm.telecharger}`).join('\n\n')}\n\n⚠️ À faire obligatoirement:\n1️⃣ S'inscrire complètement avec ${CONFIG.PROMO_CODE}\n2️⃣ Recharger ${CONFIG.FIRST_DEPOSIT_BONUS}\n3️⃣ Remplir le profil personnel du compte`
        ]
    },
    'activation|activer|code d\'activation|dépôt|deposit': {
        title: 'Activation du compte',
        responses: [
            `🔓 Activation de votre compte 👇\n\n1️⃣ Choisissez un bookmaker dans la liste\n2️⃣ Cliquez sur le lien d'inscription\n3️⃣ Créez un compte complet avec le code promo ${CONFIG.PROMO_CODE}\n4️⃣ Confirmez votre email ou téléphone si demandé\n5️⃣ Faites la première recharge obligatoire de ${CONFIG.FIRST_DEPOSIT_BONUS}\n6️⃣ Allez dans le profil personnel du compte\n7️⃣ Remplissez toutes les informations personnelles demandées\n8️⃣ Vérifiez que le profil est complet avant de jouer\n\n❌ Sans recharge et sans profil complété, le compte peut rester bloqué!`,
            
            `📌 INFORMATION IMPORTANTE! 🚨\n\nPour activer correctement le compte:\n1️⃣ Inscription complète avec le code promo ${CONFIG.PROMO_CODE}\n2️⃣ Confirmation email/téléphone si demandée\n3️⃣ Première recharge obligatoire de ${CONFIG.FIRST_DEPOSIT_BONUS}\n4️⃣ Profil personnel rempli avec les vraies informations\n5️⃣ Vérification du compte avant de jouer\n\n⚠️ Sans recharge ou profil incomplet, l'activation peut échouer.`,
            
            `Activation rapide! ⚡\n\n✅ Étapes obligatoires:\n1️⃣ Créez le compte via nos liens\n2️⃣ Entrez le code promo ${CONFIG.PROMO_CODE}\n3️⃣ Rechargez ${CONFIG.FIRST_DEPOSIT_BONUS}\n4️⃣ Complétez le profil personnel\n5️⃣ Contrôlez que toutes les informations sont validées\n\nBesoin d'aide? Utilisez la bulle réseaux sociaux.`
        ]
    },
    'grosse cote|cotes|pariable|meilleures cotes|pronostic|fifa|jeu21|jeu 21|poker|parie sportif|pari sportif': {
        title: 'Comment télécharger les grosse cote',
        responses: [
            `📊 Vidéos par jeu\n\n${CONFIG.COTE_VIDEOS.map(video => `▶ ${video.title}\n${video.url}`).join('\n\n')}\n\nAvant de jouer: inscription complète avec ${CONFIG.PROMO_CODE}, première recharge ${CONFIG.FIRST_DEPOSIT_BONUS}, profil personnel complété.`,
            
            `🎬 Vidéos utiles pour les jeux:\n\n${CONFIG.COTE_VIDEOS.map(video => `• ${video.title}: ${video.url}`).join('\n')}\n\nRappel: inscription complète, code ${CONFIG.PROMO_CODE}, recharge ${CONFIG.FIRST_DEPOSIT_BONUS}, profil personnel complété.`
        ]
    },
    'réseau|réseaux|reseaux|suivre|instagram|facebook|tiktok|youtube|telegram|whatsapp|joindre|contact': {
        title: 'Me suivre sur les réseaux',
        responses: [
            `💻 Suivez-moi sur mes différents réseaux!\n\nCanal Telegram:\nhttps://t.me/+ohW8MWN_N5QyNTE0\n\nContact Telegram:\n🟢 @inconnu_xpro 🟢\nhttps://t.me/inconnu_xpro\n\nChaîne WhatsApp:\nhttps://whatsapp.com/channel/0029Vb6ZPNE3bbV9ZlCKLO1q\n\nPage Facebook:\nhttps://www.facebook.com/share/14PYiWiBJ4k/?mibextid=wwXIfr\n\nCompte TikTok:\nhttps://www.tiktok.com/@goat.p8?_r=1&_t=ZS-96vbLEwPpgn\n\n🎁 Code promo: ${CONFIG.PROMO_CODE}`,
            
            `Comment me joindre de partout:\n\n✈️ Canal Telegram: https://t.me/+ohW8MWN_N5QyNTE0\n🟢 Contact Telegram: @inconnu_xpro\n💬 Chaîne WhatsApp: https://whatsapp.com/channel/0029Vb6ZPNE3bbV9ZlCKLO1q\n👥 Facebook: https://www.facebook.com/share/14PYiWiBJ4k/?mibextid=wwXIfr\n🎵 TikTok: https://www.tiktok.com/@goat.p8?_r=1&_t=ZS-96vbLEwPpgn\n\nBonus: ${CONFIG.FIRST_DEPOSIT_BONUS}`
        ]
    },
    'vidéo|tutorial|comment faire|guide': {
        title: 'Tutoriel vidéo',
        responses: [
            `🎬 Vidéo tutoriel disponible!\n\nVoici comment faire:\n✅ S'inscrire avec ${CONFIG.PROMO_CODE}\n✅ Faire dépôt (${CONFIG.FIRST_DEPOSIT_BONUS} bonus)\n✅ Placer vos premiers paris\n✅ Télécharger les coupons\n✅ Gérer vos gains\n\n👈 Cliquez sur "VIDÉO TUTORIEL"!`,
            
            `📹 Guide complet disponible!\n\nNous montrons:\n• Inscription en 2 minutes\n• Code promo: ${CONFIG.PROMO_CODE}\n• Bonus dépôt: ${CONFIG.FIRST_DEPOSIT_BONUS}\n• Placement des paris\n• Gestion des gains\n\nTrès facile à suivre!`
        ]
    },
    'astuce|astuces|jeu|jeux|video jeu|vidéo jeu|conseil|conseils|bankroll': {
        title: 'Astuce de jeu',
        responses: [
            `💡 Astuces de jeu\n\n${CONFIG.GAME_TIPS.map(tip => `▶ ${tip.title}\n${tip.url}`).join('\n\n')}\n\nJouez toujours avec une mise maîtrisée.`,
            `🎬 Vidéos utiles pour progresser:\n\n${CONFIG.GAME_TIPS.map(tip => `• ${tip.title}: ${tip.url}`).join('\n')}\n\nCode promo: ${CONFIG.PROMO_CODE}`
        ]
    }
};

// ========== STATE MANAGEMENT ==========
let chatMessages = [];
let darkMode = localStorage.getItem('darkMode') !== 'false';
let currentActiveButton = null;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    applyTheme();
});

function initializeApp() {
    const root = document.getElementById('root');
    root.innerHTML = renderApp();
    initializeChat();
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Quick action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleQuickAction(e.target);
        });
    });

    // Chat input
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    sendBtn.addEventListener('click', sendMessage);
}

// ========== THEME MANAGEMENT ==========
function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyTheme();
}

function applyTheme() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('themeToggle').textContent = '🌙';
    }
}

// ========== MESSAGE HANDLING ==========
function initializeChat() {
    const messagesContainer = document.getElementById('chatMessages');
    chatMessages = [];
    
    // Welcome message
    const welcomeMessage = {
        type: 'bot',
        text: `🏆 Bienvenue! 👋\n\nBonjour et bienvenue! Je suis votre Assistant Pronostics. Je suis ici pour vous aider avec:\n\n✅ Inscription sur les meilleurs bookmakers\n✅ Téléchargement des applications\n✅ Activation de compte\n✅ Accès à nos pronostics gratuits\n✅ Nos réseaux sociaux\n\n⚠️ 🆘 IMPORTANT 🆘:\nLes inscriptions SANS DÉPÔT ne marchent PAS!\nDépôt obligatoire: ${CONFIG.FIRST_DEPOSIT_BONUS} = Bonus garanti 🎁\n\nCode promo: ${CONFIG.PROMO_CODE}\n\nComment commencer? Cliquez sur les boutons à gauche ou écrivez votre question! 💬`,
        time: new Date()
    };
    
    chatMessages.push(welcomeMessage);
    updateMessagesDisplay();
}

function handleQuickAction(button) {
    if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
    }
    button.classList.add('active');
    currentActiveButton = button;

    const action = button.textContent.trim();
    
    // Add user message
    const userMessage = {
        type: 'user',
        text: action,
        time: new Date()
    };
    chatMessages.push(userMessage);

    // Find matching response
    let foundResponse = false;
    for (const [keywords, data] of Object.entries(KNOWLEDGE_BASE)) {
        if (matchKeywords(action, keywords)) {
            const responses = data.responses;
            const botMessage = {
                type: 'bot',
                text: responses[Math.floor(Math.random() * responses.length)],
                time: new Date()
            };
            chatMessages.push(botMessage);
            foundResponse = true;
            break;
        }
    }

    updateMessagesDisplay();
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (!message) return;

    // Clear input
    chatInput.value = '';
    chatInput.style.height = 'auto';

    // Add user message
    const userMessage = {
        type: 'user',
        text: message,
        time: new Date()
    };
    chatMessages.push(userMessage);

    // Find matching response
    let foundResponse = false;
    let botResponse = '';

    for (const [keywords, data] of Object.entries(KNOWLEDGE_BASE)) {
        if (matchKeywords(message, keywords)) {
            const responses = data.responses;
            botResponse = responses[Math.floor(Math.random() * responses.length)];
            foundResponse = true;
            break;
        }
    }

    // Default response if no match
    if (!foundResponse) {
        botResponse = `Je suis désolé, je n'ai pas compris votre question complètement. 🤔\n\nJe suis spécialisé dans:\n• Inscription et activation de compte\n• Téléchargement des coupons\n• Problèmes techniques\n• Nos réseaux sociaux\n\nPouvez-vous reformuler votre question ou cliquer sur l'un des boutons à gauche? 👈`;
    }

    // Add bot message with slight delay for better UX
    setTimeout(() => {
        const botMessage = {
            type: 'bot',
            text: botResponse,
            time: new Date()
        };
        chatMessages.push(botMessage);
        updateMessagesDisplay();
    }, 300);

    updateMessagesDisplay();
}

function matchKeywords(userMessage, keywords) {
    const normalizedMessage = userMessage.toLowerCase();
    const keywordList = keywords.split('|').map(k => k.trim());
    
    return keywordList.some(keyword => normalizedMessage.includes(keyword));
}

function updateMessagesDisplay() {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = chatMessages.map(msg => {
        const time = msg.time.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        return `
            <div class="message ${msg.type}">
                ${msg.type === 'bot' ? `
                    <div class="message-avatar">AS</div>
                    <div class="message-content">
                        <div class="message-bubble">${msg.text}</div>
                        <div class="message-time">${time}</div>
                    </div>
                ` : `
                    <div class="message-content">
                        <div class="message-bubble">${msg.text}</div>
                        <div class="message-time">${time}</div>
                    </div>
                    <div class="message-avatar">V</div>
                `}
            </div>
        `;
    }).join('');

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ========== UI RENDERING ==========
function renderApp() {
    return `
        <!-- HEADER -->
        <div class="header">
            <h1>🤖 Assistant Pronostics</h1>
            <div class="header-controls">
                <button id="themeToggle" class="theme-toggle">🌙</button>
                <div class="status-badge">En ligne</div>
            </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="main-content">
            <!-- LEFT SECTION - QUICK ACTIONS -->
            <div class="quick-actions">
                <h3>Actions Rapides</h3>
                <div class="action-buttons">
                    <button class="action-btn">💳 Comment s'inscrire</button>
                    <button class="action-btn">⬇️ Problème de téléchargement</button>
                    <button class="action-btn">🔓 Activation du compte</button>
                    <button class="action-btn">📊 Grosse cote</button>
                    <button class="action-btn">📱 Me suivre</button>
                    <button class="action-btn">💡 Astuce de jeu</button>
                </div>

                <div class="video-section">
                    <h4>📹 Vidéo Tutoriel</h4>
                    <a href="${CONFIG.YOUTUBE_LINK}" target="_blank" class="video-link">
                        ▶️ Regarder le tutoriel
                    </a>
                </div>
            </div>

            <!-- CHAT SECTION -->
            <div class="chat-section">
                <div class="chat-messages" id="chatMessages">
                    <div class="welcome-message">
                        <h2>Bienvenue! 👋</h2>
                        <p>Je suis votre Assistant Pronostics. Comment puis-je vous aider?</p>
                    </div>
                </div>

                <div class="chat-input-section">
                    <div class="input-container">
                        <div class="input-box">
                            <input 
                                type="text" 
                                id="chatInput" 
                                class="chat-input" 
                                placeholder="Écrivez votre question..."
                                autocomplete="off"
                            >
                        </div>
                        <button id="sendBtn" class="send-btn">📤</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <div class="footer">
            <div class="footer-content">
                <!-- BOOKMAKERS -->
                <div class="footer-section">
                    <h4>🎯 Nos Bookmakers - Code Promo: ${CONFIG.PROMO_CODE} | Bonus: ${CONFIG.FIRST_DEPOSIT_BONUS}</h4>
                    <p style="font-size: 11px; color: red; margin-bottom: 10px; font-weight: bold;">⚠️ Les inscriptions sans dépôt ne marchent pas - Dépôt obligatoire!</p>
                    <div class="footer-links">
                        ${CONFIG.BOOKMAKERS.map(bm => `
                            <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; margin-bottom: 10px;">
                                <div style="font-weight: bold; color: #007AFF;">${bm.color} ${bm.name}</div>
                                <a href="${bm.inscription}" target="_blank" class="footer-link" style="font-size: 11px;">
                                    📝 S'inscrire
                                </a>
                                <a href="${bm.telecharger}" target="_blank" class="footer-link" style="font-size: 11px;">
                                    ⬇️ Télécharger App
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- SOCIAL NETWORKS -->
                <div class="footer-section">
                    <h4>📲 Suivez-moi sur les Réseaux</h4>
                    <div class="footer-links">
                        ${CONFIG.SOCIAL_NETWORKS.map(sn => `
                            <a href="${sn.url}" target="_blank" class="footer-link">
                                ${sn.icon} ${sn.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Auto-resize textarea
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 100) + 'px';
            });
        }
    }, 100);
});
