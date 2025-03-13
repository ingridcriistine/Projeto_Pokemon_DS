import { Request, Response } from "express";
import PokemonService from "../services/pokemonService.ts"

class PokemonController{
    static async captureCharacter(req: Request, res: Response): Promise<any> {

        const {id} = req.params;

        try {
            if(await PokemonService.capture({id : Number(id)}))
                return res.status(201).json({message: "Pokemon capturado com sucesso!"});
    
            return res.status(400).json({message: "Não foi possível capturar o pokemon!"});
        } catch (error) {
            
            return res.status(400).json({message: "Pokemon já capturado!"});
        }

    }

    static async getTeam(req: Request, res: Response): Promise<any> {

        const list = await PokemonService.team();

        if(list.length < 1)
            return res.status(400).json({message: "Falha ao buscar o time!"});
            
        return res.status(201).json({data: list});
    }
}

export default PokemonController;