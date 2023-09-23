"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
export default function CreatePost() {
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
        id="message"
        placeholder="What's going on?"
        className="text-slate-900"
      />
      <Button
        className={
          buttonVariants({ variant: "outline" }) + " text-black w-[5rem]"
        }
      >
        Post
      </Button>
    </div>
  );
}
