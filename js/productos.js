// Datos de ejemplo de productos
const products = [
    { id: 1, name: "CREATINA 60 servicios", price: 299, description: "Creatina Monohidratada y Micronizada 100% de Pureza. Ayuda a mejorar el rendimiento del ejercicio y aumentar la masa muscular.", image:"../img/CREATINE_MONOHYDRATE_ESSENTIALS_60.webp" },
    { id: 2, name: "CREATINA 200 servicios", price: 699, description: "Creatina Monohidratada y Micronizada 100% de Pureza. Ayuda a mejorar el rendimiento del ejercicio y aumentar la masa muscular.", image:"../img/CREATINE_MONOHYDRATE_ESSENTIALS_200.webp" },
    { id: 3, name: "GLUTAMINE 60 servicios", price: 149, description: "Glutamina Fermentada 100% de Pureza. Proporciona energía, acelera la recuperación de la masa muscular una vez acabado el entrenamiento.", image:"../img/GLUTAMINE_FERMENTED_60.webp" },
    { id: 4, name: "PROTEINA ISOWHEY 2 Libras", price: 600, description: "Sabor Crema Helada de Arándanos. La maxima Calidad 100%. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/ISOPHORM®_Hydrolized_Isolate_Whey_Protein_2Lb_BlueBerryIceCream.webp" },
    { id: 5, name: "PROTEINA ISOWHEY 2 Libras", price: 600, description: "Sabor Galletas con Crema. La maxima Calidad 100%. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/ISOPHORM®_Hydrolized_Isolate_Whey_Protein_2Lb_CookiesCream.webp" },
    { id: 6, name: "PROTEINA ISOWHEY 2 Libras", price: 600, description: "Sabor Chocolate Caliente. La maxima Calidad 100%. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/ISOPHORM®_Hydrolized_Isolate_Whey_Protein_2Lb_HotChocolate.webp" },
    { id: 7, name: "PROTEINA ISOWHEY 2 Libras", price: 600, description: "Sabor Crema Suave de Vainilla. La maxima Calidad 100%. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/ISOPHORM®_Hydrolized_Isolate_Whey_Protein_2Lb_VanillaSoftCream.webp"},
    { id: 8, name: "PROTEINA ISOWHEY 2 Libras", price: 600, description: "Sabor Crema-Mani & Chocolate-Blanco. La maxima Calidad 100%. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/ISOPHORM®_Hydrolized_Isolate_Whey_Protein_2Lb_WhiteChocolatePeanutButter.webp" },
    { id: 9, name: "PREENTRENO VENOM-INFIERNO 60 servicios", price: 199, description: "Sabor Limon. Aumenta el rendimiento y retrasa la fatiga muscular.", image:"../img/PREENTRENO_VENOM_INFERNO_BRAZO_DE_50_LIMÓN_60.webp" },
    { id: 10, name: "PREENTRENO VENOM-INFIERNO 60 servicios", price: 229, description: "Sabor Sangre. Aumenta el rendimiento y retrasa la fatiga muscular.", image:"../img/PREENTRENO_VENOM_INFERNO_DRAGONS_BLOOD_60.webp" },
    { id: 11, name: "PREENTRENO VENOM-INFIERNO 60 servicios", price: 499, description: "Sabor Sandileta. Aumenta el rendimiento y retrasa la fatiga muscular.", image:"../img/PREENTRENO_VENOM_INFERNO_SANDILETA_SHOT_60.webp" },
    { id: 12, name: "VITAMINAS & MINERALES 38 servicios", price: 129, description: "Sabor a Limonada. Ayudan al rendimiento deportivo y a la regeneración del tejido muscular.", image:"../img/VITAMINAS_MINELARES_GREEN_REDS_LIMONADE_38.webp" },
    { id: 13, name: "VITAMINAS & MINERALES 38 servicios", price: 209, description: "Sabor a Mango. Ayudan al rendimiento deportivo y a la regeneración del tejido muscular.", image:"../img/VITAMINAS_MINELARES_GREEN_REDS_MANGO_38.webp" },
    { id: 14, name: "VITAMINAS & MINERALES 38 servicios", price: 319, description: "Sabor a Frutos Rojos. Ayudan al rendimiento deportivo y a la regeneración del tejido muscular.", image:"../img/VITAMINAS_MINELARES_GREEN_REDS_ORIGINAL(BERRIES)_38.webp" },
    { id: 15, name: "VITAMINAS & MINERALES 38 servicios", price: 399, description: "Sabor a Piña. Ayudan al rendimiento deportivo y a la regeneración del tejido muscular.", image:"../img/VITAMINAS_MINELARES_GREEN_REDS_PINEAPPLE_38.webp" },
    { id: 16, name: "PROTEINA WHEYPHORM 2 Libras", price: 550, description: "Sabor a Pastel de Cumpleaños. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/WHEYPHORM®_2Lb_BirthdayCake.webp" },
    { id: 17, name: "PROTEINA WHEYPHORM 2 Libras", price: 550, description: "Sabor a Capuccino. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/WHEYPHORM®_2Lb_Cappuccino.webp" },
    { id: 18, name: "PROTEINA WHEYPHORM 2 Libras", price: 550, description: "Sabor a Crema Helada de Coco. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/WHEYPHORM®_2Lb_CoconutIceCream.webp" },
    { id: 19, name: "PROTEINA WHEYPHORM 2 Libras", price: 550, description: "Sabor a Brownie de Chocolate. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/WHEYPHORM®_2Lb_DoubleChocolateBrownie.webp" },
    { id: 20, name: "PROTEINA WHEYPHORM 2 Libras", price: 550, description: "Sabor a Crema Helada de Vainilla-Chocolate. Ayuda a reducir el riesgo de la degradación muscular, y ayuda a fortalecer los músculos.", image:"../img/WHEYPHORM®_2Lb_WhiteChocolateVanillaIceCream.webp" }
];

function createCard(product) {
    const imageUrl = product.image ? product.image : "../img/default-image.jpg"; // Imagen predeterminada si no existe la URL
    return `
        <div class="col-md-3 col-sm-6">
            <div class="card">
                <div class="image_container">
                    <img src="${imageUrl}" alt="${product.name}" class="product-image">
                </div>
                <div class="title">${product.name}</div>
                <div class="description">${product.description}</div>
                <div class="extra-description">Descripción adicional sobre el producto...</div>
                <div class="action">
                    <div class="price">${product.price} Bs</div>
                    <button class="cart-button" onclick="addToCart(${product.id})">
                        <img src="../img/carrito.png" alt="Carrito" class="cart-icon"> Añadir
                    </button>
                </div>
            </div>
        </div>
    `;
}


let cart = []; // Array para almacenar productos en el carrito

// Función para mostrar el carrito en el Offcanvas
// Función para mostrar el carrito en el Offcanvas
// Función para mostrar el carrito en el Offcanvas
function updateCart() {
    const cartContent = document.getElementById('cartContent');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartContent.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    let total = 0;
    let totalItems = 0;

    cartContent.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        return `
            <div class="card mb-3 p-3" style="border-radius: 10px; border: 1px solid #ddd; background-color: #6f42c1;">
                <div class="d-flex flex-column align-items-center">
                    <h6 class="text-center mb-2" style="color: white;">${item.name}</h6>
                    <img src="${item.image}" alt="${item.name}" class="product-image mb-2" width="100" style="object-fit: cover; border-radius: 8px;">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <button class="btn btn-sm btn-danger me-2" onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="d-block text-center" style="min-width: 30px; color: white;">${item.quantity}</span>
                        <button class="btn btn-sm btn-success ms-2" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="text-center mt-2">
                        <strong style="color: white;">${itemTotal.toFixed(2)} Bs</strong>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    cartTotal.textContent = `${total.toFixed(2)} Bs`;
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
        showAlert('Cantidad actualizada en el carrito', 'success');
    } else {
        cart.push({ ...product, quantity: 1 });
        showAlert('Producto añadido al carrito', 'success');
    }
    updateCart();

    // Actualizar el contador de productos en el botón
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

// Función para cambiar la cantidad de un producto en el carrito
function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Eliminar producto si la cantidad es 0
    }
    updateCart();

    // Actualizar el contador de productos en el botón
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

// Función para finalizar la compra
function finalizePurchase() {
    // Vaciar el carrito
    cart = [];
    updateCart();

    // Ocultar el Offcanvas
    const offcanvasElement = document.getElementById('cartOffcanvas');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();

    // Mostrar el modal con el QR
    const qrImageUrl = '../img/QR Presi.jpeg'; // URL del QR
    const qrDownloadUrl = qrImageUrl; // La misma URL para descargar el QR

    // Establecer la fuente de la imagen QR
    document.getElementById('qrImage').src = qrImageUrl;

    // Configurar el enlace de descarga
    document.getElementById('qrDownload').href = qrDownloadUrl;

    // Abrir el modal con el QR
    const modal = new bootstrap.Modal(document.getElementById('qrModal'));
    modal.show();

    // Reiniciar el carrito a 0
    resetCart();
}


// Función para mostrar mensajes de alerta y abrir el modal con la imagen y QR
function showAlert(message, type = 'success') {
    // Crear la alerta
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} alert-dismissible fade show`;
    toast.role = 'alert';
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(toast);

    // Mostrar el modal con imagen y QR al cerrar la alerta
    toast.querySelector('.btn-close').addEventListener('click', () => {
        // URL de la imagen del código QR
        const qrImageUrl = '../img/calculadora,jpg'; // Reemplaza con tu URL de QR
        const qrDownloadUrl = qrImageUrl; // La misma URL para descargar el QR

        // Establecer la fuente de la imagen QR
        document.getElementById('qrImage').src = qrImageUrl;
        
        // Configurar el enlace de descarga
        document.getElementById('qrDownload').href = qrDownloadUrl;

        // Abrir el modal con el QR
        const modal = new bootstrap.Modal(document.getElementById('qrModal'));
        modal.show();
        
        // Reiniciar el carrito a 0
        resetCart();
    });

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Función para reiniciar el carrito a 0
function resetCart() {
    // Reiniciar el carrito
    cart = [];
    updateCart();

    // Opcional: Actualizar el contador del carrito en el botón
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = '0';
}



// Función para filtrar productos por nombre
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Mostrar las cards filtradas
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = filteredProducts.map(product => createCard(product)).join('');
}

// Filtrar productos al escribir en el buscador
document.getElementById('searchInput').addEventListener('input', filterProducts);

// Mostrar todas las cards al cargar la página
window.onload = function () {
    filterProducts();
};


