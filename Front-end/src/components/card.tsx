export interface Pokemon {
    id: number,
    name: string,
    image: string,
    capture_rate: number
}

export const Card = (pokemon: Pokemon) => {
    return (
        <div
            className="border-2 border-blue-800 w-[250px] p-6 m-2 rounded-2xl flex flex-col justify-center items-center"
            style={{ backgroundColor: 'rgba(255, 213, 79, 0.75)' }} // Cor bg-amber-200 com 25% de opacidade
            >
            <h2 className="text-[18px] font-bold capitalize">{pokemon.name}</h2>
            <img src={pokemon.image} className="w-54" alt="Imagem do pokemon" width={1000} height={1000}/>
            <p className="text-[15px]">Capture rate: {pokemon.capture_rate}</p>
            <p className="text-[15px]">Id: {pokemon.id}</p>
            <button className="m-4 font-bold bg-blue-800 text-white p-1 rounded-[5px] w-32 opacity-80 hover:opacity-100 cursor-pointer">Capture</button>
        </div>
    )
}
