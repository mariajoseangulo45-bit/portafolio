/*====================================================
                MENÚ RESPONSIVE
=====================================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/*====================================================
                NAVBAR AL HACER SCROLL
=====================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.padding = "5px 0";
        header.style.background = "#ffffffee";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.padding = "0";
        header.style.background = "#fff";

    }

});


/*====================================================
                EFECTO ESCRITURA
=====================================================*/

const titulo = "María José";

const elemento = document.getElementById("typing");

let indice = 0;

function escribir() {

    if (indice < titulo.length) {

        elemento.textContent += titulo.charAt(indice);

        indice++;

        setTimeout(escribir, 180);

    }

}

escribir();


/*====================================================
                APARICIÓN DE SECCIONES
=====================================================*/

const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

}, {

    threshold: .25

});

secciones.forEach((section) => {

    observer.observe(section);

});


/*====================================================
            ANIMACIÓN DE HABILIDADES
=====================================================*/

const barras = document.querySelectorAll(".progreso");

const observerSkills = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.animation = "llenar 2s ease forwards";

        }

    });

});

barras.forEach((barra) => {

    observerSkills.observe(barra);

});


/*====================================================
                BOTÓN VOLVER ARRIBA
=====================================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTop.classList.add("visible");

    }

    else {

        btnTop.classList.remove("visible");

    }

});


btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*====================================================
                EFECTO HOVER TARJETAS
=====================================================*/

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/*====================================================
            MENÚ ACTIVO SEGÚN SECCIÓN
=====================================================*/

const enlaces = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let actual = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 150;

        const alto = section.clientHeight;

        if (pageYOffset >= top && pageYOffset < top + alto) {

            actual = section.getAttribute("id");

        }

    });

    enlaces.forEach((link) => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + actual) {

            link.classList.add("activo");

        }

    });

});


/*====================================================
            MENSAJE DEL FORMULARIO
=====================================================*/

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("¡Gracias por tu mensaje! 😊");

    formulario.reset();

});


/*====================================================
                AÑO AUTOMÁTICO
=====================================================*/

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} María José | Todos los derechos reservados`;