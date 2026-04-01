// 3.1 Importamos las clases de usuario.js y producto.js.
// Importamos la funcion de utilidades.js
import { Usuario, UsuarioVIP } from "./usuario.js";
import {Producto, ProductoDigital} from "./producto.js";
import { calcularTotalCarrito } from "./utilidades.js";

//3.2 Simular la tienda
// 1. Creación de 3 usuarios: Cliente regular, administrador, UsuarioVIP
const usuarioUno = new Usuario("Alejandra", "aleja@email.com");
const usuarioDos = new Usuario("Admin Alex", "admin@email.com","Administrador");
const usuarioTres = new UsuarioVIP("Ismael","isma@email.com","Diamond")
// 2. Creación de 4 productos
const productoUno = new Producto("Monitor 4K", 650000, "Tecnología");
const productoDos = new Producto("Escritorio en L", 350000, "Oficina");
const productoTres = new ProductoDigital("Curso de Spring Boot", 450000, "De por vida");
const productoCuatro = new ProductoDigital("Suscripción Directv Go", 64000, "Mensual");
// 3. Desactivar un usuario y verificar con resumen ()
console.log("---DESACTIVANDO UN USUARIO---");
console.log(usuarioUno.resumen());
console.log(usuarioUno.desactivar());
console.log(usuarioUno.resumen());
// 4. Aplicando un 20% de descuento a uno de los productos fisicos e imprimiendo el precio resultante
console.log("---APLICANDO 20% DE DESCUENTO---");
let precioDescuento = productoUno.aplicarDescuento(20);
console.log(precioDescuento);
console.log(`El precio original era de: $${productoUno.precio}`);
// 5. Imprimiendo tarjeta para todos los productos.
console.log("---TARJETAS PRODUCTOS---");
// Introduzco los productos en un array
const productosC = [productoUno, productoDos, productoTres, productoCuatro]
productosC.forEach(produc => console.log(produc.tarjeta()));
// 6. Imprimiendo resumen para todos los usuarios
console.log("---RESUMEN DE USUARIOS---");
//Introduzco los usuarios en un array
const listadoUsuarios = [ usuarioUno, usuarioDos, usuarioTres]
listadoUsuarios.forEach(u => console.log(u.resumen()));
// 3.3 Reto Adicional
console.log("---TOTAL CARRITO---");
console.log(`El valor total de los productos del carrito es: $${calcularTotalCarrito(productosC)}`);



// (CHECKPOINTS DONDE VERIFIQUE QUE TODO FUNCIONA)
//Checkpoint 1 (verifico y funciona)
// let usuario1 = new Usuario("Maira", "mai@email.com", "admin");
// let usuario2 = new Usuario("Juan", "juan@email.com")
// console.log("--Usuario1--");
// console.log(usuario1.saludo());
// console.log(usuario1.resumen());
// console.log("--Usuario2--");
// console.log(usuario2.saludo());
// console.log(usuario2.resumen());

//Checkpoint 2 (verifico y funciona)
// let usuarioVip1 = new UsuarioVIP("Alejandra", "alejandra@email.com", "Gold");
// console.log(usuarioVip1.saludo());
// console.log(usuarioVip1.resumen());
// console.log(usuarioVip1.desactivar());
// console.log(usuarioVip1.resumen());
// console.log(usuarioVip1.beneficios());

//Checkpoint 3 (verifico y funciona)
// let producto1 = new Producto("Almohada",22500,"Hogar");
// let producto2 = new Producto("Audifonos", 35700, "Tecnología");
// console.log(producto1.tarjeta());
// console.log(producto2.tarjeta());
//Aplicando descuento
// let precioDescuento = producto1.aplicarDescuento(25);
// console.log(precioDescuento);
// console.log(`El precio original es $${producto1.precio}`);

//Checkpoint 4 (verifico y funciona)
// let producto3 = new Producto("Mouse Inalámbrico",60000,"Tecnología")
// let productoDigital1 = new ProductoDigital("Suscripción Netfilix",29900,"Mensual");
// console.log(`Precio producto normal con IVA ${producto3.calcularTotal()}`);
// console.log(`Precio producto digital excento de IVA ${productoDigital1.calcularTotal()}`);
// console.log("---COMPARACIÓN PRODUCTO NORMAL Y PRODUCTO DIGITAL");
// console.log(producto3.tarjeta());
// console.log(productoDigital1.tarjeta());


