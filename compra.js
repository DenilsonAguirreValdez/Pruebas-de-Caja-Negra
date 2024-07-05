import Moto from './moto.js';

export default function realizarCompra(moto, direccionValida, pagoConfirmado) {
  if (!moto.estadoInventario) {
    return "Moto no disponible";
  }
  if (!direccionValida) {
    return "Dirección no válida";
  }
  if (!pagoConfirmado) {
    return "Pago no confirmado";
  }
  return "Compra completada";
}
