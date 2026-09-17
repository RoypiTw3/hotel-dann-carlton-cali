export interface Amenity {
  id: string;
  name: {
    es: string;
    en: string;
  };
  floor: {
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
  features: {
    es: string[];
    en: string[];
  };
}

export const amenities: Amenity[] = [
  {
    id: 'zona-humeda',
    name: {
      es: 'Zona Húmeda & Piscina al Aire Libre',
      en: 'Wet Zone & Open-Air Swimming Pool'
    },
    floor: {
      es: 'Piso 4 · Torre Dann Carlton',
      en: '4th Floor · Dann Carlton Tower'
    },
    hours: {
      es: 'Lunes a Domingo: 9:00 am – 9:00 pm',
      en: 'Monday to Sunday: 9:00 am – 9:00 pm'
    },
    image: '/img/piscina.jpg',
    description: {
      es: 'Un oasis de relajación en las alturas. Piscina semiolímpica climatizada al aire libre con vista panorámica a la cordillera de los Farallones, jacuzzi de hidromasaje, baño turco y sauna.',
      en: 'An elevated sanctuary of wellness. Heated outdoor semi-olympic swimming pool with open mountain vistas, hydrotherapy jacuzzi, steam room, and dry Finnish sauna.'
    },
    features: {
      es: ['Piscina climatizada para adultos y niños', 'Jacuzzi con chorros terapéuticos', 'Sauna finlandés y baño turco húmedo', 'Servicio de toallas y bar de bebidas'],
      en: ['Heated pool for adults and children', 'Therapeutic hydro-massage jacuzzi', 'Finnish dry sauna & eucalyptus steam room', 'Poolside towel service and beverage bar']
    }
  },
  {
    id: 'gimnasio',
    name: {
      es: 'Gimnasio Fitness Center',
      en: 'Fitness Center'
    },
    floor: {
      es: 'Piso 4 · Torre Dann Carlton',
      en: '4th Floor · Dann Carlton Tower'
    },
    hours: {
      es: 'Lunes a Domingo: 5:00 am – 9:00 pm',
      en: 'Monday to Sunday: 5:00 am – 9:00 pm'
    },
    image: '/img/piscina-pareja.jpg',
    description: {
      es: 'Espacio acondicionado para mantener su rutina de entrenamiento. Máquinas cardiovasculares Life Fitness con pantallas individuales, pesas libres, barras olímpicas y zona de estiramiento.',
      en: 'A dedicated facility to keep your fitness momentum. Premium cardiovascular equipment with individual monitors, free weights, resistance machines, and stretching area.'
    },
    features: {
      es: ['Cintas de correr y elípticas de última generación', 'Bancos de pesas libres y mancuernas', 'Zona para yoga y calistenia', 'Hidratación y toallas de cortesía'],
      en: ['State-of-the-art treadmills and ellipticals', 'Free-weight racks and benches', 'Dedicated yoga and core mats', 'Complimentary chilled water & towels']
    }
  },
  {
    id: 'salas-ejecutivas',
    name: {
      es: 'Salas Ejecutivas & Business Center',
      en: 'Executive Lounges & Business Center'
    },
    floor: {
      es: 'Mezanine · Torre Dann Carlton',
      en: 'Mezzanine · Dann Carlton Tower'
    },
    hours: {
      es: 'Lunes a Sábado: 7:00 am – 8:00 pm',
      en: 'Monday to Saturday: 7:00 am – 8:00 pm'
    },
    image: '/img/salon-centenario.jpg',
    description: {
      es: 'Ambiente confidencial y profesional para cerrar acuerdos y realizar presentaciones. Equipadas con pantallas 4K para videoconferencias, Wi-Fi simétrico y servicio de cafetería continua.',
      en: 'A discrete, professional setting for executive negotiations and client meetings. Features 4K video conference displays, dedicated high-speed Wi-Fi, and continuous beverage bar.'
    },
    features: {
      es: ['Pantallas 4K con conectividad HDMI e inalámbrica', 'Impresión y escaneo de alta velocidad', 'Mesa de conferencias para 8 a 16 personas', 'Coffee break ejecutivo bajo solicitud'],
      en: ['4K monitors with HDMI and wireless casting', 'High-volume digital printing & scanning', 'Conference table for 8 to 16 delegates', 'On-demand executive coffee breaks']
    }
  },
  {
    id: 'room-service',
    name: {
      es: 'Servicio a la Habitación 24 Horas',
      en: '24-Hour In-Room Dining'
    },
    floor: {
      es: 'Disponible en todas las habitaciones',
      en: 'Available in all rooms & suites'
    },
    hours: {
      es: '24 horas · Todos los días del año',
      en: '24/7 · 365 days a year'
    },
    image: '/img/platos.jpg',
    description: {
      es: 'Disfrute de la cocina del hotel servida con esmero en la intimidad de su suite. Menú completo desde el desayuno hasta opciones nocturnas reconfortantes.',
      en: 'Delight in fine dining served discreetly in the privacy of your suite. Full gastronomic offerings ranging from fresh morning breakfasts to comforting late-night plates.'
    },
    features: {
      es: ['Menú a la carta disponible las 24 horas', 'Desayunos completos servidos a la habitación', 'Opciones vegetarianas y sin gluten', 'Servicio de vajilla y cristalería fina'],
      en: ['24-hour à la carte menu', 'Full breakfast delivered to bed', 'Vegetarian and gluten-conscious dishes', 'Fine porcelain and glassware table setup']
    }
  },
  {
    id: 'lavanderia',
    name: {
      es: 'Lavandería y Tintorería Personalizada',
      en: 'Personalized Laundry & Dry Cleaning'
    },
    floor: {
      es: 'Servicio en habitación',
      en: 'In-room valet service'
    },
    hours: {
      es: 'Lunes a Sábado: 7:00 am – 7:00 pm',
      en: 'Monday to Saturday: 7:00 am – 7:00 pm'
    },
    image: '/img/suite-carlton7.jpg',
    description: {
      es: 'Cuidado experto para sus prendas con entrega express en el mismo día. Tratamientos delicados para trajes de gala y ropa ejecutiva.',
      en: 'Expert care for your wardrobe with same-day express return. Dedicated delicate treatments for formal attire and business wear.'
    },
    features: {
      es: ['Servicio estándar y express en el día', 'Planchado al vapor profesional', 'Limpieza en seco para prendas delicadas', 'Empaque de viaje de cortesía'],
      en: ['Standard and same-day express service', 'Professional artisan steam pressing', 'Delicate eco-friendly dry cleaning', 'Complimentary luggage-ready packing']
    }
  },
  {
    id: 'pet-friendly',
    name: {
      es: 'Programa Pet Friendly',
      en: 'Pet Friendly Program'
    },
    floor: {
      es: 'Habitaciones seleccionadas',
      en: 'Designated pet-friendly rooms'
    },
    hours: {
      es: 'Servicio continuo con reserva previa',
      en: 'Continuous service with prior booking'
    },
    image: '/img/fachada-9.jpg',
    description: {
      es: 'Su mascota es bienvenida en Hotel Dann Carlton Cali. Ofrecemos camita cómoda, platos de hidratación y senderos cercanos en el Parque del Peñón.',
      en: 'Your canine companion is warmly welcomed. We provide a plush sleeping pad, dining bowls, and recommendations for strolls along El Peñón park.'
    },
    features: {
      es: ['Cama acolchada y bebedero en la habitación', 'Snack de bienvenida para mascotas', 'Senderos para paseos en el barrio El Peñón', 'Acepta perros de hasta 15 kg'],
      en: ['Plush pet bed and water bowls provided', 'Welcome treat for your companion', 'Nearby walking trails in leafy El Peñón', 'Welcomes dogs up to 15 kg / 33 lbs']
    }
  }
];
