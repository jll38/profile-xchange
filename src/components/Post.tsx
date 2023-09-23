import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";

export function Post({ content: string }) {
  return (
    <div className="w-full min-h-[13em] bg-black/25 rounded-[2rem] p-[2rem]">
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
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <i className="fa-regular fa-comment"></i>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 text-white">
            <div className=" flex gap-2">
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-[.75em]">
                <div className="font-bold">
                  User{" "}
                  <span className="text-slate-300 font-light">@username</span>
                </div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
              </div>
            </div>
            <div>Replying to User</div>
            <div className=" flex gap-2">
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-[.75em] w-full">
                <Textarea className="text-slate-900 mb-2"></Textarea>
                <Button className="bg-white text-slate-900 hover:bg-slate-200">Reply</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <button>
          {" "}
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
}
