document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cosmetic-form");
    const nameInput = document.getElementById("cosmetic-name");
    const rarityInput = document.getElementById("cosmetic-rarity");
    const priceInput = document.getElementById("cosmetic-price");
    const imageInput = document.getElementById("cosmetic-image");
    const cosmeticList = document.getElementById("cosmetic-list");

    // Charger les cosmétiques depuis le localStorage
    function loadCosmetics() {
        const cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
        cosmeticList.innerHTML = ""; // Vider la liste avant de la remplir
        cosmetics.forEach((cosmetic, index) => {
            createCosmeticElement(cosmetic, index);
        });
    }

    // Créer un élément cosmétique dans la liste
    function createCosmeticElement(cosmetic, index) {
        const div = document.createElement("div");
        div.classList.add("cosmetic");

        // Bouton de suppression
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            removeCosmetic(index);
        });

        // Contenu du cosmétique
        div.innerHTML = `
            <p><strong>${cosmetic.name}</strong></p>
            <p>Rareté : ${cosmetic.rarity}</p>
            <p>Prix : ${cosmetic.price} 🪙</p>
        `;

        if (cosmetic.image) {
            const img = document.createElement("img");
            img.src = cosmetic.image;
            div.appendChild(img);
        }

        div.appendChild(deleteBtn);
        cosmeticList.appendChild(div);
    }

    // Ajouter un cosmétique
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const rarity = rarityInput.value;
        const price = priceInput.value;
        const file = imageInput.files[0];

        if (!name || !price) {
            alert("Veuillez remplir tous les champs obligatoires !");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
            const newCosmetic = {
                name: name,
                rarity: rarity,
                price: price,
                image: file ? event.target.result : null,
            };

            cosmetics.push(newCosmetic);
            localStorage.setItem("cosmetics", JSON.stringify(cosmetics));
            createCosmeticElement(newCosmetic, cosmetics.length - 1);
            form.reset();
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            reader.onload();
        }
    });

    // Supprimer un cosmétique
    function removeCosmetic(index) {
        let cosmetics = JSON.parse(localStorage.getItem("cosmetics")) || [];
        cosmetics.splice(index, 1);
        localStorage.setItem("cosmetics", JSON.stringify(cosmetics));
        loadCosmetics();
    }

    // Charger les cosmétiques au démarrage
    loadCosmetics();
});
