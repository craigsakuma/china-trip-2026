import type { CityProfile } from "@/types";

export const datongProfile: CityProfile = {
  slug: "datong",
  heroPhoto: { src: "/photos/datong/_hero.jpg", alt: "Yungang Grottoes Buddhist carvings in Datong", credit: "Marcin Białek" },
  executiveSummary: [
    "Datong is an underrated historical powerhouse in northern Shanxi province that punches far above its weight. The Yungang Grottoes alone justify the trip \u2014 51,000 Buddhist statues carved into sandstone cliffs in the 5th century, with figures up to 56 feet tall, rivaling Dunhuang and Longmen but drawing a fraction of the visitors. October delivers Datong's best weather: dry, clear skies with crisp autumn air ideal for exploring outdoor sites. The city sits at 3,500 feet elevation on the northern edge of the Loess Plateau, giving it a bracing continental climate that feels refreshingly different from humid coastal China [1].",
    "Beyond the grottoes, Datong offers the Hanging Monastery (Xuankong Si) \u2014 a 1,500-year-old temple improbably built into a sheer cliff face, the only surviving temple in China dedicated to Buddhism, Taoism, and Confucianism simultaneously [2]. Inside the restored Ming Dynasty city walls, the Huayan Temple preserves the largest and most intact Liao and Jin dynasty Buddhist architecture in China, including a famous Smiling Bodhisattva statue that has become the city's icon [3]. The Nine Dragon Screen, oldest and largest of China's three surviving examples, predates its Forbidden City counterpart by 300 years.",
    "The food is reason enough to linger. Datong is the undisputed capital of knife-cut noodles (daoxiao mian) \u2014 thick, chewy ribbons shaved from a block of dough directly into boiling water, served with rich lamb or pork sauces. Shanxi's vinegar traditions, braised lamb, and hearty oat-based dishes round out a cuisine perfectly suited to the region's cold winters and big appetites [4].",
  ],
  famousFor: [
    "Yungang Grottoes (UNESCO)",
    "Hanging Monastery",
    "knife-cut noodles",
    "ancient city walls",
    "Liao/Jin dynasty temples",
    "Northern Wei dynasty history",
  ],
  whyItFits: [
    "World-class Buddhist cave art with far fewer crowds than comparable sites",
    "Genuinely off-the-beaten-path \u2014 very few Western tourists",
    "Outstanding noodle culture and hearty northern Shanxi cuisine",
    "Compact enough to explore thoroughly in 2 days",
    "Pairs naturally with Pingyao for a combined Shanxi circuit",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 62,
      avgLow: 39,
      rainChance: 10,
      precip: 0.3,
      sunrise: "6:25 AM",
      sunset: "5:55 PM",
      conditions: "Clear, crisp; excellent visibility for outdoor sites [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 57,
      avgLow: 34,
      rainChance: 8,
      precip: 0.2,
      sunrise: "6:36 AM",
      sunset: "5:38 PM",
      conditions: "Dry and cool; ideal sightseeing weather; layers essential",
    },
    {
      period: "Late Oct",
      avgHigh: 52,
      avgLow: 29,
      rainChance: 6,
      precip: 0.1,
      sunrise: "6:48 AM",
      sunset: "5:22 PM",
      conditions: "Cold mornings near freezing; warm jacket required; very dry",
    },
  ],
  whatToPack:
    "Warm layers for 29-62\u00b0F temperature swings. Fleece or down jacket, windbreaker, warm hat for early mornings. Comfortable walking shoes for temples and city wall. Sunscreen and sunglasses \u2014 dry autumn sun is deceptively strong at elevation.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "old-town-ancient-city",
      name: "Old Town (Inside the City Walls)",
      topPick: true,
      description:
        "Datong's restored Ming Dynasty city walls enclose a compact historic core with temples, traditional courtyard residences, and local restaurants. The Huayan Temple, Shanhua Temple, and Nine Dragon Screen are all within walking distance of each other inside the walls. The old town has been thoughtfully restored without losing its character \u2014 far less commercialized than comparable walled cities [5].",
      whyItFitsUs:
        "Most walkable and atmospheric base. Everything inside the walls is accessible on foot. Traditional courtyard hotels put you steps from the best temples and noodle shops. Easy evening walks along the illuminated city wall.",
      nearby:
        "Huayan Temple (5 min walk), Nine Dragon Screen (5 min walk), Shanhua Temple (10 min walk), city wall access points (immediate)",
      hotels:
        "Datong Yunzhong Traditional Courtyard (traditional courtyard inn, 5 min walk to Huayan Temple \u2014 top pick), Four Points Datong Pingcheng (modern hotel in old town center), Pingcheng Fu Hotel (boutique courtyard hotel with Northern Wei period theme)",
    },
    {
      slug: "new-town-district",
      name: "New Town / Datong Museum Area",
      topPick: false,
      description:
        "The modern district south of the old city walls houses the Datong Museum and newer hotels with more contemporary amenities. Less atmospheric than the old town but offers reliable mid-range and chain hotel options with good transport connections.",
      whyItFitsUs:
        "Practical alternative if courtyard hotels inside the walls are full. Better vehicle access for early-morning departures to Yungang Grottoes or the Hanging Monastery.",
      nearby:
        "Datong Museum (10 min), old town south gate (10 min by taxi), Datong Railway Station (15 min)",
      hotels:
        "Howard Johnson Jindi Plaza Datong, Datong Hotel (reliable mid-range options with parking)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "yungang-grottoes",
      name: "Yungang Grottoes (UNESCO World Heritage Site)",
      topPick: true,
      description:
        "One of China's three greatest Buddhist cave art sites, with 51,000 statues across 252 caves carved into a kilometer-long sandstone cliff between 460-525 AD during the Northern Wei Dynasty. The scale is staggering \u2014 Cave 20's seated Buddha is 45 feet tall, now dramatically open to the sky after its front wall collapsed centuries ago. Caves 5-6 contain the most elaborate interiors with floor-to-ceiling carved narratives of the Buddha's life. Caves 9-13, the 'Five Magnificent Caves,' retain original painted colors [6].",
      time: "3-4 hours (half day with guide)",
      location:
        "16 km west of Datong city center. ~30 min by taxi or Bus Line 3 from downtown",
      cost: "$23/p ($17 entrance + $20/3 shared audio guide)",
      tips: [
        "Arrive at 8:00 AM opening to have the caves nearly to yourself \u2014 large tour groups arrive after 10 AM [6]",
        "Hire an on-site guide ($25-55 for 2-3 hours) or book in advance \u2014 the historical context transforms the experience",
        "Book tickets online via the 'Yungang Research Institute' WeChat mini-program (real-name reservation required since 2025)",
        "Don't skip the museum building near the entrance \u2014 excellent context on Northern Wei dynasty history and carving techniques",
      ],
      priceTier: 2,
    },
    {
      slug: "hanging-monastery",
      name: "Hanging Monastery (Xuankong Si)",
      topPick: true,
      description:
        "A gravity-defying 1,500-year-old temple built into a sheer cliff face 165 feet above the ground, supported by wooden beams embedded in the rock. Originally constructed in 491 AD during the Northern Wei Dynasty, it is the only surviving temple in China that houses Buddhism, Taoism, and Confucianism under one roof. The engineering is astonishing \u2014 27 horizontal beams of durable iron pine wood anchor the structure to the cliff [2].",
      time: "Half day (1.5 hrs driving each way + 1-2 hrs at site)",
      location:
        "65 km southeast of Datong, near Hunyuan County. ~1.5 hours by car",
      cost: "$24/p ($17 entrance + $20/3 shared car)",
      tips: [
        "Arrive before 8:30 AM to be among the first 80 visitors allowed on the temple \u2014 capacity limits mean 1-2 hour waits later in the day [2]",
        "The temple walkways are extremely narrow with steep stairs \u2014 not suitable for those with severe fear of heights",
        "Combine with Hengshan (North Sacred Peak) on the same trip \u2014 the mountain is directly behind the monastery",
        "Direct buses run from Datong Ancient City to the visitor center (~1.5 hrs, ~$5/p)",
      ],
      priceTier: 2,
    },
    {
      slug: "huayan-temple",
      name: "Huayan Temple",
      topPick: true,
      description:
        "The largest and most perfectly preserved Liao and Jin dynasty Buddhist temple complex in China, founded in 1038. The Mahavira Hall (Daxiongbao Dian) is one of the two largest surviving wooden Buddhist halls in China. The Sutra Hall houses the beloved 'Smiling Bodhisattva' \u2014 a graceful figure with parted lips that has become Datong's unofficial icon. The recently added Huayan Pagoda offers panoramic city views [3].",
      time: "2-3 hours",
      location:
        "Inside the old town, Pingcheng District. Walking distance from most old town hotels",
      cost: "$11/p ($11 entrance)",
      tips: [
        "Visit in the morning when light fills the Sutra Hall and illuminates the famous Smiling Bodhisattva",
        "Climb the Huayan Pagoda for the best views over the old town and city walls",
        "Combine with the Nine Dragon Screen and Shanhua Temple for a full old town walking day [3]",
      ],
      priceTier: 1,
    },
    {
      slug: "nine-dragon-screen",
      name: "Nine Dragon Screen",
      topPick: false,
      description:
        "The oldest and largest of China's three surviving Nine Dragon Screens (the others are in Beijing's Forbidden City and Beihai Park). Built in 1392 during the Ming Dynasty, this 150-foot-long, 26-foot-high glazed-tile wall depicts nine dragons in vivid colored relief. It originally served as the spirit wall for the residence of the 13th son of Ming Dynasty founder Zhu Yuanzhang [7].",
      time: "30-45 minutes",
      location:
        "Inside the old town, Dongcheng District. A short walk from Huayan Temple",
      cost: "Free",
      tips: [
        "Best photographed in morning light when the glazed tiles catch the sun",
        "Visit the reflecting pool on the opposite side \u2014 the dragons' reflection in the water doubles the visual impact [7]",
        "Combine with Huayan Temple and Shanhua Temple for a half-day old town walk",
      ],
      priceTier: 0,
    },
    {
      slug: "datong-city-wall",
      name: "Datong Ancient City Wall",
      topPick: false,
      description:
        "A magnificently restored Ming Dynasty city wall with a total circumference of 7.4 km (4.6 miles). The wall features imposing watchtowers, corner towers, and gate towers. Walking or cycling the full circuit offers panoramic views over both the historic old town and the modern city beyond. The wall is particularly atmospheric at dusk when the lanterns are lit [5].",
      time: "1.5-3 hours (walking full circuit) or 1-1.5 hours (cycling)",
      location:
        "Encircles the entire old town. Multiple access points; south gate is the most popular entrance",
      cost: "$4/p ($4 entrance)",
      tips: [
        "Late afternoon into early evening is the best time \u2014 catch sunset from the wall and stay for the illuminated night views",
        "Rent a bicycle on the wall to cover the full 7.4 km circuit without exhausting your legs",
        "The east and north wall sections see fewer visitors than the south gate area",
        "Free shuttle bus runs between some gate towers [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "shanhua-temple",
      name: "Shanhua Temple",
      topPick: false,
      description:
        "One of China's most intact Liao and Jin dynasty temple complexes, originally founded in 713 AD during the Tang Dynasty. The massive Mahavira Hall and Hall of the Three Saints contain impressive Buddhist statuary. Covering nearly 14,000 square meters, the temple feels grand yet peaceful \u2014 far quieter than Huayan Temple and rarely visited by tourists [8].",
      time: "1-1.5 hours",
      location:
        "Inside the old town near the south gate, Pingcheng District",
      cost: "$7/p ($7 entrance)",
      tips: [
        "Visit after Huayan Temple for a fascinating comparison of Liao/Jin dynasty temple architecture",
        "The Four Heavenly Kings flanking the main gate are particularly expressive",
        "One of Datong's most peaceful spots \u2014 few tourists and genuine contemplative atmosphere [8]",
      ],
      priceTier: 1,
    },
    {
      slug: "datong-museum",
      name: "Datong Museum",
      topPick: false,
      description:
        "A well-curated museum tracing Datong's history from the Northern Wei dynasty through its centuries as a strategic frontier garrison town. Excellent exhibits on the city's role as the Northern Wei capital (398-494 AD), when it was the political center from which the Yungang Grottoes were commissioned. The building itself is modern and architecturally striking.",
      time: "1.5-2 hours",
      location:
        "New town district, south of the old city walls",
      cost: "Free (bring passport for entry)",
      tips: [
        "Visit before Yungang Grottoes for essential context on the Northern Wei dynasty",
        "Closed on Mondays",
        "The Northern Wei dynasty exhibits are the highlight \u2014 don't rush through them",
        "Free admission but bring your passport or ID for entry",
      ],
      priceTier: 0,
    },
    {
      slug: "hengshan-north-sacred-peak",
      name: "Hengshan (North Sacred Peak) \u2014 Hiking Day Trip",
      topPick: false,
      description:
        "One of China's five sacred Taoist mountains, located near the Hanging Monastery. The hiking trails wind through pine forests and past ancient temples to the summit at 6,617 feet. Far less developed and visited than China's other sacred mountains, giving it a genuinely wild feel. October brings crisp mountain air and early autumn colors.",
      time: "Full day (combine with Hanging Monastery)",
      location:
        "Near Hunyuan County, ~65 km southeast of Datong. Accessible from the Hanging Monastery area",
      cost: "$10/p ($10 entrance)",
      tips: [
        "Combine with the Hanging Monastery for a full-day excursion \u2014 they're in the same area",
        "Bring warm layers \u2014 the summit is significantly colder than Datong city",
        "The trail is moderate difficulty but involves sustained climbing",
        "Pack water and snacks \u2014 limited vendors on the mountain",
      ],
      priceTier: 1,
    },
    {
      slug: "knife-cut-noodle-experience",
      name: "Knife-Cut Noodle Experience",
      topPick: true,
      description:
        "Datong is the birthplace and undisputed capital of daoxiao mian (knife-cut noodles). Watch noodle masters shave thick, irregular ribbons from a block of dough held above their heads, sending them flying directly into a pot of boiling water. The technique produces noodles with one smooth side and one rough side that grip sauce differently \u2014 yielding a texture impossible to replicate by machine. A self-guided noodle crawl across several local shops is one of the most memorable food experiences in all of Shanxi [4].",
      time: "2-3 hours (noodle crawl across 2-3 shops)",
      location:
        "Various locations inside the old town and surrounding streets",
      cost: "$3-5/p per bowl",
      tips: [
        "Seek out small neighborhood shops where you can watch the noodle master work \u2014 it's as much performance as cooking",
        "Try different toppings: braised pork, lamb, tomato-egg, and vinegar-chili are the classic variations",
        "Lunch service (11 AM-1 PM) is when noodle shops are at their busiest and most energetic",
        "Don't miss youmian wowo (oat flour rolls) as a side \u2014 another Datong specialty [4]",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Noodles —
    {
      slug: "dongfang-daoxiao-noodle",
      name: "Dongfang Daoxiao Noodle",
      chineseName: "\u4e1c\u65b9\u5200\u524a\u9762",
      category: "Noodles",
      topPick: true,
      location: "Multiple branches throughout Datong; old town location most convenient",
      priceRange: "$2-4/p",
      cuisine: "Knife-cut noodles (daoxiao mian)",
      description:
        "Datong's most popular knife-cut noodle chain, beloved by locals for consistent quality and fast service. Basically elevated fast food \u2014 you come for the noodles, not the ambiance. Bowls arrive loaded with braised eggs, meatballs, and dried tofu alongside thick, chewy knife-cut noodles in rich broth [4].",
      reviews:
        "Locals' go-to for reliable daoxiao mian. Fast, cheap, no-frills. Multiple branches mean you're never far from one.",
      whatToOrder:
        "Classic knife-cut noodles with braised pork, braised egg, and meatball toppings. Add Shanxi aged vinegar from the table.",
      bestFor: "Lunch \u2014 arrive before noon rush",
      priceTier: 1,
    },
    {
      slug: "lao-datong-restaurant",
      name: "Lao Datong Restaurant",
      chineseName: "\u8001\u5927\u540c\u996d\u5e97",
      category: "Noodles",
      topPick: true,
      location: "Inside the old town, Pingcheng District",
      priceRange: "$4-8/p",
      cuisine: "Traditional Datong cuisine, noodles, hotpot",
      description:
        "A time-honored Datong institution that holds the Shanxi Cuisine Association's gold medal as a noodle shop. The signature assorted hotpot is a local classic, and their knife-cut noodles are among the city's best. Larger menu than noodle-only shops, making it ideal for a group wanting variety [4].",
      reviews:
        "Datong locals' favorite for a proper sit-down meal. Generous portions, authentic flavors. No English menu but picture menu helps.",
      whatToOrder:
        "Knife-cut noodles, assorted hotpot (the signature), braised lamb, youmian wowo (oat flour rolls).",
      bestFor: "Dinner",
      priceTier: 1,
    },

    // — Traditional Shanxi —
    {
      slug: "kaige-restaurant",
      name: "Kaige Restaurant",
      chineseName: "\u51ef\u6b4c\u9910\u5385",
      category: "Traditional Shanxi",
      topPick: true,
      location: "Pingcheng District, near the old town",
      priceRange: "$5-10/p",
      cuisine: "Datong home-style cooking, Shanxi classics",
      description:
        "A classic Datong restaurant beloved by locals as a window into authentic Datong cuisine. Remarkably cost-effective \u2014 'half portions' here are basically full portions elsewhere, and two people can eat well for under $14. The kind of place where you'll be the only non-local [4].",
      reviews:
        "Consistently praised for generous portions and authentic Datong flavors at low prices. Busy during peak hours \u2014 arrive early.",
      whatToOrder:
        "Sour soup lamb, braised pork, Datong-style cold dishes, knife-cut noodles, stir-fried potatoes with peppers.",
      bestFor: "Either meal \u2014 dinner has more atmosphere",
      priceTier: 1,
    },
    {
      slug: "feng-lin-ge",
      name: "Feng Lin Ge Restaurant",
      chineseName: "\u51e4\u4e34\u9601",
      category: "Traditional Shanxi",
      topPick: false,
      location:
        "Intersection of Gulou West Street and Huayan Street, Pingcheng District (inside the old town)",
      priceRange: "$7-14/p",
      cuisine: "Upscale Datong and Shanxi cuisine",
      description:
        "A more refined take on Datong cuisine in an atmospheric old town location near Huayan Temple. Ideal for a proper sit-down dinner after a day of temple visiting. Serves both Datong specialties and broader Shanxi dishes in a comfortable setting.",
      reviews:
        "Higher quality presentation than typical noodle shops. Good atmosphere for evening dining. Prices slightly above average but still very affordable by international standards.",
      whatToOrder:
        "Braised lamb chops (Datong specialty), knife-cut noodles, Shanxi vinegar dishes, youmian wowo, cold dressed tofu.",
      bestFor: "Dinner \u2014 good celebratory meal option",
      priceTier: 1,
    },

    // — Lamb —
    {
      slug: "datong-instant-boiled-mutton",
      name: "Datong Instant-Boiled Mutton Restaurant",
      chineseName: "\u5927\u540c\u6d8e\u7f8a\u8089",
      category: "Lamb",
      topPick: false,
      location: "Various locations throughout Datong; ask your hotel for the nearest reputable spot",
      priceRange: "$8-15/p",
      cuisine: "Instant-boiled mutton hotpot",
      description:
        "Datong's instant-boiled mutton tradition dates to the Yuan Dynasty (1271-1368). Paper-thin slices of local lamb are swished through simmering broth and dipped in sesame paste. The local Kazakh sheep from Guangling and marbled mutton from Shuozhou are considered Shanxi's finest \u2014 the quality of the raw lamb here is genuinely superior to what you'll find elsewhere in China [4].",
      reviews:
        "A must-try for lamb lovers. The quality of Datong's local lamb is noticeably better than other regions. Interactive, communal dining perfect for a group.",
      whatToOrder:
        "Multiple cuts of instant-boiled lamb, sesame paste dipping sauce, frozen tofu, Chinese cabbage, hand-pulled noodles to finish.",
      bestFor: "Dinner \u2014 hotpot is quintessentially an evening meal",
      priceTier: 1,
    },
    {
      slug: "datong-grilled-lamb-chops",
      name: "Grilled Lamb Chop Restaurants",
      chineseName: "\u5927\u540c\u70e4\u7f8a\u6392",
      category: "Lamb",
      topPick: false,
      location: "Multiple locations; night market streets and old town restaurants",
      priceRange: "$7-14/p",
      cuisine: "Datong-style grilled lamb",
      description:
        "Grilled lamb chops are Datong's signature meat dish, derived from the Mongolian tradition of roasting whole lambs. The city's proximity to Inner Mongolia means excellent lamb and a grilling tradition that goes back centuries. Best enjoyed with cold beer on a crisp autumn evening.",
      reviews:
        "Smoky, tender, and distinctly flavored by cumin and local spices. Night market versions are more atmospheric; restaurant versions more refined.",
      whatToOrder:
        "Grilled lamb chops, lamb skewers, cold beer, grilled flatbread.",
      bestFor: "Dinner or late-night eating",
      priceTier: 1,
    },

    // — Specialties —
    {
      slug: "cais-restaurant",
      name: "Cai's Restaurant",
      chineseName: "\u8521\u6c0f\u996d\u5e97",
      category: "Specialties",
      topPick: false,
      location: "Pingcheng District, Datong",
      priceRange: "$5-10/p",
      cuisine: "Authentic Shanxi home cooking",
      description:
        "A neighborhood favorite for authentic Shanxi dishes that go beyond noodles. The sour soup mutton is excellent, and the naked oat noodles with potatoes (youmian kao lao lao) showcase a uniquely Datong staple you won't find elsewhere in China [4].",
      reviews:
        "Locals praise the sour soup mutton and home-style cooking. Small, no-frills space. No English but friendly staff will help navigate the menu.",
      whatToOrder:
        "Sour soup mutton, naked oat noodles with potatoes (youmian kao lao lao), fried pork, Shanxi vinegar cold dishes.",
      bestFor: "Either meal",
      priceTier: 1,
    },
    {
      slug: "old-town-street-snacks",
      name: "Old Town Street Snacks",
      chineseName: undefined,
      category: "Street Food",
      topPick: false,
      location: "Various vendors inside the old town walls, concentrated near Gulou (Drum Tower) area",
      priceRange: "$1-3/p",
      cuisine: "Traditional Datong snacks and street food",
      description:
        "A walking snack tour through the old town streets turns up Datong specialties you won't encounter anywhere else: youmian wowo (honeycomb-shaped oat flour rolls), Guangling dried tofu, lamb skewers, and freshly fried local pastries. Zero tourist gloss \u2014 you'll be eating alongside locals.",
      reviews:
        "The best way to sample Datong's unique snack culture. Vendors rotate seasonally but quality is consistently high in the old town.",
      whatToOrder:
        "Youmian wowo (oat flour rolls), Guangling dried tofu, lamb skewers, fried dough pastries, sesame flatbread.",
      bestFor: "Late afternoon snacking between temple visits",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Taxis: Datong is compact enough that most in-city rides cost $2-4. Use Didi (China's Uber) for convenience.",
      "Buses: Bus Line 3 runs directly to Yungang Grottoes (~30 min, ~$0.50). Direct buses to the Hanging Monastery (~1.5 hrs, ~$5).",
      "Walking: Inside the old town walls, everything is walkable. This is Datong's biggest practical advantage.",
      "Car hire: For the Hanging Monastery and Hengshan, hiring a car/driver for a full day ($40-60) is the most efficient option for a group of 3.",
    ],
    "Food & Dining": [
      "Noodle etiquette: Slurping is acceptable and expected. Add Shanxi aged vinegar liberally from the table condiments.",
      "Portion sizes: Datong portions are enormous by southern China standards. For 3 people, order 3-4 dishes plus noodles.",
      "No English menus: Almost nowhere in Datong has English menus. Download a translation app with camera mode before arriving.",
      "Tipping: Not expected anywhere in Datong.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay work everywhere. Set up international Alipay before the trip. Some small vendors are cash-only.",
      "VPN: Essential \u2014 download and configure before arriving in China. Google, WhatsApp, Instagram are all blocked.",
      "Language: Very little English is spoken in Datong. Basic Mandarin phrases or a translation app are essential.",
      "Currency: All USD prices based on approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Yungang Grottoes: Online booking required since 2025 via the 'Yungang Research Institute' WeChat mini-program. Real-name reservation mandatory [6].",
      "Hanging Monastery: Arrive before 8:30 AM to avoid capacity-limit queues of 1-2 hours [2].",
      "Pair with Pingyao: Datong and Pingyao are a natural 4-5 day Shanxi circuit. High-speed train connects them in ~2 hours.",
      "Getting to Datong: High-speed rail from Beijing South to Datong takes ~2 hours. Also accessible from Pingyao and Taiyuan.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Datong Weather & Best Time to Visit \u2014 China Discovery (https://www.chinadiscovery.com/datong-tours/weather.html)",
    "[2] Hanging Temple Travel Guide \u2014 China Discovery (https://www.chinadiscovery.com/shanxi/datong/hanging-temple.html)",
    "[3] Huayan Temple Guide \u2014 China Xian Tour (https://www.chinaxiantour.com/datong-attractions/huayan-temple.html)",
    "[4] Datong Cuisine & Restaurant Guide \u2014 China Educational Tours (https://www.chinaeducationaltours.com/guide/datong-cuisine.htm)",
    "[5] Datong Ancient City Wall Guide \u2014 Tour Beijing (https://www.tour-beijing.com/blog/shanxi-travel/datong-travel/datong-ancient-city-wall)",
    "[6] Yungang Grottoes Visitor Guide \u2014 China Highlights (https://www.chinahighlights.com/datong/attraction/yungang-grottoes.htm)",
    "[7] Nine Dragon Screen \u2014 China Xian Tour (https://www.chinaxiantour.com/datong-attractions/nine-dragon-screen.html)",
    "[8] Shanhua Temple Guide \u2014 Visit Our China (https://www.visitourchina.com/datong/attraction/shanhua-temple.html)",
    "[9] Where to Stay in Datong \u2014 China Discovery (https://www.chinadiscovery.com/shanxi/datong/where-to-stay.html)",
    "[10] Datong Travel Guide \u2014 Wild Great Wall (https://wildgreatwall.com/datong-travel-guide/)",
  ],
};
