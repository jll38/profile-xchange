import { ReplyDialog } from "./replyDialog";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type PostProps = {
  bg: boolean;
};

export function Post({bg} : PostProps) {

  return (
    <div className={`w-full min-h-[14em] ${bg ? "bg-black/25" : ""} rounded-[2rem] sm:pt-[3em] p-[2rem]`}>
      <div className="flex items-center gap-4 mb-2">
        {" "}
        <Avatar>
          <AvatarImage />
          <AvatarFallback className="bg-slate-200 text-slate-800 ">
            CN
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-[.8em]">First Last</div>
          <div className="text-[.6em] text-slate-300">@username</div>
        </div>
      </div>
      <div className="text-[.75em]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
      <div className="flex gap-4">
        <button>
          <i className="fa-regular fa-thumbs-up"></i>
        </button>
        <ReplyDialog />
        <button>
          {" "}
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
}
