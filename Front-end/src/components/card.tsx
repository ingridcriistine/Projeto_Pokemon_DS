import Image from "next/image";

interface Pokemon {
    id: number,
    name: string,
    image: string,
    capture_rate: number
}

export const Card = (pokemon: Pokemon) => {
    return (
        <div className="bg-amber-200 w-[200px] p-4 h-[250px] m-4 rounded-2xl flex flex-col justify-center items-center">
            <h2>{pokemon.name}</h2>
            <Image src={pokemon.image} alt="Imagem do pokemon"/>
            <p>{pokemon.capture_rate}</p>
            <p>{pokemon.id}</p>
        </div>
    )
}