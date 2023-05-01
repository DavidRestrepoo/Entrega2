
/*import express, { Router } from "express";
const router = express.Router();
import {agregar, listar,eliminar ,editar,listaUno } from "../controllers/userControllers.js";


router.get("/",listar);
router.get("/:id",listaUno);
router.post("/",agregar);
router.put("/:id",editar);
router.get("/:id",eliminar);

export default Router;

*/
import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listaUno,
} from '../controllers/userControllers.js';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: matriculas usuarios
 */

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         -nombre
*         -apellidos
*         -edad
*         -celular
*         -baile
*         -genero 
*       properties:
*         id:
*           type: string
*           description: id general automaticamente por mongo
*
*         nombre:
*           type: string
*           description: Nombre del usuario.
* 
*         apellidos:
*           type: string
*           description: apellidos del usuario.
*  
*         edad:
*           type: number,
*           description: edad del usuario.
*  
*         celular:
*           type: number,
*           description: celular del usuario.
*  
*         deporte:
*            type: string,
*            description: baile que practica el usuario.
*           
*         genero:
*            type: string,
*            description: genero del usuario.
*               
*       example:
*         nombre: Andre
*         apellidos: sanchez rodriguez
*         edad: 31
*         celular: 3105920829
*         deporte: tango
*         genero: binario
*/

//Ruta es para gestionar usuario.

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Agregar nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombre, apellidos, edad, celular, baile y genero son requeridos
 */

router.post('/', agregar);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', listar);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a consultar
 *     responses:
 *       200:
 *         description: usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: usuario con el ID especifico no fue encontrado
 */

router.get('/:id', listaUno);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: usuario actualizado exitosamente
 *       404:
 *         description: La usuario con el id especificado no fue modificado
 */

router.put('/:id', editar);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: usuario eliminado exitosamente
 *       404:
 *         description:  usuario con el id especificado no fue eliminado
 */

router.delete('/:id', eliminar);

export default router;




/*const express= require('express')
const router = express.Router()

const basespersonas=require('../bd/bdUsers.json')

//gestionar usuarios

// Obtener usuarios
router.get('/',(req,res)=>{
    res.json(basespersonas)
})

//crear usuarios
router.post('/',(req,res)=>{
    console.log(req,body)
    const {name,lastname,bornyear,gender,tall,age,profession}=req.body
    if(name && lastname && bornyear && gender && tall && age && profession){
       const id = basePersonas.length +1
       const newUser ={...req.body,id} // con los 3 puntos se puede aceder a todos lo que haya
     basePersonas.push(newUser)// ingresar usuarios
     res.json(basePersonas)
    } else {
     res.send("Error de la peticion")
    }
  })
  */




  

