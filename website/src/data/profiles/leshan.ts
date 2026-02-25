import type { CityProfile } from "@/types";

export const leshanProfile: CityProfile = {
  slug: "leshan",
  heroPhoto: { src: "/photos/leshan/_hero.jpg", alt: "Leshan Giant Buddha carved into riverside cliff", credit: "王计" },
  executiveSummary: [
    'Leshan sits at the confluence of three rivers in southern Sichuan, anchored by the world\'s largest stone Buddha \u2014 a 71-meter colossus carved into a riverside cliff over 90 years during the Tang Dynasty (713-803 AD). But the real draw is what rises behind it: Mount Emei, one of China\'s four sacred Buddhist mountains, where mist-shrouded trails wind through ancient forests past centuries-old monasteries to the Golden Summit at 3,079 meters. October delivers the mountain\'s most dramatic season \u2014 golden ginkgo and crimson maple blanket the lower slopes, clouds pool in the valleys below, and the rare "Buddha light" (a circular rainbow phenomenon) appears almost daily at the summit [1].',
    "The two-day hike up Mount Emei is the centerpiece experience: ascending through ecological zones from subtropical forest to subalpine meadow, passing working monasteries where monks have chanted for over a thousand years. Overnight stays in monastery guesthouses offer a rare window into living Buddhist culture \u2014 wake to morning sutras, share vegetarian meals with monks, and watch sunrise paint the sea of clouds gold from the Golden Summit. The Leshan Giant Buddha, best appreciated first by river boat and then by descending the narrow cliff-side Nine Turns Stairway beside the statue itself, provides the perfect complement \u2014 a half-day of awe before the mountain absorbs you [2].",
    "Leshan's food scene is a revelation even by Sichuan standards. The city claims to be the true birthplace of bobo ji (cold spicy chicken skewers in a clay pot), and its Xiba tofu \u2014 made with mineral spring water from a 400-year-old tradition \u2014 is famous across the province. Zhanggong Bridge food street comes alive at night with qiaojiao beef soup, sweet-skin duck, and tofu brain in every variation. This is a city where you eat extraordinarily well for almost nothing, surrounded by some of China's most sacred and spectacular scenery [3].",
  ],
  famousFor: [
    "Leshan Giant Buddha (world's largest stone Buddha)",
    "Mount Emei (sacred Buddhist mountain)",
    "Bobo ji (cold spicy skewers)",
    "Xiba tofu",
    "Buddhist monastery culture",
    "Autumn mountain foliage",
    "Sichuan cuisine",
  ],
  whyItFits: [
    "World-class multi-day mountain hiking on sacred Mount Emei with monastery overnights",
    "Extraordinary Buddhist history spanning 1,500+ years across temples and the Giant Buddha",
    "Leshan food scene rivals Chengdu at a fraction of the price",
    "Peak autumn foliage on Mount Emei trails in October",
    "Genuine cultural immersion staying overnight in working monasteries",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 73,
      avgLow: 59,
      rainChance: 30,
      precip: 1.2,
      sunrise: "6:42 AM",
      sunset: "6:30 PM",
      conditions: "Warm and humid; lingering rain possible; lower mountain trails lush and green",
    },
    {
      period: "Mid Oct",
      avgHigh: 68,
      avgLow: 55,
      rainChance: 25,
      precip: 0.9,
      sunrise: "6:52 AM",
      sunset: "6:15 PM",
      conditions: "Cooling; autumn foliage begins mid-mountain; best visibility for Golden Summit sunrise [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 63,
      avgLow: 50,
      rainChance: 20,
      precip: 0.6,
      sunrise: "7:02 AM",
      sunset: "6:02 PM",
      conditions: "Crisp; peak foliage on lower slopes; Golden Summit near freezing at dawn",
    },
  ],
  whatToPack:
    "Layers for 30-73\u00b0F range (Golden Summit can hit freezing at dawn even when Leshan city is 60\u00b0F+). Rain jacket, sturdy hiking boots with ankle support for steep stone steps, fleece or down jacket for summit, headlamp for pre-dawn sunrise hike, walking poles recommended.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "leshan-old-town-zhanggongqiao",
      name: "Leshan Old Town / Zhanggong Bridge Area",
      topPick: true,
      description:
        "The historic center of Leshan clustered around the confluence of the Min, Dadu, and Qingyi rivers. Zhanggong Bridge food street is the beating culinary heart of the city \u2014 a dense strip of restaurants, street vendors, and late-night stalls serving Leshan's famous local dishes. The old town retains genuine neighborhood character with tea houses, riverside walks, and morning markets [3].",
      whyItFitsUs:
        "Walking distance to the Giant Buddha scenic area and the best food in the city. Zhanggong Bridge food street is the single best place to eat in Leshan. Several comfortable hotels within a few blocks of both the Buddha and the food.",
      nearby:
        "Leshan Giant Buddha scenic area (10 min walk), Zhanggong Bridge food street (immediate), riverside promenade (5 min), ferry dock for Buddha boat tour (10 min)",
      hotels:
        "Hilton Garden Inn Leshan Shizhong (modern, reliable, central \u2014 top pick), Holiday Inn Express Leshan City Square (good value near food street)",
    },
    {
      slug: "emeishan-baoguo-temple-base",
      name: "Emeishan / Baoguo Temple Base Area",
      topPick: false,
      description:
        "The town at the foot of Mount Emei, built around the historic Baoguo Temple (the mountain's largest monastery). This is the staging area for the Mount Emei hike \u2014 hotels, hot spring resorts, gear shops, and restaurants catering to hikers and pilgrims. About 30 km from Leshan city [4].",
      whyItFitsUs:
        "Essential overnight base before or after the Mount Emei hike. Hot spring hotels here offer a perfect recovery after two days of mountain hiking. Quieter and more atmospheric than staying in Leshan city if the mountain is your focus.",
      nearby:
        "Baoguo Temple (5 min walk), Mount Emei visitor center and trailhead (10 min), Emeishan hot springs (immediate area), Leshan city (30 min by bus/taxi)",
      hotels:
        "Emeishan Hot Spring Hotel (traditional with natural hot springs), various guesthouses near Baoguo Temple gate",
    },
    {
      slug: "giant-buddha-scenic-area",
      name: "Giant Buddha Scenic Area",
      topPick: false,
      description:
        "The eastern bank of the Min River directly surrounding the Leshan Giant Buddha UNESCO site. A handful of hotels sit within walking distance of the scenic area entrance, offering the advantage of early-morning access before tour groups arrive. The area is quieter and more residential than downtown [2].",
      whyItFitsUs:
        "Best option for early access to the Giant Buddha before the crowds. Peaceful riverside setting. Trade-off is fewer restaurant options compared to the old town \u2014 but taxis to Zhanggong Bridge food street are cheap and quick.",
      nearby:
        "Leshan Giant Buddha north gate (5-10 min walk), Lingyun Temple (within scenic area), Oriental Buddha Capital (15 min walk), Leshan old town (15 min taxi)",
      hotels:
        "Sanjiangyue Holiday Hotel (within the scenic area, river views), Peace Inn Giant Buddha Branch (budget-friendly, close to entrance)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "leshan-giant-buddha",
      name: "Leshan Giant Buddha (Da Fo)",
      photo: { src: "/photos/leshan/leshan-giant-buddha.jpg", alt: "Leshan Giant Buddha (Da Fo), Leshan" },
      topPick: true,
      description:
        "The world's largest stone Buddha at 71 meters tall, carved into the cliff face where three rivers converge during the Tang Dynasty (713-803 AD). The scale is genuinely staggering \u2014 each ear is 7 meters long, each foot wide enough to seat 100 people. The Nine Turns Stairway descends along the cliff beside the statue from head to toe, offering an intimate perspective impossible from photographs. UNESCO World Heritage site since 1996 [2].",
      time: "3-4 hours (including boat view and cliff-side descent)",
      location:
        "Lingyun Mountain, east bank of the Min River. 3 km from Leshan city center",
      cost: "$11/p ($11 entrance). Boat tour extra ~$10-14/p",
      tips: [
        "Arrive at 7:30 AM opening to beat the crowds \u2014 the Nine Turns Stairway can have 2-3 hour waits by midday during October",
        "Take a river boat first for the iconic full-body view, then enter the scenic area and descend the stairway beside the statue [2]",
        "Book tickets online in advance through the official WeChat mini-program \u2014 October dates can sell out",
        "The Lingyun Temple complex above the Buddha's head is worth exploring and has far fewer visitors",
      ],
      priceTier: 1,
    },
    {
      slug: "mount-emei-two-day-hike",
      name: "Mount Emei Two-Day Hike to Golden Summit",
      photo: { src: "/photos/leshan/mount-emei-two-day-hike.jpg", alt: "Mount Emei Two-Day Hike to Golden Summit, Leshan" },
      topPick: true,
      description:
        "One of China's premier mountain treks: a two-day ascent of sacred Mount Emei (3,079m) through ancient forests draped in moss and mist, past working Buddhist monasteries where monks have practiced for over a millennium. The trail transitions from subtropical bamboo groves to subalpine meadows. October brings golden ginkgo, crimson maple, and the highest probability of witnessing the legendary 'Buddha light' at the summit \u2014 a circular rainbow halo cast by your own shadow into the clouds [1].",
      time: "2 full days (Day 1: 6-8 hrs hiking to Leidongping area; Day 2: 3-4 hrs to summit + descent by cable car and bus)",
      location:
        "Mount Emei, ~30 km from Leshan city. Trailhead at Wannian Temple or Baoguo Temple",
      cost: "$26/p ($26 entrance, valid 2 days). Cable car ~$9/p one-way. Monastery beds ~$4-7/night",
      tips: [
        "Start from Wannian Temple (take the tourist bus from Baoguo to Wannian parking lot, then cable car or hike up) for the most scenic route",
        "Stay overnight at Leidongping area for more comfortable hotels, or at a monastery like Xixiang Chi (Elephant Bathing Pool) for the authentic experience [4]",
        "Pack warm layers for the summit \u2014 temperatures at Golden Summit can be 30-40\u00b0F colder than the base",
        "Monkeys along the trail can be aggressive \u2014 do not carry visible food or plastic bags; purchase a bamboo walking stick from vendors at the base ($1-2)",
      ],
      priceTier: 2,
    },
    {
      slug: "golden-summit-sunrise",
      name: "Golden Summit Sunrise and Temples",
      photo: { src: "/photos/leshan/golden-summit-sunrise.jpg", alt: "Golden Summit Sunrise and Temples, Leshan" },
      topPick: true,
      description:
        "The climax of the Mount Emei experience. The Golden Summit (Jinding) at 3,079 meters features the 48-meter Samantabhadra Bodhisattva statue \u2014 the largest gold-plated Buddhist statue in China \u2014 surrounded by three temples. At dawn, the sea of clouds below ignites in gold and pink. On clear October mornings, you can see all the way to the snow-capped peaks of western Sichuan [5].",
      time: "2-3 hours (pre-dawn to mid-morning)",
      location:
        "Golden Summit (Jinding), Mount Emei, 3,079m elevation",
      cost: "Included with Mount Emei entrance ticket",
      tips: [
        "Stay at the Golden Summit hotel the night before or hike up from Leidongping in the dark (1.5-2 hrs with headlamp)",
        "Sunrise in mid-October is around 6:50 AM \u2014 arrive at the viewing platform by 6:15 AM",
        "The 'Buddha light' phenomenon (circular rainbow in the clouds) occurs most frequently in October and November [1]",
        "Descend via the Monorail to Wanfo Summit for a less crowded viewpoint",
      ],
      priceTier: 0,
    },
    {
      slug: "wannian-temple",
      name: "Wannian Temple (Ten Thousand Year Temple)",
      photo: { src: "/photos/leshan/wannian-temple.jpg", alt: "Wannian Temple (Ten Thousand Year Temple), Leshan" },
      topPick: false,
      description:
        "Mount Emei's oldest and most important monastery, founded in the 4th century AD during the Jin Dynasty. The highlight is the Brick Hall (Beamless Hall), a domed brick structure housing a 62-ton bronze Samantabhadra Bodhisattva riding a six-tusked white elephant \u2014 cast in 980 AD during the Song Dynasty. One of the finest bronze Buddhist statues in China [4].",
      time: "1.5-2 hours",
      location:
        "Mid-mountain, Mount Emei, at 1,020m elevation. Accessible by tourist bus + cable car from Baoguo Temple base",
      cost: "$1.40/p ($1.40 additional temple entrance beyond park ticket)",
      tips: [
        "This is the recommended starting point for the two-day summit hike",
        "The cable car from Wannian parking lot saves 2 hours of steep stairs if you want to conserve energy for the upper mountain",
        "The ancient trees surrounding the temple are stunning in October foliage",
        "Active monastery \u2014 visitors can observe morning chanting ceremonies around 6 AM",
      ],
      priceTier: 1,
    },
    {
      slug: "monastery-overnight-experience",
      name: "Monastery Overnight at Xixiang Chi (Elephant Bathing Pool)",
      topPick: true,
      description:
        "An overnight stay in one of Mount Emei's working Buddhist monasteries, sleeping in simple dormitory rooms, eating vegetarian meals prepared by monks, and waking to the sound of morning sutras echoing through misty forests. Xixiang Chi (Elephant Bathing Pool) at 2,070m is the most atmospheric choice \u2014 a 16th-century monastery perched on a mountain saddle with clouds rolling through the courtyards [4].",
      time: "Overnight (arrive by mid-afternoon, depart after breakfast)",
      location:
        "Xixiang Chi Monastery, Mount Emei, 2,070m elevation. Approximately 5-6 hours hiking from Wannian Temple",
      cost: "$4-7/p (dormitory bed). Vegetarian dinner and breakfast ~$3-4/p",
      tips: [
        "Bring a sleeping bag liner \u2014 monastery bedding is basic and rooms are unheated",
        "Arrive before 5 PM to settle in before dinner; evening prayers around 7 PM are deeply moving",
        "The vegetarian meals are simple but surprisingly flavorful \u2014 tofu, vegetables, rice, pickles",
        "This is the most culturally immersive experience on the mountain \u2014 a rare window into monastic life unchanged for centuries",
      ],
      priceTier: 1,
    },
    {
      slug: "giant-buddha-river-boat-tour",
      name: "Giant Buddha River Boat Tour",
      photo: { src: "/photos/leshan/giant-buddha-river-boat-tour.jpg", alt: "Giant Buddha River Boat Tour, Leshan" },
      topPick: false,
      description:
        "A 20-minute boat cruise on the Min River that provides the classic full-body frontal view of the Giant Buddha impossible to see from land. The boat pauses directly in front of the statue, revealing the full 71-meter scale against the cliff face. Best combined as a prelude to the cliff-side stairway visit [2].",
      time: "30-40 minutes (including boarding)",
      location:
        "Leshan Port / ferry dock, Leshan city waterfront. 10 min walk from old town",
      cost: "$14-21/p (boat ticket)",
      tips: [
        "Take the boat FIRST for the panoramic view, then visit the scenic area on foot for the close-up descent",
        "Morning light is best for photography (the Buddha faces east)",
        "Boats depart frequently but can be crowded in peak October \u2014 arrive early",
        "The boat view is especially worthwhile because the cliff-side stairway only shows the Buddha from the side",
      ],
      priceTier: 1,
    },
    {
      slug: "baoguo-temple",
      name: "Baoguo Temple \u2014 Mount Emei Base Temple",
      topPick: false,
      description:
        "The largest temple on Mount Emei and the official gateway to the sacred mountain, founded during the Ming Dynasty (16th century). Houses the Mount Emei Buddhist Association and a museum of Buddhist artifacts. The surrounding gardens with ancient ginkgo trees are spectacular in October when the leaves turn solid gold [4].",
      time: "1-1.5 hours",
      location:
        "Foot of Mount Emei, Emeishan city. Walking distance from base area hotels",
      cost: "$1/p ($1 entrance)",
      tips: [
        "Visit the evening before your mountain hike to orient yourself and enjoy the garden at sunset",
        "The ancient ginkgo trees near the entrance are over 400 years old \u2014 peak golden color in mid-to-late October",
        "The temple museum has an excellent collection of Buddhist art and calligraphy",
        "Incense and offerings can be purchased at the entrance \u2014 this is an active place of worship",
      ],
      priceTier: 1,
    },
    {
      slug: "zhanggong-bridge-food-street-crawl",
      name: "Zhanggong Bridge Food Street Crawl",
      topPick: true,
      description:
        "Leshan's legendary food street comes alive after dark with hundreds of vendors and restaurants serving the city's famous local specialties. This is not a sanitized tourist market \u2014 it's where Leshan locals eat, argue, and drink beer on plastic stools under bare lightbulbs. The concentration of authentic Sichuan street food rivals anything in Chengdu, at even lower prices [3].",
      time: "2-3 hours (evening)",
      location:
        "Zhanggong Bridge (Zhanggongqiao), Shizhong District, Leshan city center",
      cost: "$3-8/p (eat until you can't move)",
      tips: [
        "Arrive around 6-7 PM when stalls are firing up and crowds are building",
        "Must-try: bobo ji (cold spicy skewers), doufunao (tofu brain), qiaojiao beef, sweet-skin duck, grilled skewers",
        "Follow the crowds \u2014 the busiest stalls are the best stalls",
        "Bring cash for smaller vendors; larger restaurants accept WeChat/Alipay",
      ],
      priceTier: 1,
    },
    {
      slug: "xiba-ancient-town",
      name: "Xiba Ancient Town \u2014 Tofu Village",
      topPick: false,
      description:
        "A quiet riverside town 20 km from Leshan famous for its 400-year-old tofu-making tradition. The mineral-rich spring water produces tofu with a distinctive silky texture found nowhere else in Sichuan. Dozens of tofu restaurants line the main street, each preparing the bean curd in different styles \u2014 fried, steamed, stuffed, in soup, smoked, and fermented [3].",
      time: "Half day (2-3 hours in town + travel)",
      location:
        "Xiba Town, 20 km west of Leshan city. 40 min by local bus or taxi",
      cost: "$8-15/p (lunch + transport)",
      tips: [
        "Come for lunch \u2014 order a tofu banquet (tofu feast with 8-12 different preparations for ~$5-8/p)",
        "Watch tofu being made fresh with stone grinders and mineral spring water at the workshop near the bridge",
        "The town itself is a pleasant stroll along the river with traditional architecture",
        "Combine with a morning Giant Buddha visit for a full day",
      ],
      priceTier: 1,
    },
    {
      slug: "leshan-riverside-walk",
      name: "Leshan Riverside Walk and Tea Culture",
      topPick: false,
      description:
        "The promenade along the Min River where Leshan's relaxed Sichuan pace of life is most visible. Elderly locals play mahjong and drink tea in riverside tea houses, fishermen cast nets into the confluence of three rivers, and the Giant Buddha is visible across the water. Leshan's tea culture is unhurried and deeply social \u2014 the antithesis of a coffee shop [6].",
      time: "1-2 hours",
      location:
        "Min River waterfront, Leshan old town",
      cost: "Free (tea ~$1-2 at riverside tea houses)",
      tips: [
        "Best in late afternoon when the light softens and locals gather",
        "Sit at one of the open-air riverside tea houses, order a cup of locally grown green tea, and watch the river traffic",
        "The viewpoint looking across to the Giant Buddha cliff is free and uncrowded",
        "Pairs naturally with dinner at Zhanggong Bridge food street",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Bobo Ji (Leshan signature) —
    {
      slug: "yepopo-bobo-ji",
      name: "Yepopo Bobo Ji",
      chineseName: "\u53f6\u5a46\u5a46\u94b5\u94b5\u9e21",
      category: "Leshan Signature",
      topPick: true,
      location:
        "Shizhong District, near Zhanggong Bridge, Leshan city center",
      priceRange: "$4-7/p",
      cuisine: "Bobo ji (cold spicy chicken skewers in clay pot)",
      description:
        "One of Leshan's most revered bobo ji institutions. Chicken and vegetables threaded onto bamboo skewers, poached, then served cold in a clay pot brimming with spicy, numbing, deeply savory chili-oil broth. You grab skewers, the waiter counts sticks. Addictive, messy, quintessentially Leshan [3].",
      whatToOrder:
        "Bobo ji skewers (chicken, lotus root, potato, kelp, quail eggs), pair with cold beer and rice.",
      bestFor: "Lunch or early dinner",
      priceTier: 1,
    },
    {
      slug: "weixiao-bobo-ji",
      name: "WeiXiao Bobo Ji (Kaishui Ji)",
      chineseName: "\u80c3\u7b11\u00b7\u5f00\u6c34\u9e21\u94b5\u94b5\u9e21\u5e97",
      category: "Leshan Signature",
      topPick: false,
      location:
        "28 Jiaxiang Road, Shizhong District, Leshan",
      priceRange: "$5-8/p",
      cuisine: "Bobo ji and cold skewers with signature broth",
      description:
        "Popular local chain known for its rich, aromatic chili-oil broth. The 'kaishui ji' (boiled water chicken) is a Leshan preparation where poached chicken achieves extraordinary tenderness. Clean, bustling, and reliable [3].",
      whatToOrder:
        "Kaishui ji (poached whole chicken), bobo ji skewers, cold cucumber salad, beer.",
      bestFor: "Either meal; lunch less crowded",
      priceTier: 1,
    },

    // — Qiaojiao Beef —
    {
      slug: "gushixiang-qiaojiao-beef",
      name: "GuShiXiang Qiaojiao Beef",
      chineseName: "\u53e4\u5e02\u9999\u8df7\u811a\u725b\u8089",
      category: "Leshan Signature",
      topPick: true,
      location:
        "85 Guihua Road, Shizhong District, Leshan",
      priceRange: "$5-8/p",
      cuisine: "Qiaojiao beef soup pot \u2014 beef and offal in herbal broth",
      description:
        "Leshan's most famous qiaojiao beef restaurant. The dish originated when locals would sit cross-legged ('qiaojiao') on benches waiting for seats at packed beef soup shops. Rich herbal broth loaded with tender beef, tripe, tongue, and tendon served bubbling in clay pots. A recognized Intangible Cultural Heritage dish [3].",
      whatToOrder:
        "Mixed qiaojiao beef pot (beef + assorted offal), extra tendon, white rice, pickled vegetables on the side.",
      bestFor: "Lunch",
      priceTier: 1,
    },

    // — Tofu —
    {
      slug: "jiaosanjiao-doufunao",
      name: "JiaoSanJiao Doufunao",
      chineseName: "\u6405\u4e09\u6405\u8c46\u8150\u8111",
      category: "Street Food",
      topPick: true,
      location:
        "57 Dongdajie, Shizhong District, Leshan",
      priceRange: "$2-4/p",
      cuisine: "Doufunao (savory tofu brain/tofu jelly) \u2014 Leshan's signature breakfast",
      description:
        "Leshan's most iconic breakfast spot. Silky, custard-like tofu topped with a blizzard of condiments \u2014 chili oil, Sichuan peppercorn, crispy pork, peanuts, scallions, pickled vegetables, celery, and soy sauce. Each bowl is assembled to order. The texture and complexity are nothing like the bland tofu you know [3].",
      whatToOrder:
        "Doufunao with all toppings (just say 'quan jia' \u2014 'everything'), pair with youbing (fried bread) or mantou (steamed bun).",
      bestFor: "Breakfast (arrive 7-8 AM for peak atmosphere)",
      priceTier: 1,
    },

    // — Sichuan Classics —
    {
      slug: "zhanggongqiao-hotpot-alley",
      name: "Zhanggong Bridge Hotpot Alley",
      chineseName: "\u5f20\u516c\u6865\u706b\u9505",
      category: "Sichuan Hotpot",
      topPick: false,
      location:
        "Zhanggong Bridge food street, Shizhong District, Leshan",
      priceRange: "$8-15/p",
      cuisine: "Sichuan mala hotpot \u2014 multiple competing restaurants",
      description:
        "A dense cluster of competing hotpot restaurants on Leshan's main food street, each with bubbling vats of crimson chili oil in the window. Leshan hotpot tends slightly less aggressively numbing than Chongqing-style but with deeper, more complex herbal flavors. Pick the busiest one.",
      whatToOrder:
        "Half-and-half pot (mala + mild bone broth), sliced lamb, duck intestine, lotus root, potato, tofu skin, quail eggs. Finish with noodles in the broth.",
      bestFor: "Dinner (hotpot is a social evening ritual)",
      priceTier: 1,
    },
    {
      slug: "sweet-skin-duck-vendors",
      name: "Tianpi Ya (Sweet Skin Duck) Vendors",
      chineseName: "\u751c\u76ae\u9e2d",
      category: "Leshan Signature",
      topPick: false,
      location:
        "Multiple locations throughout Leshan old town and Zhanggong Bridge area",
      priceRange: "$3-6/p (half duck)",
      cuisine: "Sweet-skin duck \u2014 Leshan's signature poultry dish",
      description:
        "Whole ducks stewed in a proprietary sweet-savory glaze until the skin turns glossy, slightly sweet, and crackling-crisp while the meat stays tender and faintly spiced. Chopped to order with a cleaver on a wooden block and served cold or at room temperature. A beloved Leshan street food with no real equivalent elsewhere [3].",
      whatToOrder:
        "Half duck chopped (ban zhi ya), eat with rice or as a snack with beer.",
      bestFor: "Afternoon snack or dinner appetizer",
      priceTier: 1,
    },

    // — Mountain Food —
    {
      slug: "emeishan-monastery-vegetarian",
      name: "Mount Emei Monastery Vegetarian Meals",
      photo: { src: "/photos/leshan/emeishan-monastery-vegetarian.jpg", alt: "Mount Emei Monastery Vegetarian Meals, Leshan" },
      chineseName: "\u5c71\u4e0a\u7d20\u996e",
      category: "Buddhist Vegetarian",
      topPick: false,
      location:
        "Various monasteries along the Mount Emei trail (Wannian, Xixiang Chi, Leidongping)",
      priceRange: "$3-5/p (set meal)",
      cuisine: "Simple Buddhist vegetarian \u2014 tofu, vegetables, rice, pickles",
      description:
        "Monastery kitchens serve communal vegetarian meals at fixed times (typically 6 AM, 11:30 AM, 5:30 PM). The food is humble but surprisingly satisfying after hours of hiking \u2014 fresh mountain vegetables, braised tofu, pickled greens, steamed rice, and simple broth. Eating in silence alongside monks and pilgrims is part of the experience [4].",
      whatToOrder:
        "Set meal (no choice \u2014 you eat what the kitchen prepares). Accept everything offered.",
      bestFor: "During the Mount Emei hike (meal times are fixed)",
      priceTier: 1,
    },

    // — Xiba Tofu —
    {
      slug: "xiba-tofu-banquet",
      name: "Xiba Tofu Banquet Restaurants",
      chineseName: "\u897f\u575d\u8c46\u8150",
      category: "Regional Specialty",
      topPick: false,
      location:
        "Xiba Ancient Town, 20 km west of Leshan (multiple family-run restaurants on main street)",
      priceRange: "$5-10/p (full tofu banquet)",
      cuisine: "All-tofu feast \u2014 8-12 preparations of tofu made with mineral spring water",
      description:
        "A 400-year-old tofu-making tradition using Xiba's mineral-rich spring water produces bean curd of extraordinary silkiness. Family-run restaurants serve multi-course 'tofu banquets' where every dish features tofu in a different form \u2014 fried, smoked, stuffed with pork, in soup, cold-dressed, fermented, steamed, and as dessert. Remarkably inexpensive [3].",
      whatToOrder:
        "Full tofu banquet (doufu yan \u2014 tofu feast). Let the restaurant choose the preparations. Must-tries: smoked tofu, stuffed tofu, doufunao, cold-dressed tofu with chili oil.",
      bestFor: "Lunch (worth the 40-minute trip from Leshan)",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Leshan to Emeishan: 30-40 min by bus or taxi (~$7-10). Frequent public buses from Leshan bus station to Emeishan base.",
      "Chengdu to Leshan: High-speed rail from Chengdu South to Leshan station (1 hr, ~$10). Buses also available but slower.",
      "Within Leshan: The old town and Giant Buddha area are walkable. Taxis are cheap ($2-4 for most city rides). Download Didi (China's Uber).",
      "Mount Emei internal transport: Tourist buses run from Baoguo Temple to Wannian parking lot and Leidongping. Cable cars available at Wannian and Golden Summit.",
    ],
    "Food & Dining": [
      "Leshan is a 'food city' \u2014 the local cuisine is famously good even by Sichuan standards. Eat at local joints, not hotel restaurants.",
      "For 3 people, order 4-5 dishes family-style. Bobo ji is meant to be shared from the communal clay pot.",
      "Zhanggong Bridge food street peaks 6-9 PM. Multiple visits recommended \u2014 you cannot try everything in one night.",
      "Tipping: Not expected anywhere in mainland China.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are dominant. Set up international Alipay before the trip. Carry cash for mountain vendors and small street stalls.",
      "English menus: Extremely rare in Leshan. Use Google Translate camera mode or Pleco dictionary app. Point-and-order at busy stalls.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in China.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Giant Buddha tickets: Book online 1-3 days ahead via the official WeChat mini-program. October dates can sell out, especially weekends.",
      "Mount Emei entrance ticket: Valid for 2 days. Buy at the gate or online. Peak season (Apr-Nov) rate is 185 RMB (~$26).",
      "Monastery overnights: Cannot be reserved in advance \u2014 beds are first-come, first-served. Arrive by mid-afternoon to secure a spot.",
      "Altitude: Golden Summit is 3,079m (10,100 ft). Most healthy travelers are fine, but take it slow and stay hydrated. Leshan city is at river level (~400m).",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Mount Emei Weather & Best Time to Visit \u2014 China Discovery (https://www.chinadiscovery.com/hiking-mountain-climbing-tour/emei-shan-hike.html)",
    "[2] Leshan Giant Buddha Travel Guide \u2014 China Discovery (https://www.chinadiscovery.com/tour-leshan/leshan-weather.html)",
    "[3] Leshan Food Guide \u2014 China Discovery (https://www.chinadiscovery.com/tour-leshan/leshan-food.html)",
    "[4] Mount Emei Hiking Routes & Monastery Stays \u2014 Chengdu Tour Guide (https://www.chengdutourguide.com/mt-emei-hiking)",
    "[5] Mount Emei Golden Summit \u2014 China Odyssey Tours (https://www.chinaodysseytours.com/chengdu/mt-emei.html)",
    "[6] Leshan City Guide \u2014 Hi Leshan Official (http://www.hi-leshan.com/index.php?m=home&c=View&a=index&aid=808)",
    "[7] Zhanggong Bridge Food Street \u2014 China Wonders Guide (https://chinawondersguide.com/zhanggongqiao-sichuan-cuisine-leshan/)",
    "[8] Leshan Giant Buddha Tickets & Visiting Tips \u2014 Trip.com (https://us.trip.com/travel-guide/attraction/leshan/leshan-giant-buddha-76386/)",
    "[9] Xiba Tofu Village \u2014 PATA (https://www.pata.org/blog/fantastic-food-and-where-to-find-them-in-leshan)",
    "[10] Mount Emei Travel Guide \u2014 The China Journey (https://www.thechinajourney.com/mount-emei-travel-guide/)",
  ],
};
