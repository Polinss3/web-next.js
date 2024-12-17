import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkSrc: string;
  width?: string;
  height?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageSrc,
  linkSrc,
  width = "w-96",
  height = "h-56",
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[720px] mx-auto">
        <Link href={linkSrc}>
          <div
            className={`relative mt-6 ${width} ${height} text-white shadow-md bg-clip-border rounded-xl overflow-hidden cursor-pointer group`}
          >
            <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-105">
              <Image
                src={imageSrc}
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute bottom-0 p-4 z-10">
              <h2 className="font-sans text-xl font-semibold leading-snug tracking-normal">
                {title}
              </h2>
              <p className="text-base font-light leading-relaxed">{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
