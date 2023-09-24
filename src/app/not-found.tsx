import Image from "next/image";
import Sidebar from "@/components/common/sidebar";
export default function Home() {
  return (
    <>
    <Sidebar/>
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white z-20">
      404 | Page Not Found
    </main>
    </>
  );

}
