"use client";

import PageHeader from "@/components/page-header";
import BentoGrid from "@/components/bento-grid";
import Card from "@/components/cards/card";
import PersonCard from "@/components/cards/person-card";
import ProductCard from "@/components/cards/product-card";
import BigList from "@/components/big-list";

export default function Components() {
  const bentoItems = [
    {
      title: "Automated Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms",
      image: "/imagenes/paisaje-1.webp",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track your social media performance with detailed analytics",
      image: "/imagenes/paisaje-2.webp",
      backgroundColor: "--color5",
    },
    {
      title: "Content Calendar",
      description: "Plan and organize your content with our intuitive calendar",
      image: "/imagenes/paisaje-3.avif",
      backgroundColor: "--color1",
    },
    {
      title: "calendario contenido",
      description: "Plan and organize your content with our intuitive calendar",
      image: "",
      backgroundColor: "--color2",
    },
    // Add more items as needed
  ];

  const BigListItems = [
    { title: "AI Superpowers", description: "AI + Superlist = 🤖" },
    {
      title: "Offline mode",
      description: "Keep working, even when your wi-fi isnt.",
    },
    {
      title: "Collaboration",
      description: "Collaborate with your team, friends, or clients.",
    },
    {
      title: "Real time",
      description: "Get things done together, in real time.",
    },
    {
      title: "Repeating tasks",
      description: "Automate repetitive tasks for efficiency.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Components Next.js"
        description="This is a page to show the components and their variations of Next.js"
        image="/imagenes/components.webp"
      />
      <h2>Bento Grid Component</h2>
      <div className={"grid grid-cols-3"}>
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 2, 3],
            [4, 4, 3],
          ]}
          rowHeight="100px"
        />
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 2, 3],
            [1, 4, 3],
          ]}
          rowHeight="100px"
        />
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 2, 4],
            [1, 3, 4],
          ]}
          rowHeight="100px"
        />
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 1, 1],
            [2, 4, 3],
          ]}
          rowHeight="100px"
        />
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 4, 3],
            [1, 4, 3],
            [2, 2, 2],
          ]}
          rowHeight="100px"
        />
        <BentoGrid
          items={bentoItems}
          disposition={[
            [1, 3, 3],
            [2, 3, 3],
            [2, 4, 4],
          ]}
          rowHeight="100px"
        />
      </div>

      <h2>Card Component</h2>
      <div className={"flex items-center justify-center gap-8"}>
        <Card
          title="Card 1"
          subtitle="Subtitle 1"
          price="Price 1"
          image="/imagenes/paisaje-1.webp"
        />
        <Card
          title="Card 2"
          subtitle="Subtitle 2"
          price="Price 2"
          image="/imagenes/paisaje-2.webp"
          height="500px"
          width="500px"
        />
        <Card
          title="Card 3"
          subtitle="Subtitle 3"
          price="Price 3"
          image="/imagenes/paisaje-3.avif"
          height="300px"
          width="400px"
        />
        <Card
          title="Card 4"
          subtitle="Subtitle 4"
          price="Price 4"
          image="/imagenes/paisaje-1.webp"
          height="400px"
          width="300px"
        />
      </div>
      <h2>Person Card Section Component</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <PersonCard
          imagen="/imagenes/paisaje-3.avif"
          nombre="John Doe"
          puesto="Web Developer"
          socialLinks={{
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            twitterX: "https://twitter.com",
            whatsapp: "https://whatsapp.com",
          }}
          resumeUrl="https://resume.com"
        />
        <PersonCard
          imagen="/imagenes/paisaje-1.webp"
          nombre="John Doe Very Long Name"
          puesto="Web Developer And Much More Things That I Can't Write Here"
          socialLinks={{
            github: "https://github.com",
            instagram: "https://instagram.com",
            twitterX: "https://twitter.com",
            whatsapp: "https://whatsapp.com",
          }}
          resumeUrl="https://resume.com"
        />
        <PersonCard
          imagen="/imagenes/paisaje-2.webp"
          nombre="John Doe A Much Longer And Longer Name"
          puesto="Web Developer"
          socialLinks={{
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            twitterX: "https://twitter.com",
            whatsapp: "https://whatsapp.com",
          }}
          resumeUrl="https://resume.com"
        />
        <PersonCard
          imagen="/imagenes/paisaje-1.webp"
          nombre="John Doe"
          puesto="Web Developer"
          socialLinks={{
            github: "https://github.com",
            linkedin: "https://linkedin.com",
          }}
          resumeUrl="https://resume.com"
        />
        <PersonCard
          imagen="/imagenes/paisaje-2.webp"
          nombre="John Doe"
          puesto="Web Developer"
          socialLinks={{}}
          resumeUrl="https://resume.com"
        />
      </div>
      <h2>Price Card Section Component</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <ProductCard
          productName="Product 1"
          productDescription="Description 1"
          productPrice="10"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <ProductCard
          productName="Product 2 with a larger name"
          productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies ultricies. Nullam nec purus nec nisl ultricies ultricies."
          productPrice="29,99"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <ProductCard
          productName="Product 3"
          productDescription="The best product in the world"
          productPrice="10"
          features={[
            "Feature 1 very very very very long",
            "Feature 2 but in this case it is much longer onlyu for educationa purposes",
            "Feature 3",
          ]}
        />
      </div>
      <h2>Price Card Section Component</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <BigList
          title={
            <span>
              List of{" "}
              <span className="text-[--color1]">cool characteristics</span>
            </span>
          }
          items={BigListItems}
        />
      </div>
    </>
  );
}
