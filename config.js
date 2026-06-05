/**
 * CONFIGURATION DU CHATBOT - Assistant Pronostics
 * 
 * Modifiez ce fichier pour personnaliser votre chatbot
 * sans toucher au code principal (app.js)
 */

// ========== INFORMATIONS GÉNÉRALES ==========
const CHATBOT_CONFIG = {
    // Nom du bot
    BOT_NAME: 'Assistant Pronostics',
    
    // Code promo par défaut
    PROMO_CODE: 'DBZ5',
    
    // Lien YouTube du tutoriel
    YOUTUBE_LINK: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    
    // Message de bienvenue
    WELCOME_MESSAGE: `Bienvenue! 👋\n\nBonjour et bienvenue! Je suis votre Assistant Pronostics. Je suis ici pour vous aider avec:\n\n✅ Votre inscription sur les meilleurs bookmakers\n✅ Les problèmes techniques\n✅ Accès à nos pronostics gratuits\n✅ Nos réseaux sociaux\n\nComme commencer? Cliquez sur les boutons à gauche ou écrivez votre question! 💬`,
    
    // Message quand le chatbot ne comprend pas
    DEFAULT_MESSAGE: `Je suis désolé, je n'ai pas compris votre question complètement. 🤔\n\nJe suis spécialisé dans:\n• Inscription et activation de compte\n• Téléchargement des coupons\n• Problèmes techniques\n• Nos réseaux sociaux\n\nPouvez-vous reformuler votre question ou cliquer sur l'un des boutons à gauche? 👈`,
};

// ========== BOOKMAKERS ==========
const BOOKMAKERS_LIST = [
    { 
        name: '1XBET', 
        url: 'https://1xbet.com?promo=DBZ5',
        logo: '🎲'
    },
    { 
        name: 'MELBET', 
        url: 'https://melbet.com?promo=DBZ5',
        logo: '🎯'
    },
    { 
        name: 'PARIPESA', 
        url: 'https://paripesa.com?promo=DBZ5',
        logo: '💰'
    },
    { 
        name: 'BETWINNER', 
        url: 'https://betwinner.com?promo=DBZ5',
        logo: '🏆'
    },
    { 
        name: 'WINWIN', 
        url: 'https://winwin.com?promo=DBZ5',
        logo: '✨'
    },
    { 
        name: 'MEGAPARI', 
        url: 'https://megapari.com?promo=DBZ5',
        logo: '🎊'
    },
    { 
        name: 'LINEBET', 
        url: 'https://linebet.com?promo=DBZ5',
        logo: '📈'
    }
];

// ========== RÉSEAUX SOCIAUX ==========
const SOCIAL_NETWORKS_LIST = [
    { 
        name: 'Facebook', 
        icon: '👍', 
        url: 'https://facebook.com/YourProfile',
        description: 'Discussions et actualités'
    },
    { 
        name: 'TikTok', 
        icon: '🎵', 
        url: 'https://tiktok.com/@YourProfile',
        description: 'Clips et vidéos courtes'
    },
    { 
        name: 'Telegram', 
        icon: '✈️', 
        url: 'https://t.me/YourChannel',
        description: 'Canal public'
    },
    { 
        name: 'Groupe WhatsApp', 
        icon: '💬', 
        url: 'https://chat.whatsapp.com/YourGroupLink',
        description: 'Communauté active'
    },
    { 
        name: 'YouTube', 
        icon: '▶️', 
        url: 'https://youtube.com/@YourChannel',
        description: 'Tutoriels complets'
    },
    { 
        name: 'Instagram', 
        icon: '📷', 
        url: 'https://instagram.com/YourProfile',
        description: 'Photos et stories'
    }
];

// ========== BOUTONS D'ACTION RAPIDE ==========
const QUICK_ACTIONS = [
    {
        label: '💳 Comment s\'inscrire',
        category: 'inscription'
    },
    {
        label: '⬇️ Problème de téléchargement',
        category: 'coupon'
    },
    {
        label: '🔓 Activation du compte',
        category: 'activation'
    },
    {
        label: '📊 Grosse cote',
        category: 'grosse_cote'
    },
    {
        label: '📱 Me suivre',
        category: 'reseaux'
    }
];

// ========== BASE DE CONNAISSANCES DU CHATBOT ==========
const CHATBOT_RESPONSES = {
    // Catégorie: Inscription
    'inscription': {
        keywords: ['inscription', 's\'inscrire', 'compte', 'créer un compte', 'comment s\'inscrire', 'enregistrement'],
        responses: [
            `Bienvenue! 👋\n\nPour s'inscrire sur nos bookmakers partenaires et bénéficier de nos pronostics gratuits:\n\n1️⃣ Cliquez sur le lien d'un bookmaker ci-dessous\n2️⃣ Utilisez le code promo: ${CHATBOT_CONFIG.PROMO_CODE}\n3️⃣ Complétez votre inscription\n4️⃣ Commencez à parier!\n\nRegardez notre vidéo pour plus de détails.`,
            
            `Les bookmakers disponibles avec le code ${CHATBOT_CONFIG.PROMO_CODE}:\n• 1XBET\n• MELBET\n• PARIPESA\n• BETWINNER\n• WINWIN\n• MEGAPARI\n• LINEBET\n\nAccédez à tous les liens en bas de page! 👇`,
            
            `Inscription rapide! ⚡\n\nÉtapes simples:\n1️⃣ Email valide\n2️⃣ Mot de passe sécurisé\n3️⃣ Code promo: ${CHATBOT_CONFIG.PROMO_CODE}\n4️⃣ Vérification de l'email\n5️⃣ Prêt à parier!\n\nDes questions? 💬 Je suis là!`
        ]
    },
    
    // Catégorie: Téléchargement de coupon
    'coupon': {
        keywords: ['coupon', 'télécharger', 'download', 'grosse cote', 'téléchargement', 'problème', 'ne fonctionne pas'],
        responses: [
            `Je comprends votre problème de téléchargement de coupon! 📥\n\nVoici les solutions:\n• Vérifiez votre connexion Internet\n• Videz le cache de votre navigateur\n• Essayez un autre navigateur\n• Vérifiez les permissions de téléchargement\n• Contactez notre support sur WhatsApp 💬`,
            
            `Pour les grosse cotes et les coupons:\n\n✅ Vérifiez que JavaScript est activé\n✅ Désactiver les bloqueurs de pub\n✅ Télécharger les fichiers en PDF ou image\n✅ Suivez-nous sur nos réseaux pour les mises à jour\n\nBesoin d'aide? 📞 Écrivez-moi!`,
            
            `Problème de téléchargement résolu! 🔧\n\nEssayez:\n1️⃣ Navigateur à jour\n2️⃣ Désactivez les extensions\n3️⃣ Mode privé/incognito\n4️⃣ Autre appareil\n\nToujours pas bon? 📲 Rejoignez notre WhatsApp!`
        ]
    },
    
    // Catégorie: Activation du compte
    'activation': {
        keywords: ['activation', 'activer', 'code d\'activation', 'vérification', 'confirmer', 'activé', 'compte bloqué'],
        responses: [
            `Activation de votre compte 🔓\n\nPour activer votre compte:\n1️⃣ Vérifiez votre email de confirmation\n2️⃣ Cliquez sur le lien d'activation\n3️⃣ Remplissez les informations manquantes\n4️⃣ Vérifiez votre identité si demandé\n\nProblème? Contactez le support du bookmaker!`,
            
            `L'activation du compte est généralement instantanée! ⚡\n\nSi vous ne pouvez pas activer:\n• Vérifiez votre adresse email\n• Regardez le dossier "Spam"\n• Utilisez le code promo: ${CHATBOT_CONFIG.PROMO_CODE}\n• Attendez quelques minutes et réessayez\n\nToujours pas résolu? 📞 Nous sommes là!`,
            
            `Votre compte est presque prêt! 🎉\n\nÉtapes finales:\n1️⃣ Confirmer l'email\n2️⃣ Ajouter une méthode de paiement\n3️⃣ Vérifier l'identité (si demandé)\n4️⃣ Accepter les conditions\n\nC'est fait? Commencez à parier! 🎯`
        ]
    },
    
    // Catégorie: Grosse cote / Coupons
    'grosse_cote': {
        keywords: ['grosse cote', 'cotes', 'pariable', 'meilleures cotes', 'cote du jour', 'pronostic', 'analyse'],
        responses: [
            `Les meilleures cotes du jour! 🎯\n\n📊 Pour accéder aux grosse cotes:\n1️⃣ Inscrivez-vous avec le code ${CHATBOT_CONFIG.PROMO_CODE}\n2️⃣ Accédez à vos pronostics\n3️⃣ Téléchargez les coupons en PDF\n4️⃣ Placez vos paris!\n\nToutes les cotes sont mises à jour en temps réel! ⏱️`,
            
            `Stratégie pour les grosse cotes 💰\n\n✅ Diversifiez vos bookmakers\n✅ Comparez les cotes disponibles\n✅ Utilisez notre code promo: ${CHATBOT_CONFIG.PROMO_CODE}\n✅ Gérez votre bankroll wisely\n✅ Suivez nos analyses quotidiennes\n\nBonne chance! 🍀`,
            
            `Cotes exclusives et mises à jour! 📈\n\nChaque jour:\n📅 Nouvelles cotes analysées\n💡 Conseils stratégiques\n🔔 Alertes en temps réel\n📊 Comparaison des bookmakers\n\nSuivez-nous pour ne rien manquer! 🚀`
        ]
    },
    
    // Catégorie: Réseaux sociaux
    'reseaux': {
        keywords: ['réseau', 'suivre', 'instagram', 'facebook', 'tiktok', 'youtube', 'telegram', 'whatsapp', 'contact', 'réseaux sociaux'],
        responses: [
            `Suivez-moi sur les réseaux! 📱\n\nRestez connecté pour:\n📺 Analyse des matchs en direct\n💬 Conseils exclusifs\n🎁 Bonus et promis\n📊 Cotes en temps réel\n🔔 Notifications des matchs\n\nTous les liens sont en bas de page! 👇`,
            
            `Communauté active sur tous les réseaux! 🌟\n\n👥 Facebook: Discussions quotidiennes\n🎵 TikTok: Clips de victoires\n✈️ Telegram: Alertes en temps réel\n💬 WhatsApp: Support direct\n📺 YouTube: Tutoriels complets\n📷 Instagram: Actualités du jour\n\nRejoingnez-nous maintenant!`,
            
            `Connectez-vous avec nous! 🤝\n\n📱 Tous les canaux disponibles:\n→ Discussions en direct\n→ Conseils exclusifs\n→ Mises à jour rapides\n→ Communauté d'expert\n\nLequel est votre préféré? 👇`
        ]
    },
    
    // Catégorie: Vidéo / Tutoriel
    'video': {
        keywords: ['vidéo', 'tutorial', 'comment faire', 'guide', 'apprendre', 'montrer', 'youtube'],
        responses: [
            `Excellent! 🎬\n\nUne vidéo complète est disponible montrant:\n✅ Comment s'inscrire\n✅ Comment utiliser le code promo: ${CHATBOT_CONFIG.PROMO_CODE}\n✅ Comment placer vos premiers paris\n✅ Comment télécharger les coupons\n\nCliquez sur le bouton "VIDÉO TUTORIEL" pour regarder! 👈`,
            
            `Tutoriel pas à pas! 📹\n\nNotre vidéo couvre tout ce que vous devez savoir:\n• Inscription en 2 minutes\n• Vérification du compte\n• Placement des paris\n• Gestion des gains\n\nTrès facile à suivre!`,
            
            `Guide complet disponible! 📚\n\nÀ l'intérieur:\n1️⃣ Configuration du compte\n2️⃣ Navigation de l'interface\n3️⃣ Comprendre les cotes\n4️⃣ Conseils d'expert\n\nTout ce qu'il faut pour commencer! 🚀`
        ]
    }
};

// ========== PARAMÈTRES AVANCÉS ==========
const ADVANCED_SETTINGS = {
    // Délai de réponse du bot (en ms)
    BOT_RESPONSE_DELAY: 300,
    
    // Permettre les réponses aléatoires
    RANDOMIZE_RESPONSES: true,
    
    // Sensibilité de détection des mots-clés (0-1)
    KEYWORD_SENSITIVITY: 0.8,
    
    // Sauvegarder l'historique des messages
    SAVE_CHAT_HISTORY: false,
    
    // Nombre maximum de messages à conserver
    MAX_MESSAGES: 50,
    
    // Activer les animations
    ENABLE_ANIMATIONS: true,
    
    // Thème par défaut ('light' ou 'dark')
    DEFAULT_THEME: 'light'
};

// ========== COULEURS PERSONNALISÉES ==========
const CUSTOM_COLORS = {
    // Mode clair
    light: {
        primary: '#007AFF',
        secondary: '#5AC8FA',
        background: '#FFFFFF',
        text: '#000000',
        border: '#E5E5EA'
    },
    
    // Mode sombre
    dark: {
        primary: '#007AFF',
        secondary: '#5AC8FA',
        background: '#1C1C1E',
        text: '#FFFFFF',
        border: '#3A3A3C'
    }
};

// Export pour utilisation dans app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CHATBOT_CONFIG,
        BOOKMAKERS_LIST,
        SOCIAL_NETWORKS_LIST,
        QUICK_ACTIONS,
        CHATBOT_RESPONSES,
        ADVANCED_SETTINGS,
        CUSTOM_COLORS
    };
}
