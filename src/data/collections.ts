export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  hoverImage: string; // tambahkan ini
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Lyra',
    description: 'Off-shoulder A-line with celestial embroidery',
    image: '/assets/lyradefault.avif',
    hoverImage: '/assets/lyrahover.avif',
  },
  {
    id: '2',
    name: 'Selene',
    description: 'Illusion neckline, draped mikado silk',
    image: '/assets/selenedefault.avif',
    hoverImage: '/assets/selenehover.avif',
  },
  {
    id: '3',
    name: 'Astra',
    description: 'Detachable sculptural train, modern romance',
    image: '/assets/astradefault.avif',
    hoverImage: '/assets/astrahover.avif',
  },
];