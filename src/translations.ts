
export const languages = [
    {
        locale: 'en',
        language: "English"
    }, {
        locale: 'sp',
        language: "Español"
    }, {
        locale: 'fr',
        language: "Francés"
    }
]

const translations = {
    en: {
        hello: 'hello world',
        All: 'All',
        tagline: 'Find your story @ CSU',
        storyThemes: {
            "Health": 'Health',
            "Environment": 'Environment',
            "Water": 'Water',
            "Food": 'Food',
            "Energy": 'Energy',
            "Community": 'Community'
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
            "Climate": "Climate",
            "Conservation": "Conservation",
        },
        idTags: {
            "Alumnus": "Alumnus",
            "International": "International",
            "First Generation": "First Generation",
        },
        collegeTags: {
            "Warner College of Natural Resources": "Warner College of Natural Resources",
            "Walter Scott, Jr. College of Engineering": "Walter Scott, Jr. College of Engineering",
            "Natural Sciences": "Natural Sciences",
            "Agricultural Sciences": "Agricultural Sciences",
            "Veterinary Medicine and Biomedical Sciences": "Veterinary Medicine and Biomedical Sciences",
            "Liberal Arts": "Liberal Arts",
            "Health and Human Sciences": "Health and Human Sciences",
        }

    },
    sp: {
        tagline: 'Encuentra tu historia @ CSU',
        hello: 'Hola',
        All: "Todos",
        storyThemes: {
            Health: 'Vida',
        },
    },
    fr: {

    }
}


export const I18nSetup = {
    locale: 'en', // default langauge
    fallbackLocale: 'en', // fall back if no translation exists
    messages: translations, // set locale messages 
}