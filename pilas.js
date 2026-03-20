let pila = [];
//agregar elementos a la pila 
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila);
//eliminar elementos de la pila
let elementoEliminado = pila.pop();
console.log(elementoEliminado);
// ver si la lista esta vacia
if (pila.length === 0){
    console.log("La pila esta vacia");
}