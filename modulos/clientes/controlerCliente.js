/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */




let cliente = {};
let clientes = [];
let indiceClienteSeleccionado;

fetch("modulos/clientes/dataCliente.json")
        .then(
                response => {
                    return response.json();
                })
        .then(
                function (jsondata) {
                    clientes = jsondata;
                    loadTable(1);
                }
        );

export function addCliente() {

    let fechar, dia, mes, annio;
    let cliente = {};
    let persona = {};
    let folio,
            nombre,
            apellido_pat,
            apellido_mat,
            fecha_nac,
            cod_pos,
            direccion,
            ciudad,
            estado,
            curp,
            rfc,
            telefono,
            correo,
            fecha_registro,
            genero,
            foto;

    nombre = document.getElementById("txtnombre").value;
    apellido_pat = document.getElementById("txtapellido_paterno").value;
    apellido_mat = document.getElementById("txtapellido_materno").value;
    fecha_nac = document.getElementById("txtfecha_nacimiento").value;
    cod_pos = document.getElementById("txtcodigo_postal").value;
    direccion = document.getElementById("txtdireccion").value;
    ciudad = document.getElementById("txtciudad").value;
    estado = document.getElementById("txtestado").value;
    curp = document.getElementById("txtcurp").value;
    rfc = document.getElementById("txtrfc").value;
    telefono = document.getElementById("txttelefono").value;
    correo = document.getElementById("txtcorreo_electronico").value;
    foto = document.getElementById("txtfoto").file;

    let gen = document.querySelector('input[name="genero"]:checked').value;

    switch (gen) {

        case "femenino":
            genero = 1;
            break;
        case "masculino":
            genero = 2;
            break;
        case "nobinario":
            genero = 3;
            break;
    }

    persona.nombre = nombre;
    persona.apellido_paterno = apellido_pat;
    persona.apellido_materno = apellido_mat;
    persona.genero = genero;
    persona.fecha_nacimiento = fecha_nac;
    persona.codigo_postal = cod_pos;
    persona.direccion = direccion;
    persona.ciudad = ciudad;
    persona.estado = estado;
    persona.curp = curp;
    persona.rfc = rfc;
    persona.telefono = telefono;
    persona.correo_electronico = correo;
    cliente.persona = persona;

    fechar = new Date();
    annio = fechar.getFullYear();

    if ((fechar.getMonth() + 1) < 10)
        mes = "0" + (fechar.getMonth() + 1);
    else
        mes = "" + (fechar.getMonth() + 1);

    if ((fechar.getDate()) < 10)
        dia = "0" + (fechar.getDate());
    else
        dia = "" + (fechar.getDate());


    fecha_registro = annio + "-" + mes + "-" + dia;

    folio = "" + nombre.charAt(0) + apellido_pat.charAt(0) + annio + mes + dia;

    cliente.estatus = 1;
    cliente.foto = foto;
    cliente.folio = folio;
    cliente.fecha_registro = fecha_registro;

    clientes.push(cliente);
    loadTable(1);
}

export function loadTable(estatus) {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let genero = cliente.persona.genero;
        if (estatus == 1 && cliente.estatus == 1) {
            let registro =
                    '<tr onclick="moduloCliente.seleccionarCliente(' + clientes.indexOf(cliente) + '); ">' +
                    '<td>' + cliente.folio + '</td>' +
                    '<td>' + cliente.persona.nombre + '</td>' +
                    '<td>' + cliente.persona.apellido_paterno + '</td>' +
                    '<td>' + cliente.persona.apellido_materno + '</td>' +
                    '<td>' + mostrarGenero(genero) + '</td>' +
                    '<td>' + cliente.persona.fecha_nacimiento + '</td>' +
                    '<td>' + cliente.persona.direccion + '</td>' +
                    '<td>' + cliente.persona.ciudad + '</td>' +
                    '<td>' + cliente.persona.estado + '</td>' +
                    '<td>' + cliente.persona.codigo_postal + '</td>' +
                    '<td>' + cliente.persona.curp + '</td>' +
                    '<td>' + cliente.persona.rfc + '</td>' +
                    '<td>' + cliente.fecha_registro + '</td>' +
                    '<td>' + cliente.persona.telefono + '</td>' +
                    '<td>' + cliente.persona.correo_electronico + '</td>' +
                    '<td>' + cliente.estatus + '</td></tr>';
            cuerpo += registro;
        } else if (estatus == 0 && cliente.estatus == 0) {
            let registro =
                    '<tr onclick="moduloCliente.seleccionarCliente(' + clientes.indexOf(cliente) + '); ">' +
                    '<td>' + cliente.folio + '</td>' +
                    '<td>' + cliente.persona.nombre + '</td>' +
                    '<td>' + cliente.persona.apellido_paterno + '</td>' +
                    '<td>' + cliente.persona.apellido_materno + '</td>' +
                    '<td>' + mostrarGenero(genero) + '</td>' +
                    '<td>' + cliente.persona.fecha_nacimiento + '</td>' +
                    '<td>' + cliente.persona.direccion + '</td>' +
                    '<td>' + cliente.persona.ciudad + '</td>' +
                    '<td>' + cliente.persona.estado + '</td>' +
                    '<td>' + cliente.persona.codigo_postal + '</td>' +
                    '<td>' + cliente.persona.curp + '</td>' +
                    '<td>' + cliente.persona.rfc + '</td>' +
                    '<td>' + cliente.fecha_registro + '</td>' +
                    '<td>' + cliente.persona.telefono + '</td>' +
                    '<td>' + cliente.persona.correo_electronico + '</td>' +
                    '<td>' + cliente.estatus + '</td></tr>';
            cuerpo += registro;
        }
    }
    );
    document.getElementById("tbCliente").innerHTML = cuerpo;
}


function mostrarGenero(genero) {
    switch (genero) {
        case 1:
            return "Femenino";
        case 2:
            return "Masculino";
        case 3:
            return "No binario";
        default:
            return "No definido";
    }
}

export function seleccionarCliente(indice) {

    document.getElementById("txtnombre").value = clientes[indice].persona.nombre;
    document.getElementById("txtapellido_paterno").value = clientes[indice].persona.apellido_paterno;
    document.getElementById("txtapellido_materno").value = clientes[indice].persona.apellido_materno;
    document.getElementById("txtfecha_nacimiento").value = clientes[indice].persona.fecha_nacimiento;
    document.getElementById("txtcodigo_postal").value = clientes[indice].persona.codigo_postal;
    document.getElementById("txtdireccion").value = clientes[indice].persona.direccion;
    document.getElementById("txtestado").value = clientes[indice].persona.estado;
    document.getElementById("txtciudad").value = clientes[indice].persona.ciudad;
    document.getElementById("txtcurp").value = clientes[indice].persona.curp;
    document.getElementById("txtrfc").value = clientes[indice].persona.rfc;
    document.getElementById("txttelefono").value = clientes[indice].persona.telefono;
    document.getElementById("txtcorreo_electronico").value = clientes[indice].persona.correo_electronico;
    let gen = clientes[indice].persona.genero;
    switch (gen) {
        case 1:
            document.getElementById("rdgenero1").checked = true;
            break;
        case 2:
            document.getElementById("rdgenero2").checked = true;
            break;
        case 3:
            document.getElementById("rdgenero3").checked = true;
            break;
    }
    indiceClienteSeleccionado = indice;
}

export function deleteCliente() {
    clientes[indiceClienteSeleccionado].estatus = 0;
    loadTable(1);
    clear();
}

export function validarEstatus(estatus) {
    let checkbox = document.getElementById('chkestatus');
    if (checkbox.checked)
        loadTable(0);
    else
        loadTable(1);
}

export function modificarCliente() {
    let nombre, apellido_pat, apellido_mat, genero, fechar, fecha_nac, cod_pos, direccion, estado, ciudad, curp, rfc, telefono, correo, ap, nom, annio, mes, dia, folio, cliente = {}, persona = {};
    let gen;
    nombre = document.getElementById("txtnombre").value;
    apellido_pat = document.getElementById("txtapellido_paterno").value;
    apellido_mat = document.getElementById("txtapellido_materno").value;
    genero = document.querySelector('input[name="genero"]:checked').value;
    fechar = clientes[indiceClienteSeleccionado].fecha_registro;

    
    persona.nombre = nombre;
    persona.apellido_paterno = apellido_pat;
    persona.apellido_materno = apellido_mat;

    switch (genero) {

        case "femenino":
            gen = 1;
            break;
        case "masculino":
            gen = 2;
            break;
        case "nobinario":
            gen = 3;
            break;
    }

    persona.genero = gen;
    persona.fecha_nacimiento = fecha_nac;
    persona.codigo_postal = cod_pos;
    persona.direccion = direccion;
    persona.estado = estado;
    persona.ciudad = ciudad;
    persona.curp = curp;
    persona.rfc = rfc;
    persona.telefono = telefono;
    persona.correo_electronico = correo;
    cliente.persona = persona;
    cliente.folio = folio;
    cliente.fecha_registro = fechar;
    cliente.estatus = 1;
    clientes[indiceClienteSeleccionado] = cliente;
    loadTable(1);
    clear();
}


export function buscar(estatus) {

    let databusqueda = document.getElementById("txtbusqueda").value;
    let cuerpo = "";
    clientes.forEach(function (cliente) {

        let genero = cliente.persona.genero;
        let folio = cliente.folio;
        let nombre = cliente.persona.nombre;
        let apellidopa = cliente.persona.apellido_paterno;
        let apellidoma = cliente.persona.apellido_materno;
        let curp = cliente.persona.curp;
        let rfc = cliente.persona.rfc;
        if (folio == databusqueda || nombre == databusqueda || apellidopa == databusqueda || apellidoma == databusqueda || curp == databusqueda || rfc == databusqueda) {
            if (estatus == 1 && cliente.estatus == 1) {
                let registro =
                        '<tr onclick="moduloCliente.seleccionarCliente(' + clientes.indexOf(cliente) + '); ">' +
                        '<td>' + cliente.folio + '</td>' +
                        '<td>' + cliente.persona.nombre + '</td>' +
                        '<td>' + cliente.persona.apellido_paterno + '</td>' +
                        '<td>' + cliente.persona.apellido_materno + '</td>' +
                        '<td>' + mostrarGenero(genero) + '</td>' +
                        '<td>' + cliente.persona.fecha_nacimiento + '</td>' +
                        '<td>' + cliente.persona.direccion + '</td>' +
                        '<td>' + cliente.persona.ciudad + '</td>' +
                        '<td>' + cliente.persona.estado + '</td>' +
                        '<td>' + cliente.persona.codigo_postal + '</td>' +
                        '<td>' + cliente.persona.curp + '</td>' +
                        '<td>' + cliente.persona.rfc + '</td>' +
                        '<td>' + cliente.fecha_registro + '</td>' +
                        '<td>' + cliente.persona.telefono + '</td>' +
                        '<td>' + cliente.persona.correo_electronico + '</td>' +
                        '<td>' + cliente.estatus + '</td></tr>';
                cuerpo += registro;
            } else
            if (estatus == 0 && cliente.estatus == 0) {
                let registro =
                        '<tr onclick="moduloCliente.seleccionarCliente(' + clientes.indexOf(cliente) + '); ">' +
                        '<td>' + cliente.folio + '</td>' +
                        '<td>' + cliente.persona.nombre + '</td>' +
                        '<td>' + cliente.persona.apellido_paterno + '</td>' +
                        '<td>' + cliente.persona.apellido_materno + '</td>' +
                        '<td>' + mostrarGenero(genero) + '</td>' +
                        '<td>' + cliente.persona.fecha_nacimiento + '</td>' +
                        '<td>' + cliente.persona.direccion + '</td>' +
                        '<td>' + cliente.persona.ciudad + '</td>' +
                        '<td>' + cliente.persona.estado + '</td>' +
                        '<td>' + cliente.persona.codigo_postal + '</td>' +
                        '<td>' + cliente.persona.curp + '</td>' +
                        '<td>' + cliente.persona.rfc + '</td>' +
                        '<td>' + cliente.persona.rfc + '</td>' +
                        '<td>' + cliente.fecha_registro + '</td>' +
                        '<td>' + cliente.persona.telefono + '</td>' +
                        '<td>' + cliente.persona.correo_electronico + '</td>' +
                        '<td>' + cliente.estatus + '</td></tr>';
                cuerpo += registro;
            }
        }
    });
    document.getElementById("tbCliente").innerHTML = cuerpo;
}