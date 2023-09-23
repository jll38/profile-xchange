import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Sidebar from "@/components/common/sidebar";
import CreatePost from "@/components/posts/CreatePost";

export default function Feed() {
  return (
    <>
      <Sidebar />
      <main className="flex h-screen items-center justify-between p-24 text-white z-20">
        <div className="h-screen w-1/2 border border-white flex flex-col items-center p-[2rem]">
            <CreatePost/>
        </div>
        <div className="h-screen w-1/2 border border-white"></div>
      </main>
    </>
  );
}
