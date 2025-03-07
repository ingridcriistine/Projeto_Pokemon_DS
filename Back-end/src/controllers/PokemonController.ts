import { Request, Response } from "express";
import { PokemonService } from "../services/pokemonService.ts"

class PokemonController{
    static async captureCharacter(req: Request, res: Response): Promise<any> {

        if(PokemonService.captureCharacter)
        return res.status(201).json();
    }

    static async getTeam(req: Request, res: Response): Promise<any> {

    }
}

export default PokemonController;