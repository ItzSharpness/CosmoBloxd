document.addEventListener("DOMContentLoaded", function() {
    // Cibler l'élément où l'on clique
    const box = document.getElementById("random-url-box");

    // Charger les URL à partir du fichier JSON
    fetch('urls.json')
        .then(response => response.json())
        .then(urls => {
            // Vérifier que nous avons bien une liste d'URLs
            console.log("Liste d'URLs chargées :", urls);

            // Ajouter un écouteur d'événement sur le clic de la boîte
            box.addEventListener("click", function() {
                // Générer un index aléatoire dans la liste d'URL
                const randomIndex = Math.floor(Math.random() * urls.length);
                const randomUrl = urls[randomIndex];

                // Rediriger vers l'URL aléatoire
                window.location.href = randomUrl;
            });
        })
        .catch(error => {
            console.error("Erreur lors du chargement du fichier JSON :", error);
        });
});
