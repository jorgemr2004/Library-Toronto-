document.addEventListener("DOMContentLoaded", function() {
    const categoryInputs = document.querySelectorAll(".category-options input[type='checkbox']");
    const loadMoreBtn = document.querySelector('#load-more-1');
    const initialItemsToShow = 12;
    let currentItem = initialItemsToShow; 

    // Función para mostrar libros según las categorías seleccionadas
    function showBooksByCategory() {
        const selectedCategories = getSelectedCategories();
        const allBooks = document.querySelectorAll('.box-container-1 .box-1');

        allBooks.forEach((book, index) => {
            // Mostrar solo libros que pertenecen a las categorías seleccionadas
            if (selectedCategories.length === 0 || selectedCategories.some(category => book.classList.contains(`category-${category}`))) {
                // Mostrar solo los primeros currentItem libros de la categoría seleccionada
                if (selectedCategories.length === 1) {
                    const selectedCategory = selectedCategories[0];
                    const booksInCategory = document.querySelectorAll(`.box-1.category-${selectedCategory}`);
                    if (Array.from(booksInCategory).indexOf(book) < currentItem) {
                        book.style.display = 'inline-block';
                    } else {
                        book.style.display = 'none';
                    }
                } else {
                    // Si hay más de una categoría seleccionada, mostrar según el currentItem general
                    if (index < currentItem) {
                        book.style.display = 'inline-block';
                    } else {
                        book.style.display = 'none';
                    }
                }
            } else {
                book.style.display = 'none';
            }
        });

        // Mostrar u ocultar el botón "Mostrar más" según la cantidad de libros visibles
        if (currentItem < allBooks.length) {
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Función para obtener las categorías seleccionadas
    function getSelectedCategories() {
        const selectedCategories = [];
        categoryInputs.forEach(input => {
            if (input.checked) {
                const category = input.getAttribute("data-category");
                selectedCategories.push(category);
            }
        });
        return selectedCategories;
    }

    // Mostrar los libros iniciales según las categorías seleccionadas por defecto
    showBooksByCategory();

    // Evento para el botón "Mostrar más"
    loadMoreBtn.addEventListener('click', function() {
        currentItem += 4; // Incrementar el contador para mostrar más libros
        showBooksByCategory(); // Actualizar la visualización de libros
    });

    // Evento para los checkboxes de categoría
    categoryInputs.forEach(input => {
        input.addEventListener('click', function() {
            currentItem = initialItemsToShow; // Reiniciar el contador al hacer clic en un checkbox
            showBooksByCategory(); // Actualizar la visualización de libros
        });
    });

    // EFECTO DE LA CATEGORIA CUANDO LE DOY CLICK A CATEGORIA QUE ME SALGA CON EFECTO DE BARRA
    const categoryHeaders = document.querySelectorAll(".category-header");
    categoryHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.querySelector(targetId);

            if (targetElement.classList.contains("active")) {
                const categoryItems = targetElement.querySelectorAll("p");
                categoryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove("show");
                    }, index * 100);
                });
                setTimeout(() => {
                    targetElement.classList.remove("active");
                }, categoryItems.length * 100);
            } else {
                targetElement.classList.add("active");
                const categoryItems = targetElement.querySelectorAll("p");
                categoryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 100);
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const inicioHeader = document.querySelector(".inicio");
    const inicioAudio = document.getElementById('Inicio');
    const librosHeader = document.querySelector(".libros");
    const librosAudio = document.getElementById('Libros');
    const reservarHeader = document.querySelector(".reservar");
    const reservarAudio = document.getElementById('Reservar');
    const contactanosHeader = document.querySelector(".contactanos");
    const contactanosAudio = document.getElementById('Contactanos');

    const navegacionAudio = document.getElementById('navegacion');

    

    let header = "indice";

const categoryHeader = document.querySelector(".category-header");

const engineeringHeader = document.getElementById('category-ingenieria-header');
const engineeringHeaderSalud = document.getElementById('category-salud-header');
const engineeringHeaderNegocio = document.getElementById('category-negocio-header');
const engineeringHeaderDerecho = document.getElementById('category-derecho-header');

const categoria = document.getElementById('categoria');
const DCategoria = document.getElementById('DCategoria');
const SIngenieria = document.getElementById('SIngenieria');
const DIngenieria = document.getElementById('DIngenieria');
const SSalud = document.getElementById('SSalud');
const DSalud = document.getElementById('DSalud');
const SNegocio = document.getElementById('SNegocio');
const DNegocio = document.getElementById('DNegocio');
const SDerecho = document.getElementById('SDerecho');
const DDerecho = document.getElementById('DDerecho');


const libroIngenieria1 = document.querySelector('#libro_1');
const Libro1Audio = document.getElementById('Libro1');
const libroIngenieria2 = document.querySelector('#libro_2');
const Libro2Audio = document.getElementById('Libro2');
const libroIngenieria3 = document.querySelector('#libro_3');
const Libro3Audio = document.getElementById('Libro3');
const libroIngenieria4 = document.querySelector('#libro_4');
const Libro4Audio = document.getElementById('Libro4');
const libroIngenieria5 = document.querySelector('#libro_5');
const Libro5Audio = document.getElementById('Libro5');
const libroIngenieria6 = document.querySelector('#libro_6');
const Libro6Audio = document.getElementById('Libro6');
const libroIngenieria7 = document.querySelector('#libro_7');
const Libro7Audio = document.getElementById('Libro7');
const libroIngenieria8 = document.querySelector('#libro_8');
const Libro8Audio = document.getElementById('Libro8');
const libroIngenieria9 = document.querySelector('#libro_9');
const Libro9Audio = document.getElementById('Libro9');
const libroIngenieria10 = document.querySelector('#libro_10');
const Libro10Audio = document.getElementById('Libro10');
const libroIngenieria11 = document.querySelector('#libro_11');
const Libro11Audio = document.getElementById('Libro11');
const libroIngenieria12 = document.querySelector('#libro_12');
const Libro12Audio = document.getElementById('Libro12');

const libroSalud = document.querySelector('#salud_1');
const Libro1AudioSalud = document.getElementById('LibroSalud1');
const libroSalud2 = document.querySelector('#salud_2');
const Libro2AudioSalud = document.getElementById('LibroSalud2');
const libroSalud3 = document.querySelector('#salud_3');
const Libro3AudioSalud = document.getElementById('LibroSalud3');
const libroSalud4 = document.querySelector('#salud_4');
const Libro4AudioSalud = document.getElementById('LibroSalud4');
const libroSalud5 = document.querySelector('#salud_5');
const Libro5AudioSalud = document.getElementById('LibroSalud5');
const libroSalud6 = document.querySelector('#salud_6');
const Libro6AudioSalud = document.getElementById('LibroSalud6');
const libroSalud7 = document.querySelector('#salud_7');
const Libro7AudioSalud = document.getElementById('LibroSalud7');
const libroSalud8 = document.querySelector('#salud_8');
const Libro8AudioSalud = document.getElementById('LibroSalud8');
const libroSalud9 = document.querySelector('#salud_9');
const Libro9AudioSalud = document.getElementById('LibroSalud9');
const libroSalud10 = document.querySelector('#salud_10');
const Libro10AudioSalud = document.getElementById('LibroSalud10');
const libroSalud11 = document.querySelector('#salud_11');
const Libro11AudioSalud = document.getElementById('LibroSalud11');
const libroSalud12 = document.querySelector('#salud_12');
const Libro12AudioSalud = document.getElementById('LibroSalud12');

const libroNegocio = document.querySelector('#negocio_1');
const Libro1AudioNegocio = document.getElementById('LibroNegocio1');
const libroNegocio2 = document.querySelector('#negocio_2');
const Libro2AudioNegocio = document.getElementById('LibroNegocio2');
const libroNegocio3 = document.querySelector('#negocio_3');
const Libro3AudioNegocio = document.getElementById('LibroNegocio3');
const libroNegocio4 = document.querySelector('#negocio_4');
const Libro4AudioNegocio = document.getElementById('LibroNegocio4');
const libroNegocio5 = document.querySelector('#negocio_5');
const Libro5AudioNegocio = document.getElementById('LibroNegocio5');
const libroNegocio6 = document.querySelector('#negocio_6');
const Libro6AudioNegocio = document.getElementById('LibroNegocio6');
const libroNegocio7 = document.querySelector('#negocio_7');
const Libro7AudioNegocio = document.getElementById('LibroNegocio7');
const libroNegocio8 = document.querySelector('#negocio_8');
const Libro8AudioNegocio = document.getElementById('LibroNegocio8');
const libroNegocio9 = document.querySelector('#negocio_9');
const Libro9AudioNegocio = document.getElementById('LibroNegocio9');
const libroNegocio10 = document.querySelector('#negocio_10');
const Libro10AudioNegocio = document.getElementById('LibroNegocio10');
const libroNegocio11 = document.querySelector('#negocio_11');
const Libro11AudioNegocio = document.getElementById('LibroNegocio11');
const libroNegocio12 = document.querySelector('#negocio_12');
const Libro12AudioNegocio = document.getElementById('LibroNegocio12');

const libroDerecho = document.querySelector('#derecho_1');
const Libro1AudioDerecho = document.getElementById('LibroDerecho1');
const libroDerecho2 = document.querySelector('#derecho_2');
const Libro2AudioDerecho = document.getElementById('LibroDerecho2');
const libroDerecho3 = document.querySelector('#derecho_3');
const Libro3AudioDerecho = document.getElementById('LibroDerecho3');
const libroDerecho4 = document.querySelector('#derecho_4');
const Libro4AudioDerecho = document.getElementById('LibroDerecho4');
const libroDerecho5 = document.querySelector('#derecho_5');
const Libro5AudioDerecho = document.getElementById('LibroDerecho5');
const libroDerecho6 = document.querySelector('#derecho_6');
const Libro6AudioDerecho = document.getElementById('LibroDerecho6');
const libroDerecho7 = document.querySelector('#derecho_7');
const Libro7AudioDerecho = document.getElementById('LibroDerecho7');
const libroDerecho8 = document.querySelector('#derecho_8');
const Libro8AudioDerecho = document.getElementById('LibroDerecho8');

let currentBook = 'ingenieria'; // Variable para mantener el seguimiento del libro actual
let currentBookSalud = 'salud';
let currentBookNegocio = 'negocio';
let currentBookDerecho = 'derecho';


function clearActive() {
    inicioHeader.classList.remove('active');
    librosHeader.classList.remove('active');
    reservarHeader.classList.remove('active');
    contactanosHeader.classList.remove('active');

    libroIngenieria1.classList.remove('active');
    libroIngenieria2.classList.remove('active');
    libroIngenieria3.classList.remove('active');
    libroIngenieria4.classList.remove('active');
    libroIngenieria5.classList.remove('active');
    libroIngenieria6.classList.remove('active');
    libroIngenieria7.classList.remove('active');
    libroIngenieria8.classList.remove('active');
    libroIngenieria9.classList.remove('active');
    libroIngenieria10.classList.remove('active');
    libroIngenieria11.classList.remove('active');
    libroIngenieria12.classList.remove('active');

    libroSalud.classList.remove('active');
    libroSalud2.classList.remove('active');
    libroSalud3.classList.remove('active');
    libroSalud4.classList.remove('active');
    libroSalud5.classList.remove('active');
    libroSalud6.classList.remove('active');
    libroSalud7.classList.remove('active');
    libroSalud8.classList.remove('active');
    libroSalud9.classList.remove('active');
    libroSalud10.classList.remove('active');
    libroSalud11.classList.remove('active');
    libroSalud12.classList.remove('active');
    
    libroNegocio.classList.remove('active');
    libroNegocio2.classList.remove('active');
    libroNegocio3.classList.remove('active');
    libroNegocio4.classList.remove('active');
    libroNegocio5.classList.remove('active');
    libroNegocio6.classList.remove('active');
    libroNegocio7.classList.remove('active');
    libroNegocio8.classList.remove('active');
    libroNegocio9.classList.remove('active');
    libroNegocio10.classList.remove('active');
    libroNegocio11.classList.remove('active');
    libroNegocio12.classList.remove('active');

    libroDerecho.classList.remove('active');
    libroDerecho2.classList.remove('active');
}

function stopAllAudio() {
    inicioAudio.pause();
    inicioAudio.currentTime = 0;
    librosAudio.pause();
    librosAudio.currentTime = 0;
    reservarAudio.pause();
    reservarAudio.currentTime = 0;
    contactanosAudio.pause();
    contactanosAudio.currentTime = 0;
    navegacionAudio.pause();
    navegacionAudio.currentTime = 0;
}

let playCategoria = true;
let playSIngenieria = true; 
let playSSalud = true;
let playSNegocio = true;
let playSDerecho = true;

let categoriaIsPlaying = false;  // Variable para controlar si categoria está reproduciéndose
let ingenieriaIsPlaying = false; //VARIABLE PARA CONTROLAR MI audio para los libros de ingieria si es falso no me deja play audio
let saludIsPlaying = false;
let negocioIsPlaying = false;
let derechoIsPlaying = false;
let enableNavigation = false; // Variable para controlar la activación de la navegación
let teclaDosPresionada = false; // Variable para controlar si se ha presionado la tecla '2'

function clearActive() {
    document.querySelectorAll('.box-1').forEach(book => book.classList.remove('active'));
}


document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === '4'){
        navegacionAudio.play();
        enableNavigation = true;
    }
    if (key === '2' && enableNavigation) {
        teclaDosPresionada = true;
        switch (header) {
            case 'indice':
                clearActive();
                stopAllAudio();
                inicioHeader.classList.add('active');
                inicioAudio.currentTime = 0;
                inicioAudio.play();
                header = 'indice1';
                break;
            case 'indice1':
                clearActive();
                stopAllAudio();
                librosHeader.classList.add('active');
                librosAudio.currentTime = 0;
                librosAudio.play();
                header = 'indice2';
                break;
            case 'indice2':
                clearActive();
                stopAllAudio();
                reservarHeader.classList.add('active');
                reservarAudio.currentTime = 0;
                reservarAudio.play();
                header = 'indice3';
                break;
            case 'indice3':
                clearActive();
                stopAllAudio();
                contactanosHeader.classList.add('active');
                contactanosAudio.currentTime = 0;
                contactanosAudio.play();
                header = 'indice';
                break;
        }
    } else if (key === '3' && teclaDosPresionada) {
        switch (header) {
            case 'indice1':
                redirectToInicio();
                break;
            case 'indice2':
                redirectToLibros();
                break;
            case 'indice3':
                redirectToReservar();
                break;
            case 'indice':
                redirectToContactanos();
                break;
        }
    }

    if (key === '1') {
                if (playCategoria) {
                    DCategoria.pause();
                    DCategoria.currentTime = 0;
                    DSalud.pause();
                    DSalud.currentTime = 0;
                    SSalud.pause();
                    SSalud.currentTime = 0;
                    DNegocio.pause();
                    DNegocio.currentTime = 0;
                    SNegocio.pause();
                    SNegocio.currentTime = 0;
                    DDerecho.pause();
                    DDerecho.currentTime = 0;
                    SDerecho.pause();
                    SDerecho.currentTime = 0;
                    DIngenieria.pause();
                    DIngenieria.currentTime = 0;
                    SIngenieria.pause();
                    SIngenieria.currentTime = 0;

                    categoryHeader.click();
                    categoria.currentTime = 0; 
                    categoria.play();
                    categoriaIsPlaying = true; // Marca que categoria está reproduciéndose
                } else {
                    categoria.pause();
                    categoria.currentTime = 0;
                    DSalud.pause();
                    DSalud.currentTime = 0;
                    SSalud.pause();
                    SSalud.currentTime = 0;
                    DNegocio.pause();
                    DNegocio.currentTime = 0;
                    SNegocio.pause();
                    SNegocio.currentTime = 0;
                    DDerecho.pause();
                    DDerecho.currentTime = 0;
                    SDerecho.pause();
                    SDerecho.currentTime = 0;
                    DIngenieria.pause();
                    DIngenieria.currentTime = 0;
                    SIngenieria.pause();
                    SIngenieria.currentTime = 0;

                    categoryHeader.click();
                    DCategoria.currentTime = 0; 
                    DCategoria.play();
                    categoriaIsPlaying = false; // Marca que categoria no está reproduciéndose
                }
                playCategoria = !playCategoria; // Alternar el estado para el próximo clic en '1'
            }
        
            if (categoriaIsPlaying) {
                if (key === 'q') {
                    if (playSIngenieria) {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;

                        // Reproducir SIngenieria
                        engineeringHeader.click();
                        SIngenieria.currentTime = 0; 
                        SIngenieria.play();
                        ingenieriaIsPlaying = true;
                    } else {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;

                        // Reproducir DIngenieria
                        engineeringHeader.click();
                        DIngenieria.currentTime = 0; 
                        DIngenieria.play();
                        ingenieriaIsPlaying = false;
                    }
                    playSIngenieria = !playSIngenieria;
                } else if (key === 'w') {
                    if (playSSalud) {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;


                        engineeringHeaderSalud.click();
                        SSalud.currentTime = 0; 
                        SSalud.play();
                        saludIsPlaying = true;
                    } else {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;

                        engineeringHeaderSalud.click();
                        DSalud.currentTime = 0; 
                        DSalud.play();
                        saludIsPlaying = false;
                    }
                    playSSalud = !playSSalud;
                } else if (key === 'e') {
                    if (playSNegocio) {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;

                        engineeringHeaderNegocio.click();
                        SNegocio.currentTime = 0; 
                        SNegocio.play();
                        negocioIsPlaying = true;
                    } else {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;

                        engineeringHeaderNegocio.click();
                        DNegocio.currentTime = 0; 
                        DNegocio.play();
                        negocioIsPlaying = false;
                    }
                    playSNegocio = !playSNegocio;
                } else if (key === 'r') {
                    if (playSDerecho) {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        DDerecho.pause();
                        DDerecho.currentTime = 0;

                        engineeringHeaderDerecho.click();
                        SDerecho.currentTime = 0; 
                        SDerecho.play();
                        derechoIsPlaying = true;
                    } else {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        categoria.pause();
                        categoria.currentTime = 0;
                        DSalud.pause();
                        DSalud.currentTime = 0;
                        SSalud.pause();
                        SSalud.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;
                        SDerecho.pause();
                        SDerecho.currentTime = 0;

                        engineeringHeaderDerecho.click();
                        DDerecho.currentTime = 0; 
                        DDerecho.play();
                        derechoIsPlaying = false;
                    }
                    playSDerecho = !playSDerecho;
                }
            }
            
            if (ingenieriaIsPlaying && saludIsPlaying==false && negocioIsPlaying==false && derechoIsPlaying==false) {

                if (key === 's') {
                    if (currentBook === 'ingenieria1' && !Libro1Audio.paused) {
                        redirectToLibro1();   
                    } else if (currentBook === 'ingenieria2' && !Libro2Audio.paused) {
                        redirectToLibro2();
                    } else if (currentBook === 'ingenieria3' && !Libro3Audio.paused) {
                        redirectToLibro3();
                    } else if (currentBook === 'ingenieria4' && !Libro4Audio.paused) {
                        redirectToLibro4();
                    } else if (currentBook === 'ingenieria5' && !Libro5Audio.paused) {
                        redirectToLibro5();
                    } else if (currentBook === 'ingenieria6' && !Libro6Audio.paused) {
                        redirectToLibro6();
                    } else if (currentBook === 'ingenieria7' && !Libro7Audio.paused) {
                        redirectToLibro7();
                    } else if (currentBook === 'ingenieria8' && !Libro8Audio.paused) {
                        redirectToLibro8();
                    } else if (currentBook === 'ingenieria9' && !Libro9Audio.paused) {
                        redirectToLibro9();
                    } else if (currentBook === 'ingenieria10' && !Libro10Audio.paused) {
                        redirectToLibro10();
                    } else if (currentBook === 'ingenieria11' && !Libro11Audio.paused) {
                        redirectToLibro11();
                    } else if (currentBook === 'ingenieria12' && !Libro12Audio.paused) {
                        redirectToLibro12();
                    }
                }
                if (key === 'd') {
                    if(currentBook === 'ingenieria') {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        DIngenieria.pause();
                        DIngenieria.currentTime = 0;
                        SIngenieria.pause();
                        SIngenieria.currentTime = 0;

                        Libro12Audio.pause();
                        Libro12Audio.currentTime = 0;
                        currentBook = 'ingenieria1';
                        clearActive();
                        libroIngenieria1.classList.add('active');
                        Libro1Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1Audio.play();
                    } else if (currentBook === 'ingenieria1') {
                        Libro1Audio.pause();
                        Libro1Audio.currentTime = 0;
                        currentBook = 'ingenieria2';
                        clearActive();
                        libroIngenieria2.classList.add('active');
                        Libro2Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro2Audio.play();
                    } else if (currentBook === 'ingenieria2') {
                        Libro2Audio.pause();
                        Libro2Audio.currentTime = 0;
                        currentBook = 'ingenieria3';
                        clearActive();
                        libroIngenieria3.classList.add('active');
                        Libro3Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro3Audio.play();      
                    } else if (currentBook === 'ingenieria3') {
                        Libro3Audio.pause();
                        Libro3Audio.currentTime = 0;       
                        currentBook = 'ingenieria4';
                        clearActive();
                        libroIngenieria4.classList.add('active');
                        Libro4Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro4Audio.play();      
                    } else if (currentBook === 'ingenieria4') {
                        Libro4Audio.pause();
                        Libro4Audio.currentTime = 0;            
                        currentBook = 'ingenieria5';
                        clearActive();
                        libroIngenieria5.classList.add('active');
                        Libro5Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro5Audio.play();      
                    } else if (currentBook === 'ingenieria5') {
                        Libro5Audio.pause();
                        Libro5Audio.currentTime = 0;
                        currentBook = 'ingenieria6';
                        clearActive();
                        libroIngenieria6.classList.add('active');
                        Libro6Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro6Audio.play();      
                    } else if (currentBook === 'ingenieria6') {
                        Libro6Audio.pause();
                        Libro6Audio.currentTime = 0;          
                        currentBook = 'ingenieria7';
                        clearActive();
                        libroIngenieria7.classList.add('active');
                        Libro7Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro7Audio.play();      
                    } else if (currentBook === 'ingenieria7') {
                        Libro7Audio.pause();
                        Libro7Audio.currentTime = 0;
                        currentBook = 'ingenieria8';
                        clearActive();
                        libroIngenieria8.classList.add('active');
                        Libro8Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro8Audio.play();      
                    } else if (currentBook === 'ingenieria8') {
                        Libro8Audio.pause();
                        Libro8Audio.currentTime = 0;
                        currentBook = 'ingenieria9';
                        clearActive();
                        libroIngenieria9.classList.add('active');
                        Libro9Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro9Audio.play();      
                    } else if (currentBook === 'ingenieria9') {
                        Libro9Audio.pause();
                        Libro9Audio.currentTime = 0;
                        currentBook = 'ingenieria10';
                        clearActive();
                        libroIngenieria10.classList.add('active');
                        Libro10Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro10Audio.play();      
                    } else if (currentBook === 'ingenieria10') {
                        Libro10Audio.pause();
                        Libro10Audio.currentTime = 0;
                        currentBook = 'ingenieria11';
                        clearActive();
                        libroIngenieria11.classList.add('active');
                        Libro11Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro11Audio.play();      
                    } else if (currentBook === 'ingenieria11') {
                        Libro11Audio.pause();
                        Libro11Audio.currentTime = 0;
                        currentBook = 'ingenieria12';
                        clearActive();
                        libroIngenieria12.classList.add('active');
                        Libro12Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro12Audio.play();      
                    } else if (currentBook === 'ingenieria12') {
                        Libro12Audio.pause();
                        Libro12Audio.currentTime = 0;
                        currentBook = 'ingenieria1';
                        clearActive();
                        libroIngenieria1.classList.add('active');
                        Libro1Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1Audio.play();      
                    }               
                }else if (key === 'a') {
                    // Retroceder al libro anterior
                    if (currentBook === 'ingenieria1') {
                        Libro1Audio.pause();
                        Libro1Audio.currentTime = 0;
                        currentBook = 'ingenieria12';
                        clearActive();
                        libroIngenieria12.classList.add('active');
                        Libro12Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro12Audio.play();
                    } else if (currentBook === 'ingenieria12') {
                        Libro12Audio.pause();
                        Libro12Audio.currentTime = 0;
                        currentBook = 'ingenieria11';
                        clearActive();
                        libroIngenieria11.classList.add('active');
                        Libro11Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro11Audio.play();
                    } else if (currentBook === 'ingenieria11') {
                        Libro11Audio.pause();
                        Libro11Audio.currentTime = 0;
                        currentBook = 'ingenieria10';
                        clearActive();
                        libroIngenieria10.classList.add('active');
                        Libro10Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro10Audio.play();
                    } else if (currentBook === 'ingenieria10') {
                        Libro10Audio.pause();
                        Libro10Audio.currentTime = 0;
                        currentBook = 'ingenieria9';
                        clearActive();
                        libroIngenieria9.classList.add('active');
                        Libro9Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro9Audio.play();
                    } else if (currentBook === 'ingenieria9') {
                        Libro9Audio.pause();
                        Libro9Audio.currentTime = 0;
                        currentBook = 'ingenieria8';
                        clearActive();
                        libroIngenieria8.classList.add('active');
                        Libro8Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro8Audio.play();
                    } else if (currentBook === 'ingenieria8') {
                        Libro8Audio.pause();
                        Libro8Audio.currentTime = 0;
                        currentBook = 'ingenieria7';
                        clearActive();
                        libroIngenieria7.classList.add('active');
                        Libro7Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro7Audio.play();
                    } else if (currentBook === 'ingenieria7') {
                        Libro7Audio.pause();
                        Libro7Audio.currentTime = 0;
                        currentBook = 'ingenieria6';
                        clearActive();
                        libroIngenieria6.classList.add('active');
                        Libro6Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro6Audio.play();
                    } else if (currentBook === 'ingenieria6') {
                        Libro6Audio.pause();
                        Libro6Audio.currentTime = 0;
                        currentBook = 'ingenieria5';
                        clearActive();
                        libroIngenieria5.classList.add('active');
                        Libro5Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro5Audio.play();
                    } else if (currentBook === 'ingenieria5') {
                        Libro5Audio.pause();
                        Libro5Audio.currentTime = 0;
                        currentBook = 'ingenieria4';
                        clearActive();
                        libroIngenieria4.classList.add('active');
                        Libro4Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro4Audio.play();
                    } else if (currentBook === 'ingenieria4') {
                        Libro4Audio.pause();
                        Libro4Audio.currentTime = 0;
                        currentBook = 'ingenieria3';
                        clearActive();
                        libroIngenieria3.classList.add('active');
                        Libro3Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro3Audio.play();
                    } else if (currentBook === 'ingenieria3') {
                        Libro3Audio.pause();
                        Libro3Audio.currentTime = 0;
                        currentBook = 'ingenieria2';
                        clearActive();
                        libroIngenieria2.classList.add('active');
                        Libro2Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro2Audio.play();
                    } else if (currentBook === 'ingenieria2') {
                        Libro2Audio.pause();
                        Libro2Audio.currentTime = 0;
                        currentBook = 'ingenieria1';
                        clearActive();
                        libroIngenieria1.classList.add('active');
                        Libro1Audio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1Audio.play();
                    }
                }
            }   

            if (negocioIsPlaying && saludIsPlaying==false && ingenieriaIsPlaying==false && derechoIsPlaying==false) {
                if (key === 's') {
                    if (currentBookNegocio === 'negocio1' && !Libro1AudioNegocio.paused) {
                        redirectToLibroNegocio1();
                    } else if (currentBookNegocio === 'negocio2' && !Libro2AudioNegocio.paused) {
                        redirectToLibroNegocio2();
                    } else if (currentBookNegocio === 'negocio3' && !Libro3AudioNegocio.paused) {
                        redirectToLibroNegocio3();
                    } else if (currentBookNegocio === 'negocio4' && !Libro4AudioNegocio.paused) {
                        redirectToLibroNegocio4();
                    } else if (currentBookNegocio === 'negocio5' && !Libro5AudioNegocio.paused) {
                        redirectToLibroNegocio5();
                    } else if (currentBookNegocio === 'negocio6' && !Libro6AudioNegocio.paused) {
                        redirectToLibroNegocio6();
                    } else if (currentBookNegocio === 'negocio7' && !Libro7AudioNegocio.paused) {
                        redirectToLibroNegocio7();
                    } else if (currentBookNegocio === 'negocio8' && !Libro8AudioNegocio.paused) {
                        redirectToLibroNegocio8();
                    } else if (currentBookNegocio === 'negocio9' && !Libro9AudioNegocio.paused) {
                        redirectToLibroNegocio9();
                    } else if (currentBookNegocio === 'negocio10' && !Libro10AudioNegocio.paused) {
                        redirectToLibroNegocio10();
                    } else if (currentBookNegocio === 'negocio11' && !Libro11AudioNegocio.paused) {
                        redirectToLibroNegocio11();
                    } else if (currentBookNegocio === 'negocio12' && !Libro12AudioNegocio.paused) {
                        redirectToLibroNegocio12();
                    }
                }
                if (key === 'd') {
                    // Avanzar al siguiente libro
                    if(currentBookNegocio === 'negocio') {
                        DCategoria.pause();
                        DCategoria.currentTime = 0;
                        DNegocio.pause();
                        DNegocio.currentTime = 0;
                        SNegocio.pause();
                        SNegocio.currentTime = 0;

                        Libro12AudioNegocio.pause();
                        Libro12AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio1';
                        clearActive();
                        libroNegocio.classList.add('active');
                        Libro1AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio1') {
                        Libro1AudioNegocio.pause();
                        Libro1AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio2';
                        clearActive();
                        libroNegocio2.classList.add('active');
                        Libro2AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro2AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio2') {
                        Libro2AudioNegocio.pause();
                        Libro2AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio3';
                        clearActive();
                        libroNegocio3.classList.add('active');
                        Libro3AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro3AudioNegocio.play();      
                    } else if (currentBookNegocio === 'negocio3') {
                        Libro3AudioNegocio.pause();
                        Libro3AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio4';
                        clearActive();
                        libroNegocio4.classList.add('active');
                        Libro4AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro4AudioNegocio.play();      
                    } else if (currentBookNegocio === 'negocio4') {
                        Libro4AudioNegocio.pause();
                        Libro4AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio5';
                        clearActive();
                        libroNegocio5.classList.add('active');
                        Libro5AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro5AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio5') {
                        Libro5AudioNegocio.pause();
                        Libro5AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio6';
                        clearActive();
                        libroNegocio6.classList.add('active');
                        Libro6AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro6AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio6') {
                        Libro6AudioNegocio.pause();
                        Libro6AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio7';
                        clearActive();
                        libroNegocio7.classList.add('active');
                        Libro7AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro7AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio7') {
                        Libro7AudioNegocio.pause();
                        Libro7AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio8';
                        clearActive();
                        libroNegocio8.classList.add('active');
                        Libro8AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro8AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio8') {
                        Libro8AudioNegocio.pause();
                        Libro8AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio9';
                        clearActive();
                        libroNegocio9.classList.add('active');
                        Libro9AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro9AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio9') {
                        Libro9AudioNegocio.pause();
                        Libro9AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio10';
                        clearActive();
                        libroNegocio10.classList.add('active');
                        Libro10AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro10AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio10') {
                        Libro10AudioNegocio.pause();
                        Libro10AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio11';
                        clearActive();
                        libroNegocio11.classList.add('active');
                        Libro11AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro11AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio11') {
                        Libro11AudioNegocio.pause();
                        Libro11AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio12';
                        clearActive();
                        libroNegocio12.classList.add('active');
                        Libro12AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro12AudioNegocio.play(); 
                    } else if (currentBookNegocio === 'negocio12') {
                        Libro12AudioNegocio.pause();
                        Libro12AudioNegocio.currentTime = 0;       
                        currentBookNegocio = 'negocio1';
                        clearActive();
                        libroNegocio.classList.add('active');
                        Libro1AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1AudioNegocio.play(); 
                    }
                } else if (key === 'a') {
                    // Retroceder al libro anterior
                    if (currentBookNegocio === 'negocio1') {
                        Libro1AudioNegocio.pause();
                        Libro1AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio12';
                        clearActive();
                        libroNegocio12.classList.add('active');
                        Libro12AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro12AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio2') {
                        Libro2AudioNegocio.pause();
                        Libro2AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio1';
                        clearActive();
                        libroNegocio.classList.add('active');
                        Libro1AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro1AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio3') {
                        Libro3AudioNegocio.pause();
                        Libro3AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio2';
                        clearActive();
                        libroNegocio2.classList.add('active');
                        Libro2AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro2AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio4') {
                        Libro4AudioNegocio.pause();
                        Libro4AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio3';
                        clearActive();
                        libroNegocio3.classList.add('active');
                        Libro3AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro3AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio5') {
                        Libro5AudioNegocio.pause();
                        Libro5AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio4';
                        clearActive();
                        libroNegocio4.classList.add('active');
                        Libro4AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro4AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio6') {
                        Libro6AudioNegocio.pause();
                        Libro6AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio5';
                        clearActive();
                        libroNegocio5.classList.add('active');
                        Libro5AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro5AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio7') {
                        Libro7AudioNegocio.pause();
                        Libro7AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio6';
                        clearActive();
                        libroNegocio6.classList.add('active');
                        Libro6AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro6AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio8') {
                        Libro8AudioNegocio.pause();
                        Libro8AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio7';
                        clearActive();
                        libroNegocio7.classList.add('active');
                        Libro7AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro7AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio9') {
                        Libro9AudioNegocio.pause();
                        Libro9AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio8';
                        clearActive();
                        libroNegocio8.classList.add('active');
                        Libro8AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro8AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio10') {
                        Libro10AudioNegocio.pause();
                        Libro10AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio9';
                        clearActive();
                        libroNegocio9.classList.add('active');
                        Libro9AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro9AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio11') {
                        Libro11AudioNegocio.pause();
                        Libro11AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio10';
                        clearActive();
                        libroNegocio10.classList.add('active');
                        Libro10AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro10AudioNegocio.play();
                    } else if (currentBookNegocio === 'negocio12') {
                        Libro12AudioNegocio.pause();
                        Libro12AudioNegocio.currentTime = 0;
                        currentBookNegocio = 'negocio11';
                        clearActive();
                        libroNegocio11.classList.add('active');
                        Libro11AudioNegocio.currentTime = 0; // Reinicia el audio al inicio
                        Libro11AudioNegocio.play();
                    }
                }    
            }
            if (saludIsPlaying && negocioIsPlaying==false && ingenieriaIsPlaying==false && derechoIsPlaying==false) {
                if (key === 's') {
                    if (currentBookSalud === 'salud1' && !Libro1AudioSalud.paused) {
                        redirectToLibroSalud1();   
                    } else if (currentBookSalud === 'salud2' && !Libro2AudioSalud.paused) {
                        redirectToLibroSalud2();
                    } else if (currentBookSalud === 'salud3' && !Libro3AudioSalud.paused) {
                        redirectToLibroSalud3();
                    } else if (currentBookSalud === 'salud4' && !Libro4AudioSalud.paused) {
                        redirectToLibroSalud4();
                    } else if (currentBookSalud === 'salud5' && !Libro5AudioSalud.paused) {
                        redirectToLibroSalud5();
                    } else if (currentBookSalud === 'salud6' && !Libro6AudioSalud.paused) {
                        redirectToLibroSalud6();
                    } else if (currentBookSalud === 'salud7' && !Libro7AudioSalud.paused) {
                        redirectToLibroSalud7();
                    } else if (currentBookSalud === 'salud8' && !Libro8AudioSalud.paused) {
                        redirectToLibroSalud8();
                    } else if (currentBookSalud === 'salud9' && !Libro9AudioSalud.paused) {
                        redirectToLibroSalud9();
                    } else if (currentBookSalud === 'salud10' && !Libro10AudioSalud.paused) {
                        redirectToLibroSalud10();
                    } else if (currentBookSalud === 'salud11' && !Libro11AudioSalud.paused) {
                        redirectToLibroSalud11();
                    } else if (currentBookSalud === 'salud12' && !Libro12AudioSalud.paused) {
                        redirectToLibroSalud12();
                    }
                }
                if (key === 'd') {
                // Avanzar al siguiente libro
                if(currentBookSalud === 'salud') {
                    DCategoria.pause();
                    DCategoria.currentTime = 0;
                    DSalud.pause();
                    DSalud.currentTime = 0;
                    SSalud.pause();
                    SSalud.currentTime = 0;

                    Libro12AudioSalud.pause();
                    Libro12AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud1';
                    clearActive();
                    libroSalud.classList.add('active');
                    Libro1AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro1AudioSalud.play();
                } else if (currentBookSalud === 'salud1') {
                    Libro1AudioSalud.pause();
                    Libro1AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud2';
                    clearActive();
                    libroSalud2.classList.add('active');
                    Libro2AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro2AudioSalud.play();
                } else if (currentBookSalud === 'salud2') {
                    Libro2AudioSalud.pause();
                    Libro2AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud3';
                    clearActive();
                    libroSalud3.classList.add('active');
                    Libro3AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro3AudioSalud.play();      
                } else if (currentBookSalud === 'salud3') {
                    Libro3AudioSalud.pause();
                    Libro3AudioSalud.currentTime = 0;       
                    currentBookSalud = 'salud4';
                    clearActive();
                    libroSalud4.classList.add('active');
                    Libro4AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro4AudioSalud.play();      
                } else if (currentBookSalud === 'salud4') {
                    Libro4AudioSalud.pause();
                    Libro4AudioSalud.currentTime = 0;            
                    currentBookSalud = 'salud5';
                    clearActive();
                    libroSalud5.classList.add('active');
                    Libro5AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro5AudioSalud.play();      
                } else if (currentBookSalud === 'salud5') {
                    Libro5AudioSalud.pause();
                    Libro5AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud6';
                    clearActive();
                    libroSalud6.classList.add('active');
                    Libro6AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro6AudioSalud.play();      
                } else if (currentBookSalud === 'salud6') {
                    Libro6AudioSalud.pause();
                    Libro6AudioSalud.currentTime = 0;          
                    currentBookSalud = 'salud7';
                    clearActive();
                    libroSalud7.classList.add('active');
                    Libro7AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro7AudioSalud.play();      
                } else if (currentBookSalud === 'salud7') {
                    Libro7AudioSalud.pause();
                    Libro7AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud8';
                    clearActive();
                    libroSalud8.classList.add('active');
                    Libro8AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro8AudioSalud.play();      
                } else if (currentBookSalud === 'salud8') {
                    Libro8AudioSalud.pause();
                    Libro8AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud9';
                    clearActive();
                    libroSalud9.classList.add('active');
                    Libro9AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro9AudioSalud.play();      
                } else if (currentBookSalud === 'salud9') {
                    Libro9AudioSalud.pause();
                    Libro9AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud10';
                    clearActive();
                    libroSalud10.classList.add('active');
                    Libro10AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro10AudioSalud.play();      
                } else if (currentBookSalud === 'salud10') {
                    Libro10AudioSalud.pause();
                    Libro10AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud11';
                    clearActive();
                    libroSalud11.classList.add('active');
                    Libro11AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro11AudioSalud.play();      
                } else if (currentBookSalud === 'salud11') {
                    Libro11AudioSalud.pause();
                    Libro11AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud12';
                    clearActive();
                    libroSalud12.classList.add('active');
                    Libro12AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro12AudioSalud.play();      
                } else if (currentBookSalud === 'salud12') {
                    Libro12AudioSalud.pause();
                    Libro12AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud1';
                    clearActive();
                    libroSalud.classList.add('active');
                    Libro1AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro1AudioSalud.play();
                }               
            }else if (key === 'a') {
                // Retroceder al libro anterior
                if (currentBookSalud === 'salud1') {
                    Libro1AudioSalud.pause();
                    Libro1AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud12';
                    clearActive();
                    libroSalud12.classList.add('active');
                    Libro12AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro12AudioSalud.play();
                } else if (currentBookSalud === 'salud2') {
                    Libro2AudioSalud.pause();
                    Libro2AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud1';
                    clearActive();
                    libroSalud.classList.add('active');
                    Libro1AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro1AudioSalud.play();
                } else if (currentBookSalud === 'salud3') {
                    Libro3AudioSalud.pause();
                    Libro3AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud2';
                    clearActive();
                    libroSalud2.classList.add('active');
                    Libro2AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro2AudioSalud.play();
                } else if (currentBookSalud === 'salud4') {
                    Libro4AudioSalud.pause();
                    Libro4AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud3';
                    clearActive();
                    libroSalud3.classList.add('active');
                    Libro3AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro3AudioSalud.play();
                } else if (currentBookSalud === 'salud5') {
                    Libro5AudioSalud.pause();
                    Libro5AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud4';
                    clearActive();
                    libroSalud4.classList.add('active');
                    Libro4AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro4AudioSalud.play();
                } else if (currentBookSalud === 'salud6') {
                    Libro6AudioSalud.pause();
                    Libro6AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud5';
                    clearActive();
                    libroSalud5.classList.add('active');
                    Libro5AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro5AudioSalud.play();
                } else if (currentBookSalud === 'salud7') {
                    Libro7AudioSalud.pause();
                    Libro7AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud6';
                    clearActive();
                    libroSalud6.classList.add('active');
                    Libro6AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro6AudioSalud.play();
                } else if (currentBookSalud === 'salud8') {
                    Libro8AudioSalud.pause();
                    Libro8AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud7';
                    clearActive();
                    libroSalud7.classList.add('active');
                    Libro7AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro7AudioSalud.play();
                } else if (currentBookSalud === 'salud9') {
                    Libro9AudioSalud.pause();
                    Libro9AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud8';
                    clearActive();
                    libroSalud8.classList.add('active');
                    Libro8AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro8AudioSalud.play();
                } else if (currentBookSalud === 'salud10') {
                    Libro10AudioSalud.pause();
                    Libro10AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud9';
                    clearActive();
                    libroSalud9.classList.add('active');
                    Libro9AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro9AudioSalud.play();
                } else if (currentBookSalud === 'salud11') {
                    Libro11AudioSalud.pause();
                    Libro11AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud10';
                    clearActive();
                    libroSalud10.classList.add('active');
                    Libro10AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro10AudioSalud.play();
                } else if (currentBookSalud === 'salud12') {
                    Libro12AudioSalud.pause();
                    Libro12AudioSalud.currentTime = 0;
                    currentBookSalud = 'salud11';
                    clearActive();
                    libroSalud11.classList.add('active');
                    Libro11AudioSalud.currentTime = 0; // Reinicia el audio al inicio
                    Libro11AudioSalud.play();
                }
            }     
        }
        if (derechoIsPlaying && saludIsPlaying==false && ingenieriaIsPlaying==false && negocioIsPlaying==false) {
            if (key === 's') {
                if (currentBookDerecho === 'derecho1' && !Libro1AudioDerecho.paused) {
                    redirectToLibroDerecho1();   
                } else if (currentBookDerecho === 'derecho2' && !Libro2AudioDerecho.paused) {
                    redirectToLibroDerecho2();
                } else if (currentBookDerecho === 'derecho3' && !Libro3AudioDerecho.paused) {
                    redirectToLibroDerecho3();
                } else if (currentBookDerecho === 'derecho4' && !Libro4AudioDerecho.paused) {
                    redirectToLibroDerecho4();
                } else if (currentBookDerecho === 'derecho5' && !Libro5AudioDerecho.paused) {
                    redirectToLibroDerecho5();
                } else if (currentBookDerecho === 'derecho6' && !Libro6AudioDerecho.paused) {
                    redirectToLibroDerecho6();
                } else if (currentBookDerecho === 'derecho7' && !Libro7AudioDerecho.paused) {
                    redirectToLibroDerecho7();
                } else if (currentBookDerecho === 'derecho8' && !Libro8AudioDerecho.paused) {
                    redirectToLibroDerecho8();
                } 
            }
            if (key === 'd') {
            // Avanzar al siguiente libro
            if(currentBookDerecho === 'derecho') {
                DCategoria.pause();
                DCategoria.currentTime = 0;
                DDerecho.pause();
                DDerecho.currentTime = 0;
                SDerecho.pause();
                SDerecho.currentTime = 0;

                Libro8AudioDerecho.pause();
                Libro8AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho1';
                clearActive();
                libroDerecho.classList.add('active');
                Libro1AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro1AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho1') {
                Libro1AudioDerecho.pause();
                Libro1AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho2';
                clearActive();
                libroDerecho2.classList.add('active');
                Libro2AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro2AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho2') {
                Libro2AudioDerecho.pause();
                Libro2AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho3';
                clearActive();
                libroDerecho3.classList.add('active');
                Libro3AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro3AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho3') {
                Libro3AudioDerecho.pause();
                Libro3AudioDerecho.currentTime = 0;       
                currentBookDerecho = 'derecho4';
                clearActive();
                libroDerecho4.classList.add('active');
                Libro4AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro4AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho4') {
                Libro4AudioDerecho.pause();
                Libro4AudioDerecho.currentTime = 0;            
                currentBookDerecho = 'derecho5';
                clearActive();
                libroDerecho5.classList.add('active');
                Libro5AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro5AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho5') {
                Libro5AudioDerecho.pause();
                Libro5AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho6';
                clearActive();
                libroDerecho6.classList.add('active');
                Libro6AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro6AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho6') {
                Libro6AudioDerecho.pause();
                Libro6AudioDerecho.currentTime = 0;          
                currentBookDerecho = 'derecho7';
                clearActive();
                libroDerecho7.classList.add('active');
                Libro7AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro7AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho7') {
                Libro7AudioDerecho.pause();
                Libro7AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho8';
                clearActive();
                libroDerecho8.classList.add('active');
                Libro8AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro8AudioDerecho.play();      
            } else if (currentBookDerecho === 'derecho8') {
                Libro8AudioDerecho.pause();
                Libro8AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho1';
                clearActive();
                libroDerecho.classList.add('active');
                Libro1AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro1AudioDerecho.play();      
            }             
        } else if (key === 'a') {
            // Retroceder al libro anterior
            if (currentBookDerecho === 'derecho1') {
                Libro1AudioDerecho.pause();
                Libro1AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho8';
                clearActive();
                libroDerecho8.classList.add('active');
                Libro8AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro8AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho2') {
                Libro2AudioDerecho.pause();
                Libro2AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho1';
                clearActive();
                libroDerecho.classList.add('active');
                Libro1AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro1AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho3') {
                Libro3AudioDerecho.pause();
                Libro3AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho2';
                clearActive();
                libroDerecho2.classList.add('active');
                Libro2AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro2AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho4') {
                Libro4AudioDerecho.pause();
                Libro4AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho3';
                clearActive();
                libroDerecho3.classList.add('active');
                Libro3AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro3AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho5') {
                Libro5AudioDerecho.pause();
                Libro5AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho4';
                clearActive();
                libroDerecho4.classList.add('active');
                Libro4AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro4AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho6') {
                Libro6AudioDerecho.pause();
                Libro6AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho5';
                clearActive();
                libroDerecho5.classList.add('active');
                Libro5AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro5AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho7') {
                Libro7AudioDerecho.pause();
                Libro7AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho6';
                clearActive();
                libroDerecho6.classList.add('active');
                Libro6AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro6AudioDerecho.play();
            } else if (currentBookDerecho === 'derecho8') {
                Libro8AudioDerecho.pause();
                Libro8AudioDerecho.currentTime = 0;
                currentBookDerecho = 'derecho7';
                clearActive();
                libroDerecho7.classList.add('active');
                Libro7AudioDerecho.currentTime = 0; // Reinicia el audio al inicio
                Libro7AudioDerecho.play();
            } 
        } 
    }
    });
});


//LIBROS DE INGENIERIA
function redirectToLibro1() {
    // Redirigir a libro1.html
    window.location.href = 'Libro1.html';
}
function redirectToLibro2() {
    // Redirigir a libro1.html
    window.location.href = 'Libro2.html';
}
function redirectToLibro3() {
    // Redirigir a libro1.html
    window.location.href = 'Libro3.html';
}
function redirectToLibro4() {
    // Redirigir a libro1.html
    window.location.href = 'Libro4.html';
}
function redirectToLibro5() {
    // Redirigir a libro1.html
    window.location.href = 'Libro5.html';
}
function redirectToLibro6() {
    // Redirigir a libro1.html
    window.location.href = 'Libro6.html';
}
function redirectToLibro7() {
    // Redirigir a libro1.html
    window.location.href = 'Libro7.html';
}
function redirectToLibro8() {
    // Redirigir a libro1.html
    window.location.href = 'Libro8.html';
}
function redirectToLibro9() {
    // Redirigir a libro1.html
    window.location.href = 'Libro9.html';
}
function redirectToLibro10() {
    // Redirigir a libro1.html
    window.location.href = 'Libro10.html';
}
function redirectToLibro11() {
    // Redirigir a libro1.html
    window.location.href = 'Libro11.html';
}
function redirectToLibro12() {
    // Redirigir a libro1.html
    window.location.href = 'Libro12.html';
}

//PARTE LIBROS DE SALUD
function redirectToLibroSalud1() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud1.html';
}
function redirectToLibroSalud2() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud2.html';
}
function redirectToLibroSalud3() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud3.html';
}
function redirectToLibroSalud4() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud4.html';
}
function redirectToLibroSalud5() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud5.html';
}
function redirectToLibroSalud6() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud6.html';
}
function redirectToLibroSalud7() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud7.html';
}
function redirectToLibroSalud8() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud8.html';
}
function redirectToLibroSalud9() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud9.html';
}
function redirectToLibroSalud10() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud10.html';
}
function redirectToLibroSalud11() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud11.html';
}
function redirectToLibroSalud12() {
    // Redirigir a libro1.html
    window.location.href = 'LibroSalud12.html';
}

//PARTE LIBROS DE CIENCIAS ECONOMICAS
function redirectToLibroNegocio1() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio1.html';
}
function redirectToLibroNegocio2() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio2.html';
}
function redirectToLibroNegocio3() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio3.html';
}
function redirectToLibroNegocio4() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio4.html';
}
function redirectToLibroNegocio5() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio5.html';
}
function redirectToLibroNegocio6() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio6.html';
}
function redirectToLibroNegocio7() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio7.html';
}
function redirectToLibroNegocio8() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio8.html';
}
function redirectToLibroNegocio9() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio9.html';
}
function redirectToLibroNegocio10() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio10.html';
}
function redirectToLibroNegocio11() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio11.html';
}
function redirectToLibroNegocio12() {
    // Redirigir a libro1.html
    window.location.href = 'LibroNegocio12.html';
}

//PARTE LIBROS DE CIENCIAS ECONOMICAS
function redirectToLibroDerecho1() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho1.html';
}
function redirectToLibroDerecho2() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho2.html';
}
function redirectToLibroDerecho3() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho3.html';
}
function redirectToLibroDerecho4() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho4.html';
}
function redirectToLibroDerecho5() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho5.html';
}
function redirectToLibroDerecho6() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho6.html';
}
function redirectToLibroDerecho7() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho7.html';
}
function redirectToLibroDerecho8() {
    // Redirigir a libro1.html
    window.location.href = 'LibroDerecho8.html';
}



function redirectToInicio() {
    // Redirigir a libro1.html
    window.location.href = 'index.html';
}
function redirectToLibros() {
    // Redirigir a Libros.html
    window.location.href = 'Libros.html';
}
function redirectToReservar() {
    // Redirigir a libro1.html
    window.location.href = 'categories.html';
}
function redirectToContactanos() {
    // Redirigir a libro1.html
    window.location.href = 'contact.html';
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes('Libros.html')) {
        const Libros = new Audio('audio/bienvenidoLibros.mp3');
        Libros.addEventListener('canplaythrough', function() {
            Libros.play();
        });
        Libros.load();
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === '1') {
                Libros.pause();
            }
        });
    }

    if (window.location.href.includes('index.html')) {
        const bienvenido = new Audio('audio/bienvenido.mp3');
        bienvenido.addEventListener('canplaythrough', function() {
            bienvenido.play();
        });
        bienvenido.load();

        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === '4') {
                bienvenido.pause();
            
            }
        });

        
    }
    
    if (window.location.href.includes('contact.html')) {
        const contactactame = new Audio('audio/apartadoContactanos.mp3');
        contactactame.addEventListener('canplaythrough', function() {
            contactactame.play();
        });
        contactactame.load();
    }
    if (window.location.href.includes('categories.html')) {
        const reserva = new Audio('audio/apartadoReserva.mp3');
        reserva.addEventListener('canplaythrough', function() {
            reserva.play();
        });
        reserva.load();
    }
});