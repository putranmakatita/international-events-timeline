const asiaEvents = [
    {
        region: "asia",
        date: "1945",
        title: "End of Japanese Occupation in Asia",
        desc: "Japan surrendered in World War II ending its occupation across East and Southeast Asia.",
        country: "Japan",
        category: "war"
    },

    {
        region: "asia",
        date: "1947",
        title: "Partition of India and Pakistan",
        desc: "British India was divided into India and Pakistan causing one of the largest migrations in history.",
        country: "India / Pakistan",
        category: "war"
    },

    {
        region: "asia",
        date: "1949",
        title: "Founding of the People's Republic of China",
        desc: "The Chinese Communist Party established the People's Republic of China after defeating the Nationalists.",
        country: "China",
        category: "politics"
    },

    {
        region: "asia",
        date: "1950",
        title: "Korean War Begins",
        desc: "North Korea invaded South Korea leading to a major Cold War conflict involving the US and China.",
        country: "Korea",
        category: "war"
    },

    {
        region: "asia",
        date: "1953",
        title: "Korean War Armistice",
        desc: "An armistice agreement ended active fighting but no formal peace treaty was signed.",
        country: "Korea",
        category: "treaty"
    },

    {
        region: "asia",
        date: "1955",
        title: "Bandung Conference",
        desc: "Asian and African nations met in Indonesia to promote cooperation and non-alignment.",
        country: "Indonesia",
        category: "diplomacy"
    },

    {
        region: "asia",
        date: "1965",
        title: "Singapore Independence",
        desc: "Singapore separated from Malaysia and became a sovereign state.",
        country: "Singapore",
        category: "politics"
    },

    {
        region: "asia",
        date: "1967",
        title: "ASEAN Founded",
        desc: "Indonesia, Malaysia, Thailand, Singapore and the Philippines founded ASEAN.",
        country: "Southeast Asia",
        category: "organization"
    },

    {
        region: "asia",
        date: "1971",
        title: "Bangladesh Independence",
        desc: "Bangladesh gained independence from Pakistan after a war supported by India.",
        country: "Bangladesh",
        category: "war"
    },

    {
        region: "asia",
        date: "1975",
        title: "Fall of Saigon",
        desc: "North Vietnam captured Saigon ending the Vietnam War.",
        country: "Vietnam",
        category: "war"
    },

    {
        region: "asia",
        date: "1979",
        title: "China–Vietnam War",
        desc: "China invaded Vietnam after tensions related to Cambodia and Soviet alliances.",
        country: "China / Vietnam",
        category: "war"
    },

    {
        region: "asia",
        date: "1989",
        title: "Tiananmen Square Protests",
        desc: "Pro-democracy demonstrations in Beijing were suppressed by the Chinese government.",
        country: "China",
        category: "politics"
    },

    {
        region: "asia",
        date: "1991",
        title: "Central Asian Independence",
        desc: "Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan and Turkmenistan gained independence after the USSR collapse.",
        country: "Central Asia",
        category: "politics"
    },

    {
        region: "asia",
        date: "1997",
        title: "Asian Financial Crisis",
        desc: "A financial crisis hit Thailand, Indonesia, South Korea and other Asian economies.",
        country: "Asia",
        category: "economic"
    },

    {
        region: "asia",
        date: "1999",
        title: "East Timor Referendum",
        desc: "East Timor voted for independence from Indonesia under UN supervision.",
        country: "Timor-Leste",
        category: "diplomacy"
    },

    {
        region: "asia",
        date: "2001",
        title: "China Joins WTO",
        desc: "China joined the World Trade Organization transforming global trade dynamics.",
        country: "China",
        category: "economic"
    },

    {
        region: "asia",
        date: "2002",
        title: "East Timor Independence",
        desc: "Timor-Leste officially became an independent state.",
        country: "Timor-Leste",
        category: "politics"
    },

    {
        region: "asia",
        date: "2003",
        title: "Iraq War Begins",
        desc: "The US-led invasion of Iraq reshaped Middle Eastern geopolitics.",
        country: "Iraq",
        category: "war"
    },

    {
        region: "asia",
        date: "2005",
        title: "Six Party Talks",
        desc: "China, Japan, Russia, the US and the Koreas negotiated North Korea’s nuclear program.",
        country: "Korean Peninsula",
        category: "diplomacy"
    },

    {
        region: "asia",
        date: "2008",
        title: "Beijing Olympics",
        desc: "China hosted the Olympics symbolizing its rising global influence.",
        country: "China",
        category: "politics"
    },

    {
        region: "asia",
        date: "2010",
        title: "South China Sea Disputes Intensify",
        desc: "Territorial disputes between China and Southeast Asian nations escalated.",
        country: "South China Sea",
        category: "diplomacy"
    },

    {
        region: "asia",
        date: "2013",
        title: "Belt and Road Initiative",
        desc: "China announced a massive infrastructure project connecting Asia with Europe and Africa.",
        country: "China",
        category: "economic"
    },

    {
        region: "asia",
        date: "2014",
        title: "Hong Kong Umbrella Movement",
        desc: "Pro-democracy protests occurred in Hong Kong demanding electoral reforms.",
        country: "Hong Kong",
        category: "politics"
    },

    {
        region: "asia",
        date: "2016",
        title: "South China Sea Arbitration",
        desc: "An international tribunal ruled against China’s claims in the South China Sea.",
        country: "Philippines / China",
        category: "treaty"
    },

    {
        region: "asia",
        date: "2017",
        title: "North Korea Nuclear Crisis",
        desc: "North Korea conducted nuclear and missile tests raising global tensions.",
        country: "North Korea",
        category: "security"
    },

    {
        region: "asia",
        date: "2018",
        title: "US–North Korea Summit",
        desc: "The leaders of the US and North Korea met in Singapore for historic negotiations.",
        country: "Singapore",
        category: "diplomacy"
    },

    {
        region: "asia",
        date: "2019",
        title: "US–China Trade War",
        desc: "Tariffs and economic tensions escalated between the US and China.",
        country: "China",
        category: "economic"
    },

    {
        region: "asia",
        date: "2020",
        title: "COVID-19 Pandemic",
        desc: "The global pandemic began in Wuhan China before spreading worldwide.",
        country: "China",
        category: "health"
    },

    {
        region: "asia",
        date: "2021",
        title: "Myanmar Military Coup",
        desc: "The military overthrew Myanmar's elected government triggering protests.",
        country: "Myanmar",
        category: "politics"
    },

    {
        region: "asia",
        date: "2022",
        title: "RCEP Trade Agreement",
        desc: "The Regional Comprehensive Economic Partnership became the world’s largest trade bloc.",
        country: "Asia-Pacific",
        category: "economic"
    },

    {
        region: "asia",
        date: "2023",
        title: "US–China Technology Rivalry",
        desc: "Competition escalated over semiconductors AI and strategic technology.",
        country: "China / US",
        category: "economic"
    }
];
