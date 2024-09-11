
  
  
  
  //----------------ESTUDIANTES---------------------------
  function fn_listar_estudiante(){
    var settings = {
        "url": "http://localhost:8050/api/estudiante",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        $('#studentTable tbody').empty();
        if (response.status && response.data.length > 0) {
            var data = response.data;
            var tableBody = $('#studentTable tbody');
            for (var i = 0; i < data.length; i++) {
                var row = '<tr>';
                row += '<td class="border px-4 py-2">' + data[i].IDESTUDIANTE + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].NOMBREEST + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].APELLIDOEST + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].cantidadMax + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].cantidadReservada + '</td>';
                row += '</tr>';
                tableBody.append(row);
            }
        } else {
            console.error('No se encontraron datos de estudiantes.');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al enviar solicitud PATCH:', errorThrown);
        alert("Error al enviar solicitud PATCH: " + errorThrown);
    });
}


function fn_listar_estudianteXid(){
    var var_id = $("#txtid").val();
    if (var_id == "")
    {
        alert("ingresar un id");
        return;
    }

    var settings = {
        "url": "http://localhost:8050/api/estudiante/id",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            id : var_id
        }),
    };

    $.ajax(settings).done(function (response) {

       $('#studentTable tbody').empty();
       if (response.data.length == 0)
       {
        alert("valor no encontrado");
        return;
       }
        console.log(response);
        
        if (response.status && response.data.length > 0) {
            var data = response.data;
            var tableBody = $('#studentTable tbody');
            for (var i = 0; i < data.length; i++) {
                var row = '<tr>';
                row += '<td class="border px-4 py-2">' + data[i].IDESTUDIANTE + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].NOMBREEST + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].APELLIDOEST + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].cantidadMax + '</td>';
                row += '<td class="border px-4 py-2">' + data[i].cantidadReservada + '</td>';
                row += '</tr>';
                tableBody.append(row);
            }
        } else {
            console.error('No se encontraron datos de estudiantes.');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al enviar solicitud PATCH:', errorThrown);
        alert("Error al enviar solicitud PATCH: " + errorThrown);
    });
}    


//----------------LIBROS---------------------------
function fn_Estado_libroxid(){
    var var_id = $("#txtlibroid").val();
    if (var_id == "") {
        alert("Ingresar un ID");
        return;
    }

    var settings = {
        "url": "http://localhost:8050/api/estudiante/librosxid",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            id : var_id
        }),
    };

    $.ajax(settings).done(function (response) {
    
       $('#tablelibros tbody').empty();
       if (response.data.length == 0) {
        alert("Valor no encontrado");
        return;
       }
        console.log(response);
        
        if (response.status && response.data.length > 0) {
            var data = response.data;
            console.log($('#tablelibros tbody').length)
            var tableBody = $('#tablelibros tbody');
            for (var i = 0; i < data.length; i++) {
                var row = '<tr>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].num_ejemplar + '</td>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].disponibilidad + '</td>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].nombre_libro + '</td>';

                row += '</tr>';
                tableBody.append(row);
            }
            // Cambiar el encabezado de la segunda columna a "Estado de Libro"
            $('#tablelibros th:nth-child(2)').text('Estado de Libro');
        } else {
            console.error('No se encontraron datos de estudiantes.');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al enviar solicitud PATCH:', errorThrown);
        alert("Error al enviar solicitud PATCH: " + errorThrown);
    });
}    

function fn_listar_libro(){
    var settings = {
        "url": "http://localhost:8050/api/estudiante/libros",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

        }),
    };

    $.ajax(settings).done(function (response) {

        $('#tablelibros tbody').empty();
        if (response.status && response.data.length > 0) {
            var data = response.data;
            var tableBody = $('#tablelibros tbody');
            for (var i = 0; i < data.length; i++) {
                var row = '<tr>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].num_ejemplar + '</td>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].CodLibro + '</td>';
                row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].Titulo + '</td>';

                row += '</tr>';
                tableBody.append(row);
            }
            // Cambiar el encabezado de la segunda columna a "ID de Libro"
            $('#tablelibros th:nth-child(2)').text('ID de Libro');
        } else {
            console.error('No se encontraron datos de estudiantes.');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al enviar solicitud PATCH:', errorThrown);
        alert("Error al enviar solicitud PATCH: " + errorThrown);
    });
}

function fn_Vista() {
  
}



//----------------RESERVAR---------------------------
function fn_Reservar() {
    var var_id = $("#txtreservasid").val();
    if (var_id === "") {
        alert("Por favor, ingresa un ID Estudiante.");
        return;
    }
    var var_id2 = $("#txtreservasid2").val();
    if (var_id2 === "") {
        alert("Por favor, ingresa un ID Ejemplar.");
        return;
    }
    var var_id3 = $("#txtreservasid3").val();
    if (var_id3 === "") {
        alert("Por favor, ingresa un ID RESERVA NUEVO.");
        return;
    }

    // Agrega console.log para verificar los valores antes de enviar la solicitud AJAX
    console.log("ID 1:", var_id);
    console.log("ID 2:", var_id2);
    console.log("ID 3:", var_id3);

    var settings = {
        "url": "http://localhost:8050/api/estudiante/reservar",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            id: var_id,
            id2: var_id2,
            id3: var_id3
        }),
    };

    $.ajax(settings)
        .done(function(response) {
          
            $('#tableReservar tbody').empty();
            if (response.data.length === 0) {
                alert("No se encontraron resultados.");
                return;
            }
            console.log(response);

            if (response.status && response.data.length > 0) {
                var data = response.data;
                var tableBody = $('#tableReservar tbody');
                for (var i = 0; i < data.length; i++) {
                    var row = '<tr>';
                    row += '<td class="border px-4 py-2" style="text-align: center;">' + data[i].resultado + '</td>';
                    row += '</tr>';
                    tableBody.append(row);
                }
            } else {
                console.error('No se encontraron datos de estudiantes.');
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Error al enviar solicitud POST:', errorThrown);
            alert("Error al enviar solicitud POST: " + errorThrown);
        });
}


























function limpiarTablaEsudiantes() {
    $('#studentTable tbody').empty();
    // Limpiar cajas de texto
    $('#txtid').val('');
}

function limpiarTablaLibros() {
    $('#tablelibros tbody').empty();
    // Limpiar cajas de texto
    $('#txtlibroid').val('');
}

function limpiarTablaReservar() {
    $('#tableReservar tbody').empty();
    // Limpiar cajas de texto
    $('#txtreservasid').val('');
    $('#txtreservasid2').val('');
    $('#txtreservasid3').val('');
}