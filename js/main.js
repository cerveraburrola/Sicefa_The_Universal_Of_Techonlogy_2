

let moduloCliente;
function cargarModuloClientes() {
    fetch("modulos/clientes/vistaCliente.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/clientes/controlerCliente.js").then(
                                function (controller) {
                                    moduloCliente = controller;
                                }
                        );
                    }
            );
}


function limpiarFormulario() {
    document.getElementById("miFormulario").reset();
}



let moduloEmpleado;
function cargarModuloEmpleados() {
    fetch("modulos/empleados/vistaEmpleado.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/empleados/controlerEmpleado.js").then(
                                function (controller) {
                                    moduloEmpleado = controller;
                                }
                        );
                    }
            );
}

let moduloProductos;
function cargarModuloProductos(){
fetch("modulos/productos/vistaProductos.html")
        .then(
                    function (response){
                        return response.text();
                    }
        )
        .then(
                    function (html){
                        
                        document.getElementById("contenedorPrincipal").innerHTML=html;
                        import ("../modulos/productos/controladorProductos.js").then(
                                function (controller) {
                                    moduloProductos=controller;
                                }
                                );
                    }
        );
}

let moduloSucursal;
function cargarSucursal(){
    fetch("modulos/sucursal/vistaSucursal.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("../modulos/sucursal/controladorSucursal.js").then(
                                function (controller) {
                                    moduloSucursal = controller;
                                }
                        );
                    }
            );
}
