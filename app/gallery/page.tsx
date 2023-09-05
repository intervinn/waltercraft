import React from "react"

import images from "./images.json"
import Image from "next/image"

const Gallery : React.FC = () => {
    return (
        <div className="bg-slate-800 w-full h-fit text-white flex flex-col items-center">
            <h1 className="text-4xl pt-10">Наша галерея</h1>
            <hr className="w-full border-slate-100 my-5"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 h-fit">
            {images.map((v, i) => {
                return (
                    <div className="py-5 px-8 bg-slate-700 rounded-xl shadow-lg flex flex-col items-center" data-aos="fade-left" data-aos-delay={String(i * 100)}>
                        <img alt={v.title} src={v.img} className="object-fit transition ease-in hover:scale-110 rounded-2xl" />
                        <span className="text-2xl text-slate-300 font-mono mt-5">{v.title}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Gallery