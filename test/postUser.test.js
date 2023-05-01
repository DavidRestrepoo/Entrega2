const request = require('supertest');

import app from "..";

describe('POST /api/users', ()=>{
  test('Debe crear un nuevo usuario', async()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombre: 'david',
        apellidos: 'ochoa',
        edad: 25,
        celular: 5555555555,
        baile: 'tango',
        genero: 'no registra'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.nombre).toEqual(david);
    expect(res.body.celular).toEqual(5555555555);

  });
  test('Deberia dar error si falta algun campo requerido', async ()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombre: 'david',
      
      });
    expect(res.statusCode).toEqual(200);
  });
});
