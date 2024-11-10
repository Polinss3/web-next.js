import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] bg-[--background1] z-500 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[--neutro1]">
          Next.js
        </Link>
        <div className="h-12 w-12 relative">
          <Image
            src="https://placehold.co/400x400"
            alt="Next.js Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
}
