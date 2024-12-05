const calculators = [
    { 
        id: 1, 
        name: 'Calorías',
        image: '../img/caloriasCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 },
            { name: 'edad', label: 'Edad (años)', type: 'number', min: 15, max: 100 },
            { name: 'altura', label: 'Altura (m)', type: 'number', min: 1, max: 2.5, step: 0.01 },
            { 
                name: 'objetivo',
                label: 'Objetivo',
                type: 'select',
                options: ['Volumen', 'Mantenimiento', 'Definición']
            }
        ]
    },
    {
        id: 2,
        name: 'Proteínas',
        image: '../img/proteinasCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 },
            {
                name: 'objetivo',
                label: 'Objetivo',
                type: 'select',
                options: ['Volumen', 'Mantenimiento', 'Definición']
            }
        ]
    },
    {
        id: 3,
        name: 'Lípidos',
        image: '../img/lipidosCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 },
            {
                name: 'objetivo',
                label: 'Objetivo',
                type: 'select',
                options: ['Volumen', 'Mantenimiento', 'Definición']
            }
        ]
    },
    {
        id: 4,
        name: 'Carbohidratos',
        image: '../img/carbohidratosCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 },
            {
                name: 'objetivo',
                label: 'Objetivo',
                type: 'select',
                options: ['Volumen', 'Mantenimiento', 'Definición']
            }
        ]
    },
    {
        id: 5,
        name: 'Agua Diaria',
        image: '/api/placeholder/150/150',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 }
        ]
    },
    {
        id: 6,
        name: '% Grasa Corporal',
        image: '../img/porcentajeGrasoCalc.jpeg',
        inputs: [
            { name: 'cuello', label: 'Cuello (cm)', type: 'number', min: 20, max: 60 },
            { name: 'cintura', label: 'Cintura (cm)', type: 'number', min: 50, max: 200 },
            { name: 'cadera', label: 'Cadera (cm)', type: 'number', min: 50, max: 200 },
            { name: 'altura', label: 'Altura (cm)', type: 'number', min: 100, max: 250 }
        ]
    },
    {
        id: 7,
        name: '% Muscular',
        image: '../img/masaMuscularCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 30, max: 200 },
            { name: 'grasa', label: '% Grasa', type: 'number', min: 1, max: 50 }
        ]
    },
    {
        id: 8,
        name: 'Peso Ideal',
        image: '../img/pesoIdealCalc.jpeg',
        inputs: [
            { name: 'altura', label: 'Altura (m)', type: 'number', min: 1, max: 2.5, step: 0.01 },
            { name: 'edad', label: 'Edad (años)', type: 'number', min: 15, max: 100 }
        ]
    }
];

// Funciones de cálculo
function calculateCaloriesRange(weight, height, age, gender, objective) {
    const bmr = gender === 'hombre'
        ? 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);

    const multipliers = {
        'volumen': [1.5, 1.7],
        'mantenimiento': [1.3, 1.5],
        'definicion': [1.1, 1.3]
    };

    const [minMultiplier, maxMultiplier] = multipliers[objective.toLowerCase()];
    return {
        min: Math.round(bmr * minMultiplier),
        max: Math.round(bmr * maxMultiplier)
    };
}

function calculateProteinRange(weight, objective) {
    const multipliers = {
        'volumen': [1.9, 2.2],
        'mantenimiento': [1.5, 1.8],
        'definicion': [2.2, 2.4]
    };

    const [minMultiplier, maxMultiplier] = multipliers[objective.toLowerCase()];
    return {
        min: Math.round(weight * minMultiplier),
        max: Math.round(weight * maxMultiplier)
    };
}

function calculateFatRange(calories, objective) {
    const percentages = {
        'volumen': [0.2, 0.3],
        'mantenimiento': [0.25, 0.35],
        'definicion': [0.15, 0.25]
    };

    const [minPercentage, maxPercentage] = percentages[objective.toLowerCase()];
    return {
        min: Math.round((calories * minPercentage) / 9),
        max: Math.round((calories * maxPercentage) / 9)
    };
}

function calculateCarbsRange(calories, proteinGrams, fatGrams) {
    const minCarbs = (calories - (proteinGrams.max * 4) - (fatGrams.max * 9)) / 4;
    const maxCarbs = (calories - (proteinGrams.min * 4) - (fatGrams.min * 9)) / 4;
    return {
        min: Math.round(minCarbs),
        max: Math.round(maxCarbs)
    };
}

function calculateWater(weight) {
    const vasos = weight / 7;
    const baseLiters = (vasos * 250) / 1000;
    const minWater = baseLiters * 0.9; // 10% menos
    const maxWater = baseLiters * 1.1; // 10% más
    return { min: minWater.toFixed(1), max: maxWater.toFixed(1) };
}

function calculateBodyFat(gender, neck, waist, height, hip = 0) {
    if (gender === 'hombre') {
        return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    }
    return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
}

function calculateMuscleMass(weight, bodyFat) {
    return weight * (1 - (bodyFat / 100));
}

function calculateIdealWeight(height, gender) {
    const baseWeight = gender === 'hombre'
        ? ((height * 100) - 100) - (((height * 100) - 150) / 4)
        : ((height * 100) - 100) - (((height * 100) - 150) / 2.5);

    const minWeight = baseWeight - 5; // 5 kg menos
    const maxWeight = baseWeight + 5; // 5 kg más
    return { min: minWeight.toFixed(1), max: maxWeight.toFixed(1) };
}

// Funciones de UI
function createInputField(input) {
    if (input.type === 'select') {
        return `
            <div class="input-group">
                <label>${input.label}</label>
                <select name="${input.name}" required>
                    ${input.options.map(opt => `<option value="${opt.toLowerCase()}">${opt}</option>`).join('')}
                </select>
            </div>
        `;
    }
    return `
        <div class="input-group">
            <label>${input.label}</label>
            <input type="${input.type}" 
                name="${input.name}"
                min="${input.min || ''}"
                max="${input.max || ''}"
                step="${input.step || '1'}"
                required>
        </div>
    `;
}

function createCard(calculator) {
    return `
        <div class="card" data-id="${calculator.id}">
            <h3>${calculator.name}</h3>
            <img src="${calculator.image}" alt="${calculator.name}">
            <div class="calculator-inputs">
                ${calculator.inputs.map(createInputField).join('')}
            </div>
            <button class="calc-btn" onclick="calculateIndividual(${calculator.id})">
                Calcular
            </button>
        </div>
    `;
}

function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}

function calculateIndividual(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    const calculator = calculators.find(c => c.id === id);
    const inputs = Array.from(card.querySelectorAll('input, select'));
    const values = {};
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            values[input.name] = input.type === 'number' ? parseFloat(input.value) : input.value;
        }
    });

    if (!isValid) {
        alert('Por favor, complete todos los campos correctamente');
        return;
    }

    const gender = document.querySelector('.filter-select').value;
    let result = '';

    switch(calculator.name) {
        case 'Calorías':
            const calorieRange = calculateCaloriesRange(values.peso, values.altura, values.edad, gender, values.objetivo);
            result = `Calorías diarias recomendadas: ${calorieRange.min} - ${calorieRange.max} kcal`;
            break;
        case 'Proteínas':
            const proteinRange = calculateProteinRange(values.peso, values.objetivo);
            result = `Consumo diario de proteínas: ${proteinRange.min}g - ${proteinRange.max}g`;
            break;
        case 'Lípidos':
            const calorieRange2 = calculateCaloriesRange(values.peso, values.altura, values.edad, gender, values.objetivo);
            const fatRange = calculateFatRange(calorieRange2.max, values.objetivo);
            result = `Consumo diario de lípidos: ${fatRange.min}g - ${fatRange.max}g`;
            break;
        case 'Carbohidratos':
            const calorieRange3 = calculateCaloriesRange(values.peso, values.altura, values.edad, gender, values.objetivo);
            const proteinRange3 = calculateProteinRange(values.peso, values.objetivo);
            const fatRange3 = calculateFatRange(calorieRange3.max, values.objetivo);
            const carbRange = calculateCarbsRange(calorieRange3, proteinRange3, fatRange3);
            result = `Consumo diario de carbohidratos: ${carbRange.min}g - ${carbRange.max}g`;
            break;
        case 'Agua Diaria':
            const waterRange = calculateWater(values.peso);
            result = `Consumo diario de agua: ${waterRange.min} - ${waterRange.max} litros`;
            break;
        case '% Grasa Corporal':
            const bodyFat = calculateBodyFat(gender, values.cuello, values.cintura, values.altura, values.cadera);
            result = `Porcentaje de grasa corporal: ${bodyFat.toFixed(1)}%`;
            break;
        case '% Muscular':
            const muscleMass = calculateMuscleMass(values.peso, values.grasa);
            result = `Masa muscular estimada: ${muscleMass.toFixed(1)}kg`;
            break;
        case 'Peso Ideal':
            const idealWeightRange = calculateIdealWeight(values.altura, gender);
            result = `Peso ideal estimado: ${idealWeightRange.min} - ${idealWeightRange.max} kg`;
            break;            
    }
    

    document.querySelector('#individualModal .modal-body').innerHTML = `
        <div class="result-section">
            <div class="result-item">${result}</div>
        </div>
    `;
    showModal('individualModal');
}

// Event Listeners
document.querySelector('.calculate-all-btn').addEventListener('click', () => {
    showModal('fullModal');
});

document.querySelector('.search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCards = calculators.filter(calc => 
        calc.name.toLowerCase().includes(searchTerm)
    );
    document.querySelector('.cards-container').innerHTML = 
        filteredCards.map(createCard).join('');
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            hideModal(modal.id);
        });
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        hideModal(e.target.id);
    }
});

// Inicialización
document.querySelector('.cards-container').innerHTML = 
    calculators.map(createCard).join('');

