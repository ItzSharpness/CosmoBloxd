// Fonction pour se connecter
function login() {
    const username = document.getElementById('username').value;
    if (username) {
        // Enregistre le nom d'utilisateur dans le LocalStorage
        localStorage.setItem('username', username);
        
        // Affiche les informations utilisateur
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
}

// Fonction pour se déconnecter
function logout() {
    // Supprime les données du LocalStorage
    localStorage.removeItem('username');
    
    // Cache les informations utilisateur et réaffiche le formulaire de connexion
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
}

// Vérifie si un utilisateur est déjà connecté
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
    // Fonction pour afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
    }
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
    const container = document.querySelector(".content");
    if (container) {
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
        cosmetics.forEach(cosmetic => {
            let div = document.createElement("div");
            div.innerHTML = `<p><strong>${cosmetic.name}</strong> - ${cosmetic.type} - ${cosmetic.price} écus - Rareté : ${cosmetic.rarity}</p>`;
            container.appendChild(div);
        });
    }
});
    
};

