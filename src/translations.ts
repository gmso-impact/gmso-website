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
    hello: "hello",
    tagline: "Find your story @ CSU",
    "Read More": "Read More",
    Close: "Close",
    All: "All Stories",
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
      "Alumnus": "Alumnus",
      "International": "International",
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
    hello: "Hola",
    tagline: "Encuentra tu historia @ CSU",
    "Read More": "Leer Más",
    Close: "Salida",
    All: "Todos Cuentos",
    storyThemes: {
      Health: "Vida",
      Environment: "El Entorno",
      Water: "Agua",
      Food: "Alimento",
      Energy: "Energía",
      Community: "Comunidad"
    },
    idTags: {
      "International": "Internacional",
    },
  },
  fr: {},
};

export const I18nSetup = {
  locale: "en", // default langauge
  fallbackLocale: "en", // fall back if no translation exists
  messages: translations, // set locale messages
};
