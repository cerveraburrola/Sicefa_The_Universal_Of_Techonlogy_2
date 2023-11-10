let empleado = {};
let empleados = [];

var table = document.querySelector(".table");
var btnGuardarEditar = document.querySelector("#guardarEditar");
table.addEventListener("click", function(event) { 
    var clickedCell = event.target; // Obtener la celda en la que se hizo clic
    // Verificar si la celda tiene la clase "idPersona"
    if (clickedCell.hasAttribute("idPersona")) {
        var idPersona = clickedCell.getAttribute("idPersona"); // Obtener el valor del atributo idPersona
        modificar(idPersona);
    }
});

btnGuardarEditar.addEventListener("click", function(event) { 
    guardarModificar();
    limpiar();
});

var btnGuardarEditar = document.querySelector("#eliminarEmpleado");
btnGuardarEditar.addEventListener("click", function(event) { 
    borrarEmpleado();
});

function registrar() {
    // Obtenemos los valores del formulario
    var codigoEmpleado = $('#codigoEmpleado').val();
    //var codigoEmpleado = document.getElementById("codigoEmpleado").value;
    var nombres = document.getElementById("nombres").value;
    var apellidoPaterno = document.getElementById("apellido_paterno").value;
    var apellidoMaterno = document.getElementById("apellido_materno").value;
    var genero = document.getElementById("genero").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var direccion = document.getElementById("direccion").value;
    var codigoPostal = document.getElementById("codigo_postal").value;
    var ciudad = document.getElementById("ciudad").value;
    var estado = document.getElementById("estado").value;
    var curp = document.getElementById("curp").value;
    var rfc = document.getElementById("rfc").value;
    var fechaIngreso = document.getElementById("fecha_ingreso").value;
    var telefono = document.getElementById("telefono").value;
    var puesto = document.getElementById("puesto").value;
    var correo = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;
    var colonia = document.getElementById("colonia").value;

    // Ejemplo de uso
    var numeroAleatorio = numeroAleatorioMayor100();
    
    // Creamos una nueva fila para la tabla
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td class="idCells nombreEmp" idPersona="${numeroAleatorio}">${nombres}</td>
        <td class="idCells apellidoPaternoEmp" idPersona="${numeroAleatorio}">${apellidoPaterno}</td>
        <td class="idCells apellidoMaternoEmp" idPersona="${numeroAleatorio}">${apellidoMaterno}</td>
        <td class="idCells fechaNacimientoEmp" idPersona="${numeroAleatorio}">${fechaNacimiento}</td>
        <td class="idCells generoEmp" idPersona="${numeroAleatorio}">${genero}</td>
        <td class="idCells direccionEmp" idPersona="${numeroAleatorio}">${direccion}</td>
        <td class="idCells coloniaEmp" idPersona="${numeroAleatorio}">${colonia}</td>
        <td class="idCells numeroEmp" idPersona="${numeroAleatorio}">${numero}</td>
        <td class="idCells estadoEmp" idPersona="${numeroAleatorio}">${estado}</td>
        <td class="idCells ciudadEmp" idPersona="${numeroAleatorio}">${ciudad}</td>
        <td class="idCells codigoPostalEmp" idPersona="${numeroAleatorio}">${codigoPostal}</td>
        <td class="idCells curpEmp" idPersona="${numeroAleatorio}">${curp}</td>
        <td class="idCells rfcEmp" idPersona="${numeroAleatorio}">${rfc}</td>
        <td class="idCells emailEmp" idPersona="${numeroAleatorio}">${correo}</td>
        <td class="idCells telefonoEmp" idPersona="${numeroAleatorio}">${telefono}</td>
        <td class="idCells puestoEmp" idPersona="${numeroAleatorio}">${puesto}</td>
        <td class="idCells fechaIngresoEmp" idPersona="${numeroAleatorio}">${fechaIngreso}</td>
    `;

    // Agregamos la nueva fila a la tabla
    var tableBody = document.getElementById("tbEmpleado");
    tableBody.appendChild(newRow);
}


function modificar(id) {
    var cells = table.querySelectorAll(".idCells[idPersona='" + id + "']");
    var data = [];

    cells.forEach(function(cell) {
        data.push(cell.textContent); // Agregar el contenido de la celda al array 'data'
    });
    
    document.getElementById("idRef").value = id;
    document.getElementById("nombres").value = data[0];
    document.getElementById("apellido_paterno").value = data[1];
    document.getElementById("apellido_materno").value = data[2];
    document.getElementById("genero").value = data[4];
    document.getElementById("fecha_nacimiento").value = data[3];
    document.getElementById("direccion").value = data[5];
    document.getElementById("codigo_postal").value = data[10];
    document.getElementById("ciudad").value = data[9];
    document.getElementById("estado").value = data[8];
    document.getElementById("curp").value = data[11];
    document.getElementById("rfc").value = data[12];
    document.getElementById("email").value = data[13];
    document.getElementById("fecha_ingreso").value = data[16];
    document.getElementById("telefono").value = data[14];
    document.getElementById("puesto").value = data[15];
    document.getElementById("numero").value = data[7];
    document.getElementById("colonia").value = data[6];
}

function guardarModificar() {
    // Obtenemos los valores del formulario
    var idRef = $('#idRef').val();
    var codigoEmpleado = $('#codigoEmpleado').val();
    var nombres = $('#nombres').val();
    var apellidoPaterno = $('#apellido_paterno').val();
    var apellidoMaterno = $('#apellido_materno').val();
    var genero = $('#genero').val();
    var fechaNacimiento = $('#fecha_nacimiento').val();
    var direccion = $('#direccion').val();
    var codigoPostal = $('#codigo_postal').val();
    var ciudad = $('#ciudad').val();
    var estado = $('#estado').val();
    var curp = $('#curp').val();
    var rfc = $('#rfc').val();
    var fechaIngreso = $('#fecha_ingreso').val();
    var telefono = $('#telefono').val();
    var puesto = $('#puesto').val();
    var correo = $('#email').val();
    var numero = $('#numero').val();
    var colonia = $('#colonia').val();
    var fila = table.querySelectorAll(".idCells[idPersona='" + idRef + "']");
    if (fila) {
        fila[0].textContent = nombres;
        fila[1].textContent = apellidoPaterno;
        fila[2].textContent = apellidoMaterno;
        fila[3].textContent = fechaNacimiento;
        fila[4].textContent = genero;
        fila[5].textContent = direccion;
        fila[6].textContent = colonia;
        fila[7].textContent = numero;
        fila[8].textContent = estado;
        fila[9].textContent = ciudad;
        fila[10].textContent = codigoPostal;
        fila[11].textContent = curp;
        fila[12].textContent = rfc;
        fila[13].textContent = correo;
        fila[14].textContent = telefono;
        fila[15].textContent = puesto;
        fila[16].textContent = fechaIngreso;
        alert("Cambios guardados y actualizados en la tabla");
    } else {
        alert("No se encontró la fila correspondiente en la tabla.");
    }
}


function limpiar() {
    document.getElementById("formEmpleado").reset();
}

function borrarEmpleado() {
    var idRef = $('#idRef').val();
    var fila = table.querySelector(".idCells[idPersona='" + idRef + "']").closest('tr');
    if (fila) {
        fila.remove();
        limpiar();
        alert('Fila eliminada de la tabla.');
    } else {
        alert('No se encontró la fila correspondiente en la tabla.');
    }
}


function loadTable() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
            '<tr>' +
            '<td class="idCells nombreEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.nombres + '</td>' +
            '<td class="idCells apellidoPaternoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.a_Paterno + '</td>' +
            '<td class="idCells apellidoMaternoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.a_Materno + '</td>' +
            '<td class="idCells fechaNacimientoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.fec_Nacimiento + '</td>' +
            '<td class="idCells generoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.genero + '</td>' +
            '<td class="idCells direccionEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.calle + '</td>' +
            '<td class="idCells coloniaEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.colonia + '</td>' +
            '<td class="idCells numeroEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.numero + '</td>' +
            '<td class="idCells estadoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.estado + '</td>' +
            '<td class="idCells ciudadEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.ciudad + '</td>' +
            '<td  class="idCells codigoPostalEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.cod_Postal + '</td>' +
            '<td  class="idCells curpEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.curp + '</td>' +
            '<td  class="idCells rfcEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.rfc + '</td>' +
            '<td  class="idCells emailEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.email + '</td>' +
            '<td  class="idCells telefonoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.persona.telefono + '</td>' +
            '<td  class="idCells puestoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.puesto + '</td>' +
            '<td  class="idCells fechaIngresoEmp" idPersona="' + empleado.id_Empleado + '">' + empleado.fec_Ingreso + '</td>' +
            '</tr>';
        cuerpo += registro;
    });
    document.getElementById("tbEmpleado").innerHTML = cuerpo;
}

    fetch("modulos/empleados/dataEmpleado.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            empleados = jsondata;
            loadTable();
        });


function numeroAleatorioMayor100() {
  var numeroAleatorio = Math.random() * 10000 + 100; // Genera un número entre 100 y 10100
  numeroAleatorio = Math.floor(numeroAleatorio); // Redondea el número hacia abajo para obtener un entero
  return numeroAleatorio;
}

export function seleccionarEmpleado(indice) {
    document.getElementById("codigoEmpleado").value = empleados[indice].id_Empleado;
    document.getElementById("nombres").value = empleados[indice].persona.nombres;
    document.getElementById("apellido_paterno").value = empleados[indice].persona.a_Paterno;
    document.getElementById("apellido_materno").value = empleados[indice].persona.a_Materno;
    document.getElementById("genero").value = empleados[indice].persona.genero;
    document.getElementById("fecha_nacimiento").value = empleados[indice].persona.fec_Nacimiento;
    document.getElementById("direccion").value = empleados[indice].persona.calle;
    document.getElementById("codigo_postal").value = empleados[indice].persona.cod_Postal;
    document.getElementById("numero").value = empleados[indice].persona.numero;
    document.getElementById("colonia").value = empleados[indice].persona.colonia;
    document.getElementById("ciudad").value = empleados[indice].persona.ciudad;
    document.getElementById("estado").value = empleados[indice].persona.estado;
    document.getElementById("curp").value = empleados[indice].persona.curp;
    document.getElementById("rfc").value = empleados[indice].persona.rfc;
    document.getElementById("fecha_ingreso").value = empleados[indice].fec_Ingreso;
    document.getElementById("telefono").value = empleados[indice].persona.telefono;
    document.getElementById("puesto").value = empleados[indice].puesto;
    document.getElementById("salario_bruto_mensual").value = empleados[indice].sal_Mensual;
    document.getElementById("email").value = empleados[indice].persona.email;
    
    indiceEmpleadoSeleccionado = indice;
}


export function cargarTable(estatus) {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        if (estatus == 0 && empleado.estatus == 0) {
            let registro =
                '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.persona.nombres + '</td>' +
                '<td>' + empleado.persona.a_Paterno + '</td>' +
                '<td>' + empleado.persona.a_Materno + '</td>' +
                '<td>' + empleado.persona.fec_Nacimiento + '</td>' +
                '<td>' + empleado.persona.genero + '</td>' +
                '<td>' + empleado.persona.calle + '</td>' +
                '<td>' + empleado.persona.colonia + '</td>' +
                '<td>' + empleado.persona.numero + '</td>' +
                '<td>' + empleado.persona.estado + '</td>' +
                '<td>' + empleado.persona.ciudad + '</td>' +
                '<td>' + empleado.persona.cod_Postal + '</td>' +
                '<td>' + empleado.persona.curp + '</td>' +
                '<td>' + empleado.persona.rfc + '</td>' +
                '<td>' + empleado.persona.email + '</td>' +
                '<td>' + empleado.persona.telefono + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.fec_Ingreso + '</td>' +
                '<td>' + empleado.estatus + '</td>' +
                '</tr>';
            cuerpo += registro;
        } else if (estatus == 1 && empleado.estatus == 1) {
            let registro =
                '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
                '<td>' + empleado.persona.nombres + '</td>' +
                '<td>' + empleado.persona.a_Paterno + '</td>' +
                '<td>' + empleado.persona.a_Materno + '</td>' +
                '<td>' + empleado.persona.fec_Nacimiento + '</td>' +
                '<td>' + empleado.persona.genero + '</td>' +
                '<td>' + empleado.persona.calle + '</td>' +
                '<td>' + empleado.persona.colonia + '</td>' +
                '<td>' + empleado.persona.numero + '</td>' +
                '<td>' + empleado.persona.estado + '</td>' +
                '<td>' + empleado.persona.ciudad + '</td>' +
                '<td>' + empleado.persona.cod_Postal + '</td>' +
                '<td>' + empleado.persona.curp + '</td>' +
                '<td>' + empleado.persona.rfc + '</td>' +
                '<td>' + empleado.persona.email + '</td>' +
                '<td>' + empleado.persona.telefono + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.fec_Ingreso + '</td>' +
                '<td>' + empleado.estatus + '</td>' +
                '</tr>';
            cuerpo += registro;
        }
    });
    document.getElementById("tbEmpleado").innerHTML = cuerpo;
}


export function revisarSeleccion() {
    let checkbox = document.getElementById("chkStatus");
    if (checkbox.checked) {
        cargarTable(0);
    } else {
        cargarTable(1);
    }
    
}

export function validarEstatus(estatus) {
    if (estatus == 1) {
        cargarTable(1);
    } else if (estatus == 0) {
        cargarTable(0);
    }

}

 export function BuscarEmpleado() {
    let datoBusqueda = document.getElementById("campoBusqueda").value;
    let resultados = [];

    empleados.forEach(function(empleado) {
        if (
            empleado.persona.nombres.includes(datoBusqueda) ||
            empleado.persona.a_Paterno.includes(datoBusqueda) ||
            empleado.persona.a_Materno.includes(datoBusqueda) ||
            empleado.persona.genero.includes(datoBusqueda) ||
            empleado.persona.fec_Nacimiento.includes(datoBusqueda) ||
            empleado.persona.curp.includes(datoBusqueda) ||
            empleado.persona.rfc.includes(datoBusqueda) ||
            empleado.persona.email.includes(datoBusqueda) ||
            empleado.persona.estado.includes(datoBusqueda) ||
            empleado.persona.ciudad.includes(datoBusqueda) ||
            empleado.persona.cod_Postal.includes(datoBusqueda) ||
            empleado.persona.calle.includes(datoBusqueda) ||
            empleado.persona.telefono.includes(datoBusqueda) ||
            empleado.id_Empleado.includes(datoBusqueda) ||
            empleado.puesto.includes(datoBusqueda) ||
            empleado.fec_Ingreso.includes(datoBusqueda) ||
            empleado.sal_Mensual.includes(datoBusqueda) 
        ) {
            resultados.push(empleado);
        }
    });

    let cuerpo = ""; // Inicializar la variable fuera del bucle
    resultados.forEach(function(empleado) {
        let registro =
            '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>'+empleado.persona.nombres+ '</td>'+
            '<td>'+empleado.persona.a_Paterno+ '</td>' +
            '<td>'+empleado.persona.a_Materno+ '</td>' +
            '<td>'+empleado.persona.genero+'</td>'+
            '<td>'+empleado.persona.fec_Nacimiento+'</td>'+
            '<td>'+empleado.persona.curp+'</td>'+
            '<td>'+empleado.persona.rfc+'</td>'+
            '<td>'+empleado.persona.email+'</td>'+
            '<td>'+empleado.persona.estado+'</td>'+
            '<td>'+empleado.persona.ciudad+'</td>'+
            '<td>'+empleado.persona.cod_Postal+'</td>'+
            '<td>'+empleado.persona.calle+'</td>'+
            '<td>'+empleado.persona.telefono+'</td>'+
            '<td>'+empleado.id_Empleado+'</td>'+
            '<td>'+empleado.puesto+'</td>'+
            '<td>'+empleado.fec_Ingreso+'</td>'+
            '<td>'+empleado.sal_Mensual+'</td>'+
            '<td>' + empleado.estatus + '</td>' +
            '</tr>';
        cuerpo += registro;
    });
    document.getElementById("tbEmpleado").innerHTML=cuerpo;
}

