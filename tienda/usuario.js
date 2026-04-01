//1.1 Se crea la clase Usuario
class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        return `Hola ${this.nombre} tu rol es: ${this.rol}`
    }
    estado() {
        //! Condicion ? - "Si es true" : "Si es falso"
        return this.activo ? "Activa" : "Inactiva";
    }
    desactivar() {
        this.activo = false;
        return `La cuenta del usuario ${this.nombre} ha sido desactivada `;
    }
    resumen() {
        return `El nombre del usuario es: ${this.nombre}, su Email es: ${this.email} ,tiene el rol de: ${this.rol}, se encuentra con la cuenta ${this.estado()}`
    }

}
// 1.2 Se crea la clase UsuarioVIP que hereda de Usuario
class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP")
        this.membresia = membresia;
    }
    saludo() {
        return `${super.saludo()} y tu membresia es: ${this.membresia}`;
    }
    beneficios() {
        let mensaje;
        if (this.membresia == "Gold") {
            mensaje = "Acceso a preventas exclusivas y un 20% de descuento."
        } else if (this.membresia == "Platinum") {
            mensaje = "Acceso a soporte de prioridad, regalos y un 25% de descuento"
        } else if (this.membresia == "Diamond") {
            mensaje = "Beneficios de Gold y Platinum, más soporte 24/7"
        }
        return `Los beneficios de la membresia ${this.membresia} son: ${mensaje}`
    }
}
//1.3 Se exportan las dos clases
export { Usuario, UsuarioVIP };
