export interface Room {
  slug: string;
  name: {
    es: string;
    en: string;
  };
  tower: {
    es: string;
    en: string;
  };
  bed: {
    es: string;
    en: string;
  };
  capacity: {
    es: string;
    en: string;
  };
  area: string;
  priceCOP: number;
  roomtypeid: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
}

export const rooms: Room[] = [
  {
    slug: 'suite-majestic',
    name: {
      es: 'Suite Majestic',
      en: 'Suite Majestic'
    },
    tower: {
      es: 'Torre Carlton',
      en: 'Carlton Tower'
    },
    bed: {
      es: '1 Cama King',
      en: '1 King Bed'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '72 m²',
    priceCOP: 994000,
    roomtypeid: '13881',
    image: '/img/suite-majestic-9.jpg',
    description: {
      es: 'La máxima expresión del lujo en Cali. Amplia suite con sala de estar independiente, baño de mármol adicional y una exclusiva terraza privada con jacuzzi panorámico.',
      en: 'The pinnacle of luxury in Cali. Expansive suite featuring a separate parlor, powder room, and a private terrace equipped with an open-air panoramic jacuzzi.'
    },
    features: {
      es: ['Terraza privada con jacuzzi', 'Sala de estar independiente', 'Cóctel de bienvenida', 'Smart TV HD & Wi-Fi de alta velocidad'],
      en: ['Private terrace with Jacuzzi', 'Separate living lounge', 'Welcome signature cocktail', 'HD Smart TV & High-speed Wi-Fi']
    }
  },
  {
    slug: 'suite-carlton',
    name: {
      es: 'Suite Carlton',
      en: 'Suite Carlton'
    },
    tower: {
      es: 'Torre Carlton',
      en: 'Carlton Tower'
    },
    bed: {
      es: '1 Cama King',
      en: '1 King Bed'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '54 m²',
    priceCOP: 714000,
    roomtypeid: '13882',
    image: '/img/suite-carlton7.jpg',
    description: {
      es: 'Espacio y serenidad con acabados en maderas nobles. Cuenta con espaciosa sala de estar, baño auxiliar y una kitchenette equipada con cafetera de grano y microondas.',
      en: 'Spacious calm with warm fine wood accents. Includes an inviting living room, guest bathroom, and an efficiency kitchenette with coffee machine and microwave.'
    },
    features: {
      es: ['Kitchenette equipada', 'Sala de estar', 'Baño auxiliar', 'Insonorización acústica total'],
      en: ['Equipped kitchenette', 'Sitting lounge', 'Guest powder room', 'Total acoustic soundproofing']
    }
  },
  {
    slug: 'business-carlton-king',
    name: {
      es: 'Business Carlton King',
      en: 'Business Carlton King'
    },
    tower: {
      es: 'Torre Carlton',
      en: 'Carlton Tower'
    },
    bed: {
      es: '1 Cama King',
      en: '1 King Bed'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '38 m²',
    priceCOP: 350000,
    roomtypeid: '13883',
    image: '/img/business-carlton-king.jpg',
    description: {
      es: 'Diseñada pensando en la productividad y el descanso del viajero corporativo. Escritorio ergonómico con iluminación natural y cama King de confort superior.',
      en: 'Tailored for corporate focus and deep rest. Ergonomic workspace with ample natural light paired with a superior-comfort King bed.'
    },
    features: {
      es: ['Escritorio de trabajo ejecutivo', 'Cama King de descanso profundo', 'Minibar surtido', 'Caja de seguridad digital'],
      en: ['Executive work desk', 'Deep-sleep King bed', 'Curated minibar', 'Digital safe']
    }
  },
  {
    slug: 'business-carlton-twin',
    name: {
      es: 'Business Carlton Twin',
      en: 'Business Carlton Twin'
    },
    tower: {
      es: 'Torre Carlton',
      en: 'Carlton Tower'
    },
    bed: {
      es: '2 Camas Twin',
      en: '2 Twin Beds'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '38 m²',
    priceCOP: 350000,
    roomtypeid: '13884',
    image: '/img/business-carlton-twin.jpg',
    description: {
      es: 'Comodidad compartida en la Torre Carlton. Dos camas individuales de alta gama con escritorio amplio y baño privado con ducha de hidromasaje.',
      en: 'Shared comfort within the Carlton Tower. Two premium single beds with an expansive work surface and private bathroom with hydro-massage shower.'
    },
    features: {
      es: ['2 camas Twin independientes', 'Escritorio de trabajo', 'Ducha tipo lluvia', 'Aire acondicionado silencioso'],
      en: ['2 independent Twin beds', 'Dedicated work desk', 'Rain shower', 'Whisper-quiet AC']
    }
  },
  {
    slug: 'business-carlton-queen',
    name: {
      es: 'Business Carlton Queen',
      en: 'Business Carlton Queen'
    },
    tower: {
      es: 'Torre Carlton',
      en: 'Carlton Tower'
    },
    bed: {
      es: '1 Cama Queen',
      en: '1 Queen Bed'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '34 m²',
    priceCOP: 330000,
    roomtypeid: '13885',
    image: '/img/business-carlton-queen.jpg',
    description: {
      es: 'El equilibrio justo entre elegancia y practicidad. Equipada con cama Queen, cerradura digital por proximidad y finos textiles de algodón.',
      en: 'The sweet spot of refined taste and everyday practicality. Outfitted with a plush Queen bed, digital keycard entry, and fine cotton linens.'
    },
    features: {
      es: ['Cama Queen acolchada', 'Acceso digital seguro', 'Vista a la ciudad', 'Wi-Fi 6 de alta velocidad'],
      en: ['Plush Queen bed', 'Secure digital access', 'City skyline view', 'High-speed Wi-Fi 6']
    }
  },
  {
    slug: 'double-superior-dann-cali',
    name: {
      es: 'Double Superior Dann Cali',
      en: 'Double Superior Dann Cali'
    },
    tower: {
      es: 'Torre Dann Cali',
      en: 'Dann Cali Tower'
    },
    bed: {
      es: '1 Cama King + Cama Extra',
      en: '1 King Bed + Extra Bed'
    },
    capacity: {
      es: 'Hasta 4 personas',
      en: 'Up to 4 guests'
    },
    area: '42 m²',
    priceCOP: 301000,
    roomtypeid: '13886',
    image: '/img/double-superior.png',
    description: {
      es: 'Espacio ideal para familias y viajes grupales en la tradicional Torre Dann. Habitación generosa con capacidad de hasta 4 huéspedes.',
      en: 'Ideal for families and group travels within the Dann Tower. Generous room layout accommodating up to 4 guests comfortably.'
    },
    features: {
      es: ['Capacidad familiar', 'Baño espacioso', 'Climatización individual', 'Smart TV HD'],
      en: ['Family capacity', 'Spacious bathroom', 'Individual climate control', 'HD Smart TV']
    }
  },
  {
    slug: 'twin-superior-dann-cali',
    name: {
      es: 'Twin Superior Dann Cali',
      en: 'Twin Superior Dann Cali'
    },
    tower: {
      es: 'Torre Dann Cali',
      en: 'Dann Cali Tower'
    },
    bed: {
      es: '2 Camas Twin + Cama Extra',
      en: '2 Twin Beds + Extra Bed'
    },
    capacity: {
      es: 'Hasta 4 personas',
      en: 'Up to 4 guests'
    },
    area: '40 m²',
    priceCOP: 287000,
    roomtypeid: '13887',
    image: '/img/twin-superior.png',
    description: {
      es: 'Flexibilidad para grupos de amigos o colegas. Ofrece camas Twin combinadas con una cama adicional sin comprometer la comodidad.',
      en: 'Flexibility for friend groups or corporate travel partners. Features twin bedding plus an extra bed without sacrificing moving space.'
    },
    features: {
      es: ['Hasta 4 huéspedes', 'Insonorización', 'Mesa auxiliar', 'Acceso a zona húmeda'],
      en: ['Up to 4 guests', 'Soundproofing', 'Side work table', 'Full wet zone access']
    }
  },
  {
    slug: 'twin-dann-cali',
    name: {
      es: 'Twin Dann Cali',
      en: 'Twin Dann Cali'
    },
    tower: {
      es: 'Torre Dann Cali',
      en: 'Dann Cali Tower'
    },
    bed: {
      es: '2 Camas Twin',
      en: '2 Twin Beds'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '32 m²',
    priceCOP: 266000,
    roomtypeid: '13888',
    image: '/img/twin-dann.png',
    description: {
      es: 'Opción cómoda y accesible para estancias cortas. Dos camas individuales, baño privado completo y excelente ventilación natural.',
      en: 'Comfortable and accessible choice for short stays. Two single beds, complete private bathroom, and refreshing natural ventilation.'
    },
    features: {
      es: ['2 camas individuales', 'Baño privado', 'Caja de seguridad', 'Wi-Fi sin costo'],
      en: ['2 single beds', 'Private bathroom', 'In-room safe', 'Complimentary Wi-Fi']
    }
  },
  {
    slug: 'standard-dann-cali',
    name: {
      es: 'Standard Dann Cali',
      en: 'Standard Dann Cali'
    },
    tower: {
      es: 'Torre Dann Cali',
      en: 'Dann Cali Tower'
    },
    bed: {
      es: '1 Cama Queen',
      en: '1 Queen Bed'
    },
    capacity: {
      es: 'Hasta 2 personas',
      en: 'Up to 2 guests'
    },
    area: '30 m²',
    priceCOP: 266000,
    roomtypeid: '13889',
    image: '/img/standard-dann.png',
    description: {
      es: 'El punto de partida perfecto para explorar Cali. Cama Queen acogedora, baño moderno y atmósfera tranquila en el corazón de El Peñón.',
      en: 'The ideal base to explore Cali. Cozy Queen bed, modern bathroom, and peaceful atmosphere in the heart of El Peñón.'
    },
    features: {
      es: ['Cama Queen', 'Baño moderno', 'Minibar', 'Escritorio compacto'],
      en: ['Queen bed', 'Modern bathroom', 'Minibar', 'Compact desk']
    }
  }
];
