const translations = {
    en: {
        home: "HOME",
        about: "ABOUT",
        skills: "SKILLS",
        services: "SERVICES",
        portfolio: "PORTFOLIO",
        aboutMe: "About me",
        mySkills: "My Skills",
        languages: "Languages:",
        programming: "Programming languages:",
        databases: "Databases",
        downloadCV: "Download CV",
        servicesTitle: "My Services",
        followMe: "Follow Me",
        portfolioTitle: "Portfolio",
        // Agrega más traducciones según sea necesario
    },
    es: {
        home: "INICIO",
        about: "SOBRE MÍ",
        skills: "HABILIDADES",
        services: "SERVICIOS",
        portfolio: "PORTAFOLIO",
        aboutMe: "Sobre mí",
        mySkills: "Mis habilidades",
        languages: "Idiomas:",
        programming: "Lenguajes de programación:",
        databases: "Bases de datos",
        downloadCV: "Descargar CV",
        servicesTitle: "Mis Servicios",
        followMe: "Sígueme",
        portfolioTitle: "Portafolio",
        // Agrega más traducciones según sea necesario
    }
};

let currentLang = 'en'; // Idioma por defecto

function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[lang][key];
    });
    currentLang = lang;
    document.getElementById("langBtn").textContent = lang === 'en' ? 'En' : 'Es'; // Cambia el texto del botón
}

// Manejo de eventos para el menú de idiomas
document.getElementById("langBtn").addEventListener("click", () => {
    const menu = document.getElementById("langMenu");
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll("#langMenu a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute("data-lang");
        translatePage(lang);
        document.getElementById("langMenu").style.display = 'none'; // Oculta el menú
    });
});

// Ocultar el menú si se hace clic fuera de él
window.addEventListener("click", (e) => {
    const menu = document.getElementById("langMenu");
    if (!menu.contains(e.target) && e.target.id !== "langBtn") {
        menu.style.display = 'none';
    }
});
