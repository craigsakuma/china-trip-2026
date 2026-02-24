import type { CityProfile } from "@/types";

export const shangriLaProfile: CityProfile = {
  slug: "shangri-la",
  heroPhoto: { src: "/photos/shangri-la/_hero.jpg", alt: "Songzanlin Monastery in Shangri-La, Yunnan", credit: "Colin W" },
  executiveSummary: [
    "Shangri-La (formerly Zhongdian) sits at 3,200 meters on the eastern edge of the Tibetan Plateau in northwest Yunnan, offering the most accessible gateway to authentic Tibetan culture in China without the bureaucratic hurdle of a Tibet Travel Permit. October is the ideal month: golden larch forests blaze across the surrounding mountains, the air is dry and crystalline, and the massive Songzanlin Monastery complex gleams against cobalt skies. Nights are cold (mid-20s\u00b0F) but days are bright and manageable in layers, and the thin crowds mean you'll share monastery courtyards with monks and pilgrims rather than tour groups [1].",
    "The town operates at two altitudes of experience: the spiritual and the sensory. Songzanlin Monastery \u2014 a 300-year-old Tibetan Buddhist complex housing 700 monks \u2014 anchors the spiritual side, while Pudacuo National Park offers genuine wilderness hiking through old-growth forests, alpine meadows, and glacial lakes ringed with autumn color. The surrounding countryside of yak-dotted grasslands and scattered Tibetan farmhouses feels like a different country entirely from the China of bullet trains and skyscrapers [2].",
    "The food reflects this cultural crossroads: yak butter tea, tsampa (roasted barley flour), Tibetan hotpot with yak meat and wild mushrooms, and Yunnan-influenced dishes featuring local herbs and highland ingredients. Shangri-La rewards travelers who want to slow down, breathe thin mountain air, and experience a living culture that has endured for centuries in one of the most dramatic landscapes on earth [3].",
  ],
  famousFor: [
    "Songzanlin Monastery",
    "Pudacuo National Park",
    "Tibetan culture",
    "golden larch autumn colors",
    "yak butter tea",
    "high-altitude scenery",
    "Tibetan hotpot",
  ],
  whyItFits: [
    "Authentic Tibetan Buddhist culture without permit requirements",
    "World-class autumn scenery with golden larch forests and alpine lakes",
    "Genuine wilderness hiking in Pudacuo National Park",
    "Distinctive Tibetan cuisine unlike anywhere else in China",
    "Off-the-beaten-path atmosphere with far fewer tourists than Lhasa",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 61,
      avgLow: 37,
      rainChance: 20,
      precip: 0.6,
      sunrise: "7:10 AM",
      sunset: "6:50 PM",
      conditions: "Sunny days, cold nights; autumn color begins; dry season starting [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 57,
      avgLow: 32,
      rainChance: 12,
      precip: 0.3,
      sunrise: "7:18 AM",
      sunset: "6:35 PM",
      conditions: "Peak golden larch season; crystal-clear skies; frost common at dawn",
    },
    {
      period: "Late Oct",
      avgHigh: 53,
      avgLow: 27,
      rainChance: 8,
      precip: 0.2,
      sunrise: "7:26 AM",
      sunset: "6:22 PM",
      conditions: "Cold and dry; snow possible on high passes; brilliant visibility",
    },
  ],
  whatToPack:
    "Serious layers for 27-61\u00b0F swings. Down jacket or heavy fleece for mornings and evenings, sunscreen and sunglasses (intense UV at 3,200m), comfortable hiking shoes, hat and gloves for early mornings. Altitude sickness medication (acetazolamide) recommended.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "dukezong-old-town",
      name: "Dukezong Old Town",
      topPick: true,
      description:
        "The reconstructed Tibetan old town (rebuilt after a devastating 2014 fire) sits on a hillside centered around the enormous golden prayer wheel at Guishan Temple. Cobblestone streets wind between Tibetan-style stone and timber buildings housing guesthouses, small restaurants, and craft shops. Despite the reconstruction, the atmosphere at dawn and dusk \u2014 when monks chant and prayer flags flutter \u2014 is genuinely moving [4].",
      whyItFitsUs:
        "Most atmospheric base for exploring Shangri-La. Walking distance to everything in town. Multiple Tibetan-style guesthouses with courtyard gardens and mountain views. The giant prayer wheel and monastery views at sunset are unforgettable.",
      nearby:
        "Guishan Temple / Giant Prayer Wheel (immediate), Songzanlin Monastery (10 min taxi), Napa Lake (20 min taxi)",
      hotels:
        "The Ritz-Carlton Shangri-La (luxury, edge of old town), Songtsam Shangri-La Lodge (boutique Tibetan-style, top pick for atmosphere), Kevin's Trekker Inn (budget-friendly with great local knowledge)",
    },
    {
      slug: "songzanlin-monastery-area",
      name: "Songzanlin Monastery Area",
      topPick: false,
      description:
        "The area surrounding the monastery complex, about 5 km north of old town. A few guesthouses sit near the monastery walls, offering the most immersive experience \u2014 you can hear morning chanting from your room and watch monks walking to prayer at dawn.",
      whyItFitsUs:
        "Ideal for travelers who want maximum monastery immersion. Quieter and more contemplative than old town. Early morning access before tour groups arrive.",
      nearby:
        "Songzanlin Monastery (immediate), Dukezong Old Town (10 min taxi), Napa Lake (15 min taxi)",
      hotels:
        "Songtsam Retreat at Songzanlin (upscale Tibetan lodge with monastery views \u2014 the most atmospheric lodging in Shangri-La)",
    },
    {
      slug: "napa-lake-ringha-countryside",
      name: "Napa Lake / Ringha Countryside",
      topPick: false,
      description:
        "The pastoral grasslands and wetlands surrounding Napa Lake (Napahai), about 8 km northwest of town. Yaks graze on golden meadows, Tibetan farmhouses dot the landscape, and migratory black-necked cranes arrive in October. This is where Shangri-La earns its name [5].",
      whyItFitsUs:
        "The countryside experience \u2014 horseback riding, farm visits, and a pace of life that feels centuries removed from modern China. Best for travelers with at least 3 days who want to go deeper.",
      nearby:
        "Napa Lake (immediate), Dukezong Old Town (15 min taxi), Songzanlin Monastery (20 min taxi)",
      hotels:
        "Banyan Tree Ringha (luxury tented lodges and Tibetan suites amid farmland \u2014 extraordinary splurge), local Tibetan family homestays",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "songzanlin-monastery",
      name: "Songzanlin Monastery",
      topPick: true,
      description:
        'Yunnan\'s largest Tibetan Buddhist monastery complex, often called the "Little Potala Palace." Built in 1679 by the Fifth Dalai Lama, this sprawling hilltop complex houses approximately 700 monks across multiple halls, living quarters, and prayer rooms. The golden-roofed main halls contain extraordinary murals, thangka paintings, and a sacred atmosphere of burning juniper incense and murmured mantras [2].',
      time: "2-3 hours (half day with Tibetan guide)",
      location:
        "5 km north of Dukezong Old Town. 10 min by taxi or local bus",
      cost: "$13/p ($13 entrance, includes shuttle bus within complex)",
      tips: [
        "Hire a local Tibetan guide ($40-60 for group) who can explain the Buddhist iconography, monastery history, and daily monastic life",
        "Arrive at 8:00 AM before tour buses \u2014 the morning chanting sessions are profoundly atmospheric",
        "Walk clockwise around the complex (following Tibetan Buddhist tradition)",
        "The reflecting lake below the monastery offers the classic postcard photo at dawn [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "pudacuo-national-park",
      name: "Pudacuo National Park",
      topPick: true,
      description:
        "China's first national park meeting IUCN standards, covering 1,300 square kilometers of old-growth forest, alpine lakes, and subalpine meadows at 3,500-4,200m elevation. The two main lakes \u2014 Shudu and Bita \u2014 are surrounded by dense spruce and fir forest that gives way to golden larch groves in October. Wildlife includes Yunnan snub-nosed monkeys, though sightings are rare [6].",
      time: "Full day (4-6 hours in park, plus 45 min each way from town)",
      location:
        "22 km east of Shangri-La town. 45 min by taxi or arranged transport",
      cost: "$28/p ($28 entrance including park shuttle bus)",
      tips: [
        "October is the best month \u2014 golden larches reflected in turquoise lakes create extraordinary scenery",
        "Walk the boardwalk trails at both Shudu Lake (3.3 km) and Bita Lake (4.4 km) for the full experience",
        "Bring layers \u2014 the park sits at 3,500m+ and temperatures can be 10\u00b0F colder than town",
        "Take the park shuttle between sections but walk the trails themselves rather than riding [6]",
      ],
      priceTier: 2,
    },
    {
      slug: "dukezong-old-town-and-giant-prayer-wheel",
      name: "Dukezong Old Town and Giant Prayer Wheel",
      topPick: true,
      description:
        "The ancient Tea Horse Road trading post, rebuilt in Tibetan architectural style after the 2014 fire. The hilltop Guishan Temple features a massive 21-meter golden prayer wheel (one of the world's largest) that requires several people working together to spin. The surrounding old town of cobblestone lanes, prayer flag-draped buildings, and small temples comes alive at dusk [4].",
      time: "2-3 hours (evening stroll and sunset)",
      location:
        "Central Shangri-La, Dukezong district",
      cost: "Free",
      tips: [
        "Climb to the prayer wheel at sunset for panoramic views over the old town and surrounding mountains",
        "Spinning the giant prayer wheel is a communal effort \u2014 join locals and pilgrims who gather in the evening",
        "Early morning (7-8 AM) offers the most authentic atmosphere before shops open",
        "Visit the Thangka painting workshops in the old town for genuine Tibetan art [4]",
      ],
      priceTier: 0,
    },
    {
      slug: "napa-lake-grasslands",
      name: "Napa Lake (Napahai) Grasslands",
      topPick: false,
      description:
        "A seasonal wetland and grassland at 3,270m where yaks and horses graze against a backdrop of snow-dusted peaks. In October, the grasses turn golden, migratory black-necked cranes begin arriving, and the lake reflects the surrounding mountains. The area is home to scattered Tibetan farming communities [5].",
      time: "Half day (2-4 hours by bike or horseback)",
      location:
        "8 km northwest of Shangri-La town. 15 min by taxi",
      cost: "$5-15/p (bike rental $5, horseback riding $10-15/hr through local families)",
      tips: [
        "Rent a bike and ride the loop road around the lake \u2014 relatively flat terrain despite the altitude",
        "Horseback riding is best arranged through local Tibetan families rather than tourist operators",
        "Late afternoon light on the golden grasslands is spectacular for photography",
        "Watch for black-necked cranes in late October (a protected species considered sacred by Tibetans) [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "balagezong-grand-canyon",
      name: "Balagezong Grand Canyon",
      topPick: false,
      description:
        "A dramatic gorge carved through the mountains 80 km southeast of Shangri-La, with towering cliff walls, a glass skywalk, and a remote Tibetan village (Balagezong Village) perched at 3,200m that was virtually inaccessible until 2008. The canyon offers genuine hiking through varied terrain from subtropical to alpine [7].",
      time: "Full day (1.5 hrs each way by car, 3-4 hrs exploring)",
      location:
        "80 km southeast of Shangri-La. 1.5 hours by car",
      cost: "$30/p ($22 entrance + $25/3 shared transport)",
      tips: [
        "The canyon road is spectacular but winding \u2014 not ideal for motion-sickness prone travelers",
        "Visit the ancient Tibetan village at the top for a glimpse of pre-modern highland life",
        "Autumn colors in the canyon are stunning in mid-to-late October [7]",
        "Combine with a hot spring soak at the canyon entrance area",
      ],
      priceTier: 2,
    },
    {
      slug: "tibetan-family-visit-and-yak-butter-tea",
      name: "Tibetan Family Visit and Yak Butter Tea Ceremony",
      topPick: true,
      description:
        "A visit to a traditional Tibetan farmhouse in the countryside around Shangri-La, where a local family demonstrates daily life: churning yak butter tea, making tsampa, tending yaks, and explaining Tibetan customs around the central hearth. These visits offer genuine cultural exchange rather than staged performance [3].",
      time: "2-3 hours",
      location:
        "Tibetan villages around Napa Lake or Ringha area, 15-30 min from town",
      cost: "$15-25/p (arranged through guesthouse or local guide)",
      tips: [
        "Arrange through your guesthouse or a local Tibetan guide for a genuine family interaction",
        "Try yak butter tea with an open mind \u2014 the salty, rich flavor is an acquired taste but deeply warming at altitude",
        "Bring a small gift (fruit, tea, or snacks for children) as a cultural courtesy",
        "Ask about Tibetan sky burial traditions, prayer flag customs, and the significance of the hearth [3]",
      ],
      priceTier: 1,
    },
    {
      slug: "shika-snow-mountain",
      name: "Shika Snow Mountain (Shika Xueshan)",
      topPick: false,
      description:
        "A 4,449m peak accessible by gondola to 4,100m, with panoramic views of the surrounding Tibetan plateau, Haba Snow Mountain, and (on clear days) the distant Meili Snow Mountains. The gondola ride itself passes through forests of spruce, fir, and golden larch. A short hike from the upper station reaches a viewpoint platform [8].",
      time: "Half day (3-4 hours including gondola and hiking)",
      location:
        "Shangri-La Ski Resort area, 20 min southwest of town by taxi",
      cost: "$30/p ($22 gondola + $8 entrance)",
      tips: [
        "Go on a clear morning for best visibility \u2014 clouds often build by afternoon",
        "The altitude at the top (4,100m) is significant \u2014 move slowly and watch for altitude sickness symptoms",
        "Bring warm layers \u2014 temperatures at the summit can be 20\u00b0F colder than town",
        "The golden larch forests along the gondola route peak in mid-October [8]",
      ],
      priceTier: 2,
    },
    {
      slug: "songzanlin-monastery-kora",
      name: "Songzanlin Monastery Kora (Circumambulation Walk)",
      topPick: false,
      description:
        "The traditional pilgrim's circuit around the outer walls of Songzanlin Monastery, following the path Tibetan devotees walk while spinning prayer wheels and reciting mantras. The 3 km route passes through pine forest, past prayer flag arrays, and alongside the monastery's reflecting lake. Far more contemplative than the interior visit [2].",
      time: "1-1.5 hours",
      location:
        "Songzanlin Monastery perimeter, 5 km north of old town",
      cost: "Free (no ticket required for the outer kora path)",
      tips: [
        "Walk clockwise, following Tibetan Buddhist tradition",
        "Early morning is best \u2014 join local pilgrims making their daily circuit",
        "Spin each prayer wheel you pass with your right hand",
        "The reflecting lake on the south side offers the most iconic monastery views [2]",
      ],
      priceTier: 0,
    },
    {
      slug: "thangka-painting-workshop",
      name: "Thangka Painting Workshop",
      topPick: false,
      description:
        "Hands-on introduction to the centuries-old Tibetan Buddhist art of thangka painting. Working with mineral pigments and traditional brushes, you'll learn the precise iconographic rules governing Buddha figures, mandalas, and sacred symbols under the guidance of a trained Tibetan artist [4].",
      time: "2-3 hours",
      location:
        "Studios in Dukezong Old Town or near Songzanlin Monastery",
      cost: "$20-35/p (materials included)",
      tips: [
        "Look for studios run by monks or artists trained at Songzanlin Monastery",
        "The mineral pigments used are the same as those in monastery murals \u2014 ground from lapis lazuli, malachite, and cinnabar",
        "Take your unfinished piece home as a meaningful souvenir",
        "Smaller studios (2-4 students) offer far better instruction than tourist-oriented workshops",
      ],
      priceTier: 2,
    },
    {
      slug: "white-water-terrace-baishuitai",
      name: "White Water Terrace (Baishuitai)",
      topPick: false,
      description:
        "Natural limestone terraces formed over millennia by calcium-rich spring water cascading down a mountainside, creating white, shallow pools that look like a frozen waterfall. Sacred to the local Naxi people and considered the birthplace of Dongba pictographic writing. Remote location means very few visitors [9].",
      time: "Full day (2.5 hrs each way by car, 2 hrs on site)",
      location:
        "101 km southeast of Shangri-La, near Sanba township",
      cost: "$15/p ($4 entrance + $33/3 shared transport)",
      tips: [
        "The long drive passes through stunning mountain scenery and Tibetan/Naxi villages",
        "Best combined with a stop at a Naxi village en route",
        "Wear shoes with good grip \u2014 the wet limestone terraces are slippery",
        "The site is sacred to Naxi people \u2014 be respectful and avoid climbing on restricted areas [9]",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Tibetan —
    {
      slug: "silent-holy-stones-tibetan-restaurant",
      name: "Silent Holy Stones Tibetan Restaurant",
      chineseName: "\u9759\u5b89\u5c45\u85cf\u9910\u5385",
      category: "Tibetan",
      topPick: true,
      location:
        "Dukezong Old Town, near the giant prayer wheel",
      priceRange: "$6-12/p",
      cuisine: "Authentic Tibetan home cooking",
      description:
        "A cozy Tibetan family-run restaurant in the old town serving genuine home-style Tibetan dishes in a warmly decorated space with thangka paintings and prayer flags. The yak meat dishes and butter tea are excellent, and the owners are happy to explain Tibetan food traditions [3].",
      reviews:
        "Consistently praised for authenticity and warmth. Yak steak and tsampa rated highly. Some visitors find the flavors unfamiliar but rewarding. Small space, arrive early for dinner.",
      whatToOrder:
        "Yak steak, yak butter tea, tsampa (try it mixed with butter tea), yak meat momos (dumplings), dried yak jerky as a snack.",
      bestFor: "Either meal; dinner for atmosphere",
      priceTier: 1,
    },
    {
      slug: "lhasa-tibetan-hotpot",
      name: "Lhasa Tibetan Hotpot",
      chineseName: "\u62c9\u8428\u85cf\u5f0f\u706b\u9505",
      category: "Tibetan",
      topPick: true,
      location:
        "Dukezong Old Town, Changzheng Road area",
      priceRange: "$8-15/p",
      cuisine: "Tibetan-style yak hotpot",
      description:
        "Tibetan hotpot differs from Sichuan or Beijing versions: a mild, bone-broth base with yak meat, highland mushrooms, potato, radish, and leafy greens. The yak meat is leaner and more flavorful than beef, and the mushrooms (chanterelle, matsutake in season) add extraordinary depth [3].",
      reviews:
        "Best hotpot in Shangri-La according to multiple sources. Yak meat quality is outstanding. The communal experience around the pot is perfect for cold October evenings.",
      whatToOrder:
        "Yak meat hotpot (order multiple cuts), wild mushroom platter, highland potato, handmade noodles to finish, yak butter tea or barley wine.",
      bestFor: "Dinner \u2014 hotpot is quintessentially an evening social meal",
      priceTier: 1,
    },
    {
      slug: "norbu-tibetan-restaurant",
      name: "Norbu Tibetan Restaurant",
      chineseName: "\u8bfa\u5e03\u85cf\u9910",
      category: "Tibetan",
      topPick: false,
      location:
        "Dukezong Old Town, near Moonlight Square",
      priceRange: "$5-10/p",
      cuisine: "Tibetan and Nepali fusion",
      description:
        "A popular traveler-friendly spot blending Tibetan staples with Nepali-influenced dishes \u2014 curries, dal, and naan alongside traditional momos and thukpa (Tibetan noodle soup). Good English menu and a rooftop terrace with old town views.",
      reviews:
        "Reliable, affordable, and welcoming. Momos and thukpa get best marks. Some feel the fusion dishes are less authentic, but the Tibetan core menu is solid.",
      whatToOrder:
        "Momos (steamed or fried), thukpa noodle soup, yak curry, masala chai, banana pancake for breakfast.",
      bestFor: "Lunch or breakfast; rooftop terrace best at midday sun",
      priceTier: 1,
    },

    // — Yunnan Regional —
    {
      slug: "arro-khampa-restaurant",
      name: "Arro Khampa Restaurant",
      chineseName: "\u963F\u82E5\u5EB7\u5DF4",
      category: "Yunnan Regional",
      topPick: true,
      location:
        "Dukezong Old Town, central location near Moonlight Square",
      priceRange: "$10-18/p",
      cuisine: "Elevated Tibetan-Yunnan fusion",
      description:
        "The most polished dining experience in Shangri-La, blending Tibetan and Yunnan ingredients with more refined presentation. Wild mushroom dishes are exceptional in October (late season for matsutake and chanterelles). Atmospheric stone-and-timber interior with Tibetan art [3].",
      reviews:
        "Widely considered the best restaurant in Shangri-La. Mushroom dishes and yak steak praised universally. Pricier than other local options but excellent value for quality. Reservations recommended for dinner.",
      whatToOrder:
        "Wild mushroom stir-fry (seasonal), yak steak with Tibetan spices, highland barley risotto, roasted highland vegetables, Yunnan pu-erh tea.",
      bestFor: "Dinner; reserve ahead",
      priceTier: 1,
    },
    {
      slug: "wild-mushroom-hotpot-street-stalls",
      name: "Wild Mushroom Hotpot Street Stalls",
      chineseName: "\u91CE\u751F\u83CC\u706B\u9505",
      category: "Yunnan Regional",
      topPick: false,
      location:
        "Along Changzheng Road and side streets near old town",
      priceRange: "$4-8/p",
      cuisine: "Yunnan-style wild mushroom hotpot",
      description:
        "Small local stalls and family restaurants serving Yunnan's famous wild mushroom hotpot \u2014 a chicken bone broth loaded with a dozen varieties of foraged highland mushrooms. October is the tail end of mushroom season, and the selection can be extraordinary [3].",
      reviews:
        "Flavors are deeply earthy and unlike any mushroom dish outside Yunnan. Local knowledge essential to identify the best stalls. Language barrier is real \u2014 point and nod.",
      whatToOrder:
        "Mixed wild mushroom hotpot (let the owner choose the mushrooms), add potato and greens, finish with rice noodles in the broth.",
      bestFor: "Lunch or early dinner",
      priceTier: 1,
    },
    {
      slug: "tibetan-breakfast-stalls",
      name: "Tibetan Breakfast Stalls",
      chineseName: "\u85CF\u5F0F\u65E9\u9910",
      category: "Street Food",
      topPick: false,
      location:
        "Morning market area near Dukezong Old Town entrance",
      priceRange: "$1-3/p",
      cuisine: "Traditional Tibetan breakfast",
      description:
        "Small stalls and market vendors serving the traditional Tibetan morning meal: yak butter tea, tsampa (roasted barley flour mixed with butter tea into a dough), and freshly fried bread. Simple, hearty, and deeply warming at altitude on cold October mornings.",
      reviews:
        "An essential cultural experience rather than a culinary highlight by Western standards. Yak butter tea is an acquired taste (salty, rich, slightly funky). The fried bread is universally appealing.",
      whatToOrder:
        "Yak butter tea, tsampa, fried bread (sha bhaley), sweet milk tea if butter tea proves too challenging.",
      bestFor: "Breakfast, 7:00-9:00 AM",
      priceTier: 1,
    },

    // — Chinese —
    {
      slug: "sichuan-yunnan-family-kitchen",
      name: "Sichuan-Yunnan Family Kitchen",
      chineseName: "\u5DDD\u6ED1\u4EBA\u5BB6",
      category: "Chinese",
      topPick: false,
      location:
        "New town area, Tuanjie Road",
      priceRange: "$4-8/p",
      cuisine: "Sichuan and Yunnan home cooking",
      description:
        "A no-frills local restaurant in the new town area serving the kind of food Shangri-La's Han Chinese residents eat daily \u2014 stir-fried dishes, mapo tofu, dry pot, and crossing-the-bridge noodles. A welcome change of pace from Tibetan fare if you're staying multiple days.",
      reviews:
        "Generous portions, authentic flavors, rock-bottom prices. No English menu \u2014 use a translation app. Popular with locals, which is always a good sign.",
      whatToOrder:
        "Mapo tofu, dry pot chicken, crossing-the-bridge noodles, stir-fried highland greens, cold beer.",
      bestFor: "Lunch",
      priceTier: 1,
    },
    {
      slug: "songtsam-lodge-restaurant",
      name: "Songtsam Lodge Restaurant",
      chineseName: "\u677E\u8D5E\u9152\u5E97\u9910\u5385",
      category: "Splurge",
      topPick: false,
      location:
        "Songtsam Shangri-La Lodge, edge of Dukezong Old Town",
      priceRange: "$25-45/p",
      cuisine: "Elevated Tibetan and Yunnan cuisine",
      description:
        "The restaurant at the Songtsam boutique hotel group's flagship lodge offers the most refined dining in the region \u2014 Tibetan and Yunnan ingredients prepared with careful technique and beautiful presentation. The yak tartare and wild mushroom dishes are standouts. Elegant timber-and-stone dining room with mountain views.",
      reviews:
        "Exceptional quality and service by Shangri-La standards. The most expensive option in town but justified by ingredient quality and atmosphere. Open to non-guests with reservation.",
      whatToOrder:
        "Chef's tasting menu (seasonal), yak tartare, wild mushroom soup, highland lamb, Yunnan pu-erh tea pairing.",
      bestFor: "Dinner; special occasion meal",
      priceTier: 2,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Taxis: Cheap and plentiful within town ($1-3 for most rides). Agree on price before departing for longer trips.",
      "Walking: Dukezong Old Town is compact and walkable. The old town to Songzanlin Monastery is too far to walk (5 km) \u2014 take a taxi.",
      "Day trips: Arrange private cars through your guesthouse for Pudacuo, Balagezong, or White Water Terrace. Negotiate price in advance.",
    ],
    "Altitude & Health": [
      "Shangri-La sits at 3,200m (10,500 ft). Altitude sickness is a real concern \u2014 headache, nausea, and shortness of breath are common on day one.",
      "Spend at least one day acclimatizing before strenuous hiking. Drink plenty of water. Avoid alcohol on the first night.",
      "Consider acetazolamide (Diamox) \u2014 consult your doctor before the trip. Arriving from lower-altitude Lijiang (2,400m) helps with gradual acclimatization.",
    ],
    "Food & Dining": [
      "Yak butter tea is served everywhere \u2014 try it at least once, even if the salty/rich flavor is unfamiliar. Sweet milk tea is the milder alternative.",
      "Wild mushrooms are a regional specialty but require trust \u2014 eat only at established restaurants, never forage independently.",
      "Tipping: Not expected. Most restaurants are family-run and appreciate kind words more than tips.",
    ],
    "Money & Communication": [
      "Cash is more important here than in major Chinese cities \u2014 some smaller stalls and rural areas don't accept mobile payment. Bring cash backup.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in China.",
      "Language: Very limited English outside tourist-oriented guesthouses. Download offline Chinese translation before arriving.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Best visited as part of a Yunnan circuit: Kunming \u2192 Dali \u2192 Lijiang \u2192 Shangri-La, allowing gradual altitude gain.",
      "Shangri-La Diqing Airport has flights to/from Kunming (1 hr) and Chengdu \u2014 useful if short on time.",
      "No Tibet Travel Permit required \u2014 Shangri-La is in Yunnan province and freely accessible to all travelers.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Shangri-La October Weather \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/shangri-la/weather-in-october.html)",
    "[2] Songzanlin Monastery Guide \u2014 China Highlights (https://www.chinahighlights.com/shangri-la/attraction/songzanlin-monastery.htm)",
    "[3] Shangri-La Food and Culture Guide \u2014 Lost Plate (https://lostplate.com/shangri-la-food-guide/)",
    "[4] Dukezong Old Town Visitor Guide \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/shangri-la/dukezong-old-town.html)",
    "[5] Napa Lake (Napahai) Guide \u2014 China Highlights (https://www.chinahighlights.com/shangri-la/attraction/napahai-lake.htm)",
    "[6] Pudacuo National Park Guide \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/shangri-la/pudacuo-national-park.html)",
    "[7] Balagezong Grand Canyon \u2014 Yunnan Adventure Travel (https://www.yunnanadventuretravel.com/balagezong-grand-canyon/)",
    "[8] Shika Snow Mountain Guide \u2014 China Highlights (https://www.chinahighlights.com/shangri-la/attraction/shika-snow-mountain.htm)",
    "[9] White Water Terrace (Baishuitai) \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/shangri-la/white-water-terrace.html)",
  ],
};
