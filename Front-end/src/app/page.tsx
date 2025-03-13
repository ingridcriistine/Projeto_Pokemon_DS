import { Card } from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Card id={2} name={"Pokemon"} image={""} capture_rate={15}/>
    </div>
  );
}
