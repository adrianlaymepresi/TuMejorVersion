// Datos de los músculos
const muscles = [
    { name: "Biceps 1", description: "CURL DE BICEP Entrena el bíceps braquial y mejora la flexión del codo y la fuerza al levantar objetos.", image: "../img/biceps1.mp4" },
    { name: "Biceps 2", description: "MARTILLO Trabaja el bíceps braquial y el braquiorradial, mejorando el agarre y la estabilidad del antebrazo.", image: "../img/biceps2.mp4" },
    { name: "Biceps 3", description: "MARTILLO CON CUERDA Desarrolla el bíceps braquial, braquiorradial y antebrazo, aumentando la fuerza de tracción y forma del bíceps.", image: "../img/biceps3.mp4" },
    { name: "Triceps 1", description: "EXTENSION DE TRICEPS CUERDA Entrena el tríceps, enfocándose en la extensión del codo y mejorando la fuerza en empuje.", image: "../img/triceps1.mp4" },
    { name: "Triceps 2", description: "EXTENSION DE TRICEPS BARRA Trabaja el tríceps, aumentando la fuerza en el codo y la estabilidad durante empujes.", image: "../img/triceps2.mp4" },
    { name: "Triceps 3", description: "FONDOS TRICEPS Desarrolla el tríceps y el torso, enfocándose en la extensión completa del codo y la fuerza en movimientos de empuje.", image: "../img/triceps3.mp4" },
    { name: "Antebrazos 1", description: "FLEXIÓN DE MUÑECA Entrena los músculos del antebrazo para mejorar la fuerza en la muñeca y la capacidad de agarre.", image: "../img/antebrazos1.mp4" },
    { name: "Antebrazos 2", description: "CURL DE MUÑECA Mejorar la fuerza en los antebrazos y la resistencia al realizar movimientos repetitivos de flexión de muñeca.", image: "../img/antebrazos2.mp4" },
    { name: "Antebrazos 3", description: "EXTENSION DE MUÑECA Refuerza la estabilidad de la muñeca, ayudando en la mejora de la fuerza en los movimientos de extensión.", image: "../img/antebrazos3.mp4" },
    { name: "Pectorales 1", description: "PRESS DE BANCA Estimula el desarrollo de los pectorales, ayudando a mejorar la fuerza en empujes horizontales.", image: "../img/pectorales1.mp4" },
    { name: "Pectorales 2", description: "PRESS DE BANCA INCLINADO Trabaja el pecho superior, mejorando la fuerza y forma de la parte superior del torso.", image: "../img/pectorales2.mp4" },
    { name: "Pectorales 3", description: "PECHOS CON MANUALIDADES POTENCIADAS Desarrollo global de los pectorales para mejorar la forma general del pecho.", image: "../img/pectorales3.mp4" },
    { name: "Dorsales 1", description: "PULL UPS Mejora fuerza en espalda, específicamente en dorsales, y aumenta la capacidad de tracción en movimientos de levantamiento.", image: "../img/dorsales1.mp4" },
    { name: "Dorsales 2", description: "LAT PULLDOWN Ejercicio que trabaja la espalda y mejora la fuerza de tracción, específicamente en los dorsales.", image: "../img/dorsales2.mp4" },
    { name: "Dorsales 3", description: "PULLOVER DORSAL Desarrolla los dorsales al centrarse en el movimiento de tracción y extensión del torso.", image: "../img/dorsales3.mp4" },
    { name: "Hombro 1", description: "ELEVACIÓN LATERAL DESDE LA CINTURA Trabaja el deltoides lateral, mejorando la elevación lateral del brazo y fortaleciendo la estabilidad del hombro.", image: "../img/hombro1.mp4" },
    { name: "Hombro 2", description: "PRESS MILITAR Enfocado en fortalecer los deltoides y el hombro en general, mejorando la capacidad de empujar y estabilizar el torso.", image: "../img/hombro2.mp4" },
    { name: "Hombro 3", description: "FLEXIÓN DE HOMBROS Mejora la movilidad y fuerza del hombro, enfocado en el deltoides anterior.", image: "../img/hombro3.mp4" },
    { name: "Trapecio 1", description: "ENCOGIMIENTO DE HOMBROS Trabaja el trapecio superior, mejorando la elevación de los omóplatos y la postura del cuello.", image: "../img/trapecio1.mp4" },
    { name: "Trapecio 2", description: "RAISES DE HOMBROS Concentra el esfuerzo en el trapecio medio y superior, dando estabilidad cuello y la parte superior de la espalda.", image: "../img/trapecio2.mp4" },
    { name: "Trapecio 3", description: "ROTACIÓN DE HOMBROS Desarrolla la fuerza y estabilidad del trapecio y la columna cervical.", image: "../img/trapecio3.mp4" },
    { name: "Glúteos 1", description: "SENTADILLAS Profundiza la extensión de la cadera y mejora la fuerza en el movimiento de flexión de cadera, con enfoque en los glúteos.", image: "../img/gluteos1.mp4" },
    { name: "Glúteos 2", description: "PESO MUERTO Sumo fuerza y estabilidad a las caderas y glúteos, trabajando en movimientos explosivos y de levantamiento.", image: "../img/gluteos2.mp4" },
    { name: "Glúteos 3", description: "HACER SENTADILLAS Explora el equilibrio estático de los glúteos al mantener la postura mientras se realizan movimientos controlados.", image: "../img/gluteos3.mp4" },
    { name: "Cuádriceps 1", description: "SENTADILLA Profundiza la extensión de la pierna y la estabilidad de la rodilla, centrando en los cuádriceps.", image: "../img/cuadriceps1.mp4" },
    { name: "Cuádriceps 2", description: "EXTENSION DE PIERNA Mejora el rango de movimiento de la rodilla y la fuerza de los cuádriceps.", image: "../img/cuadriceps2.mp4" },
    { name: "Cuádriceps 3", description: "SALTOS Mejora la potencia de salto y la estabilidad al realizar movimientos explosivos con los cuádriceps.", image: "../img/cuadriceps3.mp4" },
    { name: "Gemelos 1", description: "ELEVACIÓN DE TALONES Enfocado en la flexión plantar para fortalecer los músculos de los gemelos.", image: "../img/gemelos1.mp4" },
    { name: "Gemelos 2", description: "CARRERA RÁPIDA Potencia la fuerza de los gemelos al optimizar la capacidad de correr y saltar rápidamente.", image: "../img/gemelos2.mp4" },
    { name: "Gemelos 3", description: "MANTENIMIENTO DE POSICIÓN DE PIE Mejora el equilibrio de los gemelos al estar de pie por periodos prolongados.", image: "../img/gemelos3.mp4" },
    { name: "Abdominales 1", description: "PLANCHAS Mejora la estabilidad del torso y la fuerza en el área abdominal, ayudando en la estabilización durante movimientos de giro.", image: "../img/abdominales1.jpeg" },
    { name: "Abdominales 2", description: "CRUNCHES Trabaja los músculos abdominales al concentrarse en la flexión de la columna vertebral, ofreciendo soporte para la espalda baja.", image: "../img/abdominales2.mp4" },
    { name: "Abdominales 3", description: "LEGS RAISES Mejora fuerza y resistencia en parte baja del abdomen, enfocado en las flexiones de piernas y abdominales inferiores.", image: "../img/abdominales3.mp4" },
    { name: "Isquiotibiales 1", description: "FLEXIÓN DE RODILLAS Trabaja los isquiotibiales al enfocarse en la flexión de la rodilla y la extensión de la cadera.", image: "../img/isquiotibiales1.mp4" },
    { name: "Isquiotibiales 2", description: "EXTENSION DE CADERA Enfoca la fuerza en la cadera, trabajando los isquiotibiales para mejorar flexibilidad y potencia.", image: "../img/isquiotibiales2.mp4" },
    { name: "Isquiotibiales 3", description: "CARRERA VELOZ Mejora la estabilidad en los isquiotibiales y su respuesta en movimientos rápidos, como al correr o cambiar de dirección.", image: "../img/isquiotibiales3.mp4" },
];

// Generar tarjetas dinámicamente
function generateCards() {
    const container = document.getElementById("cardsContainer");
    muscles.forEach((muscle) => {
        const card = document.createElement("div");
        card.className = "flip-card";
        card.setAttribute("data-muscle", muscle.name.toLowerCase());

        // Verifica si la imagen es MP4 o GIF
        let mediaElement;
        if (muscle.image.endsWith(".mp4")) {
            mediaElement = `<video autoplay loop muted style="width: 160px; height: 200px;">
                                <source src="${muscle.image}" type="video/mp4">
                                Tu navegador no soporta este video.
                            </video>`;
        } else {
            mediaElement = `<img src="${muscle.image}" alt="${muscle.name}" style="width: 160px; height: 200px;" />`;
        }

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">${muscle.name}</p>
                    ${mediaElement}
                </div>
                <div class="flip-card-back">
                    <p class="title">${muscle.name}</p>
                    <p>${muscle.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtrar tarjetas según el texto ingresado en el buscador
function filterCards() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach((card) => {
        const muscleName = card.getAttribute("data-muscle");
        if (muscleName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Llamar a la función para generar las tarjetas
generateCards();
