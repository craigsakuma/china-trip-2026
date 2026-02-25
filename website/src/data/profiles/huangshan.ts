import type { CityProfile } from "@/types";

export const huangshanProfile: CityProfile = {
  slug: "huangshan",
  heroPhoto: { src: "/photos/huangshan/_hero.jpg", alt: "Huangshan Yellow Mountain misty peaks and pine trees", credit: "eviltomthai" },
  executiveSummary: [
    'Huangshan (Yellow Mountain) is the mountain that taught China how to paint. For over a thousand years, its twisted ancient pines clinging to sheer granite cliffs, its swirling seas of cloud filling vast canyons, and its otherworldly rock formations have defined the Chinese landscape aesthetic. October is arguably the best month to visit: autumn foliage blazes across the slopes, crisp air dramatically improves visibility, and the probability of witnessing the legendary "sea of clouds" peaks as cool air masses collide with warm valley moisture [1]. The mountain is a genuine multi-day hiking destination with world-class trails, summit sunrises, and far fewer crowds on the western routes.',
    "But Huangshan is more than a mountain. The surrounding Huizhou region preserves some of China's most beautiful traditional villages. Hongcun and Xidi (both UNESCO World Heritage sites since 2000) are living museums of Huizhou merchant architecture from the Ming and Qing dynasties \u2014 white-washed walls, black-tiled roofs, elaborate wood carvings, and crescent-shaped ponds reflecting centuries-old ancestral halls [2]. The architecture alone is worth the trip, but the villages also anchor a distinctive food culture that is unlike anything else in China.",
    "Huizhou cuisine (one of China's eight great culinary traditions) embraces fermentation and bold, funky flavors that reward adventurous eaters. The signature stinky mandarin fish (ch\u00F2u gu\u00ECy\u00FA) is cured until pungent, then wok-fried until the flesh flakes into tender, deeply savory layers. Hairy tofu (m\u00E1o d\u00F2ufu) \u2014 tofu deliberately aged until a white mold fuzz develops \u2014 is pan-fried until crispy outside and creamy within. These are not tourist gimmicks but beloved everyday foods across Anhui province [3].",
  ],
  famousFor: [
    "granite peaks and twisted pines",
    "sea of clouds",
    "Chinese landscape painting inspiration",
    "Hongcun and Xidi UNESCO villages",
    "Huizhou cuisine",
    "sunrise from summit peaks",
    "ancient Huizhou merchant culture",
  ],
  whyItFits: [
    "World-class multi-day mountain hiking with summit overnight for sunrise",
    "Iconic scenery that literally defined Chinese art for a millennium",
    "UNESCO villages with extraordinary traditional architecture",
    "Adventurous regional cuisine (stinky mandarin fish, hairy tofu) you can't find elsewhere",
    "Pairs naturally with Hangzhou and Suzhou in an Eastern Refinement circuit",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 59,
      avgLow: 46,
      rainChance: 20,
      precip: 0.6,
      sunrise: "6:00 AM",
      sunset: "5:50 PM",
      conditions: "Crisp and clear; autumn color begins on upper slopes; good cloud sea probability [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 55,
      avgLow: 41,
      rainChance: 18,
      precip: 0.5,
      sunrise: "6:10 AM",
      sunset: "5:35 PM",
      conditions: "Peak autumn foliage; best visibility; highest cloud sea probability [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 50,
      avgLow: 36,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:22 AM",
      sunset: "5:18 PM",
      conditions: "Cooler with occasional frost at summit; fewer hikers; layers essential",
    },
  ],
  whatToPack:
    "Layers for 36-59\u00B0F temperature swings between valley and summit. Waterproof hiking boots with good ankle support (granite steps can be slick), rain jacket, fleece or down layer for summit nights, trekking poles recommended for steep descents, headlamp for pre-dawn sunrise viewing.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "tangkou-mountain-gateway",
      name: "Tangkou (Mountain Gateway Town)",
      topPick: true,
      description:
        "The main base town at the foot of Huangshan, where cable cars and hiking trails begin. A compact, walkable town straddling the Xin\u2019an River with restaurants, gear shops, and budget-to-midrange hotels. It lacks charm but is supremely functional \u2014 this is where hikers gather the night before an early summit push [4].",
      whyItFitsUs:
        "Most practical base for the mountain. Wake before dawn, catch the first cable car or start hiking in the dark. Walking distance to trailheads. Good local restaurants serving Huizhou food at non-tourist prices.",
      nearby:
        "Yungu (Cloud Valley) cable car station (20 min bus), Ci Guang Ge trailhead (10 min), Hongcun village (30 min drive)",
      hotels:
        "Huangshan Xihai Hotel (at summit \u2014 book far in advance for sunrise), Tangkou guesthouses near the bus station (budget-friendly, functional)",
    },
    {
      slug: "hongcun-village",
      name: "Hongcun Village \u2014 UNESCO Heritage Stay",
      topPick: true,
      description:
        "A 900-year-old Huizhou village that feels like stepping into a Chinese ink painting. Crescent-shaped South Lake reflects white walls and grey tiles. Elaborate wood-carved ancestral halls, a unique water system channeling mountain spring water through every home, and art students painting at every corner. UNESCO World Heritage since 2000 [2].",
      whyItFitsUs:
        "Stay overnight after the crowds leave for the most atmospheric experience. Morning light on South Lake is extraordinary. Multiple restored courtyard guesthouses offer authentic village immersion. 30 minutes from the mountain base.",
      nearby:
        "Xidi village (15 min drive), Mukeng bamboo forest (10 min drive), Tangkou/Huangshan base (30 min drive)",
      hotels:
        "Pig Inn (restored Huizhou courtyard with modern comforts \u2014 top pick), village guesthouses in converted merchant homes",
    },
    {
      slug: "tunxi-old-street",
      name: "Tunxi Old Street (Huangshan City Center)",
      topPick: false,
      description:
        "The main urban center of Huangshan City, about an hour from the mountain. Tunxi Old Street is a well-preserved Song Dynasty commercial street with Huizhou architecture, ink-stone shops, tea merchants, and traditional restaurants. More polished than Tangkou but farther from trailheads [5].",
      whyItFitsUs:
        "Best for pre- or post-mountain relaxation. Better restaurant variety, the Anhui Museum for context on Huizhou culture, and shopping for Mao Feng tea and ink stones. Airport and high-speed rail station are here.",
      nearby:
        "Anhui Museum (10 min walk), Huangshan North Railway Station (20 min taxi), Tangkou/mountain base (1 hr drive)",
      hotels:
        "Hotels along Tunxi Old Street (convenient for evening strolling and dining)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "huangshan-summit-hike-with-overnight",
      name: "Huangshan Summit Hike with Overnight for Sunrise",
      photo: { src: "/photos/huangshan/huangshan-summit-hike-with-overnight.jpg", alt: "Huangshan Summit Hike with Overnight for Sunrise, Huangshan" },
      topPick: true,
      description:
        "The definitive Huangshan experience: ascend the mountain (via cable car or on foot), spend the afternoon exploring summit trails past iconic pine trees and granite formations, overnight at a summit hotel, then wake before dawn to watch the sunrise paint the sea of clouds in gold and pink. The mountain has over 30 km of summit-area trails connecting major peaks and viewpoints [1].",
      time: "Full day 1 (afternoon hiking) + early morning day 2 (sunrise + descent). Total: 1.5 days.",
      location:
        "Huangshan Scenic Area. Yungu (east) or Yuping (south) cable car stations, both ~20 min bus from Tangkou",
      cost: "$95/p ($42 entrance + $18 cable car one-way + $35 summit hotel dorm bed) \u2014 private rooms $100-200/night",
      tips: [
        "Take the Yungu cable car up (east side) and hike down via the Yuping route (south side) for variety",
        "Summit hotels fill weeks in advance during October \u2014 book Beihai Hotel, Xihai Hotel, or Baiyun Hotel early [4]",
        "Bring your own snacks and water \u2014 summit prices are 3-5x valley prices (everything is carried up by porters)",
        "Sunrise viewing: Bright Top Peak (Guangming Ding), Lion Peak, or Dawn Pavilion are the top spots \u2014 arrive 30 min early for a good position",
      ],
      priceTier: 4,
    },
    {
      slug: "west-sea-grand-canyon",
      name: "West Sea Grand Canyon (Xihai Great Canyon)",
      topPick: true,
      description:
        "Huangshan's most spectacular and least crowded trail. A dramatic loop carved into sheer canyon walls with narrow stone staircases, cliff-edge walkways, and views into a seemingly bottomless gorge. The trail descends deep into the canyon before looping back via a short funicular. Genuinely thrilling exposure on some sections [6].",
      time: "3-4 hours for the full loop (add 1 hour without funicular)",
      location:
        "Western section of the summit area, accessed from Paiyun Pavilion or Xihai Hotel",
      cost: "Free (included in park entrance); funicular $7 one-way",
      tips: [
        "Start early morning (7-8 AM) for the best light and fewest people",
        "The first loop (upper canyon) is the most dramatic \u2014 at minimum do this section",
        "Vertigo warning: some sections have significant exposure with narrow walkways bolted to cliff faces [6]",
        "Take the funicular up from the canyon floor to save energy for other trails",
      ],
      priceTier: 0,
    },
    {
      slug: "beginning-to-believe-peak",
      name: "Beginning-to-Believe Peak (Shixin Feng)",
      topPick: false,
      description:
        "Named because the scenery is so extraordinary you finally \"begin to believe\" the legends. A compact summit loop with some of Huangshan's most photogenic twisted pines framed against dramatic granite spires. Relatively easy walking with huge visual payoff [1].",
      time: "1-1.5 hours",
      location:
        "Eastern summit area, near Yungu cable car upper station and Beihai Hotel",
      cost: "Free (included in park entrance)",
      tips: [
        "Visit in late afternoon for golden light on the pines and peaks",
        "The Lianli Pine (Linked-Hearts Pine) near the trailhead is one of Huangshan's most famous trees",
        "Combines naturally with a morning arrival via Yungu cable car before checking into your summit hotel",
      ],
      priceTier: 0,
    },
    {
      slug: "bright-top-peak-sunrise",
      name: "Bright Top Peak (Guangming Ding) \u2014 Sunrise Viewpoint",
      topPick: false,
      description:
        "Huangshan's second-highest peak (1,860m/6,102ft) and arguably the best summit sunrise viewpoint. A broad, open platform offers unobstructed 360-degree views. On clear October mornings, the sea of clouds fills the valleys below while distant peaks pierce through like islands in a white ocean [1].",
      time: "30-45 min from summit hotels (pre-dawn start)",
      location:
        "Central summit area, roughly equidistant from Beihai, Xihai, and Baiyun hotels",
      cost: "Free (included in park entrance)",
      tips: [
        "Set an alarm for 4:30-5:00 AM; bring headlamp, all your warm layers, and hot water in a thermos",
        "October sunrise is approximately 5:50-6:10 AM \u2014 arrive 30 minutes early",
        "Cloud sea is most likely after rain the previous day or when overnight temperatures drop sharply",
        "If Bright Top is too crowded, Lion Peak (near Beihai Hotel) is equally stunning with fewer people",
      ],
      priceTier: 0,
    },
    {
      slug: "hongcun-village-walk",
      name: "Hongcun Village \u2014 UNESCO Architecture Walk",
      topPick: true,
      description:
        "A living 900-year-old village built to resemble a water buffalo in plan, with a unique water system channeling mountain spring water through channels to every household. South Lake, Moon Pond, and two exquisitely carved ancestral halls (Chengzhi Tang with its 16 wood-carved panels is a masterpiece) form the core. Art students from across China set up easels along the lakefront [2].",
      time: "2-3 hours (or overnight for the full experience)",
      location:
        "Yi County, ~30 min drive from Tangkou, ~1.5 hrs from Tunxi/Huangshan City",
      cost: "$15/p ($15 entrance)",
      tips: [
        "Stay overnight to experience the village after day-trippers leave \u2014 early morning and evening are magical [2]",
        "Chengzhi Tang ancestral hall has the finest wood carvings in any Huizhou village",
        "Hire a local guide ($15-25) for the architectural and historical context you'll miss on your own",
        "The view from across South Lake at dawn, with mist rising and white walls reflected, is the iconic shot",
      ],
      priceTier: 1,
    },
    {
      slug: "xidi-village",
      name: "Xidi Village \u2014 UNESCO Heritage",
      topPick: false,
      description:
        "Sister village to Hongcun but less visited and more atmospheric. Founded over 960 years ago by descendants of the Tang Dynasty imperial family. Features an elaborate memorial archway at the entrance and over 120 well-preserved Huizhou residences with extraordinary stone, wood, and brick carvings [2].",
      time: "2-3 hours",
      location:
        "Yi County, ~15 min from Hongcun, ~40 min from Tangkou",
      cost: "$15/p ($15 entrance)",
      tips: [
        "Visit Xidi for its quieter, more contemplative atmosphere compared to Hongcun",
        "The Hu Wenguang Memorial Archway at the entrance dates to 1578 and is one of the finest in China",
        "Combine with Hongcun for a full day exploring both UNESCO villages",
        "Look for the intricate \"100 horses\" woodcarving panel in the Dunren Tang hall",
      ],
      priceTier: 1,
    },
    {
      slug: "mukeng-bamboo-forest-hike",
      name: "Mukeng Bamboo Forest Hike",
      topPick: false,
      description:
        "A peaceful 3-4 km trail through a vast bamboo forest near Hongcun. Towering green bamboo forms a cathedral-like canopy overhead, and the trail follows a clear mountain stream. The forest featured in the bamboo fight scene in Ang Lee's Crouching Tiger, Hidden Dragon [7].",
      time: "1.5-2 hours",
      location:
        "Mukeng, ~4 km from Hongcun village (10 min drive or 40 min walk)",
      cost: "$5/p ($5 entrance, sometimes included in Hongcun combo ticket)",
      tips: [
        "Best in early morning when light filters through the bamboo canopy and mist lingers",
        "Walk the full trail along the stream rather than turning back at the halfway point",
        "Combine with a morning in Hongcun for a half-day village-and-nature itinerary",
      ],
      priceTier: 1,
    },
    {
      slug: "tunxi-old-street",
      name: "Tunxi Old Street \u2014 Food and Culture Walk",
      photo: { src: "/photos/huangshan/tunxi-old-street.jpg", alt: "Tunxi Old Street \u2014 Food and Culture Walk, Huangshan" },
      topPick: false,
      description:
        "A 1.2 km Song Dynasty-era commercial street in Huangshan City lined with Huizhou-style buildings housing tea shops, ink-stone carvers, traditional pharmacies, and restaurants. Less polished than many \"old streets\" in China and retains genuine commercial life alongside tourist shops [5].",
      time: "1.5-2 hours (combine with lunch or dinner)",
      location:
        "Central Tunxi district, Huangshan City",
      cost: "Free (shopping and dining extra)",
      tips: [
        "Visit in the evening when the street is atmospheric with red lanterns and locals dining",
        "Buy Huangshan Mao Feng tea (one of China's top green teas) from established tea shops \u2014 ask to taste before buying",
        "She Ink stones (Shey\u00E0n) are the region's prized craft \u2014 look for shops where artisans carve on-site",
        "Good place to try stinky mandarin fish and hairy tofu at local restaurants",
      ],
      priceTier: 0,
    },
    {
      slug: "huizhou-cooking-experience",
      name: "Huizhou Cooking Experience",
      topPick: false,
      description:
        "Hands-on cooking class focused on Huizhou cuisine \u2014 one of China's most distinctive and least-known regional food traditions. Learn the fermentation and curing techniques behind stinky mandarin fish, hairy tofu, and other specialties. Classes typically include a market visit in Tangkou or Tunxi [3].",
      time: "3-4 hours (including market visit)",
      location:
        "Tangkou or Tunxi \u2014 arranged through guesthouses or local operators",
      cost: "$25-40/p (per person, all-inclusive)",
      tips: [
        "Request a class that includes the full process of preparing stinky mandarin fish \u2014 the curing technique is fascinating",
        "Hongcun village guesthouses sometimes offer informal cooking sessions with the family",
        "Morning market visits in Tangkou are excellent for seeing the raw ingredients of Huizhou cooking",
      ],
      priceTier: 2,
    },
    {
      slug: "dawn-tai-chi-at-summit",
      name: "Dawn Tai Chi at the Summit",
      topPick: false,
      description:
        "Several summit hotels offer early-morning tai chi sessions on viewing platforms with mountain panoramas as the backdrop. Even a brief guided session in this setting, with clouds drifting below and granite peaks all around, becomes a profound experience [1].",
      time: "30-60 min (pre- or post-sunrise)",
      location:
        "Summit hotel terraces \u2014 Beihai Hotel and Xihai Hotel both offer sessions",
      cost: "Free (for hotel guests)",
      tips: [
        "Ask your summit hotel about morning tai chi \u2014 schedules vary and sessions may be informal",
        "Even without a formal class, the summit platforms at dawn are ideal for quiet contemplation",
        "Bring all warm layers \u2014 summit temperatures can be near freezing at dawn in late October",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Huizhou Cuisine —
    {
      slug: "meishi-renjia",
      name: "Meishi Renjia",
      chineseName: "\u7F8E\u98DF\u4EBA\u5BB6",
      category: "Huizhou Cuisine",
      topPick: true,
      location:
        "Tangkou town, near the Huangshan mountain bus station",
      priceRange: "$8-14/p",
      cuisine: "Traditional Huizhou home cooking",
      description:
        "A local favorite in Tangkou serving the full range of Huizhou classics in a no-frills setting. The stinky mandarin fish here is cured in-house using the traditional salt-pressing method, and the hairy tofu is sourced from a village supplier. Exactly the kind of place hikers descend to after two days on the mountain [3].",
      reviews:
        "Praised for authentic flavors at local prices. Unpretentious setting, generous portions. The go-to recommendation from guesthouse owners in Tangkou.",
      whatToOrder:
        "Stinky mandarin fish (ch\u00F2u gu\u00ECy\u00FA), hairy tofu (m\u00E1o d\u00F2ufu), bamboo shoots with cured pork, egg dumpling soup, Huangshan wild greens.",
      bestFor: "Lunch or dinner, especially post-hike",
      priceTier: 1,
    },
    {
      slug: "lao-jie-di-yi-lou",
      name: "Lao Jie Di Yi Lou",
      photo: { src: "/photos/huangshan/lao-jie-di-yi-lou.jpg", alt: "Lao Jie Di Yi Lou, Huangshan" },
      chineseName: "\u8001\u8857\u7B2C\u4E00\u697C",
      category: "Huizhou Cuisine",
      topPick: true,
      location:
        "Tunxi Old Street, Huangshan City center",
      priceRange: "$10-18/p",
      cuisine: "Refined Huizhou cuisine",
      description:
        "The most celebrated restaurant on Tunxi Old Street, occupying a multi-story Huizhou building. Known for elevated versions of regional classics, especially their stinky mandarin fish (which has won provincial cooking competitions) and Huangshan braised pigeon. English picture menu available [5].",
      reviews:
        "Consistently recommended as the best introduction to Huizhou cuisine for visitors. Expect a wait at peak times. Upper-floor seating has old-street views.",
      whatToOrder:
        "Award-winning stinky mandarin fish, Huangshan braised pigeon, Li Hongzhang chop suey (named after the Qing official from Anhui), bamboo shoots with cured ham.",
      bestFor: "Dinner with Old Street evening stroll",
      priceTier: 1,
    },
    {
      slug: "hongcun-de-yue-lou",
      name: "Hongcun De Yue Lou",
      chineseName: "\u5F97\u6708\u697C",
      category: "Huizhou Cuisine",
      topPick: false,
      location:
        "Inside Hongcun village, near Moon Pond",
      priceRange: "$7-12/p",
      cuisine: "Village-style Huizhou cooking",
      description:
        "A family-run restaurant inside Hongcun overlooking Moon Pond. Dishes use ingredients sourced from the village and surrounding mountains \u2014 wild ferns, bamboo shoots, freshwater fish from the village water system. Dining here at dusk with Moon Pond reflected in the window is a memorable Huangshan moment.",
      reviews:
        "Charming setting and honest village cooking. Menu is limited and changes with what's fresh. No English menu \u2014 point at other tables' dishes or use a translation app.",
      whatToOrder:
        "Hairy tofu, wok-fried local greens, stone-pot river fish, cured pork with dried bamboo shoots.",
      bestFor: "Lunch or dinner during Hongcun overnight stay",
      priceTier: 1,
    },

    // — Noodles & Breakfast —
    {
      slug: "tangkou-hand-pulled-noodles",
      name: "Tangkou Morning Noodle Stalls",
      chineseName: undefined,
      category: "Noodles & Breakfast",
      topPick: false,
      location:
        "Tangkou town, along the main street near the bus station",
      priceRange: "$1-3/p",
      cuisine: "Hand-pulled noodles, wontons, breakfast dumplings",
      description:
        "Multiple small noodle shops open before dawn to serve hikers heading up the mountain. Steaming bowls of hand-pulled noodles in pork bone broth, wontons, and scallion pancakes. No English, no decor, just fuel for the trail [4].",
      reviews:
        "Functional and satisfying. The shops closest to the bus station are most popular with locals. Hot soy milk and scallion pancakes make a quick pre-dawn breakfast.",
      whatToOrder:
        "Hand-pulled noodles with braised beef, pork wontons, scallion pancakes (c\u014Dng y\u00F3u b\u01D0ng), hot soy milk.",
      bestFor: "Breakfast before mountain ascent (5:30-7:00 AM)",
      priceTier: 1,
    },

    // — Summit Dining —
    {
      slug: "summit-hotel-restaurants",
      name: "Summit Hotel Restaurants",
      photo: { src: "/photos/huangshan/summit-hotel-restaurants.jpg", alt: "Summit Hotel Restaurants, Huangshan" },
      chineseName: undefined,
      category: "Summit Dining",
      topPick: false,
      location:
        "Beihai Hotel, Xihai Hotel, and Baiyun Hotel at Huangshan summit",
      priceRange: "$15-30/p",
      cuisine: "Basic Chinese set meals at altitude",
      description:
        "The only dining options at the summit. Food is serviceable but unremarkable \u2014 everything is carried up by porters on bamboo shoulder poles, which explains both the limited menu and the premium pricing. Hot meals, rice, stir-fried vegetables, and simple meat dishes [4].",
      reviews:
        "Nobody comes here for the food, but hot rice and vegetables after a day of hiking feels luxurious. Bring supplemental snacks. Instant noodles and cup ramen are available at hotel shops.",
      whatToOrder:
        "Set meal (rice + 2-3 dishes), hot soup, instant noodles from the hotel shop for a late-night snack.",
      bestFor: "Dinner and breakfast during summit overnight",
      priceTier: 2,
    },

    // — Tea —
    {
      slug: "tunxi-tea-houses",
      name: "Tunxi Old Street Tea Houses",
      photo: { src: "/photos/huangshan/tunxi-tea-houses.jpg", alt: "Tunxi Old Street Tea Houses, Huangshan" },
      chineseName: undefined,
      category: "Tea & Culture",
      topPick: false,
      location:
        "Multiple locations along Tunxi Old Street",
      priceRange: "$3-10/p",
      cuisine: "Huangshan Mao Feng tea, snacks",
      description:
        "Huangshan Mao Feng is one of China's ten most famous green teas, grown on the misty slopes of the mountain. Tea shops along Old Street offer tastings of multiple grades \u2014 from everyday to competition-quality \u2014 and the difference is revelatory. A slow tea session is the ideal post-mountain wind-down [5].",
      reviews:
        "Quality varies widely. Seek established shops with on-site brewing rather than those pushing hard sales. The best shops are happy to let you taste three or four grades without obligation.",
      whatToOrder:
        "Huangshan Mao Feng tea tasting (ask for multiple grades), green tea cookies, local dried fruits.",
      bestFor: "Afternoon after descending from the mountain",
      priceTier: 1,
    },

    // — Street Food —
    {
      slug: "tangkou-night-market",
      name: "Tangkou Night Market Stalls",
      chineseName: undefined,
      category: "Street Food",
      topPick: false,
      location:
        "Tangkou town, main street and side alleys near the river",
      priceRange: "$2-6/p",
      cuisine: "Grilled skewers, stinky tofu, local snacks",
      description:
        "A lively cluster of street stalls and small restaurants that springs up along Tangkou's main road each evening. Grilled meats and vegetables on bamboo skewers, stinky tofu, fried rice cakes, and local snacks. The atmosphere is casual and social \u2014 fellow hikers swapping trail stories over cold beer.",
      reviews:
        "Nothing fancy, but the energy is great after a day on the mountain. Prices are fair by tourist-town standards. Follow the crowds to find the busiest stalls.",
      whatToOrder:
        "Grilled bamboo shoot skewers, stinky tofu, fried shaobing (sesame flatbread), cold Tsingtao beer.",
      bestFor: "Evening, especially post-hike",
      priceTier: 1,
    },

    // — Regional Splurge —
    {
      slug: "banyue-huizhou-private-kitchen",
      name: "Banyue Huizhou Private Kitchen",
      chineseName: "\u534A\u6708\u5F7D\u5DDE\u79C1\u623F\u83DC",
      category: "Splurge",
      topPick: false,
      location:
        "Tunxi district, Huangshan City (reservation required)",
      priceRange: "$25-45/p",
      cuisine: "Elevated Huizhou private dining",
      description:
        "A reservation-only private kitchen that reimagines Huizhou classics with premium seasonal ingredients. The chef sources wild mushrooms, mountain herbs, and freshwater fish daily. Set in a restored Huizhou courtyard. The most refined dining experience in the Huangshan area [3].",
      reviews:
        "Praised for creative interpretations of traditional flavors. Intimate setting with 3-4 tables. Book at least a day in advance through your hotel.",
      whatToOrder:
        "Chef's seasonal tasting menu (best approach), premium stinky mandarin fish, wild mushroom clay pot, Huangshan stone frog (seasonal delicacy).",
      bestFor: "Dinner. Reserve in advance through your hotel.",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting There": [
      "High-speed rail: Huangshan North Station connects to Shanghai (2.5 hrs), Hangzhou (1.5 hrs), and Nanjing (3 hrs). Best option if coming from the Eastern Refinement circuit.",
      "Flights: Huangshan Tunxi Airport (TXN) has flights from major cities. Small airport with limited frequency.",
      "From the station/airport: Tangkou (mountain base) is ~1 hr by bus or taxi ($15-20). Tunxi Old Street is 20 min.",
    ],
    "Getting Around": [
      "Mountain: Free shuttle buses run from Tangkou to cable car stations and trailheads. No private vehicles on the mountain.",
      "Villages: Taxis or hired cars between Hongcun, Xidi, Tangkou, and Tunxi. Negotiate round-trip prices in advance.",
      "Walking: Tangkou, Hongcun, Xidi, and Tunxi Old Street are all highly walkable once you arrive.",
    ],
    "Mountain Logistics": [
      "Cable cars: Yungu (east, 8 min) and Yuping (south, 8 min) operate ~6:30 AM to 5:00 PM. Lines can exceed 2 hours on October weekends \u2014 go weekday or arrive at opening [4].",
      "Summit hotels: Book 2-4 weeks ahead for October stays. Options range from 8-bed dorms ($35/bed) to private rooms ($100-200). Beihai Hotel and Xihai Hotel have the best locations [4].",
      "Porters: Everything at the summit is carried up by human porters on bamboo poles. Respect their right-of-way on trails.",
    ],
    "Food & Dining": [
      "Huizhou cuisine: Embrace the funk. Stinky mandarin fish and hairy tofu are genuinely delicious once you get past the initial aroma. Ask locals for their favorite spot \u2014 they take regional food seriously.",
      "Mountain food: Bring trail snacks, chocolate, and nuts. Summit restaurant food is adequate but pricey. Fill water bottles at hotels before heading out.",
      "Ordering: For 3 people, order 4-5 dishes family-style plus rice. Most restaurants have picture menus even without English text.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are standard. Some village vendors and mountain porters may prefer cash. Bring some RMB bills.",
      "Connectivity: Cell signal is surprisingly good on most summit trails. WiFi at summit hotels is slow but functional.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "October is peak season: Book summit hotels, train tickets, and village guesthouses well in advance.",
      "Avoid weekends and Chinese holidays if possible \u2014 visitor numbers on the mountain can triple.",
      "Rain plan: The mountain is often beautiful in light rain or mist (this is how the sea of clouds forms), but heavy rain makes steep granite steps dangerous. Have a flexible schedule.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Huangshan October Weather & Best Time to Visit \u2014 China Discovery (https://www.chinadiscovery.com/anhui/huangshan/weather-in-october.html)",
    "[2] Hongcun & Xidi Ancient Villages \u2014 UNESCO World Heritage Centre (https://whc.unesco.org/en/list/1002)",
    "[3] Huizhou Cuisine Guide \u2014 China Highlights (https://www.chinahighlights.com/huangshan/food.htm)",
    "[4] Huangshan Mountain Hiking Guide \u2014 China Discovery (https://www.chinadiscovery.com/anhui/huangshan/huangshan-hiking.html)",
    "[5] Tunxi Old Street Guide \u2014 China Highlights (https://www.chinahighlights.com/huangshan/attraction/tunxi-ancient-street.htm)",
    "[6] West Sea Grand Canyon Trail Guide \u2014 China Discovery (https://www.chinadiscovery.com/anhui/huangshan/xihai-grand-canyon.html)",
    "[7] Mukeng Bamboo Forest \u2014 Travel China Guide (https://www.travelchinaguide.com/attraction/anhui/huangshan/mukeng-bamboo-forest.htm)",
  ],
};
