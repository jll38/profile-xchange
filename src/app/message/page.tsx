"use client";
import { useState } from "react";
import { MessagePreview } from "./../../components/messaging/MessagePreview";
import Sidebar from "@/components/common/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecievedMessage } from "./../../components/messaging/RecievedMessage";
import { SentMessage } from "@/components/messaging/SentMessage";

export default function Message() {
  const [selectedUser, setSelectedUser] = useState("user2");

  return (
    <>
      <Sidebar />
      <main className="flex h-screen items-center justify-between p-0 sm:p-24 text-white z-20">
        <div className="h-screen w-[30rem] lg:flex flex-col items-center p-[2rem] hidden justify-around">
          <div className="w-full h-screen bg-black/25 rounded-[4rem] p-[2rem] flex flex-col items-center gap-2">
            <Input className="bg-transparent" placeholder="Search"></Input>
            <MessagePreview
              user={"user1"}
              activeUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
            <MessagePreview
              user={"user2"}
              activeUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>
        </div>
        <div className="h-screen w-full lg:flex flex-col items-center p-[2rem] hidden">
          <div className="w-full h-full bg-black/25 rounded-[4rem] p-[2rem] flex flex-col items-center justify-between gap-2">
            <div className="h-full  w-full">
              <RecievedMessage />
              <SentMessage/>
            </div>
            <div className="flex w-full">
              <Input
                type="text"
                className="bg-transparent w-[90%]"
                placeholder="Say something nice :)"
              ></Input>
              <Button className="bg-transparent border hover:bg-purple-500/50">
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Displaying the selectedUser for demonstration purposes */}
      <div className="text-white">Selected User: {selectedUser}</div>
    </>
  );
}
