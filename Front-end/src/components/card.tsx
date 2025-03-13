import Image from "next/image";

interface Pokemon {
    id: number,
    name: string,
    image: string,
    capture_rate: number
}

export const Card = (pokemon: Pokemon) => {
    return (
        <div className="bg-amber-200 border-2 w-[200px] p-4 h-[250px] m-4 rounded-2xl flex flex-col justify-center items-center">
            <h2 className="text-[18px] font-bold mb-4">{pokemon.name}</h2>
            <Image src={pokemon.image} alt="Imagem do pokemon"/>
            <p className="mt-8 text-[15px]">Capture rate: {pokemon.capture_rate}</p>
            <p className="text-[15px]">Id: {pokemon.id}</p>
        </div>
    )
}