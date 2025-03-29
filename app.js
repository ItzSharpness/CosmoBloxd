// Sélectionner la boîte qui contient l'icône "💼"
const redirectBox = document.getElementById("redirect-box");

// Fonction pour charger les URLs depuis le fichier JSON
fetch('urls.json')
  .then(response => response.json())
  .then(data => {
    // Lorsque l'utilisateur clique sur la boîte, rediriger vers une URL aléatoire
    redirectBox.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * data.length); // Choisir un index aléatoire
      window.location.href = data[randomIndex]; // Rediriger vers l'URL
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des URLs:', error);
  });

