document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".mostrar-mas-btn");
    const reseña = document.querySelector(".reseña");

    btn.addEventListener("click", function() {
        if (reseña.style.maxHeight === "none") {
            reseña.style.maxHeight = "350px";
            btn.textContent = "MOSTRAR MÁS";
        } else {
            reseña.style.maxHeight = "none";
            btn.textContent = "MOSTRAR MENOS";
        }
    });
});

const products = document.querySelectorAll(".slider-1 .product-1");
let counter = 0;
const productWidth = 200; // Ancho de cada producto en píxeles
const productsPerPage = 6; // Cantidad de productos visibles por página

function left() {
    if (counter > 0) {
        counter--;
    }
    scroll();
}

function right() {
    if (counter < Math.ceil(products.length / productsPerPage) - 1) {
        counter++;
    }
    scroll();
}

function scroll() {
    const offset = counter * productWidth * productsPerPage;
    products.forEach(function(item) {
        item.style.transform = `translateX(-${offset}px)`;
    });
}

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

//PARA VOLVER AL INICIO DE LOS LIBROS
function redirectToVolver() {
    // Redirigir a libro1.html
    window.location.href = 'Libros.html';
}

function redirectToReservar() {
    // Redirigir a libro1.html
    window.location.href = 'categories.html';
}
//PARA VER LA VISTA PREVIA DE LOS AUDIOLIBROS
function redirectToAudioLibro1() {
    window.location.href = 'Vista_Previa1.html';
}

//SALUD
function redirectToAudioLibro2() {
    window.location.href = 'Vista_Previa2.html';
}

//NEGOCIO
function redirectToAudioLibro3() {
    window.location.href = 'Vista_Previa3.html';
}

//LIBROS INGENIERIA
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes('Libro1.html')) {
        const Libro1 = new Audio('audio/introduccion1.mp3');
        Libro1.addEventListener('canplaythrough', function() {
            Libro1.play();
        });
        Libro1.load();

        let isPlaying = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro1AudioDetalle'); 
            if (!isPlaying) {
                audio.play();
                isPlaying = true;
            } else if (isPlaying && !audio.paused) {
                audio.pause();
            } else if (isPlaying && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro1.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'c') {
                redirectToAudioLibro1();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro2.html')) {
        const Libro2 = new Audio('audio/introduccion2.mp3');
        Libro2.addEventListener('canplaythrough', function() {
            Libro2.play();
        });
        Libro2.load();

        let isPlaying2 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro2AudioDetalle'); 
            if (!isPlaying2) {
                audio.play();
                isPlaying2 = true;
            } else if (isPlaying2 && !audio.paused) {
                audio.pause();
            } else if (isPlaying2 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro2.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro3.html')) {
        const Libro3 = new Audio('audio/introduccion2.mp3');
        Libro3.addEventListener('canplaythrough', function() {
            Libro3.play();
        });
        Libro3.load();

        let isPlaying3 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro3AudioDetalle'); 
            if (!isPlaying3) {
                audio.play();
                isPlaying3 = true;
            } else if (isPlaying3 && !audio.paused) {
                audio.pause();
            } else if (isPlaying3 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro3.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro4.html')) {
        const Libro4 = new Audio('audio/introduccion2.mp3');
        Libro4.addEventListener('canplaythrough', function() {
            Libro4.play();
        });
        Libro4.load();

        let isPlaying4 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro4AudioDetalle'); 
            if (!isPlaying4) {
                audio.play();
                isPlaying4 = true;
            } else if (isPlaying4 && !audio.paused) {
                audio.pause();
            } else if (isPlaying4 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro4.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro5.html')) {
        const Libro5 = new Audio('audio/introduccion2.mp3');
        Libro5.addEventListener('canplaythrough', function() {
            Libro5.play();
        });
        Libro5.load();

        let isPlaying5 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro5AudioDetalle'); 
            if (!isPlaying5) {
                audio.play();
                isPlaying5 = true;
            } else if (isPlaying5 && !audio.paused) {
                audio.pause();
            } else if (isPlaying5 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro5.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro6.html')) {
        const Libro6 = new Audio('audio/introduccion2.mp3');
        Libro6.addEventListener('canplaythrough', function() {
            Libro6.play();
        });
        Libro6.load();

        let isPlaying6 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro6AudioDetalle'); 
            if (!isPlaying6) {
                audio.play();
                isPlaying6 = true;
            } else if (isPlaying6 && !audio.paused) {
                audio.pause();
            } else if (isPlaying6 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro6.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro7.html')) {
        const Libro7 = new Audio('audio/introduccion2.mp3');
        Libro7.addEventListener('canplaythrough', function() {
            Libro7.play();
        });
        Libro7.load();

        let isPlaying7 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro7AudioDetalle'); 
            if (!isPlaying7) {
                audio.play();
                isPlaying7 = true;
            } else if (isPlaying7 && !audio.paused) {
                audio.pause();
            } else if (isPlaying7 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro7.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro8.html')) {
        const Libro8 = new Audio('audio/introduccion2.mp3');
        Libro8.addEventListener('canplaythrough', function() {
            Libro8.play();
        });
        Libro8.load();

        let isPlaying8 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro8AudioDetalle'); 
            if (!isPlaying8) {
                audio.play();
                isPlaying8 = true;
            } else if (isPlaying8 && !audio.paused) {
                audio.pause();
            } else if (isPlaying8 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro8.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro9.html')) {
        const Libro9 = new Audio('audio/introduccion2.mp3');
        Libro9.addEventListener('canplaythrough', function() {
            Libro9.play();
        });
        Libro9.load();

        let isPlaying9 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro9AudioDetalle'); 
            if (!isPlaying9) {
                audio.play();
                isPlaying9 = true;
            } else if (isPlaying9 && !audio.paused) {
                audio.pause();
            } else if (isPlaying9 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro9.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro10.html')) {
        const Libro10 = new Audio('audio/introduccion2.mp3');
        Libro10.addEventListener('canplaythrough', function() {
            Libro10.play();
        });
        Libro10.load();

        let isPlaying10 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro10AudioDetalle'); 
            if (!isPlaying10) {
                audio.play();
                isPlaying10 = true;
            } else if (isPlaying10 && !audio.paused) {
                audio.pause();
            } else if (isPlaying10 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro10.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro11.html')) {
        const Libro11 = new Audio('audio/introduccion2.mp3');
        Libro11.addEventListener('canplaythrough', function() {
            Libro11.play();
        });
        Libro11.load();

        let isPlaying11 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro11AudioDetalle'); 
            if (!isPlaying11) {
                audio.play();
                isPlaying11 = true;
            } else if (isPlaying11 && !audio.paused) {
                audio.pause();
            } else if (isPlaying11 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro11.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('Libro12.html')) {
        const Libro12 = new Audio('audio/introduccion2.mp3');
        Libro12.addEventListener('canplaythrough', function() {
            Libro12.play();
        });
        Libro12.load();

        let isPlaying12 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro12AudioDetalle'); 
            if (!isPlaying12) {
                audio.play();
                isPlaying12 = true;
            } else if (isPlaying12 && !audio.paused) {
                audio.pause();
            } else if (isPlaying12 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro12.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }
});


//LIBRO1 SALUD
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes('LibroSalud1.html')) {
        const Libro1 = new Audio('audio/introduccion2.mp3');
        Libro1.addEventListener('canplaythrough', function() {
            Libro1.play();
        });
        Libro1.load();

        let isPlaying1 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro1AudioDetalleSalud'); 
            if (!isPlaying1) {
                audio.play();
                isPlaying1 = true;
            } else if (isPlaying1 && !audio.paused) {
                audio.pause();
            } else if (isPlaying1 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro1.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud2.html')) {
        const Libro2 = new Audio('audio/introduccion1.mp3');
        Libro2.addEventListener('canplaythrough', function() {
            Libro2.play();
        });
        Libro2.load();

        let isPlaying2 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro2AudioDetalleSalud'); 
            if (!isPlaying2) {
                audio.play();
                isPlaying2 = true;
            } else if (isPlaying2 && !audio.paused) {
                audio.pause();
            } else if (isPlaying2 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro2.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'c') {
                redirectToAudioLibro2();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud3.html')) {
        const Libro3 = new Audio('audio/introduccion2.mp3');
        Libro3.addEventListener('canplaythrough', function() {
            Libro3.play();
        });
        Libro3.load();

        let isPlaying3 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro3AudioDetalleSalud'); 
            if (!isPlaying3) {
                audio.play();
                isPlaying3 = true;
            } else if (isPlaying3 && !audio.paused) {
                audio.pause();
            } else if (isPlaying3 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro3.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud4.html')) {
        const Libro4 = new Audio('audio/introduccion2.mp3');
        Libro4.addEventListener('canplaythrough', function() {
            Libro4.play();
        });
        Libro4.load();

        let isPlaying4 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro4AudioDetalleSalud'); 
            if (!isPlaying4) {
                audio.play();
                isPlaying4 = true;
            } else if (isPlaying4 && !audio.paused) {
                audio.pause();
            } else if (isPlaying4 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro4.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud5.html')) {
        const Libro5 = new Audio('audio/introduccion2.mp3');
        Libro5.addEventListener('canplaythrough', function() {
            Libro5.play();
        });
        Libro5.load();

        let isPlaying5 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro5AudioDetalleSalud'); 
            if (!isPlaying5) {
                audio.play();
                isPlaying5 = true;
            } else if (isPlaying5 && !audio.paused) {
                audio.pause();
            } else if (isPlaying5 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro5.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud6.html')) {
        const Libro6 = new Audio('audio/introduccion2.mp3');
        Libro6.addEventListener('canplaythrough', function() {
            Libro6.play();
        });
        Libro6.load();

        let isPlaying6 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro6AudioDetalleSalud'); 
            if (!isPlaying6) {
                audio.play();
                isPlaying6 = true;
            } else if (isPlaying6 && !audio.paused) {
                audio.pause();
            } else if (isPlaying6 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro6.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud7.html')) {
        const Libro7 = new Audio('audio/introduccion2.mp3');
        Libro7.addEventListener('canplaythrough', function() {
            Libro7.play();
        });
        Libro7.load();

        let isPlaying7 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro7AudioDetalleSalud'); 
            if (!isPlaying7) {
                audio.play();
                isPlaying7 = true;
            } else if (isPlaying7 && !audio.paused) {
                audio.pause();
            } else if (isPlaying7 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro7.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud8.html')) {
        const Libro8 = new Audio('audio/introduccion2.mp3');
        Libro8.addEventListener('canplaythrough', function() {
            Libro8.play();
        });
        Libro8.load();

        let isPlaying8 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro8AudioDetalleSalud'); 
            if (!isPlaying8) {
                audio.play();
                isPlaying8 = true;
            } else if (isPlaying8 && !audio.paused) {
                audio.pause();
            } else if (isPlaying8 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro8.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud9.html')) {
        const Libro9 = new Audio('audio/introduccion2.mp3');
        Libro9.addEventListener('canplaythrough', function() {
            Libro9.play();
        });
        Libro9.load();

        let isPlaying9 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro9AudioDetalleSalud'); 
            if (!isPlaying9) {
                audio.play();
                isPlaying9 = true;
            } else if (isPlaying9 && !audio.paused) {
                audio.pause();
            } else if (isPlaying9 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro9.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud10.html')) {
        const Libro10 = new Audio('audio/introduccion2.mp3');
        Libro10.addEventListener('canplaythrough', function() {
            Libro10.play();
        });
        Libro10.load();

        let isPlaying10 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro10AudioDetalleSalud'); 
            if (!isPlaying10) {
                audio.play();
                isPlaying10 = true;
            } else if (isPlaying10 && !audio.paused) {
                audio.pause();
            } else if (isPlaying10 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro10.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud11.html')) {
        const Libro11 = new Audio('audio/introduccion2.mp3');
        Libro11.addEventListener('canplaythrough', function() {
            Libro11.play();
        });
        Libro11.load();

        let isPlaying11 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro11AudioDetalleSalud'); 
            if (!isPlaying11) {
                audio.play();
                isPlaying11 = true;
            } else if (isPlaying11 && !audio.paused) {
                audio.pause();
            } else if (isPlaying11 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro11.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroSalud12.html')) {
        const Libro12 = new Audio('audio/introduccion2.mp3');
        Libro12.addEventListener('canplaythrough', function() {
            Libro12.play();
        });
        Libro12.load();

        let isPlaying12 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro12AudioDetalleSalud'); 
            if (!isPlaying12) {
                audio.play();
                isPlaying12 = true;
            } else if (isPlaying12 && !audio.paused) {
                audio.pause();
            } else if (isPlaying12 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro12.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio1.html')) {
        const Libro1 = new Audio('audio/introduccion1.mp3');
        Libro1.addEventListener('canplaythrough', function() {
            Libro1.play();
        });
        Libro1.load();

        let isPlaying1 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro1AudioDetalleNegocio'); 
            if (!isPlaying1) {
                audio.play();
                isPlaying1 = true;
            } else if (isPlaying1 && !audio.paused) {
                audio.pause();
            } else if (isPlaying1 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro1.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'c') {
                redirectToAudioLibro3();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio2.html')) {
        const Libro2 = new Audio('audio/introduccion2.mp3');
        Libro2.addEventListener('canplaythrough', function() {
            Libro2.play();
        });
        Libro2.load();

        let isPlaying2 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro2AudioDetalleNegocio'); 
            if (!isPlaying2) {
                audio.play();
                isPlaying2 = true;
            } else if (isPlaying2 && !audio.paused) {
                audio.pause();
            } else if (isPlaying2 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro2.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio3.html')) {
        const Libro3 = new Audio('audio/introduccion2.mp3');
        Libro3.addEventListener('canplaythrough', function() {
            Libro3.play();
        });
        Libro3.load();

        let isPlaying3 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro3AudioDetalleNegocio'); 
            if (!isPlaying3) {
                audio.play();
                isPlaying3 = true;
            } else if (isPlaying3 && !audio.paused) {
                audio.pause();
            } else if (isPlaying3 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro3.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio4.html')) {
        const Libro4 = new Audio('audio/introduccion2.mp3');
        Libro4.addEventListener('canplaythrough', function() {
            Libro4.play();
        });
        Libro4.load();

        let isPlaying4 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro4AudioDetalleNegocio'); 
            if (!isPlaying4) {
                audio.play();
                isPlaying4 = true;
            } else if (isPlaying4 && !audio.paused) {
                audio.pause();
            } else if (isPlaying4 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro4.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio5.html')) {
        const Libro5 = new Audio('audio/introduccion2.mp3');
        Libro5.addEventListener('canplaythrough', function() {
            Libro5.play();
        });
        Libro5.load();

        let isPlaying5 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro5AudioDetalleNegocio'); 
            if (!isPlaying5) {
                audio.play();
                isPlaying5 = true;
            } else if (isPlaying5 && !audio.paused) {
                audio.pause();
            } else if (isPlaying5 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro5.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio6.html')) {
        const Libro6 = new Audio('audio/introduccion2.mp3');
        Libro6.addEventListener('canplaythrough', function() {
            Libro6.play();
        });
        Libro6.load();

        let isPlaying6 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro6AudioDetalleNegocio'); 
            if (!isPlaying6) {
                audio.play();
                isPlaying6 = true;
            } else if (isPlaying6 && !audio.paused) {
                audio.pause();
            } else if (isPlaying6 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro6.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio7.html')) {
        const Libro7 = new Audio('audio/introduccion2.mp3');
        Libro7.addEventListener('canplaythrough', function() {
            Libro7.play();
        });
        Libro7.load();

        let isPlaying7 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro7AudioDetalleNegocio'); 
            if (!isPlaying7) {
                audio.play();
                isPlaying7 = true;
            } else if (isPlaying7 && !audio.paused) {
                audio.pause();
            } else if (isPlaying7 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro7.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio8.html')) {
        const Libro8 = new Audio('audio/introduccion2.mp3');
        Libro8.addEventListener('canplaythrough', function() {
            Libro8.play();
        });
        Libro8.load();

        let isPlaying8 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro8AudioDetalleNegocio'); 
            if (!isPlaying8) {
                audio.play();
                isPlaying8 = true;
            } else if (isPlaying8 && !audio.paused) {
                audio.pause();
            } else if (isPlaying8 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro8.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio9.html')) {
        const Libro9 = new Audio('audio/introduccion2.mp3');
        Libro9.addEventListener('canplaythrough', function() {
            Libro9.play();
        });
        Libro9.load();

        let isPlaying9 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro9AudioDetalleNegocio'); 
            if (!isPlaying9) {
                audio.play();
                isPlaying9 = true;
            } else if (isPlaying9 && !audio.paused) {
                audio.pause();
            } else if (isPlaying9 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro9.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio10.html')) {
        const Libro10 = new Audio('audio/introduccion2.mp3');
        Libro10.addEventListener('canplaythrough', function() {
            Libro10.play();
        });
        Libro10.load();

        let isPlaying10 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro10AudioDetalleNegocio'); 
            if (!isPlaying10) {
                audio.play();
                isPlaying10 = true;
            } else if (isPlaying10 && !audio.paused) {
                audio.pause();
            } else if (isPlaying10 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro10.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio11.html')) {
        const Libro11 = new Audio('audio/introduccion2.mp3');
        Libro11.addEventListener('canplaythrough', function() {
            Libro11.play();
        });
        Libro11.load();

        let isPlaying11 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro11AudioDetalleNegocio'); 
            if (!isPlaying11) {
                audio.play();
                isPlaying11 = true;
            } else if (isPlaying11 && !audio.paused) {
                audio.pause();
            } else if (isPlaying11 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro11.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }

    if (window.location.href.includes('LibroNegocio12.html')) {
        const Libro12 = new Audio('audio/introduccion2.mp3');
        Libro12.addEventListener('canplaythrough', function() {
            Libro12.play();
        });
        Libro12.load();

        let isPlaying12 = false;

        function toggleAudio() {
            const audio = document.getElementById('Libro12AudioDetalleNegocio'); 
            if (!isPlaying12) {
                audio.play();
                isPlaying12 = true;
            } else if (isPlaying12 && !audio.paused) {
                audio.pause();
            } else if (isPlaying12 && audio.paused) {
                audio.play();
            }
        }
        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'z') {
                Libro12.pause();
                toggleAudio();
            }
            if (key === 'x') {
                redirectToVolver();
            }
            if (key === 'n') {
                redirectToReservar();
            }
        });
    }
});







