import Image from "next/image";
import Button from "./Button/page";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black sm:items-start">
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
