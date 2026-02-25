import type { CityProfile } from "@/types";

export const fenghuangProfile: CityProfile = {
  slug: "fenghuang",
  heroPhoto: { src: "/photos/fenghuang/_hero.jpg", alt: "Tuo River flowing through Fenghuang Ancient Town, Hunan", credit: "Huangdan2060" },
  executiveSummary: [
    'Fenghuang Ancient Town is one of China\'s most photogenic settlements -- a perfectly preserved riverside town where centuries-old stilted wooden buildings (diaojiaolou) lean over the jade-green Tuo River, their weathered timber reflections shimmering in the water below. In October, the subtropical heat has broken, morning mist clings to the river at dawn, and the town\'s 1,300-year history feels tangible in every hand-laid stone path and covered bridge. Unlike many of China\'s "ancient towns" that have been rebuilt from scratch, Fenghuang\'s core architecture is genuinely original -- Ming and Qing dynasty structures still serving as homes, shops, and guesthouses [1].',
    "What makes Fenghuang extraordinary beyond its architecture is the living presence of Miao and Tujia ethnic minority culture. The town sits at the cultural crossroads of Han Chinese and western Hunan's indigenous peoples. Surrounding villages still practice silver jewelry-making, indigo batik dyeing, and traditional embroidery as daily crafts rather than tourist performances. The sour fish soup (suantangyu) -- a Miao staple made with fermented tomatoes, pickled chilies, and fresh river fish -- is one of China's most distinctive regional dishes and virtually unknown outside Hunan [2]. The food here is fiery, sour, and intensely flavorful, reflecting the bold palate of the Xiangxi (western Hunan) highlands.",
    "The town operates on two rhythms: the pre-dawn hours when elderly residents emerge for tai chi along the riverbank and fishermen cast nets from bamboo boats, and the illuminated nighttime when thousands of red lanterns transform the riverside into a glowing tableau. Between these magical bookends, the daytime crowds can be dense -- but a knowledgeable guide can steer you into back alleys, hilltop temples, and nearby Miao villages that remain genuinely uncrowded. Fenghuang pairs naturally with Zhangjiajie (4 hours by bus) for a combined Hunan itinerary of 4-5 days [3].",
  ],
  famousFor: [
    "stilted wooden buildings over the Tuo River",
    "Miao and Tujia minority culture",
    "dawn riverside walks",
    "night lantern illumination",
    "sour fish soup (suantangyu)",
    "indigo batik dyeing",
    "Shen Congwen literature",
    "covered bridges and stone streets",
  ],
  whyItFits: [
    "Stunningly photogenic riverside architecture -- one of China's most beautiful small towns",
    "Living ethnic minority culture in surrounding Miao and Tujia villages",
    "Dawn walks and night illumination create bookend magic moments",
    "Bold, distinctive Xiangxi cuisine (sour, spicy, fermented) unlike anywhere else in China",
    "Compact and walkable -- pairs perfectly with Zhangjiajie for a combined Hunan circuit",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 77,
      avgLow: 59,
      rainChance: 20,
      precip: 1.2,
      sunrise: "6:20 AM",
      sunset: "6:10 PM",
      conditions: "Warm, occasional rain; humidity dropping; pleasant for walking [4]",
    },
    {
      period: "Mid Oct",
      avgHigh: 72,
      avgLow: 55,
      rainChance: 18,
      precip: 0.9,
      sunrise: "6:28 AM",
      sunset: "5:58 PM",
      conditions: "Comfortable and crisp; ideal sightseeing weather; morning mist on the river",
    },
    {
      period: "Late Oct",
      avgHigh: 66,
      avgLow: 50,
      rainChance: 15,
      precip: 0.7,
      sunrise: "6:36 AM",
      sunset: "5:48 PM",
      conditions: "Cooler; light layers needed; autumn foliage in surrounding hills",
    },
  ],
  whatToPack:
    "Layers for 50-77\u00b0F range. Light rain jacket (brief afternoon showers possible). Comfortable walking shoes with good grip -- cobblestone streets and riverside steps are slippery when wet. A small flashlight for pre-dawn walks along the river.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "old-town-riverside-core",
      name: "Old Town Riverside Core (Tuo River North Bank)",
      topPick: true,
      description:
        "The heart of Fenghuang -- the concentrated stretch of stilted wooden buildings lining the north bank of the Tuo River between Hong Bridge and Tuojiang Jumping Rocks. Narrow flagstone lanes wind past the former residences of author Shen Congwen and warlord Xiong Xiling, through covered archways, and past incense-filled Chaoyang Temple. This is where the iconic riverside photography happens, and where the pre-dawn and post-sunset magic is most intense [1].",
      whyItFitsUs:
        "The single most atmospheric place to stay. Riverside guesthouses offer balconies directly over the Tuo River -- wake up to the sound of water and watch the dawn mist burn off. Everything walkable. Best access to early morning and late night illumination without transport.",
      nearby:
        "Hong Bridge (2 min), Shen Congwen Residence (5 min), Tuojiang Jumping Rocks (8 min), East Gate Tower (5 min), North Gate Tower (10 min)",
      hotels:
        "Phoenix Jiangtian Holiday Village (riverfront boutique with balcony rooms over the Tuo River -- top pick), Fenghuang Tuo River Courtyard Inn (traditional wooden architecture, peaceful courtyard)",
    },
    {
      slug: "south-bank-hilltop",
      name: "South Bank & Hilltop (Nanhua Mountain Area)",
      topPick: false,
      description:
        "The quieter south bank rises steeply from the river into the Nanhua Mountain area. Less commercial than the north bank core, with winding residential lanes, small temples, and the best panoramic viewpoints looking back across the old town. The hilltop Wanshou Temple offers sweeping river views. Locals outnumber tourists here even during peak season [5].",
      whyItFitsUs:
        "Best vantage points for photography, especially the classic dawn and dusk panoramas. Quieter and more residential -- feels like the authentic Fenghuang that existed before tourism. Good budget guesthouse options with views.",
      nearby:
        "Nanhua Gate (5 min), Wanshou Temple viewpoint (15 min uphill walk), Old Town core (10 min walk across the river), Tuojiang Jumping Rocks (10 min)",
      hotels:
        "Various family-run guesthouses with river-view terraces on the hillside. Less polished but more authentic atmosphere and significantly lower prices than north bank.",
    },
    {
      slug: "surrounding-miao-villages",
      name: "Surrounding Miao Villages (Day Trip Zone)",
      topPick: false,
      description:
        "Within 30-60 minutes of Fenghuang, a constellation of Miao minority villages maintains living traditions of silver-working, batik dyeing, embroidery, and the communal sour fish soup feast. Shanjiang Miao Village and Lao Dong Zhai are the most visited but retain genuine character, particularly if you arrive early or visit with a local Miao guide rather than a tour bus group [2].",
      whyItFitsUs:
        "This is where the cultural immersion deepens beyond architecture into living minority traditions. Silver-making workshops, indigo dyeing demonstrations, and a communal lunch of sour fish soup and rice wine feel genuinely participatory rather than performative.",
      nearby:
        "Shanjiang Miao Village (30 min by car), Lao Dong Zhai (45 min), Aizhai Bridge viewpoint (1 hr). Arrange through guesthouse or local guide.",
      hotels:
        "Day trip from Fenghuang -- no overnight needed. Some villages offer basic homestays for adventurous travelers.",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "dawn-riverside-walk",
      name: "Dawn Riverside Walk",
      topPick: true,
      description:
        "The single best experience in Fenghuang. Before 7 AM, the old town belongs to its residents -- elderly women doing laundry on the river steps, fishermen pushing off in narrow wooden boats, wisps of mist curling between the stilted buildings. The quality of light on the weathered timber and jade-green water is extraordinary. By 9 AM, tour groups flood in and the atmosphere changes entirely [5].",
      time: "1-1.5 hours (5:30-7:00 AM)",
      location:
        "North bank of the Tuo River, from Hong Bridge east to Tuojiang Jumping Rocks",
      cost: "Free",
      tips: [
        "Set an alarm for 5:15 AM -- the pre-sunrise light is the most magical",
        "Walk east along the north bank, cross at the stepping stones, return along the south bank for different perspectives",
        "Bring your camera -- this is the most photogenic hour of the entire trip",
        "Grab a bowl of rice noodles from an early-morning street vendor along the way",
      ],
      priceTier: 0,
    },
    {
      slug: "tuojiang-river-boat-ride",
      name: "Tuojiang River Boat Ride",
      topPick: true,
      description:
        "A traditional wooden boat glides along the Tuo River through the heart of the old town, passing directly beneath the iconic stilted wooden buildings. The perspective from water level -- looking up at the centuries-old diaojiaolou leaning over the river on their timber stilts -- is fundamentally different from the view on foot. Local boatmen sing traditional Miao folk songs as they punt [1].",
      time: "30-40 minutes",
      location:
        "Multiple boarding points along the north bank; the stretch between North Gate Tower and Wanshou Palace is most scenic",
      cost: "$4/p (included in the Fenghuang Ancient Town entry ticket, ~$15, or available separately)",
      tips: [
        "Go early morning or late afternoon for softer light and thinner crowds on the water",
        "The boat ride is included in the comprehensive Ancient Town ticket -- buy it if you plan to visit the town's museums and towers too",
        "Sit at the bow for unobstructed views and photos",
        "Evening boat rides under the lantern illumination are magical but crowded",
      ],
      priceTier: 1,
    },
    {
      slug: "night-illumination-walk",
      name: "Night Illumination Walk",
      topPick: true,
      description:
        "After dark, Fenghuang transforms. Thousands of red lanterns illuminate the stilted buildings, their reflections doubling in the still river water. The covered Hong Bridge glows amber, and the entire riverscape becomes a living Chinese painting rendered in light. The best viewing is from the south bank looking north across the water, or from the Tuojiang Jumping Rocks at water level [5].",
      time: "1-2 hours (8:00-10:00 PM)",
      location:
        "South bank of the Tuo River and Tuojiang Jumping Rocks",
      cost: "Free",
      tips: [
        "Cross to the south bank for the classic panoramic night photograph of the illuminated north bank",
        "The stepping stones (jumping rocks) at water level give a dramatic low-angle perspective",
        "Bring a small tripod or steady your phone on the stone railings for long-exposure shots",
        "The illumination runs until roughly 11 PM; after 10 PM crowds thin significantly",
      ],
      priceTier: 0,
    },
    {
      slug: "old-town-heritage-walk",
      name: "Old Town Heritage Walk (Shen Congwen, Xiong Xiling, East Gate Tower)",
      topPick: false,
      description:
        "A guided or self-guided walk through Fenghuang's key historical sites: the childhood home of Shen Congwen (China's most celebrated modern rural author), the former residence of Xiong Xiling (first Premier of the Republic of China), the imposing East Gate Tower (Dongmen Cheng Lou), and the ancient Chaoyang Temple. Together they tell the story of how this remote frontier town produced outsized cultural and political figures [1].",
      time: "2-3 hours",
      location:
        "Old Town core, north bank. All sites within 15 minutes' walk of each other",
      cost: "$15/p (comprehensive Ancient Town ticket covers all heritage sites)",
      tips: [
        "Buy the comprehensive Ancient Town ticket (~$15) which includes all heritage sites, museums, and the boat ride",
        "Shen Congwen's residence is small but deeply atmospheric -- read a short story of his before visiting to appreciate the connection to this landscape",
        "Climb East Gate Tower for elevated views over the river and rooftops",
        "A local guide adds enormously to understanding the Miao-Han cultural tensions that shaped this town's history",
      ],
      priceTier: 1,
    },
    {
      slug: "tuojiang-jumping-rocks",
      name: "Tuojiang Jumping Rocks (Stepping Stones)",
      topPick: false,
      description:
        "Two parallel lines of stone pillars crossing the Tuo River -- one set of tall pillars, one set of flat stepping stones at water level. Crossing the river by hopping from stone to stone is a quintessential Fenghuang experience and gives you a water-level perspective of the stilted buildings rising above. The stones have been a river crossing for centuries [1].",
      time: "20-30 minutes",
      location:
        "Eastern section of the old town, connecting north and south banks",
      cost: "Free",
      tips: [
        "Go early morning or at dusk when they're uncrowded -- midday creates a traffic jam on the stones",
        "Wear shoes with good grip; the stones can be slippery when wet",
        "This is the best spot for water-level photos of the stilted buildings",
        "The taller set of pillars is easier to cross; the flat stones are more atmospheric but require balance",
      ],
      priceTier: 0,
    },
    {
      slug: "miao-village-half-day-trip",
      name: "Miao Village Half-Day Trip (Shanjiang or Lao Dong Zhai)",
      topPick: true,
      description:
        "A half-day excursion to a nearby Miao minority village where silver-smithing, indigo batik dyeing, and traditional embroidery are living crafts rather than museum exhibits. Shanjiang Miao Village (30 min drive) is the most accessible, with a genuine community of silver artisans and a welcome ceremony featuring rice wine and Miao folk songs. Lao Dong Zhai offers a more rustic, less-touristed alternative [2].",
      time: "4-5 hours (including transport and a communal lunch)",
      location:
        "Shanjiang Miao Village, ~30 km northwest of Fenghuang (30 min by car)",
      cost: "$14/p ($7 entrance + ~$7 shared transport for 3)",
      tips: [
        "Arrange a local Miao guide through your guesthouse -- their personal connection transforms the visit",
        "Try the communal sour fish soup lunch, a Miao staple made with fermented tomatoes, wild herbs, and fresh river fish",
        "The silver jewelry workshops are fascinating -- watch artisans hammer, etch, and polish pieces by hand",
        "Buy silver directly from artisans (negotiate gently) -- prices are a fraction of what the same pieces cost in Fenghuang town",
        "Arrive before 10 AM to see village life before tour buses arrive",
      ],
      priceTier: 1,
    },
    {
      slug: "hong-bridge-and-river-crossing",
      name: "Hong Bridge (Rainbow Bridge)",
      photo: { src: "/photos/fenghuang/hong-bridge-and-river-crossing.jpg", alt: "Hong Bridge (Rainbow Bridge), Fenghuang" },
      topPick: false,
      description:
        "Fenghuang's iconic covered bridge -- a two-story wooden structure spanning the Tuo River with shops and tea stalls on its upper level. Originally built during the Ming Dynasty and reconstructed in its current form, Hong Bridge anchors the western end of the old town and serves as both a landmark and a living commercial space. The upper floor tea stalls offer a perfect perch for watching river life unfold below [1].",
      time: "30-45 minutes",
      location:
        "Western end of the old town core, connecting north and south banks",
      cost: "Free",
      tips: [
        "Climb to the upper level for tea and river views -- several tea stalls offer seating by the windows",
        "The bridge is beautifully illuminated at night and makes a strong anchoring point for evening photos",
        "Cross the bridge early morning when it's empty and the light filters through the wooden lattice windows",
      ],
      priceTier: 0,
    },
    {
      slug: "nanhua-mountain-viewpoint-hike",
      name: "Nanhua Mountain Viewpoint Hike",
      topPick: false,
      description:
        "A short but steep climb up the south bank hillside to Nanhua Mountain's viewpoints and the Wanshou Temple area, offering the definitive panoramic vista of Fenghuang's old town nestled along the Tuo River bend. The trail winds through residential lanes and small vegetable gardens before opening up to sweeping views. Far fewer visitors make it up here compared to the riverbank [5].",
      time: "1-1.5 hours (round trip)",
      location:
        "South bank, accessible from Nanhua Gate. Trailhead is a 10-minute walk from the old town core.",
      cost: "Free",
      tips: [
        "Best at dawn for misty panoramic photos or at golden hour before sunset",
        "The path is uneven stone steps -- wear sturdy shoes",
        "Bring water; there are no vendors on the hillside",
        "Continue past the first viewpoint to Wanshou Temple for the most expansive perspective",
      ],
      priceTier: 0,
    },
    {
      slug: "batik-dyeing-workshop",
      name: "Miao Batik Dyeing Workshop",
      topPick: false,
      description:
        "Hands-on workshop learning the Miao tradition of wax-resist indigo dyeing (batik). Using beeswax applied with a copper knife tool (ladao) onto white cotton, you create traditional Miao patterns before dipping the fabric into vats of fermented indigo dye. The deep blue-and-white results are striking, and you take your creation home [2].",
      time: "2-3 hours",
      location:
        "Several workshops in the old town core and in Shanjiang Miao Village",
      cost: "$8-15/p (materials included)",
      tips: [
        "The village workshops are more authentic than the old town tourist versions",
        "Wear clothes you don't mind staining -- indigo dye is permanent",
        "The wax-application technique with the copper knife is surprisingly meditative",
        "Your finished piece makes a meaningful, lightweight souvenir",
      ],
      priceTier: 1,
    },
    {
      slug: "southern-great-wall-ruins",
      name: "Southern Great Wall Ruins (Miaojiang Changcheng)",
      topPick: false,
      description:
        "A little-known Ming Dynasty wall built in the 1550s to separate Miao territory from Han Chinese settlements -- a sobering counterpoint to Fenghuang's picturesque charm. The partially restored section at Quanpanying village (40 min from town) runs along a mountain ridge with panoramic views of the Xiangxi countryside. Far more modest than the northern Great Wall, but historically fascinating and almost entirely unvisited by foreign travelers [6].",
      time: "3-4 hours (including 40-min drive each way)",
      location:
        "Quanpanying village, ~40 km west of Fenghuang",
      cost: "$10/p ($6 entrance + ~$4 shared transport for 3)",
      tips: [
        "Best combined with a Miao village visit as a full-day countryside excursion",
        "Bring water and snacks -- minimal facilities at the site",
        "The wall's purpose (ethnic separation) provides important historical context for understanding Fenghuang's Miao-Han cultural dynamics",
        "The mountain ridge views alone are worth the trip on a clear day",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Xiangxi Specialty —
    {
      slug: "old-house-sour-fish",
      name: "Old House Sour Fish Restaurant",
      photo: { src: "/photos/fenghuang/old-house-sour-fish.jpg", alt: "Old House Sour Fish Restaurant, Fenghuang" },
      chineseName: "\u8001\u5c4b\u9178\u6c64\u9c7c",
      category: "Xiangxi Specialty",
      topPick: true,
      location:
        "North bank old town, near Shen Congwen Square",
      priceRange: "$5-10/p",
      cuisine: "Miao sour fish soup, Xiangxi highland dishes",
      description:
        "The dish that defines Fenghuang: a bubbling clay pot of sour fish soup (suantangyu) made with fermented tomatoes, pickled red chilies, wild mountain herbs, and fresh river fish. This family-run spot in a traditional wooden building serves what locals consistently rate as the best version in town. The sourness is complex and layered -- nothing like vinegar -- with a slow fermented tang that builds [2].",
      whatToOrder:
        "Sour fish soup (the signature -- order it), smoked pork belly (larou), stir-fried wild fern shoots, steamed rice to soak up the broth.",
      bestFor: "Lunch or dinner. Arrive before noon or after 6 PM to avoid peak crowds.",
      priceTier: 1,
    },
    {
      slug: "da-shi-ban-private-kitchen",
      name: "Da Shi Ban Private Kitchen",
      photo: { src: "/photos/fenghuang/da-shi-ban-private-kitchen.jpg", alt: "Da Shi Ban Private Kitchen, Fenghuang" },
      chineseName: "\u5927\u77f3\u677f\u79c1\u623f\u83dc",
      category: "Xiangxi Specialty",
      topPick: true,
      location:
        "Quiet lane off Lao Ying Shao alley, old town south side",
      priceRange: "$7-12/p",
      cuisine: "Xiangxi private kitchen, Miao and Tujia home cooking",
      description:
        "A hidden courtyard restaurant run by a Tujia family, serving dishes passed down through generations. No English menu, no signage in English -- the owner brings you to the kitchen to point at ingredients and fresh produce. The smoked meats (hung over wood fires for weeks) and the wild vegetable dishes foraged from surrounding mountains are extraordinary [7].",
      whatToOrder:
        "Smoked pork with dried radish, blood duck (xueya), stir-fried wild vegetables, sour beans with minced pork, glutinous rice cakes.",
      bestFor: "Dinner. Ask your guesthouse to call ahead -- seating is limited to a few tables.",
      priceTier: 1,
    },
    // — Street Food —
    {
      slug: "riverside-rice-noodle-stall",
      name: "Riverside Rice Noodle Stalls",
      chineseName: "\u6cb3\u8fb9\u7c89\u9986",
      category: "Street Food",
      topPick: false,
      location:
        "Scattered along the north bank riverside walkway, especially near East Gate Tower",
      priceRange: "$1-2/p",
      cuisine: "Hunan rice noodles (mifen), breakfast staples",
      description:
        "Fenghuang mornings start with a bowl of Hunan-style rice noodles in a rich pork bone or beef broth, topped with pickled beans, chili oil, and peanuts. Multiple stalls line the riverside -- look for the ones with the most local customers and the biggest pots of bubbling broth [7].",
      whatToOrder:
        "Beef rice noodles (niurou mifen) with extra chili oil and pickled vegetables. Add a you tiao (fried dough stick) for dipping.",
      bestFor: "Breakfast, 6:30-8:30 AM. Perfect fuel before or after a dawn walk.",
      priceTier: 1,
    },
    {
      slug: "night-market-food-street",
      name: "Hongqiao Road Night Market",
      chineseName: "\u8679\u6865\u8def\u591c\u5e02",
      category: "Street Food",
      topPick: true,
      location:
        "Hongqiao Road running south from Hong Bridge, old town",
      priceRange: "$2-6/p",
      cuisine: "Xiangxi street food -- grilled skewers, stinky tofu, rice tofu, fried river fish",
      description:
        "After dark, Hongqiao Road erupts into a bustling night market with dozens of stalls selling Fenghuang's signature street foods. The stinky tofu here is Hunan-style -- black, crispy-fried, and served with a fiery chili-garlic sauce. Grilled river fish on sticks, rice tofu (a Miao specialty), and sugar-coated fruit skewers round out the offerings. The atmosphere is lively, smoky, and deeply local [7].",
      whatToOrder:
        "Stinky tofu (chou doufu), grilled river fish skewers, rice tofu with chili sauce, roasted sweet potatoes, tanghulu (candied fruit on a stick).",
      bestFor: "Evening, 7:00-10:00 PM. Combine with the night illumination walk.",
      priceTier: 1,
    },
    {
      slug: "xiao-mu-wu",
      name: "Xiao Mu Wu (Little Wooden House)",
      photo: { src: "/photos/fenghuang/xiao-mu-wu.jpg", alt: "Xiao Mu Wu (Little Wooden House), Fenghuang" },
      chineseName: "\u5c0f\u6728\u5c4b",
      category: "Xiangxi Specialty",
      topPick: false,
      location:
        "Laodong Road, near the old town's western edge",
      priceRange: "$5-9/p",
      cuisine: "Tujia home-style cooking, smoked meats, wild vegetables",
      description:
        "A cozy restaurant in a traditional wooden building specializing in Tujia minority dishes. The smoked bacon (larou) hung from the rafters is sliced to order, and the wild mountain vegetable dishes change with what's available from the morning market. Reliable quality at honest prices, popular with Chinese tourists who've done their research [7].",
      whatToOrder:
        "Smoked bacon with garlic shoots, sour fish soup, stir-fried bracken fern, fried river shrimp, pickled chili with preserved eggs.",
      bestFor: "Either meal. Less crowded at lunch.",
      priceTier: 1,
    },
    // — Regional Chinese —
    {
      slug: "zuixiangxi-restaurant",
      name: "Zui Xiangxi",
      chineseName: "\u9189\u6e58\u897f",
      category: "Regional Chinese",
      topPick: false,
      location:
        "Tuojiang Road, central old town near Shen Congwen Square",
      priceRange: "$8-14/p",
      cuisine: "Upscale Xiangxi cuisine, refined presentations of local dishes",
      description:
        "The most polished dining experience in Fenghuang's old town -- traditional Xiangxi flavors presented with more refinement and care than the typical tourist-facing restaurant. River-view seating on a wooden terrace overhanging the Tuo River. The kitchen takes pride in sourcing from nearby mountain villages and using traditional fermentation and smoking techniques [7].",
      whatToOrder:
        "Premium sour fish soup (uses a single whole fish), crispy duck with tea leaves, smoked pork ribs, wild honey-glazed lotus root, seasonal mountain greens.",
      bestFor: "Dinner. Request a river-view terrace table when booking.",
      priceTier: 1,
    },
    // — Cultural Experience —
    {
      slug: "miao-village-communal-lunch",
      name: "Miao Village Communal Lunch",
      chineseName: "\u957f\u684c\u5bb4",
      category: "Cultural Experience",
      topPick: true,
      location:
        "Shanjiang Miao Village or Lao Dong Zhai (30-45 min from Fenghuang by car)",
      priceRange: "$5-8/p (often included in village entrance fee)",
      cuisine: "Communal Miao feast -- sour fish soup, smoked meats, rice wine, mountain vegetables",
      description:
        "A long-table communal meal (changzhuoyan) in a Miao village is one of western Hunan's most memorable food experiences. Dishes arrive family-style on a long wooden table: the signature sour fish soup, smoked pork, sticky rice, wild vegetables, and liberal pourings of homemade rice wine (mijiu). Your Miao hosts will toast you repeatedly -- refusing is considered impolite, but the rice wine is mild [2].",
      whatToOrder:
        "This is a set communal meal -- everything is served. Don't miss the sour fish soup, the homemade rice wine, and the smoked pork belly.",
      bestFor: "Lunch during a Miao village half-day excursion.",
      priceTier: 1,
    },
    // — Tea & Snacks —
    {
      slug: "hong-bridge-tea-house",
      name: "Hong Bridge Tea Stalls",
      photo: { src: "/photos/fenghuang/hong-bridge-tea-house.jpg", alt: "Hong Bridge Tea Stalls, Fenghuang" },
      chineseName: "\u8679\u6865\u8336\u697c",
      category: "Tea & Snacks",
      topPick: false,
      location:
        "Upper floor of Hong Bridge (Rainbow Bridge), old town",
      priceRange: "$2-4/p",
      cuisine: "Local teas, ginger tea, light snacks",
      description:
        "Several tea stalls line the upper floor of Fenghuang's iconic covered bridge, offering window seats overlooking the Tuo River and the old town rooftops. Order a pot of local mountain green tea or Hunan ginger tea and watch river life unfold below. The pace here is deliberately slow -- this is where locals come to pass an afternoon [1].",
      whatToOrder:
        "Xiangxi mountain green tea or ginger tea (jiangcha). Pair with local sesame candy or glutinous rice cakes from a nearby vendor.",
      bestFor: "Afternoon pause. Best between 2:00-4:00 PM when the midday crowds thin.",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Walking: Fenghuang's old town is entirely walkable -- 30 minutes end to end along the river. Cobblestone streets are uneven; wear sturdy shoes.",
      "Getting there: Most travelers arrive by bus from Zhangjiajie (4 hrs, ~$12) or Huaihua (1.5 hrs, ~$5). Huaihua has the nearest train station with high-speed rail connections to Changsha and beyond [3].",
      "Local transport: Three-wheeled taxis (sanlunche) cover the new town area for ~$1-2. For Miao village trips, arrange a private car through your guesthouse ($15-25 round trip for 3).",
      "Within old town: No cars or motorbikes allowed in the core pedestrian zone. Riverside paths and stone alleys are the only way to move.",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 3-4 dishes family-style plus rice. Must-try: sour fish soup (suantangyu), smoked pork (larou), stinky tofu, and rice noodles for breakfast.",
      "Spice level: Xiangxi food is genuinely spicy and sour. Ask for 'wei la' (mild spice) if you're sensitive -- but the sour-spicy combination is the whole point.",
      "Water safety: Drink only bottled or boiled water. Street stalls use boiled water for cooking but avoid ice in drinks.",
      "Tipping: Not expected in Fenghuang. Small restaurants may not even know how to process a tip.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are accepted at most shops and restaurants. Bring cash for street vendors, boat operators, and village visits -- many don't accept digital payment.",
      "ATMs: Several ATMs in the new town area outside the old town gates. Withdraw cash before heading to villages.",
      "Language: Very little English spoken anywhere in Fenghuang. Download offline translation (Google Translate or Baidu) before arriving. Most menus are Chinese-only with photos.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Ancient Town ticket: The comprehensive ticket (~$15) covers all heritage sites, museums, and the boat ride. Valid for 2 days. Worth buying if you plan to enter any heritage buildings [1].",
      "Timing: Plan your visit around dawn (5:30-7:00 AM) and night (8:00-10:00 PM) -- these are Fenghuang's two magical windows. Midday is the most crowded and least atmospheric.",
      "Weekends and holidays: Fenghuang gets extremely crowded during Chinese holidays (National Day week, Oct 1-7 is peak). Weekdays in mid-to-late October are significantly calmer [5].",
      "Zhangjiajie pairing: Direct buses run between Fenghuang and Zhangjiajie (4 hrs, multiple departures daily). Do Zhangjiajie first (more active), then decompress in Fenghuang [3].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Fenghuang Ancient Town Guide -- China Highlights (https://www.chinahighlights.com/fenghuang/)",
    "[2] Miao Minority Culture & Villages near Fenghuang -- China Discovery (https://www.chinadiscovery.com/hunan/fenghuang/miao-village.html)",
    "[3] Zhangjiajie to Fenghuang Transport Guide -- China Discovery (https://www.chinadiscovery.com/hunan/zhangjiajie-to-fenghuang.html)",
    "[4] Fenghuang October Weather -- China Discovery (https://www.chinadiscovery.com/hunan/fenghuang/weather-in-october.html)",
    "[5] Fenghuang Photography & Best Viewpoints -- Travel China Guide (https://www.travelchinaguide.com/attraction/hunan/fenghuang/)",
    "[6] Southern Great Wall (Miaojiang Changcheng) -- China Highlights (https://www.chinahighlights.com/fenghuang/attraction/southern-great-wall.htm)",
    "[7] Fenghuang Food Guide -- Lost Plate (https://lostplate.com/fenghuang-food-guide/)",
  ],
};
