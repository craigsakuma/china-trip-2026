import type { CityProfile } from "@/types";

export const guizhouProfile: CityProfile = {
  slug: "guizhou",
  heroPhoto: { src: "/photos/guizhou/_hero.jpg", alt: "Xijiang Miao Village at evening in Guizhou", credit: "MDRX" },
  executiveSummary: [
    "Guizhou is one of China's least-visited provinces and arguably its richest destination for authentic ethnic minority cultural immersion. Southeastern Guizhou (Qiandongnan Prefecture) is home to dozens of Miao and Dong villages where centuries-old traditions remain vibrantly alive — silver-adorned Miao women in full ceremonial dress, Dong drum towers rising above wooden village rooftops, and wind-and-rain bridges spanning misty rivers. October is an extraordinary time to visit: the rice harvest is underway, terraced hillsides glow gold, and local harvest festivals fill villages with lusheng reed-pipe music, communal rice wine toasts, and elaborate traditional dance. This is not cultural performance for tourists — it is daily life in one of China's most culturally distinct regions [1].",
    "The landscape is dramatic and undeveloped — karst mountains, deep river valleys, terraced rice paddies, and dense forests connected by winding mountain roads. Xijiang, the world's largest Miao village (over 1,300 households), cascades down a steep hillside in a sea of dark wooden stilted houses and offers a deeply immersive base despite growing domestic tourism. Smaller villages like Langde, Basha, and Matang remain almost entirely off the foreign tourist radar, where visitors are greeted with rice wine at the village gate and invited to join communal meals. Zhaoxing, the finest Dong village, is an architectural marvel — five drum towers, five wind-and-rain bridges, and a rhythm of life organized around communal singing and textile traditions [2].",
    'The food alone is a revelation. Guizhou cuisine is built on sour fermented flavors and chili — sour soup fish (suantangyu) simmered in a tomato-based fermented broth, fermented chili paste (huajiao) that appears on every table, and the legendary "long table banquet" (changzhuo yan) where dozens of dishes are served on a single enormous table stretching through the village square. Rice wine flows freely, toasted by Miao women in silver headdresses. This is communal dining at its most joyful, and it is available to visitors who arrive with respect and curiosity [3].',
  ],
  famousFor: [
    "Miao minority villages",
    "Dong drum towers and wind-and-rain bridges",
    "Xijiang Thousand Household village",
    "sour soup fish",
    "long table banquets",
    "silver jewelry and embroidery",
    "harvest festivals",
    "terraced rice paddies",
  ],
  whyItFits: [
    "Deepest ethnic minority cultural immersion in China — living traditions, not museum exhibits",
    "Spectacular food unlike anywhere else (sour soup, fermented chili, communal long table banquets)",
    "October harvest season with genuine village festivals and golden terraced hillsides",
    "Dramatically off the beaten path for foreign visitors — authentic encounters are the default",
    "Stunning karst mountain and terraced landscape with hiking through villages and rice paddies",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 72,
      avgLow: 57,
      rainChance: 25,
      precip: 1.2,
      sunrise: "6:35 AM",
      sunset: "6:25 PM",
      conditions: "Warm, occasional showers; rice harvest underway; golden terraces",
    },
    {
      period: "Mid Oct",
      avgHigh: 68,
      avgLow: 54,
      rainChance: 20,
      precip: 0.9,
      sunrise: "6:40 AM",
      sunset: "6:15 PM",
      conditions: "Comfortable and drier; peak harvest season; ideal for village visits [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 64,
      avgLow: 50,
      rainChance: 18,
      precip: 0.7,
      sunrise: "6:48 AM",
      sunset: "6:05 PM",
      conditions: "Cooler mornings; autumn color in mountains; occasional mist in valleys",
    },
  ],
  whatToPack:
    "Layers for 50-72\u00b0F mountain weather with significant temperature swings between valleys and ridgelines. Rain jacket essential — Guizhou is famously damp. Sturdy walking shoes for uneven village cobblestones and muddy rice paddy trails. Small gifts (candy, fruit, photos printed for villagers) are deeply appreciated.",

  // ─── Neighborhoods (Base Areas) ──────────────────────────────
  neighborhoods: [
    {
      slug: "kaili",
      name: "Kaili — Regional Hub",
      topPick: true,
      description:
        "The prefectural capital of Qiandongnan and the most practical base for exploring southeastern Guizhou's Miao villages. A small, manageable city with genuine local energy — the Sunday market draws Miao and Dong villagers from surrounding mountains in traditional dress, selling silver jewelry, indigo cloth, and fermented chili paste. Kaili itself is not a tourist destination, which is precisely its value as a launching point [4].",
      whyItFitsUs:
        "Best transportation hub for reaching Xijiang (40 min), Langde (30 min), and other Miao villages. Sunday market is a genuine cultural experience. Hotels are comfortable and affordable. Excellent local restaurants serving authentic Miao and Dong cuisine.",
      nearby:
        "Xijiang Miao village (40 min by car), Langde Miao village (30 min), Matang Gejia village (20 min), Nanhua Market (in town)",
      hotels:
        "Kaili Yatai Hotel (modern, clean, central — best option for comfort), various guesthouses near the old market district",
    },
    {
      slug: "xijiang",
      name: "Xijiang Thousand Household Miao Village",
      topPick: true,
      description:
        "The world's largest Miao settlement — over 1,300 stilted wooden houses cascading down a hillside above the Bala River. Despite growing Chinese domestic tourism, staying overnight transforms the experience: after day-trippers leave by 5 PM, the village settles into genuine rhythms — grandmothers embroider on doorsteps, children chase chickens through alleyways, and the hillside glows amber at dusk [2].",
      whyItFitsUs:
        "The most immersive overnight Miao village experience with the infrastructure to support comfortable stays. Evening and early morning hours reveal the authentic village beneath the tourism layer. Multiple guesthouses with terrace views over the entire village.",
      nearby:
        "Viewing platform (10 min walk), Miao Museum (in village), surrounding rice terraces (30-60 min hikes), Langde village (30 min by car)",
      hotels:
        "Xijiang Miao Village guesthouses with hillside terrace views (book upper village for quieter setting and best panoramas), Indigo Lodge (boutique option if available)",
    },
    {
      slug: "zhaoxing",
      name: "Zhaoxing Dong Village",
      topPick: false,
      description:
        "The most beautiful Dong village in China, tucked in a narrow valley with five drum towers (each representing a clan), five wind-and-rain bridges, and a soundscape of Dong grand choir singing that is UNESCO-recognized Intangible Cultural Heritage. Less developed for tourism than Xijiang, with a quieter, more contemplative atmosphere [5].",
      whyItFitsUs:
        "Dong culture is architecturally and musically distinct from Miao — visiting both provides genuine cultural contrast. The village layout along a single stream is extraordinarily photogenic. Surrounding villages (Tang'an, Ji'ang) are reachable on foot for genuine off-trail hiking.",
      nearby:
        "Tang'an Dong village (1 hr hike through rice terraces), Ji'ang village (nearby), Liping county town (1 hr by car)",
      hotels:
        "Zhaoxing boutique guesthouses along the main stream (Zhaoxing Indigo Lodge is the most refined option), traditional wooden Dong-style homestays for more immersive experience",
    },
  ],

  // ─── Activities ──────────────────────────────────────────────
  activities: [
    {
      slug: "xijiang-miao-village-immersion",
      name: "Xijiang Thousand Household Miao Village — Full Immersion",
      topPick: true,
      description:
        "Spend a full day and overnight in the world's largest Miao village. Wander the cobblestone paths through the lower village (more tourist-oriented shops and restaurants), then climb into the upper village where daily life unfolds undisturbed — women embroider intricate patterns on doorsteps, men repair wooden houses, and children play in the lanes. The hilltop viewing platform at dusk, when 1,300 houses light up against the darkening hillside, is unforgettable [2].",
      time: "Full day + overnight (arrive early afternoon, leave next morning)",
      location:
        "Xijiang, Leishan County. ~40 min by car from Kaili, ~3.5 hrs from Guiyang",
      cost: "$14/p ($14 village entrance fee)",
      tips: [
        "Stay overnight — the village after 5 PM when day-trippers leave is a completely different place",
        "Walk uphill past the museum into the residential upper village for authentic daily life",
        "The evening cultural performance (included in ticket) features genuine Miao lusheng and dance — worth attending despite tourist framing",
        "Hire a local Miao guide through your guesthouse for deeper understanding of silver, embroidery, and architectural symbolism [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "langde-miao-village",
      name: "Langde Upper Miao Village — Intimate Alternative",
      topPick: true,
      description:
        "A far smaller and more intimate Miao village than Xijiang, with just a few hundred residents. Langde retains a raw authenticity that Xijiang's scale has partially diluted. Visitors are greeted at the village gate with twelve rounds of rice wine (you can sip symbolically), and the entire village gathers for lusheng music and dance. The welcome ceremony here feels genuinely communal rather than staged [6].",
      time: "Half day (2-3 hours)",
      location:
        "Langde, Leishan County. ~30 min by car from Kaili, 30 min from Xijiang",
      cost: "$4/p ($4 entrance fee)",
      tips: [
        "Visit in the morning for best light on the wooden houses and terraces",
        "The rice wine greeting at the village gate is genuine hospitality — accept graciously even if you only sip",
        "Ask to see the embroidery workshop where women create traditional Miao patterns",
        "Combine with Xijiang for a full Miao village day [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "zhaoxing-dong-village-exploration",
      name: "Zhaoxing Dong Village — Architecture and Music",
      topPick: true,
      description:
        "Walk through China's most beautiful Dong village, organized around five clan drum towers that serve as community gathering halls, theaters, and dispute-resolution centers. The wind-and-rain bridges (covered wooden bridges with no nails) are architectural masterpieces. In the evenings, Dong grand choir singing — polyphonic harmonies developed over centuries and recognized by UNESCO — echoes through the valley [5].",
      time: "Full day + overnight",
      location:
        "Zhaoxing, Liping County. ~3.5 hrs by car from Kaili, ~4 hrs from Guiyang",
      cost: "$10/p ($10 village entrance fee)",
      tips: [
        "Walk the full length of the village along the central stream to see all five drum towers",
        "Ask your guesthouse to arrange a Dong grand choir performance — sometimes available in the evening at a drum tower",
        "The indigo-dyeing workshops are genuine working operations, not tourist demonstrations",
        "Early morning mist in the valley with drum towers emerging from fog is extraordinary [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "tangan-dong-village-hike",
      name: "Tang'an Dong Village Hike from Zhaoxing",
      topPick: true,
      description:
        "A spectacular hike from Zhaoxing through terraced rice paddies and forested hillsides to the smaller, almost entirely untouristed Tang'an Dong village. The trail passes through working agricultural landscapes with panoramic views of the valley below. Tang'an itself is a miniature Zhaoxing — drum tower, wind-and-rain bridge, wooden stilted houses — but with virtually no other visitors [5].",
      time: "3-4 hours round trip (moderate difficulty)",
      location:
        "Trail starts from Zhaoxing village, climbs to Tang'an (~1 hr up, 45 min down)",
      cost: "Free (included in Zhaoxing entrance fee)",
      tips: [
        "Start early morning for cooler temperatures and best light on the terraces",
        "Trail is well-marked but muddy after rain — sturdy shoes essential",
        "Bring water and snacks; Tang'an has a few small shops but limited food options",
        "October rice terraces are golden and at their most photogenic [5]",
      ],
      priceTier: 0,
    },
    {
      slug: "basha-miao-village",
      name: "Basha Miao Village — Last Gunmen of China",
      topPick: false,
      description:
        "A mountain-top Miao village famous as the only place in China where villagers are legally permitted to carry firearms — a concession to their ancient hunting traditions. Basha men wear their hair in a distinctive topknot, carry flintlock rifles, and maintain a relationship with the surrounding forest that is deeply spiritual. The village feels transported from another century [7].",
      time: "Half day (2-3 hours)",
      location:
        "Near Congjiang, ~2 hrs from Zhaoxing, ~3 hrs from Kaili",
      cost: "$9/p ($9 entrance fee)",
      tips: [
        "The gunfire performance is theatrical but rooted in genuine tradition",
        "Visit the sacred forest above the village where Basha spiritual life centers",
        "Photography etiquette: ask before photographing individuals, especially elders",
        "Combine with Zhaoxing as part of a southern Guizhou loop [7]",
      ],
      priceTier: 1,
    },
    {
      slug: "matang-gejia-village",
      name: "Matang Gejia Village — Batik Artisans",
      topPick: false,
      description:
        "Home to the Gejia people (a sub-group sometimes classified within the Miao), renowned for their extraordinary wax-resist batik textiles. Women create intricate geometric patterns using heated beeswax and indigo dye, a tradition passed through generations. The village is small, quiet, and rarely visited by foreigners [8].",
      time: "2-3 hours",
      location:
        "~20 min by car from Kaili",
      cost: "$3/p ($3 entrance fee)",
      tips: [
        "Watch the batik process from wax application through dyeing — genuinely fascinating",
        "Purchasing directly from artisans supports the community and makes a meaningful souvenir",
        "Gejia women wear distinctive bright-colored headdresses and embroidered clothing daily",
        "Easy half-day trip from Kaili, combine with Kaili market [8]",
      ],
      priceTier: 1,
    },
    {
      slug: "kaili-sunday-market",
      name: "Kaili Sunday Market",
      topPick: true,
      description:
        "One of the most colorful and authentic markets in China. Miao and Dong villagers descend from surrounding mountains in full traditional dress to sell and trade silver jewelry, embroidered textiles, fermented chili paste, medicinal herbs, live poultry, and seasonal produce. This is not a tourist market — it is the genuine weekly commercial and social hub for dozens of surrounding villages [4].",
      time: "2-3 hours (morning)",
      location: "Central Kaili, near the old market district",
      cost: "Free (purchases vary)",
      tips: [
        "Arrive early (7:30-8:00 AM) for the most activity and best light",
        "The silver jewelry section is remarkable — prices are based on silver weight",
        "Try the market food stalls: sour soup, rice noodles, grilled meats on sticks",
        "Sunday is the main market day, though smaller daily markets exist [4]",
      ],
      priceTier: 0,
    },
    {
      slug: "long-table-banquet",
      name: "Long Table Banquet (Changzhuo Yan)",
      topPick: true,
      description:
        "The signature communal dining experience of Guizhou's minority villages. A single enormous table stretches through the village square, laden with dozens of dishes — sour soup fish, smoked pork, sticky rice, pickled vegetables, wild mountain greens. Miao women in full silver regalia circle the table offering rice wine toasts and singing. Guests are expected to drink, eat, and celebrate. It is simultaneously a meal, a performance, and a genuine act of hospitality [3].",
      time: "2-3 hours (typically lunch or dinner)",
      location:
        "Available in Xijiang, Langde, and other Miao villages (arranged through guesthouse or guide)",
      cost: "$10-20/p (per person, all-inclusive)",
      tips: [
        "Can be arranged through your guesthouse or guide — ask in advance as they may require minimum group sizes",
        "The rice wine toasts are persistent and generous — pace yourself or the evening gets very merry very fast",
        "Some villages offer this daily for tourists; others only during festivals. Both are worth experiencing",
        "Bring a strong stomach and an open mind — organ meats, fermented foods, and unfamiliar ingredients are part of the adventure [3]",
      ],
      priceTier: 1,
    },
    {
      slug: "miao-silver-embroidery-workshop",
      name: "Miao Silver and Embroidery Workshop",
      topPick: false,
      description:
        "Miao silver work and embroidery are among the most sophisticated textile and metalwork traditions in Asia. A workshop visit reveals the extraordinary skill behind the massive silver headdresses, neck rings, and breastplates worn during festivals — hand-hammered from raw silver with designs encoding clan history and cosmology. Embroidery patterns similarly carry narrative meaning passed mother to daughter [9].",
      time: "2-3 hours",
      location:
        "Available in Xijiang (Miao Museum area) and Kaili",
      cost: "$8-15/p (workshop fee, varies by arrangement)",
      tips: [
        "The Xijiang Miao Museum has excellent displays of silver and embroidery traditions",
        "Ask to visit a working silversmith — several families in upper Xijiang still practice the craft",
        "Genuine antique Miao silver pieces are available but require knowledgeable assessment",
        "Embroidery pieces make exceptional souvenirs — look for hand-stitched (not machine) work [9]",
      ],
      priceTier: 1,
    },
    {
      slug: "rice-terrace-hiking",
      name: "Rice Terrace Hiking — Jiabang or Xijiang Surrounds",
      topPick: false,
      description:
        "Guizhou's terraced rice paddies are among China's most beautiful — carved into steep karst hillsides over centuries by Miao and Dong farmers. In October, the terraces turn golden as the harvest begins. The Jiabang terraces near Congjiang are the most celebrated, but excellent terraces surround Xijiang and are accessible on foot directly from the village [10].",
      time: "3-5 hours (half day to full day depending on route)",
      location:
        "Xijiang surrounds (walkable from village) or Jiabang terraces (near Congjiang, ~2 hrs from Zhaoxing)",
      cost: "Free to $7/p (Jiabang may charge a small entrance fee)",
      tips: [
        "October is the golden period — literally — when rice is ready for harvest",
        "Trails through terraces are narrow and can be slippery; walking sticks helpful",
        "Jiabang is more remote and spectacular; Xijiang terraces are more accessible",
        "Bring plenty of water; there are no vendors on rural terrace trails [10]",
      ],
      priceTier: 0,
    },
    {
      slug: "guiyang-city-food-walk",
      name: "Guiyang City Food Walk",
      topPick: false,
      description:
        "The provincial capital is an underrated food city in its own right. The old streets around Qianling Park and the Erqi Lu night market district offer concentrated access to Guizhou's distinctive flavors — sour soup, mixian rice noodles with fermented chili, silk baby noodles (si wa wa), and the city's famous late-night barbecue culture [11].",
      time: "3-4 hours (evening is best)",
      location:
        "Guiyang city center — Erqi Lu area and surrounding old streets",
      cost: "$5-10/p (street food and small restaurants)",
      tips: [
        "Guiyang is likely your arrival/departure point — use a half-day for food exploration",
        "The Erqi Lu night food street is bustling and authentic, not a tourist setup",
        "Try si wa wa (Guizhou's unique 'baby in silk' rice paper rolls with dipping sauces)",
        "Guiyang's late-night barbecue (shaokao) culture rivals any city in China [11]",
      ],
      priceTier: 1,
    },
    {
      slug: "dong-grand-choir-performance",
      name: "Dong Grand Choir (Da Ge) Performance",
      topPick: false,
      description:
        "The Dong people's polyphonic choral singing tradition — performed without a conductor, using multiple independent vocal lines that weave into complex harmonies — was inscribed on the UNESCO Intangible Cultural Heritage list in 2009. Hearing it live in a drum tower, where the acoustics were designed for this exact purpose centuries ago, is one of the most moving cultural experiences in China [5].",
      time: "1-2 hours (evening)",
      location:
        "Zhaoxing drum towers, or arranged in smaller Dong villages",
      cost: "$5-10/p (performance fee, or included in some village stays)",
      tips: [
        "In Zhaoxing, performances happen regularly — ask your guesthouse for the schedule",
        "Smaller villages offer more intimate and spontaneous performances",
        "The singing often starts informally after dinner — be present and attentive",
        "Recording is generally welcome, but ask first out of respect [5]",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ─────────────────────────────────────────────
  restaurants: [
    // — Sour Soup —
    {
      slug: "lao-suantang-yu",
      name: "Old Sour Soup Fish",
      chineseName: "\u8001\u9178\u6c64\u9c7c",
      category: "Sour Soup",
      topPick: true,
      location:
        "Kaili city center, near the old market district",
      priceRange: "$5-10/p",
      cuisine: "Miao-style sour soup fish (suantangyu) — the signature dish of Guizhou",
      description:
        "Whole fresh river fish simmered in a bright red-orange fermented tomato broth that is simultaneously sour, spicy, and deeply savory. The broth is made from rice water fermented for weeks with local tomatoes and chili. This is the quintessential Guizhou dining experience — communal, bubbling, and utterly addictive [3].",
      whatToOrder:
        "Sour soup fish (suantangyu) with river fish, tofu skin, potato, and greens cooked in the broth. Add rice to mop up the final broth.",
      bestFor: "Lunch or dinner. Best experienced with a group.",
      priceTier: 1,
    },
    {
      slug: "qianxi-suantang-niu",
      name: "Qianxi Sour Soup Beef",
      chineseName: "\u9ed4\u897f\u9178\u6c64\u725b\u8089",
      category: "Sour Soup",
      topPick: false,
      location: "Kaili, multiple locations throughout the city",
      priceRange: "$6-12/p",
      cuisine: "Sour soup beef hotpot — a heartier variation of Guizhou's signature dish",
      description:
        "The beef variation of sour soup uses a white fermented rice-water base rather than tomato, creating a subtler, tangier broth. Thinly sliced beef, tripe, and vegetables are cooked tableside. Less well-known than the fish version but equally compelling.",
      whatToOrder:
        "Sour soup beef (suantang niurou), sliced tripe, local wild greens, handmade rice tofu (mi doufu).",
      bestFor: "Dinner",
      priceTier: 1,
    },

    // — Village Dining —
    {
      slug: "xijiang-nongjiayuan",
      name: "Xijiang Farmhouse Restaurant",
      chineseName: "\u897f\u6c5f\u519c\u5bb6\u56ed",
      category: "Village Dining",
      topPick: true,
      location:
        "Upper Xijiang village, away from the main commercial street along the river",
      priceRange: "$4-8/p",
      cuisine: "Miao home cooking — smoked pork, sour vegetables, wild mountain greens",
      description:
        "Family-run restaurants in the upper village serve genuine Miao home cooking that is dramatically different from the tourist-oriented places along the river. Smoked pork (la rou) hanging from the rafters, vegetables pickled in ceramic crocks by the door, and rice steamed in bamboo. No English menu, no tourist markup — point, smile, and eat [2].",
      whatToOrder:
        "Smoked pork with local greens, sour pickled vegetables, bamboo-steamed rice, stir-fried fern tips, any seasonal wild vegetables the family recommends.",
      bestFor: "Lunch. Walk uphill past the museum into the residential area.",
      priceTier: 1,
    },
    {
      slug: "zhaoxing-dong-family-kitchen",
      name: "Zhaoxing Dong Family Kitchen",
      chineseName: "\u4f97\u5bb6\u53a8\u623f",
      category: "Village Dining",
      topPick: true,
      location:
        "Zhaoxing village, near the central drum tower",
      priceRange: "$4-8/p",
      cuisine: "Dong home cooking — pickled fish, glutinous rice, oil tea",
      description:
        "Dong cuisine is distinct from Miao — heavier on pickled and fermented fish, glutinous rice dishes, and the unique 'oil tea' (youcha) that is both a drink and a meal. Small family restaurants around the drum towers serve dishes prepared exactly as the family eats them [5].",
      whatToOrder:
        "Pickled fish (suanyu), glutinous rice steamed in leaves, oil tea (youcha — a savory tea with puffed rice, peanuts, and scallions), smoked duck, and local river fish.",
      bestFor: "Either meal. Try oil tea for breakfast — it's how Dong villagers start their day.",
      priceTier: 1,
    },
    {
      slug: "langde-welcome-feast",
      name: "Langde Village Welcome Feast",
      chineseName: "\u6717\u5fb7\u8fce\u5bbe\u5bb4",
      category: "Village Dining",
      topPick: false,
      location: "Langde Upper Miao Village, communal dining hall",
      priceRange: "$8-15/p",
      cuisine: "Ceremonial Miao feast — long table style with rice wine",
      description:
        "A more intimate version of the long table banquet, served in Langde's communal hall after the welcome ceremony. Dishes are simpler than Xijiang's more commercialized offerings but feel more genuine — smoked meats, sour greens, rice wine poured from buffalo-horn cups [6].",
      whatToOrder:
        "The feast is preset — typically 8-12 dishes including smoked pork, sour fish, pickled vegetables, sticky rice, river snails, and unlimited rice wine.",
      bestFor: "Lunch, arranged through guide or village contact in advance.",
      priceTier: 1,
    },

    // — Guiyang Urban —
    {
      slug: "si-wa-wa-stall",
      name: "Si Wa Wa Street Stalls",
      chineseName: "\u4e1d\u5a03\u5a03",
      category: "Street Food",
      topPick: true,
      location:
        "Guiyang — Erqi Lu night market area and old city streets",
      priceRange: "$2-4/p",
      cuisine: "Guiyang's signature street snack — rice paper wraps with dozens of fillings",
      description:
        "Translucent rice paper wrappers filled with shredded vegetables, peanuts, pickled radish, crispy soybeans, and cilantro, then doused in a spicy-sour dipping sauce. Each stall offers 15-20+ filling options, and assembling your own combinations is half the fun. The name means 'silk-wrapped baby' from the shape [11].",
      whatToOrder:
        "Order a plate of rice paper wrappers and fill them yourself from the array of toppings. Pair with sour plum juice.",
      bestFor: "Afternoon snack or light dinner at the night market.",
      priceTier: 1,
    },
    {
      slug: "lao-kaili-restaurant",
      name: "Lao Kaili (Old Kaili)",
      chineseName: "\u8001\u51ef\u91cc\u9178\u6c64\u9c7c",
      category: "Regional Guizhou",
      topPick: false,
      location:
        "Multiple branches in Guiyang; flagship near Qianling Park",
      priceRange: "$8-14/p",
      cuisine: "Refined Guizhou cuisine — the best sour soup fish in the provincial capital",
      description:
        "A Guiyang institution that has elevated Guizhou village cooking into a polished restaurant experience without losing authenticity. Their sour soup fish uses a proprietary fermented base and high-quality river fish. Clean, modern setting with local families filling every table at peak hours [11].",
      whatToOrder:
        "Sour soup fish (signature), Guizhou-style chicken with chili (lajiao ji), folded ear root salad (zhe'ergen — an acquired taste, pungent and herbal), potato cakes.",
      bestFor: "Lunch or dinner. Arrive before 6 PM to avoid long waits.",
      priceTier: 1,
    },
    {
      slug: "erqi-lu-shaokao",
      name: "Erqi Lu Night Barbecue Strip",
      chineseName: "\u4e8c\u4e03\u8def\u70e7\u70e4",
      category: "Night Markets",
      topPick: false,
      location:
        "Erqi Lu, central Guiyang — the city's legendary late-night food street",
      priceRange: "$3-8/p",
      cuisine: "Guiyang-style shaokao (street barbecue) — skewered meats, tofu, vegetables over charcoal",
      description:
        "Guiyang's barbecue culture rivals any city in China. Tiny metal tables and plastic stools line the street as vendors grill skewers of lamb, chicken wings, tofu, eggplant, and the distinctly Guizhou addition of folded ear root (zhe'ergen) over charcoal, dusted with cumin and chili powder. Cold beer is essential accompaniment [11].",
      whatToOrder:
        "Lamb skewers, grilled eggplant, crispy tofu skin, chicken cartilage, cold beer. Try grilled zhe'ergen if you're adventurous.",
      bestFor: "Late night, 9 PM onward. Peak atmosphere around 10-11 PM.",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ──────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Guiyang Longdongbao Airport has direct flights from Beijing (3 hrs), Shanghai (2.5 hrs), and most major Chinese cities.",
      "Kaili is ~2.5 hrs by car or ~1.5 hrs by high-speed rail from Guiyang. Hire a private car and driver for maximum flexibility between villages — this is the single best investment for the trip.",
      "Roads between villages are winding mountain roads. Budget extra time and carry motion sickness medication if prone. Some villages require the last stretch on foot.",
      "Within villages, everything is on foot. Paths are cobblestone or packed earth, often steep — sturdy shoes essential.",
    ],
    "Food & Dining": [
      "Guizhou cuisine is sour-forward and chili-heavy — the flavor profile is unlike any other Chinese region. Fermented tomato, fermented chili (huajiao), and pickled vegetables form the backbone.",
      "Rice wine (mijiu) flows freely in village settings — declining politely is acceptable, but one toast with your host is a gesture of respect.",
      "Zhe'ergen (folded ear root / houttuynia) appears in many dishes — it tastes like a cross between cilantro and fish. It is an acquired taste but considered a delicacy locally.",
      "For 3 people, order 4-5 dishes family-style. Village restaurants rarely have menus — point at what others are eating or ask the cook to choose.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay work even in remote villages. Cash is essential backup — some village markets are cash-only.",
      "Language: English is virtually nonexistent outside Guiyang hotels. Download offline translation (Google Translate or Baidu). Many Miao and Dong villagers speak their own languages alongside Mandarin.",
      "VPN: Download and configure before arriving in China — Google, WhatsApp, Instagram are blocked.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "A knowledgeable local guide (ideally Miao or Dong themselves) transforms the experience. They provide linguistic and cultural access impossible on your own. Book through specialized operators in Kaili or Guiyang.",
      "October festivals are not fixed on the Western calendar — check Miao and Dong festival schedules through local contacts. The Miao New Year festival (if timing aligns) is extraordinary.",
      "4-5 days is the minimum to do southeastern Guizhou justice. Sample itinerary: Guiyang arrival \u2192 Kaili (market day) \u2192 Xijiang (overnight) \u2192 Langde \u2192 Zhaoxing (overnight) \u2192 return.",
      "Accommodation in villages is basic but clean — expect simple guesthouses with hot water, squat toilets in some locations, and limited Wi-Fi. This is part of the charm.",
    ],
  },

  // ─── Sources ─────────────────────────────────────────────────
  sources: [
    "[1] Guizhou October Weather & Travel Guide — China Discovery (https://www.chinadiscovery.com/guizhou/weather/october.html)",
    "[2] Xijiang Miao Village Travel Guide — China Highlights (https://www.chinahighlights.com/guizhou/attraction/xijiang-miao-village.htm)",
    "[3] Guizhou Cuisine and Food Guide — Lost Plate (https://lostplate.com/guizhou-food-guide/)",
    "[4] Kaili Travel Guide — Lonely Planet (https://www.lonelyplanet.com/china/guizhou/kaili)",
    "[5] Zhaoxing Dong Village — China Discovery (https://www.chinadiscovery.com/guizhou/zhaoxing-dong-village.html)",
    "[6] Langde Miao Village — China Highlights (https://www.chinahighlights.com/guizhou/attraction/langde-miao-village.htm)",
    "[7] Basha Miao Village Guide — Wild China (https://www.wildchina.com/blog/basha-miao-village)",
    "[8] Matang Gejia Village Batik — UNESCO Intangible Heritage (https://ich.unesco.org/en/RL/traditional-li-textile-techniques-00302)",
    "[9] Miao Silver and Embroidery Traditions — China Culture (https://www.chinaculture.org/focus/2018-04/17/content_1247429.htm)",
    "[10] Jiabang Rice Terraces — China Discovery (https://www.chinadiscovery.com/guizhou/jiabang-rice-terraces.html)",
    "[11] Guiyang Food Guide — China Travel Guide (https://www.chinatravelguide.com/guiyang/food.htm)",
  ],
};
