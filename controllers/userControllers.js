import Usuario from "../models/Usuarios.js";

//CREAR
const agregar = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, ok: "SI", msg: "Registro creado correctamente." });
    } catch (error) {
        console.log(error);

    }
}


//leer get
const listar = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);

}

// ELIMINAR
const eliminar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;
    //console.log(id);


    // validar si exiten  el registros
    const usuario = await Usuario.findById(id);
    console.log(usuario);

    if (!usuario) {
        const error = new Error("Registro no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });
        //Capturar los datos del formulario
        
    }
    try {
        await usuario.deleteOne();
        res.json({ msg: "Registro eliminado correctamente", ok: "SI" });

    } catch (error) {
        console.log(error);

    }
}


const editar = async (req, res) => {
    //recibir los parametros por la url
    const { id } = req.params;
    //console.log(id);

    //validar si existe el registro
    const usuario = await Usuario.findById(id);
    console.log(usuario);

    if (!usuario) {
        const error = new Error("Registro no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });

    }
    // capturar los datos del formulario 
    usuario.baile = req.body.baile || usuario.baile
    usuario.nombre = req.body.nombre || usuario.nombre
    usuario.apellidos = req.body.apellidos || usuario.apellidos
    usuario.edad = req.body.edad || usuario.edad
    usuario.genero = req.body.genero || usuario.genero
    usuario.celular = req.body.celular || usuario.celular

    try {
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, msg: "Registro actualizado correctamente,", ok: "si" });
    } catch (error) {
        console.log(error);
    }
}


// LEER UNO
const listaUno = async (req, res) => {
    // recibir los parametros por la url
    const { id } = req.params;

    // validar si existen registros
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Registro no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "SI" });

    }
    res.json(usuario);
}
export {
    agregar,
    listar,
    eliminar,
    editar,
    listaUno
}
