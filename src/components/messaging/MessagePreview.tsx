import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PreviewType = {
    user: string,
    activeUser: string
    setSelectedUser: (user: string) => void
}
export function MessagePreview({ user, activeUser, setSelectedUser }: PreviewType) {

    const handleClick = () => {
        setSelectedUser(user)
    }
    return <button
        onClick={handleClick}
        className={`overflow-hidden border-b border-white w-full px-[.25em] py-[1em] flex gap-[2em] hover:bg-black/20 ${activeUser === user ? "bg-black/20" : " "}`}>
        <div className="flex gap-[.7em]">
            <Avatar>
                <AvatarFallback className="text-slate-800">CN</AvatarFallback>
                <AvatarImage></AvatarImage>
            </Avatar>
            <div className="w-full">
                <div className="w-full text-left">User</div>
                <div className="w-[70%] text-ellipsis overflow-hidden whitespace-nowrap text-[.75em]">
                    lorem ipsum placeholder message
                </div>
            </div>
        </div>
    </button>;
}