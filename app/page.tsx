import Navbar from "@/components/Navbar"
import { NextPage } from "next"

const names = ["TomatTroll", "WaterCraft", "WalterCraft"]

const Home : NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-800 flex flex-row justify-center items-center">
    <div className="flex flex-col w-96 text-white">
      <h1 data-aos-delay="200" data-aos="fade-left" className="text-5xl">
        {names[Math.floor(Math.random() * names.length)]} 
        <span data-aos-delay="500" data-aos="fade-down" className="font-extrabold text-7xl ml-2">3</span>
      </h1>
      <span data-aos-delay="300" data-aos="fade-left" className="text-xl">Лучший сервер для сна <hr></hr></span>
      <div data-aos-delay="400" data-aos="fade-left" className="flex flex-row mt-5">
        <a href="https://discord.gg/p6tZ4E9sHf"><img src="discord.png" className="object-scale-down w-10 h-10"/></a>
      </div>
      
    </div>
    <div className="w-1/2">
      <img alt="рутина админа" data-aos="fade-in" src="/portal.png" className="h-1/2 w-full shadow-2xl rounded-3xl"/>
    </div>
  </div>
)
}

export default Home