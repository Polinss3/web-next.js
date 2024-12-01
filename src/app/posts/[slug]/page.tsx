import React from "react";
import parse, { domToReact } from "html-react-parser";
import PageHeader from "@/components/page-header";
import Card from "@/components/cards/card"; // Asegúrate de importar tus componentes personalizados
import BigList from "@/components/BigList/BigList"; // Asegúrate de importar tus componentes personalizados

interface PostData {
  title: string;
  url: string;
  content: string;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const res = await fetch(`http://127.0.0.1:8000/get-post/${slug}/`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al obtener el post");
    }
    const data: PostData = await res.json();

    console.log("data");
    console.log(data);
    console.log("data");

    const options = {
      replace: (domNode: any) => {
        if (domNode.name === "PageHeader") {
          return (
            <PageHeader
              title={domNode.attribs?.title}
              description={domNode.attribs?.description}
              image={domNode.attribs?.image}
            />
          );
        }
        if (domNode.name === "Card") {
          return (
            <Card
              title={domNode.attribs?.title || ""}
              subtitle={domNode.attribs?.subtitle || ""}
              price={domNode.attribs?.price || ""}
              image={domNode.attribs?.image || ""}
              height={domNode.attribs?.height}
              width={domNode.attribs?.width}
            />
          );
        }
        if (domNode.name === "BigList") {
          let items = [];
          if (domNode.attribs?.items) {
            try {
              items = JSON.parse(domNode.attribs.items);
            } catch (error) {
              console.error("Error parsing 'items' in BigList:", error);
            }
          }
          return <BigList title={domNode.attribs?.title || ""} items={items} />;
        }
        if (domNode.name === "table") {
          return (
            <table className="table-auto border-collapse border border-gray-300">
              {domToReact(domNode.children, options)}
            </table>
          );
        }
        if (domNode.name === "p") {
          return (
            <p className="text-gray-700">
              {domToReact(domNode.children, options)}
            </p>
          );
        }
        if (domNode.name === "h2") {
          return (
            <h2 className="text-2xl font-bold mt-4">
              {domToReact(domNode.children, options)}
            </h2>
          );
        }
        if (domNode.name === "h3") {
          return (
            <h3 className="text-xl font-semibold mt-3">
              {domToReact(domNode.children, options)}
            </h3>
          );
        }
        return undefined;
      },
      htmlparser2: {
        lowerCaseTags: false,
        recognizeSelfClosing: true,
      },
    };

    return (
      <div className="prose prose-lg max-w-none">
        {parse(data.content, options)}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error al cargar el contenido</div>;
  }
}
