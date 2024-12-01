import PageHeader from '@/components/page-header'
import BentoGrid from '@/components/1bento-grid'

export default function Home() {
  const bentoItems = [
    {
      title: "Automated Posting",
      description: "Schedule and automate your social media posts across multiple platforms",
      image: "https://placehold.co/400x400"
    },
    {
      title: "Analytics Dashboard",
      description: "Track your social media performance with detailed analytics",
      image: "https://placehold.co/400x400"
    },
    {
      title: "Content Calendar",
      description: "Plan and organize your content with our intuitive calendar",
      image: "https://placehold.co/400x400"
    },
    {
      title: "calendario contenido",
      description: "Plan and organize your content with our intuitive calendar",
      image: "https://placehold.co/400x400"
    },
    // Add more items as needed
  ]

  return (
    <>
      <PageHeader
        title="Welcome to Next.js"
        description="Streamline your social media presence with automated posting and powerful analytics"
        image="https://placehold.co/400x400"
      />
      <BentoGrid items={bentoItems} disposition={[[1,2,3],[4,4,3]]} />
    </>
  )
}