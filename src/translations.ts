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
    Close: "Close",
    AllStories: "All Stories",
    AllThemes: "All Themes",
    Stories: "Stories",
    Filter: "Filter",
    ResetFilter: "Reset filter to see more stories",
    ResetMap: "Reset map to see more stories",
    QRpopover: "View this exhibit on your phone!",
    Explore: "Get ready to explore!",
    SortByStories: "Title",
    SortByPeople: "Name",

    ContinueEN: "Continue",
    ContinueES: "Continuar",
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
    Close: "Salida",
    AllStories: "Todos Cuentos",
    AllThemes: "Todos Temas",
    Stories: "Cuentos",
    Filter: "Filtrar",
    ResetFilter: "Restablecer el filtro para ver más cuentos",
    ResetMap: "Restablecer el mapa para ver más cuentos",

    QRpopover: "Ver está pieza en su móbil",
    Explore: "Prepárate para una aventura",

    SortByStories: "Title",
    SortByPeople: "Name",

    ContinueEN: "Continue",
    ContinueES: "Continuar",

    storyThemes: {
      Health: "Salud",
      Environment: "Ambiente",
      Water: "Agua",
      Food: "Alimento",
      Energy: "Energía",
      Community: "Comunidad",
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
      International: "Internacional",
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
  fr: {},
};

export const I18nSetup = {
  locale: "en", // default langauge
  fallbackLocale: "en", // fall back if no translation exists
  messages: translations, // set locale messages
};
