export default function Footer() {
    return (
        <div className="w-full bg-fg border-t-2 border-line flex flex-row">
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <img src="logo.png" className="aspect-square w-24 border-solid border-2 border-white rounded-2xl ml-32"/>
                    <span className="text-3xl font-bold text-white">WalterCraft</span>
                    <img src="github.png" className="aspect-auto h-9" />
                    <img src="discord.png" className="aspect-auto h-9" />
                </div>
            </div>
        </div>
    )
}