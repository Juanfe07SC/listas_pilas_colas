// Crear la lista con productos iniciales
let productos = ["Tomate", "Arroz", "Sal"];

// Función para agregar un nuevo producto
function agregarProducto(producto) {
    productos.push(producto);
    console.log(Producto "${producto}" agregado.);
}

// Función para mostrar todos los productos
function mostrarProductos() {
    console.log("Lista de productos:");
    productos.forEach((producto, index) => {
        console.log(${index + 1}. ${producto});
    });
}

// Función para eliminar un producto específico
function eliminarProducto(producto) {
    let indice = productos.indexOf(producto);
    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log(Producto "${producto}" eliminado.);
    } else {
        console.log(El producto "${producto}" no está en la lista.);
    }
}