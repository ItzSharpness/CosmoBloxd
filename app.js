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
};
