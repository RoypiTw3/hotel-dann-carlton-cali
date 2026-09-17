export interface Venue {
  name: string;
  tower: {
    es: string;
    en: string;
  };
  floor: {
    es: string;
    en: string;
  };
  area: string;
  capacity: number;
  image: string;
  use: {
    es: string;
    en: string;
  };
}

export const venues: Venue[] = [
  {
    name: 'Salón Ritz',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 2', en: 'Floor 2' },
    area: '850 m²',
    capacity: 1000,
    image: '/img/salon-ritz.jpg',
    use: {
      es: 'Congresos multitudinarios, ferias comerciales, banquetes de gala y exposiciones.',
      en: 'Conventions, trade fairs, gala banquets, and major corporate exhibitions.'
    }
  },
  {
    name: 'Salón Colombia',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 15', en: 'Floor 15' },
    area: '309 m²',
    capacity: 300,
    image: '/img/salon-colombia.jpg',
    use: {
      es: 'Eventos sociales, bodas panorámicas y conferencias con área exclusiva de mezanine.',
      en: 'Social galas, panoramic weddings, and conferences with exclusive mezzanine space.'
    }
  },
  {
    name: 'Salón Carlton',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 2', en: 'Floor 2' },
    area: '110 m²',
    capacity: 100,
    image: '/img/salon-ritz.jpg',
    use: {
      es: 'Seminarios ejecutivos, lanzamientos de marca y recepciones corporativas.',
      en: 'Executive seminars, brand launches, and corporate receptions.'
    }
  },
  {
    name: 'Salón Versalles',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 3', en: 'Floor 3' },
    area: '86 m²',
    capacity: 100,
    image: '/img/salon-versalles.jpg',
    use: {
      es: 'Conferencias magistrales, sesiones de trabajo y cócteles de networking.',
      en: 'Keynotes, strategic work sessions, and networking cocktails.'
    }
  },
  {
    name: 'Salón Las Ceibas',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 3', en: 'Floor 3' },
    area: '80 m²',
    capacity: 100,
    image: '/img/salon-ceibas.jpg',
    use: {
      es: 'Capacitaciones grupales, banquetes íntimos y reuniones académicas.',
      en: 'Group trainings, intimate banquets, and academic sessions.'
    }
  },
  {
    name: 'Salón Centenario',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 3', en: 'Floor 3' },
    area: '78 m²',
    capacity: 80,
    image: '/img/salon-centenario.jpg',
    use: {
      es: 'Talleres interactivos, presentaciones de producto y juntas de negocios.',
      en: 'Interactive workshops, product demonstrations, and business forums.'
    }
  },
  {
    name: 'Salón El Peñón',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Piso 3', en: 'Floor 3' },
    area: '60 m²',
    capacity: 50,
    image: '/img/salon-versalles.jpg',
    use: {
      es: 'Reuniones de comité, ruedas de prensa y cócteles privados.',
      en: 'Committee meetings, press briefings, and private cocktail receptions.'
    }
  },
  {
    name: 'Salón Santiago de Cali',
    tower: { es: 'Torre Dann Cali', en: 'Dann Cali Tower' },
    floor: { es: 'Piso 1', en: 'Floor 1' },
    area: '70 m²',
    capacity: 60,
    image: '/img/salon-ceibas.jpg',
    use: {
      es: 'Jornadas de inducción, reuniones directivas y desayunos de trabajo.',
      en: 'Induction days, board meetings, and executive working breakfasts.'
    }
  },
  {
    name: 'Salón Farallones',
    tower: { es: 'Torre Dann Cali', en: 'Dann Cali Tower' },
    floor: { es: 'Piso 2', en: 'Floor 2' },
    area: '95 m²',
    capacity: 80,
    image: '/img/salon-colombia.jpg',
    use: {
      es: 'Conferencias especializadas, talleres prácticos y simposios.',
      en: 'Specialized conferences, hands-on workshops, and symposia.'
    }
  },
  {
    name: 'Salón La Tertulia',
    tower: { es: 'Torre Dann Cali', en: 'Dann Cali Tower' },
    floor: { es: 'Piso 2', en: 'Floor 2' },
    area: '120 m²',
    capacity: 90,
    image: '/img/salon-ritz.jpg',
    use: {
      es: 'Almuerzos corporativos, conversatorios y celebraciones familiares.',
      en: 'Corporate luncheons, cultural talks, and family celebrations.'
    }
  },
  {
    name: 'Salas Ejecutivas (Boardrooms)',
    tower: { es: 'Torre Dann Carlton', en: 'Dann Carlton Tower' },
    floor: { es: 'Mezanine', en: 'Mezzanine' },
    area: '45 m²',
    capacity: 20,
    image: '/img/salon-centenario.jpg',
    use: {
      es: 'Juntas directivas, negociaciones de alto nivel y entrevistas confidenciales.',
      en: 'Board of directors meetings, high-level negotiations, and interviews.'
    }
  }
];
