'use client'

import { Card, Pokemon } from "@/components/card";
import { useState, useEffect  } from "react";
import {api} from "./constants/api"
import Image from "next/image";
import title from "../assets/title.png";
import Link from "next/link";

export default function Home() {
  const [cardsData, setCardsData] =  useState<Pokemon[]>([]);
  const [error, setError] = useState();
  const [page, setPage] = useState<string>("")

  useEffect(() =>{
    api.get(`pokemon?limit=10&offset=${page}`).then((res) => {
       res.data.results.forEach((pokemon: { url: string; name : string;}) => {
         api.get(pokemon.url.replace('https://pokeapi.co/api/v2/', ''))
         .then((info) => {
           console.log(info.data)
           let newlist = cardsData;
            api.get(`pokemon-species/${info.data.id}`)
            .then((rate) => {
              console.log(rate.data.capture_rate);
              newlist.push({name: info.data.name, id: info.data.id, image: "", capture_rate: rate.data.capture_rate});
              setCardsData(newlist);
            })
         })
       });
     })
     
     .then (()  => {
       cardsData.sort();
      })

   }, [page])

  return (
    <div className="h-screen pl-42 pr-42" style={{backgroundImage: `url("https://wallup.net/wp-content/uploads/2017/11/17/301412-Pokemon.jpg")`}}>
      <div className="pl-42 pr-42 flex items-center justify-between">
        <Image src={title} alt="" className="w-[180px]"/>
        <div className="flex justify-between w-72">
          <Link className="font-bold text-[18px] hover:text-blue-900" href={""}>Capture Pokemons</Link>
          <Link className="font-bold text-[18px] hover:text-blue-900" href={""}>My team</Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {cardsData.map((item, index) => {
            return( 
              <Card 
                key={index}
                id={item.id}
                name={item.name} 
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                capture_rate={item.capture_rate}
              />
            );
        })}
      </div>
    </div>
  );
}
