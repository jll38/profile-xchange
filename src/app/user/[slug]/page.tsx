import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/common/sidebar";

import { Post } from "@/components/Post";
export default function UserProfile({ params }: { params: { slug: string } }) {
  const handle = params.slug;
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white z-20 sm:pl-[18em]">
        <div className="w-[40em] min-h-[14em] bg-black/25 flex flex-col justify-center items-center rounded-xl">
          <div className="flex flex-col items-center">
            <div className="scale-[200%] flex flex-col justify-center items-center">
              <Avatar>
                <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
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
              <Image alt="" src="/images/eth.svg" width="20" height="70"></Image>
              <div className="text-[.75em]">0.00 ETH</div>
            </div>
          </div>
          <Post bg={false}></Post>
        </div>
      </main>
    </>
  );
}
