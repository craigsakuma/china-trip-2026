import type { CityProfile } from "@/types";

export const shanghaiProfile: CityProfile = {
  slug: "shanghai",
  heroPhoto: { src: "/photos/shanghai/_hero.jpg", alt: "Shanghai skyline and Pudong waterfront with Shanghai Tower", credit: "Ermell" },
  executiveSummary: [
    "Shanghai in mid-October is at its best — warm days in the low 70s, minimal rain, and a city that feels less frantic than the sweltering summer months. The air carries a crispness that makes walking the Bund at golden hour genuinely pleasant. October also falls after the Golden Week holiday crush (Oct 1-7), meaning the second and third weeks offer the rare combination of great weather and manageable crowds [1].",
    'The city most visitors experience — the neon-drenched Pudong skyline, the luxury malls of Nanjing Road — is real but shallow. The Shanghai that rewards deeper exploration is a city of longtang lane houses where elderly neighbors hang laundry between art deco facades, backstreet food stalls in the Old City where xiaolongbao is made fresh by the same family for decades, and quiet water towns on the city\'s outskirts where stone bridges arch over canals lined with Ming-dynasty houses. The art scene is world-class and distinctly uncommercial: M50 Art District is a labyrinth of working artist studios in converted cotton mills, and the Power Station of Art — China\'s first state-run contemporary art museum, housed in the former Nanshi Power Station — hosts ambitious exhibitions entirely free of charge [2].',
    "Shanghai is China's most expensive mainland city and its most modern, which means the authentic layer requires more intentional seeking than a place like Chengdu or Dali. But for travelers willing to dig, the rewards are significant: Bund architecture that tells the story of colonial-era ambition, Jinze Water Town where ancient bridges and temples exist without a single souvenir shop, and a food scene that extends far beyond soup dumplings into Shanghainese braised dishes, hairy crab season (October is peak), and some of the most exciting contemporary Chinese fine dining in the country [3].",
  ],
  famousFor: [
    "xiaolongbao (soup dumplings)",
    "the Bund",
    "art deco architecture",
    "longtang lane houses",
    "contemporary art",
    "hairy crab (October)",
    "French Concession",
  ],
  whyItFits: [
    "World-class contemporary art at M50 and Power Station of Art (both free or low-cost)",
    "Deep food scene from $2 backstreet xiaolongbao to innovative modern Chinese dining",
    "Bund and French Concession architecture reveal layers of colonial and modern history",
    "Jinze Water Town offers a genuinely untouristed day trip with ancient bridges and temples",
    "Excellent gateway city — major international airport hub for trip start or end",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 75,
      avgLow: 61,
      rainChance: 20,
      precip: 0.6,
      sunrise: "5:52 AM",
      sunset: "5:38 PM",
      conditions: "Warm, pleasant; tail end of Golden Week crowds",
    },
    {
      period: "Mid Oct",
      avgHigh: 72,
      avgLow: 57,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:02 AM",
      sunset: "5:22 PM",
      conditions: "Ideal weather; comfortable walking; low humidity [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 67,
      avgLow: 52,
      rainChance: 15,
      precip: 0.3,
      sunrise: "6:14 AM",
      sunset: "5:08 PM",
      conditions: "Cooler evenings; light jacket needed; excellent visibility",
    },
  ],
  whatToPack:
    "Light layers for 52-75°F range. Comfortable walking shoes essential — Shanghai is a walking city. Light rain jacket. Slightly dressier outfit if planning a splurge dinner.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "former-french-concession",
      name: "Former French Concession",
      topPick: true,
      description:
        "Shanghai's most atmospheric neighborhood — tree-lined boulevards canopied by towering plane trees, art deco and Spanish-colonial villas, hidden lane houses, independent cafes, and a lingering European character unlike anywhere else in China. The residential streets between Fuxing Road and Huaihai Road are endlessly walkable [4].",
      whyItFitsUs:
        "Best neighborhood for aimless wandering and discovery. Excellent food, coffee culture, boutique hotels in restored lane houses. Walkable to multiple key sites. Feels like a different city from Pudong.",
      nearby:
        "Tianzifang (5 min), Fuxing Park (immediate), Xintiandi (10 min walk), M50 Art District (20 min taxi)",
      hotels:
        "The Puli Hotel & Spa (design-forward luxury), Capella Shanghai Jian Ye Li (restored shikumen lane house compound — top pick for atmosphere)",
    },
    {
      slug: "jing-an",
      name: "Jing'an",
      topPick: false,
      description:
        "Central Shanghai's most livable district — a mix of heritage shikumen lane houses, Jing'an Temple's golden roofs, and excellent restaurants. Less touristy than the French Concession but equally walkable, with a more local residential character [5].",
      whyItFitsUs:
        "Centrally located with easy metro access to all major sites. Strong local restaurant scene. Several excellent boutique hotels in restored buildings.",
      nearby:
        "Jing'an Temple (immediate), West Nanjing Road (5 min), M50 Art District (10 min taxi), the Bund (15 min taxi)",
      hotels:
        "The Middle House (stylish serviced apartments with kitchen), CACHET Boutique Hotel (converted lane house)",
    },
    {
      slug: "old-city-nanshi",
      name: "Old City (Nanshi)",
      topPick: false,
      description:
        "The oldest part of Shanghai — a dense labyrinth of narrow lanes, wet markets, dumpling shops, and traditional Chinese life that predates the colonial-era concessions. Yu Garden anchors the tourist circuit, but the surrounding backstreets are where the real discoveries happen [6].",
      whyItFitsUs:
        "Best area for authentic backstreet food exploration. The wet markets and family-run noodle shops feel like a different city from the Bund, just a 15-minute walk away.",
      nearby:
        "Yu Garden (immediate), the Bund (15 min walk), Power Station of Art (15 min walk), Confucius Temple (5 min)",
      hotels:
        "Hotel Indigo Shanghai on the Bund (nearby, not within Old City itself)",
    },
    {
      slug: "west-bund-xuhui",
      name: "West Bund / Xuhui",
      topPick: false,
      description:
        "Shanghai's emerging cultural corridor along the Huangpu River waterfront. Former industrial zone now home to major museums and galleries, connected by a scenic riverside promenade. Still developing, which means fewer crowds and more space [7].",
      whyItFitsUs:
        "Art and architecture concentration — Long Museum, Yuz Museum, West Bund Museum (Centre Pompidou partnership), and Tank Shanghai all within walking distance of each other along the waterfront.",
      nearby:
        "Long Museum West Bund (immediate), West Bund Museum (5 min walk), Power Station of Art (10 min taxi), French Concession (10 min taxi)",
      hotels:
        "Limited hotel options in immediate area — stay in French Concession and taxi/metro over",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "the-bund-architectural-walk",
      name: "The Bund — Architectural Walking Tour",
      photo: { src: "/photos/shanghai/the-bund-architectural-walk.jpg", alt: "The Bund — Architectural Walking Tour, Shanghai" },
      topPick: true,
      description:
        "A 1.5-km waterfront promenade lined with 52 buildings spanning Gothic, Baroque, Romanesque, Renaissance, and Art Deco styles — the most concentrated display of early-20th-century architecture in Asia. Each building tells a story of Shanghai's colonial banking and trading era. Across the river, Pudong's futuristic skyline creates the iconic contrast. Best experienced with a guide who can decode the history building by building [8].",
      time: "2-3 hours (morning or golden hour)",
      location:
        "Zhongshan East 1st Road, Huangpu District. Metro Lines 2/10 to East Nanjing Road",
      cost: "Free (self-guided) or $25/p ($75/3 shared guide)",
      tips: [
        "Walk south to north starting from the Meteorological Signal Tower near Yan'an Road",
        "Golden hour (5-6 PM in October) is the best light for the Pudong skyline view",
        "The Fairmont Peace Hotel lobby and jazz bar are worth a peek — the hotel is the Bund's most storied building [8]",
        "Combine with an early morning walk for different character — locals doing tai chi and ballroom dancing along the promenade",
      ],
      priceTier: 0,
    },
    {
      slug: "jinze-water-town",
      name: "Jinze Water Town — Day Trip",
      photo: { src: "/photos/shanghai/jinze-water-town.jpg", alt: "Jinze Water Town — Day Trip, Shanghai" },
      topPick: true,
      description:
        "The antidote to over-touristed water towns like Zhouzhuang. Jinze is a genuinely lived-in canal village 60 km southwest of central Shanghai with ancient stone bridges (some dating to the Song Dynasty), crumbling temples, and almost zero foreign tourists. Elderly residents fish from their doorsteps, neighborhood temples burn incense daily, and there is not a single souvenir shop. It requires effort to reach, which is precisely why it remains authentic [9].",
      time: "Full day (1.5 hrs each way + 3-4 hrs exploring)",
      location:
        "Qingpu District, ~60 km southwest of central Shanghai. Taxi or private car",
      cost: "Free entry; ~$25/p ($75/3 shared car round trip)",
      tips: [
        "Hire a private car for the day — public transit is possible but adds 45+ minutes each way",
        "No entrance fee and no formal ticketing — just walk in and explore",
        "Bring snacks or eat at one of the tiny local noodle shops — no tourist restaurants",
        "The Wanshou Temple (Song Dynasty) and Yingjia Bridge are the architectural highlights [9]",
        "Combine with Zhujiajiao if desired, though Jinze is far more authentic",
      ],
      priceTier: 2,
    },
    {
      slug: "m50-art-district",
      name: "M50 Art District (Moganshan Road)",
      photo: { src: "/photos/shanghai/m50-art-district.jpg", alt: "M50 Art District (Moganshan Road), Shanghai" },
      topPick: true,
      description:
        "Shanghai's original contemporary art hub — a cluster of converted 1930s cotton mills and textile warehouses along Suzhou Creek, now housing 100+ working artist studios, galleries, and creative spaces. Unlike Beijing's 798, M50 retains a raw, uncommercial character — you're as likely to find an artist mid-painting as a polished gallery opening. ShanghART Gallery, one of China's most important contemporary art galleries, is the anchor [2].",
      time: "2-3 hours",
      location:
        "50 Moganshan Road, Putuo District. Metro Line 1 to Shanghai Railway Station, then 15 min walk",
      cost: "Free",
      tips: [
        "Go on a weekday for the most authentic studio atmosphere",
        "Start at ShanghART Gallery then wander — the upper floors of buildings often have the most interesting independent studios",
        "Strike up conversation with artists — many speak some English and welcome visitors",
        "The surrounding Suzhou Creek area is undergoing rapid development — the contrast between old industrial and new glass towers is compelling [2]",
      ],
      priceTier: 0,
    },
    {
      slug: "power-station-of-art",
      name: "Power Station of Art",
      photo: { src: "/photos/shanghai/power-station-of-art.jpg", alt: "Power Station of Art, Shanghai" },
      topPick: true,
      description:
        "China's first state-run contemporary art museum, housed in the magnificent 1897 Nanshi Power Station with its iconic 165-meter smokestack. Hosts the Shanghai Biennale and large-scale exhibitions in soaring industrial spaces. Entirely free admission — a remarkable commitment to public art access that puts many Western cities to shame [2].",
      time: "2-3 hours",
      location:
        "200 Huayuangang Road, Huangpu District. Metro Line 8 to China Art Museum, 10 min walk",
      cost: "Free",
      tips: [
        "Check current exhibitions before visiting — the programming is ambitious and constantly rotating",
        "The building itself is worth the visit even if the current show doesn't appeal",
        "Rooftop terrace has good Huangpu River views",
        "Combine with a walk along the Cool Docks waterfront area nearby",
      ],
      priceTier: 0,
    },
    {
      slug: "old-city-backstreet-food-walk",
      name: "Old City Backstreet Food Deep-Dive",
      photo: { src: "/photos/shanghai/old-city-backstreet-food-walk.jpg", alt: "Old City Backstreet Food Deep-Dive, Shanghai" },
      topPick: true,
      description:
        "Leave the manicured Yu Garden tourist zone and plunge into the surrounding Old City backstreets — a dense web of narrow lanes where family-run dumpling shops, wet markets overflowing with live seafood, noodle stalls, and neighborhood breakfast joints operate exactly as they have for decades. This is the Shanghai that most visitors never see, and the food is extraordinary [6].",
      time: "2-3 hours (morning is best)",
      location:
        "Nanshi / Old City area, south of Yu Garden. Metro Line 10 to Yuyuan Garden",
      cost: "$5-12/p (depending on appetite)",
      tips: [
        "Go early morning (7-9 AM) when the wet markets and breakfast stalls are at peak activity",
        "Fangbang Road and the lanes south of Yu Garden are the richest areas",
        "Look for the longest local queues — they indicate the best stalls",
        "A local food guide transforms this from confusing to revelatory — consider booking one [6]",
        "Bring cash — many backstreet vendors don't accept international mobile payment",
      ],
      priceTier: 1,
    },
    {
      slug: "french-concession-lane-house-walk",
      name: "French Concession Lane House Walk",
      photo: { src: "/photos/shanghai/french-concession-lane-house-walk.jpg", alt: "French Concession Lane House Walk, Shanghai" },
      topPick: false,
      description:
        "A self-guided or guided walk through the longtang (lane houses) and tree-lined streets of the Former French Concession — Shanghai's most architecturally rich neighborhood. Art deco apartments, Spanish villas, shikumen stone-gate houses, and hidden courtyard gardens reveal themselves around every corner. The neighborhood's layered history (French colonial, wartime refuge, Communist era, contemporary gentrification) is visible in a single block [4].",
      time: "2-3 hours",
      location:
        "Former French Concession, centered on Fuxing Road and Wukang Road. Metro Line 10 to Shanghai Library",
      cost: "Free (self-guided) or $25/p ($75/3 shared guide)",
      tips: [
        "Wukang Road and its iconic wedge-shaped Normandie Apartments building are the most photographed starting point",
        "Peer into open lane house entrances — the daily life visible inside is fascinating",
        "Stop at Fuxing Park to see locals doing morning exercises, card games, and ballroom dancing",
        "The Ferguson Lane compound has good cafes for a mid-walk break",
      ],
      priceTier: 0,
    },
    {
      slug: "yu-garden-and-city-god-temple",
      name: "Yu Garden and City God Temple",
      photo: { src: "/photos/shanghai/yu-garden-and-city-god-temple.jpg", alt: "Yu Garden and City God Temple, Shanghai" },
      topPick: false,
      description:
        "A 400-year-old classical Chinese garden (Ming Dynasty, 1559) with rockeries, pavilions, dragon walls, and koi ponds packed into just five acres. The surrounding bazaar area is heavily touristed but the garden interior, especially early morning, retains genuine beauty. The adjacent City God Temple (Chenghuang Miao) is an active Taoist temple worth a quiet visit [10].",
      time: "1.5-2 hours",
      location:
        "Old City, Huangpu District. Metro Line 10 to Yuyuan Garden",
      cost: "$6/p ($6 garden entrance; temple is free)",
      tips: [
        "Arrive at 8:30 AM opening to experience the garden before tour groups arrive",
        "The Exquisite Jade Rock (Yulinglong) is one of three famous scholar's rocks in China — look for it in the Inner Garden",
        "Skip the Nanxiang Steamed Bun Restaurant in the bazaar (overpriced, long lines) — better xiaolongbao elsewhere",
        "Use this as a starting point for the Old City backstreet food walk",
      ],
      priceTier: 1,
    },
    {
      slug: "west-bund-museum-mile",
      name: "West Bund Museum Mile",
      photo: { src: "/photos/shanghai/west-bund-museum-mile.jpg", alt: "West Bund Museum Mile, Shanghai" },
      topPick: false,
      description:
        "Shanghai's answer to Museum Island — a string of major art institutions along a scenic Huangpu River waterfront promenade. Long Museum West Bund (Chinese contemporary and revolutionary art in dramatic concrete architecture), West Bund Museum (Centre Pompidou partnership), and Tank Shanghai (converted aviation fuel tanks) are all within a 20-minute walk of each other [7].",
      time: "3-4 hours (half day)",
      location:
        "Xuhui District, along Longteng Avenue. Metro Line 11 to Yunjin Road",
      cost: "$8-15/p per museum (varies by exhibition)",
      tips: [
        "The riverside promenade connecting the museums is a destination itself — excellent for walking",
        "Long Museum West Bund has the most consistently strong programming",
        "Check exhibition schedules in advance — some museums close on Mondays",
        "The area has good cafes and restaurants for lunch between museum visits",
      ],
      priceTier: 1,
    },
    {
      slug: "shanghai-propaganda-poster-art-centre",
      name: "Shanghai Propaganda Poster Art Centre",
      photo: { src: "/photos/shanghai/shanghai-propaganda-poster-art-centre.jpg", alt: "Shanghai Propaganda Poster Art Centre, Shanghai" },
      topPick: false,
      description:
        "A hidden gem in a French Concession apartment building basement — one man's extraordinary private collection of over 6,000 original Chinese propaganda posters from the 1950s through 1980s. The posters are vivid, historically revealing, and artistically fascinating. Finding it feels like uncovering a secret [11].",
      time: "1-1.5 hours",
      location:
        "Room B0C, 868 Huashan Road, Xuhui District (in a residential apartment basement). Metro Line 10/11 to Jiaotong University",
      cost: "$4/p",
      tips: [
        "Difficult to find — it's in the basement of a residential apartment building. Ask the guard or use Amap navigation",
        "The owner-curator is often present and passionate about sharing context",
        "Original posters available for purchase (authentic, certified) — a unique souvenir",
        "Combine with a French Concession walk — it's in the heart of the neighborhood [11]",
      ],
      priceTier: 1,
    },
    {
      slug: "shanghai-museum",
      name: "Shanghai Museum (People's Square)",
      photo: { src: "/photos/shanghai/shanghai-museum.jpg", alt: "Shanghai Museum (People's Square), Shanghai" },
      topPick: false,
      description:
        "One of China's finest museums with world-class collections of ancient Chinese bronzes, ceramics, calligraphy, painting, jade, and furniture. The bronze collection alone is considered among the best in the world. Recently renovated with excellent English labeling throughout [12].",
      time: "2-3 hours",
      location:
        "201 Renmin Avenue, Huangpu District. Metro Lines 1/2/8 to People's Square",
      cost: "Free (timed ticket reservation required)",
      tips: [
        "Reserve timed tickets in advance on the museum's WeChat mini-program",
        "The Ancient Chinese Bronze Gallery and Chinese Painting Gallery are the strongest collections",
        "Go on a weekday morning for manageable crowds",
        "The museum's second branch (East) opened in the Pudong area — focus on the original People's Square location for the classical collections [12]",
      ],
      priceTier: 0,
    },
    {
      slug: "tianzifang",
      name: "Tianzifang",
      photo: { src: "/photos/shanghai/tianzifang.jpg", alt: "Tianzifang, Shanghai" },
      topPick: false,
      description:
        "A maze of narrow shikumen lane houses converted into galleries, craft shops, cafes, and studios. More commercialized than M50 but the architectural setting — walking through the interior lanes of a living shikumen block — gives a tangible sense of how Shanghai's lane-house neighborhoods functioned. Best in the morning before the crowds build [13].",
      time: "1-1.5 hours",
      location:
        "Taikang Road, Huangpu District. Metro Line 9 to Dapuqiao",
      cost: "Free",
      tips: [
        "Visit before 10 AM or on a weekday — the narrow lanes become uncomfortably crowded on weekend afternoons",
        "Look up while walking — the upper floors are still residential, with laundry hanging over the tourist bustle below",
        "The deeper interior lanes (away from Taikang Road entrance) are less crowded and more interesting",
        "Good coffee at Kommune — a genuinely early Shanghai specialty coffee pioneer",
      ],
      priceTier: 0,
    },
    {
      slug: "huangpu-river-ferry",
      name: "Huangpu River Ferry Crossing",
      photo: { src: "/photos/shanghai/huangpu-river-ferry.jpg", alt: "Huangpu River Ferry Crossing, Shanghai" },
      topPick: false,
      description:
        "Skip the expensive tourist river cruises and take the local commuter ferry between the Bund (Puxi) and Pudong — a 5-minute crossing that delivers the same iconic skyline views for a fraction of the price. The Dongchang Road ferry terminal to the Bund is the classic route [14].",
      time: "30 minutes (including waiting and crossing)",
      location:
        "Multiple ferry terminals along the Huangpu River. Closest to the Bund: Jinling East Road Ferry Terminal",
      cost: "$0.30/p (2 RMB)",
      tips: [
        "Take the ferry at sunset for the best light on the Bund buildings",
        "Stand on the open-air deck rather than inside the cabin",
        "Cross to Pudong, walk along the riverside promenade, then ferry back — total round trip under $1",
        "This is a working commuter ferry, not a tourist operation — which is exactly the point [14]",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Xiaolongbao / Dumplings —
    {
      slug: "jia-jia-tang-bao",
      name: "Jia Jia Tang Bao",
      photo: { src: "/photos/shanghai/jia-jia-tang-bao.jpg", alt: "Jia Jia Tang Bao, Shanghai" },
      chineseName: "佳家汤包",
      category: "Xiaolongbao",
      topPick: true,
      location:
        "90 Huanghe Road, Huangpu District — near People's Square",
      priceRange: "$3-6/p",
      cuisine: "Xiaolongbao specialists — pork, crab, crab-and-pork",
      description:
        "No-frills xiaolongbao specialist where the soup dumplings are handmade to order and the crab meat versions are genuinely exceptional. Tiny space, no English, no atmosphere — just perfectly executed dumplings at prices that make the famous Din Tai Fung feel absurd [15].",
      reviews:
        "Near-universal praise for the crab xiaolongbao. Expect a queue, cramped seating, and zero English. Worth every moment of discomfort [15].",
      whatToOrder:
        "Crab meat xiaolongbao (seasonal, October is prime), pork xiaolongbao, crab-and-pork combination. Order multiple steamers.",
      bestFor: "Lunch (arrive before 11 AM to minimize wait)",
      priceTier: 1,
    },
    {
      slug: "nanxiang-mantou-dian-yuyuan",
      name: "Nanxiang Mantou Dian (City God Temple Branch)",
      chineseName: "南翔馒头店",
      category: "Xiaolongbao",
      topPick: false,
      location:
        "Yu Garden Bazaar, Old City, Huangpu District",
      priceRange: "$5-10/p",
      cuisine: "Historic xiaolongbao — Shanghai's original (est. 1900)",
      description:
        "The original Shanghai xiaolongbao restaurant, operating since 1900. The ground-floor takeaway window always has enormous queues; the upper-floor dining rooms are more comfortable with slightly higher prices. The dumplings are good but the primary draw is the history and the setting overlooking the Yu Garden pond [10].",
      reviews:
        "Mixed — some feel the quality has declined under the weight of tourism. Ground floor dumplings are cheaper and arguably fresher. Upper floors are calmer.",
      whatToOrder:
        "Classic pork xiaolongbao, crab roe xiaolongbao (October season).",
      bestFor: "Mid-morning, combine with Yu Garden visit",
      priceTier: 1,
    },

    // — Shanghainese —
    {
      slug: "fu-1088",
      name: "Fu 1088",
      photo: { src: "/photos/shanghai/fu-1088.jpg", alt: "Fu 1088, Shanghai" },
      chineseName: "福1088",
      category: "Shanghainese",
      topPick: true,
      location:
        "1088 Zhenning Road, Jing'an District — in a 1930s French Concession villa",
      priceRange: "$30-55/p",
      cuisine: "Elevated traditional Shanghainese in a heritage setting",
      description:
        "Refined Shanghainese home-style cooking served in a beautifully restored 1930s villa with private dining rooms. The red-braised pork belly is legendary — caramelized, tender, and deeply savory. One Michelin star. The setting alone — period furniture, art deco details, garden courtyard — justifies a visit [16].",
      reviews:
        "Consistently praised for balancing tradition with refinement. Service is polished without being stiff. Reservations essential [16].",
      whatToOrder:
        "Hongshao rou (red-braised pork belly — the signature), smoked fish, drunken chicken, hairy crab (October seasonal special), crystal shrimp.",
      bestFor: "Dinner. Reserve 2-3 days ahead.",
      priceTier: 3,
    },
    {
      slug: "jesse-restaurant",
      name: "Jesse Restaurant",
      photo: { src: "/photos/shanghai/jesse-restaurant.jpg", alt: "Jesse Restaurant, Shanghai" },
      chineseName: "吉士酒家",
      category: "Shanghainese",
      topPick: true,
      location:
        "41 Tianping Road, Xuhui District — French Concession",
      priceRange: "$12-22/p",
      cuisine: "Home-style Shanghainese — no-frills, deeply flavorful",
      description:
        "Unpretentious neighborhood restaurant beloved by local Shanghainese for decades. The cooking is exactly what a skilled Shanghai grandmother would make — oily, sweet-savory, deeply comforting. No design, no concept, just food that makes you understand why locals are fiercely loyal [17].",
      reviews:
        "Universally praised for authentic flavor. Casual to the point of feeling like eating at a friend's house. Small space, can be smoky, reservations not always honored [17].",
      whatToOrder:
        "Red-braised pork, stir-fried river shrimp, lion's head meatballs, scallion oil noodles, soy-braised fish.",
      bestFor: "Either meal — lunch is less crowded",
      priceTier: 1,
    },
    {
      slug: "chun-restaurant",
      name: "Chun Restaurant",
      photo: { src: "/photos/shanghai/chun-restaurant.jpg", alt: "Chun Restaurant, Shanghai" },
      chineseName: "春餐厅",
      category: "Shanghainese",
      topPick: false,
      location:
        "124 Jinxian Road, Huangpu District — French Concession edge",
      priceRange: "$10-18/p",
      cuisine: "Classic Shanghainese home cooking with Jiangnan influences",
      description:
        "Tiny restaurant on a quiet French Concession lane serving meticulous Shanghainese and Jiangnan dishes. The kind of place where the chef-owner controls every dish personally and the menu changes with the season and market availability.",
      reviews:
        "Small but devoted following. Quality is consistent and portions are generous. Very limited seating — arrive early or prepare to wait.",
      whatToOrder:
        "Seasonal hairy crab dishes (October), oil-braised bamboo shoots, sweet and sour Mandarin fish, stir-fried greens.",
      bestFor: "Lunch",
      priceTier: 1,
    },

    // — Street Food / Noodles —
    {
      slug: "wei-xiang-zhai",
      name: "Wei Xiang Zhai",
      photo: { src: "/photos/shanghai/wei-xiang-zhai.jpg", alt: "Wei Xiang Zhai, Shanghai" },
      chineseName: "味香斋",
      category: "Street Food",
      topPick: false,
      location:
        "14 Yandang Road, Huangpu District — near Fuxing Park",
      priceRange: "$2-4/p",
      cuisine: "Legendary Shanghai noodles and curry wontons",
      description:
        "A decades-old neighborhood noodle shop famous for its pork chop noodle soup and Shanghai-style curry wontons. Fluorescent lights, plastic stools, no English — the kind of place that defines why Shanghai's backstreet food scene is worth seeking out [18].",
      reviews:
        "Pork chop noodles called 'a revelation.' Cash only, no English, close early. The antithesis of everything fancy in Shanghai [18].",
      whatToOrder:
        "Pork chop noodle soup (zhupai mian), Shanghai curry wontons, scallion oil dry noodles (congyou banmian).",
      bestFor: "Lunch (opens 6 AM, closes by early afternoon)",
      priceTier: 1,
    },
    {
      slug: "da-hu-chun",
      name: "Da Hu Chun",
      photo: { src: "/photos/shanghai/da-hu-chun.jpg", alt: "Da Hu Chun, Shanghai" },
      chineseName: "大壶春",
      category: "Street Food",
      topPick: false,
      location:
        "Near Sichuan Road, Huangpu District — multiple locations",
      priceRange: "$2-5/p",
      cuisine: "Traditional Shanghai breakfast — shengjianbao specialists (est. 1932)",
      description:
        "Shanghai's most famous shengjianbao (pan-fried soup buns) — crispy golden bottoms, juicy pork filling, and a burst of hot broth when you bite in. Open since 1932, Da Hu Chun is where Shanghainese go for a proper local breakfast with soy milk and you tiao (fried dough sticks) [19].",
      reviews:
        "Shengjianbao consistently rated among the city's best. Arrive before 8 AM for fresh batches and shorter lines. Basic setting, high turnover [19].",
      whatToOrder:
        "Shengjianbao (pan-fried pork buns — 4 per order), sweet or salty soy milk, you tiao.",
      bestFor: "Breakfast (7-9 AM)",
      priceTier: 1,
    },

    // — Hairy Crab (Seasonal) —
    {
      slug: "cheng-huang-miao-hairy-crab",
      name: "Wang Bao He Jiu Jia",
      chineseName: "王宝和酒家",
      category: "Hairy Crab",
      topPick: false,
      location:
        "603 Fuzhou Road, Huangpu District",
      priceRange: "$25-50/p",
      cuisine: "Hairy crab specialists — Shanghai's oldest crab restaurant (est. 1744)",
      description:
        "The definitive Shanghai hairy crab restaurant, operating since 1744. October is the peak of female crab season (prized for their rich roe). The crabs are steamed simply and eaten with black vinegar and ginger — the sweetness and richness of Yangcheng Lake crabs need no embellishment [20].",
      reviews:
        "The crab quality is reliable and sourcing is transparent. Prices spike during October peak season but remain reasonable compared to hotel dining rooms [20].",
      whatToOrder:
        "Steamed hairy crab (female in October for the roe), crab roe xiaolongbao, drunken crab, crab roe tofu.",
      bestFor: "Dinner. October is peak season — reserve ahead.",
      priceTier: 3,
    },

    // — Splurge —
    {
      slug: "ultraviolet-by-paul-pairet",
      name: "Ultraviolet by Paul Pairet",
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "Secret location (guests picked up from Mr & Mrs Bund on the Bund)",
      priceRange: "$400-600/p (prix fixe, wine included)",
      cuisine:
        "Multisensory dining — 20-course meal with synchronized sound, projection, scent, and light. Three Michelin stars [16]",
      description:
        "The world's first multisensory dining experience: 10 guests per night in a sealed room where each of the 20 courses is accompanied by projected images, music, scent, and temperature shifts. Genuinely unlike any other restaurant on earth. Whether it's gimmick or genius depends on your tolerance for theatrical dining, but the food itself — from Paul Pairet — is undeniably excellent.",
      reviews:
        "Polarizing but unforgettable. Those who embrace it call it life-changing. Reservations must be made weeks in advance. Extremely expensive [16].",
      whatToOrder: "Prix fixe only — no choices to make. Surrender to the experience.",
      bestFor: "Once-in-a-lifetime dinner. Book well in advance.",
      priceTier: 4,
    },
    {
      slug: "fu-he-hui",
      name: "Fu He Hui",
      chineseName: "福和慧",
      category: "Splurge",
      topPick: false,
      location:
        "1037 Yuyuan Road, Changning District — in a serene garden setting",
      priceRange: "$60-100/p",
      cuisine:
        "Vegetarian fine dining — Buddhist-inspired, Michelin-starred",
      description:
        "China's finest vegetarian restaurant — a Michelin-starred tasting menu that transforms vegetables, tofu, and mushrooms into dishes of extraordinary refinement. The philosophy draws on Buddhist vegetarian tradition but the execution is thoroughly contemporary. The garden setting is meditative and beautiful [16].",
      reviews:
        "Universally praised, even by committed carnivores. The mushroom courses are transcendent. Serene atmosphere. Excellent for a special meal that's uniquely Chinese [16].",
      whatToOrder:
        "Tasting menu (seasonal, changes regularly). Trust the kitchen entirely.",
      bestFor: "Dinner. Reserve 3-5 days ahead.",
      priceTier: 4,
    },

    // — Regional / Other —
    {
      slug: "di-shui-dong",
      name: "Di Shui Dong",
      photo: { src: "/photos/shanghai/di-shui-dong.jpg", alt: "Di Shui Dong, Shanghai" },
      chineseName: "滴水洞",
      category: "Regional Chinese",
      topPick: false,
      location:
        "56 Maoming South Road, Huangpu District — French Concession",
      priceRange: "$10-18/p",
      cuisine: "Hunan — fiery, smoky, deeply spiced",
      description:
        "Shanghai's most beloved Hunan restaurant. The ribs are legendary — dry-rubbed with cumin and chili, smoked until falling off the bone. Hunanese food is distinct from Sichuan — less numbing, more smoky and direct. Dark, crowded, atmospheric [21].",
      reviews:
        "Ribs called 'the best thing I ate in Shanghai' by multiple reviewers. Space is cramped and loud. Reservations recommended for dinner [21].",
      whatToOrder:
        "Cumin ribs (the signature — order double), beer-braised fish head, stir-fried green beans with pork, spicy bullfrog (adventurous but excellent).",
      bestFor: "Dinner — the atmosphere peaks in the evening",
      priceTier: 1,
    },
    {
      slug: "yang-s-fried-dumplings",
      name: "Yang's Fried Dumplings",
      photo: { src: "/photos/shanghai/yang-s-fried-dumplings.jpg", alt: "Yang's Fried Dumplings, Shanghai" },
      chineseName: "小杨生煎",
      category: "Street Food",
      topPick: true,
      location:
        "Multiple locations — Huanghe Road branch near People's Square is most central",
      priceRange: "$2-4/p",
      cuisine: "Shengjianbao — Shanghai's iconic pan-fried soup buns",
      description:
        "The most famous shengjianbao chain in Shanghai — crispy-bottomed pan-fried buns filled with pork and a burst of scalding soup. Four buns for under $2 is one of the great food bargains in any major city. Multiple locations make it easy to grab as a snack between sightseeing [19].",
      reviews:
        "Consistently excellent across locations. The Huanghe Road branch is most convenient. Eat immediately — they lose their magic as they cool [19].",
      whatToOrder:
        "Classic pork shengjianbao (4 per order). That's it. Maybe two orders.",
      bestFor: "Anytime — quick snack, breakfast, or late lunch",
      priceTier: 1,
    },
    {
      slug: "lost-heaven",
      name: "Lost Heaven",
      chineseName: "花马天堂",
      category: "Regional Chinese",
      topPick: false,
      location:
        "17 Yan'an East Road, Huangpu District — Bund location with river views",
      priceRange: "$18-30/p",
      cuisine: "Yunnan folk cuisine — herb-forward, Southeast Asian-influenced",
      description:
        "Atmospheric Yunnan restaurant with a Bund-adjacent location offering views of the Pudong skyline. The food draws on Dai, Bai, and other Yunnan minority cuisines — lemongrass, galangal, wild mushrooms, and grilled meats. A welcome contrast to Shanghai's typically sweet-savory palate [22].",
      reviews:
        "Beautiful setting, solid Yunnan cooking. Some feel the Bund location prioritizes ambiance over authenticity. The original French Concession branch (38 Gaoyou Road) has a more intimate feel [22].",
      whatToOrder:
        "Dai-style grilled fish, wild mushroom stir-fry, Yunnan ham, crossing-the-bridge noodles, jasmine tea-smoked duck.",
      bestFor: "Dinner at the Bund location for skyline views",
      priceTier: 2,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Extensive (20+ lines), clean, and cheap ($0.30-0.90 per ride). Covers virtually every tourist destination. Download Amap or Baidu Maps (Google Maps is blocked).",
      "Taxis/Rideshare: Use Didi (China's Uber). Extremely affordable — most cross-city rides under $7. Flag-fall taxis still easy to find.",
      "Walking: The French Concession and Bund areas are very walkable. Shanghai is flat, making long walks comfortable.",
      "Ferry: The Huangpu River commuter ferries between Puxi and Pudong cost $0.30 and deliver better views than $25 tourist cruises.",
    ],
    "Food & Dining": [
      "Hairy crab season: October is peak — female crabs are prized for their roe. Available at specialists and most Shanghainese restaurants. Budget $25-50 per person for a proper crab meal.",
      "Ordering strategy: For 3 people, order 4-5 dishes family-style plus rice or noodles. Shanghainese food tends to be sweeter and oilier than other regional Chinese cuisines.",
      "Tipping: Not expected in mainland China. High-end restaurants may add 10-15% service charge.",
      "Reservations: Essential at Fu 1088, Ultraviolet, Fu He Hui. Recommended at Di Shui Dong for dinner.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are ubiquitous. Set up international Alipay before the trip. Some backstreet food vendors still prefer cash.",
      "VPN: Download and configure before arriving — Google, WhatsApp, Instagram are blocked in mainland China.",
      "Language: English is more widely spoken in Shanghai than most Chinese cities, especially in the French Concession and at higher-end restaurants. Backstreet food stalls and the Old City will have zero English — translation app essential.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Avoid the first week of October (Golden Week) — domestic tourist crush makes Shanghai significantly less pleasant.",
      "Shanghai Museum and Power Station of Art require free timed-ticket reservations via WeChat mini-programs. Book 1-3 days ahead.",
      "Jinze Water Town requires no reservation but does require a private car — arrange through your hotel or a car service app.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Shanghai October Weather — China Discovery (https://www.chinadiscovery.com/shanghai-tours/weather/october-weather.html)",
    "[2] M50 Art District and Power Station of Art — Artron.net / TimeOut Shanghai (https://www.timeout.com/shanghai/art/best-art-galleries-in-shanghai)",
    "[3] Shanghai Food and Dining Overview — Eater / Lost Plate Shanghai (https://lostplate.com/shanghai-best-restaurants-where-to-eat-guide/)",
    "[4] French Concession Architecture Guide — Culture Trip (https://theculturetrip.com/asia/china/articles/a-guide-to-shanghais-french-concession)",
    "[5] Jing'an District Guide — Shanghai Wow (https://www.shanghaiwow.com/jingan-district-guide)",
    "[6] Old City Shanghai Food Guide — UnTour Shanghai (https://www.untourfoodtours.com/shanghai-old-city-food-tour/)",
    "[7] West Bund Art Corridor — ArchDaily / Wallpaper (https://www.wallpaper.com/art/west-bund-shanghai-art-corridor)",
    "[8] The Bund Architecture Walking Guide — Atlas Obscura (https://www.atlasobscura.com/places/the-bund-shanghai)",
    "[9] Jinze Water Town — Shanghai Expat / Travel China Guide (https://www.travelchinaguide.com/attraction/shanghai/jinze-water-town.htm)",
    "[10] Yu Garden Visitor Guide — China Highlights (https://www.chinahighlights.com/shanghai/attraction/yu-garden.htm)",
    "[11] Propaganda Poster Art Centre — Atlas Obscura (https://www.atlasobscura.com/places/shanghai-propaganda-poster-art-centre)",
    "[12] Shanghai Museum Guide — Shanghai Museum Official (https://www.shanghaimuseum.net/en/)",
    "[13] Tianzifang Guide — Culture Trip (https://theculturetrip.com/asia/china/articles/tianzifang-a-guide-to-shanghais-artsy-enclave)",
    "[14] Huangpu River Ferry — Smart Shanghai (https://www.smartshanghai.com/articles/activities/huangpu-river-ferry-guide)",
    "[15] Jia Jia Tang Bao — Eater Shanghai / Lost Plate (https://lostplate.com/shanghai-best-xiaolongbao/)",
    "[16] MICHELIN Guide Shanghai 2025 (https://guide.michelin.com/en/article/news-and-views/shanghai-2025-starred-restaurants)",
    "[17] Jesse Restaurant — Smart Shanghai (https://www.smartshanghai.com/venue/4608/jesse_restaurant_tianping_lu)",
    "[18] Wei Xiang Zhai — Shanghai Street Food Guide (https://www.untourfoodtours.com/shanghai-street-food-guide/)",
    "[19] Shengjianbao Guide — Serious Eats / Smart Shanghai (https://www.seriouseats.com/shanghai-shengjianbao-guide)",
    "[20] Shanghai Hairy Crab Season Guide — TimeOut Shanghai (https://www.timeout.com/shanghai/food-drink/hairy-crab-season-guide)",
    "[21] Di Shui Dong — Smart Shanghai (https://www.smartshanghai.com/venue/4004/di_shui_dong_maoming_nan_lu)",
    "[22] Lost Heaven — Smart Shanghai (https://www.smartshanghai.com/venue/4210/lost_heaven_on_the_bund)",
  ],
};
