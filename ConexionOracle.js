// Función para conectarse a la base de datos
function conectarBaseDeDatos() {
    // URL de conexión a la base de datos Oracle
    const url = 'jdbc:oracle:thin:@//WORKGROUP-DESKTOP-804GM5F:1521/XE'; // Reemplaza con tu propia URL

    // Datos de inicio de sesión para la base de datos
    const usuario = 'SYSTEM'; // Tu nombre de usuario
    const contraseña = 'Valeria2003y$'; // Tu contraseña

    // Configuración de la solicitud Fetch para la conexión
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario: usuario,
            contraseña: contraseña
        })
    };

    // Realizar la solicitud Fetch para conectar a la base de datos
    fetch(url, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al conectar a la base de datos');
            }
            return response.json();
        })
        .then(data => {
            console.log('Conexión exitosa:', data);
            // Aquí puedes realizar acciones adicionales después de una conexión exitosa
        })
        .catch(error => {
            console.error('Error de conexión:', error);
        });
}

// Evento que se dispara cuando el documento HTML se carga completamente
document.addEventListener("DOMContentLoaded", function(event) {
    // Llama a la función para conectar a la base de datos automáticamente al cargar la página
    conectarBaseDeDatos();
});
