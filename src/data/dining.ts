export interface DiningVenue {
  id: string;
  name: string;
  tagline: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  hours: {
    es: string;
    en: string;
  };
  image: string;
  description: {
    es: string;
    en: string;
  };
  specialties: {
    es: string[];
    en: string[];
  };
}

export const diningVenues: DiningVenue[] = [
  {
    id: 'las-palmas',
    name: 'Restaurante Las Palmas',
    tagline: {
      es: 'Gastronomía al aire libre junto a la piscina',
      en: 'Al fresco dining by the open-air pool'
    },
    location: {
      es: 'Piso 4 · Terraza Piscina',
      en: '4th Floor · Pool Terrace'
    },
    hours: {
      es: 'Lunes a Domingo: 12:00 m – 10:30 pm',
      en: 'Monday to Sunday: 12:00 pm – 10:30 pm'
    },
    image: '/img/platos.jpg',
    description: {
      es: 'El epicentro gastronómico del hotel. Una propuesta fresca y sofisticada que fusiona cortes de carne a la parrilla, pescados del Pacífico y cocina internacional en un entorno abierto rodeado de palmeras y brisa caleña.',
      en: 'The culinary centerpiece of the hotel. A vibrant fusion of grilled prime cuts, Pacific catch-of-the-day, and international cuisine in an open-air tropical terrace with panoramic views.'
    },
    specialties: {
      es: ['Ceviche del Pacífico en leche de tigre y chontaduro', 'Lomo al trapo con reducción de mora silvestre', 'Arroz meloso de mariscos y coco', 'Coctelería tropical de autor'],
      en: ['Pacific ceviche with citrus tiger milk & peach palm', 'Salt-crusted tenderloin with blackberry reduction', 'Creamy seafood & coconut risotto', 'Signature handcrafted tropical cocktails']
    }
  },
  {
    id: 'bahia-carlton',
    name: 'Lobby Bar Bahía Carlton',
    tagline: {
      es: 'Coctelería de autor y atmósfera refinada',
      en: 'Artisan mixology & refined evening lounge'
    },
    location: {
      es: 'Piso 1 · Lobby Principal',
      en: '1st Floor · Main Lobby'
    },
    hours: {
      es: 'Todos los días: 4:00 pm – 1:00 am',
      en: 'Daily: 4:00 pm – 1:00 am'
    },
    image: '/img/planes-romanticos-6.jpg',
    description: {
      es: 'Punto de encuentro por excelencia de la élite de Cali. Selección rigurosa de destilados internacionales, maltas escocesas, cocteles clásicos ejecutados a la perfección y música en vivo los fines de semana.',
      en: 'The quintessential meeting venue for business and society. An exceptional selection of single malt scotches, curated spirits, vintage wines, and live jazz performances.'
    },
    specialties: {
      es: ['Cócteles clásicos y creaciones de autor', 'Cava selecta de vinos del Viejo y Nuevo Mundo', 'Tapas ibéricas y bocados de autor', 'Ambiente íntimo con iluminación tenue'],
      en: ['Classic mixology & original signature infusions', 'Old and New World wine cellar selection', 'Iberian tapas & delicate savory bites', 'Intimate lounge with ambient lighting']
    }
  },
  {
    id: 'cafe-farallones',
    name: 'Café Farallones',
    tagline: {
      es: 'El mejor café de Colombia y panadería artesanal',
      en: 'Single-origin Colombian coffee & fresh bakery'
    },
    location: {
      es: 'Piso 1 · Galería Peatonal',
      en: '1st Floor · Walkway Gallery'
    },
    hours: {
      es: 'Todos los días: 6:00 am – 9:00 pm',
      en: 'Daily: 6:00 am – 9:00 pm'
    },
    image: '/img/fachada-2.jpg',
    description: {
      es: 'Inicie el día con el aroma del café de origen de fincas cafeteras vallecaucanas, repostería recién horneada, opciones saludables y nuestro generoso desayuno buffet diario.',
      en: 'Awaken with single-origin beans from the mountains of Valle del Cauca, warm house-made pastries, cold-pressed juices, and our signature daily buffet breakfast.'
    },
    specialties: {
      es: ['Métodos de filtrado artesanal (Chemex, Aeropress)', 'Panadería y pastelería francesa hecha en casa', 'Desayuno buffet con estación de huevos al gusto', 'Frutas tropicales y jugos 100% naturales'],
      en: ['Artisan pour-over brewing (Chemex, Aeropress)', 'Freshly baked French viennoiseries and sourdough', 'Full breakfast buffet with custom egg station', 'Fresh tropical fruit bar & natural cold juices']
    }
  }
];
