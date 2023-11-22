import { Request, Response } from 'express';
import Usuario from '../models/usuario';


export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();


    res.json({usuarios});

}

export const getUsuario = async (req: Request, res: Response) => {

    const { cedula } = req.params;

    const usuario = await Usuario.findByPk (cedula);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario para la cedula ${cedula}`
        })
    }

}

export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeTelefono = await Usuario.findOne({
            where: {
                Telefono: body.Telefono
            }
        });

        if (existeTelefono) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el telefono ' + body.Telefono
            });
        }

        const usuario = new Usuario(body);
        await usuario.save();

        res.json( usuario );
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el adminsitrador',
         })  
    }

   }


export const putUsuario = async (req: Request, res: Response) => {

    const { cedula } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk(cedula);
        if(!usuario) {
            return res.status(400).json({
                msg: 'No existe un usuario con la cedula ' + cedula
            });
        }

        await usuario.update(body);

        res.json(usuario);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el adminsitrador',
         })  
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {

    const { cedula } = req.params;

    const usuario = await Usuario.findByPk(cedula);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe un usuario con la cedula ' + cedula
        });
    }

    await usuario.update({estado: false});

    // await usuario.destroy();

    res.json(usuario);

}