export default class Moto {
  constructor(precio, anio, estadoInventario = true) {
    this.precio = precio;
    this.anio = anio;
    this.estadoInventario = estadoInventario;
  }

  validarPrecio() {
    return this.precio >= 1000 && this.precio <= 20000;
  }

  validarAnio() {
    return this.anio >= 2000 && this.anio <= 2024;
  }
}



