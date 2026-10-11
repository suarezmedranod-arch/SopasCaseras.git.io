



/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   CERRAR MENU AL SELECCIONAR OPCION
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   PEDIDOS POR WHATSAPP
===================================================== */

function pedir(producto) {

    const numero = "50588888888";

    const mensaje =
        `Hola 👋, quiero realizar un pedido.%0A%0A` +
        `🍲 Producto: ${producto}%0A` +
        `📍 Mi ubicación es: `;

    const url =
        `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
}