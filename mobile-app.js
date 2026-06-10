// ========== CONFIGURATION ==========
const CONFIG = {
    PROMO_CODE: 'DBZ5',
    FIRST_DEPOSIT_BONUS: '3000F',
    YOUTUBE_LINK: 'https://youtube.com/shorts/8WcwWFXelM8?si=3mk-7gfDPMl509x-',
    YOUTUBE_TITLE: 'Vidéo d\'inscription Rapide',
    COUPON_VIDEO: {
        title: 'Comment télécharger les codes de coupon',
        description: 'Important après inscription : cette vidéo montre comment récupérer les codes de coupon avant de jouer.',
        url: 'https://youtube.com/shorts/GdkUwfPgz4Y?si=iP88lYUMlC_IYThS'
    },
    BOOKMAKERS: [
        { 
            name: '1XBET', 
            inscription: 'https://affpa.top/L?tag=d_3539418m_97c_&site=3539418&ad=97',
            telecharger: 'https://1xbet.fr.uptodown.com/android',
            iphone: '1xbet',
            emoji: '🔵'
        },
        { 
            name: 'MELBET', 
            inscription: 'https://refpa3665.com/L?tag=d_3616934m_2170c_&site=3616934&ad=2170',
            telecharger: 'https://melbet.fr.uptodown.com/android',
            iphone: 'melbet',
            emoji: '🟠'
        },
        { 
            name: 'PARIPESA', 
            inscription: 'https://paripesa.bet/dbz5',
            telecharger: 'https://paripesa.fr.uptodown.com/android',
            iphone: 'paripesa',
            emoji: '🔵'
        },
        { 
            name: 'BETWINNER', 
            inscription: 'https://betwinner.com/amp/en',
            telecharger: 'https://betwinner.fr.uptodown.com/android',
            iphone: 'betwinner',
            emoji: '⚪'
        },
        { 
            name: 'WINWIN', 
            inscription: 'https://refpa712080.pro/L?tag=d_4492720m_64485c_&site=4492720&ad=64485',
            telecharger: 'https://org-winwin-client.fr.uptodown.com/android',
            iphone: 'winwin',
            emoji: '🟢'
        },
        { 
            name: 'MEGAPARI', 
            inscription: 'https://dbz5.megapari-642806.net',
            telecharger: 'https://megapari.uptodown.com/android',
            iphone: 'megapari',
            emoji: '💜'
        },
        { 
            name: 'LINEBET', 
            inscription: 'https://linebet.com?promo=DBZ5',
            telecharger: 'https://linebet.com/download',
            iphone: 'linebet',
            emoji: '🟡'
        }
    ],
    SOCIAL_LINKS: [
        {
            name: 'Canal Telegram',
            label: 'Canal Telegram',
            username: 'Pronostics & annonces',
            url: 'https://t.me/+ohW8MWN_N5QyNTE0',
            type: 'telegram'
        },
        {
            name: 'Contact Telegram',
            label: '@inconnu_xpro',
            username: 'Me joindre directement',
            url: 'https://t.me/inconnu_xpro',
            type: 'telegram'
        },
        {
            name: 'Chaîne WhatsApp',
            label: 'WhatsApp',
            username: 'Chaîne officielle',
            url: 'https://whatsapp.com/channel/0029Vb6ZPNE3bbV9ZlCKLO1q',
            type: 'whatsapp'
        },
        {
            name: 'Page Facebook',
            label: 'Facebook',
            username: 'Page officielle',
            url: 'https://www.facebook.com/share/14PYiWiBJ4k/?mibextid=wwXIfr',
            type: 'facebook'
        },
        {
            name: 'Compte TikTok',
            label: 'TikTok',
            username: '@goat.p8',
            url: 'https://www.tiktok.com/@goat.p8?_r=1&_t=ZS-96vbLEwPpgn',
            type: 'tiktok'
        }
    ],
    GAME_TIPS: [
        {
            title: 'Comprendre les cotes',
            description: 'Bases pour lire les cotes et choisir un pari.',
            url: 'https://www.youtube.com/results?search_query=comprendre+les+cotes+pari+sportif'
        },
        {
            title: 'Gestion de bankroll',
            description: 'Jouer avec une mise mieux organisée.',
            url: 'https://www.youtube.com/results?search_query=gestion+bankroll+pari+sportif'
        },
        {
            title: 'Astuces football',
            description: 'Conseils pour analyser un match avant de jouer.',
            url: 'https://www.youtube.com/results?search_query=astuces+pari+football+debutant'
        },
        {
            title: 'Erreurs a eviter',
            description: 'Les pieges classiques avant de valider un ticket.',
            url: 'https://www.youtube.com/results?search_query=erreurs+a+eviter+pari+sportif'
        },
        {
            title: 'Tutoriel DBZ5',
            description: 'Video rapide pour inscription et bonus.',
            url: 'https://youtube.com/shorts/8WcwWFXelM8?si=3mk-7gfDPMl509x-'
        }
    ],
    COTE_VIDEOS: [
        {
            title: 'FIFA',
            description: 'Astuces e-sport pour mieux jouer sur FIFA.',
            url: 'https://youtu.be/T9C_SggWLMA?si=12SzNZAXz8sxGOMj',
            couponUrl: 'https://youtube.com/shorts/GdkUwfPgz4Y?si=iP88lYUMlC_IYThS'
        },
        {
            title: 'JEU21',
            description: 'Astuces e-sport pour comprendre le jeu 21.',
            url: 'https://youtu.be/rRGixoxJjB0?si=zg2XDE7fNHI2Rrw7',
            couponUrl: 'https://youtube.com/shorts/GdkUwfPgz4Y?si=iP88lYUMlC_IYThS'
        },
        {
            title: 'POKER',
            description: 'Astuces e-sport pour apprendre les bases du poker.',
            url: 'https://youtu.be/rRGixoxJjB0?si=zg2XDE7fNHI2Rrw7',
            couponUrl: 'https://youtube.com/shorts/GdkUwfPgz4Y?si=iP88lYUMlC_IYThS'
        },
        {
            title: 'PARI SPORTIF',
            description: 'Vidéos pour analyser les matchs et les cotes.',
            url: 'https://www.youtube.com/results?search_query=astuces+pari+sportif+debutant',
            couponUrl: 'https://youtube.com/shorts/GdkUwfPgz4Y?si=iP88lYUMlC_IYThS'
        }
    ],
    QUICK_ACTIONS: [
        {
            icon: '💳',
            title: 'S\'inscrire',
            description: 'Inscription en 2 minutes avec bonus',
            keyword: 'inscription'
        },
        {
            icon: '⬇️',
            title: 'Télécharger',
            description: 'Apps de tous les bookmakers',
            keyword: 'télécharger'
        },
        {
            icon: '🎟️',
            title: 'Codes de coupon',
            description: 'Video pour télécharger les codes après inscription',
            keyword: 'codes coupon'
        },
        {
            icon: '🔓',
            title: 'Activation',
            description: 'Activer et valider votre compte',
            keyword: 'activation'
        },
        {
            icon: '📊',
            title: 'Jeu virtuel / eSport et Xgame',
            description: 'Videos FIFA, JEU21, POKER et pari sportif',
            keyword: 'cotes'
        },
        {
            icon: '📱',
            title: 'Réseaux',
            description: 'Suivez-moi pour plus',
            keyword: 'réseaux'
        },
        {
            icon: '💡',
            title: 'Astuces',
            description: 'Videos et conseils de jeu',
            keyword: 'astuces'
        }
    ],
    IPHONE_APPS: [
        {
            name: '1XBET',
            emoji: '🔵',
            appstore: 'https://apps.apple.com/app/id844035425',
            region: 'Bénin',
            country: 'Bénin (+229)',
            videoTutorial: 'https://youtube.com/shorts/gcvUy5BH76I?si=2Qxo10Qj_6n_E2H7',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Bénin)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'Jean',
                lastName: 'Houngbédji',
                address: '125 Rue du Commerce',
                city: 'Cotonou',
                region: 'Littoral',
                postcode: '00229',
                phone: '+229 97 12 34 56'
            }
        },
        {
            name: 'MELBET',
            emoji: '🟠',
            appstore: 'https://apps.apple.com/app/id1453163868',
            region: 'Bénin',
            country: 'Bénin (+229)',
            videoTutorial: 'https://youtube.com/shorts/gcvUy5BH76I?si=2Qxo10Qj_6n_E2H7',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Bénin)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'Jean',
                lastName: 'Houngbédji',
                address: '125 Rue du Commerce',
                city: 'Cotonou',
                region: 'Littoral',
                postcode: '00229',
                phone: '+229 97 12 34 56'
            }
        },
        {
            name: 'PARIPESA',
            emoji: '🔵',
            appstore: 'https://apps.apple.com/app/id1611889480',
            region: 'Nigeria',
            country: 'Nigeria (+234)',
            videoTutorial: 'https://youtube.com/shorts/7Ow6gsGqSL8?si=BN452600lU0OAt0I',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Nigeria)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'John',
                lastName: 'Adewale',
                address: '15 Awolowo Road',
                city: 'Ikeja',
                region: 'Lagos',
                postcode: '100271',
                phone: '+234 803 123 4567'
            }
        },
        {
            name: 'BETWINNER',
            emoji: '⚪',
            appstore: 'https://apps.apple.com/app/id6747608407',
            region: 'Cameroun / Côte d\'Ivoire',
            country: 'Cameroun (+237)',
            videoTutorial: 'https://youtube.com/shorts/pgD9CHEyDN0?si=84T5IerLzugqpITgf',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Cameroun ou Côte d\'Ivoire)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'James',
                lastName: 'Pierre',
                address: 'Independence Avenue',
                city: 'Yaoundé',
                region: 'Ouest',
                postcode: '00000',
                phone: '+237 2 555 555'
            }
        },
        {
            name: 'WINWIN',
            emoji: '🟢',
            appstore: 'https://apps.apple.com/app/id6747608407',
            region: 'Seychelles',
            country: 'Seychelles (+248)',
            videoTutorial: 'https://youtube.com/shorts/pgD9CHEyDN0?si=84T5IerLzugqpITgf',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Seychelles)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'James',
                lastName: 'Pierre',
                address: 'Independence Avenue',
                city: 'Victoria',
                region: 'Mahé',
                postcode: '00000',
                phone: '+248 2 555 555'
            }
        },
        {
            name: 'MEGAPARI',
            emoji: '💜',
            appstore: 'https://apps.apple.com/app/id1353577656',
            region: 'Nigeria',
            country: 'Nigeria (+234)',
            videoTutorial: 'https://youtube.com/shorts/7Ow6gsGqSL8?si=BN452600lU0OAt0I',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Nigeria)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'John',
                lastName: 'Adewale',
                address: '15 Awolowo Road',
                city: 'Ikeja',
                region: 'Lagos',
                postcode: '100271',
                phone: '+234 803 123 4567'
            }
        },
        {
            name: 'LINEBET',
            emoji: '🟡',
            appstore: 'https://apps.apple.com/app/id1176149937',
            region: 'Nigeria',
            country: 'Nigeria (+234)',
            videoTutorial: 'https://youtube.com/shorts/7Ow6gsGqSL8?si=BN452600lU0OAt0I',
            instructions: [
                '1️⃣ Ouvrez Réglages',
                '2️⃣ Appuyez sur votre nom (identifiant Apple)',
                '3️⃣ Sélectionnez Médias et achats',
                '4️⃣ Appuyez sur Voir le compte',
                '5️⃣ Choisissez Pays/Région',
                '6️⃣ Appuyez sur Modifier le pays ou la région',
                '7️⃣ Sélectionnez le pays souhaité (Nigeria)',
                '8️⃣ Lisez et acceptez les conditions',
                '9️⃣ Sélectionnez aucun mode de paiement puis entrez ses informations'
            ],
            exampleInfo: {
                firstName: 'John',
                lastName: 'Adewale',
                address: '15 Awolowo Road',
                city: 'Ikeja',
                region: 'Lagos',
                postcode: '100271',
                phone: '+234 803 123 4567'
            }
        }
    ],
    IPHONE_STEPS: [
        {
            title: '1️⃣ Ouvrez App Store',
            description: 'Appuyez sur l\'icône "App Store" sur votre iPhone (l\'icône bleu avec un blanc "A").'
        },
        {
            title: '2️⃣ Accédez à votre compte iCloud',
            description: 'En bas à droite, appuyez sur l\'icône de profil. Assurez-vous que vous êtes connecté avec votre compte iCloud.'
        },
        {
            title: '3️⃣ Configurez votre méthode de paiement',
            description: 'Allez dans "Compte" > "Paiement et livraison". Ajoutez une carte de crédit ou de débit.'
        },
        {
            title: '4️⃣ Recherchez l\'application',
            description: 'Utilisez la barre de recherche pour trouver l\'application du bookmaker. Par exemple: "1xbet", "melbet", etc.'
        },
        {
            title: '5️⃣ Appuyez sur "Obtenir"',
            description: 'Cliquez sur le bouton "Obtenir" (ou le nuage si vous l\'aviez déjà téléchargée).'
        },
        {
            title: '6️⃣ Authentifiez-vous',
            description: 'Confirmez avec votre Face ID, Touch ID ou votre mot de passe iCloud.'
        },
        {
            title: '7️⃣ Attendez le téléchargement',
            description: 'L\'application va se télécharger et installer automatiquement. Vous verrez "Installer" puis "Ouvrir".'
        }
    ]
};

// ========== KNOWLEDGE BASE ==========
const RESPONSES = {
    'code coupon|codes coupon|codes de coupon|coupon_codes|telecharger coupon|télécharger coupon|telecharger les code de coupon|télécharger les codes de coupon': 'coupon_codes_options',
    'inscription|inscrire|s\'inscrire': 'inscription_options',
    'télécharger|telecharger|application|app|download': 'telecharger_options',
    'activation|activer|dépôt|depot': 'activation_options',
    'cotes|grosse cote|pronostic|fifa|jeu21|jeu 21|poker|parie sportif|pari sportif': 'cotes_options',
    'réseaux|reseaux|suivre|facebook|instagram|tiktok|telegram|whatsapp|joindre|contact': 'reseaux_options',
    'astuce|astuces|jeu|jeux|video jeu|vidéo jeu|conseil|conseils|bankroll': 'astuces_options',
};

// Options avec boutons cliquables
const RESPONSE_OPTIONS = {
    'inscription_options': {
        type: 'bookmakers_inscription',
        text: '✅ Tous nos bookmakers avec inscription simplifiée!\n\n🎁 Code promo exclusif: <strong style="color: var(--danger); font-size: 16px;">DBZ5</strong>\n💰 Bonus: 3000F minimum\n⚠️ Dépôt obligatoire!\n\nCliquez sur un bookmaker:'
    },
    'telecharger_options': {
        type: 'telecharger_choice',
        text: '📱 Quel système d\'exploitation utilisez-vous?\n\nChoisissez votre plateforme:',
        buttons: [
            { icon: '🤖', label: 'Android', action: 'telecharger_android' },
            { icon: '🍎', label: 'iPhone / iPad', action: 'telecharger_iphone' }
        ]
    },
    'activation_options': {
        text: '🔓 Activation du compte\n\n1️⃣ Choisissez un bookmaker dans la liste.\n2️⃣ Cliquez sur le lien d\'inscription.\n3️⃣ Créez un compte complet avec le code promo <strong style="color: var(--danger);">DBZ5</strong>.\n4️⃣ Confirmez votre email ou votre téléphone si demandé.\n5️⃣ Faites la première recharge obligatoire de <strong style="color: var(--danger);">3000F</strong>.\n6️⃣ Ouvrez le profil personnel du compte.\n7️⃣ Remplissez obligatoirement toutes les informations personnelles demandées.\n8️⃣ Vérifiez que le profil est complet avant de jouer.\n\n⚠️ Sans recharge et sans profil complété, le compte peut rester bloqué.',
        buttons: [
            { icon: '💳', label: 'S\'inscrire maintenant', action: 'inscription' },
            { icon: '📱', label: 'Voir les apps', action: 'telecharger' },
            { icon: '📹', label: 'Vidéo tutoriel', action: 'video' }
        ]
    },
    'cotes_options': {
        type: 'cote_videos',
        text: '🎮 Jeu virtuel / eSport et Xgame\n\nVoici une liste de vidéos pour les jeux demandés: FIFA, JEU21, POKER et PARI SPORTIF.'
    },
    'coupon_codes_options': {
        type: 'coupon_video',
        text: '🎟️ Télécharger les codes de coupon\n\nAprès inscription complète avec DBZ5, regardez cette vidéo pour comprendre comment télécharger les codes de coupon.'
    },
    'reseaux_options': {
        type: 'social_links',
        text: '💻 Suivez-moi sur mes différents réseaux!\n\nCliquez sur le réseau de votre choix pour me joindre partout.\n\n🎁 Code promo exclusif: <strong style="color: var(--danger);">DBZ5</strong>'
    },
    'astuces_options': {
        type: 'game_tips',
        text: '💡 Astuces de jeu\n\nVoici des vidéos utiles pour mieux comprendre les cotes, gérer vos mises et éviter les erreurs courantes.'
    },
    'default_response': {
        text: '👋 Avez-vous des difficultés à vous inscrire ou à télécharger des coupons?\n\nJe peux vous aider avec:',
        buttons: [
            { icon: '💳', label: 'Inscription', action: 'inscription' },
            { icon: '⬇️', label: 'Téléchargement', action: 'telecharger' },
            { icon: '🎟️', label: 'Codes de coupon', action: 'codes coupon' },
            { icon: '📹', label: 'Vidéo d\'inscription', action: 'video' },
            { icon: '🎮', label: 'Jeu virtuel / eSport et Xgame', action: 'cotes' },
            { icon: '📱', label: 'Réseaux sociaux', action: 'reseaux' },
            { icon: '💡', label: 'Astuces de jeu', action: 'astuces' }
        ]
    },
    'telecharger_android': {
        type: 'bookmakers_download',
        text: '📱 Téléchargement Android\n\n🎁 Code promo: <strong style="color: var(--danger); font-size: 16px;">DBZ5</strong>\n\nCliquez sur un bookmaker pour l\'application:'
    },
    'telecharger_iphone': {
        type: 'iphone_apps',
        text: '🍎 Télécharger sur iPhone/iPad\n\n⚙️ Configuration requise: iCloud et App Store configurés\n\nSélectionnez une application:'
    }
};

// ========== STATE ==========
let chatMessages = [];
let darkMode = localStorage.getItem('darkMode') !== 'false';

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    applyTheme();
});

function initializeApp() {
    renderActions();
    renderBookmakers();
    renderIphone();
    renderGameTips();
    renderVideoLibrary();
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', switchTab);
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

    // Actions — délégation pour cartes générées dynamiquement
    document.getElementById('actionsGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.action-card');
        if (!card) return;
        const cards = [...document.querySelectorAll('#actionsGrid .action-card')];
        const index = cards.indexOf(card);
        if (index >= 0) handleActionClick(index);
    });
}

// ========== TABS ==========
function switchTab(e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const tabName = btn.dataset.tab;

    // Remove active from all tabs
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active to clicked tab
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(tabName + '-tab').classList.add('active');

    // Scroll to top
    const tabContent = document.getElementById(tabName + '-tab');
    if (tabContent) {
        setTimeout(() => {
            const scrollable = tabContent.querySelector('[style*="overflow"]') || tabContent;
            scrollable.scrollTop = 0;
        }, 0);
    }
}

// ========== THEME ==========
function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyTheme();
}

function applyTheme() {
    const toggle = document.getElementById('themeToggle');
    if (darkMode) {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        toggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
}

// ========== RENDER ACTIONS ==========
function renderActions() {
    const actionsGrid = document.getElementById('actionsGrid');
    actionsGrid.innerHTML = CONFIG.QUICK_ACTIONS.map((action) => `
        <div class="action-card" data-keyword="${action.keyword}" role="button" tabindex="0">
            <div class="d-flex align-items-center gap-2">
                <div class="action-icon">${action.icon}</div>
                <div class="action-title">${action.title}</div>
            </div>
            <div class="action-desc">${action.description}</div>
        </div>
    `).join('');
}

// ========== RENDER BOOKMAKERS ==========
function getBookmakerLogoClass(name) {
    return {
        '1XBET': 'one-xbet',
        'MELBET': 'melbet',
        'PARIPESA': 'paripesa',
        'BETWINNER': 'betwinner',
        'WINWIN': 'winwin',
        'MEGAPARI': 'megapari',
        'LINEBET': 'linebet'
    }[name] || 'default-logo';
}

function renderBookmakerIcon(bm) {
    const logoClass = getBookmakerLogoClass(bm.name);
    const logoContent = {
        'one-xbet': '<span class="one-xbet-mark">1X</span>',
        'melbet': '<span class="melbet-mark"><span>MEL</span><span>BET</span></span>',
        'paripesa': '<span class="paripesa-mark">A</span>',
        'betwinner': '<span class="betwinner-mark"><span>BET</span><span>WINNER</span></span>',
        'winwin': '<span class="winwin-mark"><span>W</span><span>W</span></span>',
        'megapari': '<span class="megapari-mark"><span class="megapari-dots"><i></i><i></i></span><span>MEGA<br>PARI</span></span>',
        'linebet': '<span class="linebet-mark">LINEBET</span>'
    }[logoClass] || `<span>${bm.name.charAt(0)}</span>`;

    return `<div class="bookmaker-app-icon ${logoClass}" aria-hidden="true">${logoContent}</div>`;
}

function renderBookmakers() {
    const grid = document.getElementById('bookmakersGrid');
    grid.innerHTML = CONFIG.BOOKMAKERS.map(bm => `
        <div class="bookmaker-box">
            <div class="bm-header">
                ${renderBookmakerIcon(bm)}
                <span class="bookmaker-name-text">${bm.name}</span>
            </div>
            <div class="bm-links">
                <a href="${bm.inscription}" target="_blank" class="bm-link">
                    📝 Inscrire
                </a>
                <a href="${bm.telecharger}" target="_blank" class="bm-link">
                    ⬇️ App
                </a>
            </div>
        </div>
    `).join('');
}

// ========== RENDER IPHONE TAB ==========
function renderIphone() {
    renderIphoneSteps();
    renderIphoneApps();
}

function renderIphoneSteps() {
    const stepsContainer = document.getElementById('iphoneSteps');
    if (!stepsContainer) return;

    stepsContainer.innerHTML = CONFIG.IPHONE_STEPS.map(step => `
        <div class="iphone-step">
            <div class="iphone-step-title">${step.title}</div>
            <div class="iphone-step-desc">${step.description}</div>
        </div>
    `).join('');
}

function renderIphoneApps() {
    const appsGrid = document.getElementById('iphoneAppsGrid');
    if (!appsGrid) return;

    appsGrid.innerHTML = CONFIG.IPHONE_APPS.map(app => `
        <div class="iphone-app-item">
            <div class="iphone-app-info">
                <div class="iphone-app-icon">${app.emoji}</div>
                <div class="iphone-app-name">${app.name}</div>
            </div>
            <a href="${app.appstore}" target="_blank" class="iphone-app-link">App Store</a>
        </div>
    `).join('');
}

// ========== RENDER GAME TIPS ==========
function renderGameTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    if (!tipsGrid) return;

    tipsGrid.innerHTML = CONFIG.GAME_TIPS.map(tip => `
        <a href="${tip.url}" target="_blank" rel="noopener noreferrer" class="tip-card">
            <span class="tip-icon">▶</span>
            <span class="tip-copy">
                <strong>${tip.title}</strong>
                <span>${tip.description}</span>
            </span>
        </a>
    `).join('');
}

// ========== VIDEO LIBRARY ==========
function renderCoteVideoItem(video) {
    const couponUrl = video.couponUrl || CONFIG.COUPON_VIDEO.url;
    return `
        <div class="cote-game-block">
            <div class="cote-game-title">${video.title}</div>
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="tip-card compact cote-video-link">
                <span class="tip-icon">▶</span>
                <span class="tip-copy">
                    <strong>Astuce ${video.title}</strong>
                    <span>${video.description}</span>
                </span>
            </a>
            <a href="${couponUrl}" target="_blank" rel="noopener noreferrer" class="tip-card compact cote-coupon-link">
                <span class="tip-icon coupon-icon">🎟️</span>
                <span class="tip-copy">
                    <strong>Codes de coupon</strong>
                    <span>Comment télécharger les codes avant de jouer</span>
                </span>
            </a>
        </div>
    `;
}

function getVideoLibrary() {
    return [
        {
            title: CONFIG.YOUTUBE_TITLE,
            description: 'Important pour apprendre à créer le compte avec le code DBZ5 et activer le bonus.',
            url: CONFIG.YOUTUBE_LINK
        },
        CONFIG.COUPON_VIDEO,
        ...CONFIG.COTE_VIDEOS.flatMap(video => [
            {
                title: `Astuce e-sport — ${video.title}`,
                description: video.description,
                url: video.url
            },
            {
                title: `Codes coupon — ${video.title}`,
                description: 'Comment télécharger les codes de coupon pour ce jeu.',
                url: video.couponUrl || CONFIG.COUPON_VIDEO.url
            }
        ]),
        ...CONFIG.GAME_TIPS.map(tip => ({
            title: tip.title,
            description: tip.description,
            url: tip.url
        }))
    ];
}

function renderVideoLibrary() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;

    videoGrid.innerHTML = getVideoLibrary().map(video => `
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="video-card">
            <span class="video-card-icon">▶</span>
            <span class="video-card-copy">
                <strong>${video.title}</strong>
                <span>${video.description}</span>
            </span>
        </a>
    `).join('');
}

// ========== CHAT ==========
function handleActionClick(index) {
    const action = CONFIG.QUICK_ACTIONS[index];
    addUserMessage(action.title);
    respondToMessage(action.keyword);
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    addUserMessage(message);
    input.value = '';
    input.style.height = 'auto';

    respondToMessage(message);
}

function addUserMessage(text) {
    const messagesContainer = document.getElementById('chatMessages');

    // Remove welcome screen
    const welcomeScreen = messagesContainer.querySelector('.welcome-screen');
    if (welcomeScreen) welcomeScreen.remove();

    const messageEl = document.createElement('div');
    messageEl.className = 'message user';
    messageEl.innerHTML = `
        <div class="message-bubble">${text}</div>
        <div class="message-avatar">V</div>
    `;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function respondToMessage(message) {
    const normalizedMsg = message.toLowerCase();
    let responseId = null;

    // Vérifier si le message est une action directe (de handleButtonAction)
    if (RESPONSE_OPTIONS[message]) {
        responseId = message;
    } else {
        // Sinon, chercher dans les mots-clés
        for (const [keywords, id] of Object.entries(RESPONSES)) {
            if (keywords.split('|').some(kw => normalizedMsg.includes(kw))) {
                responseId = id;
                break;
            }
        }
    }

    // Réponse par défaut
    if (!responseId) {
        responseId = 'default_response';
    }

    setTimeout(() => {
        const response = RESPONSE_OPTIONS[responseId];
        
        if (response && response.type === 'bookmakers_inscription') {
            addBotMessageWithBookmakers(response.text, 'inscription');
        } else if (response && response.type === 'bookmakers_download') {
            addBotMessageWithBookmakers(response.text, 'download');
        } else if (response && response.type === 'telecharger_choice') {
            addBotMessageWithButtons(response.text, response.buttons);
        } else if (response && response.type === 'iphone_apps') {
            addBotMessageWithiPhoneApps(response.text);
        } else if (response && response.type === 'social_links') {
            addBotMessageWithSocialLinks(response.text);
        } else if (response && response.type === 'game_tips') {
            addBotMessageWithGameTips(response.text);
        } else if (response && response.type === 'cote_videos') {
            addBotMessageWithCoteVideos(response.text);
        } else if (response && response.type === 'coupon_video') {
            addBotMessageWithCouponVideo(response.text);
        } else if (response && response.buttons) {
            addBotMessageWithButtons(response.text, response.buttons);
        } else {
            addBotMessage(response?.text || 'Je comprends pas bien! 🤔');
        }
    }, 300);
}

function addBotMessage(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';
    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">${text}</div>
    `;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithButtons(text, buttons) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';
    
    const buttonsHTML = buttons.map(btn => `
        <button class="message-button" data-action="${btn.action}">
            ${btn.icon} ${btn.label}
        </button>
    `).join('');
    
    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="message-buttons">
                ${buttonsHTML}
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageEl);
    
    // Ajouter event listeners aux boutons
    messageEl.querySelectorAll('.message-button').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            handleButtonAction(action, this);
        });
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function renderSocialIcon(type) {
    const iconContent = {
        tiktok: '<span class="tiktok-note">♪</span><span class="social-logo-text">TikTok</span>',
        facebook: '<span class="facebook-mark">f</span>',
        telegram: '<span class="telegram-plane"></span>',
        whatsapp: '<span class="whatsapp-phone">☎</span>'
    }[type] || '<span class="social-default-mark">+</span>';

    return `<span class="social-logo ${type}" aria-hidden="true">${iconContent}</span>`;
}

function addBotMessageWithSocialLinks(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';

    const socialLinksHTML = CONFIG.SOCIAL_LINKS.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link-card">
            ${renderSocialIcon(link.type)}
            <span class="social-link-copy">
                <strong>${link.name}</strong>
                <span>${link.label}</span>
                <small>${link.username}</small>
            </span>
        </a>
    `).join('');

    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="social-links-list">
                ${socialLinksHTML}
            </div>
        </div>
    `;

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithGameTips(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';

    const tipsHTML = CONFIG.GAME_TIPS.map(tip => `
        <a href="${tip.url}" target="_blank" rel="noopener noreferrer" class="tip-card compact">
            <span class="tip-icon">▶</span>
            <span class="tip-copy">
                <strong>${tip.title}</strong>
                <span>${tip.description}</span>
            </span>
        </a>
    `).join('');

    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="tips-list">
                ${tipsHTML}
            </div>
        </div>
    `;

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithCoteVideos(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';

    const videosHTML = CONFIG.COTE_VIDEOS.map(video => renderCoteVideoItem(video)).join('');

    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="tips-list cote-videos-list">
                ${videosHTML}
            </div>
        </div>
    `;

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithCouponVideo(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';
    const video = CONFIG.COUPON_VIDEO;

    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="tips-list">
                <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="tip-card compact">
                    <span class="tip-icon">▶</span>
                    <span class="tip-copy">
                        <strong>${video.title}</strong>
                        <span>${video.description}</span>
                    </span>
                </a>
            </div>
        </div>
    `;

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithBookmakers(text, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';
    
    let bookmakersHTML = '';
    
    if (type === 'inscription') {
        bookmakersHTML = CONFIG.BOOKMAKERS.map(bm => `
            <div class="bookmaker-item">
                <div class="bookmaker-header">
                    ${renderBookmakerIcon(bm)}
                    <span class="bookmaker-name-text">${bm.name}</span>
                </div>
                <div class="bookmaker-links">
                    <a href="${bm.inscription}" target="_blank" class="bm-link">📝 Inscrire</a>
                    <a href="${bm.telecharger}" target="_blank" class="bm-link">⬇️ App</a>
                </div>
            </div>
        `).join('');
    } else if (type === 'download') {
        bookmakersHTML = CONFIG.BOOKMAKERS.map(bm => `
            <div class="bookmaker-item">
                <div class="bookmaker-header">
                    ${renderBookmakerIcon(bm)}
                    <span class="bookmaker-name-text">${bm.name}</span>
                </div>
                <div class="download-url">${bm.telecharger}</div>
                <a href="${bm.telecharger}" target="_blank" class="bm-download-link">⬇️ Télécharger l'app</a>
            </div>
        `).join('');
    }
    
    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="bookmakers-list">
                ${bookmakersHTML}
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessageWithiPhoneApps(text) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message bot';
    
    const iPhoneAppsHTML = CONFIG.BOOKMAKERS.map(bm => `
        <button class="iphone-app-bubble" data-app="${bm.iphone}" data-bookmaker="${bm.name}">
            ${renderBookmakerIcon(bm)}
            <span class="iphone-app-name">${bm.name}</span>
        </button>
    `).join('');
    
    messageEl.innerHTML = `
        <div class="message-avatar">AS</div>
        <div class="message-bubble">
            <div>${text}</div>
            <div class="iphone-apps-container">
                ${iPhoneAppsHTML}
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageEl);
    
    // Ajouter event listeners aux bubbles des apps
    messageEl.querySelectorAll('.iphone-app-bubble').forEach(btn => {
        btn.addEventListener('click', function() {
            const appId = this.dataset.app;
            const bookmakerName = this.dataset.bookmaker;
            handleiPhoneAppClick(appId, bookmakerName);
        });
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleiPhoneAppClick(appId, bookmakerName) {
    // Ajouter le message utilisateur
    addUserMessage(bookmakerName);
    
    // Ajouter la bulle avec les instructions complètes
    setTimeout(() => {
        const messagesContainer = document.getElementById('chatMessages');
        
        // Trouver la config de l'app
        const appConfig = CONFIG.IPHONE_APPS.find(app => app.name === bookmakerName);
        
        if (!appConfig) {
            addBotMessage(`Désolé, les informations pour ${bookmakerName} n'ont pas pu être trouvées.`);
            return;
        }
        
        // Créer le message avec les instructions
        const messageEl = document.createElement('div');
        messageEl.className = 'message bot';
        
        let instructionsHTML = '<div class="iphone-instructions">';
        
        // Titre
        instructionsHTML += `
            <div class="iphone-header" style="margin-bottom: 15px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">
                <strong>📱 Configuration ${bookmakerName} - iPhone</strong>
                <div style="font-size: 12px; opacity: 0.7; margin-top: 5px;">Région: <strong>${appConfig.region}</strong></div>
            </div>
        `;
        
        // Instructions étape par étape
        instructionsHTML += '<div class="steps-list" style="margin-bottom: 15px;">';
        appConfig.instructions.forEach(instruction => {
            instructionsHTML += `<div style="padding: 8px 0; border-left: 3px solid var(--primary); padding-left: 10px; margin-bottom: 8px;">${instruction}</div>`;
        });
        instructionsHTML += '</div>';
        
        // Infos d'exemple
        instructionsHTML += `
            <div class="example-info" style="background: rgba(0,122,255,0.08); padding: 12px; border-radius: 8px; margin-bottom: 15px;">
                <strong style="display: block; margin-bottom: 8px;">📝 Exemple d'informations (${appConfig.region}):</strong>
                <div style="font-size: 12px; line-height: 1.8;">
                    👤 <strong>${appConfig.exampleInfo.firstName} ${appConfig.exampleInfo.lastName}</strong><br>
                    📍 ${appConfig.exampleInfo.address}<br>
                    🏙️ ${appConfig.exampleInfo.city}<br>
                    🌍 ${appConfig.exampleInfo.region || appConfig.exampleInfo.region}<br>
                    📮 ${appConfig.exampleInfo.postcode}<br>
                    📞 ${appConfig.exampleInfo.phone}<br>
                    🌐 ${appConfig.country}
                </div>
            </div>
        `;
        
        // Boutons d'action
        instructionsHTML += `
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="${appConfig.videoTutorial}" target="_blank" style="flex: 1; padding: 10px 12px; background: var(--danger); color: white; border-radius: 8px; text-align: center; text-decoration: none; font-weight: 600; font-size: 13px;">🎬 Vidéo Aide</a>
                <a href="${appConfig.appstore}" target="_blank" style="flex: 1; padding: 10px 12px; background: var(--primary); color: white; border-radius: 8px; text-align: center; text-decoration: none; font-weight: 600; font-size: 13px;">📲 App Store</a>
            </div>
        `;
        
        instructionsHTML += '</div>';
        
        messageEl.innerHTML = `
            <div class="message-avatar">AS</div>
            <div class="message-bubble" style="max-width: 100%; text-align: left;">
                ${instructionsHTML}
            </div>
        `;
        
        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 300);
}

function handleButtonAction(action, button) {
    // Animer le clic
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Trouver le label du bouton
    const label = button.textContent.trim();
    
    // Actions spéciales
    if (action === 'video') {
        addUserMessage(label);
        // Ouvrir la vidéo directement
        window.open(CONFIG.YOUTUBE_LINK, '_blank');
        setTimeout(() => {
            addBotMessage('📹 La vidéo d\'inscription s\'est ouverte!\n\nSuivez les étapes pour:\n1️⃣ S\'inscrire rapidement\n2️⃣ Valider votre compte\n3️⃣ Effectuer un dépôt\n4️⃣ Recevoir votre bonus 3000F\n5️⃣ Placer vos paris!\n\n💡 Besoin d\'aide? Tapez "inscription" ou "télécharger"');
        }, 500);
    } else {
        addUserMessage(label);
        respondToMessage(action);
    }
}

// Auto-resize textarea
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 80) + 'px';
            });
        }
    }, 100);
});
