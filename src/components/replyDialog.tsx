"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export function ReplyDialog({}) {
  const [replyMessage, setReplyMessage] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(e.target.value);
  }
  const handleReply = () =>{
    // IMPLEMENT WHEN BACKEND IS SETUP
    setReplyMessage("");
  }
  return (
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
              User <span className="text-slate-300 font-light">@username</span>
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
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
            <Textarea className="text-slate-900 mb-2" onChange={handleChange}></Textarea>
            <DialogTrigger asChild onClick={handleReply}>
            <Button className="bg-white text-slate-900 hover:bg-slate-200"
            >
              Reply
            </Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
