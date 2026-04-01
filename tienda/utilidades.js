//total empieza en 0 
function calcularTotalCarrito(productos){
    return productos.reduce((total, producto)=> {
        return total + producto.calcularTotal();
    },0);
   
}
export {calcularTotalCarrito};