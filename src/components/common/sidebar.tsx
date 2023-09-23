
const Sidebar = () => {
  return (
    <nav className="h-screen w-[6rem] bg-slate-800/75 text-white text-[.8em] fixed">
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

    </nav>
  );
};

export default Sidebar;
