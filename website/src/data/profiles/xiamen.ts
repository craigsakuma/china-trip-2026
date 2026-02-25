import type { CityProfile } from "@/types";

export const xiamenProfile: CityProfile = {
  slug: "xiamen",
  heroPhoto: { src: "/photos/xiamen/_hero.jpg", alt: "Gulangyu Island coastline in Xiamen", credit: "Don Ramey Logan" },
  executiveSummary: [
    "Xiamen in mid-October is one of China's most pleasant coastal cities -- warm but not oppressive (mid-70s to low 80s\u00b0F), dry, and breezy. The city sits on an island in the Taiwan Strait, and its character is distinctly Southern Fujianese: Hokkien dialect in the markets, ornate clan temples tucked between banyan-shaded lanes, and a seafood culture that rivals anywhere in China. Gulangyu Island, a UNESCO World Heritage Site just a five-minute ferry ride away, is entirely car-free and feels like stepping into a colonial-era dreamscape of winding footpaths, crumbling European villas, and hidden garden courtyards [1].",
    "The food is the sleeper hit. Xiamen's street food scene -- oyster omelets sizzling on griddles, satay noodles with peanut-rich broth, shacha hotpot, and thin spring rolls assembled tableside -- is among the most distinctive and affordable in China. The seafood markets along the coast serve the morning catch at plastic-table restaurants for a fraction of what you'd pay in Shanghai or Hong Kong. Beyond the city, a day trip to the Fujian Tulou -- massive circular earthen fortresses built by Hakka and Minnan communities, housing entire clans under one roof for centuries -- is one of the most architecturally astonishing experiences in all of China [2].",
    "Xiamen rewards a slower pace. Unlike Beijing's monumental intensity or Hong Kong's relentless energy, Xiamen invites wandering: getting lost in Gulangyu's backstreets, lingering over afternoon tea in a converted colonial villa, cycling along the coastal greenway at sunset. It pairs naturally with nearby Quanzhou for a Fujian Coast circuit that covers seafood, history, and some of China's most unique cultural heritage [3].",
  ],
  famousFor: [
    "Gulangyu Island (UNESCO)",
    "Fujian Tulou day trips",
    "seafood and street food",
    "Southern Fujianese (Hokkien) culture",
    "colonial architecture",
    "coastal scenery",
    "Nanputuo Temple",
  ],
  whyItFits: [
    "Gulangyu Island is car-free, walkable, and architecturally fascinating -- a UNESCO site that rewards getting lost",
    "Fujian Tulou day trip is one of the most unique architectural experiences in China",
    "Outstanding street food and seafood at extremely low prices",
    "Relaxed coastal pace provides a counterbalance to busier cities on the itinerary",
    "Southern Fujianese culture is distinctly different from northern China -- feels like entering a different country",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 84,
      avgLow: 72,
      rainChance: 20,
      precip: 1.2,
      sunrise: "5:58 AM",
      sunset: "5:45 PM",
      conditions: "Warm, humid; tail-end of summer heat; occasional brief showers",
    },
    {
      period: "Mid Oct",
      avgHigh: 80,
      avgLow: 68,
      rainChance: 15,
      precip: 0.8,
      sunrise: "6:05 AM",
      sunset: "5:34 PM",
      conditions: "Ideal; warm days, comfortable nights; low humidity; clear skies [4]",
    },
    {
      period: "Late Oct",
      avgHigh: 77,
      avgLow: 64,
      rainChance: 12,
      precip: 0.5,
      sunrise: "6:12 AM",
      sunset: "5:24 PM",
      conditions: "Pleasant and dry; best weather window; gentle sea breezes",
    },
  ],
  whatToPack:
    "Light, breathable clothing for 64-84\u00b0F range. Sun hat and sunscreen for coastal walks. Comfortable walking shoes for Gulangyu's hilly cobblestone paths. Light rain jacket for occasional showers. Layers for air-conditioned restaurants.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "zhongshan-road-and-old-town",
      name: "Zhongshan Road / Old Town (Siming District)",
      topPick: true,
      description:
        "Xiamen's historic commercial heart, a pedestrian arcade of Southern Fujianese shophouses with arched colonnades (qilou) built in the 1920s-30s. Side streets and back alleys retain genuine neighborhood life -- fruit vendors, temple incense, and elderly residents playing cards under banyan trees. The Gulangyu ferry terminal is a short walk away [5].",
      whyItFitsUs:
        "Most walkable base in Xiamen with immediate access to the Gulangyu ferry, best street food, and the atmospheric old town. Evening pedestrian street is lively without feeling like a tourist trap.",
      nearby:
        "Gulangyu Ferry Terminal (10 min walk), Nanputuo Temple (15 min taxi), Xiamen University (15 min taxi), Bashi Night Market (5 min walk)",
      hotels:
        "Luju Hotel (restored heritage shophouse, excellent location on Zhongshan Road), Xiamen Yihe Eastern Hotel",
    },
    {
      slug: "zengcuoan-village",
      name: "Zengcuo'an Village",
      topPick: false,
      description:
        "Former fishing village turned bohemian coastal neighborhood on Xiamen's southeast shore. Independent cafes, live music bars, muraled alleyways, and a sandy beach. Retains some genuine fishing-village character alongside its creative reinvention [6].",
      whyItFitsUs:
        "Most relaxed, artsy vibe in Xiamen. Great for a sunset evening -- beach walk, seafood dinner, live music. A genuine contrast to the historic old town.",
      nearby:
        "Xiamen University (10 min walk), Nanputuo Temple (15 min walk), Huandao Road coastal path (immediate)",
      hotels:
        "Various boutique guesthouses and hostels within the village",
    },
    {
      slug: "gulangyu-island",
      name: "Gulangyu Island (Stay Option)",
      topPick: false,
      description:
        "The UNESCO-listed island itself has boutique hotels in restored colonial villas. Staying overnight means experiencing the island after day-trippers leave -- quiet lanes, birdsong, and the sound of piano practice drifting from open windows. The island earned its nickname 'Piano Island' from its extraordinary concentration of pianos per capita [1].",
      whyItFitsUs:
        "Spending a night on the island transforms the experience -- the magic is in the early morning and evening when the crowds are gone. Several heritage villa hotels offer unique character.",
      nearby:
        "Shuzhuang Garden (5 min walk), Sunlight Rock (10 min walk), Organ Museum (5 min walk), all on-island",
      hotels:
        "Gulangyu 37 Degree Hotel (converted colonial villa), Miryam Boutique Hotel (sea-view heritage building)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "gulangyu-island-exploration",
      name: "Gulangyu Island (UNESCO World Heritage)",
      photo: { src: "/photos/xiamen/gulangyu-island-exploration.jpg", alt: "Gulangyu Island (UNESCO World Heritage), Xiamen" },
      topPick: true,
      description:
        "A car-free island of winding cobblestone paths, banyan-canopied lanes, and over 1,000 colonial-era villas in a remarkable mashup of European, Japanese, and Southeast Asian architectural styles. UNESCO-listed for its unique 'Historical International Settlement' that blended Chinese and foreign cultures from the 1840s-1940s. Beyond the main tourist drag, the backstreets reward aimless wandering [1].",
      time: "Half day to full day",
      location:
        "5-minute ferry from Xiamen's Dongdu International Terminal (tourists) or Xiamen Ferry Terminal (Zhongshan Road area)",
      cost: "$5/p ($5 round-trip ferry)",
      tips: [
        "Take the earliest ferry (7:10 AM) to arrive before crowds -- the island is magical before 9 AM",
        "Skip Sunlight Rock ($7 entrance) unless you need the summit view -- the backstreet wandering is the real attraction",
        "Shuzhuang Garden ($4) is worth the entrance for its seaside views and elegant piano museum [1]",
        "Get intentionally lost in the southern residential backstreets -- no maps, just follow lanes that look interesting",
        "Bring water and snacks; island restaurants are overpriced and mediocre compared to mainland Xiamen",
      ],
      priceTier: 1,
    },
    {
      slug: "fujian-tulou-day-trip",
      name: "Fujian Tulou Day Trip (UNESCO World Heritage)",
      photo: { src: "/photos/xiamen/fujian-tulou-day-trip.jpg", alt: "Fujian Tulou Day Trip (UNESCO World Heritage), Xiamen" },
      topPick: true,
      description:
        "Massive circular and rectangular earthen buildings constructed by Hakka and Minnan communities between the 12th and 20th centuries. Each tulou housed an entire clan -- up to 800 people -- in a self-contained fortress with thick rammed-earth walls (some 6 feet thick), a single entrance, and communal courtyards. The geometry is extraordinary: perfectly circular buildings up to five stories tall, visible from satellite imagery. The Nanjing County cluster (Tianluokeng, Taxia village) is the most photogenic [2].",
      time: "Full day (3-3.5 hrs each way by car + 3-4 hrs exploring)",
      location:
        "Nanjing County or Yongding County, inland Fujian Province. ~3-3.5 hours southwest of Xiamen by car",
      cost: "$50/p ($13 entrance Tianluokeng cluster + $110/3 shared private car/driver)",
      tips: [
        "Hire a private driver for flexibility -- leave Xiamen by 7:00 AM to maximize time at the tulou",
        "The Tianluokeng cluster ('Four Dishes and a Soup') is the most iconic -- photograph from the hilltop viewpoint",
        "Visit Taxia village nearby for a less-touristed experience with a beautiful ancestral hall and stream-side setting [2]",
        "Eat lunch in a tulou family home -- several offer home-cooked meals for ~$5-8/person",
        "Yongding cluster is equally impressive but further; choose one cluster rather than rushing between both",
      ],
      priceTier: 3,
    },
    {
      slug: "nanputuo-temple",
      name: "Nanputuo Temple and Wulao Peak Hike",
      topPick: true,
      description:
        "A Tang Dynasty Buddhist temple (founded 686 AD) set against the dramatic backdrop of Wulao Peak, with active monks, devoted worshippers, and incense-filled halls. The real prize is the trail behind the temple that climbs steeply through forested granite boulders to Wulao Peak for panoramic views of Xiamen, the harbor, and Gulangyu Island [7].",
      time: "2-3 hours (temple + hike)",
      location:
        "Siming District, adjacent to Xiamen University. 15 min taxi from Zhongshan Road",
      cost: "Free (temple entry is free; donations welcome)",
      tips: [
        "Visit the temple first (30-45 min), then hike the trail behind it up to Wulao Peak",
        "The hike is moderately steep with stone steps -- about 45-60 minutes up, rewarding panoramic views at the top [7]",
        "Combine with a stroll through adjacent Xiamen University campus (beautiful lakeside campus with Fujianese architecture)",
        "The vegetarian restaurant inside the temple serves excellent Buddhist cuisine for ~$3-5/person",
      ],
      priceTier: 0,
    },
    {
      slug: "huandao-road-coastal-walk",
      name: "Huandao Road Coastal Greenway",
      topPick: false,
      description:
        "A scenic coastal path circling Xiamen Island with dedicated walking and cycling lanes, ocean views, rocky shoreline, and sandy beach coves. The most beautiful section runs along the southeastern shore from Xiamen University past Zengcuo'an to the Convention Center area [8].",
      time: "2-3 hours (walking a section) or 4-5 hours (cycling the full loop)",
      location:
        "Southeastern Xiamen Island. Start near Xiamen University or Zengcuo'an",
      cost: "Free (bike rental ~$3-5/day from shared bike apps)",
      tips: [
        "The sunset stretch from Zengcuo'an heading south is the most scenic section",
        "Rent shared bikes (Hellobike or Meituan) via app -- available everywhere along the route [8]",
        "Stop at Baicheng Beach near Xiamen University for a coffee break at one of the beachside cafes",
        "Best in late afternoon for golden light on the ocean and mountain views across the strait",
      ],
      priceTier: 0,
    },
    {
      slug: "zhongshan-road-food-crawl",
      name: "Zhongshan Road and Old Town Food Crawl",
      topPick: true,
      description:
        "A self-guided eating tour through Xiamen's historic shophouse district and surrounding backstreets. The concentration of street food vendors and hole-in-the-wall restaurants is extraordinary -- oyster omelets, satay noodles, spring rolls, peanut soup, and dozens of Fujianese specialties you won't find elsewhere in China [9].",
      time: "2-3 hours (evening)",
      location:
        "Zhongshan Road pedestrian street and surrounding lanes, Siming District",
      cost: "$5-10/p (grazing across multiple stalls)",
      tips: [
        "Start at Jukou Street (局口街) off Zhongshan Road -- the densest concentration of authentic street food",
        "Must-try: oyster omelet (蚵仔煎), satay noodles (沙茶面), spring roll wraps (薄饼), peanut soup (花生汤) [9]",
        "Evening is best -- stalls open around 5 PM and the atmosphere builds through the night",
        "Eat where locals queue, not where there are English signs",
      ],
      priceTier: 1,
    },
    {
      slug: "xiamen-university-campus",
      name: "Xiamen University Campus Stroll",
      topPick: false,
      description:
        "Often called China's most beautiful university campus. The lakeside grounds feature elegant Fujianese-style architecture (orange tile roofs, arched corridors), a serene lotus lake (Furong Lake), and a graffiti-covered tunnel connecting to the beach. Founded in 1921 by Tan Kah Kee, a legendary overseas Chinese philanthropist [10].",
      time: "1-1.5 hours",
      location:
        "Siming District, adjacent to Nanputuo Temple. 15 min taxi from Zhongshan Road",
      cost: "Free",
      tips: [
        "Combine with Nanputuo Temple and the Wulao Peak hike for a half-day itinerary",
        "Walk through the Graffiti Tunnel (芙蓉隧道) connecting campus to Baicheng Beach [10]",
        "The campus may require visitor registration at the gate -- bring your passport",
        "Best visited on weekday mornings for a peaceful atmosphere",
      ],
      priceTier: 0,
    },
    {
      slug: "bashi-night-market",
      name: "Bashi (Eighth Market) Night Market",
      topPick: false,
      description:
        "Xiamen's most famous traditional wet market transforms into a bustling food market in the evenings. This is where Xiamen locals do their daily shopping -- live seafood tanks, tropical fruit stalls, dried goods, and prepared food vendors. Grittier and more authentic than Zhongshan Road [11].",
      time: "1.5-2 hours (evening)",
      location:
        "Bashi area, near Zhongshan Road, Siming District. 5-10 min walk from Zhongshan Road",
      cost: "$4-8/p",
      tips: [
        "Come hungry -- this is a market for eating, not sightseeing",
        "Seafood vendors will cook your selections to order at neighboring stalls",
        "Try the local shacha (satay) hotpot stalls and fresh tropical fruit juices [11]",
        "Morning visit (7-9 AM) shows the wet market in full operation -- fascinating for food lovers",
      ],
      priceTier: 1,
    },
    {
      slug: "jimei-school-village",
      name: "Jimei School Village (Jiageng Architecture)",
      photo: { src: "/photos/xiamen/jimei-school-village.jpg", alt: "Jimei School Village (Jiageng Architecture), Xiamen" },
      topPick: false,
      description:
        "A remarkable campus complex built by Tan Kah Kee (Chen Jiageng), the overseas Chinese rubber tycoon who poured his fortune into education. The architecture is a unique East-meets-West fusion: traditional Chinese upturned rooftops on European-style stone buildings. The Ao Yuan (Turtle Garden) memorial and Dragon Boat Pool are highlights [12].",
      time: "2-3 hours",
      location:
        "Jimei District, northern Xiamen. 30-40 min by taxi or BRT from Siming",
      cost: "$2/p ($2 Ao Yuan entrance; campus is free)",
      tips: [
        "Worth the trip for architecture enthusiasts -- the fusion style exists nowhere else in China [12]",
        "Take the BRT (bus rapid transit) from the island for a cheap and scenic ride across Jimei Bridge",
        "Combine with a seafood lunch at the Jimei waterfront restaurants",
        "Less visited by tourists -- you'll mostly see students and local families",
      ],
      priceTier: 1,
    },
    {
      slug: "tea-tasting-experience",
      name: "Southern Fujian Tea Tasting (Tie Guan Yin)",
      topPick: false,
      description:
        "Fujian is the heartland of Chinese oolong tea, and Xiamen's tea culture runs deep. Anxi County (nearby) produces Tie Guan Yin (Iron Goddess), one of China's most prized oolongs. Tea shops throughout Xiamen offer gongfu tea ceremonies where multiple short infusions reveal the tea's evolving character [13].",
      time: "1-2 hours",
      location: "Various tea shops in Siming District and Gulangyu Island",
      cost: "$5-20/p (tasting with purchase optional)",
      tips: [
        "Visit a dedicated tea shop rather than a tourist cafe -- ask your hotel for a recommendation",
        "Gongfu-style brewing uses tiny cups and multiple infusions -- the 3rd and 4th infusions are often the best [13]",
        "Buying tea directly from a shop after tasting is expected but not mandatory -- prices are very reasonable compared to export",
        "Pair with Gulangyu exploration for a natural afternoon break",
      ],
      priceTier: 1,
    },
    {
      slug: "shapowei-art-district",
      name: "Shapowei Art District",
      photo: { src: "/photos/xiamen/shapowei-art-district.jpg", alt: "Shapowei Art District, Xiamen" },
      topPick: false,
      description:
        "A former fishing harbor converted into Xiamen's creative arts hub. Old dockside warehouses now house galleries, design studios, independent bookshops, and craft coffee roasters. Retains some working fishing boats and a weathered waterfront atmosphere that hasn't been overly polished [14].",
      time: "1.5-2 hours",
      location:
        "Siming District waterfront, between Xiamen University and Zhongshan Road. 10 min taxi from either",
      cost: "Free",
      tips: [
        "Best combined with a late-afternoon visit before heading to Zhongshan Road for dinner",
        "The harbor-side coffee shops are excellent for a slow afternoon [14]",
        "Check for gallery exhibitions -- several rotate monthly",
        "Sunday afternoon has the liveliest atmosphere",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Street Food / Casual —
    {
      slug: "lianhua-oyster-omelet",
      name: "Lianhua Oyster Omelet",
      chineseName: "莲花煎蚝",
      category: "Street Food",
      topPick: true,
      location:
        "Jukou Street area, off Zhongshan Road, Siming District",
      priceRange: "$2-4/p",
      cuisine: "Xiamen street food -- oyster omelets (蚵仔煎)",
      description:
        "The oyster omelet (hai li jian / 海蛎煎) is Xiamen's signature dish, and the best versions come from unassuming street stalls like this one. Fresh local oysters mixed into a sweet potato starch batter, pan-fried until crispy on the outside and custardy within, served with a sweet chili sauce [9].",
      reviews:
        "Locals queue for this. The oysters are tiny, briny, and incredibly fresh. The starch batter is the key -- it creates a texture you won't find outside Fujian.",
      whatToOrder:
        "Oyster omelet (海蛎煎) -- order two, you'll want seconds. Add a side of peanut soup (花生汤) for dessert.",
      bestFor: "Lunch or evening snack",
      priceTier: 1,
    },
    {
      slug: "wulanshan-satay-noodles",
      name: "Wulanshan Shacha Noodles",
      chineseName: "乌兰山沙茶面",
      category: "Street Food",
      topPick: true,
      location:
        "Minzu Road, near Zhongshan Road, Siming District",
      priceRange: "$2-5/p",
      cuisine: "Xiamen satay noodles (沙茶面 / shacha mian)",
      description:
        "Satay noodles (shacha mian) are Xiamen's other iconic dish -- thin yellow noodles in a rich, peanut-based shacha broth with your choice of add-ins: shrimp, squid, tofu skin, duck blood, pork organs, vegetables. The shacha sauce is Xiamen's answer to Southeast Asian satay but with a deeper, more complex umami flavor [9].",
      reviews:
        "This is one of the city's most loved shacha noodle shops. Expect a crowded counter-service experience. The broth is rich and deeply savory without being heavy.",
      whatToOrder:
        "Shacha noodles with shrimp, squid, and tofu skin (沙茶面加虾、鱿鱼、豆腐皮). Adventurous eaters: add duck blood and pork intestine.",
      bestFor: "Breakfast or lunch",
      priceTier: 1,
    },
    {
      slug: "huang-zehe-peanut-soup",
      name: "Huang Zehe Peanut Soup Shop",
      chineseName: "黄则和花生汤店",
      category: "Street Food",
      topPick: false,
      location:
        "Zhongshan Road, Siming District -- a Xiamen institution since 1945",
      priceRange: "$1-3/p",
      cuisine: "Traditional Xiamen snacks and peanut soup",
      description:
        "This 80-year-old institution serves Xiamen's beloved peanut soup (花生汤) -- a sweet, silky dessert soup of slow-simmered peanuts. Also serves a full range of traditional Xiamen breakfast snacks: spring rolls, sticky rice wraps, and savory congee [15].",
      reviews:
        "A Xiamen landmark. The peanut soup is impossibly smooth. Extremely cheap and always packed with locals at breakfast time.",
      whatToOrder:
        "Peanut soup (花生汤, must-try), fried spring rolls (春卷), savory rice porridge. Total cost under $3.",
      bestFor: "Breakfast (arrive early, 7-8 AM for the full experience)",
      priceTier: 1,
    },
    {
      slug: "zhongshan-road-spring-roll-stall",
      name: "Zhongshan Road Thin Spring Rolls (Baobing)",
      chineseName: "中山路薄饼摊",
      category: "Street Food",
      topPick: false,
      location:
        "Various stalls on Jukou Street and Datong Road, Siming District",
      priceRange: "$1-2/p",
      cuisine: "Xiamen-style popiah / spring roll wraps (薄饼)",
      description:
        "Xiamen's version of popiah (薄饼 / baobing): paper-thin crepes spread with a sweet sauce, filled with julienned carrots, cabbage, crushed peanuts, bean sprouts, dried shrimp, and pork, then rolled into a tight cylinder. Eaten fresh, not fried. Essentially a Fujianese burrito -- the technique and filling are passed down through generations [9].",
      reviews:
        "Simple, cheap, and completely addictive. Watch the vendor make the paper-thin wrappers on a hot griddle -- it's mesmerizing.",
      whatToOrder:
        "Thin spring roll wrap (薄饼) -- $0.50-1.00 each. Get several with different fillings.",
      bestFor: "Anytime snack",
      priceTier: 1,
    },

    // — Seafood —
    {
      slug: "xiaoyanting-seafood",
      name: "Xiao Yan Ting Seafood",
      photo: { src: "/photos/xiamen/xiaoyanting-seafood.jpg", alt: "Xiao Yan Ting Seafood, Xiamen" },
      chineseName: "小眼亭海鲜大排档",
      category: "Seafood",
      topPick: true,
      location:
        "Near Bashi Market, Siming District",
      priceRange: "$10-20/p",
      cuisine: "Xiamen-style seafood -- live tanks, cooked to order",
      description:
        "A classic Xiamen seafood dapaidang (open-air restaurant) where you choose live seafood from tanks and specify how you want it prepared: steamed with ginger, stir-fried with shacha sauce, grilled, or in congee. The experience of picking your dinner while it's still swimming is pure Xiamen [16].",
      reviews:
        "Fresh, affordable, and genuinely local. Don't expect polish -- plastic chairs, fluorescent lights, and a menu that's mostly in Chinese. The seafood quality is excellent.",
      whatToOrder:
        "Steamed local crab, stir-fried clams with shacha sauce (沙茶炒蛤), grilled squid, garlic steamed shrimp. Ask what's freshest today.",
      bestFor: "Dinner",
      priceTier: 2,
    },
    {
      slug: "ajie-braised-noodles",
      name: "A Jie Braised Noodles",
      photo: { src: "/photos/xiamen/ajie-braised-noodles.jpg", alt: "A Jie Braised Noodles, Xiamen" },
      chineseName: "阿杰卤面",
      category: "Local Classics",
      topPick: false,
      location:
        "Near Bashi area, Siming District",
      priceRange: "$2-4/p",
      cuisine: "Xiamen braised noodles (卤面) -- thick alkaline noodles in savory pork-and-seafood gravy",
      description:
        "Xiamen's braised noodles (lu mian) are a hearty bowl of thick alkaline noodles swimming in a rich gravy made from pork bone broth, dried shrimp, mushrooms, and egg. Topped with shredded pork, shrimp, and fried shallots. Comfort food at its most satisfying [11].",
      reviews:
        "Portions are enormous and incredibly cheap. The gravy is thick, deeply savory, and unlike anything you'll find outside Fujian. A hidden gem.",
      whatToOrder:
        "Braised noodles (卤面) with extra toppings. Pair with a side of fried spring rolls.",
      bestFor: "Lunch",
      priceTier: 1,
    },
    {
      slug: "shacha-hotpot-restaurant",
      name: "Fuding Shacha Hotpot",
      chineseName: "福鼎沙茶火锅",
      category: "Hotpot",
      topPick: true,
      location:
        "Datong Road area, Siming District",
      priceRange: "$8-15/p",
      cuisine: "Xiamen-style shacha (satay) hotpot",
      description:
        "Xiamen's take on hotpot uses a peanut-rich shacha broth instead of the fiery Sichuan mala. The broth is savory, nutty, and deeply aromatic. Dip seafood, vegetables, and thin-sliced meats into the bubbling pot, then into a personal dish of shacha dipping sauce mixed with raw egg. Communal, interactive, and perfect for a group of three [16].",
      reviews:
        "A completely different hotpot experience from Chongqing/Sichuan style. The shacha broth is milder but incredibly flavorful. Excellent seafood options.",
      whatToOrder:
        "Shacha broth base, fresh shrimp, squid, fish balls, local greens, thin-sliced beef. Order the shacha dipping sauce with beaten raw egg.",
      bestFor: "Dinner (hotpot is a social evening meal)",
      priceTier: 1,
    },

    // — Regional / Sit-Down —
    {
      slug: "1980-nanyang-restaurant",
      name: "1980 Nanyang Restaurant",
      photo: { src: "/photos/xiamen/1980-nanyang-restaurant.jpg", alt: "1980 Nanyang Restaurant, Xiamen" },
      chineseName: "1980烧肉粽南洋餐厅",
      category: "Regional Fujianese",
      topPick: false,
      location:
        "Zhongshan Road area, Siming District",
      priceRange: "$8-15/p",
      cuisine: "Fujianese cuisine with Southeast Asian (Nanyang) influences",
      description:
        "Xiamen's overseas Chinese heritage means strong culinary connections to Southeast Asia. This restaurant celebrates that fusion with Fujianese dishes inflected with Malay, Indonesian, and Filipino flavors -- reflecting the generations of Hokkien merchants who sailed back and forth across the South China Sea [3].",
      reviews:
        "Interesting menu that bridges Fujianese and Southeast Asian cooking. The zongzi (sticky rice dumplings) are legendary -- Xiamen's savory version with pork, mushroom, and chestnut.",
      whatToOrder:
        "Xiamen-style savory zongzi (烧肉粽), Nanyang-style curry dishes, fried bee hoon (rice noodles), five-spice pork roll (五香卷).",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "hao-qing-xiang",
      name: "Hao Qing Xiang Restaurant",
      photo: { src: "/photos/xiamen/hao-qing-xiang.jpg", alt: "Hao Qing Xiang Restaurant, Xiamen" },
      chineseName: "好清香大酒楼",
      category: "Regional Fujianese",
      topPick: false,
      location:
        "Zhongshan Road, Siming District -- one of Xiamen's oldest restaurants",
      priceRange: "$10-20/p",
      cuisine: "Traditional Fujianese banquet-style cooking",
      description:
        "A Xiamen stalwart serving refined Fujianese dishes in a more formal setting. Known for elaborate preparations like Buddha Jumps Over the Wall (佛跳墙) -- the legendary Fujianese soup of sea cucumber, abalone, shark fin (imitation), scallop, and slow-simmered stock [17].",
      reviews:
        "The go-to for locals celebrating special occasions. Buddha Jumps Over the Wall is the signature but expensive -- the everyday Fujianese dishes are excellent and affordable.",
      whatToOrder:
        "Buddha Jumps Over the Wall (premium, ~$15-25/p for a small pot to share), steamed grouper, stir-fried local greens, five-spice pork roll (五香卷), ginger duck.",
      bestFor: "Dinner (more formal, good for a nice sit-down meal)",
      priceTier: 2,
    },

    // — Gulangyu Dining —
    {
      slug: "gulangyu-seafood-garden",
      name: "Gulangyu Local Seafood Stalls",
      chineseName: undefined,
      category: "Gulangyu Island",
      topPick: false,
      location:
        "Longtou Road and back-alley stalls, Gulangyu Island",
      priceRange: "$3-8/p",
      cuisine: "Grilled seafood, island snacks, Xiamen street food",
      description:
        "Gulangyu's main drag (Longtou Road) is wall-to-wall tourist snack shops, but venture into the side alleys for local-run seafood grills and noodle shops serving the island's small residential community. Quality is hit-or-miss compared to mainland Xiamen [1].",
      reviews:
        "The honest truth: Gulangyu food is generally mediocre and overpriced compared to Xiamen island. Eat lightly here and save your appetite for the mainland.",
      whatToOrder:
        "Grilled squid-on-a-stick, meat floss buns (肉松饼 -- a Gulangyu specialty), fresh coconut. For a real meal, wait until you ferry back.",
      bestFor: "Quick snack while exploring the island",
      priceTier: 1,
    },

    // — Splurge —
    {
      slug: "the-westin-seafood",
      name: "Xiamen Coastal Seafood Fine Dining",
      photo: { src: "/photos/xiamen/the-westin-seafood.jpg", alt: "Xiamen Coastal Seafood Fine Dining, Xiamen" },
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "Various upscale restaurants along Huandao Road and in Siming District",
      priceRange: "$30-60/p",
      cuisine: "Elevated Fujianese seafood, modern Chinese",
      description:
        "Xiamen has several upscale restaurants elevating local seafood traditions with refined technique and presentation. Multi-course set menus featuring premium ingredients like local crab, abalone, and seasonal catch are the specialty. These offer the best combination of quality ingredients and skilled preparation in the city [17].",
      reviews:
        "A significant step up from the dapaidang experience but at a fraction of Hong Kong or Shanghai prices. Service is attentive, menus often have English translations.",
      whatToOrder:
        "Chef's tasting menu or seasonal set menu. Premium steamed fish, braised abalone, seafood congee, and a refined Buddha Jumps Over the Wall.",
      bestFor: "Special dinner",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Taxis/Rideshare: Use Didi (China's Uber). Most rides within Siming District under $4. Essential for the Tulou day trip.",
      "BRT: Xiamen's bus rapid transit is clean, cheap ($0.15-0.30), and covers the island well. Useful for reaching Jimei District.",
      "Walking: Siming District (old town, Zhongshan Road) is very walkable. Gulangyu is entirely pedestrian.",
      "Ferry: Gulangyu-bound tourists must use Dongdu International Terminal (not the locals-only terminal). Buy tickets in advance on Xiamen Ferry WeChat mini-program -- October weekends sell out [1].",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 4-5 dishes family-style. Seafood restaurants -- pick from live tanks and negotiate the cooking method.",
      "Street food hours: Most street food stalls open 10 AM-10 PM. Morning markets (Bashi) start around 6 AM.",
      "Tipping: Not expected in mainland China. No service charges at casual restaurants.",
      "Must-try Xiamen foods: oyster omelet (海蛎煎), satay noodles (沙茶面), thin spring rolls (薄饼), peanut soup (花生汤), five-spice pork roll (五香卷), shacha hotpot [9].",
    ],
    "Money & Communication": [
      "Payment: Alipay/WeChat Pay accepted nearly everywhere including street stalls. Set up international Alipay before the trip. Carry some cash for very small vendors.",
      "VPN: Download and configure before arriving -- Google, WhatsApp, Instagram are blocked.",
      "Language: English is less common in Xiamen than in Beijing or Shanghai. Translation app essential. Many locals speak Hokkien (Southern Min) as first language, Mandarin second.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Gulangyu ferry tickets: Book 1-3 days in advance for October weekends. Weekday tickets are usually available day-of [1].",
      "Tulou day trip: Arrange private car/driver through your hotel or Didi -- public bus options exist but are slow and inflexible.",
      "Typhoon awareness: October is the tail end of typhoon season. Rare by mid-October but monitor forecasts [4].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Gulangyu Island Guide -- China Highlights (https://www.chinahighlights.com/xiamen/attraction/gulangyu-island.htm)",
    "[2] Fujian Tulou Guide -- China Discovery (https://www.chinadiscovery.com/fujian/tulou/)",
    "[3] Xiamen Travel Guide -- Lonely Planet (https://www.lonelyplanet.com/china/fujian/xiamen)",
    "[4] Xiamen October Weather -- China Discovery (https://www.chinadiscovery.com/xiamen-tours/weather-seasons/weather-in-october.html)",
    "[5] Zhongshan Road Xiamen -- China Highlights (https://www.chinahighlights.com/xiamen/attraction/zhongshan-road.htm)",
    "[6] Zengcuo'an Village Guide -- Visit Xiamen (https://www.visitxiamen.com/zengcuoan)",
    "[7] Nanputuo Temple Guide -- China Highlights (https://www.chinahighlights.com/xiamen/attraction/nanputuo-temple.htm)",
    "[8] Xiamen Huandao Road -- China Discovery (https://www.chinadiscovery.com/xiamen/huandao-road.html)",
    "[9] Xiamen Street Food Guide -- Lost Plate (https://lostplate.com/xiamen-street-food-guide/)",
    "[10] Xiamen University Guide -- China Highlights (https://www.chinahighlights.com/xiamen/attraction/xiamen-university.htm)",
    "[11] Bashi Market Guide -- Visit Xiamen (https://www.visitxiamen.com/bashi-market)",
    "[12] Jimei School Village -- China Discovery (https://www.chinadiscovery.com/xiamen/jimei-school-village.html)",
    "[13] Fujian Oolong Tea Culture -- China Highlights (https://www.chinahighlights.com/travelguide/chinese-tea/oolong-tea.htm)",
    "[14] Shapowei Art District -- Visit Xiamen (https://www.visitxiamen.com/shapowei)",
    "[15] Huang Zehe Peanut Soup Shop -- Xiamen Food Guide (https://www.chinadiscovery.com/xiamen/xiamen-food.html)",
    "[16] Xiamen Seafood and Shacha Hotpot -- Lost Plate (https://lostplate.com/xiamen-food-guide/)",
    "[17] Fujianese Cuisine Guide -- China Highlights (https://www.chinahighlights.com/travelguide/chinese-food/fujian-cuisine.htm)",
  ],
};
