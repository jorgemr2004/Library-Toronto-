function setDaltonismoOption(option) {
    localStorage.setItem('daltonismoOption', option);
    applyDaltonismoFilter(option); // Aplica el filtro visualmente en la página
}

document.addEventListener('DOMContentLoaded', function() {
    const savedOption = localStorage.getItem('daltonismoOption');
    if (savedOption) {
        applyDaltonismoFilter(savedOption);
        // Opcional: actualizar el selector de la interfaz de usuario
        document.getElementById('daltonismoSelector').value = savedOption;
    }
});

function applyDaltonismoFilter(option) {
    document.body.className = ''; // Reinicia las clases
    if (option !== 'none') {
        document.body.classList.add(option); // Añade la clase correspondiente
    }
}