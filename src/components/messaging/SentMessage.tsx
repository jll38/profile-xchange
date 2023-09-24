import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SentMessage({ }) {
    return <div className="flex pt-[2em] gap-[.5em] justify-end">

        <div className="flex flex-col w-[20rem] justify-end">
            <div className="text-slate-100">
                Doing good, how are you?
            </div>
            <span className="text-[.5em] text-slate-300 text-right">05/13/23</span>
        </div>
        <Avatar>
            <AvatarFallback>CN</AvatarFallback>
            <AvatarImage></AvatarImage>
        </Avatar>
    </div>;
}