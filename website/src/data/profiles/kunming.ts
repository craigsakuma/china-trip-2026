import type { CityProfile } from "@/types";

export const kunmingProfile: CityProfile = {
  slug: "kunming",
  heroPhoto: { src: "/photos/kunming/_hero.jpg", alt: "Panoramic view of the Stone Forest in Kunming, Yunnan", credit: "BrokenSphere" },
  executiveSummary: [
    'Kunming is the rare Chinese megacity that feels nothing like one. Known as the "Spring City" for its famously temperate climate — flowers bloom year-round, and October temperatures hover in the comfortable mid-60s to low 70s°F — it sits at 1,890 meters (6,200 feet) on the Yunnan-Guizhou Plateau, giving the air a clean, high-altitude crispness that distinguishes it from every other city on this trip. Most travelers pass through Kunming as a transit hub for Yunnan\'s headline destinations (Dali, Lijiang, Shangri-La), but those who slow down discover a city with a genuinely distinctive food culture, deep ethnic diversity, and a relaxed, almost Mediterranean pace of life that makes it one of China\'s most livable cities [1].',
    "Yunnan cuisine is one of China's most diverse and underrated regional traditions — a crossroads of Han, Bai, Dai, Yi, and Southeast Asian influences that produces flavors found nowhere else in the country. October is the tail end of Kunming's legendary wild mushroom season, when restaurants pile their tables with dozens of varieties of porcini, matsutake, chanterelles, and species that have no English name. Crossing-the-bridge noodles (guoqiao mixian), Yunnan's signature dish, originated in the region and remains the city's culinary identity — a theatrical, interactive meal where you cook raw ingredients in a piping-hot bowl of rich chicken broth sealed under a layer of oil [2].",
    "Beyond food, the Stone Forest (Shilin), a UNESCO World Heritage Site 90 minutes southeast of the city, is a genuinely otherworldly landscape of 270-million-year-old limestone karst pillars rising up to 30 meters from the earth. The Yunnan Provincial Museum houses one of China's finest collections of Bronze Age Dian Kingdom artifacts and ethnic minority textiles. Green Lake Park in the city center offers the kind of unscripted local life — elderly Kunmingers dancing, playing cards, and singing Yunnan opera — that defines what we're looking for on this trip [3].",
  ],
  famousFor: [
    "Spring City climate",
    "wild mushroom cuisine",
    "crossing-the-bridge noodles",
    "Stone Forest (UNESCO)",
    "ethnic minority crossroads",
    "Yunnan cuisine hub",
    "flower markets",
  ],
  whyItFits: [
    "Extraordinary food scene — wild mushroom hotpot, crossing-the-bridge noodles, and Yunnan's most diverse regional cuisine",
    "October is ideal: comfortable 55-72°F, tail end of mushroom season, clear skies",
    "Authentic local park culture at Green Lake — tai chi, Yunnan opera, card games at dawn",
    "Stone Forest offers a unique geological hiking experience unlike anything else on the trip",
    "Natural gateway to Yunnan circuit (Dali, Lijiang, Tiger Leaping Gorge, Shangri-La)",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 72,
      avgLow: 55,
      rainChance: 25,
      precip: 0.8,
      sunrise: "7:05 AM",
      sunset: "6:50 PM",
      conditions: "Warm, occasional afternoon showers; tail end of rainy season; mushroom season still active [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 69,
      avgLow: 52,
      rainChance: 18,
      precip: 0.5,
      sunrise: "7:12 AM",
      sunset: "6:38 PM",
      conditions: "Clearing skies; comfortable and dry; excellent visibility for Stone Forest",
    },
    {
      period: "Late Oct",
      avgHigh: 66,
      avgLow: 48,
      rainChance: 12,
      precip: 0.3,
      sunrise: "7:20 AM",
      sunset: "6:27 PM",
      conditions: "Crisp autumn air; dry and sunny; ideal walking weather",
    },
  ],
  whatToPack:
    "Layers for 48-72°F range. Light jacket for mornings and evenings at altitude, comfortable walking shoes, rain layer for early October afternoon showers. Sunscreen — UV is strong at 6,200 feet elevation.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "green-lake-cuihu-area",
      name: "Green Lake (Cuihu) Area",
      topPick: true,
      description:
        "Kunming's cultural heart. Green Lake Park is surrounded by tree-lined boulevards, teahouses, and the Yunnan University campus, giving the area an easygoing, intellectual character. Mornings bring retirees practicing tai chi, singing Yunnan opera, and dancing. The lake itself is home to migrating black-headed gulls from Siberia starting in late October [4].",
      whyItFitsUs:
        "Most walkable, atmospherically rich neighborhood. Green Lake morning culture mirrors what we loved about Temple of Heaven in Beijing. Excellent restaurants and cafes within walking distance. Close to Yunnan Provincial Museum.",
      nearby:
        "Green Lake Park (immediate), Yunnan University (5 min walk), Yunnan Provincial Museum (15 min walk), Nanping Walking Street (15 min walk)",
      hotels:
        "Green Lake Hotel (historic landmark on the lake, est. 1956 — top pick), Wyndham Kunming Green Lake",
    },
    {
      slug: "old-town-nanqiang-street-area",
      name: "Old Town / Nanqiang Street Area",
      topPick: false,
      description:
        "The remnants of Kunming's historic center around Nanqiang Street and Jinbi Road. While much has been rebuilt, pockets of old courtyard architecture survive alongside traditional shops, street food vendors, and neighborhood life. The East and West Pagodas (1,200 years old) anchor the area [5].",
      whyItFitsUs:
        "Best street food crawling territory. Jinbi Road night market and the surrounding lanes offer the most concentrated Yunnan snack scene in the city. More gritty and authentic than the polished commercial districts.",
      nearby:
        "East and West Pagodas (5 min), Nanping Walking Street (10 min), Kunming Bird and Flower Market (10 min walk)",
      hotels:
        "Lost Garden Boutique Hotel (restored courtyard), various budget-friendly guesthouses in the old lanes",
    },
    {
      slug: "kunming-old-street-wenlin-jie",
      name: "Kunming Old Street / Wenlin Jie",
      topPick: false,
      description:
        "Bohemian-intellectual neighborhood near Yunnan University. Wenlin Jie (Culture Lane) is lined with independent cafes, bookshops, small galleries, and local eateries. The area attracts university students, artists, and a younger creative crowd, giving it a relaxed, slightly countercultural energy unique in Kunming.",
      whyItFitsUs:
        "Best for evening strolling and casual dining. Coffee culture is surprisingly strong here. Good base for exploring both Green Lake and the old town on foot.",
      nearby:
        "Yunnan University (immediate), Green Lake (10 min walk), Kunming Old Street (5 min walk)",
      hotels:
        "Yunnan University area guesthouses, Loft Design Hotel",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "stone-forest-shilin",
      name: "Stone Forest (Shilin) — UNESCO World Heritage Site",
      photo: { src: "/photos/kunming/stone-forest-shilin.jpg", alt: "Stone Forest (Shilin) — UNESCO World Heritage Site, Kunming" },
      topPick: true,
      description:
        "A 270-million-year-old landscape of towering limestone karst pillars — some reaching 30 meters — eroded into blade-like formations, natural bridges, caves, and labyrinthine corridors. The Major Stone Forest is the most famous section, but the Naigu Stone Forest (20 minutes further) sees a fraction of the visitors and has equally dramatic formations. The Sani people (a branch of the Yi ethnic group) have lived among these formations for centuries, and their cultural performances and embroidery are part of the experience [3].",
      time: "Full day (1.5 hrs each way + 3-4 hrs exploring)",
      location:
        "Shilin Yi Autonomous County, ~90 km SE of Kunming. 1.5 hrs by car or high-speed train to Shilin station (24 min) + local bus",
      cost: "$25/p ($24 entrance + $3 shuttle within park) — or $40/p with private car ($24 entrance + $50/3 shared car)",
      tips: [
        "Take the high-speed train from Kunming South to Shilin (24 minutes, ~$5) then local bus — faster than driving",
        "Visit the Major Stone Forest first thing in the morning before tour groups arrive, then move to the quieter Naigu Stone Forest after lunch",
        "Hire a Sani guide at the entrance ($15-20) — they know hidden viewpoints and caves that most visitors miss",
        "Wear sturdy shoes — the paths between formations are uneven and slippery when wet [3]",
      ],
      priceTier: 2,
    },
    {
      slug: "green-lake-park-morning-culture",
      name: "Green Lake Park — Morning Culture",
      photo: { src: "/photos/kunming/green-lake-park-morning-culture.jpg", alt: "Green Lake Park — Morning Culture, Kunming" },
      topPick: true,
      description:
        "Kunming's answer to Beijing's Temple of Heaven park culture. Every morning, hundreds of locals converge on this beautiful urban lake park for tai chi, fan dancing, Yunnan opera singing, card games, and ballroom dancing. From late October, thousands of black-headed gulls migrate from Siberia to winter on the lake, creating a magical scene as locals feed them from the shore [4].",
      time: "1.5-2 hours (morning)",
      location:
        "Cuihu District, central Kunming. Walking distance from most central hotels",
      cost: "Free",
      tips: [
        "Arrive between 7:00-8:30 AM for peak activity — the Yunnan opera singers near the west shore are mesmerizing",
        "The park is small enough to circle in 30 minutes, but linger and observe",
        "If visiting late October, bring bread to feed the Siberian gulls — it's a beloved local tradition [4]",
        "Combine with breakfast at a nearby mixian (rice noodle) shop",
      ],
      priceTier: 0,
    },
    {
      slug: "yunnan-provincial-museum",
      name: "Yunnan Provincial Museum",
      photo: { src: "/photos/kunming/yunnan-provincial-museum.jpg", alt: "Yunnan Provincial Museum, Kunming" },
      topPick: false,
      description:
        "One of China's most underrated provincial museums. The star collection is the Bronze Age Dian Kingdom artifacts (2,500 years old) — elaborate bronze drums, cowrie shell containers, and figurines depicting a sophisticated pre-Han civilization that most visitors have never heard of. The ethnic minority gallery showcases costumes, textiles, and ritual objects from Yunnan's 25 officially recognized minority groups [6].",
      time: "2-3 hours",
      location:
        "Guandu District, near Kunming's new administrative center. ~25 min by taxi from Green Lake area",
      cost: "Free (passport required for entry)",
      tips: [
        "The Dian Kingdom bronzes on the third floor are the must-see — don't rush through the ground floor and miss them",
        "Audio guide available in English ($3)",
        "The ethnic minority textiles gallery is excellent preparation if continuing to Dali or Guizhou",
        "Closed Mondays",
      ],
      priceTier: 0,
    },
    {
      slug: "kunming-bird-and-flower-market",
      name: "Kunming Bird and Flower Market (Yuanxi Flower & Bird Market)",
      topPick: true,
      description:
        "A sprawling, sensory-overloading market that captures Kunming's identity as a city obsessed with living things. Hundreds of vendors sell flowers, bonsai trees, jade, tea, songbirds, crickets, Buddhist prayer beads, ethnic minority jewelry, and every variety of dried mushroom imaginable. This is where Kunmingers come to browse, socialize, and haggle — not a tourist market [7].",
      time: "1.5-2 hours",
      location:
        "Yuanxi Road, Panlong District. 10-15 min walk from Green Lake",
      cost: "Free (purchases vary)",
      tips: [
        "Go in the morning when vendors are setting up and the energy is highest",
        "The dried mushroom section is extraordinary — vendors will explain varieties and offer samples",
        "Bargain for tea purchases — ask to taste before buying",
        "The jade and minority jewelry sections are fascinating even if you don't buy [7]",
      ],
      priceTier: 0,
    },
    {
      slug: "wild-mushroom-market-and-tasting",
      name: "Wild Mushroom Market and Tasting",
      photo: { src: "/photos/kunming/wild-mushroom-market-and-tasting.jpg", alt: "Wild Mushroom Market and Tasting, Kunming" },
      topPick: true,
      description:
        "Yunnan produces over 800 species of edible wild mushrooms — more than any other province in China — and October is the tail end of peak mushroom season. The wholesale mushroom markets (especially Mushuihua Market) are extraordinary: stalls piled with porcini, matsutake, chanterelles, chicken-oil mushrooms, bamboo fungus, and dozens of species with no English name. Follow the market visit with a mushroom hotpot lunch [2].",
      time: "Half day (2 hrs market + 1.5 hrs lunch)",
      location:
        "Mushuihua Wild Mushroom Market, Guandu District. ~20 min by taxi from city center",
      cost: "$15-25/p (mushroom hotpot lunch)",
      tips: [
        "Visit early morning (7-9 AM) when fresh mushrooms arrive from the mountains",
        "Vendors are knowledgeable and happy to explain varieties — use a translation app for deeper conversation",
        "NEVER buy and cook unfamiliar mushrooms yourself — some deadly species closely resemble edible ones",
        "Book a mushroom hotpot lunch at a nearby restaurant for the full experience — many market-adjacent restaurants let you bring purchased mushrooms to cook [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "western-hills-and-dragon-gate",
      name: "Western Hills and Dragon Gate",
      photo: { src: "/photos/kunming/western-hills-and-dragon-gate.jpg", alt: "Western Hills and Dragon Gate, Kunming" },
      topPick: false,
      description:
        "A forested mountain ridge on the western shore of Dianchi Lake with temples, grottoes, and the dramatic Dragon Gate — a series of tunnels, chambers, and shrines carved directly into the cliff face by a Qing Dynasty monk over 72 years (1781-1853). The cliffside walkway offers vertigo-inducing views 300 meters above Dianchi Lake [8].",
      time: "Half day (3-4 hours including transport)",
      location:
        "Western shore of Dianchi Lake, ~15 km from central Kunming. 30-40 min by taxi or bus",
      cost: "$8/p ($6 Dragon Gate entrance + $2 chairlift one-way) — or $12/p with round-trip chairlift",
      tips: [
        "Take the chairlift up and walk down through the forest trails for the best experience",
        "The Dragon Gate cliff path is narrow and crowded midday — arrive before 10 AM or after 3 PM",
        "Clear days offer sweeping views across Dianchi Lake to the distant mountains [8]",
        "Combine with Dianchi Lake waterfront walk on the return trip",
      ],
      priceTier: 1,
    },
    {
      slug: "dianchi-lake-waterfront",
      name: "Dianchi Lake Waterfront",
      topPick: false,
      description:
        "Yunnan's largest freshwater lake stretches 40 km south of the city. The Haigeng Park waterfront promenade is where locals come for sunset walks, kite flying, and fish dinners. In late October, the first flocks of Siberian black-headed gulls arrive, joining the egrets and cormorants already resident [9].",
      time: "1.5-2 hours (late afternoon/sunset)",
      location:
        "Haigeng Park, south shore. ~20 min by taxi from central Kunming",
      cost: "Free",
      tips: [
        "Best at golden hour — arrive 1-1.5 hours before sunset",
        "Rent a bicycle along the lakeshore path for a more relaxed exploration",
        "The seafood restaurants along the waterfront serve fresh lake fish — prices are very reasonable",
        "Combines well with Western Hills as an afternoon/evening itinerary [9]",
      ],
      priceTier: 0,
    },
    {
      slug: "yunnan-nationalities-village",
      name: "Yunnan Nationalities Village",
      photo: { src: "/photos/kunming/yunnan-nationalities-village.jpg", alt: "Yunnan Nationalities Village, Kunming" },
      topPick: false,
      description:
        "An open-air cultural park on the shore of Dianchi Lake showcasing reproductions of traditional architecture and cultural practices from 25 of Yunnan's ethnic minority groups. While it's essentially a theme park, the cultural performances, traditional crafts demonstrations, and architectural reconstructions provide useful context for understanding Yunnan's extraordinary ethnic diversity — especially if you won't visit remote minority villages [10].",
      time: "2-3 hours",
      location:
        "South shore of Dianchi Lake, Xishan District. ~25 min by taxi from central Kunming",
      cost: "$12/p ($12 entrance)",
      tips: [
        "Visit in the afternoon when cultural performances are scheduled (check daily schedule at entrance)",
        "Focus on the Bai, Dai, Yi, and Naxi sections if short on time — these are the groups you're most likely to encounter elsewhere in Yunnan",
        "The Dai water-splashing festival demonstration is fun and participatory",
        "Combines with Dianchi Lake waterfront and Western Hills for a full south-shore day [10]",
      ],
      priceTier: 1,
    },
    {
      slug: "east-and-west-pagodas",
      name: "East and West Pagodas",
      photo: { src: "/photos/kunming/east-and-west-pagodas.jpg", alt: "East and West Pagodas, Kunming" },
      topPick: false,
      description:
        "Two Tang Dynasty pagodas (originally built ~800-829 AD, rebuilt multiple times) standing about 2 km apart in the old city. The surrounding streets — particularly Jinbi Road between them — form one of Kunming's most atmospheric old neighborhoods, with tea shops, street food vendors, and evening markets. The West Pagoda area has a small temple complex that sees almost no tourists [5].",
      time: "1-1.5 hours (including walking between them)",
      location:
        "Old city center, Wuhua District. Walking distance from Nanping Street",
      cost: "Free",
      tips: [
        "Walk Jinbi Road between the two pagodas at dusk when the street food vendors set up",
        "The West Pagoda temple complex is quieter and more contemplative than the East",
        "The surrounding lanes have excellent street snack vendors — look for erkuai (grilled rice cakes) and doufen (rice jelly) [5]",
      ],
      priceTier: 0,
    },
    {
      slug: "yunnan-cuisine-cooking-class",
      name: "Yunnan Cuisine Cooking Class",
      photo: { src: "/photos/kunming/yunnan-cuisine-cooking-class.jpg", alt: "Yunnan Cuisine Cooking Class, Kunming" },
      topPick: false,
      description:
        "Hands-on class learning to prepare Yunnan specialties — typically including crossing-the-bridge noodles, erkuai (Yunnan rice cakes), and stir-fried wild mushrooms. Most classes begin with a market visit to source ingredients, providing an immersive introduction to Yunnan's unique produce: fresh herbs, dried mushrooms, exotic peppers, and fermented ingredients [11].",
      time: "3-4 hours (including market visit)",
      location:
        "Various locations in central Kunming. Hotels can arrange",
      cost: "$25-45/p (per person, all-inclusive)",
      tips: [
        "Book a class that includes a market visit — the ingredient education is as valuable as the cooking",
        "Request crossing-the-bridge noodles as one of the dishes — assembling the ingredients and understanding the broth technique is fascinating",
        "Private classes for 3 people are more intimate and offer better instruction [11]",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Crossing-the-Bridge Noodles —
    {
      slug: "bridge-fragrance-garden",
      name: "Bridge Fragrance Garden",
      photo: { src: "/photos/kunming/bridge-fragrance-garden.jpg", alt: "Bridge Fragrance Garden, Kunming" },
      chineseName: "桥香园",
      category: "Crossing-the-Bridge Noodles",
      topPick: true,
      location:
        "Multiple locations; Baoshan Street branch near Green Lake is most convenient",
      priceRange: "$3-8/p",
      cuisine: "Crossing-the-bridge noodles (guoqiao mixian) — Kunming's signature dish",
      description:
        "The most respected chain for Kunming's iconic dish. Boiling chicken broth arrives sealed under a layer of oil that keeps it at near-boiling temperature. You add raw ingredients — thin-sliced chicken, pork, fish, quail eggs, chrysanthemum petals, herbs, and rice noodles — cooking them in the broth at the table. Multiple tiers from simple ($3) to elaborate banquet-style ($8) with dozens of ingredients [2].",
      whatToOrder:
        "Premium-tier crossing-the-bridge noodles (ask for the version with the most ingredients — the theatrical presentation is the whole point), side of erkuai (pan-fried rice cakes).",
      bestFor: "Lunch — arrive before noon for fresh broth",
      priceTier: 1,
    },
    {
      slug: "jianxin-garden-restaurant",
      name: "Jianxin Garden Restaurant",
      photo: { src: "/photos/kunming/jianxin-garden-restaurant.jpg", alt: "Jianxin Garden Restaurant, Kunming" },
      chineseName: "建新园",
      category: "Crossing-the-Bridge Noodles",
      topPick: false,
      location:
        "Baoshan Street, Wuhua District. Near Green Lake",
      priceRange: "$2-6/p",
      cuisine: "Traditional Kunming mixian (rice noodles) — est. 1906",
      description:
        "A 120-year-old institution and Kunming's oldest continuously operating rice noodle house. Less theatrical than the crossing-the-bridge style — here the focus is on rich, deeply flavored broths (chicken, pork bone, or small-pot with herbs) ladled over fresh rice noodles. Always packed with locals. No-frills, fast-paced, deeply satisfying [12].",
      whatToOrder:
        "Small-pot mixian (xiaoguomixian — cooked individually in a clay pot over high heat), braised chicken mixian, cold rice noodles with chili oil.",
      bestFor: "Breakfast or lunch — peak local scene from 7-9 AM",
      priceTier: 1,
    },

    // — Wild Mushroom —
    {
      slug: "yesheng-jun-hotpot",
      name: "Yesheng Jun Hotpot (Wild Mushroom Hotpot)",
      chineseName: "野生菌火锅",
      category: "Wild Mushroom",
      topPick: true,
      location:
        "Guanshang area, Panlong District. ~15 min taxi from Green Lake",
      priceRange: "$15-30/p",
      cuisine: "Wild mushroom hotpot — Kunming's October must-eat experience",
      description:
        "October is the tail end of Yunnan's legendary mushroom season, and mushroom hotpot is the definitive way to experience it. A rich chicken-bone broth simmers with a rotating cast of 8-15 varieties of wild mushrooms — porcini, matsutake, chanterelles, chicken-oil mushrooms, bamboo pith, and species you've never seen. The broth deepens as each mushroom releases its flavors. Communal, interactive, and utterly unique to Yunnan [2].",
      whatToOrder:
        "Mixed wild mushroom platter (the more varieties the better), matsutake slices, chicken-oil mushrooms, black truffle slices if available, finish with rice noodles in the mushroom-infused broth.",
      bestFor: "Dinner — mushroom hotpot is quintessentially a social evening meal",
      priceTier: 2,
    },
    {
      slug: "fu-zhuan-yuan",
      name: "Fu Zhuan Yuan",
      photo: { src: "/photos/kunming/fu-zhuan-yuan.jpg", alt: "Fu Zhuan Yuan, Kunming" },
      chineseName: "福照苑",
      category: "Wild Mushroom",
      topPick: false,
      location:
        "Dongfeng East Road, Panlong District. 10 min from Green Lake",
      priceRange: "$12-25/p",
      cuisine: "Wild mushroom specialist with Yunnan home-style dishes",
      description:
        "A local favorite for mushroom dishes beyond hotpot — stir-fried porcini with cured ham, steamed matsutake with ginger, and braised mixed mushrooms in clay pots. The kitchen treats each mushroom species with distinct technique, showcasing the range of flavors and textures that make Yunnan mushroom cuisine extraordinary.",
      whatToOrder:
        "Stir-fried porcini with Xuanwei ham (absolute classic), steamed matsutake, dry-fried chicken-oil mushrooms, mushroom soup.",
      bestFor: "Either meal — lunch is less crowded",
      priceTier: 2,
    },

    // — Yunnan Regional —
    {
      slug: "yinyuxuan",
      name: "Yinyuxuan",
      chineseName: "银雨轩",
      category: "Yunnan Regional",
      topPick: true,
      location:
        "Cuihu South Road, near Green Lake Park. Walking distance from most central hotels",
      priceRange: "$8-15/p",
      cuisine: "Traditional Yunnan home-style cooking",
      description:
        "An institution for refined Yunnan home cooking. The menu draws from multiple Yunnan sub-cuisines — Dai-influenced dishes from Xishuangbanna, Bai flavors from Dali, and Kunming local classics. Beautiful courtyard setting with attention to presentation that elevates home-style food without losing its soul.",
      whatToOrder:
        "Steam-pot chicken (qiguoji — the signature, cooked in a special clay pot that condenses steam into an intensely flavored broth), Dali-style grilled fish, mint salad, fried goat cheese (rubing).",
      bestFor: "Dinner — the courtyard atmosphere is lovely at night",
      priceTier: 1,
    },
    {
      slug: "1910-train-restaurant",
      name: "1910 La Gare du Sud",
      photo: { src: "/photos/kunming/1910-train-restaurant.jpg", alt: "1910 La Gare du Sud, Kunming" },
      chineseName: "1910火车南站",
      category: "Yunnan Regional",
      topPick: false,
      location:
        "Near old Kunming South Railway Station, Guandu District. ~20 min taxi from center",
      priceRange: "$10-18/p",
      cuisine: "French-Yunnan fusion in historic railway setting",
      description:
        "Set in a restored French colonial-era railway building from the old Yunnan-Vietnam Railway (built 1904-1910), this restaurant serves Yunnan dishes with subtle French-Vietnamese influence — a reflection of Kunming's unique position at the crossroads of China and Southeast Asia. The building itself is a piece of history [13].",
      whatToOrder:
        "Railway-style steam-pot chicken, Yunnan-French bread with dipping sauces, pepper-crusted Xuanwei ham, Vietnamese-influenced spring rolls.",
      bestFor: "Lunch — the historic setting is best appreciated in daylight",
      priceTier: 1,
    },

    // — Street Food & Snacks —
    {
      slug: "jinbi-road-night-market",
      name: "Jinbi Road Night Market Area",
      chineseName: "金碧路夜市",
      category: "Street Food",
      topPick: true,
      location:
        "Jinbi Road between East and West Pagodas, Wuhua District",
      priceRange: "$1-5/p",
      cuisine: "Kunming street food — grilled, fried, and snacked",
      description:
        "The old city's most concentrated street food zone comes alive after dark. Vendors line the road between the two ancient pagodas selling erkuai (grilled rice cakes brushed with chili paste), shaokao (charcoal-grilled skewers), doufen (rice jelly with chili oil), and fried potato slices — all for pocket change. This is Kunming's most authentic nighttime food experience [14].",
      whatToOrder:
        "Erkuai with chili paste and soy sauce (the signature Kunming snack), lamb skewers with cumin, doufen (cold rice jelly), fried potato slices with chili, grilled tofu.",
      bestFor: "Late evening — best atmosphere after 8 PM",
      priceTier: 1,
    },
    {
      slug: "wenlin-street-food-crawl",
      name: "Wenlin Jie Food Crawl",
      chineseName: "文林街",
      category: "Street Food",
      topPick: false,
      location:
        "Wenlin Street, near Yunnan University. Walking distance from Green Lake",
      priceRange: "$2-7/p",
      cuisine: "Eclectic mix — Yunnan snacks, BBQ, noodles, cafes",
      description:
        "University-district eating street with a younger, more eclectic energy than the old city. Mix of traditional Yunnan snacks (mixian shops, erkuai stands) and newer spots. The late-night BBQ culture here is legendary among Kunming's student population.",
      whatToOrder:
        "Mixian at any shop with a long line, grilled tofu with dipping sauce, cold erkuai salad, Yunnan-style BBQ skewers.",
      bestFor: "Late night — peaks around 9-11 PM",
      priceTier: 1,
    },

    // — Dai & Minority Cuisine —
    {
      slug: "dai-flavor-shao-kao",
      name: "Dai Flavor BBQ (Dai Wei Shao Kao)",
      chineseName: "傣味烧烤",
      category: "Dai & Minority Cuisine",
      topPick: false,
      location:
        "Multiple locations; clusters near Guanshang and along Dianchi Road",
      priceRange: "$8-15/p",
      cuisine: "Dai ethnic minority BBQ — Southeast Asian-influenced grilling",
      description:
        "The Dai people of Xishuangbanna bring a distinctly Southeast Asian flavor to Kunming's food scene — lemongrass-wrapped grilled fish, banana leaf-steamed dishes, sour and spicy salads with herbs, and sticky rice. The BBQ joints are casual, open-air, and lively. A genuine taste of tropical Yunnan in the city [15].",
      whatToOrder:
        "Lemongrass-wrapped grilled fish (the signature), grilled pork neck with dipping sauce, papaya salad, pineapple rice, fresh herbs with nam phrik-style dip.",
      bestFor: "Dinner — open-air atmosphere best after sunset",
      priceTier: 1,
    },

    // — Splurge —
    {
      slug: "lost-garden-kunming",
      name: "Lost Garden",
      photo: { src: "/photos/kunming/lost-garden-kunming.jpg", alt: "Lost Garden, Kunming" },
      chineseName: "失落花园",
      category: "Splurge",
      topPick: false,
      location:
        "Cuihu area, central Kunming. Walking distance from Green Lake",
      priceRange: "$25-45/p",
      cuisine: "Elevated Yunnan cuisine with seasonal wild ingredients",
      description:
        "Kunming's most refined dining experience. Set in a beautifully restored garden courtyard, the kitchen sources directly from Yunnan's mountains — wild mushrooms, foraged herbs, free-range poultry, and cured Xuanwei ham. Dishes are rooted in Yunnan tradition but presented with modern elegance. The steam-pot chicken and wild mushroom tasting are exceptional [16].",
      whatToOrder:
        "Seasonal wild mushroom tasting menu (October highlight), steam-pot chicken, Xuanwei ham with melon, fried goat cheese with rose petal honey, Pu'er tea-smoked duck.",
      bestFor: "Dinner — the garden courtyard is magical at night",
      priceTier: 3,
    },

    // — Tea —
    {
      slug: "kunming-pu-erh-tea-market",
      name: "Xiongda Tea City (Pu'erh Tea Market)",
      chineseName: "雄达茶城",
      category: "Tea",
      topPick: false,
      location:
        "Xiongda Tea City, Guandu District. ~20 min taxi from center",
      priceRange: "$5-50+ (tastings free, purchases vary)",
      cuisine: "Pu'erh and Yunnan tea — tasting and purchasing",
      description:
        "Yunnan is the birthplace of Pu'erh tea, and Kunming's wholesale tea markets are where serious buyers from across China come to source. Hundreds of vendors offer free tastings of raw, aged, and fermented Pu'erh. Even if you don't buy, spending an hour tasting your way through a vendor's collection is a profound education in one of China's most complex tea traditions [17].",
      whatToOrder:
        "Ask to taste sheng (raw) vs. shu (fermented) Pu'erh side by side, aged cakes from different mountains, and Yunnan Dianhong black tea.",
      bestFor: "Morning or early afternoon — vendors are most attentive before the afternoon rush",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Kunming's metro system covers major sites. Lines 1, 2, and 3 connect the train station, city center, and airport. ~$0.30-0.50 per ride.",
      "Taxis/Rideshare: Use Didi (China's Uber). Most cross-city rides under $5. Taxis are plentiful and honest with meters.",
      "Walking: The Green Lake / Wenlin Jie / Old Town core is very walkable. Most central attractions within 15-20 min on foot.",
      "Stone Forest: High-speed train from Kunming South to Shilin (24 min) is faster and cheaper than driving.",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 4-5 dishes family-style plus rice or mixian (rice noodles). Yunnan dining is communal.",
      "Mushroom season: October is the tail end — some species may be finishing. Ask restaurants what's currently available before ordering the full mushroom hotpot.",
      "Spice levels: Yunnan food is less aggressively spicy than Sichuan but uses more fresh herbs, sour flavors, and fermented ingredients. Don't assume 'mild' means bland.",
      "Tipping: Not expected in mainland China. Even upscale restaurants rarely add service charges.",
    ],
    "Money & Communication": [
      "Payment: Most places accept Alipay/WeChat Pay. Set up international Alipay before the trip. Street food vendors and markets are increasingly cashless but carry small bills for holdouts.",
      "VPN: Download and configure before arriving — Google, WhatsApp, Instagram are blocked.",
      "Language: Very little English spoken outside top hotels. Google Translate camera mode is essential for menus. Kunming is less tourist-oriented than Beijing or Shanghai.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Altitude: At 6,200 feet (1,890m), some visitors notice mild effects (slight breathlessness, faster heart rate). Stay hydrated and take it easy on day one. UV is strong — wear sunscreen.",
      "Stone Forest tickets: Can be purchased on-site or via WeChat mini-program. October weekends can be busy but rarely sell out like Beijing sites.",
      "Yunnan circuit: If continuing to Dali, the high-speed train (2 hours) is far preferable to flying. Book tickets 1-3 days ahead on 12306.cn or Trip.com.",
      "Air quality: Kunming consistently ranks among China's best cities for air quality. Masks not typically needed [1].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Kunming October Weather — China Discovery (https://www.chinadiscovery.com/kunming/weather-in-october.html)",
    "[2] Crossing-the-Bridge Noodles and Yunnan Mushroom Cuisine — China Highlights (https://www.chinahighlights.com/kunming/food/)",
    "[3] Stone Forest (Shilin) Guide — China Discovery (https://www.chinadiscovery.com/yunnan/kunming/stone-forest.html)",
    "[4] Green Lake Park Kunming — Travel China Guide (https://www.travelchinaguide.com/attraction/yunnan/kunming/green-lake-park.htm)",
    "[5] Kunming Old Town and Pagodas — China Highlights (https://www.chinahighlights.com/kunming/attraction/east-west-pagodas.htm)",
    "[6] Yunnan Provincial Museum — Travel China Guide (https://www.travelchinaguide.com/attraction/yunnan/kunming/yunnan-provincial-museum.htm)",
    "[7] Kunming Bird and Flower Market — Lost Plate (https://lostplate.com/kunming-bird-flower-market-guide/)",
    "[8] Western Hills and Dragon Gate — China Discovery (https://www.chinadiscovery.com/yunnan/kunming/western-hills.html)",
    "[9] Dianchi Lake Guide — Travel China Guide (https://www.travelchinaguide.com/attraction/yunnan/kunming/dianchi-lake.htm)",
    "[10] Yunnan Nationalities Village — China Highlights (https://www.chinahighlights.com/kunming/attraction/yunnan-nationalities-village.htm)",
    "[11] Yunnan Cooking Class — China Highlights (https://www.chinahighlights.com/kunming/activity/cooking-class.htm)",
    "[12] Jianxin Garden and Kunming Mixian Culture — Lost Plate (https://lostplate.com/kunming-best-rice-noodles/)",
    "[13] Yunnan-Vietnam Railway History — China Discovery (https://www.chinadiscovery.com/yunnan/kunming/yunnan-vietnam-railway.html)",
    "[14] Kunming Night Markets and Street Food — Lost Plate (https://lostplate.com/kunming-street-food-guide/)",
    "[15] Dai Cuisine in Kunming — China Highlights (https://www.chinahighlights.com/kunming/food/dai-cuisine.htm)",
    "[16] Kunming Fine Dining — Trip.com (https://www.trip.com/travel-guide/kunming/restaurants/)",
    "[17] Pu'erh Tea Markets in Kunming — World of Tea (https://www.worldoftea.org/kunming-tea-market/)",
  ],
};
