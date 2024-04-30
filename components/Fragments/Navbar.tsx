
export default function Navbar() {
    return (
        <div className="w-full bg-fg border-b-2 border-line h-24 static flex flex-row">
            <img src="logo.png" className="aspect-square w-24 border-solid border-2 border-white rounded-2xl relative top-5 ml-64"/>
            <div className="h-full flex items-center justify-center ml-5">
                <a className="text-[#ACACAC] text-2xl">Gallery</a>
            </div>
            <div className="h-full flex items-center justify-center ml-10">
                <a className="text-[#ACACAC] text-2xl">FAQ</a>
            </div>
            <div className="h-full flex items-center justify-center ml-10">
                <a className="text-[#ACACAC] text-2xl">Blog</a>
            </div>
        </div>
    )
}