/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


let sucursal = {};
let sucursales = [];
let indiceSucursalSeleccionado;

export function loadTable(estatus) {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {
        if (estatus == 1 && sucursal.estatus == 1) {
            let registro =
                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + ');" >' +
                    '<td>' + sucursal.nom_sucursal + '</td>' +
                    '<td>' + sucursal.nom_dueño + '</td>' +
                    '<td>' + sucursal.rfc_titular + '</td>' +
                    '<td>' + sucursal.calle + '</td>' +
                    '<td>' + sucursal.colonia + '</td>' +
                    '<td>' + sucursal.estado + '</td>' +
                    '<td>' + sucursal.ciudad + '</td>' +
                    '<td>' + sucursal.longitud + '</td>' +
                    '<td>' + sucursal.latutud + '</td>' +
                    '<td>' + sucursal.cod_postal + '</td>' +
                    '<td>' + sucursal.telefono + '</td>' +
                    '<td>' + sucursal.estatus + '</td>' +
                    '</tr>';
            cuerpo += registro;

        } else if (estatus == 0 && sucursal.estatus == 0) {
            let registro =
                    '<tr onclick="moduloSucursal.seleccionarSucursal(' + sucursales.indexOf(sucursal) + '); ">' +
                    '<td>' + sucursal.nom_sucursal + '</td>' +
                    '<td>' + sucursal.nom_dueño + '</td>' +
                    '<td>' + sucursal.rfc_titular + '</td>' +
                    '<td>' + sucursal.calle + '</td>' +
                    '<td>' + sucursal.colonia + '</td>' +
                    '<td>' + sucursal.estado + '</td>' +
                    '<td>' + sucursal.ciudad + '</td>' +
                    '<td>' + sucursal.longitud + '</td>' +
                    '<td>' + sucursal.latutud + '</td>' +
                    '<td>' + sucursal.cod_postal + '</td>' +
                    '<td>' + sucursal.telefono + '</td>' +
                    '<td>' + sucursal.estatus + '</td>' +
                    '</tr>';
            cuerpo += registro;
        }
    });
    document.getElementById("tbPedido").innerHTML = cuerpo;
}
fetch("modulos/sucursal/dataSucursal.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            sucursales = jsondata;
            console.log(sucursales);
            loadTable(1);
        }
        );

export function agregarSucursal() {
    let sucursal = {};

    let nom_sucursal;
    let nom_dueño;
    let rfc_titular;
    let calle;
    let colonia;
    let estado;
    let ciudad;
    let longitud;
    let latutud;
    let cod_postal;
    let telefono;

    nom_sucursal = document.getElementById("nombres").value;
    nom_dueño = document.getElementById("dueño").value;
    rfc_titular = document.getElementById("rfc").value;
    calle = document.getElementById("calle").value;
    colonia = document.getElementById("col").value;
    estado = document.getElementById("estado").value;
    ciudad = document.getElementById("ciudad").value;
    longitud = document.getElementById("lon").value;
    latutud = document.getElementById("lat").value;
    cod_postal = document.getElementById("cp").value;
    telefono = document.getElementById("tel").value;

    sucursal.nom_sucursal = nom_sucursal;
    sucursal.nom_dueño = nom_dueño;
    sucursal.rfc_titular = rfc_titular;
    sucursal.calle = calle;
    sucursal.colonia = colonia;
    sucursal.estado = estado;
    sucursal.ciudad = ciudad;
    sucursal.longitud = longitud;
    sucursal.latutud = latutud;  // Corregido "latutud" a "latitud"
    sucursal.cod_postal = cod_postal;
    sucursal.telefono = telefono;
    sucursal.estatus=1;

    sucursales.push(sucursal);

    loadTable(1);
}




export function seleccionarSucursal(indice) {
    document.getElementById("nombres").value = sucursales[indice].nom_sucursal;
    document.getElementById("dueño").value = sucursales[indice].nom_dueño;
    document.getElementById("rfc").value = sucursales[indice].rfc_titular;
    document.getElementById("calle").value = sucursales[indice].calle;
    document.getElementById("col").value = sucursales[indice].colonia;
    document.getElementById("estado").value = sucursales[indice].estado;
    document.getElementById("ciudad").value = sucursales[indice].ciudad;
    document.getElementById("lon").value = sucursales[indice].longitud;
    document.getElementById("lat").value = sucursales[indice].latutud;
    document.getElementById("cp").value = sucursales[indice].cod_postal;
    document.getElementById("tel").value = sucursales[indice].telefono;

    indiceSucursalSeleccionado = indice;

}

export function deletaeSucursal() {
    sucursales[indiceSucursalSeleccionado].estatus = 0;
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
export function buscar() {
    let filtro = document.getElementById("campoBusqueda").value;

    let resultados = sucursales.filter(element => element.nom_dueño === filtro);
    let cuerpo = "";

    resultados.forEach(function (sucursal) {
        let registro =
                '<tr>' +
                '<td>' + sucursal.nom_sucursal + '</td>' +
                '<td>' + sucursal.nom_dueño + '</td>' +
                '<td>' + sucursal.rfc_titular + '</td>' +
                '<td>' + sucursal.calle + '</td>' +
                '<td>' + sucursal.colonia + '</td>' +
                '<td>' + sucursal.estado + '</td>' +
                '<td>' + sucursal.ciudad + '</td>' +
                '<td>' + sucursal.longitud + '</td>' +
                '<td>' + sucursal.latutud + '</td>' + // Corrección aquí: "latitud" en lugar de "latutud"
                '<td>' + sucursal.cod_postal + '</td>' +
                '<td>' + sucursal.telefono + '</td>' +
                '<td>' + sucursal.estatus + '</td>' +
                '</tr>';

        cuerpo += registro; // Concatenar el registro a la variable "cuerpo"
    });

    console.log(cuerpo);

    document.getElementById("tbPedido").innerHTML = cuerpo;
}

export function modificarSucursal() {
   let nom_sucu;
    let nom_due;
    let rfc_titu;
    let cal;
    let col;
    let es;
    let ci;
    let lon;
    let lat;
    let cod_p;
    let tele;
    
    let sucursal = {};
    nom_sucu=document.getElementById("nombres").value;
    cal=document.getElementById("calle").value;
    col=document.getElementById("col").value;
    ci=document.getElementById("ciudad").value;
    lon=document.getElementById("lon").value;
    lat=document.getElementById("lat").value;
    cod_p=document.getElementById("cp").value;
    es=document.getElementById("estado").value;
    nom_due = document.getElementById("dueño").value;
    rfc_titu = document.getElementById("rfc").value;
    tele = document.getElementById("tel").value;
    
    sucursal.nom_dueño = nom_due;
    sucursal.colonia = col;
    sucursal.cod_postal = cod_p;
    sucursal.estado = es;
    sucursal.longitud = lon;
    sucursal.latutud = lat;
    sucursal.ciudad = ci;
    sucursal.calle = cal;
    sucursal.rfc_titular = rfc_titu;
    sucursal.telefono = tele;
    sucursal.estatus = 1;

    sucursales[indiceSucursalSeleccionado] = sucursal;
    loadTable(1);
    clear();

}

