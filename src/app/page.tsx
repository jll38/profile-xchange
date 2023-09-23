import { LoginForm } from "./../components/auth/loginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="min-w-[20rem] flex flex-col justify-center items-center">
      
        <div className="text-[4em] font-extrabold">SocialXChange</div>
        <LoginForm />
      </div>
    </main>
  );
}
