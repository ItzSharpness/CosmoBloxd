// Fonction pour se connecter
function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
}

// Fonction pour se déconnecter
function logout() {
    localStorage.removeItem('username');
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
}

// Fonction pour afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
}

// Exécution au chargement de la page
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
};

// Ajout de cosmétiques
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cosmetic-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Récupérer les valeurs du formulaire
            const name = document.getElementById("cosmetic-name").value;
            const type = document.getElementById("cosmetic-type").value;
            const price = document.getElementById("cosmetic-price").value;
            const rarity = document.getElementById("cosmetic-rarity").value;

            // Créer un objet cosmétique
            const cosmetic = { name, type, price, rarity };

            // Récupérer les cosmétiques existants
            let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
            cosmetics.push(cosmetic);

            // Sauvegarder en LocalStorage
            localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

            // Rediriger vers la page principale
            window.location.href = "index.html";
        });
    }

    // Affichage des cosmétiques sur la page principale
    const container = document.getElementById("cosmetic-list");  // Correction ici, on utilise l'ID et non la classe
    if (container) {
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
        cosmetics.forEach(cosmetic => {
            let div = document.createElement("div");

            // Définir la couleur selon la rareté
            let rarityColors = {
                "Legendary": "#FFA500",    // Orange
                "Ultra-Rare": "#8A2BE2",  // Violet
                "Rare": "#1E90FF",        // Bleu
                "Commune": "#32CD32",     // Vert
                "Basic": "#A9A9A9"        // Gris
            };

            div.innerHTML = `<p>
                <strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - 
                <span style="color: ${rarityColors[cosmetic.rarity]}; font-weight: bold;">
                    ${cosmetic.rarity}
                </span>
            </p>`;
            
            container.appendChild(div);
        });
        // Affichage des cosmétiques sur la page de chaque catégorie
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("cosmetic-list");
    if (container) {
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];

        // Récupérer la catégorie de la page actuelle (par exemple 'cape', 'animal', etc.)
        const category = window.location.pathname.split("/").pop().split(".")[0]; // Extrait 'cape', 'animal', etc.

        // Filtrer les cosmétiques en fonction de la catégorie
        const filteredCosmetics = cosmetics.filter(cosmetic => cosmetic.type.toLowerCase() === category);

        filteredCosmetics.forEach(cosmetic => {
            let div = document.createElement("div");

            // Définir la couleur selon la rareté
            let rarityColors = {
                "Legendary": "#FFA500",    // Orange
                "Ultra-Rare": "#8A2BE2",  // Violet
                "Rare": "#1E90FF",        // Bleu
                "Commune": "#32CD32",     // Vert
                "Basic": "#A9A9A9"        // Gris
            };

            div.innerHTML = `<p>
                <strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - 
                <span style="color: ${rarityColors[cosmetic.rarity]}; font-weight: bold;">
                    ${cosmetic.rarity}
                </span>
            </p>`;

            container.appendChild(div);
        });
    }
});
        // Lors de l'ajout d'un cosmétique, on doit ajouter la catégorie à chaque objet
const form = document.getElementById("cosmetic-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById("cosmetic-name").value;
        const type = document.getElementById("cosmetic-type").value;
        const price = document.getElementById("cosmetic-price").value;
        const rarity = document.getElementById("cosmetic-rarity").value;
        const category = document.getElementById("cosmetic-category").value; // Ajouter une catégorie (cape, aura, etc.)

        // Créer un objet cosmétique
        const cosmetic = { name, type, price, rarity, category };

        // Récupérer les cosmétiques existants
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
        cosmetics.push(cosmetic);

        // Sauvegarder en LocalStorage
        localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

        // Rediriger vers la page principale
        window.location.href = "index.html";
    });
}

        window.onload = function() {
    // Récupérer les cosmétiques depuis localStorage
    const cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];

    // Filtrer les cosmétiques selon la catégorie définie dans le data-category de la page
    const category = document.body.dataset.category;  // Récupérer la catégorie à partir de l'attribut data-category du body
    const filteredCosmetics = cosmetics.filter(cosmetic => cosmetic.category === category);

    // Afficher les cosmétiques filtrés dans le conteneur
    const container = document.getElementById('cosmetic-list');
    if (container) {
        filteredCosmetics.forEach(cosmetic => {
            let div = document.createElement("div");
            div.innerHTML = `<p><strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - Rareté : ${cosmetic.rarity}</p>`;
            container.appendChild(div);
        });
    }
};
        
        
    }
});
