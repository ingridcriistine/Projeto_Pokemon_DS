import { captureDto } from "../dto/captureDto.ts"
import { responseApiDto } from "../dto/responseApiDto.ts"
import { api } from "../constants/api.ts";
import { prisma } from '../lib/prisma.ts'

export default class PokemonService {
    async capture(dados : captureDto) {
        const pokeData = await api.get<responseApiDto>(`pokemon-species/${dados.id}`);
        const rate = await pokeData.data.capture_rate;

        let random : Number = Math.random() * 100;

        const pokemon = await prisma.Character.findUnique({
            where: {
                id: dados.id
            }
        });
        
        if(pokemon)
            throw Error("Esse pokemon já foi capturado!");

        if(random > rate) {
            return false;
        }

        await prisma.Character.create({
            data: {
                id: dados.id,
                name: pokeData.data.name,
                capture_rate: rate
            }
        })

        return true;
    }

    async team() {
        return await prisma.Character.findMany();
    }
}