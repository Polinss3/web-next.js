"use client";
import Link from "next/link";
import React from "react";
import {
  SITE_NAME,
  SITE_SLOGAN,
  INSTAGRAM_PROFILE,
  FACEBOOK_PROFILE,
  XTWITTER_PROFILE,
  LINKEDIN_PROFILE,
  TIKTOK_PROFILE,
} from "@/config/config";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 font-sans">
      <div className="max-w-screen mx-auto flex flex-wrap items-start gap-8 px-[10%]">
        {/* Primera columna */}
        <div className="flex-1 min-w-[220px] space-y-5">
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
        <div className="flex-1 min-w-[220px] space-y-5">
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
                href={LINKEDIN_PROFILE}
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
        <div className="flex-1 min-w-[220px]">
          <NewsletterForm />
        </div>
        {/* Cuarta columna */}
        <div className="flex-1 min-w-[220px] space-y-1 text-sm">
          <h2 className="text-xl">Discover more: </h2>
          <ul className="space-y-1">
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
