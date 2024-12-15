import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_LOGO  } from "@/config/config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] bg-[--background1] z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[--neutro1]">
          {SITE_NAME}
        </Link>
        <div className="h-12 w-12 relative">
          <Image
            src={SITE_LOGO}
            alt="Next.js Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
}
