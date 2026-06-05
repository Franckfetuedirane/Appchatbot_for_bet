# 🤖 Assistant Pronostics - Chatbot Web

Bienvenue sur **Assistant Pronostics**, un chatbot web moderne et responsive conçu pour aider vos utilisateurs avec l'inscription, l'activation de compte, et vos services de pronostics.

## ✨ Fonctionnalités

- ✅ **Chat en temps réel** - Réponses intelligentes basées sur les mots-clés
- 🌓 **Thème Jour/Nuit** - Bascule facile entre les deux modes
- 📱 **Responsive Design** - Fonctionne parfaitement sur tous les appareils
- 🎯 **Boutons d'action rapide** - Accès instant aux questions les plus courantes
- 📺 **Intégration YouTube** - Lien vers vos tutoriels
- 🏪 **Liens Bookmakers** - Tous vos partenaires avec code promo
- 📱 **Réseaux Sociaux** - Tous vos canaux de communication
- ⚡ **Performance** - Chargement rapide et léger

## 🚀 Installation & Utilisation

### Méthode 1: Ouverture Directe (Recommandée)

1. **Ouvrir le fichier**
   - Double-cliquez sur `index.html` pour ouvrir directement dans votre navigateur
   - Ou faites un clic droit → "Ouvrir avec" → Sélectionnez votre navigateur

2. **C'est prêt!**
   - Aucune installation requise
   - Fonctionne hors ligne
   - Pas de dépendances

### Méthode 2: Serveur Local (Pour développement)

```bash
# Installation des dépendances (optionnel)
npm install

# Démarrer un serveur local
npm start
```

## ⚙️ Configuration Personnalisée

### Modifier le Code Promo

Dans `app.js`, ligne 1:

```javascript
PROMO_CODE: 'DBZ5',  // ← Remplacez par votre code
```

### Ajouter votre Lien YouTube

Dans `app.js`, ligne 2:

```javascript
YOUTUBE_LINK: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // ← Remplacez par votre lien
```

### Modifier les Bookmakers

Dans `app.js`, lignes 4-11:

```javascript
BOOKMAKERS: [
    { name: '1XBET', url: 'https://1xbet.com?promo=DBZ5' },
    { name: 'MELBET', url: 'https://melbet.com?promo=DBZ5' },
    // Ajoutez/modifiez vos bookmakers ici
],
```

### Modifier les Réseaux Sociaux

Dans `app.js`, lignes 12-19:

```javascript
SOCIAL_NETWORKS: [
    { name: 'Facebook', icon: 'f', url: 'https://facebook.com' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com' },
    // Ajoutez/modifiez vos réseaux ici
],
```

### Personnaliser les Réponses

Les réponses du chatbot sont dans `KNOWLEDGE_BASE` (lignes 21+):

```javascript
'inscription|s\'inscrire|compte': {
    title: 'Comment s\'inscrire',
    responses: [
        'Votre réponse personnalisée...',
        'Une autre réponse alternative...'
    ]
}
```

## 🎨 Personnalisation des Couleurs

### Thème Clair (Variables CSS)

Dans `index.html`, lignes 37-42:

```css
:root {
  --primary-color: #007aff; /* Couleur principale (bleu) */
  --secondary-color: #5ac8fa; /* Couleur secondaire */
  --bg-light: #ffffff; /* Fond blanc */
  --text-light: #000000; /* Texte noir */
  /* ... autres couleurs */
}
```

### Modifier les Couleurs

Remplacez les codes couleur par vos propres hex:

- `#007AFF` → votre couleur primaire
- `#5AC8FA` → votre couleur secondaire
- etc.

## 📱 Responsive Breakpoints

Le chatbot s'adapte automatiquement:

- **Desktop** (>1024px) - Layout avec sidebar
- **Tablet** (768-1024px) - Layout adapté
- **Mobile** (<768px) - Layout fullscreen

## 🔧 Structure des Fichiers

```
joel/
├── index.html       # Interface HTML + CSS
├── app.js          # Logique JavaScript
├── package.json    # Configuration npm
└── README.md       # Cette documentation
```

## 💬 Système de Réponses

Le chatbot utilise un système de **mots-clés** pour comprendre les questions:

1. **L'utilisateur écrit** une question
2. **Le système cherche** les mots-clés correspondants
3. **Une réponse aléatoire** est proposée parmi les disponibles
4. **Si aucune correspondance** → message par défaut

### Ajouter une Nouvelle Catégorie

```javascript
'mot1|mot2|mot3': {
    title: 'Titre de la question',
    responses: [
        'Réponse 1...',
        'Réponse 2 alternative...'
    ]
}
```

## 🌐 Déploiement en Ligne

### Option 1: GitHub Pages (Gratuit)

1. Poussez vos fichiers sur GitHub
2. Allez dans Paramètres → Pages
3. Sélectionnez la branche main
4. Votre site est en ligne!

### Option 2: Netlify (Gratuit)

1. Connectez votre repo GitHub à Netlify
2. Configurez la branche de déploiement
3. Publié automatiquement à chaque push

### Option 3: Vercel (Gratuit)

1. Importez votre repo sur Vercel
2. Configurez les paramètres
3. Déployé instantanément

### Option 4: Serveur Web Personnel

```bash
# Copiez les fichiers sur votre serveur
scp -r * user@yourserver.com:/var/www/pronostic-bot/
```

## 🎯 Messages Clés à Personnaliser

Recherchez ces messages dans `app.js` pour les adapter:

1. **Message de bienvenue** (ligne ~180)
2. **Réponses par catégorie** (lignes 21-98)
3. **Message par défaut** (ligne ~180)

## 📊 Suivi des Utilisateurs

Le chatbot stocke localement:

- Préférences de thème (jour/nuit)
- Historique des messages

Pour un suivi avancé, intégrez:

- Google Analytics
- Mixpanel
- Segment

```javascript
// Exemple d'intégration Google Analytics
gtag("event", "user_question", {
  question: userMessage,
  category: matchedCategory,
});
```

## 🐛 Dépannage

### Le chatbot ne s'ouvre pas

- Vérifiez que JavaScript est activé
- Essayez un autre navigateur
- Vérifiez la console (F12) pour les erreurs

### Les emojis ne s'affichent pas bien

- Assurez-vous que votre navigateur supporte les emojis
- Mettez à jour votre navigateur

### Les liens ne fonctionnent pas

- Vérifiez que les URLs sont correctes
- Assurez-vous que les sites sont accessibles

## 📈 Amélioration Futur

- [ ] Intégration IA (OpenAI API)
- [ ] Base de données (Firebase, Supabase)
- [ ] Statistiques avancées
- [ ] Notifications push
- [ ] Support multilingue
- [ ] Intégration CRM

## 📄 Licence

Libre d'utilisation - Modifiez selon vos besoins!

## 👥 Support

Pour des questions sur la configuration, consultez ce guide ou modifiez les sections correspondantes dans le code.

---

**Bon succès avec votre Assistant Pronostics! 🚀**
