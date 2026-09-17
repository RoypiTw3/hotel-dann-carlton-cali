# Hotel Dann Carlton Cali — Rediseño Web Oficial

Rediseño contemporáneo para el sitio web del **Hotel Dann Carlton Cali** (`hotelesdanncali.com`), concebido bajo la dirección de arte de *lujo silencioso* y estructurado sobre la identidad patrimonial de la marca: *"Dos torres, un puente"*.

Desarrollado con **Astro 5**, tipografía editorial (*Instrument Serif* + *Instrument Sans*), bilingüismo nativo (Español en `/` e Inglés en `/en/`) e integración directa al motor de reservas oficial de **TravelClick** (`HotelID: 9878657`).

---

## 🌟 Características Principales

- **Arquitectura de 16 Rutas (8 Páginas × 2 Idiomas)**:
  - **Inicio (`/` y `/en/`)**: Hero editorial, barra de reserva directa, datos de escala, gastronomía, experiencias y ubicación en El Peñón.
  - **Habitaciones (`/habitaciones` y `/en/habitaciones`)**: 9 categorías distribuidas entre Torre Carlton y Torre Dann Cali con fichas técnicas y conexión directa a su `roomtypeid`.
  - **Amenidades (`/amenidades` y `/en/amenidades`)**: Zona húmeda, piscina semiolímpica en piso 4, gimnasio, centro de negocios y política Pet Friendly.
  - **Restaurantes (`/restaurantes` y `/en/restaurantes`)**: Las Palmas (parrilla), Lobby Bar Bahía Carlton, Café Farallones y Room Service 24h.
  - **Spa (`/spa` y `/en/spa`)**: Menú de rituales faciales y corporales, hidroterapia y sauna.
  - **Eventos (`/eventos` y `/en/eventos`)**: 11 salones modulares con capacidades en banquete, auditorio y cóctel.
  - **Ofertas (`/ofertas` y `/en/ofertas`)**: Paquetes románticos y escapadas con reserva directa vinculada a `RatePlanId`.
  - **Contacto (`/contacto` y `/en/contacto`)**: Directorio PBX por departamento, ubicación y mapa.

- **Integración TravelClick**:
  - Parámetros `DateIn` y `DateOut` en formato `MM/DD/YYYY`.
  - Conmutador de idioma dinámico (`LanguageID=2` para ES, `LanguageID=1` para EN).
  - Precarga de `Adults`, `roomtypeid` y `RatePlanId`.

- **Estética & Rendimiento**:
  - Paleta: Tinta Dann (`#0E1E3A`), Papel Marfil (`#FBFAF7`), Piedra Cálida (`#E6E3DC`), Latón (`#A98A5B`).
  - Cero dependencias pesadas de cliente; compilación estática instantánea (<600ms).
  - 100% responsive con menú drawer animado para dispositivos móviles.

---

## 🚀 Puesta en Marcha Local

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd dancali

# 2. Instalar dependencias
npm install

# 3. Iniciar entorno de desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Previsualizar compilación estática
npm run preview
```

---

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/)
- **Lenguaje**: TypeScript
- **Estilos**: Vanilla CSS moderno con Design Tokens y Variables Nativas
- **Internacionalización**: Astro i18n nativo
- **SEO**: `@astrojs/sitemap`, OpenGraph, Schema.org JSON-LD
