// src/app/posts/page.tsx
import React from 'react';

export default async function Page() {
  const res = await fetch('http://127.0.0.1:8000/get-posts/');
  const data = await res.json();

  return (
    <div className={'flex flex-col'}>
      {data.posts.map((item: any, index: number) => (
        <a key={index} href={`/posts/${item.url}`}>
          {item.title}
        </a>
      ))}
    </div>
  );
}
