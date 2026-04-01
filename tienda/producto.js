//2.1 Se crea la clase Producto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal() {
        return this.precio * 1.19;
    }
    aplicarDescuento(porcentaje) {
        const descuento = (this.precio * porcentaje) / 100;
        const precioFinal = this.precio - descuento;
        return `El precio de ${this.nombre} con un descuento del ${porcentaje}% es $${precioFinal} pesos`
    }
    resumen() {
        `El producto ${this.nombre} de la categoria ${this.categoria} tiene un precio base de ${this.precio}`
    }
    tarjeta() {
        const precioIVA = this.calcularTotal().toLocaleString("es-Co");
        return `--- TARJETA PRODUCTO ---\n🛒 Nombre del Producto: ${this.nombre}\nCategoría: ${this.categoria}\nPrecio con IVA Incluido: $${precioIVA}\n-----------`;
    }
}
// 2.2 Se crea la clase ProductoDigital que hereda de Producto
class ProductoDigital extends Producto{
    constructor(nombre, precio, licencia){
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }
    calcularTotal(){
        return this.precio
    }
       tarjeta() {
        const precioF = this.calcularTotal().toLocaleString("es-Co");
        return `--- TARJETA PRODUCTO ---\n🛒 Nombre del Producto: ${this.nombre} \nCategoría: ${this.categoria}\n Licencia: ${this.licencia}\n Precio excento de IVA: $${precioF}\n-----------`;
    }
}
//2.3 Se exportan las dos clases
export {Producto, ProductoDigital};

