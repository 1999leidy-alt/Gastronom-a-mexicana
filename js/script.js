const textos = {
    es: {
        tituloPagina: "Cultura y Sabor Mexicano",
        subtitulo: "El Patrimonio Vivo de México",
        desc1: "La gastronomía mexicana es mucho más que alimento; es una manifestación cultural viva que entrelaza la historia milenaria de los pueblos indígenas con la herencia colonial.",
        desc2: "En México, la cocina es un rito social. Representa la unión de las familias y la biodiversidad de nuestras tierras. Por su técnica, antigüedad y simbolismo, la UNESCO la ha reconocido como Patrimonio Cultural Inmaterial de la Humanidad.",
        // Platos Tradicionales
        t1: "Tacos al Pastor: La Joya de la Corona",
        d1: "Los tacos al pastor son el resultado de un fascinante mestizaje cultural. Surgieron de la adaptación del shawarma libanés a los ingredientes locales mexicanos. La carne de cerdo se marina durante horas en una mezcla de achiote, vinagre, chiles secos y especias secretas.",
        t2: "Mole Poblano: Alquimia de Sabores",
        d2: "Considerado el plato nacional de México, el mole poblano es una obra maestra de la cocina barroca. Su elaboración es un proceso ritual que puede durar días, donde se muelen y fríen más de 20 ingredientes, incluyendo chiles, almendras y chocolate amargo.",
        // Ingredientes
        i1: "El Maíz: Corazón de la Vida",
        i2: "El Chile: Identidad y Panteón de Sabores",
        i3: "El Frijol: Pilar Nutricional"
    },
    en: {
        tituloPagina: "Mexican Culture and Flavor",
        subtitulo: "The Living Heritage of Mexico",
        desc1: "Mexican gastronomy is much more than food; it is a living cultural manifestation that intertwines the millenary history of indigenous peoples with colonial heritage.",
        desc2: "In Mexico, cooking is a social rite. It represents the union of families and the biodiversity of our lands. Due to its technique, antiquity, and symbolism, UNESCO has recognized it as an Intangible Cultural Heritage of Humanity.",
        // Platos Tradicionales
        t1: "Tacos al Pastor: The Crown Jewel",
        d1: "Tacos al pastor are the result of a fascinating cultural blending. They emerged from the adaptation of Lebanese shawarma to local Mexican ingredients. The pork meat is marinated for hours in a mixture of achiote, vinegar, dried chilies, and secret spices.",
        t2: "Mole Poblano: Alchemy of Flavors",
        d2: "Considered Mexico's national dish, mole poblano is a masterpiece of Baroque cuisine. Its preparation is a ritual process that can take days, where more than 20 ingredients are ground and fried, including chilies, almonds, and dark chocolate.",
        // Ingredientes
        i1: "Corn: Heart of Life",
        i2: "Chili: Identity and Pantheon of Flavors",
        i3: "Bean: Nutritional Pillar"
    }
};

function cambiarIdioma(idioma) {
    // Guarda el idioma seleccionado
    localStorage.setItem('idiomaSeleccionado', idioma);
    
    // Traduce los elementos si existen en la página actual
    for (let id in textos[idioma]) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = textos[idioma][id];
        }
    }
}

// Lógica del Menú Desplegable (Submenú)
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btn-menu-texto");
    const submenu = document.getElementById("submenu-principal");
    const idiomaGuardado = localStorage.getItem('idiomaSeleccionado') || 'es';
    
    // Aplicar idioma guardado al cargar
    cambiarIdioma(idiomaGuardado);

    if (btnMenu && submenu) {
        btnMenu.addEventListener("click", (e) => {
            e.preventDefault();
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });

        // Cerrar menú si se hace clic afuera
        document.addEventListener("click", (e) => {
            if (!btnMenu.contains(e.target) && !submenu.contains(e.target)) {
                submenu.style.display = "none";
            }
        });
    }
});

// Lógica del Slider (Solo para el index.html)
let indexSlider = 0;
function moverSlider(direccion) {
    const slides = document.querySelector(".slides");
    const totalImagenes = document.querySelectorAll(".slide-img").length;
    
    if (slides && totalImagenes > 0) {
        indexSlider += direccion;
        if (indexSlider >= totalImagenes) indexSlider = 0;
        if (indexSlider < 0) indexSlider = totalImagenes - 1;
        
        slides.style.transform = `translateX(${-indexSlider * 100}%)`;
    }
}