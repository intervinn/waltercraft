import { jbmono } from "@/app/layout"

export interface ListItemProps {
    index: string,
    content: string,
    captions?: string
}

export default function ListItem({index, content, captions}: ListItemProps) {
    return (
        <div className="flex flex-row items-center">
            <span className={`text-4xl bg-[#0F131E] px-5 py-3 m-2 rounded-3xl font-extrabold ${jbmono.className}`}>{index}</span>
            <span className="text-3xl font-bold">{content}</span>
            <span className="ml-1 text-xl">{captions}</span>
        </div>
    )
}