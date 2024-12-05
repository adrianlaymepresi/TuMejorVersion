const calculators = [
    { 
        id: 1, 
        name: 'Calorías',
        image: '../img/caloriasCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 },
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
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 },
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
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 },
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
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 },
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
        image: '../img/aguaCalc.jpeg',
        inputs: [
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 }
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
            { name: 'peso', label: 'Peso (kg)', type: 'number', min: 35, max: 200 },
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
function calculateCalories(weight, height, age, gender, objective) {
    let bmr = gender === 'hombre'
        ? 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);

    const multipliers = {
        'volumen': 1.6,
        'mantenimiento': 1.4,
        'definicion': 1.2
    };

    return Math.round(bmr * multipliers[objective.toLowerCase()]);
}

function calculateProtein(weight, objective) {
    const multipliers = {
        'volumen': 2.2,
        'mantenimiento': 2,
        'definicion': 2.4
    };
    return Math.round(weight * multipliers[objective.toLowerCase()]);
}

function calculateFat(weight, objective) {
    const percentages = {
        'volumen': 1,
        'mantenimiento': 0.8,
        'definicion': 0.6
    };
    return Math.round(weight * percentages[objective.toLowerCase()]);
}

function calculateCarbs(weight, objective) {
    const percentages = {
        'volumen': 4,
        'mantenimiento': 3,
        'definicion': 2
    };
    return Math.round(weight * percentages[objective.toLowerCase()]);
}


function calculateWater(weight) {
    const vasos = weight / 7;
    return (vasos * 250) / 1000;
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
    return gender === 'hombre'
        ? ((height * 100) - 100) - (((height * 100) - 150) / 4)
        : ((height * 100) - 100) - (((height * 100) - 150) / 2.5);
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
            const calories = calculateCalories(values.peso, values.altura, values.edad, gender, values.objetivo);
            result = `Calorías diarias recomendadas: ${calories} kcal`;
            break;
        case 'Proteínas':
            const protein = calculateProtein(values.peso, values.objetivo);
            result = `Consumo diario de proteínas: ${protein}g`;
            break;
        case 'Lípidos':
            const fats = calculateFat(values.peso, values.objetivo);
            result = `Consumo diario de lípidos: ${fats}g`;
            break;
        case 'Carbohidratos':
            const carbs = calculateCarbs(values.peso, values.objetivo);
            result = `Consumo diario de carbohidratos: ${carbs}g`;
            break;
        case 'Agua Diaria':
            const water = calculateWater(values.peso);
            result = `Consumo diario de agua: ${water.toFixed(1)} litros`;
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
            const idealWeight = calculateIdealWeight(values.altura, gender);
            result = `Peso ideal estimado: ${idealWeight.toFixed(1)}kg`;
            break;
    }

    document.querySelector('#individualModal .modal-body').innerHTML = `
        <div class="result-section">
            <div class="result-item">${result}</div>
        </div>
    `;
    showModal('individualModal');
}

function calculateFull() {
    const inputs = Array.from(document.querySelectorAll('#fullModal .full-input'));
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
    
    const calories = calculateCalories(values.peso, values.altura, values.edad, gender, values.objetivo);
    const protein = calculateProtein(values.peso, values.objetivo);
    const fats = calculateFat(values.peso, values.objetivo);
    const carbs = calculateCarbs(values.peso, values.objetivo);
    const water = calculateWater(values.peso);
    const bodyFat = calculateBodyFat(gender, values.cuello, values.cintura, values.altura * 100, values.cadera);
    const muscleMass = calculateMuscleMass(values.peso, bodyFat);
    const idealWeight = calculateIdealWeight(values.altura, gender);
    const resultHTML = `
                <div class="result-section">
                    <h4>Resultados Completos</h4>
                    <div class="result-item">Calorías: ${calories} kcal/día</div>
                    <div class="result-item">Proteínas: ${protein}g/día</div>
                    <div class="result-item">Lípidos: ${fats}g/día</div>
                    <div class="result-item">Carbohidratos: ${carbs}g/día</div>
                    <div class="result-item">Agua: ${water.toFixed(1)} litros/día</div>
                    <div class="result-item">% Grasa Corporal: ${bodyFat.toFixed(1)}%</div>
                    <div class="result-item">Masa Muscular: ${muscleMass.toFixed(1)}kg</div>
                    <div class="result-item">Peso Ideal: ${idealWeight.toFixed(1)}kg</div>
                </div>
            `;

            document.querySelector('#fullModal .result-section').innerHTML = resultHTML;
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