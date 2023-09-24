import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Sidebar from "@/components/common/sidebar";

export default function Verification() {
  return (
    <>
      <Sidebar />
      <main className="flex h-screen items-center justify-between p-0 sm:p-24 text-white z-20">
        <div className="h-screen w-1/2 lg:flex flex-col items-center p-[2rem] hidden justify-around">
          <Image src={"/images/verification.svg"} width="300" height="150" alt="Verification Icon" />
        </div>
        <div className="h-screen w-full lg:w-1/2 p-[2rem] overflow-y-scroll gap-[1rem] flex flex-col justify-center items-start">
          <h1 className="text-[2.5em] font-bold mb-5">Why Get Verified?</h1>
          <ul className="list-disc pl-5">
            <li className="mb-3">🔒 Enhanced Security</li>
            <li className="mb-3">🚀 Faster Transactions</li>
            <li className="mb-3">✅ Trust Badge on Profile</li>
            <li className="mb-3">📈 Increased Post Visibility</li>
            <li className="mb-3">💬 Direct Support Access</li>
            <li className="mb-3">🎁 Exclusive Perks and Offers</li>
          </ul>
          <Button variant={buttonVariants.primary} className="mt-5">
            Verify Now
          </Button>
        </div>
      </main>
    </>
  );
}
