import { DataTypes} from 'sequelize'
import db from '../db/connection'


const Usuario = db.define('Usuario', {
    cedula: {
        type: DataTypes.STRING
    },

    nombre: {
        type: DataTypes.STRING
    },

    apellido: {
        type: DataTypes.STRING
    },

    edad: {
        type: DataTypes.STRING
    },

    telefono: {
        type: DataTypes.STRING
    },

    estado: {
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;