function ajustarImagen() {
    // Obtener el ancho de la ventana
    const anchoPantalla = window.innerWidth;

    // Obtener el elemento de la imagen
    const logo = document.getElementById("logo");

    // Ajustar según el tamaño de la pantalla
    if (anchoPantalla > 1200) { // Pantalla grande
        logo.src = "./img/TMV(1).png";
        logo.style.height = "150px";
        logo.style.width = "190px";
    } else if (anchoPantalla > 600) { // Pantalla mediana
        logo.src = "./img/TMV(2).png";
        logo.style.height = "150px";
        logo.style.width = "300px";
    } else { // Pantalla pequeña (celular)
        logo.src = "./img/TMV(3).png";
        logo.style.height = "100px";
        logo.style.width = "150px";
    }
}

// Llamar a la función al cargar la página
ajustarImagen();

// Llamar a la función al redimensionar la ventana
window.addEventListener("resize", ajustarImagen);