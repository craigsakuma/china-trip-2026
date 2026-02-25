import type { CityProfile } from "@/types";

export const guilinProfile: CityProfile = {
  slug: "guilin",
  heroPhoto: { src: "/photos/guilin/_hero.jpg", alt: "Li River and karst mountains in Yangshuo County, Guilin", credit: "Huangdan2060" },
  executiveSummary: [
    'Guilin\'s karst landscape is not a metaphor — it is genuinely unlike anything else on Earth. Hundreds of limestone towers rise vertically from flat rice paddies and mirror-still rivers, creating a panorama that has defined Chinese landscape painting for a thousand years. The famous saying "Guilin\'s scenery is the best under heaven" (桂林山水甲天下) is carved into a cliff face at Reed Flute Cave and printed on the back of the 20-yuan banknote. Mid-October delivers ideal conditions: comfortable temperatures in the low 70s°F, minimal rainfall, and clear skies that sharpen the reflections of karst peaks in the Li River [1].',
    "The real magic, however, is not in Guilin city itself but in the surrounding countryside — particularly the Yangshuo and Yulong River areas, where narrow cycling paths wind through rice paddies between limestone towers, bamboo rafts drift past water buffalo grazing on riverbanks, and villages of grey-brick farmhouses feel genuinely untouched by mass tourism. The Li River cruise from Guilin to Yangshuo is iconic, but the quieter Yulong River — navigated by hand-poled bamboo raft rather than motorboat — offers a more intimate, almost meditative experience. For hikers and cyclists, this region is paradise: the terrain is flat enough for easy cycling but surrounded by climbable peaks and ridgeline trails with sweeping views [2].",
    "The food alone makes Guilin essential. Guilin rice noodles (桂林米粉) are a cultural institution — silky fresh noodles tossed with slow-braised beef, crispy pork, pickled beans, and a ladle of bone broth simmered with over twenty spices. Every neighborhood has its loyally defended noodle shop, and a proper rice noodle breakfast costs under $1. Yangshuo's signature beer fish — fresh Li River fish fried crispy with scales on, then braised in local Liquan beer with tomatoes and chilies — is best eaten at family-run restaurants where the cook is also the owner. For three active, food-obsessed friends, this is a place where the landscape, the food, and the adventure are inseparable [3].",
  ],
  famousFor: [
    "karst limestone landscape",
    "Li River scenery",
    "Guilin rice noodles",
    "Yangshuo cycling",
    "bamboo rafting",
    "beer fish",
    "traditional Chinese landscape painting",
  ],
  whyItFits: [
    "World-class cycling through rice paddies and karst towers along the Yulong River",
    "Hiking options from riverside trails to karst peak summits with panoramic views",
    "Iconic food culture anchored by Guilin rice noodles and Yangshuo beer fish",
    "Quieter countryside experiences that reward slow, immersive exploration",
    "Cooking classes, bamboo rafting, and rock climbing for active travelers",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 80,
      avgLow: 65,
      rainChance: 20,
      precip: 1.6,
      sunrise: "6:25 AM",
      sunset: "6:20 PM",
      conditions: "Warm and pleasant; occasional brief showers; lush green landscape",
    },
    {
      period: "Mid Oct",
      avgHigh: 77,
      avgLow: 63,
      rainChance: 15,
      precip: 0.9,
      sunrise: "6:30 AM",
      sunset: "6:08 PM",
      conditions: "Ideal touring weather; clear skies; excellent river reflections [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 74,
      avgLow: 60,
      rainChance: 10,
      precip: 0.6,
      sunrise: "6:38 AM",
      sunset: "5:58 PM",
      conditions: "Cooler mornings; driest period; rice harvest golden fields",
    },
  ],
  whatToPack:
    "Light layers for 60-80\u00b0F. Breathable hiking shirt, light rain shell (brief showers possible), comfortable cycling-friendly pants, sturdy walking shoes, and sandals for bamboo rafting. Sunscreen and hat essential — river and paddy reflections amplify sun exposure.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "yangshuo-west-street-area",
      name: "Yangshuo / West Street Area",
      topPick: true,
      description:
        "The traveler hub of the region, but far more than a backpacker strip. West Street (Xi Jie) has restaurants, cafes, and gear shops, but step two blocks in any direction and you're in genuine small-town Guangxi — morning markets with live fish and hand-pulled noodles, elderly men playing mahjong under banyan trees, and karst peaks framing every street. Yangshuo is the essential base for cycling the Yulong River, bamboo rafting, and rock climbing [4].",
      whyItFitsUs:
        "Best base for all countryside activities. Bike rentals, cooking classes, and restaurants are walkable. Karst scenery begins at the edge of town. Multiple boutique hotels with river and mountain views.",
      nearby:
        "Yulong River cycling (10 min ride), Ten-Mile Gallery (5 min ride), Moon Hill (20 min ride), Li River dock (15 min taxi)",
      hotels:
        "Yangshuo Mountain Retreat (riverside boutique with karst views \u2014 top pick for atmosphere), Alila Yangshuo (converted sugar mill, design-forward luxury), Yangshuo Secret Garden (quiet courtyard guesthouse near West Street)",
    },
    {
      slug: "xingping-ancient-town",
      name: "Xingping Ancient Town",
      topPick: false,
      description:
        "A quieter, more authentic alternative to Yangshuo, 25 km downstream on the Li River. This is the exact view printed on the 20-yuan banknote. Ancient stone streets, riverside fish restaurants, and karst scenery even more dramatic than Yangshuo. Increasingly popular but still far less developed [5].",
      whyItFitsUs:
        "Most photogenic karst views in the region. Excellent base for the Li River's most scenic stretch. Early morning fog over the river is magical. More local character than Yangshuo.",
      nearby:
        "20-yuan banknote viewpoint (5 min walk), Laozhai Hill summit hike (30 min), Nine Horses Mural Hill (15 min boat ride), Yangshuo (30 min bus)",
      hotels:
        "This Old Place International Youth Hostel (riverside terrace with jaw-dropping karst views), Secret Garden Xingping (quiet courtyard guesthouse)",
    },
    {
      slug: "guilin-city-center",
      name: "Guilin City Center \u2014 Two Rivers and Four Lakes",
      topPick: false,
      description:
        "Guilin city itself is a pleasant mid-size Chinese city bisected by the Li River, with karst peaks rising directly from the urban fabric. The Two Rivers and Four Lakes scenic area connects the city's waterways for walking and evening boat tours. More a transit base than a destination, but worth 1-2 nights for Reed Flute Cave, Elephant Trunk Hill, and the legendary rice noodle shops [6].",
      whyItFitsUs:
        "Convenient arrival base with easy access to the Li River cruise departure dock. Best concentration of authentic Guilin rice noodle shops. Good for a first or last night.",
      nearby:
        "Reed Flute Cave (15 min taxi), Elephant Trunk Hill (10 min walk), Li River cruise dock at Mopanshan (45 min drive), East-West Lane food street (walking distance)",
      hotels:
        "Shangri-La Guilin (riverside views, walkable to city sights), Aroma Tea House (intimate boutique near Two Rivers area)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "yulong-river-cycling",
      name: "Yulong River Cycling Route",
      topPick: true,
      description:
        "The single best way to experience Guilin's karst landscape: a cycling route along the Yulong River from Yangshuo through rice paddies, past ancient stone bridges, and between towering limestone peaks. The route follows narrow village paths where water buffalo share the road and farmers tend terraced fields. The 20 km loop from Yangshuo to Yulong Bridge and back via countryside lanes is flat, easy, and extraordinarily beautiful [2].",
      time: "Half day (3-5 hours depending on stops)",
      location:
        "Starts from Yangshuo town, heading northwest along the Yulong River toward Yulong Bridge",
      cost: "$4-11/p ($4 standard bike rental, $11 e-bike rental per day)",
      tips: [
        "Rent an e-bike for easier riding and wider range \u2014 the route is flat but distances add up",
        "Start by 7:30 AM to ride through morning mist with karst peaks emerging from fog",
        "Stop at Gongnong Bridge for the most photographed Yulong River view",
        "The section between Yulong Bridge and Gongnong Bridge is the quietest and most scenic",
        "Bring water and snacks \u2014 village shops are sparse on quieter stretches [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "li-river-cruise-guilin-to-yangshuo",
      name: "Li River Cruise \u2014 Guilin to Yangshuo",
      topPick: true,
      description:
        "The iconic 83 km river journey from Guilin to Yangshuo, passing through some of the most photographed scenery in China. Karst peaks with names like Nine Horses Mural Hill and Yellow Cloth Shoal rise vertically from emerald water, cormorant fishermen work from bamboo rafts, and water buffalo graze on riverbanks. The 4-star boat is worth the upgrade for smaller capacity, upper deck access, and better lunch [7].",
      time: "Full day (4-5 hours on water, plus transfers)",
      location:
        "Departs Mopanshan Dock (45 min drive from Guilin city), arrives Yangshuo Longtoushan Dock",
      cost: "$42/p (4-star boat ticket ~$38 + $4 lunch upgrade) \u2014 or $30/p for 3-star boat",
      tips: [
        "Book the 4-star cruise for fewer passengers and upper deck access \u2014 only $10 more than 3-star",
        "Sit on the left side (facing forward) for the best views and photo opportunities",
        "Take the earliest departure (~9:20 AM) for softer morning light [7]",
        "Book tickets at least 3-5 days ahead in October \u2014 peak season",
        "Use this as a one-way journey: cruise to Yangshuo, stay there, don't return to Guilin",
      ],
      priceTier: 3,
    },
    {
      slug: "yulong-river-bamboo-rafting",
      name: "Yulong River Bamboo Rafting",
      photo: { src: "/photos/guilin/yulong-river-bamboo-rafting.jpg", alt: "Yulong River Bamboo Rafting, Guilin" },
      topPick: true,
      description:
        "A hand-poled bamboo raft drifting down the Yulong River \u2014 no motor, no crowd, just a bamboo pole punting through water so clear you can see the river bottom. This is the intimate, quiet alternative to the Li River cruise. Limestone peaks drift past in silence broken only by birdsong and the splash of the pole. The Jiuxian to Gongnong Bridge section is the most scenic [8].",
      time: "1.5-2 hours (Jiuxian to Gongnong Bridge section)",
      location:
        "Multiple boarding points along the Yulong River, 5-10 km from Yangshuo town",
      cost: "$28/p (per raft for 2 passengers; solo travelers may share or pay full raft price of ~$55)",
      tips: [
        "The Jiuxian to Gongnong Bridge stretch has the best combination of karst views and old stone bridges",
        "Go early morning or late afternoon \u2014 midday can be busy with tour groups",
        "Bring a dry bag for electronics \u2014 you will get splashed going over small weirs",
        "Tip the raft poler $2-3 if they stop at scenic spots for photos [8]",
      ],
      priceTier: 2,
    },
    {
      slug: "xingping-laozhai-hill-hike",
      name: "Xingping \u2014 Laozhai Hill Sunset Hike",
      topPick: true,
      description:
        "A steep 30-minute climb up Laozhai Hill in Xingping rewards with the single most spectacular panoramic view of the Li River and karst landscape \u2014 the exact view on the 20-yuan banknote, but from above. The trail is well-maintained stone steps through bamboo forest, ending at a platform overlooking an impossibly dramatic river bend flanked by karst towers [5].",
      time: "1-1.5 hours (including ascent, photos, and descent)",
      location:
        "Xingping Ancient Town, 25 km from Yangshuo (30 min by bus or taxi)",
      cost: "Free",
      tips: [
        "Time your climb to reach the summit 30-45 minutes before sunset for golden light on the karst peaks",
        "The climb is steep with 400+ stone steps \u2014 bring water and wear sturdy shoes",
        "Early morning (6:30-7:30 AM) is equally magical with river fog filling the valleys",
        "Combine with Xingping Ancient Town exploration and a riverside beer fish lunch [5]",
      ],
      priceTier: 0,
    },
    {
      slug: "moon-hill-hike",
      name: "Moon Hill Hike",
      photo: { src: "/photos/guilin/moon-hill-hike.jpg", alt: "Moon Hill Hike, Guilin" },
      topPick: false,
      description:
        "A natural limestone arch near the top of a karst peak that perfectly frames the moon when aligned \u2014 and provides 360-degree views of the surrounding karst valley. The 20-minute climb up ~800 stone steps is the most accessible karst peak hike in the Yangshuo area. On a clear October day, you can see karst towers stretching to the horizon in every direction [9].",
      time: "1-1.5 hours (including ascent and descent)",
      location:
        "8 km south of Yangshuo along the Ten-Mile Gallery road. 20 min by bike, 10 min by taxi",
      cost: "$3/p (entrance fee)",
      tips: [
        "Best combined with a cycling trip along Ten-Mile Gallery \u2014 park your bike at the base",
        "Go early morning or late afternoon to avoid heat and crowds",
        "The arch itself is best photographed from below; the summit views are the real reward",
        "Bring water \u2014 no vendors on the trail [9]",
      ],
      priceTier: 1,
    },
    {
      slug: "ten-mile-gallery-cycling",
      name: "Ten-Mile Gallery (Shili Hualang) Cycling",
      topPick: false,
      description:
        "A flat, paved 7 km road from Yangshuo to Moon Hill lined with karst peaks, riverside villages, and lush vegetation. More accessible and less adventurous than the Yulong River route but still beautiful, with dedicated cycling lanes and easy access to Moon Hill, Big Banyan Tree, and Butterfly Spring along the way [2].",
      time: "2-3 hours (with stops)",
      location:
        "Starts from Yangshuo town, heading south along Kangzhan Road toward Moon Hill",
      cost: "$4-11/p (bike rental)",
      tips: [
        "Combine with Moon Hill for a half-day outing",
        "The road is paved and flat \u2014 suitable for any fitness level",
        "Stop at the Big Banyan Tree (1,400+ years old) but skip the paid entrance \u2014 the tree is visible from outside",
        "Late afternoon light is best for photography along this route",
      ],
      priceTier: 1,
    },
    {
      slug: "reed-flute-cave",
      name: "Reed Flute Cave (Ludi Yan)",
      photo: { src: "/photos/guilin/reed-flute-cave.jpg", alt: "Reed Flute Cave (Ludi Yan), Guilin" },
      topPick: false,
      description:
        "A 240-meter-long cave system filled with stalactites, stalagmites, and rock formations illuminated by colored lighting. Over 70 Tang Dynasty (792 AD) ink inscriptions on the walls prove visitors have been marveling at these formations for over 1,200 years. The Crystal Palace chamber is the highlight \u2014 an underground cathedral of stone [6].",
      time: "1-1.5 hours",
      location:
        "Northwest Guilin city, 5 km from city center. 15 min by taxi",
      cost: "$14/p (entrance fee ~100 RMB)",
      tips: [
        "Visit first thing in the morning (8:00 AM) to avoid large tour groups",
        "The Tang Dynasty ink inscriptions are more historically fascinating than the colored lights \u2014 ask a guide to point them out",
        "Skip the overpriced photo opportunities inside the cave",
        "Combine with Elephant Trunk Hill for a Guilin city half-day [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "elephant-trunk-hill",
      name: "Elephant Trunk Hill (Xiangbishan)",
      photo: { src: "/photos/guilin/elephant-trunk-hill.jpg", alt: "Elephant Trunk Hill (Xiangbishan), Guilin" },
      topPick: false,
      description:
        "Guilin's most recognizable landmark \u2014 a natural rock formation at the confluence of the Li and Peach Blossom rivers that perfectly resembles an elephant drinking from the water. The hill is small but climbable, and the cave inside the 'trunk' has Song Dynasty Buddhist carvings. More of a photo-op than a deep experience, but genuinely iconic [6].",
      time: "45 min - 1 hour",
      location:
        "Central Guilin, at the junction of the Li River and Peach Blossom River",
      cost: "$10/p (entrance fee ~70 RMB)",
      tips: [
        "The best photo is actually from across the river \u2014 you don't need to enter the park for the classic shot",
        "If entering, climb to the top of the hill for Li River views",
        "Early morning or late afternoon light is best",
        "Can be combined with Reed Flute Cave and a rice noodle crawl for a Guilin city day [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "yangshuo-cooking-class",
      name: "Yangshuo Cooking Class",
      photo: { src: "/photos/guilin/yangshuo-cooking-class.jpg", alt: "Yangshuo Cooking Class, Guilin" },
      topPick: false,
      description:
        "Hands-on cooking in the Yangshuo countryside, typically starting with a visit to the local morning market where your instructor explains ingredients, followed by preparing 4-5 dishes in an outdoor kitchen surrounded by karst peaks. Yangshuo Cooking School and Cloud 9 Cooking School are the two most established operations, both running since the early 2000s [10].",
      time: "3-4 hours (including market visit)",
      location:
        "Yangshuo town and surrounding villages. Pickup from your hotel included",
      cost: "$25-35/p (per person, all-inclusive with market tour)",
      tips: [
        "Book the morning class (9:30 AM) that includes the wet market visit \u2014 it's far more immersive than the afternoon session",
        "Request to learn beer fish preparation \u2014 it's the regional specialty and surprisingly achievable at home",
        "Classes accommodate groups of 3 comfortably \u2014 the interaction is better with small numbers",
        "Yangshuo Cooking School's riverside campus has the more scenic setting [10]",
      ],
      priceTier: 2,
    },
    {
      slug: "xingping-to-jiuma-riverside-hike",
      name: "Xingping to Jiuma (Nine Horses) Riverside Hike",
      topPick: false,
      description:
        "A relatively unknown riverside trail following the Li River from Xingping Ancient Town south toward Nine Horses Mural Hill \u2014 a massive cliff face where Chinese tradition says you can count nine horses in the rock patterns (most people see four or five). The flat trail passes through orange groves, bamboo stands, and provides continuous karst views without another tourist in sight [5].",
      time: "2-3 hours (one way, return by boat or same trail)",
      location:
        "Starts from Xingping Ancient Town waterfront, heading south along the Li River",
      cost: "Free (optional $5 boat ride back to Xingping)",
      tips: [
        "Bring water and a snack \u2014 there are no services along the trail",
        "The trail can be muddy after rain \u2014 wear sturdy shoes with grip",
        "The Nine Horses Mural Hill is best viewed from the river \u2014 consider a short boat ride for the photo",
        "Combine with the Laozhai Hill hike for a full Xingping day [5]",
      ],
      priceTier: 0,
    },
    {
      slug: "yangshuo-rock-climbing",
      name: "Yangshuo Rock Climbing",
      photo: { src: "/photos/guilin/yangshuo-rock-climbing.jpg", alt: "Yangshuo Rock Climbing, Guilin" },
      topPick: false,
      description:
        "Yangshuo is one of Asia's premier rock climbing destinations, with hundreds of bolted routes on limestone karst cliffs ranging from beginner to expert. The Moon Hill area and the cliffs near the Yulong River offer dramatic settings. Multiple outfitters in town offer half-day guided sessions with all equipment, no experience necessary [11].",
      time: "Half day (3-4 hours with instruction)",
      location:
        "Multiple sites around Yangshuo \u2014 Moon Hill area and riverside cliffs. Transport provided by outfitters",
      cost: "$25-40/p (half-day guided session with all equipment)",
      tips: [
        "Insight Adventures and Karst Climber are the most established and safety-conscious outfitters",
        "October weather is ideal for climbing \u2014 not too hot, not too humid",
        "Even complete beginners can enjoy beginner routes with stunning views",
        "Book a half-day morning session and cycle in the afternoon [11]",
      ],
      priceTier: 2,
    },
    {
      slug: "longji-rice-terraces",
      name: "Longji Rice Terraces Day Trip",
      photo: { src: "/photos/guilin/longji-rice-terraces.jpg", alt: "Longji Rice Terraces Day Trip, Guilin" },
      topPick: false,
      description:
        "Dramatic rice terraces carved into mountainsides over 700 years by Zhuang and Yao minority communities. The terraces cascade down steep valleys in concentric curves. In mid-to-late October, the terraces turn golden as the rice ripens \u2014 one of the most photographed agricultural landscapes in China. The Ping'an and Dazhai sections offer different experiences [12].",
      time: "Full day (2.5 hours each way from Guilin + 3-4 hours exploring)",
      location:
        "Longsheng County, ~85 km north of Guilin. 2-2.5 hours by car from Guilin, 3+ hours from Yangshuo",
      cost: "$20/p ($14 entrance + ~$6/p shared transport) \u2014 or $30/p via organized tour",
      tips: [
        "Mid-to-late October catches the golden rice harvest \u2014 terraces glow amber and gold",
        "Dazhai (Jinkeng) section is less crowded and more dramatic than Ping'an; take the cable car up, hike down",
        "Best done as a day trip from Guilin, not from Yangshuo \u2014 saves 2 hours of driving",
        "Hire a local Zhuang guide for cultural context and to visit homes for oil tea (打油茶) [12]",
      ],
      priceTier: 2,
    },
    {
      slug: "cormorant-fishing-demonstration",
      name: "Cormorant Fishing at Dusk",
      topPick: false,
      description:
        "Traditional cormorant fishing \u2014 where trained birds dive for fish with rings around their throats preventing them from swallowing \u2014 has been practiced on the Li River for over a thousand years. While commercial fishing has mostly ended, fishermen near Xingping still demonstrate the technique at dusk, launching from bamboo rafts with lit lanterns as the karst peaks darken to silhouettes [13].",
      time: "1-1.5 hours (evening)",
      location:
        "Near Xingping, along the Li River. Arranged through local guides or guesthouses",
      cost: "$15-25/p (arranged through guesthouse or local guide)",
      tips: [
        "This is a demonstration/photo opportunity, not active commercial fishing \u2014 set expectations accordingly",
        "The lit lanterns against the darkening karst skyline create genuinely dramatic photographs",
        "Arrange through your Xingping guesthouse for the most authentic experience \u2014 avoid large-group tour operators",
        "Combine with a Xingping overnight stay and Laozhai Hill sunrise [13]",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Guilin Rice Noodles —
    {
      slug: "chongshan-laodongjiang-rice-noodles",
      name: "Chongshan Laodongjiang Rice Noodles",
      chineseName: "崇善老东江米粉",
      category: "Guilin Rice Noodles",
      topPick: true,
      location:
        "Chongshan Road, central Guilin \u2014 multiple branches throughout the city",
      priceRange: "$0.70-1.50/p",
      cuisine: "Traditional Guilin rice noodles (mifen)",
      description:
        "The most famous rice noodle shop in Guilin \u2014 every local knows the name. The signature dry-tossed noodles (干拌粉) arrive as a bowl of silky fresh rice noodles topped with slow-braised beef brisket, crispy fried pork, pickled long beans, roasted peanuts, and scallions. You add the bone broth yourself from a communal pot \u2014 sip it between bites to cleanse the palate. A complete breakfast costs under $1 [3].",
      whatToOrder:
        "Dry-tossed rice noodles with braised beef (卤菜粉干拌), add a side of marinated pig ears if feeling adventurous. Pour the bone broth into a separate small bowl for sipping.",
      bestFor: "Breakfast (arrive 7:00-8:30 AM for peak atmosphere and freshest noodles)",
      priceTier: 1,
    },
    {
      slug: "youyi-xuan-horse-meat-noodles",
      name: "Youyi Xuan Horse Meat Rice Noodles",
      chineseName: "又益轩马肉米粉",
      category: "Guilin Rice Noodles",
      topPick: false,
      location:
        "Longyin Road, near Solitary Beauty Peak, central Guilin",
      priceRange: "$1-2/p",
      cuisine: "Horse meat rice noodles \u2014 Guilin's most distinctive specialty",
      description:
        "Established in 1896, this is Guilin's most celebrated horse meat noodle shop. Horse meat rice noodles are a uniquely Guilin tradition \u2014 the broth is simmered from horse bones for hours, giving it a deeper, richer flavor than standard beef broth. The thinly sliced horse meat is lean, tender, and milder than you'd expect. This is the dish locals bring visitors to prove they've really experienced Guilin [3].",
      whatToOrder:
        "Horse meat rice noodles with the full topping set (马肉米粉加料). The broth is the star \u2014 drink every drop.",
      bestFor: "Breakfast or early lunch",
      priceTier: 1,
    },
    {
      slug: "qingyun-tang-rice-noodles",
      name: "Qingyun Tang Soup Rice Noodles (Tiexi Mifen)",
      chineseName: "青云汤粉 (铁西米粉)",
      category: "Guilin Rice Noodles",
      topPick: false,
      location:
        "Near Guilin Railway Station, Tiexi district",
      priceRange: "$0.70-1.50/p",
      cuisine: "Soup-style Guilin rice noodles",
      description:
        "While most famous Guilin noodles are dry-tossed, this legendary shop specializes in the soup version \u2014 noodles swimming in a fragrant, deeply savory bone broth that's been simmered for 12+ hours. Locals argue endlessly about whether dry-tossed or soup noodles are superior. Try both and take a side [3].",
      whatToOrder:
        "Soup rice noodles with mixed toppings (汤粉综合). Add extra pickled bamboo shoots (酸笋) for a tangy kick.",
      bestFor: "Breakfast or lunch",
      priceTier: 1,
    },

    // — Yangshuo Beer Fish —
    {
      slug: "meijie-beer-fish",
      name: "Meijie Beer Fish",
      chineseName: "美姐啤酒鱼",
      category: "Yangshuo Beer Fish",
      topPick: true,
      location:
        "West Street area, Yangshuo \u2014 look for the perpetual queue",
      priceRange: "$8-14/p",
      cuisine: "Yangshuo beer fish and local Guangxi dishes",
      description:
        "The most famous beer fish restaurant in Yangshuo, and for good reason. Fresh Li River fish is fried crispy with scales still on (the scales become edible chips), then braised in a bubbling pot of local Liquan beer, tomatoes, red and green peppers, garlic, and a proprietary spice blend. The whole fish arrives still sizzling at your table. Family-run, always packed, English picture menu available [14].",
      whatToOrder:
        "Whole beer fish (啤酒鱼 \u2014 order the Li River grass carp for authenticity), stir-fried river snails (炒田螺), stuffed Li River shrimp, fried Yangshuo river vegetables.",
      bestFor: "Dinner (arrive by 5:30 PM to avoid the worst queue)",
      priceTier: 1,
    },
    {
      slug: "peng-jie-beer-fish",
      name: "Older Sister Peng's Beer Fish",
      chineseName: "彭大姐啤酒鱼",
      category: "Yangshuo Beer Fish",
      topPick: false,
      location:
        "West Street area, Yangshuo",
      priceRange: "$8-14/p",
      cuisine: "Beer fish and Guangxi home cooking",
      description:
        "The eternal rival to Meijie. Locals are fiercely divided. Peng Jie's version uses slightly more chili and a different spice ratio, resulting in a spicier, more complex sauce. The restaurant is scruffier and more local-feeling than Meijie. Both are excellent \u2014 try both if you're in Yangshuo for multiple nights [14].",
      whatToOrder:
        "Whole beer fish, Yangshuo-style stuffed tofu (酿豆腐), scrambled eggs with wild mountain vegetables, cold beer.",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "xingping-liu-jie-beer-fish",
      name: "Liu Jie's Beer Fish (Xingping)",
      chineseName: "刘姐啤酒鱼",
      category: "Yangshuo Beer Fish",
      topPick: false,
      location:
        "Xingping Ancient Town main street, near the Li River waterfront",
      priceRange: "$7-12/p",
      cuisine: "Xingping-style beer fish",
      description:
        "A local favorite in Xingping with a devoted following. Slightly less polished than the Yangshuo beer fish restaurants but arguably more authentic \u2014 the fish comes from the Li River right outside, and the cook has been perfecting the recipe for decades. After the fish is finished, noodles and vegetables go into the remaining broth for a killer second course [5].",
      whatToOrder:
        "Beer fish (ask for Li River fish), then request noodles added to the remaining broth. Pair with stir-fried water spinach (空心菜) and cold Liquan beer.",
      bestFor: "Lunch after Laozhai Hill hike or Li River walk",
      priceTier: 1,
    },

    // — Local Guangxi Cuisine —
    {
      slug: "chunji-roasted-goose",
      name: "Chunji Roasted Goose",
      chineseName: "椿记烧鹅",
      category: "Local Guangxi",
      topPick: true,
      location:
        "Multiple locations in Guilin \u2014 Zhongshan Road branch is most central",
      priceRange: "$7-15/p",
      cuisine: "Cantonese-Guangxi roast meats and local dishes",
      description:
        "Guilin's most beloved roast goose chain \u2014 lacquered mahogany skin that shatters on contact, juicy meat beneath. The roast goose here rivals Hong Kong's best at a fraction of the price. Also excellent for traditional Guilin dishes like oil tea, stuffed tofu, and steamed river fish [15].",
      whatToOrder:
        "Half roast goose (烧鹅 \u2014 enough for 3 people to share), Guilin-style stuffed tofu (酿豆腐), stir-fried river vegetables, rice.",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "east-west-lane-food-street",
      name: "East-West Lane Street Food (Dong Xi Xiang)",
      photo: { src: "/photos/guilin/east-west-lane-food-street.jpg", alt: "East-West Lane Street Food (Dong Xi Xiang), Guilin" },
      chineseName: "东西巷",
      category: "Street Food",
      topPick: false,
      location:
        "Central Guilin, directly adjacent to Jingjiang Prince City. 5 min walk from Elephant Trunk Hill",
      priceRange: "$1-5 per item",
      cuisine: "Traditional Guilin snacks and street food",
      description:
        "A restored Ming and Qing dynasty lane that functions as Guilin's premier street food destination. Unlike many 'ancient street' tourist traps, the food here is genuinely excellent \u2014 osmanthus cakes (桂花糕), water chestnut cakes, oil tea (油茶), grilled skewers, and of course rice noodle shops. More curated than a night market, less sterile than a food court [6].",
      whatToOrder:
        "Guilin osmanthus cake (桂花糕 \u2014 the city's namesake pastry), oil tea (打油茶 \u2014 pounded tea with puffed rice and peanuts), grilled tofu skewers, water chestnut cake.",
      bestFor: "Afternoon snack or evening grazing (combines well with Elephant Trunk Hill visit)",
      priceTier: 1,
    },
    {
      slug: "yangshuo-lucys-place",
      name: "Lucy's Place",
      chineseName: undefined,
      category: "Local Guangxi",
      topPick: false,
      location:
        "West Street, Yangshuo \u2014 one of the original backpacker-era restaurants",
      priceRange: "$5-12/p",
      cuisine: "Chinese-Western fusion with strong local Guangxi dishes",
      description:
        "A Yangshuo institution since the early backpacker era. Run by the indefatigable Lucy for decades, this rooftop restaurant serves reliable Chinese dishes alongside Western comfort food. The real draw is Lucy herself \u2014 a wealth of local knowledge \u2014 and the rooftop terrace with karst views. Not the most authentic meal in town, but a great orientation dinner on arrival [4].",
      whatToOrder:
        "Beer fish, Yangshuo-style fried river shrimp, banana pancake (the backpacker classic), ginger tea.",
      bestFor: "First-night dinner with orientation conversation",
      priceTier: 1,
    },
    {
      slug: "jixiang-restaurant-xingping",
      name: "Jixiang Restaurant (Xingping)",
      chineseName: "吉祥饭店",
      category: "Local Guangxi",
      topPick: false,
      location:
        "No. 70, Xinjie (New Street), Xingping Ancient Town",
      priceRange: "$5-10/p",
      cuisine: "Home-style Xingping cooking",
      description:
        "A family-run hole-in-the-wall on Xingping's main street where the grandmother cooks and the grandchildren take orders. The menu rotates based on what's fresh at the morning market. Unfussy, deeply authentic, and astonishingly cheap. No English menu \u2014 point at what other tables are eating or use a translation app [5].",
      whatToOrder:
        "Whatever the family recommends. Reliably excellent: scrambled eggs with tomato, stir-fried greens, braised pork belly, steamed river fish when available.",
      bestFor: "Lunch in Xingping",
      priceTier: 1,
    },

    // — Regional Specialties —
    {
      slug: "nongfu-youcha-oil-tea",
      name: "Nongfu Youcha (Oil Tea House)",
      chineseName: "农夫油茶",
      category: "Regional Specialties",
      topPick: false,
      location:
        "Near Two Rivers and Four Lakes area, central Guilin",
      priceRange: "$2-5/p",
      cuisine: "Guilin oil tea (打油茶) \u2014 Yao/Zhuang minority tradition",
      description:
        "Oil tea is a Guilin tradition borrowed from the Yao and Zhuang minorities \u2014 tea leaves are pounded in a mortar with oil, ginger, and garlic, then strained into a bitter, intensely savory brew served with puffed rice, fried peanuts, sesame seeds, and scallions sprinkled on top. It's an acquired taste that becomes addictive. This dedicated oil tea house serves it the traditional way with a full spread of accompaniments [3].",
      whatToOrder:
        "Full oil tea set (油茶套餐) with all the toppings. Three bowls is traditional \u2014 the first is bitter, the second is rich, the third is sweet.",
      bestFor: "Afternoon cultural experience or midday snack",
      priceTier: 1,
    },
    {
      slug: "zhengyang-tang-cheng",
      name: "Zhengyang Tang Cheng (Soup City)",
      chineseName: "正阳汤城",
      category: "Regional Specialties",
      topPick: false,
      location:
        "Zhengyang Pedestrian Street, central Guilin",
      priceRange: "$7-14/p",
      cuisine: "Guangxi soups, hotpot, and local Guilin specialties",
      description:
        "Guilin has a strong soup culture, and this popular local chain is the best place to experience it. The specialty is medicinal herb soups \u2014 slow-simmered broths with ingredients like goji berries, lotus seeds, and Chinese yam. Also excellent for Guilin-style casseroles and river fish dishes. A good dinner option in Guilin city [15].",
      whatToOrder:
        "Signature herb chicken soup (药膳鸡汤 \u2014 enough for 3 people), Guilin-style rice noodle pot (锅烧米粉), steamed Li River fish, stir-fried water spinach.",
      bestFor: "Dinner in Guilin city",
      priceTier: 1,
    },

    // — Splurge —
    {
      slug: "alila-yangshuo-1969-restaurant",
      name: "1969 Restaurant at Alila Yangshuo",
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "Alila Yangshuo resort, converted sugar mill along the Li River, Xinglong Village",
      priceRange: "$35-70/p",
      cuisine: "Contemporary Guangxi cuisine with refined presentation",
      description:
        "Set inside a dramatically converted 1960s sugar mill with soaring industrial ceilings and Li River views through massive windows, Alila's signature restaurant elevates local Guangxi ingredients \u2014 river fish, mountain herbs, Guilin chili paste \u2014 into polished dishes that retain their soul. The tasting menu is the way to go. This is as close to fine dining as the region offers [4].",
      whatToOrder:
        "Seasonal tasting menu (chef's selection of 6-8 courses highlighting local ingredients). The river fish preparation changes daily.",
      bestFor: "One special dinner during the Yangshuo stay",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Guilin to Yangshuo: Take the Li River cruise one-way (4-5 hours, scenic), or direct bus from Guilin South Station (1.5 hours, ~$3). Private car is ~$30 for the group.",
      "Within Yangshuo: Rent e-bikes ($8-11/day) for countryside exploration. Walking covers town itself. Taxis are cheap for longer distances. Download Amap or Baidu Maps (Google Maps is blocked in China).",
      "Yangshuo to Xingping: Local bus (~$2, 30 min) or taxi (~$12). Worth at least a half-day trip.",
      "Guilin airport to city center: Airport bus ($3/p, 40 min) or taxi ($12-15). Guilin Liangjiang Airport (KWL) has domestic flights from all major Chinese cities.",
    ],
    "Food & Dining": [
      "Rice noodle etiquette: Guilin mifen is eaten as a quick, cheap meal \u2014 slurping is expected, lingering is not. Add condiments (pickled chilies, vinegar, garlic) from the communal table. The bone broth is for sipping between bites, not pouring over the noodles.",
      "Beer fish protocol: Order a whole fish for the table. The cook selects the fish by weight \u2014 expect $8-15 for a fish that feeds 3. After the fish is eaten, ask for noodles to be cooked in the remaining broth.",
      "For 3 people: Order 3-4 dishes family-style plus rice. Chinese dining is communal \u2014 every dish goes in the center of the table.",
      "Tipping: Not expected anywhere in the Guilin/Yangshuo region.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are universal. Set up international Alipay before the trip. Carry some cash for village vendors, bamboo raft tips, and small rice noodle shops.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked throughout China.",
      "Language: English is widely spoken in Yangshuo tourist areas (West Street) and at major hotels. Almost zero English in Guilin rice noodle shops, Xingping, and countryside villages \u2014 bring a translation app.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Li River cruise: Book 4-star tickets 3-5 days in advance in October \u2014 peak season and limited daily capacity [7].",
      "Bamboo rafting: Advance booking recommended for the popular Yulong River Jiuxian-to-Gongnong stretch, especially on weekends.",
      "Yangshuo hotel: Book well ahead for October stays \u2014 the best boutique properties sell out weeks in advance.",
      "Longji Rice Terraces: If visiting in late October, check harvest status \u2014 golden terraces are the goal, but timing varies by 1-2 weeks year to year [12].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Guilin October Weather Guide \u2014 China Highlights (https://www.chinahighlights.com/guilin/weather/october.htm)",
    "[2] Yangshuo Cycling Routes and Biking Guide \u2014 China Highlights (https://www.chinahighlights.com/travelguide/china-biking/yangshuo-biking.htm)",
    "[3] Guilin Food Guide: Rice Noodles and Local Specialties \u2014 China Highlights (https://www.chinahighlights.com/guilin/food-restaurant.htm)",
    "[4] Where to Stay in Yangshuo \u2014 China Highlights (https://www.chinahighlights.com/yangshuo/where-to-stay.htm)",
    "[5] Xingping Ancient Town Travel Guide \u2014 China Explorer Tour (https://chinaexplorertour.com/2026/blog/yangshuo-xingping-ancient-town-travel-guide-first-timers/)",
    "[6] Reed Flute Cave and Guilin City Attractions \u2014 China Discovery (https://www.chinadiscovery.com/guangxi/guilin/reed-flute-cave.html)",
    "[7] Li River Cruise: Guilin to Yangshuo Guide \u2014 China Discovery (https://www.chinadiscovery.com/guilin-tours/li-river-cruise.html)",
    "[8] Yulong River Bamboo Rafting and Activities \u2014 Asia Odyssey Travel (https://www.asiaodysseytravel.com/guilin/yulong-river.html)",
    "[9] Moon Hill and Ten-Mile Gallery \u2014 China Discovery (https://www.chinadiscovery.com/guilin-tours/yangshuo-biking.html)",
    "[10] Yangshuo Cooking School \u2014 TripAdvisor Reviews (https://www.tripadvisor.com/Attraction_Review-g303712-d968612-Reviews-Yangshuo_Cooking_School-Yangshuo_County_Guangxi.html)",
    "[11] Yangshuo Rock Climbing Guide \u2014 China Highlights (https://www.chinahighlights.com/guilin/attraction/yangshuo-rock-climbing.htm)",
    "[12] Longji Rice Terraces Visitor Guide \u2014 China Discovery (https://www.chinadiscovery.com/guilin-tours/longji-rice-terraces.html)",
    "[13] Li River Cormorant Fishing \u2014 China Highlights (https://www.chinahighlights.com/guilin/attraction/li-river.htm)",
    "[14] Yangshuo Beer Fish Restaurant Guide \u2014 Top China Travel (https://www.topchinatravel.com/china-food-restaurant/yangshuo-beer-fish.htm)",
    "[15] Top Guilin Restaurants and Where to Eat \u2014 China Discovery (https://www.chinadiscovery.com/guangxi/guilin/guilin-restaurants.html)",
  ],
};
