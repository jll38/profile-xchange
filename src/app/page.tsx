import Image from "next/image";
import { xChangeLogo } from "./../../public/images/xChange_logo_transparent.png";
import { UserAuthForm } from "./../components/auth/loginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white z-20">
      <div className="min-w-[20rem] flex flex-col justify-center items-center ">
        <div id="logo-header" className="text-center mb-[2rem]">
          <div className="logo flex justify-center"><Image src={xChangeLogo} alt="" width={100} height={100} /></div>
          <div className="text-[4em] font-extrabold">xChange</div>
          <div className="-mt-[.75rem] text-[.8rem] text-slate-300">Unlock Connections, XChange Value</div>
        </div>
        <UserAuthForm />
      </div>
    </main>
  );
}
