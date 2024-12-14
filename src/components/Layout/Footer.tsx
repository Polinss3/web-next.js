import Link from "next/link";
import {
  SITE_NAME,
  SITE_SLOGAN,
  INSTAGRAM_PROFILE,
  FACEBOOK_PROFILE,
  XTWITTER_PROFILE,
  LINKEDIN_PROFILE,
  TIKTOK_PROFILE,
} from "@/config/config";
import Input from "@/components/Layout/UI/Input";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 font-sans">
      <div className="max-w-screen mx-auto flex justify-between space-x-8 px-[10%]">
        {/* Primera columna */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl">{SITE_NAME}</h2>
          <p className="text-sm">{SITE_SLOGAN}</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad">Política de privacidad</Link>
            </li>
            <li>
              <Link href="/politica-de-cookies">Política de cookies</Link>
            </li>
          </ul>
        </div>
        {/* Segunda columna */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl">Contact Us</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={XTWITTER_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                X/Twitter
              </a>
            </li>
            <li>
              <a
                href={TIKTOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={TIKTOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
        {/* Tercera columna */}
        <div className="flex-1">
          <h2 className="text-xl">Join our newsletter</h2>
          <form>
            <Input type="text" placeholder="Nombre" />
            <Input type="text" placeholder="Apellidos" />
            <Input type="email" placeholder="Correo electrónico" />
            <button type="submit" className="bg-white text-black px-4 py-2">
              Enviar
            </button>
          </form>
        </div>
        {/* Cuarta columna */}
        <div className="flex-1 space-y-1 text-sm">
          <h2 className="text-xl">Discover more: </h2>
          <ul className="space-y-1">
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/categoria-3">Categoría 3</Link>
            </li>
            <li>
              <Link href="/categoria-4">Categoría 4</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
