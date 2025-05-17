// Script para interatividade do site Itaú Sustentabilidade 

document.addEventListener("DOMContentLoaded", function() {
    console.log("Site Itaú Sustentabilidade carregado e pronto!");

    // Exemplo: Menu responsivo (hamburger)
    const header = document.querySelector(".itau-header");
    const nav = document.querySelector(".main-nav");
    const logo = document.querySelector(".itau-header .logo");

    if (header && nav) {
        const menuButton = document.createElement("button");
        menuButton.classList.add("menu-toggle");
        menuButton.innerHTML = "&#9776;"; // Hamburger icon
        header.insertBefore(menuButton, nav);

        menuButton.addEventListener("click", function() {
            nav.classList.toggle("active");
            if (nav.classList.contains("active")) {
                menuButton.innerHTML = "&times;"; // Close icon
            }
            else {
                menuButton.innerHTML = "&#9776;";
            }
        });
    }

    // Exemplo: Scroll suave para âncoras
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            let targetId = this.getAttribute("href");
            // Se for apenas "#", não faz nada (evita erro com links de placeholder)
            if (targetId === "#") return;
            
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
                // Fecha o menu mobile se estiver aberto após clicar em um link
                if (nav && nav.classList.contains("active")) {
                    nav.classList.remove("active");
                    const menuToggle = document.querySelector(".menu-toggle");
                    if(menuToggle) menuToggle.innerHTML = "&#9776;";
                }
            }
        });
    });
});

