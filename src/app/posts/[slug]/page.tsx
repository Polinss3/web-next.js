import React from "react";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/cards/card";
import BentoGrid from "@/components/BentoGrid";
import BigList from "@/components/BigList";
import StickySection from "@/components/StickySection";
import ProsConsLists from "@/components/ProsConsList";
import Accordeon from "@/components/Accordeon";
import ThreeColumnsInformation from "@/components/ThreeColumnsInformation";
import BannerOffersCTA from "@/components/BannerOffersCTA";
import CubesInformation from "@/components/CubesInformation";
import Table from "@/components/Table";

interface PostData {
  title: string;
  url: string;
  content: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Función para transformar attributes JSX (ej: columns={...}) en cadenas JSON válidas
function fixJsonArrayAttr(attrName: string, content: string) {
  const regex = new RegExp(`${attrName}=\\{([^}]*)\\}`, 'g');
  return content.replace(regex, (match, p1) => {
    let arrStr = p1
      .replace(/\n/g, ' ')
      .replace(/\r/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/'/g, '"')
      .trim();
    try {
      const arr = JSON.parse(arrStr);
      return `${attrName}='${JSON.stringify(arr)}'`;
    } catch {
      return `${attrName}='[]'`;
    }
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  try {
    const res = await fetch(`http://127.0.0.1:8000/get-post/${slug}/`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al obtener el post");
    }
    const data: PostData = await res.json();

    let fixedContent = data.content;

    // Arreglar columns y data del componente Table
    fixedContent = fixJsonArrayAttr('columns', fixedContent);
    fixedContent = fixJsonArrayAttr('data', fixedContent);

    data.content = fixedContent;

    const options = {
      replace: (domNode: DOMNode) => {
        if (!("name" in domNode)) {
          return;
        }

        const el = domNode as Element;
        const { name, attribs, children } = el;

        if (name === "PageHeader") {
          return (
            <PageHeader
              title={attribs?.title || ""}
              description={attribs?.description || ""}
              image={attribs?.image}
            />
          );
        }

        if (name === "Card") {
          return (
            <Card
              title={attribs?.title || ""}
              subtitle={attribs?.subtitle || ""}
              price={attribs?.price || ""}
              image={attribs?.image || ""}
              height={attribs?.height}
              width={attribs?.width}
            />
          );
        }

        if (name === "BigList") {
          let items = [];
          if (attribs?.items) {
            try {
              items = JSON.parse(attribs.items);
            } catch {}
          }
          return <BigList title={attribs?.title || ""} items={items} />;
        }

        if (name === "StickySection") {
          let stepsdata: { title: string; description: string }[] = [];
          if (attribs?.stepsdata) {
            try {
              const stepsdataStr = attribs.stepsdata.replace(/\\"/g, '"');
              stepsdata = JSON.parse(stepsdataStr);
            } catch {}
          }
          return (
            <StickySection
              title={attribs?.title || ""}
              description={attribs?.description || ""}
              stepsTitle={attribs?.stepstitle || ""}
              stepsData={stepsdata}
            />
          );
        }

        if (name === "ProsConsLists") {
          let contras: string[] = [];
          let pros: string[] = [];
          if (attribs?.contras) {
            try {
              contras = JSON.parse(attribs.contras);
            } catch {}
          }
          if (attribs?.pros) {
            try {
              pros = JSON.parse(attribs.pros);
            } catch {}
          }
          return (
            <ProsConsLists
              titulo={attribs?.titulo || ""}
              descripcion={attribs?.descripcion || ""}
              titulo_contras={attribs?.titulo_contras || ""}
              titulo_pros={attribs?.titulo_pros || ""}
              contras={contras}
              pros={pros}
            />
          );
        }

        if (name === "Accordeon") {
          let contenido = [];
          if (attribs?.contenido) {
            try {
              contenido = JSON.parse(attribs.contenido);
            } catch {}
          }
          return (
            <Accordeon
              title={attribs?.titulo || ""}
              content={contenido}
            />
          );
        }

        if (name === "ThreeColumnsInformation") {
          return (
            <ThreeColumnsInformation
              title={attribs?.titulo || ""}
              description={attribs?.descripcion || ""}
              column1={attribs?.columna1 || ""}
              column2={attribs?.columna2 || ""}
              column3={attribs?.columna3 || ""}
            />
          );
        }

        if (name === "CubesInformation") {
          return (
            <CubesInformation
              titulo={attribs?.titulo || ""}
              descripcion={attribs?.descripcion || ""}
              columna1={attribs?.columna1 || ""}
              columna2={attribs?.columna2 || ""}
              columna3={attribs?.columna3 || ""}
            />
          );
        }

        if (name === "BannerOffersCTA") {
          return (
            <BannerOffersCTA
              version={attribs?.version || "2" ? 2 : 1}
              title={attribs?.title || ""}
              description={attribs?.description || ""}
            />
          );
        }

        if (name === "Table") {
          console.log("attribs");
          console.log(attribs);
          let columns = [];
          let tdata = [];
          if (attribs?.columns) {
            try {
              columns = JSON.parse(attribs.columns);
            } catch {}
          }
          if (attribs?.data) {
            try {
              tdata = JSON.parse(attribs.data);
            } catch {}
          }
          return (
            <Table
              title={attribs?.title}
              columns={columns}
              data={tdata}
            />
          );
        }

        if (name === "table") {
          return (
            <table className="table-auto border-collapse border border-gray-300">
              {domToReact(children as unknown as DOMNode[], options)}
            </table>
          );
        }

        if (name === "p") {
          return (
            <p className="text-gray-700">
              {domToReact(children as unknown as DOMNode[], options)}
            </p>
          );
        }

        if (name === "h2") {
          return (
            <h2 className="text-2xl font-bold mt-4">
              {domToReact(children as unknown as DOMNode[], options)}
            </h2>
          );
        }

        if (name === "h3") {
          return (
            <h3 className="text-xl font-semibold mt-3">
              {domToReact(children as unknown as DOMNode[], options)}
            </h3>
          );
        }
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
