import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecievedMessage({ }) {
    return <div className="flex pt-[2em] gap-[.5em]">
        <Avatar>
            <AvatarFallback>CN</AvatarFallback>
            <AvatarImage></AvatarImage>
        </Avatar>
        <div className="w-[20rem]">
            <div className="text-slate-100">
                Lrwitewitudisfjjsdfjsd jdfs jsfh sdkjhf jksdfh jksdh fkshk
            </div>
            <span className="text-[.5em] text-slate-300">05/13/23</span>
        </div>
    </div>;
}