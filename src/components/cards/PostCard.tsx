import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, imageSrc, href }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <a
            target="_blank"
            href="https://www.material-tailwind.com/docs/html/card"
            className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
            rel="noopener noreferrer"
          >
            More components on <b>Material Tailwind</b>.
          </a>
        </div>

        {/* Centering wrapper */}
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src={imageSrc}
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="p-6">
            <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h2>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <Link href={href}>
              <a
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
