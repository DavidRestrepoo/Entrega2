const request = require('supertest');
const mongoose = require('mongoose');
//const Usuario = require('../models/Users')
import usuarios from '../models/Usuarios.js';

//Importar app de index.js
import app from '../index'
import Usuario from '../models/Usuarios.js';
//const app = require('../index')

//Configuración de las pruebas
beforeAll(async ()=>{
  const url = process.env.MONGO_URI
  await mongoose.connect(url, { useNewUrlParser: true});
});

//prueba de integracion el endopoint get usuarios
describe('Get /api/users', ()=>{
  it('Deberias obtener todos los usuarios', async () =>{
    //Crear algunos usuarios
    const usuarios = [
      { nombre: 'david', apellidos: 'ochoa', edad:20, celular:3124567832, baile: 'tango', genero:'Femenino' },
    { nombre: 'andre', apellidos: 'silva', edad:20, celular:31245678342, baile: 'hip hop', genero:'Masculino' }
    ];
    await usuarios.insertMany(usuarios);

    //Hacer solicitud Get a /usuarios
    const response = await request(app).get('/api/users');

    //Verificar que la respuesta tenga status 200
    expect(response.status).toBe(200);

    //Verificar que la respuesta tenga los usuarios creados
    expect(response.body).toHaveLength(usuarios.length);
    expect(response.body[0].nombre).toBe(usuarios[0].nombre);
    expect(response.body[1].apellidos).toBe(usuarios[1].apellidos);
    //expect(response.body[2].edad).toBe(usuario[2].edad);
    //expect(response.body[3].celular).toBe(usuario[3].celular);
    //expect(response.body[4].deporte).toBe(usuario[4].deporte);
    //expect(response.body[5].genero).toBe(usuario[5].genero);
  });
});

//Limpiar las colecciones de la base de datos después de las pruebas
afterEach(async ()=>{
  await usuarios.deleteMany(Usuario);
});

//Cerrar la conexion con la base de datos despues de terminar las pruebas
afterAll(async ()=>{
  await mongoose.connection.close();
});


/* se vio en internet 
const mongoose = require('mongoose');   
const conection = require('../database/conection')
   
  
    it("test_successful_connection", async () => {
        const mockConnect = jest.spyOn(mongoose, "connect");
        await conection();
        expect(mockConnect).toHaveBeenCalled();
    });
    */