// ========================================================
// EXEMPLES DE PERSONNALISATION PAR BOOKMAKER
// ========================================================

/**
 * Ce fichier contient des exemples de configuration
 * pour créer des versions personnalisées du chatbot
 * pour chaque bookmaker.
 * 
 * Copiez le fichier et modifiez selon votre bookmaker.
 */

// ========================================================
// VERSION 1XBET
// ========================================================

const CONFIG_1XBET = {
    PROMO_CODE: '1XBET_DBZ5',
    BOT_NAME: '1XBET Assistant',
    WELCOME_MESSAGE: `Bienvenue sur 1XBET! 👋\n\nJe suis votre assistant personnel pour:\n✅ L'inscription rapide\n✅ Les bonus de bienvenue\n✅ Les meilleurs pronostics\n✅ L'activation de votre compte`,
    PRIMARY_BOOKMAKER: '1XBET',
    PRIMARY_COLOR: '#FFCC00',
    SECONDARY_COLOR: '#FF6600'
};

// ========================================================
// VERSION MELBET
// ========================================================

const CONFIG_MELBET = {
    PROMO_CODE: 'MELBET_DBZ5',
    BOT_NAME: 'MELBET Assistant',
    WELCOME_MESSAGE: `Bienvenue sur MELBET! 👋\n\nJe suis votre assistant MELBET:\n✅ Inscription gratuite\n✅ Bonus exclusifs\n✅ Cotes compétitives\n✅ Support 24/7`,
    PRIMARY_BOOKMAKER: 'MELBET',
    PRIMARY_COLOR: '#FF0000',
    SECONDARY_COLOR: '#CC0000'
};

// ========================================================
// VERSION PARIPESA
// ========================================================

const CONFIG_PARIPESA = {
    PROMO_CODE: 'PARIPESA_DBZ5',
    BOT_NAME: 'PARIPESA Assistant',
    WELCOME_MESSAGE: `Bienvenue sur PARIPESA! 👋\n\nAssistant PARIPESA à votre service:\n✅ Inscription simple\n✅ Bonus généreux\n✅ Retraits rapides\n✅ Paris mobiles`,
    PRIMARY_BOOKMAKER: 'PARIPESA',
    PRIMARY_COLOR: '#1E90FF',
    SECONDARY_COLOR: '#4169E1'
};

// ========================================================
// COMMENT UTILISER CES CONFIGURATIONS
// ========================================================

/**
 * MÉTHODE 1: Créer un fichier séparé par bookmaker
 * 
 * 1. Dupliquez index.html en "index-1xbet.html"
 * 2. Dupliquez app.js en "app-1xbet.js"
 * 3. Modifiez app-1xbet.js avec CONFIG_1XBET
 * 4. Mettez à jour la référence dans index-1xbet.html:
 *    <script src="app-1xbet.js"></script>
 * 
 * Résultat: https://votresite.com/index-1xbet.html
 */

/**
 * MÉTHODE 2: Utiliser un paramètre URL
 * 
 * 1. Modifiez app.js pour lire le paramètre URL:
 *    const bookmaker = new URLSearchParams(window.location.search).get('bookmaker') || 'default';
 * 
 * 2. Charger la bonne configuration:
 *    const CONFIG = bookmaker === '1xbet' ? CONFIG_1XBET : 
 *                   bookmaker === 'melbet' ? CONFIG_MELBET : 
 *                   DEFAULT_CONFIG;
 * 
 * Résultat: https://votresite.com/?bookmaker=1xbet
 */

// ========================================================
// EXEMPLE: CHARGER LA CONFIG SELON LE BOOKMAKER
// ========================================================

function getConfigByBookmaker(bookmakerName) {
    const configs = {
        '1xbet': CONFIG_1XBET,
        'melbet': CONFIG_MELBET,
        'paripesa': CONFIG_PARIPESA
    };
    
    return configs[bookmakerName.toLowerCase()] || configs['1xbet'];
}

// Utilisation dans app.js:
// const currentBookmaker = new URLSearchParams(window.location.search).get('bm') || '1xbet';
// const CONFIG = getConfigByBookmaker(currentBookmaker);

// ========================================================
// RÉPONSES PERSONNALISÉES PAR BOOKMAKER
// ========================================================

const BOOKMAKER_RESPONSES = {
    '1xbet': {
        'inscription': `Inscription sur 1XBET 📱\n\n1️⃣ Visitez 1xbet.com\n2️⃣ Code promo: ${CONFIG_1XBET.PROMO_CODE}\n3️⃣ Bonus +50% sur dépôt\n4️⃣ Bonus spins gratuits\n\n👉 Plus d'info en bas de page!`,
    },
    'melbet': {
        'inscription': `Inscription sur MELBET 📱\n\n1️⃣ Visitez melbet.com\n2️⃣ Code promo: ${CONFIG_MELBET.PROMO_CODE}\n3️⃣ Bonus bienvenue: 100%\n4️⃣ Freebets offerts\n\n👉 Plus d'info en bas de page!`,
    },
    'paripesa': {
        'inscription': `Inscription sur PARIPESA 📱\n\n1️⃣ Visitez paripesa.com\n2️⃣ Code promo: ${CONFIG_PARIPESA.PROMO_CODE}\n3️⃣ Bonus dépôt 150%\n4️⃣ Cashback 10%\n\n👉 Plus d'info en bas de page!`,
    }
};

// ========================================================
// COPIER-COLLER: MODÈLE DE CUSTOMISATION COMPLÈTE
// ========================================================

/**
 * Pour créer une version personnalisée complète:
 * 
 * 1. DUPLIQUEZ les fichiers:
 *    - index.html → index-MONBOOKMAKER.html
 *    - app.js → app-MONBOOKMAKER.js
 * 
 * 2. MODIFIEZ app-MONBOOKMAKER.js:
 *    
 *    // Ligne 1-30: Remplacez la section CONFIG
 *    const CONFIG = {
 *        PROMO_CODE: 'MON_CODE_PROMO',
 *        YOUTUBE_LINK: 'MON_LIEN_YOUTUBE',
 *        // ... etc
 *    };
 * 
 * 3. MODIFIEZ index-MONBOOKMAKER.html:
 *    
 *    Ligne finale: remplacez
 *    <script src="app.js"></script>
 *    par
 *    <script src="app-MONBOOKMAKER.js"></script>
 * 
 * 4. TESTEZ:
 *    Ouvrez index-MONBOOKMAKER.html dans le navigateur
 * 
 * 5. DÉPLOYEZ:
 *    Uploadez les fichiers sur votre serveur
 */

// ========================================================
// EXEMPLE COMPLET: VERSION SPEEDBET
// ========================================================

/**
 * Pas de réel bookmaker "SPEEDBET", c'est un exemple
 * pour montrer comment faire une version personnalisée.
 */

const CONFIG_SPEEDBET_EXAMPLE = {
    PROMO_CODE: 'SPEEDBET_MAX',
    YOUTUBE_LINK: 'https://www.youtube.com/watch?v=SPEEDBET_VIDEO',
    BOOKMAKERS: [
        { name: 'SPEEDBET DIRECT', url: 'https://speedbet.com?promo=SPEEDBET_MAX' },
        { name: '1XBET Partenaire', url: 'https://1xbet.com?promo=SPEEDBET_MAX' },
        { name: 'MELBET Partenaire', url: 'https://melbet.com?promo=SPEEDBET_MAX' },
    ],
    SOCIAL_NETWORKS: [
        { name: 'Facebook SPEEDBET', icon: '👍', url: 'https://facebook.com/speedbet' },
        { name: 'Discord', icon: '🎮', url: 'https://discord.gg/speedbet' },
        { name: 'Twitch', icon: '📺', url: 'https://twitch.tv/speedbet' },
    ],
    BOT_NAME: '⚡ SPEEDBET Assistant',
    WELCOME_MESSAGE: `Bienvenue chez SPEEDBET! ⚡\n\nVitesse et fiabilité garanties:\n✅ Paris instantanés\n✅ Retraits en 5 minutes\n✅ Cotes boostées quotidiennes\n✅ Support ultra-rapide`,
    PRIMARY_COLOR: '#FF0080',
    SECONDARY_COLOR: '#00D9FF',
};

// ========================================================
// MIGRATION D'UN SITE EXISTANT
// ========================================================

/**
 * Si vous avez déjà un site web et voulez intégrer le chatbot:
 * 
 * 1. COPIER le dossier "joel" complet
 * 
 * 2. PLACER dans votre répertoire racine ou sous-dossier:
 *    www/
 *    ├── index.html (votre page)
 *    └── chatbot/
 *        ├── index.html
 *        ├── app.js
 *        └── ...
 * 
 * 3. INTÉGRER dans votre page HTML (ex: footer):
 *    <iframe src="/chatbot/index.html" 
 *            style="width:100%;height:600px;border:none;border-radius:10px;">
 *    </iframe>
 * 
 * 4. OU créer un bouton flottant (floating button):
 *    <a href="/chatbot/index.html" 
 *       target="_blank"
 *       style="position:fixed;bottom:20px;right:20px;
 *              width:60px;height:60px;
 *              background:#007AFF;border-radius:50%;
 *              display:flex;align-items:center;justify-content:center;
 *              color:white;font-size:24px;z-index:9999;
 *              box-shadow:0 5px 20px rgba(0,0,0,0.3);
 *              text-decoration:none;">
 *       💬
 *    </a>
 */

// ========================================================
// STATISTICS & ANALYTICS
// ========================================================

/**
 * Pour tracker les interactions, ajoutez à app.js:
 * 
 * function trackEvent(eventName, data) {
 *     console.log(`EVENT: ${eventName}`, data);
 *     
 *     // Google Analytics
 *     if (typeof gtag !== 'undefined') {
 *         gtag('event', eventName, data);
 *     }
 *     
 *     // Ou votre API:
 *     fetch('/api/analytics', {
 *         method: 'POST',
 *         headers: {'Content-Type': 'application/json'},
 *         body: JSON.stringify({
 *             event: eventName,
 *             timestamp: new Date(),
 *             data: data
 *         })
 *     });
 * }
 * 
 * // Utilisez comme:
 * trackEvent('quick_action_clicked', { action: 'inscription' });
 * trackEvent('question_asked', { question: message });
 * trackEvent('bookmaker_clicked', { bookmaker: name });
 */

// ========================================================
// NOTES FINALES
// ========================================================

/**
 * ✅ POINTS IMPORTANTS:
 * 
 * 1. Testez toujours après modification
 * 2. Gardez les fichiers originaux comme sauvegarde
 * 3. Utilisez un suffixe pour les versions (ex: -1xbet)
 * 4. Mettez à jour les liens dans les fichiers index
 * 5. Testez sur mobile ET desktop
 * 6. Vérifiez les liens externes (YouTube, réseaux)
 * 7. Utilisez HTTPS pour la sécurité
 * 8. Optimisez les images/vidéos pour la vitesse
 * 
 * ❌ PIÈGES À ÉVITER:
 * 
 * 1. Ne pas oublier les guillemets dans les modifications
 * 2. Ne pas casser le JSON avec des caractères spéciaux
 * 3. Ne pas laisser des URLs invalides
 * 4. Ne pas modifier les lignes de code sans savoir
 * 5. Ne pas effacer les fichiers critiques
 * 
 * 🚀 PROCHAINES ÉTAPES:
 * 
 * 1. Personnalisez votre version
 * 2. Testez en local
 * 3. Déployez en ligne
 * 4. Partagez le lien
 * 5. Suivez les conversions
 * 6. Optimisez selon les stats
 */
