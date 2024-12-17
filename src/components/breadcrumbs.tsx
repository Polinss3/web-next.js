'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  postTitle?: string;
}

export default function Breadcrumb({ postTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-2 text-sm text-muted-foreground"
    >
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const href = `/${segments.slice(0, index + 1).join('/')}`;

        // Utilizar el título del post si es el último segmento y se proporciona postTitle
        let title = segment.replace(/-/g, ' ');
        if (isLast && postTitle) {
          title = postTitle;
        } else {
          // Capitalizar la primera letra de cada palabra en el segmento
          title = title
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }

        return (
          <span key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {isLast ? (
              <span className="font-medium text-foreground">{title}</span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {title}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}