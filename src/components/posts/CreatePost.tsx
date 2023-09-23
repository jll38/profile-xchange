"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

export default function CreatePost() {

    const [message, setMessage] = React.useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        console.log(message);
    }
    const handlePost = () => {
        console.log("Posting Message '" + message + "'");

        //Implement Post Logic when backend is done
        console.log("Clearing state...");
        (document.getElementById("messageTextArea") as HTMLTextAreaElement).value = "";
        setMessage("");
    }

  return (
    <div className="w-full h-[16rem] bg-black/25 rounded-[4rem] p-[2rem] flex flex-col gap-2">
      <div className="flex items-center gap-4 mb-4">
        {" "}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Label htmlFor="message">Say Anything</Label>
      </div>
      <Textarea
        id="messageTextArea"
        placeholder="What's going on?"
        className="text-slate-100 bg-transparent"
        onChange={handleChange}
      />
      <Button
        className={
          buttonVariants({ variant: "outline" }) + " text-black w-[5rem]"
        }
        onClick={handlePost}
      >
        Post
      </Button>
    </div>
  );
}
