import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    baile: {
      type: String,
      require: true,
      trim: true
    },
    nombre: {
      type: String,
      require: true,
      trim: true
    },
    apellido: {
      type: String,
      require: true,
      trim: true
    },
    edad: {
      type: String,
      require: true,
      trim: true
    },
    
    genero: {
      type: String,
      require: true,
      trim: true
    },
     
    celular: {
      type: Number,
      require: true,
      trim: true
    }
},{
    timestamps: true
});

const Usuario = mongoose.model("Usuario", userSchema);
export default Usuario;