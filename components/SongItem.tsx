"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types"
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
    const imagePath = useLoadImage(data);

    return (
        <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition pt-3" onClick={() => onClick(data.id)}>
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image className="object-cover" fill alt="Image" src={imagePath || "/images/liked.png"}/>
            </div>
            <div className="flex flex-col items-start w-full p-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm w-full truncate pb-4">
                    By {data.author}
                </p>
            </div>
            <div className="absolute bottom-24 right-4">
                <PlayButton/>
            </div>
        </div>
    )
}

export default SongItem