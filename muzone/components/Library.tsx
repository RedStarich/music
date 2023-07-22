"use client";

import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";
import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";


interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
    songs
}) =>{
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser ();

    const onPlay = useOnPlay(songs);

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        return uploadModal.onOpen();


        // TODO: check for subscription
    }
    return (
        <div className="flex flex-col">
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-5
                    pt-4
                "
            >
                <div
                    className="
                        inline-flex
                        items-center
                        gap-x-2
                        text-neutral-400
                    "
                >
                    <TbPlaylist size={26}/>
                    <p
                        className="
                            font-medium
                            text-md                        
                        "
                    >
                        Your Library
                    </p>
                </div>
                <div
                    onClick={onClick}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hover:text-white
                        transition
                    "
                >
                    <AiOutlinePlus size={20}/>
                </div>
            </div>
            <div 
                className="
                    flex
                    flex-col
                    gap-y-2
                    mt-4
                    px-3
                "
            >
                {songs.map((item) => (
                    <MediaItem
                        onClick={(id: string)=> onPlay(id)}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
}
export default Library;