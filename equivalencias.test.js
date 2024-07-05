import { expect } from 'chai';
import Moto from '../moto.js';

describe('Pruebas de Partición de Equivalencias', () => {
  it('Debe validar precios dentro del rango permitido', () => {
    const motoValida = new Moto(15000, 2015);
    expect(motoValida.validarPrecio()).to.be.true;
  });

  it('Debe invalidar precios fuera del rango permitido', () => {
    const motoInvalida = new Moto(500, 2015);
    expect(motoInvalida.validarPrecio()).to.be.false;
  });

  it('Debe validar años dentro del rango permitido', () => {
    const motoValida = new Moto(15000, 2015);
    expect(motoValida.validarAnio()).to.be.true;
  });

  it('Debe invalidar años fuera del rango permitido', () => {
    const motoInvalida = new Moto(15000, 1995);
    expect(motoInvalida.validarAnio()).to.be.false;
  });
});
