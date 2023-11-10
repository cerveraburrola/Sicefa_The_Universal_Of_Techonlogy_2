let productos=[];
let producto={};
let indiceProductoSeleccionado;
fetch("modulos/productos/dataProductos.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            productos = jsondata;
            console.log(productos);
            loadTable(1);
        }
        );



export function loadTable(estatus){
            let cuerpo="";
    productos.forEach(function(producto){
        if(estatus==1 && producto.estatus==1){
        let registro=
                '<tr onclick="moduloProductos.seleccionarProducto('+productos.indexOf(producto)+');">'+
                '<td>'+'<img src="' + producto.foto  + '" width="100" height="100">'+'</td>'+
                '<td>'+producto.nombre+'</td>'+
                '<td>'+producto.nombre_generico+'</td>'+
                '<td>'+producto.forma_farmaceutica+'</td>'+
                '<td>'+producto.unidad_de_medida+'</td>'+
                '<td>'+producto.presentacion+'</td>'+
                '<td>'+producto.principal_indicacion+'</td>'+
                '<td>'+producto.contraindicaciones+'</td>'+
                '<td>'+producto.concentracion+'</td>'+
                '<td>'+producto.unidades_en_envase+'</td>'+
                '<td>'+"$"+producto.precio_unitario+'</td></tr>';
        cuerpo+=registro;
    }
        else if (estatus==0 && producto.estatus==0){
                   let registro=
                '<tr onclick="moduloProductos.seleccionarProducto('+productos.indexOf(producto)+');">'+
                '<td>'+'<img src="' + producto.foto  + '" width="100" height="100">'+'</td>'+
                '<td>'+producto.nombre+'</td>'+
                '<td>'+producto.nombre_generico+'</td>'+
                '<td>'+producto.forma_farmaceutica+'</td>'+
                '<td>'+producto.unidad_de_medida+'</td>'+
                '<td>'+producto.presentacion+'</td>'+
                '<td>'+producto.principal_indicacion+'</td>'+
                '<td>'+producto.contraindicaciones+'</td>'+
                '<td>'+producto.concentracion+'</td>'+
                '<td>'+producto.unidades_en_envase+'</td>'+
                '<td>'+"$"+producto.precio_unitario+'</td></tr>';
        cuerpo+=registro;
        }
    });
    document.getElementById("tbProductos").innerHTML=cuerpo;
}

export function addProducto(){
    
    let producto={};
    let 
            nombre,
            nombre_generico,
            forma_farmaceutica,
            unidad_medida,
            presentacion,
            principal_indicacion,
            contraindicaciones,
            concentracion,
            unidades_envase,
            precio_unitario,
            foto,
            ruta_foto;
    
    nombre=document.getElementById("nombre").value;
    nombre_generico=document.getElementById("nombre_generico").value;
    forma_farmaceutica=document.getElementById("forma_farmaceutica").value;
    unidad_medida=document.getElementById("unidad_medida").value;
    presentacion=document.getElementById("presentacion").value;
    principal_indicacion=document.getElementById("principal_indicacion").value;
    contraindicaciones=document.getElementById("contraindicaciones").value;
    concentracion=document.getElementById("concentracion").value;
    unidades_envase=document.getElementById("unidades_envase").value;
    precio_unitario=document.getElementById("precio_unitario").value;
    foto=document.getElementById("foto").value;
    ruta_foto=document.getElementById("ruta_foto").value;
    
    
    producto.nombre=nombre;
    producto.nombre_generico=nombre_generico;
    producto.forma_farmaceutica=forma_farmaceutica;
    producto.unidad_medida=unidad_medida;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_envase=unidades_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.ruta_foto=ruta_foto;
    producto.estatus=1;
    productos.push(producto);
    loadTable(1);
}

export function seleccionarProducto(indice){
    document.getElementById("nombre").value=productos[indice].nombre;
    document.getElementById("nombre_generico").value=productos[indice].nombre_generico;
    document.getElementById("forma_farmaceutica").value=productos[indice].forma_farmaceutica;
    document.getElementById("unidad_medida").value=productos[indice].unidad_medida;
    document.getElementById("presentacion").value=productos[indice].presentacion;
    document.getElementById("principal_indicacion").value=productos[indice].principal_indicacion;
    document.getElementById("contraindicaciones").value=productos[indice].contraindicaciones;
    document.getElementById("concentracion").value=productos[indice].concentracion;
    document.getElementById("unidades_envase").value=productos[indice].unidades_envase;
    document.getElementById("precio_unitario").value=productos[indice].precio_unitario;
    document.getElementById("foto").value=productos[indice].foto;
    document.getElementById("ruta_foto").value=productos[indice].ruta_foto;
    
    indiceProductoSeleccionado=indice;
}

export function validarEstatus(){
    let checkbox = document.getElementById("clickestatus");
    if (checkbox.checked) {
        loadTable(1);
    }
    else{
        loadTable(0);
    }

}

export function deleteProducto(){
   productos[indiceProductoSeleccionado].estatus=0;
    loadTable(1);
    
}

export function modificarProducto(){
    let producto={};
    let 
            nombre,
            nombre_generico,
            forma_farmaceutica,
            unidad_medida,
            presentacion,
            principal_indicacion,
            contraindicaciones,
            concentracion,
            unidades_envase,
            precio_unitario,
            foto,
            ruta_foto;
    
    nombre=document.getElementById("nombre").value;
    nombre_generico=document.getElementById("nombre_generico").value;
    forma_farmaceutica=document.getElementById("forma_farmaceutica").value;
    unidad_medida=document.getElementById("unidad_medida").value;
    presentacion=document.getElementById("presentacion").value;
    principal_indicacion=document.getElementById("principal_indicacion").value;
    contraindicaciones=document.getElementById("contraindicaciones").value;
    concentracion=document.getElementById("concentracion").value;
    unidades_envase=document.getElementById("unidades_envase").value;
    precio_unitario=document.getElementById("precio_unitario").value;
    foto=document.getElementById("foto").value;
    ruta_foto=document.getElementById("ruta_foto").value;
    
    
    producto.nombre=nombre;
    producto.nombre_generico=nombre_generico;
    producto.forma_farmaceutica=forma_farmaceutica;
    producto.unidad_medida=unidad_medida;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_envase=unidades_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.ruta_foto=ruta_foto;
    producto.estatus=1;
    productos[indiceProductoSeleccionado]=producto;
    loadTable(1);
}

export function buscarProducto(){
    let filtro = document.getElementById("txtBusquedaProducto").value;
    
    let resultados = productos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (item){
        let registro =  
                       '<tr>' +
      '<td>' +'<img src="' + item.foto  + '" width="100" height="auto">' + '</td>' +
      '<td>' + item.nombre + '</td>' +
      '<td>' + item.nombre_generico + '</td>' +
      '<td>' + item.forma_farmaceutica + '</td>' +
      '<td>' + item.unidad_de_medida + '</td>' +
      '<td>' + item.presentacion + '</td>' +
      '<td>' + item.principal_indicacion + '</td>' +
      '<td>' + item.contraindicaciones + '</td>' +
      '<td>' + item.concentracion + '</td>' +
      '<td>' + item.unidades_en_envase + '</td>' +
      '<td>' +"$"+ item.precio_unitario + '</td>' +
      '<td>' + item.estatus + '</td></tr>';
    cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tbProductos").innerHTML = cuerpo;
}


//let item = {};
//let productos = [];
//let indexProductoSeleccionado;
//
//fetch("modulos/productos/dataProductos.json")
//        .then(response => {
//            return response.json();
//        })
//        .then(function (jsondata) {
//            productos = jsondata;
//            console.log(productos);
//            loadTable(1);
//        }
//        );
//
//export function loadTable(estatus) {
//
//    let cuerpo = "";
//    productos.forEach(function (item) {
//        if (estatus == 1 && item.estatus == 1) {
//            let registro =
//                    '<tr onclick="moduloProductos.selectProducto('+ productos.indexOf(item) + ');">' +
//                    '<td>' + '<img src="' + item.foto + '" width="100" height="auto">' + '</td>' +
//                    '<td>' + item.nombre + '</td>' +
//                    '<td>' + item.nombre_generico + '</td>' +
//                    '<td>' + item.forma_farmaceutica + '</td>' +
//                    '<td>' + item.unidad_de_medida + '</td>' +
//                    '<td>' + item.presentacion + '</td>' +
//                    '<td>' + item.principal_indicacion + '</td>' +
//                    '<td>' + item.contraindicaciones + '</td>' +
//                    '<td>' + item.concentracion + '</td>' +
//                    '<td>' + item.unidades_en_envase + '</td>' +
//                    '<td>' + "$" + item.precio_unitario + '</td>' +
//                    '<td>' + item.estatus + '</td>'+'</tr>';
//            cuerpo += registro;
//        } else if (estatus == 0 && item.estatus == 0) {
//            let registro =
//                    '<tr onclick="moduloProductos.selectProducto(' + productos.indexOf(item) + ');">'+
//                    '<td>' + '<img src="' + item.foto + '" width="100" height="auto">' + '</td>' +
//                    '<td>' + item.nombre + '</td>' +
//                    '<td>' + item.nombre_generico + '</td>' +
//                    '<td>' + item.forma_farmaceutica + '</td>' +
//                    '<td>' + item.unidad_de_medida + '</td>' +
//                    '<td>' + item.presentacion + '</td>' +
//                    '<td>' + item.principal_indicacion + '</td>' +
//                    '<td>' + item.contraindicaciones + '</td>' +
//                    '<td>' + item.concentracion + '</td>' +
//                    '<td>' + item.unidades_en_envase + '</td>' +
//                    '<td>' + "$" + item.precio_unitario + '</td>' +
//                    '<td>' + item.estatus + '</td>'+'</tr>';
//            cuerpo += registro;
//        }
//    }
//    );
//    document.getElementById("tbProductos").innerHTML = cuerpo;
//}
//
//export function addProducto() {
//    let item = {};
//    let  nombre,
//            nombre_generico,
//            forma_farmaceutica,
//            unidad_medida,
//            presentacion,
//            indicacion,
//            contraindicacion,
//            concentracion,
//            unidades_envase,
//            precio_unitario,
//            foto
//            ;
//    nombre = document.getElementById("nombre").value;
//    nombre_generico = document.getElementById("nombre_generico").value;
//    forma_farmaceutica = document.getElementById("forma_farmaceutica").value;
//    unidad_medida = document.getElementById("unidad_medida").value;
//    presentacion = document.getElementById("presentacion").value;
//    indicacion = document.getElementById("indicacion").value;
//    contraindicacion = document.getElementById("contraindicacion").value;
//    concentracion = document.getElementById("concentracion").value;
//    unidades_envase = document.getElementById("unidades_envase").value;
//    precio_unitario = document.getElementById("precio_unitario").value;
//    foto = document.getElementById("foto").value;
//
//    item.nombre = nombre;
//    item.nombre_generico = nombre_generico;
//    item.forma_farmaceutica = forma_farmaceutica;
//    item.unidad_medida = unidad_medida;
//    item.presentacion = presentacion;
//    item.indicacion = indicacion;
//    item.contraindicacion = contraindicacion;
//    item.concentracion = concentracion;
//    item.unidades_envase = unidades_envase;
//    item.precio_unitario = precio_unitario;
//    item.foto = foto;
//    item.estatus = 1;
//    productos.push(item);
//    loadTable(1);
//}
//
//export function selectProducto(index) {
//    document.getElementById("nombre").value = productos[index].nombre;
//    document.getElementById("nombre_generico").value = productos[index].nombre_generico;
//    document.getElementById("forma_farmaceutica").value = productos[index].forma_farmaceutica;
//    document.getElementById("unidad_medida").value = productos[index].unidad_medida;
//    document.getElementById("presentacion").value = productos[index].presentacion;
//    document.getElementById("indicacion").value = productos[index].indicacion;
//    document.getElementById("contraindicacion").value = productos[index].contraindicacion;
//    document.getElementById("concentracion").value = productos[index].concentracion;
//    document.getElementById("unidades_envase").value = productos[index].unidades_envase;
//    document.getElementById("precio_unitario").value = productos[index].precio_unitario;
//    document.getElementById("foto").value = productos[index].foto;
//    
//    indexProductoSeleccionado = index;
//}
//   
//   export function deleteProducto() {
//    productos[indexProductoSeleccionado].estatus = 0;
//    loadTable(1);
//}
//
//export function validarEstatus() {
//    let checkbox = document.getElementById('chkestatus');
//    if (checkbox.checked)
//        loadTable(1);
//    else
//        loadTable(0);
//}
//
//export function modificarProducto(){
// let  nombre,
//            nombre_generico,
//            forma_farmaceutica,
//            unidad_medida,
//            presentacion,
//            indicacion,
//            contraindicacion,
//            concentracion,
//            unidades_envase,
//            precio_unitario,
//            foto;
//    nombre = document.getElementById("nombre").value;
//    nombre_generico = document.getElementById("nombre_generico").value;
//    forma_farmaceutica = document.getElementById("forma_farmaceutica").value;
//    unidad_medida = document.getElementById("unidad_medida").value;
//    presentacion = document.getElementById("presentacion").value;
//    indicacion = document.getElementById("indicacion").value;
//    contraindicacion = document.getElementById("contraindicacion").value;
//    concentracion = document.getElementById("concentracion").value;
//    unidades_envase = document.getElementById("unidades_envase").value;
//    precio_unitario = document.getElementById("precio_unitario").value;
//    foto = document.getElementById("foto").value;
//    
//
//    item.nombre = nombre;
//    item.nombre_generico = nombre_generico;
//    item.forma_farmaceutica = forma_farmaceutica;
//    item.unidad_medida = unidad_medida;
//    item.presentacion = presentacion;
//    item.indicacion = indicacion;
//    item.contraindicacion = contraindicacion;
//    item.concentracion = concentracion;
//    item.unidades_envase = unidades_envase;
//    item.precio_unitario = precio_unitario;
//    item.foto = foto;
//    item.estatus = 1;
//    productos[indexProductoSeleccionado] = item;
//    loadTable(1);
//}
//
//export function buscarProducto(estatus){
//    let databusqueda = document.getElementById("txtBusquedaProducto").value;
//    let cuerpo = "";
//   
//   productos.forEach(function(item){
//    let nombre = item.nombre;
//    let nombre_generico = item.nombre_generico;
//    if(nombre == databusqueda && nombre_generico == databusqueda){
//        if(estatus == 1 && item.estatus == 1){
//            let registro =
//                    '<tr onclick="moduloProductos.selectProducto(' + productos.indexOf(item) + ');">'+
//                    '<td>' + '<img src="' + item.foto + '" width="100" height="auto">' + '</td>' +
//                    '<td>' + item.nombre + '</td>' +
//                    '<td>' + item.nombre_generico + '</td>' +
//                    '<td>' + item.forma_farmaceutica + '</td>' +
//                    '<td>' + item.unidad_de_medida + '</td>' +
//                    '<td>' + item.presentacion + '</td>' +
//                    '<td>' + item.principal_indicacion + '</td>' +
//                    '<td>' + item.contraindicaciones + '</td>' +
//                    '<td>' + item.concentracion + '</td>' +
//                    '<td>' + item.unidades_en_envase + '</td>' +
//                    '<td>' + "$" + item.precio_unitario + '</td>' +
//                    '<td>' + item.estatus + '</td>'+'</tr>';
//            cuerpo += registro;
//        }
//        else if(estatus == 0 && item.estatus == 0){
//            let registro =
//                    '<tr onclick="moduloProductos.selectProducto(' + productos.indexOf(item) + ');">'+
//                    '<td>' + '<img src="' + item.foto + '" width="100" height="auto">' + '</td>' +
//                    '<td>' + item.nombre + '</td>' +
//                    '<td>' + item.nombre_generico + '</td>' +
//                    '<td>' + item.forma_farmaceutica + '</td>' +
//                    '<td>' + item.unidad_de_medida + '</td>' +
//                    '<td>' + item.presentacion + '</td>' +
//                    '<td>' + item.principal_indicacion + '</td>' +
//                    '<td>' + item.contraindicaciones + '</td>' +
//                    '<td>' + item.concentracion + '</td>' +
//                    '<td>' + item.unidades_en_envase + '</td>' +
//                    '<td>' + "$" + item.precio_unitario + '</td>' +
//                    '<td>' + item.estatus + '</td></tr>';
//            cuerpo += registro;
//        }
//    }
//  });
//  document.getElementById("tbProductos").innerHTML = cuerpo;
//}