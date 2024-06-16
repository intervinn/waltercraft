export default function Footer() {
    return (
        <div className="w-full bg-fg border-t-2 border-line flex flex-row">
            <div className="flex flex-col ml-32">
                <div className="flex flex-row items-center mt-5">
                    <img src="logo.png" className=" aspect-square w-24 border-solid border-2 border-white rounded-2xl"/>
                    <span className="text-3xl font-bold text-white ml-2">WalterCraft</span>
                    <img src="github.png" className="aspect-auto h-9 ml-5" />
                    <img src="discord.png" className="aspect-auto h-9 ml-5" />
                </div>

                <p className="w-96 mt-2 text-[#95969E]">
                    Проект WalterCraft и связанные с ним проекты никак не связаны с Mojang Studios или Microsoft Corporation.
                </p>

                <p className="w-96 mt-4 text-[#95969E]">
                    WalterCraft and related projects are not affiliated with Mojang Studios or Microsoft Corporation in any way.
                </p>
            </div>
        </div>
    )
}