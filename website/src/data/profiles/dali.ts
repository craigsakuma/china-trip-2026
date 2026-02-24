import type { CityProfile } from "@/types";

export const daliProfile: CityProfile = {
  slug: "dali",
  heroPhoto: { src: "/photos/dali/_hero.jpg", alt: "Erhai Lake with Cangshan mountains in Dali, Yunnan", credit: "Brücke-Osteuropa" },
  executiveSummary: [
    "Dali sits at 6,500 feet on the western shore of Erhai Lake with the nineteen peaks of Cangshan Mountain rising to over 13,500 feet directly behind it. October is one of the best months to visit \u2014 the monsoon rains have ended, skies are crystalline blue, and daytime temperatures hover in the mid-60s. Unlike most Chinese tourist cities, Dali\u2019s identity is fundamentally shaped by the Bai ethnic minority, who make up roughly two-thirds of the population and maintain living traditions \u2014 tie-dye workshops, Three Course Tea ceremonies, distinct architecture, and a cuisine built around dairy (rare in China), sour flavors, and wild herbs \u2014 that are genuinely alive rather than performed for tourists [1].",
    "The landscape invites active exploration. The Jade Belt Path traverses Cangshan\u2019s flank for 18 kilometers through cloud forest, past waterfalls and ancient temples, with panoramic views of Erhai Lake below. An e-bike loop along the lake\u2019s western shore passes through Bai villages where grandmothers still hand-stitch indigo tie-dye in courtyards, stopping at Xizhou for its stunning Bai mansions and legendary baba flatbread, and at Zhoucheng \u2014 the \u201chometown of tie-dye\u201d \u2014 where over 200 households practice the thousand-year-old craft [2]. The Monday market at Shaping, 30 kilometers north, is a genuine agricultural trading day where Bai farmers in traditional dress sell produce, livestock, and handmade goods with almost no tourist awareness [3].",
    "Dali\u2019s food scene is distinctive within Yunnan and unlike anywhere else in China. Rushan (fan-shaped sheets of goat\u2019s milk cheese grilled over charcoal), erkuai (pounded rice cakes served a dozen ways), sour-and-spicy fish from Erhai Lake, and wild mushroom hotpot reflect Bai culinary traditions rooted in the region\u2019s grasslands and lake. The old town itself \u2014 a walled grid of cobblestone lanes, Bai courtyard houses, and a growing community of artists and musicians from across China \u2014 has the relaxed, creative energy of a mountain town that happens to have a thousand years of history behind it [4].",
  ],
  famousFor: [
    "Bai minority culture",
    "Cangshan Mountains",
    "Erhai Lake",
    "tie-dye (zharan)",
    "Three Course Tea",
    "rushan cheese",
    "Shaping market",
    "ancient walled town",
  ],
  whyItFits: [
    "Genuine living ethnic minority culture (Bai people) with hands-on experiences like tie-dye workshops and tea ceremonies",
    "Excellent hiking on Cangshan\u2019s Jade Belt Path with dramatic lake-and-mountain scenery",
    "E-bike exploration of lakeside Bai villages at your own pace",
    "A food scene unlike anywhere else in China \u2014 dairy-based, herb-forward, lake-fresh",
    "Relaxed creative-community atmosphere without the intensity of China\u2019s megacities",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 69,
      avgLow: 56,
      rainChance: 20,
      precip: 0.8,
      sunrise: "7:10 AM",
      sunset: "6:50 PM",
      conditions: "End of rainy season; clearing skies, comfortable and mild [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 67,
      avgLow: 54,
      rainChance: 15,
      precip: 0.5,
      sunrise: "7:15 AM",
      sunset: "6:35 PM",
      conditions: "Clear and dry; ideal hiking weather; excellent lake visibility",
    },
    {
      period: "Late Oct",
      avgHigh: 65,
      avgLow: 52,
      rainChance: 10,
      precip: 0.3,
      sunrise: "7:22 AM",
      sunset: "6:22 PM",
      conditions: "Cool and crisp; layers needed mornings and evenings; driest period",
    },
  ],
  whatToPack:
    "Layers for 52-69\u00b0F swings between morning lake mist and midday sun. Light rain jacket (occasional afternoon showers early October). Sturdy hiking shoes for Cangshan trails. Sunscreen and sunglasses \u2014 UV is strong at 6,500 feet. Comfortable clothes for e-biking.",

  // --- Neighborhoods -----------------------------------------------
  neighborhoods: [
    {
      slug: "dali-old-town-center",
      name: "Dali Old Town (Ancient City Center)",
      topPick: true,
      description:
        "The walled old town is a compact grid of cobblestone streets lined with Bai-style courtyard houses, their characteristic white walls and grey tile roofs adorned with painted eaves. Renmin Road (People\u2019s Road) runs east-west as the main artery, while Huguo Road (\u201cForeigner Street\u201d) and Fuxing Road offer the densest concentration of restaurants, cafes, and shops. Despite growing tourism, the back lanes retain genuine residential character \u2014 especially south of Renmin Road where elderly Bai residents tend courtyard gardens [4].",
      whyItFitsUs:
        "Most walkable base with everything on foot \u2014 restaurants, markets, the south and north gates, and Cangshan trailheads a short taxi ride away. Dozens of boutique courtyard guesthouses offer atmospheric stays at reasonable prices.",
      nearby:
        "South Gate (5 min walk), Cangshan cable car stations (10-15 min taxi), Erhai Lake shore (15 min bike), Three Pagodas (15 min walk north)",
      hotels:
        "The Linden Centre (restored Bai compound in nearby Xizhou \u2014 top pick for cultural immersion), Jim\u2019s Tibetan Guesthouse (Huguo Road, long-running traveler favorite), China Old Story Inns Dali Elite Garden (courtyard boutique in old town center)",
    },
    {
      slug: "xizhou-old-town",
      name: "Xizhou Old Town",
      topPick: false,
      description:
        "A quiet Bai village 30 minutes north of Dali Old Town on Erhai\u2019s western shore. Known as the \u201cMuseum of Bai Residence Architecture\u201d for its extraordinarily well-preserved Ming and Qing dynasty courtyard mansions \u2014 ornate wooden carvings, painted screen walls, and the classic Bai \u201cthree rooms and one screen wall\u201d layout. The morning market is authentic and the famous Xizhou baba (charcoal-baked flatbread) vendors line the main square [5].",
      whyItFitsUs:
        "Deeper cultural immersion than the old town, with traditional architecture you can sleep inside. Home to The Linden Centre, one of Yunnan\u2019s finest heritage hotels. Ideal base for Erhai Lake cycling and Zhoucheng tie-dye workshops.",
      nearby:
        "Zhoucheng tie-dye village (10 min), Butterfly Spring (15 min), Shaping market (20 min), Dali Old Town (30 min by road)",
      hotels:
        "The Linden Centre (meticulously restored 150-year-old Bai mansion, founded by an American-Chinese couple committed to cultural preservation \u2014 extraordinary), Xizhou Garden Boutique Hotel",
    },
    {
      slug: "caicun-erhai-east-shore",
      name: "Caicun / Erhai East Shore",
      topPick: false,
      description:
        "The eastern shore of Erhai Lake is quieter and less developed than the west. Small fishing villages like Caicun and Shuanglang offer unobstructed sunrise views across the lake to Cangshan\u2019s snow-dusted peaks. Shuanglang has evolved into a boutique hotel destination with hip cafes and wooden docks extending into the lake [6].",
      whyItFitsUs:
        "Best sunrise views and a more tranquil alternative to the old town. Good for a night or two to experience the lake up close. Shuanglang has several well-designed lakeside boutique hotels.",
      nearby:
        "Erhai Lake shore (immediate), Wase Saturday market (varies), Dali Old Town (40 min by road)",
      hotels:
        "Sea & Sky Shuanglang Hotel (lakefront with Cangshan views), various boutique guesthouses in Shuanglang village",
    },
  ],

  // --- Activities ---------------------------------------------------
  activities: [
    {
      slug: "cangshan-jade-belt-path-hike",
      name: "Cangshan Mountain \u2014 Jade Belt Path Hike",
      topPick: true,
      description:
        "The Jade Belt Path (Yudai Lu) is an 18-kilometer stone trail that traverses the mid-altitude flank of Cangshan at roughly 8,500 feet, winding around six peaks, past five waterfalls, and through three ancient temples. The trail is mostly flat and well-maintained, cutting through cloud forest with constant panoramic views of Erhai Lake below and snow-dusted peaks above. Take the Zhonghe cable car up to the trailhead and hike south to the Gantong cable car for descent [2].",
      time: "5-6 hours (full trail) or 2-3 hours (half trail with cable car both ways)",
      location:
        "Cangshan Mountain, immediately west of Dali Old Town. Zhonghe cable car base is 10-15 min by taxi from old town",
      cost: "$12/p ($5 Zhonghe cable car + $7 Cangshan National Park entrance)",
      tips: [
        "Start at the Zhonghe (north) cable car and hike south \u2014 this direction follows the best views",
        "Bring layers and a rain jacket \u2014 weather changes rapidly above 8,000 feet",
        "Side trails near waterfalls lead to natural pools and more dramatic viewpoints \u2014 worth the detour",
        "Start early (before 9 AM) for clearest views; clouds often roll in by afternoon [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "erhai-lake-ebike-loop",
      name: "Erhai Lake E-Bike Loop (Western Shore)",
      topPick: true,
      description:
        "Rent an e-bike and ride the western shore of Erhai Lake along the dedicated Ecological Corridor, a 129-kilometer paved path connecting over 100 traditional villages, parks, and lakeside viewpoints. The half-day western shore route from Dali Old Town north to Xizhou (and optionally Zhoucheng) passes through some of the most photogenic Bai villages in Yunnan, with Cangshan\u2019s peaks as a constant backdrop [6].",
      time: "Half day (4-5 hours for Dali\u2013Xizhou\u2013Zhoucheng loop) or full day (full lake circuit)",
      location:
        "Rent e-bikes near Dali Old Town\u2019s east gate or at shops along Cangshan Road. Route heads north along the western shore",
      cost: "$7-10/p (e-bike rental for full day, ~50-70 RMB)",
      tips: [
        "A half-day loop north to Xizhou and Zhoucheng is more rewarding than attempting the full 129 km circuit",
        "Stop at Xizhou for baba flatbread and Bai mansion architecture, then continue to Zhoucheng for tie-dye workshops",
        "Wear sunscreen and sunglasses \u2014 the lake reflection intensifies UV at altitude",
        "E-bikes have 60-80 km range; charge is sufficient for the half-day western loop [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "zhoucheng-tie-dye-workshop",
      name: "Zhoucheng Village Tie-Dye Workshop",
      topPick: true,
      description:
        "Zhoucheng is the undisputed capital of Bai tie-dye (zharan), a thousand-year-old craft listed as a national intangible cultural heritage since 2006. Over 200 households in this village of 1,500 practice the art, using plant-based indigo dye and intricate hand-knotting techniques to create the signature white-on-blue patterns. Visitors can join hands-on workshops where Bai artisans guide you through the entire process \u2014 folding, tying, dyeing, and rinsing \u2014 and you take home your creation [7].",
      time: "2-3 hours",
      location:
        "Zhoucheng Village, 23 km (14 miles) north of Dali Old Town. 30 min by taxi or reachable by e-bike along the Erhai Corridor",
      cost: "$7-14/p (workshop fee 50-100 RMB, includes materials and finished piece)",
      tips: [
        "Combine with the Erhai Lake e-bike loop \u2014 Zhoucheng is a natural stop beyond Xizhou",
        "Ask to see the full process from plant-based indigo preparation to final rinsing",
        "Wear clothes you don\u2019t mind getting dye on \u2014 indigo stains",
        "Your finished piece makes a meaningful, handmade souvenir [7]",
      ],
      priceTier: 1,
    },
    {
      slug: "shaping-monday-market",
      name: "Shaping Monday Market",
      topPick: true,
      description:
        "Every Monday, the village of Shaping transforms into a sprawling open-air market where Bai farmers from the surrounding countryside converge to buy, sell, and barter. This is not a tourist market \u2014 it\u2019s a genuine agricultural trading day with sections for produce, livestock, tie-dye textiles, handmade tools, medicinal herbs, and street food. Almost all the older vendors wear traditional Bai dress. The energy is electric and the photography is extraordinary [3].",
      time: "2-3 hours (market runs 9 AM \u2013 2 PM)",
      location:
        "Shaping Village, 30 km north of Dali Old Town. 40 min by taxi or minivan (~$4-5 each way)",
      cost: "Free (purchases and food extra \u2014 bring cash, $5-10 for snacks and small purchases)",
      tips: [
        "This only happens on Mondays \u2014 plan your Dali itinerary accordingly",
        "Arrive by 9:30-10:00 AM for peak activity; the market winds down after noon",
        "Try the fresh tofu, erkuai (grilled rice cakes), and Bai-style barbecue skewers from food vendors",
        "Combine with Zhoucheng (10 min away) and Xizhou for a full day of village exploration [3]",
      ],
      priceTier: 0,
    },
    {
      slug: "three-pagodas-chongsheng-temple",
      name: "Three Pagodas of Chongsheng Temple",
      topPick: false,
      description:
        "Dali\u2019s most iconic landmark: three Tang Dynasty pagodas (the tallest at 227 feet, dating to 836 AD) standing in formation against the Cangshan backdrop. Behind them, the reconstructed Chongsheng Temple complex climbs the mountainside through a series of grand halls and courtyards. The reflection pool in front of the pagodas provides the classic photograph \u2014 three white towers mirrored in still water with snow peaks behind [8].",
      time: "2-3 hours",
      location:
        "1.5 km north of Dali Old Town\u2019s north gate. 15 min walk or 5 min taxi",
      cost: "$17/p (120 RMB entrance fee)",
      tips: [
        "Visit early morning or late afternoon for best light and fewer tour groups",
        "The reflection pool photograph works best on a still, clear morning",
        "The temple complex behind the pagodas is large \u2014 allow time to climb to the upper halls for Erhai Lake views",
        "Can be photographed well from outside the complex for free \u2014 the entrance fee is steep for what is largely a reconstruction behind the original pagodas [8]",
      ],
      priceTier: 2,
    },
    {
      slug: "xizhou-bai-architecture-walk",
      name: "Xizhou Bai Architecture and Baba Breakfast",
      topPick: false,
      description:
        "Xizhou village contains the finest collection of traditional Bai residential architecture in the region \u2014 ornate courtyard mansions from the Ming and Qing dynasties with carved wooden screens, painted eaves, and the classic \u201cthree rooms facing one screen wall\u201d layout. Start with a baba flatbread breakfast from the vendors on the main square (charcoal-baked, available sweet with rose jam or savory with pork and scallions), then explore the Yan Family Compound and surrounding lanes [5].",
      time: "2-3 hours (including breakfast and architecture walk)",
      location:
        "Xizhou, 18 km north of Dali Old Town. 25-30 min by taxi (~$4-5) or reachable by e-bike",
      cost: "$2-3/p (baba ~$0.50-1 each; Yan Family Compound ~$3 entry)",
      tips: [
        "Combine with Zhoucheng tie-dye and/or the Erhai Lake e-bike loop",
        "The Yan Family Compound offers the traditional Bai Three Course Tea ceremony ($3-5) \u2014 three infusions representing bitter, sweet, and lingering flavors of life",
        "The morning market (daily) on the main square is small but authentic",
        "The Linden Centre offers tours of their restored mansion even to non-guests [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "three-course-tea-ceremony",
      name: "Bai Three Course Tea Ceremony (Sandaocha)",
      topPick: false,
      description:
        "The Bai people\u2019s signature hospitality ritual, recognized as a national intangible cultural heritage. Three cups are served in sequence: the first is bitter (pure roasted green tea), the second is sweet (tea with walnut, sesame, brown sugar, and Bai cheese), and the third has a lingering peppery-sweet aftertaste (tea with ginger, cinnamon, and honey). The ceremony represents the Bai philosophy that life is first bitter, then sweet, then worth savoring [9].",
      time: "1-1.5 hours",
      location:
        "Yan Family Compound in Xizhou (most atmospheric), or various teahouses in Dali Old Town",
      cost: "$3-7/p (20-50 RMB depending on venue)",
      tips: [
        "The Yan Family Compound in Xizhou provides the most traditional and atmospheric setting",
        "Often accompanied by handmade flower pastries and a brief cultural explanation",
        "Some old town teahouses combine the ceremony with Bai music and dance \u2014 touristy but still enjoyable",
        "Pairs naturally with a Xizhou architecture walk [9]",
      ],
      priceTier: 1,
    },
    {
      slug: "dali-old-town-evening-walk",
      name: "Dali Old Town Evening Walk",
      topPick: false,
      description:
        "After dark, Dali Old Town reveals a different character. Red lanterns illuminate the cobblestone lanes, independent musicians perform in small bars along Renmin Road, and the south gate (Nancheng Gate) glows against the mountain silhouette. The creative community of artists, musicians, and writers who have relocated to Dali from across China give the evening scene an indie-bohemian energy unique in Yunnan [4].",
      time: "1.5-2 hours",
      location: "Dali Old Town, centered on Renmin Road and Fuxing Road",
      cost: "Free (food and drinks extra)",
      tips: [
        "Walk the full length of Renmin Road from the east gate to the west gate for the best cross-section",
        "The Bad Monkey bar and The Bird Bar are long-running live-music institutions",
        "The south gate (Nancheng Gate) is beautifully lit at night \u2014 climb the ramparts for rooftop views",
        "Street food vendors along Huguo Road sell grilled rushan, erkuai, and barbecue skewers into the evening",
      ],
      priceTier: 0,
    },
    {
      slug: "cangshan-summit-hike-advanced",
      name: "Cangshan Summit Hike \u2014 Advanced Option",
      topPick: false,
      description:
        "For experienced hikers, trails above the Jade Belt Path lead to Cangshan\u2019s alpine zone above 12,000 feet, with glacier-carved lakes (Washanlake, Huanglong Pool), rhododendron meadows, and views stretching across the entire Dali basin. The highest peak, Malong, reaches 13,524 feet. These trails are less maintained and the altitude is significant \u2014 this is a full-day mountain endeavor [2].",
      time: "Full day (7-9 hours round trip from cable car station)",
      location:
        "Cangshan Mountain, accessed via Ximatan (large) cable car to Washanlake trailhead",
      cost: "$18/p ($11 Ximatan cable car + $7 park entrance)",
      tips: [
        "Altitude sickness is possible above 12,000 feet \u2014 Dali sits at 6,500 feet, so the gain is significant",
        "Bring warm layers, rain gear, snacks, and at least 2 liters of water",
        "Start by 7 AM; weather deteriorates in the afternoon at altitude",
        "Hire a local guide for routes above the Jade Belt Path \u2014 trails are less marked [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "erhai-lake-boat-trip",
      name: "Erhai Lake Boat Trip",
      topPick: false,
      description:
        "Erhai Lake (\u201cEar-Shaped Sea\u201d) is a 100-square-mile highland lake at 6,400 feet \u2014 the seventh-largest freshwater lake in China. Boat trips cross to the eastern shore, visiting small islands and fishing villages. The views back toward Cangshan\u2019s full range reflected in the lake are stunning on clear October mornings [6].",
      time: "2-4 hours (half day)",
      location:
        "Boats depart from Longkan Wharf (near Dali Old Town) or Caicun on the east shore",
      cost: "$14-20/p (100-142 RMB for tourist boat including island stops)",
      tips: [
        "Early morning boats get the calmest water and best mountain reflections",
        "The standard tourist boat route includes Jinsuo Island and Nanzhao Wind and Love Island \u2014 touristy but scenic",
        "For a more authentic experience, arrange a private fisherman\u2019s boat from a lakeside village (~$28 for the boat)",
        "Bring a jacket \u2014 it\u2019s notably cooler on the open water [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "dali-museum-and-catholic-cathedral",
      name: "Dali Museum and Catholic Cathedral",
      topPick: false,
      description:
        "The Dali Museum (inside the old town) covers the Nanzhao and Dali kingdoms (738-1253 AD) that ruled this region as independent states for over 500 years \u2014 a history largely unknown outside China. Nearby, the unexpected Dali Catholic Cathedral (built by French missionaries in 1927) blends European church architecture with Bai decorative elements, reflecting the region\u2019s complex cultural layers [4].",
      time: "1.5-2 hours (both sites)",
      location:
        "Dali Old Town center \u2014 museum on Fuxing Road, cathedral nearby on Renmin Road",
      cost: "Free (both are free admission)",
      tips: [
        "The museum provides essential context for understanding Dali\u2019s independent kingdom history",
        "The cathedral hosts an active Bai Catholic congregation \u2014 respectful visitors are welcome",
        "Good rainy-day activity; combines easily with an old town exploration walk",
      ],
      priceTier: 0,
    },
  ],

  // --- Restaurants --------------------------------------------------
  restaurants: [
    // --- Bai Cuisine ---
    {
      slug: "meizi-well-restaurant",
      name: "Meizi Well Restaurant",
      chineseName: "\u6885\u5b50\u4e95\u9152\u5bb6",
      category: "Bai Cuisine",
      topPick: true,
      location:
        "Renmin Road, Dali Old Town \u2014 central location near the main cross-street",
      priceRange: "$5-10/p",
      cuisine: "Traditional Bai cuisine, clay pot specialties",
      description:
        "One of the old town\u2019s most respected Bai restaurants, famous for its signature clay pot fish (suancai yu) \u2014 fresh Erhai Lake fish simmered in a clay pot with sour pickled vegetables, tomatoes, and Bai herbs. The menu is built on local, seasonal ingredients prepared in traditional Bai style [10].",
      whatToOrder:
        "Clay pot sour fish (suancai yu \u2014 the signature), stir-fried wild mushrooms (seasonal), erkuai (rice cake) in any preparation, cold Bai-style tofu.",
      bestFor: "Lunch or dinner; arrive early for peak freshness",
      priceTier: 1,
    },
    {
      slug: "xinghua-village-restaurant",
      name: "Xinghua Village Restaurant",
      chineseName: "\u674f\u82b1\u6751\u996d\u5e97",
      category: "Bai Cuisine",
      topPick: true,
      location: "Yuer Road, Dali Old Town \u2014 south side of the old town",
      priceRange: "$5-10/p",
      cuisine: "Home-style Bai cooking, clay pot fish",
      description:
        "A longtime local favorite specializing in generous family-style Bai cooking. The clay pot fish rivals Meizi Well, and the rest of the menu \u2014 stir-fried ferns, Bai-style cured pork, and seasonal vegetables \u2014 reflects what Bai families actually cook at home [10].",
      whatToOrder:
        "Clay pot fish, stir-fried tree fern tips, Bai cured ham with broad beans, cold pea jelly (liangfen).",
      bestFor: "Dinner; larger tables make this ideal for a group",
      priceTier: 1,
    },
    {
      slug: "golden-flower-bai-cuisine",
      name: "Golden Flower Little Sister Bai Cuisine",
      chineseName: "\u91d1\u82b1\u5c0f\u59b9\u767d\u65cf\u83dc",
      category: "Bai Cuisine",
      topPick: false,
      location:
        "Dali Old Town, off Huguo Road \u2014 follow local crowd at meal times",
      priceRange: "$4-8/p",
      cuisine: "Bai home cooking, seasonal specialties",
      description:
        "Small, no-frills restaurant with outstanding reviews for authentic Bai flavors. The menu changes with seasonal ingredients \u2014 wild mushrooms in autumn, fresh herbs year-round. The warmth of the staff and the depth of flavor make up for the basic decor [10].",
      whatToOrder:
        "Wild mushroom stir-fry (October is still mushroom season), Bai-style steamed chicken, braised pork belly with pickled greens.",
      bestFor: "Either meal; cash preferred",
      priceTier: 1,
    },

    // --- Street Food ---
    {
      slug: "xizhou-baba-vendors",
      name: "Xizhou Baba Street Vendors",
      chineseName: "\u559c\u6d32\u7c91\u7c91",
      category: "Street Food",
      topPick: true,
      location:
        "Main square and surrounding lanes of Xizhou village, 18 km north of Dali Old Town",
      priceRange: "$0.50-1.50/p",
      cuisine: "Traditional Bai flatbread",
      description:
        "Xizhou baba is a charcoal-baked sourdough flatbread with layers of lard creating an impossibly flaky texture. Born on the ancient Tea Horse Road as fuel for traders, it comes sweet (brown sugar or rose jam filling) or savory (minced pork, scallions, and spices). Vendors bake them to order in stone ovens \u2014 the aroma is irresistible [5].",
      whatToOrder:
        "One sweet (rose jam) and one savory (pork and scallion) baba. Best eaten immediately while still crackling-hot from the oven.",
      bestFor: "Breakfast or mid-morning snack",
      priceTier: 1,
    },
    {
      slug: "renmin-road-street-food",
      name: "Renmin Road Street Food Strip",
      chineseName: "\u4eba\u6c11\u8def\u5c0f\u5403",
      category: "Street Food",
      topPick: false,
      location:
        "Renmin Road near the east gate, Dali Old Town \u2014 vendors cluster in the evening",
      priceRange: "$1-4/p",
      cuisine: "Dali street food \u2014 grilled, fried, and skewered",
      description:
        "Evening food vendors line sections of Renmin Road and Huguo Road with Dali\u2019s most distinctive street foods. Grilled rushan (fan-shaped goat cheese on a stick, brushed with rose jam or condensed milk), erkuai prepared a half-dozen ways, barbecue skewers, and fresh fruit shakes from Yunnan\u2019s tropical lowlands [4].",
      whatToOrder:
        "Grilled rushan with rose jam (the essential Dali street snack), grilled erkuai with chili sauce, lamb skewers, fresh mango shake.",
      bestFor: "Evening stroll snacking, 6-9 PM",
      priceTier: 1,
    },
    {
      slug: "zai-huishou-snacks",
      name: "Zai Huishou Snacks",
      chineseName: "\u518d\u56de\u9996\u5c0f\u5403",
      category: "Street Food",
      topPick: false,
      location:
        "Erhai Food Street area, near Dali Old Town\u2019s east side",
      priceRange: "$1-3/p",
      cuisine: "Traditional Dali snacks and cold noodles",
      description:
        "A beloved local snack shop known for its cold chicken rice noodles (liangji mixian) with an exceptional sesame sauce. The kind of place where a line of locals at odd hours signals quality [10].",
      whatToOrder:
        "Cold chicken rice noodles with sesame sauce (the signature), erkuai with chili, soy milk.",
      bestFor: "Breakfast or quick lunch",
      priceTier: 1,
    },

    // --- Yunnan Regional ---
    {
      slug: "a-peng-bbq",
      name: "A Peng BBQ",
      chineseName: "\u963f\u9e4f\u70e7\u70e4",
      category: "Yunnan Regional",
      topPick: false,
      location:
        "Dali Old Town, south side \u2014 follow the smoke and the crowd after dark",
      priceRange: "$4-8/p",
      cuisine: "Yunnan-style barbecue, grilled meats and vegetables",
      description:
        "Dali\u2019s most popular late-night barbecue joint, drawing crowds until 2 AM. Charcoal-grilled skewers of lamb, chicken, pork belly, tofu, and vegetables seasoned with Yunnan chili and cumin. No English menu, no decor, just smoke and flavor. The kind of place that defines a city\u2019s food soul [10].",
      whatToOrder:
        "Lamb skewers, grilled chicken wings, grilled tofu skin, grilled eggplant with chili, cold beer.",
      bestFor: "Late night, arrive 9-10 PM; closes around 2 AM",
      priceTier: 1,
    },
    {
      slug: "wild-mushroom-hotpot",
      name: "Wild Mushroom Hotpot (Various Restaurants)",
      chineseName: "\u91ce\u751f\u83cc\u706b\u9505",
      category: "Yunnan Regional",
      topPick: true,
      location:
        "Multiple restaurants along Renmin Road and Yuer Road in Dali Old Town",
      priceRange: "$8-15/p",
      cuisine: "Yunnan wild mushroom hot pot",
      description:
        "Yunnan is the wild mushroom capital of China, and October marks the tail end of the extraordinary mushroom season. Wild mushroom hotpot features a rich chicken or bone broth loaded with 5-10 varieties of foraged mushrooms \u2014 porcini, matsutake, chanterelles, and species found nowhere else. The broth deepens as the mushrooms cook, becoming intensely umami [11].",
      whatToOrder:
        "Mixed wild mushroom platter (ask the server for the day\u2019s best varieties), add chicken or pork slices, finish with rice noodles in the mushroom broth.",
      bestFor: "Dinner; communal and interactive for a group of 3",
      priceTier: 1,
    },

    // --- Cafes & Bars ---
    {
      slug: "bad-monkey",
      name: "Bad Monkey",
      chineseName: undefined,
      category: "Cafes & Bars",
      topPick: false,
      location: "Renmin Road, Dali Old Town \u2014 central old town",
      priceRange: "$3-7/p",
      cuisine: "Western-style cafe, coffee, beer, simple food",
      description:
        "A Dali institution and long-running gathering place for the town\u2019s creative community. Good coffee, cold beer, simple Western and Chinese food, and live music most evenings. The rooftop terrace has views toward Cangshan. Not a foodie destination \u2014 it\u2019s a social hub [4].",
      whatToOrder:
        "Coffee, local Dali beer, whatever the daily special is. Come for the atmosphere, not the cuisine.",
      bestFor: "Afternoon coffee or evening drinks with live music",
      priceTier: 1,
    },

    // --- Special Experience ---
    {
      slug: "linden-centre-dining",
      name: "The Linden Centre Farm-to-Table Dining",
      chineseName: undefined,
      category: "Special Experience",
      topPick: false,
      location:
        "Xizhou, inside The Linden Centre heritage hotel compound \u2014 30 min north of Dali Old Town",
      priceRange: "$15-30/p",
      cuisine: "Refined Bai and Yunnan cuisine with local ingredients",
      description:
        "The Linden Centre\u2019s restaurant serves elevated Bai and Yunnan cuisine using ingredients sourced from local farms and markets. Dishes respect traditional flavors while presenting them with more refinement than the old town\u2019s casual restaurants. Dining in the restored 150-year-old Bai courtyard is an experience in itself. Open to non-guests with advance reservation [5].",
      whatToOrder:
        "Seasonal set menu featuring Bai specialties, wild mushroom dishes, locally foraged herbs. Ask about the Three Course Tea pairing.",
      bestFor: "Dinner; reserve in advance. Worth the trip from Dali Old Town.",
      priceTier: 2,
    },
    {
      slug: "yang-rushan-vendor",
      name: "Yang\u2019s Rushan",
      chineseName: "\u6768\u5bb6\u4e73\u6247",
      category: "Street Food",
      topPick: false,
      location:
        "Near Dali Old Town\u2019s south gate area \u2014 mobile vendor, ask locally for current location",
      priceRange: "$1-2/p",
      cuisine: "Fresh rushan (Bai goat milk cheese)",
      description:
        "This vendor makes rushan (a fan-shaped sheet of goat\u2019s milk cheese unique to the Bai people) fresh to order. The cheese is stretched, dried, then grilled over charcoal and served on a stick brushed with rose jam, condensed milk, or chili sauce. It\u2019s the single most iconic Dali street food \u2014 creamy, smoky, and unlike anything else in China [10].",
      whatToOrder:
        "Grilled rushan with rose jam (the classic). Try one with chili for contrast.",
      bestFor: "Anytime snack; best freshly grilled",
      priceTier: 1,
    },
  ],

  // --- Practical Tips -----------------------------------------------
  practicalTips: {
    "Getting Around": [
      "E-bikes: The best way to explore Erhai Lake and nearby villages. Rentals everywhere in the old town ($7-10/day). No license required for low-speed e-bikes.",
      "Taxis: Abundant and cheap. Most rides within Dali area under $5. Use Didi app or negotiate directly. Fixed-rate trips to Xizhou (~$4-5) and Shaping (~$7-8).",
      "Walking: Dali Old Town is entirely walkable \u2014 roughly 1 km x 1 km within the walls. Cobblestone streets; wear comfortable shoes.",
      "Intercity: Dali is connected to Kunming by high-speed rail (2 hours, ~$15) and to Lijiang by train (1.5 hours, ~$8). The train station is in Xiaguan new city, 30 min from old town by taxi (~$4).",
    ],
    "Food & Dining": [
      "Must-try Dali foods: Grilled rushan (goat cheese), erkuai (rice cakes), clay pot sour fish, wild mushroom hotpot, Xizhou baba flatbread, and the Three Course Tea.",
      "Ordering: For 3 people, order 3-4 dishes plus rice. Portions are generous and inexpensive. Chinese family-style dining \u2014 everything shared.",
      "Mushroom season: October is the tail end of wild mushroom season in Yunnan. If mushrooms are available, order them everywhere \u2014 this is a once-a-year opportunity.",
      "Dietary note: Bai cuisine uses more dairy (goat cheese, milk fan) than almost any other Chinese regional cuisine \u2014 unusual and delicious for visitors expecting dairy-free Chinese food.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are universal, even at street vendors. Set up international Alipay before the trip. Carry cash for small market purchases and remote villages.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in China.",
      "Language: Very limited English outside hotels. Translation apps (Google Translate camera mode) are essential. Restaurant menus often have pictures but rarely English.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Shaping Monday Market: Only happens on Mondays. If you have flexibility, schedule your Dali visit to include a Monday.",
      "Altitude: Dali sits at 6,500 feet. Most people feel no effects, but drink extra water and take it easy the first day if arriving from sea level.",
      "Cangshan weather: Mountain conditions change rapidly. Even on a clear day in town, bring layers and rain gear for the mountain trails.",
      "Best sequencing: Dali pairs naturally with Lijiang (1.5 hours north by train) and Kunming (2 hours south by high-speed rail) for a Yunnan circuit.",
    ],
  },

  // --- Sources -------------------------------------------------------
  sources: [
    "[1] Dali October Weather \u2014 Travel China Guide (https://www.travelchinaguide.com/cityguides/yunnan/dali/weather-october.htm)",
    "[2] Cangshan Mountain Hiking Guide \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/dali/cangshan-mountain.html)",
    "[3] Shaping Monday Market \u2014 Yunnan Exploration (https://www.yunnanexploration.com/shaping-monday-market-in-dali.html)",
    "[4] Dali Old Town Travel Guide \u2014 Fabio Nodari (https://www.fabionodariphoto.com/en/dali-yunnan-things-to-do/)",
    "[5] Xizhou Baba and Bai Architecture \u2014 Lost Plate (https://lostplate.com/xizhou-baba-yunnan-tradition/)",
    "[6] Erhai Lake Cycling Guide \u2014 Yunnan Exploration (https://www.yunnanexploration.com/erhai-lake-cycling-tips.html)",
    "[7] Zhoucheng Village Tie-Dye Heritage \u2014 Visit Yunnan China (https://www.visityunnanchina.com/experiences-shopping-handicrafts/art-national-intangible-cultural-heritage/bai-tie-dyeing)",
    "[8] Three Pagodas of Chongsheng Temple \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/dali/three-pagodas.html)",
    "[9] Bai Three Course Tea Ceremony \u2014 Top China Travel (https://www.topchinatravel.com/dali/must-try-food-in-dali.htm)",
    "[10] Dali Food Guide \u2014 China Wonders Guide (https://chinawondersguide.com/bai-cuisine-dali-renmin-road/)",
    "[11] Yunnan Wild Mushrooms \u2014 China Highlights (https://www.chinahighlights.com/dali/weather.htm)",
  ],
};
