"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export interface Pokemon {
    id: number,
    name: string,
    image: string,
    capture_rate: number
}

export const Card = (pokemon: Pokemon) => {

    const [message, setMessage] = useState<string>("");

    const capturePokemon = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/capture/${pokemon.id}`);
            setMessage(`Pokémon ${response.data.pokemon.name} capturado com sucesso!`);
            window.location.reload();
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Erro ao capturar Pokémon!");
        }
    }

    return (
        <div
            className="border-2 shadow-xl border-blue-800 w-[250px] p-2 m-2 mt-0 rounded-2xl flex flex-col justify-center items-center hover:opacity-95"
            style={{ backgroundColor: 'rgba(255, 213, 79, 0.75)' }}
        >
            <h2 className="text-[18px] font-bold capitalize">{pokemon.name}</h2>
            <img src={pokemon.image} className="w-46" alt="Imagem do pokemon" width={1000} height={1000} />
            <p className="text-[15px]">Capture rate: {pokemon.capture_rate}</p>
            <p className="text-[15px]">Id: {pokemon.id}</p>
            <button className="m-4 font-bold bg-blue-800 text-white p-1 rounded-[5px] w-32 opacity-80 hover:opacity-100 cursor-pointer" onClick={capturePokemon}>Capture</button>
        </div>
    )
}
