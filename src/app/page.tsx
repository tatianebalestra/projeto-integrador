import { db } from "@/db";
import { patients } from "@/db/schema";


export default async function Home() {

  return (
    <div className="h-full flex flex-col gap-5 place-content-center place-items-center w-full">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Public_health_icon_-_Noun_Project_6435.svg" className="w-48 h-auto" alt="Ícone saude"/>
      <div className="text-6xl font-semibold text-center">Bem vindo à clínica Help</div>
    </div>
  )
}
