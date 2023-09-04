document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".nav-menu li");
    const sections = document.querySelectorAll(".content-section");

    // Mostrar la sección "Sobre mí" por default
    sections[0].style.display = "block";
    menuItems[0].classList.add("active");

    // Manejar clics en los elementos del menú
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            // Ocultar todas las secciones y cambiar clases activas
            sections.forEach(section => {
                section.style.display = "none";
            });
            menuItems.forEach(item => {
                item.classList.remove("active");
            });

            // Mostrar la sección correspondiente y cambiar clase activa
            sections[index].style.display = "block";
            item.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const projectSlider = document.querySelector(".project-slider");

    let currentPosition = 0;
    const cardWidth = 320; // Ancho de cada tarjeta, incluyendo margen

    prevButton.addEventListener("click", () => {
        if (currentPosition > 0) {
            currentPosition -= cardWidth;
            projectSlider.style.transform = `translateX(-${currentPosition}px)`;
        }
    });

    nextButton.addEventListener("click", () => {
        const maxPosition = (projectSlider.children.length - 1) * cardWidth;
        if (currentPosition < maxPosition) {
            currentPosition += cardWidth;
            projectSlider.style.transform = `translateX(-${currentPosition}px)`;
        }
    });
});

