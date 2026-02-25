import type { CityProfile } from "@/types";

export const lijiangProfile: CityProfile = {
  slug: "lijiang",
  heroPhoto: { src: "/photos/lijiang/_hero.jpg", alt: "Lijiang Old Town rooftops with mountain backdrop", credit: "Gilad Rom" },
  executiveSummary: [
    'Lijiang in October is Yunnan at its most cinematic — the rainy season has ended, skies turn a deep cobalt blue, and the Jade Dragon Snow Mountain gleams white against golden-leafed valleys. At 2,400 meters elevation, the air is crisp and dry, with daytime temperatures in the low 60s\u00b0F and nights dropping into the low 40s\u00b0F. The Naxi people, whose Dongba pictographic script is the world\'s last surviving hieroglyphic writing system, give Lijiang a cultural depth that goes far beyond its UNESCO-listed Old Town cobblestones [1]. With the right guide, what looks like a tourist-polished ancient town reveals layers of living Naxi tradition — from the elderly musicians performing 500-year-old Taoist-Confucian orchestral pieces to the Dongba priests still practicing shamanic rituals in surrounding villages.',
    "The real magic of Lijiang lies outside the Old Town walls. Tiger Leaping Gorge — one of the world's deepest river canyons — offers a two-day high trail hike that ranks among Asia's finest treks, with 3,000-meter vertical walls, crashing Jinsha River rapids below, and Haba Snow Mountain towering above [2]. Baisha village, the original seat of the Naxi kingdom before Lijiang existed, preserves extraordinary 15th-century Buddhist-Taoist-Tibetan fusion murals and a pace of life that feels decades removed from the Old Town's commercial buzz. The Jade Dragon Snow Mountain (5,596m), sacred to the Naxi people, offers accessible day trips to its glacial meadows and high-altitude viewpoints [3].",
    "Lijiang's food scene reflects its position at the crossroads of Naxi, Bai, Tibetan, and Yi cultures — yak hotpot, Naxi baba flatbread, chickpea jelly, wild mushroom stews, and grilled river fish form a cuisine found nowhere else in China. The city works best as a 3-4 day base: one day for Tiger Leaping Gorge, one for Jade Dragon Snow Mountain or Baisha village, and one for deep cultural immersion in the Old Town and surrounding Naxi communities [4].",
  ],
  famousFor: [
    "Tiger Leaping Gorge",
    "Jade Dragon Snow Mountain",
    "Naxi Dongba culture",
    "Baisha village murals",
    "UNESCO Old Town",
    "Naxi ancient music",
    "Yunnan highland cuisine",
  ],
  whyItFits: [
    "World-class trekking at Tiger Leaping Gorge (2-day high trail hike)",
    "Living ethnic minority culture with Naxi Dongba traditions",
    "Stunning high-altitude scenery — snow mountains, gorges, alpine meadows",
    "Unique crossroads cuisine blending Naxi, Tibetan, Bai, and Yi flavors",
    "Quieter authentic villages (Baisha, Shuhe) just minutes from the Old Town",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 66,
      avgLow: 48,
      rainChance: 18,
      precip: 0.8,
      sunrise: "7:10 AM",
      sunset: "6:50 PM",
      conditions: "Dry season begins; clear blue skies, comfortable days [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 63,
      avgLow: 45,
      rainChance: 12,
      precip: 0.4,
      sunrise: "7:18 AM",
      sunset: "6:35 PM",
      conditions: "Peak autumn clarity; Jade Dragon Snow Mountain views at their best",
    },
    {
      period: "Late Oct",
      avgHigh: 59,
      avgLow: 41,
      rainChance: 8,
      precip: 0.2,
      sunrise: "7:25 AM",
      sunset: "6:22 PM",
      conditions: "Cooler evenings; golden larch foliage; fewer visitors [1]",
    },
  ],
  whatToPack:
    "Layers for 41-66\u00b0F swings and 2,400m altitude. Warm fleece for evenings, sun hat and SPF 50 (UV is intense at altitude), sturdy hiking boots for Tiger Leaping Gorge, rain shell just in case, daypack for gorge trek.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "shuhe-ancient-town",
      name: "Shuhe Ancient Town",
      topPick: true,
      description:
        "A quieter, more authentically preserved ancient town just 4 km north of Lijiang Old Town. Originally a major stop on the Ancient Tea Horse Road, Shuhe retains genuine Naxi residential life alongside a handful of tasteful guesthouses and cafes. The Dragon Spring (Longquan) and surrounding wetlands are stunning at dawn. Far fewer tour groups than Lijiang Old Town [5].",
      whyItFitsUs:
        "Best balance of atmospheric beauty and authentic calm. Walking distance to Baisha village (3 km north). Several excellent boutique courtyard hotels. Morning walks along the canals and spring pools are magical.",
      nearby:
        "Baisha Village (15 min bike ride), Lijiang Old Town (15 min taxi), Jade Dragon Snow Mountain base (25 min drive)",
      hotels:
        "The Bivou (top pick \u2014 beautifully renovated Naxi farmhouse, design-forward with mountain views), Banyan Tree Lijiang (luxury resort with Naxi-inspired villas and Jade Dragon Snow Mountain backdrop)",
    },
    {
      slug: "baisha-village",
      name: "Baisha Village",
      topPick: false,
      description:
        "The original capital of the Naxi kingdom before Lijiang existed. Tiny, unhurried village with the famous 15th-century Baisha Murals, traditional Naxi courtyard homes, and elderly locals going about daily life. Visiting Naxi textile workshops and the celebrated Dr. Ho's herbal medicine clinic (featured in Bruce Chatwin's writing) adds genuine cultural encounters [6].",
      whyItFitsUs:
        "Most authentic Naxi cultural experience in the Lijiang area. Almost no commercialization. Ideal for a half-day of slow wandering, mural viewing, and conversations with local artisans. Reachable by bike from Shuhe.",
      nearby:
        "Shuhe Ancient Town (15 min bike), Lijiang Old Town (20 min taxi), Jade Dragon Snow Mountain (20 min drive)",
      hotels:
        "A handful of small family-run guesthouses. Better to base in Shuhe and visit Baisha as a day trip.",
    },
    {
      slug: "lijiang-old-town-dayan",
      name: "Lijiang Old Town (Dayan)",
      topPick: false,
      description:
        "The UNESCO-listed heart of Lijiang: a maze of cobblestone lanes, arched bridges over rushing canals, and traditional Naxi courtyard buildings. The central Sifang (Square) Street area is heavily commercialized, but venture into the quieter northern and western lanes near Lion Hill and the atmosphere shifts dramatically — locals playing cards on doorsteps, grandmothers drying herbs on rooftops [7].",
      whyItFitsUs:
        "Most convenient location with the widest restaurant and activity selection. The Naxi Ancient Music evening performance is here. Best experienced by staying in the quieter northern lanes away from Sifang Street.",
      nearby:
        "Mu Palace (5 min walk), Black Dragon Pool (10 min walk), Lion Hill (10 min walk), Shuhe (15 min taxi)",
      hotels:
        "Blossom Hill Inn Lijiang (tastefully restored Naxi courtyard, quiet lane location), Lux Tea Horse Road (upscale boutique in converted Naxi compound)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "tiger-leaping-gorge-high-trail",
      name: "Tiger Leaping Gorge \u2014 High Trail Trek",
      topPick: true,
      description:
        "One of the world's great hikes. The two-day high trail traverses the rim of a canyon where the Jinsha River (upper Yangtze) squeezes through a gap just 25 meters wide between 5,596m Jade Dragon Snow Mountain and 5,396m Haba Snow Mountain — a vertical drop of over 3,000 meters from peak to river. The trail passes through Naxi farming villages, bamboo groves, and alpine meadows with staggering views of the gorge below [2].",
      time: "2 days / 1 night (Day 1: Qiaotou to Halfway Guesthouse, ~5-6 hrs hiking; Day 2: Halfway to Tina's, ~3-4 hrs)",
      location:
        "Qiaotou trailhead, ~2 hours north of Lijiang by car. End point at Tina's Guesthouse, transport back to Lijiang or onward to Shangri-La",
      cost: "$45/p ($9 entrance + $20-25 guesthouse/meals + ~$10 shared transport)",
      tips: [
        "Start from Qiaotou (west end) heading east \u2014 the classic direction with the best light",
        "Stay at Halfway Guesthouse or Tea Horse Guesthouse \u2014 both have hot showers, meals, and stunning terrace views [2]",
        "The '28 Bends' section on Day 1 is the hardest climb (600m elevation gain) \u2014 take it slow at altitude",
        "Bring 2+ liters of water, snacks, rain shell, and warm layer \u2014 weather changes fast in the gorge",
        "Check current trail access status before going \u2014 sections occasionally close for maintenance or weather [2]",
      ],
      priceTier: 2,
    },
    {
      slug: "jade-dragon-snow-mountain",
      name: "Jade Dragon Snow Mountain (Yulong Xueshan)",
      photo: { src: "/photos/lijiang/jade-dragon-snow-mountain.jpg", alt: "Jade Dragon Snow Mountain (Yulong Xueshan), Lijiang" },
      topPick: true,
      description:
        "The sacred mountain of the Naxi people, rising to 5,596 meters and visible from everywhere in Lijiang. The Glacier Park cable car ascends to 4,506 meters — one of the highest cable car stations in the world — with a boardwalk along the glacier edge offering surreal high-altitude views. Below, Spruce Meadow (3,240m) and Blue Moon Valley provide gentler alpine scenery with turquoise glacial pools [3].",
      time: "Full day (leave Lijiang by 7:30 AM, return by 4-5 PM)",
      location:
        "30 km north of Lijiang Old Town. ~40 min by car",
      cost: "$55/p ($18 entrance + $25 Glacier Park cable car + $3 shuttle bus + ~$9 shared transport)",
      tips: [
        "Book the Glacier Park cable car 7 days in advance via the 'Lijiang Tourism Group' app \u2014 daily quotas sell out in October [3]",
        "Altitude sickness is real at 4,500m \u2014 small oxygen canisters available at the base ($5-7) but acclimatize in Lijiang first",
        "Visit Blue Moon Valley and Spruce Meadow on the way down for the most varied experience",
        "The outdoor 'Impression Lijiang' show by Zhang Yimou performs at the mountain base (check schedule)",
        "Clear mornings are best \u2014 clouds typically build by afternoon",
      ],
      priceTier: 3,
    },
    {
      slug: "baisha-murals-and-village-walk",
      name: "Baisha Murals and Village Walk",
      topPick: true,
      description:
        "The Baisha Murals (Baisha Bihua) are a remarkable collection of 15th-century religious frescoes blending Buddhist, Taoist, and Tibetan Lamaist imagery — a fusion unique to Naxi culture. The surrounding village of whitewashed Naxi courtyard houses, narrow lanes, and elderly residents going about traditional life feels like stepping back decades. Visit Naxi embroidery workshops and the legendary Dr. Ho's herbal medicine clinic [6].",
      time: "2-3 hours (half day with cycling from Shuhe)",
      location:
        "Baisha Village, 10 km north of Lijiang Old Town. 15 min by bike from Shuhe, 20 min by taxi from Old Town",
      cost: "$6/p ($4 mural hall entry + bike rental or ~$6 taxi from Shuhe)",
      tips: [
        "Rent bikes from Shuhe and ride north through farmland \u2014 the 3 km ride is flat and scenic with Jade Dragon Snow Mountain views",
        "The mural hall is small \u2014 visit early morning or late afternoon for fewer people",
        "Wander the village lanes beyond the murals for the real Baisha experience",
        "Visit the Naxi embroidery cooperative where women practice traditional techniques [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "naxi-ancient-music-performance",
      name: "Naxi Ancient Music Evening Performance",
      photo: { src: "/photos/lijiang/naxi-ancient-music-performance.jpg", alt: "Naxi Ancient Music Evening Performance, Lijiang" },
      topPick: true,
      description:
        "Around 20 elderly Naxi musicians in formal purple gowns perform 500-year-old Taoist-Confucian orchestral music on centuries-old instruments that were hidden underground during the Cultural Revolution. The music — solemn, strange, and beautiful — has been passed down orally for generations. This is living cultural heritage you cannot experience anywhere else [8].",
      time: "1.5 hours (8:00-9:30 PM nightly)",
      location:
        "Dayan Naxi Ancient Music Hall, East Street, Lijiang Old Town",
      cost: "$17-22/p (120-160 RMB depending on seating section)",
      tips: [
        "Arrive 15-20 minutes early for good seats \u2014 the hall seats about 400",
        "The musicians' average age is 70+ \u2014 this tradition is disappearing as performers pass away [8]",
        "The Chinese-language introductions between pieces tell fascinating stories even if you don't understand every word",
        "This is the highlight of Naxi cultural immersion \u2014 do not skip it",
      ],
      priceTier: 2,
    },
    {
      slug: "black-dragon-pool-park",
      name: "Black Dragon Pool Park (Heilongtan)",
      topPick: false,
      description:
        "The iconic Lijiang photograph: the Moon-Embracing Pavilion reflected in a perfectly still pool with Jade Dragon Snow Mountain rising behind. On a clear October morning, the reflection is flawless. The park also contains the Dongba Culture Museum, which provides essential context on Naxi pictographic writing and Dongba religious practices [9].",
      time: "1.5-2 hours",
      location:
        "Northern edge of Lijiang Old Town, 10-minute walk from the old town center",
      cost: "Free (included with Lijiang Old Town maintenance fee; free before 7:30 AM at west gate)",
      tips: [
        "Visit at dawn for mirror-still reflections and the classic Snow Mountain photo [9]",
        "The Dongba Culture Museum inside the park is excellent and often overlooked",
        "Combine with a walk along the canal path back into the Old Town",
        "October mornings offer the clearest mountain views of the year",
      ],
      priceTier: 0,
    },
    {
      slug: "mu-palace",
      name: "Mu Palace (Mufu)",
      photo: { src: "/photos/lijiang/mu-palace.jpg", alt: "Mu Palace (Mufu), Lijiang" },
      topPick: false,
      description:
        "The grand residence of the Mu family, hereditary Naxi chieftains who ruled the region for over 470 years. Rebuilt in 1999 after earthquake damage, the palace complex blends Han Chinese palatial architecture with Naxi decorative elements. Climb through the tiered gardens to Lion Hill for panoramic views over the entire Old Town rooftop sea [7].",
      time: "1.5-2 hours (including Lion Hill climb)",
      location:
        "Southern end of Lijiang Old Town, near Guangyi Street",
      cost: "$8/p (60 RMB entrance)",
      tips: [
        "Enter from the main gate on Guangyi Street and work your way uphill through the palace to Lion Hill",
        "The view from Lion Hill's Wangu Tower over the Old Town's grey tile rooftops is the best panoramic viewpoint in Lijiang [7]",
        "A guide adds significant value \u2014 the Mu family's political maneuvering (allying with the Ming dynasty to maintain autonomy) is fascinating",
        "Late afternoon golden light is ideal for the Lion Hill viewpoint",
      ],
      priceTier: 1,
    },
    {
      slug: "shuhe-ancient-town-walk",
      name: "Shuhe Ancient Town Morning Walk",
      topPick: false,
      description:
        "Shuhe was a key caravan stop on the Ancient Tea Horse Road, and its cobblestone lanes and flowing spring-fed canals retain a gentler, more authentic atmosphere than Lijiang's Old Town. The Dragon Spring (Longquan) at the town's heart is sacred to locals. Morning brings elderly Naxi residents practicing tai chi, washing vegetables in the canals, and gathering at the central square [5].",
      time: "1.5-2 hours (morning)",
      location:
        "Shuhe Ancient Town, 4 km north of Lijiang Old Town",
      cost: "Free",
      tips: [
        "Walk before 9 AM to see genuine local life before day-trippers arrive from Lijiang [5]",
        "Follow the canal paths rather than the main commercial street",
        "The Leather Workshop Museum near the central square offers an interesting look at Tea Horse Road trading culture",
        "Excellent base for cycling to Baisha village (3 km north, flat road)",
      ],
      priceTier: 0,
    },
    {
      slug: "dongba-culture-experience",
      name: "Dongba Culture Workshop",
      topPick: false,
      description:
        "Hands-on workshop with a Dongba priest or cultural guide learning about the world's last surviving pictographic writing system. Activities typically include painting Dongba characters, learning about Naxi cosmology and the Dongba religion (a blend of animism, Tibetan Bon, and Taoism), and sometimes a brief ritual blessing [10].",
      time: "2-3 hours",
      location:
        "Various locations in Lijiang Old Town and Baisha Village",
      cost: "$15-30/p (workshop fee, materials included)",
      tips: [
        "Seek workshops led by actual Dongba practitioners, not tourist-oriented craft shops",
        "The Dongba characters you paint make unique, meaningful souvenirs",
        "Combine with a visit to the Dongba Culture Museum at Black Dragon Pool for context [10]",
        "Your guesthouse can usually arrange a private session with a local Dongba cultural guide",
      ],
      priceTier: 2,
    },
    {
      slug: "lijiang-old-town-deep-walk",
      name: "Lijiang Old Town Deep Walk",
      photo: { src: "/photos/lijiang/lijiang-old-town-deep-walk.jpg", alt: "Lijiang Old Town Deep Walk, Lijiang" },
      topPick: false,
      description:
        "Beyond the commercial core of Sifang Street, Lijiang's Old Town reveals a labyrinth of quieter lanes where Naxi families still live in traditional courtyard homes. The northern lanes (Wuyi Street, Xinhua Street upper sections) and the western hillside neighborhoods near Lion Hill retain genuine residential character — elderly couples tending courtyard gardens, grandmothers weaving, corner noodle shops with no English sign [7].",
      time: "2-3 hours",
      location:
        "Lijiang Old Town, focusing on northern and western lanes away from Sifang Street",
      cost: "$7/p (50 RMB Old Town maintenance fee) \u2014 or free with a local guide who knows the back lanes",
      tips: [
        "Walk the upper (northern/western) lanes where tourist foot traffic drops dramatically [7]",
        "Follow the canals upstream \u2014 the water channels were designed to flush the streets and grow watercress",
        "The Ma family ancestral temples in the northwest corner are rarely visited and atmospheric",
        "Early morning (before 9 AM) or late afternoon (after 5 PM) are best for authentic atmosphere",
      ],
      priceTier: 1,
    },
    {
      slug: "impression-lijiang-show",
      name: "Impression Lijiang \u2014 Zhang Yimou Outdoor Show",
      topPick: false,
      description:
        "Directed by Zhang Yimou (of 2008 Olympics ceremony fame), this massive outdoor performance features 500+ local performers — Naxi, Yi, Bai, and Tibetan minorities — on a natural stage at the base of Jade Dragon Snow Mountain. The mountain itself serves as the backdrop. The show depicts Tea Horse Road life, Naxi rituals, and highland traditions through dance, music, and horsemanship [11].",
      time: "1 hour (performances at 9:00, 11:00, or 2:00 PM, seasonal schedule)",
      location:
        "Ganhaizi Meadow, Jade Dragon Snow Mountain scenic area, 30 km from Lijiang",
      cost: "$26-48/p (190-346 RMB depending on seating)",
      tips: [
        "Combine with a Jade Dragon Snow Mountain day trip \u2014 the show is at the mountain base",
        "Standard seats are fine \u2014 the spectacle is the landscape and performers, not stage details",
        "Bring sunscreen, hat, and sunglasses \u2014 the open-air venue at 3,100m has intense UV",
        "Check seasonal schedule \u2014 October has three daily performances [11]",
      ],
      priceTier: 2,
    },
    {
      slug: "lashi-lake-wetland",
      name: "Lashi Lake Wetland \u2014 Birding and Horseback",
      topPick: false,
      description:
        "A tranquil highland lake and wetland reserve 10 km southwest of Lijiang, surrounded by low mountains and farmland. In October, migratory birds begin arriving (bar-headed geese, black-necked cranes by late October). Horseback riding along the lakeshore through Naxi farming villages is the quintessential slow-pace Lijiang experience [12].",
      time: "Half day (3-4 hours including transport)",
      location:
        "Lashi Township, 10 km southwest of Lijiang. 25 min by car",
      cost: "$15-25/p (horseback ride ~$15-20, boat ride ~$8-12)",
      tips: [
        "Best visited on a clear morning when the lake reflects the surrounding mountains",
        "The horseback rides through lakeside villages are more interesting than the boat tours",
        "This is a peaceful contrast to the more dramatic scenery of Tiger Leaping Gorge",
        "Late October brings the first migratory birds \u2014 bring binoculars [12]",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Naxi Cuisine —
    {
      slug: "amayi-naxi-snacks",
      name: "A Ma Yi Naxi Snacks",
      chineseName: "\u963f\u5988\u610f\u7eb3\u897f\u7f8e\u98df",
      category: "Naxi Cuisine",
      topPick: true,
      location:
        "Near Stone Bridge, Wuyi Street, Lijiang Old Town",
      priceRange: "$5-10/p",
      cuisine: "Traditional Naxi home cooking",
      description:
        "A quiet courtyard restaurant tucked away from the tourist lanes, run by a Naxi family serving the food their grandmothers made. The chickpea jelly (jidou liangfen), Naxi baba flatbread, and smoked ribs are all prepared using time-honored techniques. The courtyard setting with traditional Naxi architecture adds to the experience [13].",
      whatToOrder:
        "Naxi baba (buckwheat flatbread with rose or savory filling), jidou liangfen (chickpea jelly with chili oil), smoked pork ribs, Naxi fried rice with cured meat, yak butter tea.",
      bestFor: "Lunch \u2014 arrive before noon for the freshest baba",
      priceTier: 1,
    },
    {
      slug: "lijiang-88-naxi-snack",
      name: "88 Naxi Snack Bar",
      chineseName: "88\u53f7\u5c0f\u5403\u5e97",
      category: "Naxi Cuisine",
      topPick: false,
      location:
        "Wuyi Street, Lijiang Old Town",
      priceRange: "$3-7/p",
      cuisine: "Naxi street food and snacks",
      description:
        "A no-frills local favorite popular with both Naxi residents and budget-savvy travelers. The potato pancakes, cold Naxi noodles, and Naxi-style grilled meats are simple, cheap, and excellent [13].",
      whatToOrder:
        "Naxi baba, potato pancakes (yangyu baba), chickpea jelly, Naxi cold noodles, grilled sausage.",
      bestFor: "Quick lunch or afternoon snack",
      priceTier: 1,
    },
    {
      slug: "the-master-of-lijiang",
      name: "The Master of Lijiang",
      photo: { src: "/photos/lijiang/the-master-of-lijiang.jpg", alt: "The Master of Lijiang, Lijiang" },
      chineseName: "\u4e3d\u6c5f\u5927\u5e08",
      category: "Naxi Cuisine",
      topPick: true,
      location:
        "Lijiang Old Town, near central Sifang Square area",
      priceRange: "$10-18/p",
      cuisine: "Elevated Naxi and Yunnan ethnic minority cuisine",
      description:
        "A locally renowned restaurant that elevates Naxi and Yunnan minority cooking with beautiful presentation and comfortable ambiance. The decor incorporates ethnic minority cultural elements. Snow Mountain Fish (caught from glacial streams), wild mushroom steamed chicken, and the colorful hand-grasped rice are signatures that showcase Yunnan's extraordinary biodiversity [13].",
      whatToOrder:
        "Snow Mountain Fish, wild mushroom steamed chicken, grilled beef wrapped in leaves, colorful hand-grasped rice, mint salad.",
      bestFor: "Dinner \u2014 atmospheric with courtyard seating in the evening",
      priceTier: 1,
    },

    // — Yunnan Regional —
    {
      slug: "uncle-mas-naxi-bbq",
      name: "Uncle Ma's Naxi BBQ",
      chineseName: "\u9a6c\u53d4\u7eb3\u897f\u70e7\u70e4",
      category: "Yunnan Regional",
      topPick: true,
      location:
        "Xinhua Street, Lijiang Old Town",
      priceRange: "$6-12/p",
      cuisine: "Naxi-style barbecue, grilled meats and river fish",
      description:
        "Smoky, lively, and deeply local. Naxi barbecue is distinct from other Chinese grilling traditions \u2014 the meats are often cured or smoked first, then grilled over charcoal with wild herbs from the surrounding mountains. The grilled fish and lamb ribs are standouts. Open-air seating on a rooftop terrace with Old Town rooftop views [14].",
      whatToOrder:
        "Naxi grilled fish, smoked pork ribs, grilled lamb skewers, grilled local mushrooms, plum wine (homemade).",
      bestFor: "Dinner \u2014 arrive by 7 PM for rooftop seating",
      priceTier: 1,
    },
    {
      slug: "wild-mushroom-hotpot-shidi",
      name: "Shidi Wild Mushroom Hotpot",
      chineseName: "\u62fe\u5730\u91ce\u751f\u83cc\u706b\u9505",
      category: "Yunnan Regional",
      topPick: true,
      location:
        "Xianggeli Avenue, New Town area near Old Town south gate",
      priceRange: "$12-22/p",
      cuisine: "Wild mushroom hotpot \u2014 Yunnan specialty",
      description:
        "Yunnan is China's mushroom kingdom, and October is the tail end of mushroom season. This hotpot restaurant lets you choose from a dozen wild mushroom varieties — matsutake, porcini, chanterelles, black truffles, chicken-oil mushrooms — cooked in a rich bone broth. Communal, warming, and uniquely Yunnan [14].",
      whatToOrder:
        "Mixed wild mushroom platter (ask what's freshest today), add sliced yak meat and local greens. Black truffle dumplings when available. Finish with noodles in the mushroom-enriched broth.",
      bestFor: "Dinner \u2014 perfect for cool October evenings at altitude",
      priceTier: 2,
    },
    {
      slug: "lamu-jiayuan-tibetan",
      name: "Lamu Jiayuan Tibetan Restaurant",
      chineseName: "\u62c9\u59c6\u5bb6\u56ed",
      category: "Yunnan Regional",
      topPick: false,
      location:
        "Changshui Road, near north gate of Lijiang Old Town",
      priceRange: "$8-15/p",
      cuisine: "Tibetan \u2014 yak meat specialties, butter tea, tsampa",
      description:
        "Lijiang sits on the cultural boundary between Naxi and Tibetan worlds, and this family-run Tibetan restaurant reflects that crossroads. Hearty yak hotpot, yak butter tea, tsampa (roasted barley flour), and Tibetan-style momos (dumplings) served in a warmly decorated space with Tibetan textiles and Buddhist iconography [14].",
      whatToOrder:
        "Yak meat hotpot, yak momos (dumplings), tsampa with yak butter tea, Tibetan blood sausage (adventurous), barley wine.",
      bestFor: "Dinner \u2014 especially warming after a day at altitude",
      priceTier: 1,
    },

    // — Street Food & Casual —
    {
      slug: "zhongyi-market-food-stalls",
      name: "Zhongyi Market Food Stalls",
      chineseName: "\u5fe0\u4e49\u5e02\u573a",
      category: "Street Food",
      topPick: false,
      location:
        "Zhongyi Market, south end of Lijiang Old Town near Zhongyi Road",
      priceRange: "$1-4/p",
      cuisine: "Local wet market with street food stalls",
      description:
        "The real Lijiang eating experience happens at the wet market, not on the tourist lanes. Local vendors sell Naxi baba fresh off the griddle, steaming bowls of crossing-the-bridge rice noodles, grilled potatoes with chili, and seasonal fruit from surrounding valleys. Zero English, zero tourists, entirely genuine [14].",
      whatToOrder:
        "Naxi baba (both savory and sweet versions), erkuai (fried rice cakes), crossing-the-bridge rice noodles, grilled potato with chili flakes, fresh pomegranate juice.",
      bestFor: "Breakfast or lunch (busiest 7-11 AM)",
      priceTier: 1,
    },
    {
      slug: "smallpot-bar-naxi-bbq",
      name: "The Smallpot Bar",
      chineseName: "\u5c0f\u9505\u9152\u5427",
      category: "Street Food",
      topPick: false,
      location:
        "Yinyu Lane, Wuyi Street, Lijiang Old Town",
      priceRange: "$5-10/p",
      cuisine: "Naxi barbecue and local drinks",
      description:
        "A hybrid bar-restaurant on a quiet lane that serves excellent Naxi barbecue alongside local plum wine and Yunnan craft beer. The roast fish and poplar blossom dishes (a Naxi delicacy) are standouts. Good evening atmosphere without the thumping music of the Bar Street scene [14].",
      whatToOrder:
        "Naxi barbecue platter, roast fish, poplar blossoms (fried or in soup), Lijiang baba, homemade plum wine.",
      bestFor: "Evening \u2014 come for dinner and stay for drinks",
      priceTier: 1,
    },

    // — Upscale & Special Occasion —
    {
      slug: "he-fu-restaurant",
      name: "He Fu Yuan Private Kitchen",
      photo: { src: "/photos/lijiang/he-fu-restaurant.jpg", alt: "He Fu Yuan Private Kitchen, Lijiang" },
      chineseName: "\u548c\u5e9c\u9662\u79c1\u623f\u83dc",
      category: "Upscale",
      topPick: false,
      location:
        "Qiyi Street, quiet lane in Lijiang Old Town",
      priceRange: "$25-45/p",
      cuisine: "Refined Yunnan cuisine with Naxi influences",
      description:
        "A beautifully restored Naxi courtyard serving elevated Yunnan cuisine. The chef sources wild ingredients from surrounding mountains — matsutake, wild herbs, highland vegetables — and presents them with refinement uncommon in Lijiang. The tasting-style approach with many small dishes showcases the extraordinary biodiversity of Yunnan's terroir [14].",
      whatToOrder:
        "Chef's seasonal tasting menu (changes daily based on market availability). Expect wild mushrooms, highland herbs, river fish, and cured meats presented with artistry.",
      bestFor: "Special dinner \u2014 reserve through your hotel",
      priceTier: 2,
    },
    {
      slug: "banyan-tree-bai-yun",
      name: "Bai Yun at Banyan Tree Lijiang",
      chineseName: "\u767d\u4e91",
      category: "Upscale",
      topPick: false,
      location:
        "Banyan Tree Lijiang resort, Shuhe, adjacent to Shuhe Ancient Town",
      priceRange: "$35-65/p",
      cuisine: "Fine Yunnan and pan-Asian cuisine",
      description:
        "The flagship restaurant at the Banyan Tree resort offers refined Yunnan cuisine with panoramic Jade Dragon Snow Mountain views. The open kitchen and terrace dining make this Lijiang's most polished dining experience. Quality ingredients sourced from Yunnan's highlands, prepared with both local and modern techniques [5].",
      whatToOrder:
        "Wild mushroom tasting plate, Yunnan-style steamed fish, yak carpaccio, highland herb salad. The set lunch is better value than dinner.",
      bestFor: "Lunch with mountain views \u2014 or a splurge dinner",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Taxis: Cheap and plentiful. Old Town to Shuhe ~$3, Old Town to Baisha ~$4. Most drivers don't use meters \u2014 agree on price before getting in.",
      "Bikes: Rent e-bikes or regular bikes from Shuhe or Old Town ($3-7/day). Best for Shuhe-Baisha-Old Town triangle on flat roads.",
      "Walking: Lijiang Old Town is entirely pedestrian. Shuhe is walkable. Baisha is tiny. No cars in any old town.",
      "Long-distance: Hire a private driver for Tiger Leaping Gorge and Jade Dragon Snow Mountain. Your hotel can arrange this ($40-70/day).",
    ],
    "Food & Dining": [
      "Naxi cuisine essentials: Naxi baba (flatbread), jidou liangfen (chickpea jelly), smoked ribs, grilled fish, and yak hotpot. Try the local plum wine (meizi jiu).",
      "Wild mushrooms: October is the end of mushroom season \u2014 ask restaurants what's fresh. Yunnan has more mushroom species than anywhere in China.",
      "Altitude affects cooking: Water boils at a lower temperature at 2,400m, so some dishes cook differently. Rice can be slightly harder.",
      "Avoid tourist-trap restaurants: Steer clear of places with English menus and photos on Sifang Street. The best food is in quieter lanes or outside the Old Town entirely.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay work everywhere including small vendors. Some Old Town shops accept cash only.",
      "ATMs: Available at Bank of China and ICBC branches on Xianggeli Avenue (New Town). Old Town ATMs charge higher fees.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in China.",
      "Language: Very little English spoken outside upscale hotels. Google Translate camera mode is essential. Learn basic Mandarin greetings \u2014 Naxi people appreciate the effort.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Old Town maintenance fee: 50 RMB ($7) per person, valid for multiple entries. Required for some attractions including Black Dragon Pool [7].",
      "Jade Dragon Snow Mountain cable car: Must book 7 days in advance via the 'Lijiang Tourism Group' app. October quotas sell out fast [3].",
      "Altitude: Lijiang sits at 2,400m (7,900 ft). Take it easy on arrival day. Drink extra water. Tiger Leaping Gorge trail reaches 2,670m; Jade Dragon Snow Mountain cable car reaches 4,506m.",
      "Tiger Leaping Gorge access: Trail conditions and access rules change periodically. Verify current status before planning your hike [2].",
      "Sun protection: UV radiation is intense at altitude year-round. SPF 50, hat, and sunglasses are essential even on cloudy days.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Lijiang October Weather \u2014 Travel China Guide (https://www.travelchinaguide.com/cityguides/yunnan/lijiang/weather-october.htm)",
    "[2] Tiger Leaping Gorge Trek Guide \u2014 Nick Kembel Travels (https://www.nickkembel.com/tiger-leaping-gorge-trek/)",
    "[3] Jade Dragon Snow Mountain Visitor Guide \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/lijiang/jade-dragon-snow-mountain.html)",
    "[4] Lijiang Travel Guide \u2014 China Highlights (https://www.chinahighlights.com/lijiang/)",
    "[5] Where to Stay in Lijiang: Shuhe and Baisha \u2014 Jake and Dannie (https://jakeanddannie.com/where-to-stay-lijiang-shuhe-china/)",
    "[6] Baisha Village and Murals Guide \u2014 Travel China With Me (https://travelchinawith.me/attractions/yunnan/lijiang/baisha-village-and-mural/)",
    "[7] Lijiang Old Town Visitor Guide \u2014 Into Travel China (https://track.intotravelchina.com/attractions/lijiang_attraction/lijiang_old_town.do)",
    "[8] Naxi Ancient Music \u2014 Atlas Obscura (https://www.atlasobscura.com/articles/naxi-music-lijiang-china)",
    "[9] Black Dragon Pool Park Guide \u2014 Travel China With Me (https://travelchinawith.me/attractions/yunnan/lijiang/black-dragon-pool/)",
    "[10] Dongba Culture \u2014 Yunnan Exploration (https://www.yunnanexploration.com/naxi-ancient-music.html)",
    "[11] Impression Lijiang Show \u2014 China Highlights (https://www.chinahighlights.com/lijiang/attraction/impression-lijiang-show.htm)",
    "[12] Lashi Lake \u2014 China Discovery (https://www.chinadiscovery.com/yunnan/lijiang/lashi-lake.html)",
    "[13] Lijiang Restaurants and Local Food \u2014 Trip.com (https://www.trip.com/blog/top-ten-must-see-restaurants-for-local-cuisine-in-lijiang/)",
    "[14] Lijiang Food Guide \u2014 Wander in China (https://www.wanderinchina.com/en/blog/lijiang-food-guide-must-try-dishes-and-local-cuisine/)",
  ],
};
