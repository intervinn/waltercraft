import Navbar from "@/components/Fragments/Navbar";


export default function Home() {
  return (
    <div className="bg-bg min-h-screen w-screen flex flex-col text-white">
      <Navbar/>
      <div className="flex flex-row w-full ml-64 mt-12">
        <div className="flex flex-col">
          <h1 className="text-[64px] font-black">WaterCraft</h1>
        </div>
      </div>
    </div>
  )
}