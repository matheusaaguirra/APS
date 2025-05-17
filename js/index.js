// Script para interatividade do site Itaú Sustentabilidade 

document.addEventListener("DOMContentLoaded", function() {
    console.log("Site Itaú Sustentabilidade carregado e pronto!");

    // Exemplo: Menu responsivo (hamburger)
    const header = document.querySelector(".itau-header");
    const nav = document.querySelector(".main-nav");
    const logo = document.querySelector(".itau-header .logo")

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

    // Adicionar estilo para o menu-toggle e nav.active no CSS se não existir
    // Exemplo de como adicionar dinamicamente, mas idealmente estaria no CSS:
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .menu-toggle {
            display: none; /* Escondido em telas maiores */
            background: none;
            border: none;
            color: var(--cor-texto-sobre-laranja);
            font-size: 2em;
            cursor: pointer;
            order: -1; /* Para aparecer antes do logo em flex-direction column */
        }
        @media (max-width: 768px) {
            .main-nav {
                display: none; /* Escondido por padrão em mobile */
                width: 100%;
                margin-top: 1em;
            }
            .main-nav.active {
                display: block; /* Mostra quando ativo */
            }
            .main-nav ul {
                flex-direction: column;
                align-items: center;
            }
            .main-nav ul li {
                margin: 0.5em 0;
            }
            .menu-toggle {
                display: block; /* Mostra o botão em mobile */
            }
            .itau-header .container {
                flex-wrap: wrap; /* Permite que o menu vá para baixo */
            }
            .itau-header .logo {
                 margin-bottom: 10px; /* Espaço entre logo e menu hamburguer */
            }
            .header-actions{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 10px;
            }
        }
    `;
    document.head.appendChild(styleSheet);

});

