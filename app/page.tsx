import Footer from "@/components/Fragments/Footer";
import ListItem from "@/components/Fragments/ListItem";
import Navbar from "@/components/Fragments/Navbar";


export default function Home() {
  return (
    <div className="bg-bg min-h-screen w-screen flex flex-col text-white">
      <Navbar/>
      <div className="flex flex-row mt-12 justify-center">
        <div className="flex flex-col gap-2">
          <h1 className=" text-5xl font-black ml-40">WalterCraft</h1>
          <p className="text-xl w-80 ml-40">
          Не всем по душе крупные сервера. 
          Некоторые ищут небольшое локальное сообщество, 
          где можно реализовать свои идеи в полной мере.
          Одним из таких является WalterCraft.
          </p>
        </div>

      <div className="bg-line w-full relative h-fit flex flex-row">
        <img src="kotler.png" className="aspect-auto h-52"/>
        <img src="window.png" className="aspect-auto h-52"/>
        <img src="stair.png" className="aspect-auto h-52"/>
        <img src="sakuras.png" className="aspect-auto h-52 "/>
        <img src="pizza.png" className="aspect-auto h-52"/>
      </div>

      </div>

      <div className="flex flex-row mt-12 justify-center gap-12">

        <div className="flex bg-[#242836] flex-col text-white ml-40 w-fit px-5 rounded-2xl shadow-inner h-fit">
          <ListItem
            index="1"
            content="2022-2022"
            captions="(Золотой Ключик)"
          />

        <ListItem
            index="2"
            content="2022-2023"
          />

        <ListItem
            index="3"
            content="2023-2024"
          />

        <ListItem
            index="4"
            content="2024-202Х"
          />

        </div>

        <div className="flex flex-col">
          <h1 className="text-5xl font-black mr-40">Сезоны</h1>
          <p className="text-xl w-80 mr-40">
          Наш сервер существует как минимум с 2022 года, 
          был создан игроками энтузиастами с целью возродить активность 
          и улучшить концепцию любимого сервера. 
          Сезоны не начинаются по любому поводу, а ознаменовываются нововведениями.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-12 justify-center gap-12">
        <div className="flex flex-col gap-2">
          <h1 className=" text-5xl font-black ml-40">Проход</h1>
          <p className="text-xl w-80 ml-40">
          На данный момент зайти на сервер можно бесплатно. 
          Добавление в вайтлист происходит вручную. <br/> <br/>

          Подробнее на нашем <a href="https://discord.gg/gqrUH3hFhf">Discord-сервере</a>.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}