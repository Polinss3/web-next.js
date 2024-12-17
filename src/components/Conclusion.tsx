"use client";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/cards/PostCard";

interface ConclusionProps {
  title: string;
  conclusionText: string;
  points: string[];
  lado?: "izquierda" | "derecha";
}

interface Post {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const Conclusion: React.FC<ConclusionProps> = ({
  title,
  conclusionText,
  points,
  lado = "izquierda",
}) => {
  const [lastThreePosts, setLastThreePosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get-posts/")
      .then((res) => res.json())
      .then((data) => {
        const sliced = data.posts.slice(-3);
        setLastThreePosts(sliced);
      })
      .catch((error) => console.error("Error fetching posts", error));
  }, []);

  const flexDirection = lado === "derecha" ? "flex-row-reverse" : "flex-row";

  return (
    <section className="p-8 rounded-md space-y-8">
      <article className="space-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className={`flex flex-col md:${flexDirection} gap-8`}>
          <p className="text-sm md:w-1/2">{conclusionText}</p>
          <ul className="list-disc list-inside space-y-1 md:w-1/2">
            {points.map((point, index) => (
              <li key={index} className="text-sm">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Añadimos las últimas 3 entradas con el PostCard */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {lastThreePosts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
            imageSrc={post.thumbnail}
            linkSrc={post.url}
            width="w-80"
            height="h-48"
          />
        ))}
      </div>
    </section>
  );
};

export default Conclusion;
