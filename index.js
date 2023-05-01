import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/db.js';

//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';
import openApiConfiguration from './docs/swagger.js';


//Importación de rutas
import usersRoutes from "./routes/usersRoutes.js"


//Iniciamos el servidor express
const app = express()
app.use(express.json())//para leer los datos en formato json

//Iniciamos variables del entorno
dotenv.config();

//Conectar a BD mongo
conectarBD();

//Routing del API
app.use("/api/users", usersRoutes);

//Ruta de la documentación

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//obtenemos una variable de entorno
const PORT = process.env.PORT || 3000

//Lanzando el API
app.listen(PORT,()=>{
  console.log(`Api esta funcionando super bien en ${PORT} 😂`)
})

export default app;








/*const express = require('express')
const apiRouter = require('./server')
const app = express()
const morgan = require('morgan') // revisar por que hasta qui no dio el profe no explica
require('dotenv').config()// estraccion de la ruta nueva


//
// Middleware parametros de respuesta
app.use(morgan('dev'))
app.use(express.json())

// ruta principal 
app.get('/',(req,res)=>{
    res.send('Hola estas en la raiz')
})


//apiRouter nos reutilizara las rutas creadas
apiRouter(app)

const port=process.env.PORT || 3001 // variables de entorno 

// lanzamiento de api
app.listen(port,()=>{
    console.log('Api esta funcionando ' +port)

})
*/