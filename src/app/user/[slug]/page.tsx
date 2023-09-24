import { BackButton } from './../../../components/BackButton';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/common/sidebar";
import Link from "next/link";

import { Post } from "@/components/Post";
export default function UserProfile({ params }: { params: { slug: string } }) {
  const handle = params.slug;
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 md:pl-24 text-white z-20 ">
        <div className="md:w-full lg:w-[40em] min-h-[14em] bg-black/25 flex flex-col  items-center rounded-xl">
         <BackButton goHome={false}/>
          <div className="flex flex-col items-center">
            <div className="scale-[200%] flex flex-col justify-center items-center mt-[4em]">
              <Avatar>
                <AvatarImage
                  alt=""
                  src="https://github.com/shadcn.png"
                ></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div id="userRealName" className="">
                User
              </div>
            </div>
            <div
              id="userHandle"
              className="text-[.75em] mt-[2em] text-slate-200"
            >
              @{handle}
            </div>
            <div className="flex items-center">
              <Image
                alt=""
                src="/images/eth.svg"
                width="20"
                height="70"
              ></Image>
              <div className="text-[.75em]">0.00 ETH</div>
            </div>
          </div>
          <Post bg={false}></Post>
          <Post bg={false}></Post>
          <Post bg={false}></Post>
        </div>
      </main>
    </>
  );
}
