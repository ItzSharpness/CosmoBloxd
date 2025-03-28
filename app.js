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

    // Affichage des cosmétiques sur la page principale
    const container = document.getElementById("cosmetic-list");
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
    }

    // Affichage des cosmétiques par catégorie sur chaque page spécifique
    const category = window.location.pathname.split("/").pop().split(".")[0]; // Extraire la catégorie de l'URL
    const filteredCosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
    const categoryCosmetics = filteredCosmetics.filter(cosmetic => cosmetic.category === category);

    const categoryContainer = document.getElementById("cosmetic-list");
    if (categoryContainer) {
        categoryCosmetics.forEach(cosmetic => {
            let div = document.createElement("div");

            let rarityColors = {
                "Legendary": "#FFA500",    
                "Ultra-Rare": "#8A2BE2",  
                "Rare": "#1E90FF",        
                "Commune": "#32CD32",     
                "Basic": "#A9A9A9"        
            };

            div.innerHTML = `<p>
                <strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - 
                <span style="color: ${rarityColors[cosmetic.rarity]}; font-weight: bold;">
                    ${cosmetic.rarity}
                </span>
            </p>`;

            categoryContainer.appendChild(div);
        });
    }
});

// Exécution au chargement de la page
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
};
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

    // Affichage des cosmétiques sur la page principale
    const container = document.getElementById("cosmetic-list");
    if (container) {
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];

        cosmetics.forEach((cosmetic, index) => {
            let div = document.createElement("div");

            // Définir la couleur selon la rareté
            let rarityColors = {
                "Legendary": "#FFA500",    // Orange
                "Ultra-Rare": "#8A2BE2",  // Violet
                "Rare": "#1E90FF",        // Bleu
                "Commune": "#32CD32",     // Vert
                "Basic": "#A9A9A9"        // Gris
            };

            div.innerHTML = `
                <p>
                    <strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - 
                    <span style="color: ${rarityColors[cosmetic.rarity]}; font-weight: bold;">
                        ${cosmetic.rarity}
                    </span>
                    <button class="delete-btn" data-index="${index}">Supprimer</button>
                </p>
            `;
            
            container.appendChild(div);
        });
        
        // Ajouter un événement pour supprimer un cosmétique
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');

                // Supprimer le cosmétique de la liste
                let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
                cosmetics.splice(index, 1); // Supprime l'élément à l'index

                // Sauvegarder les changements en LocalStorage
                localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

                // Rafraîchir l'affichage
                window.location.reload(); // Recharger la page pour afficher les modifications
            });
        });
    }

    // Affichage des cosmétiques par catégorie sur chaque page spécifique
    const category = window.location.pathname.split("/").pop().split(".")[0]; // Extraire la catégorie de l'URL
    const filteredCosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
    const categoryCosmetics = filteredCosmetics.filter(cosmetic => cosmetic.category === category);

    const categoryContainer = document.getElementById("cosmetic-list");
    if (categoryContainer) {
        categoryCosmetics.forEach((cosmetic, index) => {
            let div = document.createElement("div");

            let rarityColors = {
                "Legendary": "#FFA500",    
                "Ultra-Rare": "#8A2BE2",  
                "Rare": "#1E90FF",        
                "Commune": "#32CD32",     
                "Basic": "#A9A9A9"        
            };

            div.innerHTML = `
                <p>
                    <strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - 
                    <span style="color: ${rarityColors[cosmetic.rarity]}; font-weight: bold;">
                        ${cosmetic.rarity}
                    </span>
                    <button class="delete-btn" data-index="${index}">Supprimer</button>
                </p>
            `;
            categoryContainer.appendChild(div);
        });

        // Ajouter un événement pour supprimer un cosmétique dans une catégorie
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');

                // Supprimer le cosmétique de la liste
                let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
                cosmetics.splice(index, 1); // Supprime l'élément à l'index

                // Sauvegarder les changements en LocalStorage
                localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

                // Rafraîchir l'affichage
                window.location.reload(); // Recharger la page pour afficher les modifications
            });
        });
    }
});

// Exécution au chargement de la page
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
};

