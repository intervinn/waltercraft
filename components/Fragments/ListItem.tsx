export interface ListItemProps {
    index: string,
    content: string,
    captions?: string
}

export default function ListItem({index, content, captions}: ListItemProps) {
    return (
        <div className="flex flex-row items-center">
            <span className="text-4xl bg-fg pl-3 pr-3 m-2 rounded-xl font-mono">{index}</span>
            <span className="text-2xl font-bold">{content}</span>
            <span className="ml-1">{captions}</span>
        </div>
    )
}