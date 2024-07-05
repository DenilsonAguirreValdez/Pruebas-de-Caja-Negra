import { expect } from 'chai';
import Moto from '../moto.js';
import realizarCompra from '../compra.js';

describe('Pruebas de Tablas de Decisiones', () => {
  it('Debe completar la compra con todas las condiciones válidas', () => {
    const moto = new Moto(15000, 2015);
    const resultado = realizarCompra(moto, true, true);
    expect(resultado).to.equal("Compra completada");
  });

  it('Debe fallar la compra si el pago no está confirmado', () => {
    const moto = new Moto(15000, 2015);
    const resultado = realizarCompra(moto, true, false);
    expect(resultado).to.equal("Pago no confirmado");
  });

  it('Debe fallar la compra si la dirección no es válida', () => {
    const moto = new Moto(15000, 2015);
    const resultado = realizarCompra(moto, false, true);
    expect(resultado).to.equal("Dirección no válida");
  });

  it('Debe fallar la compra si la moto no está en inventario', () => {
    const moto = new Moto(15000, 2015, false);
    const resultado = realizarCompra(moto, true, true);
    expect(resultado).to.equal("Moto no disponible");
  });
});
