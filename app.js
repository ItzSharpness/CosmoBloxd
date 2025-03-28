document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cosmetic-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();  // Empêche le rechargement de la page à la soumission du formulaire

            // Récupérer les valeurs du formulaire
            const name = document.getElementById("cosmetic-name").value;
            const type = document.getElementById("cosmetic-type").value;
            const price = document.getElementById("cosmetic-price").value;
            const rarity = document.getElementById("cosmetic-rarity").value;
            const category = document.getElementById("cosmetic-category").value;

            // Vérification des valeurs récupérées
            console.log("Nom: ", name);
            console.log("Type: ", type);
            console.log("Prix: ", price);
            console.log("Rareté: ", rarity);
            console.log("Catégorie: ", category);

            // Validation des champs
            if (!name || !type || !price || !rarity || !category) {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            // Créer un objet cosmétique
            const cosmetic = { name, type, price, rarity, category };

            // Récupérer les cosmétiques existants dans localStorage
            let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
            cosmetics.push(cosmetic);

            // Sauvegarder la nouvelle liste dans localStorage
            localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

            // Afficher un message de succès dans la console
            console.log("Cosmétique ajouté avec succès !");

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
            
            container.appendChild(div);
        });
        
        // Ajouter un événement pour supprimer un cosmétique
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                console.log("Index du cosmétique à supprimer :", index);  // Ajout du log

                // Supprimer le cosmétique de la liste
                let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
                cosmetics.splice(index, 1); // Supprime l'élément à l'index

                // Sauvegarder les changements en LocalStorage
                localStorage.setItem("cosmetics", JSON.stringify(cosmetics));

                // Rafraîchir l'affichage sans recharger la page
                container.innerHTML = ''; // Efface la liste actuelle
                cosmetics.forEach((cosmetic, index) => {
                    let div = document.createElement("div");
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
            });
        });
    }
});
