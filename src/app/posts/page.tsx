// src/app/posts/page.tsx

import React from 'react';

export default async function Page() {
  const res = await fetch('http://127.0.0.1:8000/get-urls/');
  const data = await res.json();


  console.log("data.urls");
  console.log(data.urls);
  console.log("data.urls22");


  return (
    <div className={'flex flex-col'}>
      {data.urls.map((item: any, index: number) => (
        <a key={index} href={`/posts/${item}`}>
          {item}
        </a>
      ))}
    </div>
  );
}
