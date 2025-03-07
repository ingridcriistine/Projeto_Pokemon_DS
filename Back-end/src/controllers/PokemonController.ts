import { Request, Response } from "express";

class PokemonController{
    static async captureCharacter(req: Request, res: Response): Promise<any> {
        return res.status(201).json();
    }

    static async getTeam(req: Request, res: Response): Promise<any> {

    }
}

export default PokemonController;