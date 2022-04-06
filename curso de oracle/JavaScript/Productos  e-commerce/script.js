var productos = document.querySelectorAll(".producto");

for( var i=0 ; i < productos.length ; i++){
    var producto  = productos[i];
    var nombreProducto = producto.textContent;
    console.log(nombreProducto);
}