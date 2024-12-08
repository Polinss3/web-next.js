"use client";

import PageHeader from "@/components/PageHeader";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/cards/card";
import PersonCard from "@/components/cards/person-card";
import ProductCard from "@/components/cards/product-card";
import BigList from "@/components/BigList";
import StickySection from "@/components/StickySection";
import Accordeon from "@/components/Accordeon";
import ThreeColumnsInformation from "@/components/ThreeColumnsInformation";
import BannerOffersCTA from "@/components/BannerOffersCTA";
import CubesInformation from "@/components/CubesInformation";
import Table from "@/components/Table";

export default function Components() {
  const bentoItems = [
    {
      title: "Automated Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms",
      image: "/imagenes/paisaje-1.webp",
      backgroundColor: "--color5",
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
      image: "/imagenes/paisaje-3.avif",
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

  const handleButtonClick = () => {
    console.log("See all button clicked");
  };

  // Test Case 1: Many Columns, Few Rows
  const columns1 = ["Name", "Email", "Role", "Status", "Created At", "Actions"];
  const data1 = [
    {
      Name: "John Doe",
      Email: "john@example.com",
      Role: "Admin",
      Status: "Active",
      "Created At": "2024-01-01",
      Actions: "Edit | Delete",
    },
    {
      Name: "Jane Smith",
      Email: "jane@example.com",
      Role: "User",
      Status: "Inactive",
      "Created At": "2024-02-15",
      Actions: "Edit | Delete",
    },
  ];

  // Test Case 2: Few Columns, Many Rows
  const columns2 = ["Product", "Price"];
  const data2 = Array.from({ length: 50 }, (_, i) => ({
    Product: `Product ${i + 1}`,
    Price: `$${((i + 1) * 2).toFixed(2)}`, // Precio basado en el índice
  }));

  // Test Case 3: Many Columns and Rows
  const columns3 = [
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Address",
    "City",
    "State",
    "Zip",
    "Country",
  ];
  const data3 = Array.from({ length: 20 }, (_, i) => ({
    ID: i + 1,
    "First Name": `First${i + 1}`,
    "Last Name": `Last${i + 1}`,
    Email: `user${i + 1}@example.com`,
    Phone: `123-456-789${i}`,
    Address: `1234 Street Name, Apartment ${i + 1}`,
    City: `City${i + 1}`,
    State: `State${i + 1}`,
    Zip: `0000${i + 1}`,
    Country: "CountryName",
  }));

  // Test Case 4: Few Columns and Rows
  const columns4 = ["Title", "Author"];
  const data4 = [
    { Title: "The Great Gatsby", Author: "F. Scott Fitzgerald" },
    { Title: "1984", Author: "George Orwell" },
  ];

  // Test Case 5: Long Text in Cells
  const columns5 = ["Article", "Description"];
  const data5 = [
    {
      Article: "How to Implement Dynamic Tables in Next.js",
      Description:
        "This article provides a comprehensive guide on creating dynamic and responsive tables in Next.js using Tailwind CSS. It covers component design, data handling, and various use cases to ensure flexibility and scalability in your applications.",
    },
    {
      Article: "Understanding React Hooks",
      Description:
        "React Hooks are functions that let you hook into React state and lifecycle features from function components. They make it easier to reuse stateful logic and manage side effects in your applications.",
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
      <h2>StickySection</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <StickySection
          title="¿Cuánto tardan en llegar los coches importados?"
          description="El tiempo de llegada de los coches importados varía según el país de origen, el tipo de transporte y los procesos administrativos implicados..."
          stepsTitle="Pasos a seguir:"
          stepsData={[
            {
              title: "Documentación personal:",
              description:
                "DNI, NIE o pasaporte en vigor. Carnet de conducir actualizado.",
            },
            {
              title: "Pago al contado:",
              description:
                "Disponibilidad del importe total del vehículo en efectivo o transferencia bancaria. Confirmación del método de pago según las políticas del proveedor.",
            },
            {
              title: "Justificación del pago:",
              description:
                "En algunos casos, puede requerirse un justificante del origen de los fondos, especialmente para importes elevados.",
            },
            {
              title: "Contrato de compraventa:",
              description:
                "Firma del contrato que especifique las condiciones de la operación.",
            },
            {
              title: "Gestión de documentación:",
              description:
                "Formalización de trámites de importación y homologación (si aplica). Solicitud de matrícula española.",
            },
            {
              title: "Impuestos y tasas:",
              description:
                "Pago de impuestos correspondientes como el IVA, Impuesto de Matriculación o aranceles, según el caso.",
            },
            {
              title: "Impuestos y tasas:",
              description:
                "Pago de impuestos correspondientes como el IVA, Impuesto de Matriculación o aranceles, según el caso.",
            },
            {
              title: "Impuestos y tasas:",
              description:
                "Pago de impuestos correspondientes como el IVA, Impuesto de Matriculación o aranceles, según el caso.",
            },
            {
              title: "Impuestos y tasas:",
              description:
                "Pago de impuestos correspondientes como el IVA, Impuesto de Matriculación o aranceles, según el caso.",
            },
            {
              title: "Impuestos y tasas:",
              description:
                "Pago de impuestos correspondientes como el IVA, Impuesto de Matriculación o aranceles, según el caso.",
            },
          ]}
        />
      </div>
      <h2>Accordeon</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <Accordeon
          title="¿Cómo funciona?"
          content={[
            {
              title: "Selección del vehículo",
              description:
                "Visita la web de AutoTotal y elige el coche importado que mejor se ajuste a tus necesidades. Disponemos de una amplia variedad de modelos y marcas provenientes de distintos países, siempre con la garantía de calidad y confianza.",
            },
            {
              title: "Personalización del contrato",
              description:
                "Personaliza el contrato según tus necesidades y elige las mejores opciones de financiación disponibles con total transparencia y sin sorpresas.",
            },
            {
              title: "Entrega del coche",
              description:
                "Recibe tu coche en perfectas condiciones, listo para ser conducido, con garantía de satisfacción y sin preocupaciones.",
            },
          ]}
        />
      </div>

      <h2>Tres columnas</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        <ThreeColumnsInformation
          title="Título"
          description="Descripción"
          column1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus quasi, fugiat veritatis dicta maiores voluptatibus quaerat cum odit, iusto quas aliquid! Rem cupiditate quos doloremque impedit sint sequi reprehenderit!"
          column2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus quasi, fugiat veritatis dicta maiores voluptatibus quaerat cum odit, iusto quas aliquid! Rem cupiditate quos doloremque impedit sint sequi reprehenderit!"
          column3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus quasi, fugiat veritatis dicta maiores voluptatibus quaerat cum odit, iusto quas aliquid! Rem cupiditate quos doloremque impedit sint sequi reprehenderit!"
        />
      </div>
      <h2>Banner Offers</h2>
      <div className={"flex flex-col flex-wrap gap-64 p-8 justify-center"}>
        <BannerOffersCTA
          version={1}
          title="¡Encuentra tu concesionario de coches importados usados de confianza!"
          description="En AutoTotal, somos tu concesionario de confianza para coches importados usados. Ofrecemos una amplia selección de vehículos revisados y certificados para garantizar la máxima calidad y fiabilidad. Cada coche pasa por rigurosos controles técnicos, asegurando que cumpla con los más altos estándares. Además, gestionamos toda la documentación necesaria, desde la importación hasta la entrega, para que disfrutes de un proceso fácil y seguro."
        />
        <BannerOffersCTA
          version={2}
          title="¡Encuentra tu concesionario de coches importados usados de confianza!"
          description="En AutoTotal, somos tu concesionario de confianza para coches importados usados. Ofrecemos una amplia selección de vehículos revisados y certificados para garantizar la máxima calidad y fiabilidad. Cada coche pasa por rigurosos controles técnicos, asegurando que cumpla con los más altos estándares. Además, gestionamos toda la documentación necesaria, desde la importación hasta la entrega, para que disfrutes de un proceso fácil y seguro."
        />
      </div>
      <h2>Cubos de Información</h2>
      <div className="flex flex-row flex-wrap gap-8 p-8 justify-center">
        <CubesInformation
          titulo="¿Por qué los coches importados son más baratos?"
          descripcion="Los coches importados suelen ser más baratos debido a varios factores que los hacen atractivos para los compradores."
          columna1="Uno de los principales motivos es la diferencia de precios entre países. En algunos mercados, los vehículos nuevos tienen precios más bajos debido a impuestos, regulaciones locales o mayores volúmenes de producción. <span>Esto permite que los vehículos importados</span> lleguen al mercado con precios competitivos, incluso después de añadir los costes de transporte y aranceles."
          columna2="Otro factor clave es el cambio de divisas. Cuando la moneda del país exportador es más débil frente a la del importador, el coste del vehículo disminuye, beneficiando a los compradores. En muchos casos, los coches importados son vehículos de segunda mano provenientes de mercados donde se renuevan frecuentemente los modelos, como <span>Alemania</span> o <span>Japón</span>."
          columna3="Los coches importados pueden incluir versiones con menos equipamiento, lo que también reduce su precio. Sin embargo, es fundamental considerar los posibles costes adicionales, como la homologación o el mantenimiento específico, antes de realizar la compra. Los coches importados combinan calidad y precios atractivos, convirtiéndose en una opción muy valorada."
        />
      </div>

      <h2>Tres columnas</h2>
      <div className={"flex flex-row flex-wrap gap-8 p-8 justify-center"}>
        {/* Test Case 1 */}
        <Table
          title="Estadísticas de Carreras"
          columns={["Evento", "Participantes", "Ganadores", "Año de Fundación"]}
          data={[
            {
              Evento: "Fórmula 1",
              Participantes: "10 equipos",
              Ganadores: "Lewis Hamilton, Michael Schumacher",
              "Año de Fundación": "1950",
            },
            {
              Evento: "MotoGP",
              Participantes: "12 equipos",
              Ganadores: "Valentino Rossi, Marc Márquez",
              "Año de Fundación": "1949",
            },
            {
              Evento: "Dakar",
              Participantes: "400 vehículos",
              Ganadores: "Sébastien Loeb, Stéphane Peterhansel",
              "Año de Fundación": "1979",
            },
            {
              Evento: "Le Mans",
              Participantes: "60 coches",
              Ganadores: "Audi, Porsche",
              "Año de Fundación": "1923",
            },
            {
              Evento: "NASCAR",
              Participantes: "40 coches",
              Ganadores: "Richard Petty, Dale Earnhardt",
              "Año de Fundación": "1948",
            },
          ]}
        />

        <Table
          title="User Management"
          columns={["Name", "Email", "Role", "Status", "Created At", "Actions"]}
          data={[
            {
              Name: "John Doe",
              Email: "john@example.com",
              Role: "Admin",
              Status: "Active",
              "Created At": "2024-01-01",
              Actions: "Edit | Delete",
            },
            {
              Name: "Jane Smith",
              Email: "jane@example.com",
              Role: "User",
              Status: "Inactive",
              "Created At": "2024-02-15",
              Actions: "Edit | Delete",
            },
          ]}
        />

        {/* Test Case 2 */}
        <Table title="Product List" columns={columns2} data={data2} />

        {/* Test Case 3 */}
        <Table title="Employee Directory" columns={columns3} data={data3} />

        {/* Test Case 4 */}
        <Table title="Book List" columns={columns4} data={data4} />

        {/* Test Case 5 */}
        <Table title="Articles" columns={columns5} data={data5} />
      </div>
    </>
  );
}
