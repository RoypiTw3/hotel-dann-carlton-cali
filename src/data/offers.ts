export interface Offer {
  slug: string;
  name: {
    es: string;
    en: string;
  };
  priceCOP: number;
  ratePlanId: string;
  image: string;
  roomSlug: string;
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
}

export const offers: Offer[] = [
  {
    slug: 'sparkling-night',
    name: {
      es: 'Sparkling Night',
      en: 'Sparkling Night'
    },
    priceCOP: 637000,
    ratePlanId: 'SPARKLING',
    image: '/img/planes-romanticos-3.jpg',
    roomSlug: 'business-carlton-king',
    description: {
      es: 'Inicie una noche de celebración en la comodidad de nuestra habitación Business Carlton King con botella de espumoso y finos chocolates.',
      en: 'Commence an evening of celebration in the comfort of our Business Carlton King room with chilled sparkling wine and handcrafted chocolates.'
    },
    highlights: {
      es: [
        'Alojamiento en Business Carlton King',
        'Botella de vino espumoso en la habitación',
        'Desayuno buffet o a la habitación',
        'Late check-out hasta las 3:00 pm (sujeto a disponibilidad)'
      ],
      en: [
        'Overnight stay in Business Carlton King',
        'Bottle of sparkling wine in room',
        'Buffet or in-room gourmet breakfast',
        'Complimentary late check-out until 3:00 pm (subject to availability)'
      ]
    }
  },
  {
    slug: 'desire-night',
    name: {
      es: 'Desire Night',
      en: 'Desire Night'
    },
    priceCOP: 696000,
    ratePlanId: 'DESIRE',
    image: '/img/planes-romanticos-6.jpg',
    roomSlug: 'business-carlton-king',
    description: {
      es: 'Una atmósfera romántica cuidadosamente preparada con lencería especial, pétalos de rosa y fresas achocolatadas para una velada inolvidable.',
      en: 'A romantic atmosphere with delicate floral decor, rose petals, and chocolate-dipped strawberries for a magical getaway.'
    },
    highlights: {
      es: [
        'Habitación decorada con pétalos de rosas y velas',
        'Fresas con chocolate artesanal',
        'Media botella de vino de la casa',
        'Desayuno servido en la habitación',
        'Acceso total a piscina y jacuzzi'
      ],
      en: [
        'Room decorated with rose petals and ambient candles',
        'Hand-dipped chocolate strawberries',
        'Half bottle of house wine',
        'Room-service breakfast delivery',
        'Full swimming pool and jacuzzi privileges'
      ]
    }
  },
  {
    slug: 'inspired-night',
    name: {
      es: 'Inspired Night',
      en: 'Inspired Night'
    },
    priceCOP: 1165000,
    ratePlanId: 'INSPIRED',
    image: '/img/planes-romanticos-2.jpg',
    roomSlug: 'suite-carlton',
    description: {
      es: 'La distinción de la Suite Carlton puesta al servicio del romance. Espacio amplio, champaña importada y atención personalizada de nuestro mayordomo.',
      en: 'The distinction of our Suite Carlton dedicated to romance. Expansive suite layout, imported champagne, and concierge attention.'
    },
    highlights: {
      es: [
        'Estadía de lujo en Suite Carlton',
        'Botella de champaña y tabla de quesos finos',
        'Cena romántica de 3 tiempos servida en la suite',
        'Desayuno americano en la cama',
        'Parqueadero cubierto de cortesía'
      ],
      en: [
        'Luxury stay in Carlton Suite',
        'Imported champagne bottle and artisanal cheese platter',
        '3-course romantic dinner served in-suite',
        'American breakfast in bed',
        'Complimentary covered valet parking'
      ]
    }
  },
  {
    slug: 'majestic-night',
    name: {
      es: 'Majestic Night',
      en: 'Majestic Night'
    },
    priceCOP: 1610000,
    ratePlanId: 'MAJESTIC',
    image: '/img/pareja-3.jpg',
    roomSlug: 'suite-majestic',
    description: {
      es: 'Nuestra experiencia cumbre. Terraza privada bajo el cielo de Cali, jacuzzi al aire libre decorado y una cena gourmet bajo las estrellas.',
      en: 'Our pinnacle couple escape. Private terrace under the Cali evening sky, open-air dressed jacuzzi, and a starlit gourmet dinner.'
    },
    highlights: {
      es: [
        'Alojamiento en la exclusiva Suite Majestic',
        'Jacuzzi en terraza privada decorado con sales minerales y velas',
        'Botella de champán francés Möet & Chandon',
        'Cena de autor por nuestro chef ejecutivo',
        'Sesión de masaje en pareja de 50 minutos en Elena Prada Spa'
      ],
      en: [
        'Night stay in the premier Suite Majestic',
        'Private terrace jacuzzi prepared with mineral salts and candles',
        'Möet & Chandon French Champagne bottle',
        'Signature tasting dinner by our executive chef',
        '50-minute couples massage ritual at Elena Prada Spa'
      ]
    }
  },
  {
    slug: 'cenas-romanticas',
    name: {
      es: 'Cenas Románticas',
      en: 'Romantic Dinners'
    },
    priceCOP: 350000,
    ratePlanId: 'ROMANTICDINNER',
    image: '/img/pareja-7.jpg',
    roomSlug: '',
    description: {
      es: 'Una velada íntima diseñada por nuestros chefs en una mesa privada junto a la piscina o en salón reservado, con menú de 4 tiempos y maridaje.',
      en: 'An intimate evening crafted by our culinary team at a private poolside table or secluded salon, featuring a 4-course pairing menu.'
    },
    highlights: {
      es: [
        'Mesa reservada con decoración floral y velas',
        'Menú degustación de 4 tiempos',
        'Copa de vino maridada por tiempo',
        'Postre de autor para compartir',
        'Música ambiental seleccionada'
      ],
      en: [
        'Reserved candlelit table with fresh flower arrangement',
        '4-course tasting menu',
        'Sommelier wine pairing per course',
        'Signature dessert for two',
        'Curated acoustic musical ambience'
      ]
    }
  }
];
