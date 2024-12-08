// src/app/posts/page.tsx
import React from 'react';
import PostCard from '@/components/cards/PostCard';

export default async function Page() {
  const res = await fetch('http://127.0.0.1:8000/get-posts/');
  const data = await res.json();
  console.log("data");
  console.log(data);
  console.log("data");


  return (
    <div className={'flex flex-row flex-wrap gap-4 justify-center align-middle'}>
      {data.posts.map((item: any, index: number) => (
        <PostCard
          key={index}
          title={item.title}
          description={item.description}
          imageSrc={item.thumbnail}
          linkSrc={`/posts/${item.url}`}
        />
      ))}
    </div>
  );
}
