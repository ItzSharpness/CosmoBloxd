document.getElementById("add-cosmetic").addEventListener("click", function () {
    const name = document.getElementById("cosmetic-name").value;
    const rarity = document.getElementById("cosmetic-rarity").value;
    const price = document.getElementById("cosmetic-price").value;
    const imageUrl = document.getElementById("cosmetic-image").value; // URL de l'image

    if (!name || !price || isNaN(price)) {
        alert("Veuillez entrer un nom et un prix valide !");
        return;
    }

    const cosmeticList = document.getElementById("cosmetic-list");

    const cosmeticDiv = document.createElement("div");
    cosmeticDiv.classList.add("cosmetic");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        cosmeticDiv.remove();
    });

    const title = document.createElement("h3");
    title.innerText = name;

    const rarityText = document.createElement("p");
    rarityText.innerText = `Rareté: ${rarity}`;
    rarityText.classList.add(rarity.toLowerCase());

    const priceText = document.createElement("p");
    priceText.innerText = `Prix: ${price} écus 🪙`;

    const image = document.createElement("img");
    if (imageUrl) {
        image.src = imageUrl;
    } else {
        image.style.display = "none"; // Cache l'image si aucune URL n'est fournie
    }

    cosmeticDiv.appendChild(deleteBtn);
    cosmeticDiv.appendChild(title);
    cosmeticDiv.appendChild(rarityText);
    cosmeticDiv.appendChild(priceText);
    if (imageUrl) {
        cosmeticDiv.appendChild(image);
    }

    cosmeticList.appendChild(cosmeticDiv);

    // Réinitialisation des champs
    document.getElementById("cosmetic-name").value = "";
    document.getElementById("cosmetic-price").value = "";
    document.getElementById("cosmetic-image").value = "";
});
