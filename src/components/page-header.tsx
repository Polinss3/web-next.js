import Image from "next/image";
import Breadcrumb from "./breadcrumbs";

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
}

export default function PageHeader({
  title,
  description,
  image = "https://placehold.co/400x200",
}: PageHeaderProps) {
  return (
    <div className="w-full bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 md:px-6">
        <Breadcrumb />
        <div className="mt-6 grid gap-6 md:grid-cols-2 justify-items-center items-center justify-self-center content-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground md:text-lg">{description}</p>
          </div>
          <div className="relative aspect-video rounded-lg z-1 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
