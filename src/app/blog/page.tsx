"use client";

import PageHeader from "@/components/page-header";
import BentoGrid from "@/components/bento-grid";
import Card from "@/components/cards/card";
import ScrollSection from "@/components/card-slider";

export default function Home() {
  const bentoItems = [
    {
      title: "Automated Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms",
      image: "https://placehold.co/400x400",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track your social media performance with detailed analytics",
      image: "https://placehold.co/400x400",
    },
    {
      title: "Content Calendar",
      description: "Plan and organize your content with our intuitive calendar",
      image: "",
      backgroundColor: "red",
    },
    {
      title: "calendario contenido",
      description: "Plan and organize your content with our intuitive calendar",
      image: "",
      backgroundColor: "blue",
    },
    // Add more items as needed
  ];

  const cards = [
    {
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },{
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },{
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },{
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },{
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },{
      title: "Ethereum",
      subtitle: "Cryptocurrency",
      price: "1.654,34€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Bitcoin",
      subtitle: "Cryptocurrency",
      price: "34.500,12€",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Litecoin",
      subtitle: "Cryptocurrency",
      price: "200,89€",
      image: "https://via.placeholder.com/400",
    },
    // Agrega más elementos según sea necesario
  ];

  return (
    <>
      <PageHeader
        title="Esto es desde la pagina de blog"
        description="Streamline your social media presence with automated posting and powerful analytics"
        image="https://placehold.co/400x400"
      />
      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 2, 3],
          [4, 4, 3],
        ]}
        rowHeight="300px"
      />
      <div className={"flex items-center justify-center gap-8"}>
        <Card
          title="Card 1"
          subtitle="Subtitle 1"
          price="Price 1"
          image="https://placehold.co/400x400"
        />
        <Card
          title="Card 2"
          subtitle="Subtitle 2"
          price="Price 2"
          image="https://placehold.co/400x400"
          height="500px"
          width="500px"
        />
        <Card
          title="Card 3"
          subtitle="Subtitle 3"
          price="Price 3"
          image="https://placehold.co/400x400"
          height="300px"
          width="400px"
        />
        <Card
          title="Card 4"
          subtitle="Subtitle 4"
          price="Price 4"
          image="https://placehold.co/400x400"
          height="400px"
          width="300px"
        />
      </div>

      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 2, 3],
          [1, 4, 3],
        ]}
        rowHeight="300px"
      />
      <h1>asldfasdlñfjasdñflasjdf</h1>
      <ScrollSection
        title="Explora nuestras criptomonedas"
        description="Descubre el precio actualizado y más información sobre cada criptomoneda"
        items={cards}
      />
      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 2, 4],
          [1, 3, 4],
        ]}
        rowHeight="300px"
      />
      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 1, 1],
          [2, 4, 3],
        ]}
        rowHeight="300px"
      />
      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 4, 3],
          [1, 4, 3],
          [2, 2, 2],
        ]}
        rowHeight="300px"
      />
      <BentoGrid
        items={bentoItems}
        disposition={[
          [1, 3, 3],
          [2, 3, 3],
          [2, 4, 4],
        ]}
        rowHeight="300px"
      />
    </>
  );
}
