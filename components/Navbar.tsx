import React from "react"
import Link from "next/link"

const routes : Record<string, string> = {
    "Галерея": "/gallery"
  }
  

const Navbar : React.FC = () => {
    return (
        <nav className="w-full h-fit py-5 bg-slate-900 flex flex-row items-center">
            <Link className="text-3xl" href={"/"}>WaterCraft</Link>
          {(() => {
            let res : React.ReactNode[] = []

            for (const k in routes) {
              res.push(
                <div>
                  <Link className="mx-5" href={routes[k]}>{k}</Link>
                </div>
              )
            }

            return res
          })()}
        </nav>
    )
}

export default Navbar