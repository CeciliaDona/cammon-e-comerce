/* ---------------- Funciones globales ------------------*/

function agregar(e) {
    // e.preventDefault()

    console.log("agregar()");

    let refNombre = document.getElementById("nombre")
    let refPrecio = document.getElementById("precio")
    let refStock = document.getElementById("stock")
    let refMarca = document.getElementById("marca")
    let refCategoria = document.getElementById("categoria")
    let refDetalle1 = document.getElementById("descripcion-corta")
    let refDetalle2 = document.getElementById("descripcion-larga")
    let refEdadMin = document.getElementById("edad-min")
    let refEdadMax = document.getElementById("edad-max")
    let refImg = document.getElementById("foto")
    let refEnvio = document.getElementById("envio")

    let nombre = refNombre.value
    let precio = refPrecio.value
    let stock = refStock.value
    let marca = refMarca.value
    let categoria = refCategoria.value
    let detalle1 = refDetalle1.value
    let detalle2 = refDetalle2.value
    let edadMin = refEdadMin.value
    let edadMax = refEdadMax.value
    let img = refImg.value
    let envio = refEnvio.checked? "Si":"No"

    productos.push({
        nombre: nombre, 
        precio: precio, 
        stock: stock, 
        marca: marca, 
        categoria: categoria, 
        detalle1: detalle1, 
        detalle2: detalle2, 
        edadMin: edadMin, 
        edadMax: edadMax, 
        img: img, 
        envio: envio, 
    })

    console.log(productos)
    represetarTabla();
}


function represetarTabla() {
    var filasTabla = 
        '<tr>' + 
            '<th><b>Nombre</b></th>' + 
            '<th><b>Precio</b></th>' +
            '<th><b>Marca</th>' +
            '<th><b>Categoría</th>' +
            '<th><b>Descripción corta</th>' +
            '<th><b>Descripción larga</th>' +
            '<th><b>Stock</th>' +
            '<th><b>Edad desde</th>' +
            '<th><b>Edad hasta</th>' +
            '<th><b>Foto</th>' +
            '<th><b>Envío</th>' +
    '   </tr>';
    
    if(productos.length) {
    for(i=0; i<productos.length; i++) {
        filasTabla += 
            '<tr>' + 
                '<td>'+ productos[i].nombre + '</td>' + 
                '<td> $ ' + productos[i].precio.toLocaleString('es-ES') + '</td>' +
                '<td>' + productos[i].marca + '</td>' +
                '<td>' + productos[i].categoria + '</td>' +
                '<td>' + productos[i].detalle1 + '</td>' +
                '<td>' + productos[i].detalle2 + '</td>' +
                '<td>' + productos[i].stock + '</td>' +
                '<td>' + productos[i].edadMin + '</td>' +
                '<td>' + productos[i].edadMax + '</td>' +
                '<td><img width="50px" src="'+ productos[i].img + '" alt="'+ productos[i].nombre +'"></td>' +
                '<td>' + (productos[i].envio? "Si" : "No") + '</td>' +
            '</tr>';
        }
    }
    else filasTabla = '<h3>No se encontraron productos para mostrar</h3>'

    document.querySelector("table").innerHTML = filasTabla
}

function start() {
    console.warn(document.querySelector("title").innerText)
    represetarTabla()
}

