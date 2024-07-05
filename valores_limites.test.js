import { expect } from 'chai';
import Moto from '../moto.js';

describe('Pruebas de Valores Límites', () => {
  it('Debe validar precio mínimo', () => {
    const moto = new Moto(1000, 2015);
    expect(moto.validarPrecio()).to.be.true;
  });

  it('Debe invalidar precio justo fuera del límite inferior', () => {
    const moto = new Moto(999, 2015);
    expect(moto.validarPrecio()).to.be.false;
  });

  it('Debe validar precio máximo', () => {
    const moto = new Moto(20000, 2015);
    expect(moto.validarPrecio()).to.be.true;
  });

  it('Debe invalidar precio justo fuera del límite superior', () => {
    const moto = new Moto(20001, 2015);
    expect(moto.validarPrecio()).to.be.false;
  });

  it('Debe validar año mínimo', () => {
    const moto = new Moto(15000, 2000);
    expect(moto.validarAnio()).to.be.true;
  });

  it('Debe invalidar año justo fuera del límite inferior', () => {
    const moto = new Moto(15000, 1999);
    expect(moto.validarAnio()).to.be.false;
  });

  it('Debe validar año máximo', () => {
    const moto = new Moto(15000, 2024);
    expect(moto.validarAnio()).to.be.true;
  });

  it('Debe invalidar año justo fuera del límite superior', () => {
    const moto = new Moto(15000, 2025);
    expect(moto.validarAnio()).to.be.false;
  });
});



