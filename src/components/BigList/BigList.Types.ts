export interface ListItem {
    title: string;
    description: string;
  }
  
  export interface BigListProps {
    title: React.ReactNode;
    items: ListItem[];
  }
  