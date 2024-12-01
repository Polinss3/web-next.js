export interface BentoGridProps {
    items: {
      title: string;
      description: string;
      image?: string;
      backgroundColor?: string;
    }[];
    disposition: number[][];
    rowHeight?: string;
  }
  