import Image from "../../../node_modules/next/image";
const Sidebar = () => {
  return (
    <>
      <nav className="h-screen w-[6rem] bg-slate-800/75 text-white text-[.8em] fixed hidden sm:flex flex-col justify-between">
        <div className="flex flex-col">
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-user text-[2em]"></i>
            <div>Profile</div>
          </button>
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-magnifying-glass text-[2em]"></i>
            <div>Explore</div>
          </button>
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-comment text-[2em]"></i>
            <div>Messages</div>
          </button>
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-circle-check text-[2em]"></i>
            <div>Verified</div>
          </button>
          <button className="border-b-2 border-white h-[6rem] flex flex-col items-center justify-center w-full gap-2">
            <i className="fa-solid fa-gear text-[2em]"></i>
            <div>Settings</div>
          </button>
        </div>
        <div>
            <Image src="/images/logo.png" width="90" height="100"></Image>
        </div>
      </nav>

      <nav className="bg-slate-800/75 text-white fixed bottom-0 h-[5rem] w-full flex sm:hidden">
        <button className=" flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-user text-[2em]"></i>
          <div className="sm:block hidden">Profile</div>
        </button>
        <button className="flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-magnifying-glass text-[2em]"></i>
          <div className="sm:block hidden">Explore</div>
        </button>
        <button className="flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-comment text-[2em]"></i>
          <div className="sm:block hidden">Messages</div>
        </button>
        <button className="flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-circle-check text-[2em]"></i>
          <div className="sm:block hidden">Verified</div>
        </button>
        <button className=" flex flex-col items-center justify-center w-full gap-2">
          <i className="fa-solid fa-gear text-[2em]"></i>
          <div className="sm:block hidden">Settings</div>
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
