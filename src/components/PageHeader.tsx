import Image from "next/image";
import Breadcrumb from "@/components/BreadCrumbs";

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
}

export default function PageHeader({
  title,
  description,
  image = "/imagenes/paisaje-1.webp",
}: PageHeaderProps) {
  return (
    <div className="w-full bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 md:px-6">
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 space-y-4">
            <Breadcrumb />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground md:text-lg">{description}</p>
          </div>
          <div className="relative w-full md:w-1/2 max-h-[300px] overflow-hidden mt-6 md:mt-0 flex justify-center">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="object-cover rounded-lg w-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
