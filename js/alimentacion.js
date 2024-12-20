const foods = [
    { name: "Pechuga de pollo", image: "../img2/pechuga_pollo.jpeg", protein: 31, lipids: 3.6, carbohydrates: 0, calories: 165 },
    { name: "Lomo de res", image: "../img2/lomo_res.jpeg", protein: 22, lipids: 9, carbohydrates: 0, calories: 250 },
    { name: "Atún", image: "../img2/atun.jpeg", protein: 23, lipids: 1, carbohydrates: 0, calories: 100 },
    { name: "Huevo", image: "../img2/huevo.jpeg", protein: 13, lipids: 11, carbohydrates: 1, calories: 155 },
    { name: "Soja texturizada", image: "../img2/soja_texturizada.jpeg", protein: 36, lipids: 1.6, carbohydrates: 30, calories: 330 },
    { name: "Tarwi", image: "../img2/tarwi.jpeg", protein: 23, lipids: 4, carbohydrates: 35, calories: 380 },
    { name: "Yogurt Griego", image: "../img2/yogurt_griego.jpeg", protein: 10, lipids: 5, carbohydrates: 3.6, calories: 120 },
    { name: "Chicharron", image: "../img2/chicharron.jpeg", protein: 25, lipids: 29, carbohydrates: 0, calories: 500 },
    { name: "Queso", image: "../img2/queso.jpeg", protein: 22, lipids: 33, carbohydrates: 3.4, calories: 400 },
    { name: "Leche", image: "../img2/leche.jpeg", protein: 3.4, lipids: 1, carbohydrates: 5, calories: 42 },
    { name: "Aceite de Oliva", image: "../img2/aceite_oliva.jpeg", protein: 0, lipids: 100, carbohydrates: 0, calories: 884 },
    { name: "Palta", image: "../img2/palta.jpeg", protein: 2, lipids: 15, carbohydrates: 9, calories: 160 },
    { name: "Arroz", image: "../img2/arroz.jpeg", protein: 7, lipids: 0.3, carbohydrates: 72, calories: 365 },
    { name: "Pasta", image: "../img2/pasta.jpeg", protein: 5, lipids: 1.1, carbohydrates: 30, calories: 160 },
    { name: "Avena", image: "../img2/avena.jpeg", protein: 13, lipids: 7, carbohydrates: 66, calories: 389 },
    { name: "Quinoa", image: "../img2/quinoa.jpeg", protein: 14, lipids: 6, carbohydrates: 64, calories: 368 },
    { name: "Haba", image: "../img2/haba.jpeg", protein: 8, lipids: 0.5, carbohydrates: 24, calories: 100 },
    { name: "Papas", image: "../img2/papas.jpeg", protein: 2, lipids: 0.1, carbohydrates: 17, calories: 77 },
    { name: "Zanahoria", image: "../img2/zanahoria.jpeg", protein: 0.9, lipids: 0.2, carbohydrates: 10, calories: 41 },
    { name: "Tomate", image: "../img2/tomate.jpeg", protein: 1, lipids: 0.2, carbohydrates: 3.9, calories: 18 },
    { name: "Lechuga", image: "../img2/lechuga.jpg", protein: 1.2, lipids: 0.2, carbohydrates: 3.7, calories: 15 },
    { name: "Cebolla", image: "../img2/cebolla.jpeg", protein: 1, lipids: 0.1, carbohydrates: 9, calories: 40 },
    { name: "Brocoly", image: "../img2/brocoli.jpeg", protein: 2.8, lipids: 0.4, carbohydrates: 7, calories: 34 },
    { name: "Platano", image: "../img2/platano.jpeg", protein: 1.3, lipids: 0.3, carbohydrates: 23, calories: 90 },
    { name: "Frutilla", image: "../img2/frutilla.jpeg", protein: 0.8, lipids: 0.4, carbohydrates: 7.7, calories: 32 },
    { name: "Uva", image: "../img2/uva.jpeg", protein: 0.7, lipids: 0.2, carbohydrates: 17, calories: 69 },
    { name: "Manzana", image: "../img2/manzana.jpeg", protein: 0.5, lipids: 0.3, carbohydrates: 25, calories: 95 },
    { name: "Mandarina", image: "../img2/mandarina.jpeg", protein: 0.6, lipids: 0.3, carbohydrates: 12, calories: 45 },
    { name: "Durazno", image: "../img2/durazno.jpeg", protein: 1, lipids: 0.4, carbohydrates: 9, calories: 39 },
    { name: "Agua", image: "../img2/agua.jpeg", protein: 0, lipids: 0, carbohydrates: 0, calories: 0 },
];

function generateCards() {
    const container = document.getElementById("cardsContainer");
    foods.forEach((food) => {
        const card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3 class="searchInput" id="neon">${food.name}</h3>
                    <img src="${food.image}" alt="${food.name}">
                    <p>Macronutriente: cada 100 g</p>
                </div>
                <div class="flip-card-back">
                    <p id="neon">${food.name}</p>
                    <p>Proteína: ${food.protein} g</p>
                    <p>Lípidos: ${food.lipids} g</p>
                    <p>Carbohidratos: ${food.carbohydrates} g</p>
                    <p>Calorías: ${food.calories} kcal</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCards() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach(card => {
        const foodName = card.querySelector("h3").textContent.toLowerCase();
        if (foodName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

window.onload = generateCards;
