import Image from "../../../node_modules/next/image";
import Link from "next/link";
const Sidebar = () => {
  return (
    <>
      <nav className="h-screen w-[6rem] bg-slate-800/25 text-white text-[.8em] fixed hidden sm:flex flex-col justify-between">
        <div className="flex flex-col">
          <Link href="/feed">
            <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
              <i className="fa-solid fa-house text-[2em]"></i>
              <div>Home</div>
            </button>
          </Link>
          <Link href="/user/example">
            <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
              <i className="fa-solid fa-user text-[2em]"></i>
              <div>Profile</div>
            </button>
          </Link>
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-magnifying-glass text-[2em]"></i>
            <div>Explore</div>
          </button>
          <Link href="/message">
            <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
              <i className="fa-solid fa-comment text-[2em]"></i>
              <div>Messages</div>
            </button>
          </Link>
          <Link href="/get-verified">
            <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
              <i className="fa-solid fa-circle-check text-[2em]"></i>
              <div>Verified</div>
            </button>
          </Link>
          <Link href="/settings">
            <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
              <i className="fa-solid fa-gear text-[2em]"></i>
              <div>Settings</div>
            </button>
          </Link>
        </div>
        <div>
          <Image alt="" src="/images/logo.png" width="90" height="100"></Image>
        </div>
      </nav>

      <nav className="bg-slate-800 text-white fixed bottom-0 h-[4rem] w-full flex sm:hidden z-50">
        <Link href="/feed" className=" flex flex-col items-center justify-center w-full gap-2">
          <button >
            <i className="fa-solid fa-house text-[1.5em]"></i>
            <div className="sm:block hidden">Home</div>
          </button>
        </Link>
        <Link href="/user/example" className="flex flex-col items-center justify-center w-full gap-2">
        <button>
          <i className="fa-solid fa-user text-[1.5em]"></i>
          <div className="sm:block hidden">Profile</div>
        </button>
        </Link>
        <button className="flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-magnifying-glass text-[1.5em]"></i>
          <div className="sm:block hidden">Explore</div>
        </button>
        <Link href="/messages" className=" flex flex-col items-center justify-center w-full gap-2">
        <button className="flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-comment text-[1.5em]"></i>
          <div className="sm:block hidden">Messages</div>
        </button>
        </Link>
        <Link href="/settings" className=" flex flex-col items-center justify-center w-full gap-2">
        <button >
          <i className="fa-solid fa-gear text-[1.5em]"></i>
          <div className="sm:block hidden">Settings</div>
        </button>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
