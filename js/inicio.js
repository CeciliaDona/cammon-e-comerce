/* ---------------- funciones globales ------------------*/
function represetarCards() {
    var cards = "";

    if(productos.length) {
    for(i=0; i<productos.length; i++) {
        cards += 
            '<section>' + 
                '<h3>'+ productos[i].nombre + '</h3>' + 
                '<img src="'+ productos[i].img + '" alt="'+ productos[i].nombre +'">' +
                '<p><b>Precio:</b>' + ' $ ' + productos[i].precio.toLocaleString('es-ES') + '</p>' +
                '<button><b>Agregar</b><i class="bi bi-cart4"></i></button>' +
                '<p><b>Marca: </b>' + productos[i].marca + '</p>' +
                '<p><b>Categoría: </b>' + productos[i].categoria + '</p>' +
                '<p><b>Detalle: </b>' + productos[i].detalle1 + '</p>' +
                '<p><b>Stock: </b>' + productos[i].stock + '</p>' +
                '<p><b>Envío: </b>' + (productos[i].envio? "Si" : "No") + '</p>' +
            '</section>';
        }
    }
    else cards += '<h3>No se encontraron productos para mostrar</h3>'

    document.querySelector(".card-container").innerHTML = cards
}

function start() {
    console.warn(document.querySelector("title").innerText)
    represetarCards()
}

