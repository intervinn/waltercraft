import Aos from "aos"
import { useEffect } from "react"

import "aos/dist/aos.css"

const names = ["TomatTroll", "WaterCraft", "WalterCraft"]

const App = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full min-h-screen bg-slate-300 dark:bg-slate-800 flex flex-row justify-center items-center">
        <div className="flex flex-col w-96 text-black dark:text-white">
          <h1 data-aos-delay="200" data-aos="fade-left" className="text-5xl">
            {names[Math.floor(Math.random() * names.length)]} 
            <span data-aos-delay="500" data-aos="fade-down" className="text-6xl"> 3</span>
          </h1>
          <span data-aos-delay="300" data-aos="fade-left" className="text-xl">Лучший сервер для сна <hr></hr></span>

          <a data-aos-delay="400" data-aos="fade-left" href="https://discord.gg/p6tZ4E9sHf" className="p-2 mt-10 rounded-2xl bg-slate-400 dark:bg-slate-900 h-fit w-fit text-black dark:text-white text-3xl hover:underline">Дискорд</a>
        </div>
        <div className="w-1/2">
          <img alt="рутина админа" data-aos="fade-in" src="/portal.png" className="h-1/2 w-full shadow-2xl rounded-3xl"/>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default App