import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const languages = [
  {
    locale: "en",
    language: "English",
  },
  {
    locale: "es",
    language: "Español",
  },
];

const translations = {
  en: {
    greeting: "Welcome to the CSU Impact Map",
    tagline: "Find your story @ CSU!",
    "Read More": "Read More",
    help1:
      "Through stories of our people, the places we travel and the work we do, be inspired to help us tackle challenges in food, water, health, energy, community and the environment. Tap on a map marker (mobile) or click either a story card or map marker (web).",
    helpReadStory: `Swipe up to read <br/> more of the story`,

    helpMapSwipe: `Drag one finger <br/> to pan the map`,
    helpMapZoom: `Drag 2 fingers <br/> to zoom in and out`,
    helpMapOpen: `Poke a map marker <br/> to read that story`,

    FindStories: "Find Stories by",
    Campus: "Campus",
    AllCampuses: "All Campuses",
    Theme: "Theme",
    Women: "Women in Leadership",

    Close: "Close",
    AllStories: "All Stories",
    AllThemes: "All Themes",
    Stories: "Stories",
    Filter: "Filter",
    ResetFilter: "Reset filter to see more stories",
    ResetMap: "Reset map to see more stories",

    Featured: "Featured",
    IntroVideo: "Watch Intro Video",
    QRscan: "Scan Me",
    QRpopover: "View this exhibit on your phone!",
    Explore: "Get ready to explore!",
    SortBy: "Sort by",
    SortByTitle: "Title",
    SortByPerson: "Person",

    ContinueEN: "Continue",
    ContinueES: "Continuar",
    baseMaps: {
      mapType: "Map Type",
      political: "Political",
      terrain: "Terrain",
      satellite: "Satellite",
    },
    storyThemes: {
      Health: "Health",
      Environment: "Environment",
      Water: "Water",
      Food: "Food",
      Energy: "Energy",
      Community: "Community",
    },
    storyTags: {
      "Environmental Justice": "Environmental Justice",
      "Community Health": "Community Health",
      "Civic Engagement": "Civic Engagement",
      "Culture/Arts": "Culture/Arts",
      "Development/Innovation": "Development/Innovation",
      "Water Quality": "Water Quality",
      "Human Health": "Human Health",
      "Animal Health": "Animal Health",
      "Environmental Health": "Environmental Health",
      Climate: "Climate",
      Conservation: "Conservation",
    },
    idTags: {
      Alumnus: "Alumnus",
      International: "International",
      "First Generation": "First Generation",
    },
    collegeTags: {
      "Warner College of Natural Resources":
        "Warner College of Natural Resources",
      "Walter Scott, Jr. College of Engineering":
        "Walter Scott, Jr. College of Engineering",
      "Natural Sciences": "Natural Sciences",
      "Agricultural Sciences": "Agricultural Sciences",
      "Veterinary Medicine and Biomedical Sciences":
        "Veterinary Medicine and Biomedical Sciences",
      "Liberal Arts": "Liberal Arts",
      "Health and Human Sciences": "Health and Human Sciences",
    },
  },
  es: {
    greeting: "Bienvenido al Mapa de Impacto de CSU",
    tagline: "Encuentra tu historia @ CSU",
    "Read More": "Leer Más",
    help1:
      "Through stories of our people, the places we travel and the work we do, be inspired to help us tackle challenges in food, water, health, energy, community and the environment. Tap on a map marker (mobile) or click either a story card or map marker (web).",
    helpReadStory: `Desliza hacia arriba <br/> para leer más de la historia.`,

    helpMapSwipe: `Arrastre un dedo <br/> para desplazarse por el mapa`,
    helpMapZoom: `Arrastre 2 dedos <br/> para acercar y alejar`,
    helpMapOpen: `Toca un marcador de mapa <br/> para leer esa historia`,

    FindStories: "Encuentra las historias por:",
    Campus: "Sede",
    AllCampuses: "Todas las sedes",
    Theme: "Categorías",
    Women: "Mujeres líderes",

    Close: "Salida",
    AllStories: "Todas las historias",
    AllThemes: "Todas las categorías",
    Stories: "Historias",
    Filter: "Filtrar",
    ResetFilter: "Restablecer el filtro para ver más  historias",
    ResetMap: "Restablecer el mapa para ver más  historias",

    Featured: "Presentada",
    IntroVideo: "Mirar video",
    QRscan: "Escanéame",
    QRpopover: "Ver está pieza en tu móbil",
    Explore: "¡Prepárate para la aventura!",

    SortBy: "Ordenar por:",
    SortByTitle: "Título",
    SortByPerson: "Persona",

    ContinueEN: "Continue",
    ContinueES: "Continuar",
    baseMaps: {
      mapType: "Tipo de Mapa",
      political: "Político",
      terrain: "Relieve",
      satellite: "Satelital",
    },
    storyThemes: {
      Health: "Salud",
      Environment: "Medioambiente",
      Water: "Agua",
      Food: "Alimento",
      Energy: "Energía",
      Community: "Comunidad",
    },
    storyTags: {
      "Environmental Justice": "Justicia Medioambiental",
      "Community Health": "Salud Pública",
      "Civic Engagement": "Participación Cívica",
      "Culture/Arts": "Cultura/Arte",
      "Development/Innovation": "Desarrollo/Innovación",
      "Water Quality": "Calidad del agua",
      "Human Health": "Salud Humana",
      "Animal Health": "Salud Animal",
      "Environmental Health": "Salud Medioambiental",
      Climate: "Clima",
      Conservation: "Conservación",
    },
    idTags: {
      Alumnus: "Alumnus",
      International: "Internacional",
      "First Generation": "Primera Generación",
    },
    collegeTags: {
      "Warner College of Natural Resources":
        "Warner College of Natural Resources",
      "Walter Scott, Jr. College of Engineering":
        "Walter Scott, Jr. College of Engineering",
      "Natural Sciences": "Natural Sciences",
      "Agricultural Sciences": "Agricultural Sciences",
      "Veterinary Medicine and Biomedical Sciences":
        "Veterinary Medicine and Biomedical Sciences",
      "Liberal Arts": "Liberal Arts",
      "Health and Human Sciences": "Health and Human Sciences",
    },
  },
  fr: {},
};

export const I18nSetup = {
  locale: "en", // default langauge
  fallbackLocale: "en", // fall back if no translation exists
  messages: translations, // set locale messages
};

const i18n = new VueI18n(I18nSetup);
export default i18n;
