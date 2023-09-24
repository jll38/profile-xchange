import { Post } from './../../components/Post';
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
      <main className="flex h-screen items-center justify-between p-0 sm:p-24 text-white z-20">
        <div className="h-screen w-1/2 lg:flex flex-col items-center p-[2rem] hidden justify-around">
            <div className='w-[32rem] h-[16rem] bg-black/25 rounded-[4rem] p-[2rem] flex flex-col items-center gap-2'>
                <Image src={"/images/eth.svg"} width="100" height="125" alt=""></Image>
                <div className='text-[2em]'>0.00 ETH</div>
            </div>
          <CreatePost />
        </div>
        <div className="h-screen w-full lg:w-1/2 p-[2rem] overflow-y-scroll gap-[1rem] flex flex-col">
          <Post bg={true}/>
          <Post bg={true}/>
          <Post bg={true}/>
          <Post bg={true}/>
          <Post bg={true}/>
          <Post bg={true}/>
        </div>
      </main>
    </>
  );
}
