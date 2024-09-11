// Solicitar usuario y contraseña en un solo prompt
var userInput = prompt("Ingrese su Usuario y Contraseña separados por una barra diagonal (/):\n(Ejemplo: usuario/contraseña)");

// Verificar si se ingresó algo
if (userInput) {
    // Separar usuario y contraseña
    var partes = userInput.split('/');

    // Verificar si se ingresaron ambos valores
    if (partes.length === 2) {
        var usuario = partes[0];
        var contrasena = partes[1];
        
        // Mostrar mensaje de bienvenida
        alert("Bienvenido: " + usuario);
    } else {
        alert("Formato incorrecto. Debe ingresar Usuario/Contraseña.");
    }
} else {
    // Manejar caso de cancelación o entrada vacía
    alert("No se ingresaron datos.");
}
