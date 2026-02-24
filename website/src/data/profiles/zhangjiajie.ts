import type { CityProfile } from "@/types";

export const zhangjiajieProfile: CityProfile = {
  slug: "zhangjiajie",
  heroPhoto: { src: "/photos/zhangjiajie/_hero.jpg", alt: "Zhangjiajie National Forest Park sandstone pillars", credit: "xiquinhosilva" },
  executiveSummary: [
    'Zhangjiajie in October is the park at its cinematic best — the summer humidity retreats, visibility sharpens to reveal thousands of quartzite sandstone pillars rising from subtropical forest, and the first blush of autumn color creeps across the canopy. These are the formations that inspired the floating Hallelujah Mountains in James Cameron\'s *Avatar*, and in person they are more improbable than any CGI rendering. Morning mist threads between the pillars, eagles circle below you, and the sheer vertical scale — some columns exceed 650 feet — makes familiar mountain landscapes feel tame by comparison [1].',
    "The key to Zhangjiajie is knowing where to go. The main Yuanjiajie scenic area draws enormous Chinese tour groups shuffling between glass-floored overlooks, but the adjacent Yangjiajie section — accessible from the same park — sees a fraction of the visitors and offers genuinely challenging multi-hour hikes along ridgelines with views that rival or surpass the famous spots. Tianmen Mountain, a separate park closer to town, delivers its own brand of drama: a 7,455-meter cable car ride, a cliffside glass skywalk bolted to sheer limestone, and the iconic Tianmen Cave with its 999-step staircase [2]. Beyond the parks, the surrounding Tujia and Miao minority villages offer cultural encounters that most visitors never discover.",
    "The food scene is distinctly Hunanese — assertively spicy, smoke-kissed, and heavy on preserved meats, wild vegetables, and freshwater fish. Tujia specialties like smoked bacon with dried peppers, sour fish soup, and three-layer pork (sanxiaguo) are intensely flavorful and impossible to find outside this region. Zhangjiajie is not a refined food city — it is a place where you eat hearty mountain cooking after a day of serious hiking, and that is exactly what the food does well [3].",
  ],
  famousFor: [
    "Avatar-inspiring sandstone pillars",
    "Tianmen Mountain glass skywalk",
    "Yangjiajie wilderness hiking",
    "Tujia minority culture",
    "Hunanese spicy cuisine",
    "dramatic canyon scenery",
  ],
  whyItFits: [
    "World-class hiking through some of the most dramatic scenery on Earth",
    "Yangjiajie section offers crowd-free ridgeline hikes rivaling the famous viewpoints",
    "Tujia and Miao minority villages with living cultural traditions",
    "Hearty Hunanese mountain cooking — spicy, smoky, and deeply satisfying after long hikes",
    "October brings ideal visibility, comfortable temperatures, and early autumn color",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 73,
      avgLow: 55,
      rainChance: 20,
      precip: 0.8,
      sunrise: "6:22 AM",
      sunset: "6:10 PM",
      conditions: "Warm days, pleasant; lingering summer moisture; early autumn color begins",
    },
    {
      period: "Mid Oct",
      avgHigh: 68,
      avgLow: 50,
      rainChance: 18,
      precip: 0.6,
      sunrise: "6:30 AM",
      sunset: "5:56 PM",
      conditions: "Best visibility; crisp mornings; peak mist effects around pillars [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 62,
      avgLow: 45,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:38 AM",
      sunset: "5:44 PM",
      conditions: "Cooler; excellent hiking weather; autumn foliage deepening; fewer visitors",
    },
  ],
  whatToPack:
    "Layers for 45-73\u00b0F swings between mountain summits and valley trails. Rain shell (mist is common even on clear days), sturdy hiking boots with ankle support, trekking poles recommended for Yangjiajie, light fleece for early mornings on summit platforms.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "wulingyuan-town",
      name: "Wulingyuan Town (Park Gate Area)",
      topPick: true,
      description:
        "The small town at the main entrance to Zhangjiajie National Forest Park. Built to serve park visitors, it has a compact grid of hotels, restaurants, and gear shops within walking distance of the park ticket office and the Wulingyuan scenic area entrance. Not charming in the traditional sense, but supremely practical — you can be on the trail within minutes of waking up [4].",
      whyItFitsUs:
        "Ideal base for multi-day park exploration. Walk to the park entrance, avoiding the 40-minute drive from Zhangjiajie city. Best restaurant selection for Tujia and Hunanese food. Several comfortable mid-range hotels.",
      nearby:
        "Wulingyuan Park Entrance (5-10 min walk), Baofeng Lake (15 min drive), Huanglong Cave (20 min drive)",
      hotels:
        "Pullman Zhangjiajie (best international-standard hotel near the park), Pipaxi Hotel (comfortable mid-range, 5 min walk to park gate)",
    },
    {
      slug: "zhangjiajie-city-center",
      name: "Zhangjiajie City Center (Yongding District)",
      topPick: false,
      description:
        "The actual city of Zhangjiajie sits about 40 minutes from the national park entrance. Has a more genuine local feel — night markets, local Hunanese restaurants, and the Tianmen Mountain cable car base station is located here. Not scenic, but more authentically Chinese than tourist-oriented Wulingyuan [5].",
      whyItFitsUs:
        "Best base for Tianmen Mountain (cable car departs from downtown). Better nightlife and local dining. More affordable accommodation. Good option if splitting time between Tianmen Mountain and the national park.",
      nearby:
        "Tianmen Mountain cable car station (10 min walk), Dayong Old Town (15 min walk), Zhangjiajie National Forest Park (40 min drive)",
      hotels:
        "Da Cheng Shanshui Hotel (solid mid-range near Tianmen cable car), Zhangjiajie International Hotel",
    },
    {
      slug: "yangjiajie-area",
      name: "Yangjiajie Area (Inside the Park)",
      topPick: false,
      description:
        "The quieter, wilder northwestern section of the park with its own entrance. Less developed infrastructure but dramatically fewer crowds. Accommodation options are limited to basic guesthouses, but the trade-off is waking up inside the park with direct trail access to the most spectacular and least-visited viewpoints [6].",
      whyItFitsUs:
        "For serious hikers willing to trade comfort for proximity. Wake up on the mountain and hit the trails before tour groups arrive. The Yibuqian viewpoint at dawn with no one around is a once-in-a-lifetime experience.",
      nearby:
        "Yibuqian viewpoint (30 min hike), Tianbo Mansion (45 min hike), Wulong Village (1 hr hike)",
      hotels:
        "Basic guesthouses and farmstays near Yangjiajie entrance — limited amenities, authentic mountain atmosphere",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "yuanjiajie-avatar-hallelujah-mountains",
      name: "Yuanjiajie — Avatar Hallelujah Mountains",
      topPick: true,
      description:
        'The iconic scenic area where thousands of quartzite sandstone pillars rise from forested valleys, including the "Avatar Hallelujah Mountain" (renamed Southern Sky Column after the film). The first natural bridge at the park, Tianxia Diyi Qiao (No.1 Bridge Under Heaven), spans two pillars at over 1,000 feet above the valley floor. Reached by the Bailong Elevator — a 1,070-foot glass elevator built into the cliff face — or by hiking trails from the valley [1].',
      time: "Half day to full day (4-6 hours including transport)",
      location:
        "Wulingyuan Scenic Area, accessible from Wulingyuan or Forest Park entrance",
      cost: "$32/p ($29 park entrance valid 4 days + $3 Bailong Elevator one-way)",
      tips: [
        "Arrive before 7:30 AM to beat the tour group crush — the pillars are most photogenic in morning mist",
        "Take the Bailong Elevator up but hike down through Golden Whip Stream for a completely different perspective [1]",
        "The park entrance ticket covers all areas for 4 consecutive days — plan to use multiple days",
        "Bring snacks and water; in-park food is overpriced and mediocre",
      ],
      priceTier: 2,
    },
    {
      slug: "yangjiajie-wilderness-hike",
      name: "Yangjiajie Wilderness Hike",
      topPick: true,
      description:
        "The park's best-kept secret for serious hikers. Yangjiajie sees roughly one-tenth the visitors of Yuanjiajie but offers equally dramatic pillar formations, sheer cliff-edge trails, and the Yibuqian (One Step from Heaven) viewpoint — a narrow ridge with thousand-foot drops on both sides. The Wulong Village loop trail descends into valleys where Tujia families still farm terraced fields surrounded by towering pillars [6].",
      time: "Full day (6-8 hours of hiking)",
      location:
        "Northwestern section of Wulingyuan Scenic Area, accessible via park shuttle from Wulingyuan entrance or Yangjiajie entrance",
      cost: "$29/p (covered by 4-day park entrance ticket)",
      tips: [
        "Enter through the Yangjiajie entrance for shortest access — or take the free park shuttle from the main entrance area",
        "The Yibuqian viewpoint is not for those with severe vertigo — the ridge is genuinely narrow",
        "Carry all water and food for the day — no reliable vendors on Yangjiajie trails [6]",
        "Trekking poles highly recommended for the steep descents into Wulong Village",
        "This is the area where you earn the solitude — budget the full day",
      ],
      priceTier: 2,
    },
    {
      slug: "golden-whip-stream-valley-hike",
      name: "Golden Whip Stream Valley Hike",
      topPick: true,
      description:
        "A 7.5-kilometer trail along a crystal-clear stream at the base of the sandstone pillars, offering a completely different perspective from the summit viewpoints — you look up at the columns rather than across at them. Lush subtropical forest, macaque monkeys, and the sound of running water. Relatively flat and gentle compared to the summit hikes, making it a perfect recovery-day walk or afternoon complement to a morning above [7].",
      time: "2.5-3.5 hours (one way, 7.5 km)",
      location:
        "Starts at Forest Park entrance (south gate), ends near Bailong Elevator",
      cost: "$29/p (covered by 4-day park entrance ticket)",
      tips: [
        "Walk the trail from Forest Park entrance toward Bailong Elevator — then take the elevator up to Yuanjiajie for summit views on the same day",
        "Early morning light filters through the canopy beautifully",
        "Watch for Rhesus macaques — keep food sealed and do not feed them [7]",
        "The trail is paved and mostly flat — good option for a lighter hiking day",
      ],
      priceTier: 2,
    },
    {
      slug: "tianmen-mountain",
      name: "Tianmen Mountain and Glass Skywalk",
      topPick: true,
      description:
        "A separate mountain park closer to Zhangjiajie city, famous for the world's longest passenger cable car (7,455 meters), a glass-bottomed skywalk bolted to a sheer 4,700-foot cliff face, and the natural Tianmen Cave — a massive hole through the mountain reached by climbing 999 steps. The cable car ride alone, soaring over the city and then up through cloud layers, is one of China's most dramatic transport experiences [2].",
      time: "Half day (4-5 hours)",
      location:
        "Tianmen Mountain, cable car base station in Zhangjiajie city center (Yongding District)",
      cost: "$38/p ($38 all-inclusive ticket: cable car, skywalk, escalators, bus)",
      tips: [
        "Book tickets online 1-2 days in advance — October is peak season and tickets sell out [2]",
        "Go on a weekday if possible; weekend crowds on the glass skywalk can mean 1-2 hour waits",
        "Route A (cable car up, bus down) is generally better — you ride the cable car fresh and descend the 999 steps to Tianmen Cave",
        "Wear shoes with good grip — the 999 steps are steep and can be slippery from mist",
        "Vertigo warning: the glass skywalk is genuinely exposed at 4,700 feet",
      ],
      priceTier: 2,
    },
    {
      slug: "tianzi-mountain-sunrise",
      name: "Tianzi Mountain Sunrise Viewpoint",
      topPick: false,
      description:
        'The highest point in the Wulingyuan Scenic Area at 4,140 feet, offering panoramic views over a forest of sandstone pillars stretching to the horizon. At dawn, mist fills the valleys and the pillars emerge like islands in a cloud sea. The summit area has several viewpoints including the "Imperial Brush Peak" formation and the "Fairy Scattering Flowers" overlook [8].',
      time: "2-3 hours (early morning, requires staying near the park or very early start)",
      location:
        "Northern section of Wulingyuan Scenic Area, accessible by cable car or hiking trail from Tianzi Mountain entrance",
      cost: "$29/p (covered by 4-day park entrance ticket; cable car $10 one-way)",
      tips: [
        "Sunrise is spectacular but requires arriving by 5:30-6:00 AM — consider staying at a guesthouse inside the park the night before",
        "The hike up from the valley floor is 2-3 hours — cable car takes 10 minutes",
        "Mid-October sunrise is around 6:30 AM; arrive well before for positioning [8]",
        "Bring a headlamp if hiking up pre-dawn",
      ],
      priceTier: 2,
    },
    {
      slug: "baofeng-lake",
      name: "Baofeng Lake",
      topPick: false,
      description:
        "A serene lake nestled in a deep canyon surrounded by towering sandstone walls and subtropical vegetation. Reached by a short hike and then explored by guided wooden boat. The reflections of the pillar formations in the still water create mirror-image compositions. Tujia boatmen sometimes sing folk songs that echo off the canyon walls [9].",
      time: "1.5-2 hours",
      location:
        "Just outside Wulingyuan town, 15 min drive from main park entrance",
      cost: "$10/p (separate ticket from main park)",
      tips: [
        "Best in early morning when the water is perfectly still for reflections",
        "The boat ride is guided and on a set schedule — not much freedom to linger",
        "Good half-day option to pair with an afternoon in the main park [9]",
        "Skip if pressed for time — the main park is far more compelling",
      ],
      priceTier: 1,
    },
    {
      slug: "zhangjiajie-grand-canyon-glass-bridge",
      name: "Zhangjiajie Grand Canyon and Glass Bridge",
      topPick: false,
      description:
        "A deep canyon with waterfalls, cave passages, and a hiking trail, plus the world's highest and longest glass-bottomed pedestrian bridge — 430 meters long, suspended 300 meters above the canyon floor. The bridge is an engineering marvel and the canyon hike below it passes through genuinely dramatic terrain with far fewer visitors than the pillar formations [10].",
      time: "3-4 hours",
      location:
        "Cili County, about 40 min drive east of Wulingyuan town",
      cost: "$20/p ($20 canyon + bridge combo ticket)",
      tips: [
        "Book tickets online in advance — walk-up tickets frequently unavailable in October [10]",
        "The canyon hike involves significant stair-climbing — roughly 3,500 steps total",
        "The glass bridge gets crowded midday; go early or late afternoon",
        "Combines well with Baofeng Lake for a full day outside the main park",
      ],
      priceTier: 2,
    },
    {
      slug: "tujia-minority-village-visit",
      name: "Tujia Minority Village Visit",
      topPick: true,
      description:
        "The Tujia people are one of China's largest minority groups, with a distinct language, architectural tradition (stilted wooden houses called diaojiaolou), textile arts (brocade weaving called xilankapu), and cuisine. Villages around the park — particularly in the Yongding and Sangzhi county areas — retain genuine cultural practices rather than staged tourist performances. A visit with a local guide reveals fermented food traditions, harvest rituals, and folk songs passed down through oral tradition [11].",
      time: "Half day (3-4 hours including travel)",
      location:
        "Various villages in Yongding District and Sangzhi County, 30-60 min from Zhangjiajie city or Wulingyuan",
      cost: "$15-25/p (guide fee shared; village entrance usually free or nominal)",
      tips: [
        "Arrange through a local guide who has genuine relationships with village families — avoid the commercialized \"folk village\" parks near Wulingyuan [11]",
        "October may coincide with harvest activities — ask your guide about timing",
        "Try homemade tuanzi (sticky rice cakes), smoked meats, and locally distilled baijiu if offered",
        "Bring small gifts if visiting a family home — fruit or quality tea is always appropriate",
      ],
      priceTier: 1,
    },
    {
      slug: "dayong-old-town",
      name: "Dayong Old Town (Zhangjiajie Old Town)",
      topPick: false,
      description:
        "The ancient town center of what was historically called Dayong, with a few blocks of surviving Tujia-style stilted wooden architecture along the Lishui River. Partially reconstructed but retains pockets of genuine local life — morning market vendors, elderly residents playing cards, and small family-run Hunanese restaurants. The Puguang Buddhist Temple (dating to the 15th century) anchors the southern end [12].",
      time: "1.5-2 hours",
      location:
        "Zhangjiajie city center, Yongding District, along the Lishui River",
      cost: "Free (Puguang Temple ~$3)",
      tips: [
        "Visit in the early morning for the best atmosphere — local residents shopping, breakfast vendors cooking",
        "The riverside walk toward Puguang Temple is the most scenic stretch [12]",
        "Good activity to combine with Tianmen Mountain (both in the city center)",
        "Skip the tourist souvenir shops and explore the residential back streets",
      ],
      priceTier: 0,
    },
    {
      slug: "zhangjiajie-cooking-experience",
      name: "Hunanese Cooking Experience",
      topPick: false,
      description:
        "Hands-on cooking session learning to prepare Hunan and Tujia mountain dishes — smoked pork with dried chilies, sour fish soup (suanyu), and the beloved sanxiaguo (three-ingredient wok). Typically hosted in a local home kitchen or small cooking school, starting with a visit to the morning wet market to select ingredients [3].",
      time: "3-4 hours (including market visit)",
      location:
        "Wulingyuan town or Zhangjiajie city — arranged through local guides or guesthouses",
      cost: "$20-35/p (per person, all-inclusive)",
      tips: [
        "Book through your hotel or a local guide rather than large tour operators — smaller groups mean more hands-on time",
        "Request Tujia-specific dishes rather than generic Hunanese cooking [3]",
        "The wet market visit is half the experience — do not skip it",
        "Great rainy-day alternative when park visibility is poor",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Hunanese —
    {
      slug: "fu-zheng-yu",
      name: "Fu Zheng Yu",
      chineseName: "\u5bcc\u6b63\u6bc5",
      category: "Hunanese",
      topPick: true,
      location:
        "Wulingyuan town, near the main park entrance on Wuling Boulevard",
      priceRange: "$8-14/p",
      cuisine: "Authentic Hunanese and Tujia mountain cooking",
      description:
        "The most consistently recommended restaurant near the park by both locals and experienced travelers. Specializes in Tujia-Hunanese dishes with genuinely smoky wok breath (wok hei) and fiery dried chili heat. Portions are huge and designed for sharing after a day of hiking [3].",
      whatToOrder:
        "Sanxiaguo (three-ingredient wok — pick your three from smoked pork, intestines, tofu, etc.), suan cai yu (sour pickled vegetable fish), gan guo fei chang (dry-pot intestines with chili), steamed rice.",
      bestFor: "Dinner after a full day in the park",
      priceTier: 1,
    },
    {
      slug: "old-wu-jia-kitchen",
      name: "Old Wu Family Kitchen",
      chineseName: "\u8001\u5434\u5bb6\u53a8\u623f",
      category: "Hunanese",
      topPick: true,
      location:
        "Wulingyuan town, side street off the main tourist strip",
      priceRange: "$6-12/p",
      cuisine: "Home-style Tujia cooking",
      description:
        "Family-run hole-in-the-wall where Old Wu and his wife cook the same dishes they grew up eating in nearby villages. No English menu, no concessions to tourist palates — just intensely flavorful mountain food served in a cramped, steamy room. The smoked pork with dried peppers is legendary among repeat visitors [3].",
      whatToOrder:
        "Larou chao xianggan (smoked bacon with dried tofu), suanyu (Tujia-style sour fish), chao yeshan (stir-fried wild mountain vegetables), steamed pork belly with preserved mustard greens.",
      bestFor: "Either meal; lunch is less crowded",
      priceTier: 1,
    },
    {
      slug: "sanxiaguo-king",
      name: "Sanxiaguo King",
      chineseName: "\u4e09\u4e0b\u9505\u738b",
      category: "Hunanese",
      topPick: false,
      location:
        "Zhangjiajie city center, Yongding District, near Dayong Old Town",
      priceRange: "$5-10/p",
      cuisine: "Sanxiaguo specialist — the signature Zhangjiajie dish",
      description:
        "Specializes exclusively in sanxiaguo — the defining dish of Zhangjiajie where you choose three ingredients (smoked pork, pork belly, intestines, tofu, radish, etc.) and they are wok-fried together in a blisteringly hot dry pot with dried chilies and Tujia spices. Simple concept, extraordinary when done well [13].",
      whatToOrder:
        "Classic sanxiaguo (smoked bacon + dried tofu + chili — the essential combination), add intestines if adventurous. Rice on the side is mandatory.",
      bestFor: "Lunch or dinner; best paired with a Tianmen Mountain day",
      priceTier: 1,
    },
    {
      slug: "hunan-taste-restaurant",
      name: "Hunan Taste Restaurant",
      chineseName: "\u6e58\u91cc\u4eba\u5bb6",
      category: "Hunanese",
      topPick: false,
      location:
        "Wulingyuan town, Wuling Boulevard main strip",
      priceRange: "$8-15/p",
      cuisine: "Broad Hunanese menu with some Tujia dishes",
      description:
        "More polished than the hole-in-the-wall options, with an English picture menu and air conditioning — making it the most accessible restaurant for visitors unfamiliar with Hunanese cuisine. The cooking is still solidly authentic, just slightly less fiery than the most hardcore local joints [3].",
      whatToOrder:
        "Duojiao yu tou (chopped chili fish head — a classic Hunan dish), hongshao rou (red-braised pork belly), dry-fried green beans with minced pork, egg and tomato soup for relief from the spice.",
      bestFor: "Either meal; good first-night option to orient your palate",
      priceTier: 1,
    },
    // — Street Food / Casual —
    {
      slug: "wulingyuan-night-market",
      name: "Wulingyuan Night Market Street",
      chineseName: "\u6eaa\u5e03\u8857\u591c\u5e02",
      category: "Street Food",
      topPick: true,
      location:
        "Xibu Street, Wulingyuan town, along the creek near the park entrance",
      priceRange: "$2-6/p",
      cuisine: "Grilled skewers, Tujia snacks, stinky tofu, rice noodles",
      description:
        "A lively evening street market along a creek where vendors sell grilled lamb and pork skewers, Changsha-style stinky tofu (chou doufu), Tujia-style sticky rice cakes (ciba), and local rice noodles. The atmosphere is the draw — families strolling, red lanterns reflected in the water, smoky charcoal grills. Quality varies by vendor but the overall experience is genuinely fun [14].",
      whatToOrder:
        "Stinky tofu (embrace the smell — the taste is crispy and savory), lamb skewers, ciba with brown sugar, grilled freshwater fish, cold Xuejin beer.",
      bestFor: "Evening, 7-10 PM — best atmosphere after dark",
      priceTier: 1,
    },
    {
      slug: "sisters-rice-noodles",
      name: "Sisters Rice Noodles",
      chineseName: "\u59d0\u59b9\u7c73\u7c89",
      category: "Street Food",
      topPick: false,
      location:
        "Wulingyuan town, near the park entrance bus station",
      priceRange: "$2-4/p",
      cuisine: "Hunan-style rice noodles (mifen)",
      description:
        "No-frills breakfast and lunch spot serving Hunan-style rice noodles — thicker and chewier than Guilin noodles, topped with minced pork, pickled beans, dried chilies, and a ladleful of rich bone broth. This is what locals eat before a day of work in the park. Opens early (6 AM), closes by early afternoon [3].",
      whatToOrder:
        "Niurou mifen (beef rice noodles), shaorou mifen (pork rice noodles). Add a fried egg and extra chili oil.",
      bestFor: "Breakfast before entering the park (6-7 AM)",
      priceTier: 1,
    },
    // — Tujia Specialties —
    {
      slug: "tujia-farmhouse-restaurant",
      name: "Tujia Farmhouse Restaurant",
      chineseName: "\u571f\u5bb6\u519c\u5bb6\u4e50",
      category: "Tujia Specialties",
      topPick: true,
      location:
        "Various locations along the road between Zhangjiajie city and Wulingyuan — look for stilted wooden buildings with smoke rising from the kitchen",
      priceRange: "$6-12/p",
      cuisine: "Authentic Tujia home cooking — smoked meats, wild vegetables, sour fish",
      description:
        "Not a single restaurant but a category — farmhouse restaurants (nongjiale) run by Tujia families in their own stilted wooden homes. The cooking is done over wood fires, the ingredients come from their fields and the surrounding forest, and the smoked meats hang from the kitchen rafters. This is where the most authentic Tujia food lives. Quality varies but the best are extraordinary [11].",
      whatToOrder:
        "Whatever the family is cooking that day — typically smoked pork, wild fern shoots, homemade doufu, sour fish soup, and hand-pounded ciba. Ask for their baijiu (grain liquor) if you are feeling bold.",
      bestFor: "Lunch on a day exploring villages outside the main park",
      priceTier: 1,
    },
    {
      slug: "rock-bar-and-grill",
      name: "Rock Bar & Grill",
      chineseName: undefined,
      category: "International",
      topPick: false,
      location:
        "Wulingyuan town, near Xibu Street",
      priceRange: "$8-16/p",
      cuisine: "Western-Chinese fusion, burgers, pizza, cold beer",
      description:
        "The unofficial hangout for international hikers and backpackers in Wulingyuan. Serves decent Western comfort food alongside Chinese dishes, has English-speaking staff, cold imported beer, and a casual atmosphere where you can compare trail notes with other hikers. Not the reason you came to Zhangjiajie, but after four days of heavy Hunanese spice, sometimes you just want a burger [14].",
      whatToOrder:
        "Burger, pizza, or whatever non-spicy option appeals. Cold Tsingtao or local craft beer.",
      bestFor: "Evening; palate relief after days of intense Hunanese food",
      priceTier: 1,
    },
    // — Splurge —
    {
      slug: "pullman-zhangjiajie-restaurant",
      name: "Pullman Zhangjiajie Main Restaurant",
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "Pullman Zhangjiajie Hotel, Wulingyuan",
      priceRange: "$25-45/p",
      cuisine: "Upscale Hunanese and Chinese, plus international breakfast buffet",
      description:
        "The most refined dining option near the park. The kitchen executes Hunanese classics with better ingredients and more finesse than the town restaurants, and the international breakfast buffet is genuinely good fuel for a long hiking day. Not the most authentic experience, but a welcome luxury after days of rustic mountain cooking [4].",
      whatToOrder:
        "Chef's selection of Hunanese dishes, seasonal wild mushroom dishes (October is still mushroom season), Hunan-style steamed fish. Breakfast buffet is the real draw.",
      bestFor: "Breakfast before hiking; occasional splurge dinner",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Airport: Zhangjiajie Hehua Airport (DYG) has direct flights from Beijing, Shanghai, Guangzhou, and Chengdu. ~30 min taxi to city center, ~50 min to Wulingyuan.",
      "Park transport: Free shuttle buses operate within the Wulingyuan Scenic Area connecting major trailheads and the Bailong Elevator. Efficient but crowded at peak hours.",
      "City to park: Public buses run every 10-15 min between Zhangjiajie city center and Wulingyuan town (~40 min, $2). Taxis ~$15-20 one way.",
      "Within town: Wulingyuan town is small enough to walk everywhere. In Zhangjiajie city, use Didi (China's Uber) — very affordable.",
    ],
    "Food & Dining": [
      "Spice level: Hunanese food is aggressively spicy — even by Chinese standards, it is among the hottest regional cuisines. Say 'wei la' (mild spicy) when ordering if you want to ease in.",
      "Ordering for 3: Order 3-4 dishes family-style plus rice. Sanxiaguo is a full meal in itself. Always order a non-spicy vegetable dish for balance.",
      "Water: Drink bottled water only. Carry at least 1.5 liters per person per hiking day — in-park water is expensive ($2-3 per bottle).",
      "Tipping: Not expected in mainland China.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay accepted almost everywhere, including small vendors. Set up international Alipay before the trip. Carry cash for remote village visits and park vendors.",
      "VPN: Download and configure before arriving — Google, WhatsApp, Instagram are blocked in China.",
      "Language: Very limited English throughout Zhangjiajie. Download offline Chinese on Google Translate before arrival. The Pullman hotel staff speak some English.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Park tickets: The 4-day Wulingyuan pass must be purchased with a passport. Buy online in advance during October peak season — the park can restrict daily entry numbers [1].",
      "Tianmen Mountain: Book tickets 1-2 days ahead online. Choose Route A (cable car up) or Route B (bus up) at purchase time — you cannot switch later [2].",
      "Physical preparation: Yangjiajie and Tianzi Mountain hikes involve 15,000-25,000+ steps per day on uneven terrain. Arrive with hiking-ready fitness.",
      "Weather contingency: Fog and mist are common even in October. Low visibility days are not wasted — the pillars emerging from mist create the most dramatic and atmospheric scenes. Rain days are best spent in town or at cooking/cultural experiences.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Zhangjiajie National Forest Park Guide \u2014 China Discovery (https://www.chinadiscovery.com/hunan/zhangjiajie/zhangjiajie-national-forest-park.html)",
    "[2] Tianmen Mountain Travel Guide \u2014 China Highlights (https://www.chinahighlights.com/zhangjiajie/attraction/tianmen-mountain.htm)",
    "[3] Zhangjiajie Food Guide \u2014 Lost Plate (https://lostplate.com/zhangjiajie-food-guide/)",
    "[4] Where to Stay in Zhangjiajie \u2014 China Discovery (https://www.chinadiscovery.com/hunan/zhangjiajie/zhangjiajie-hotels.html)",
    "[5] Zhangjiajie City Guide \u2014 Travel China Guide (https://www.travelchinaguide.com/cityguides/hunan/zhangjiajie/)",
    "[6] Yangjiajie Scenic Area Guide \u2014 China Highlights (https://www.chinahighlights.com/zhangjiajie/attraction/yangjiajie.htm)",
    "[7] Golden Whip Stream Hiking Guide \u2014 China Discovery (https://www.chinadiscovery.com/hunan/zhangjiajie/golden-whip-stream.html)",
    "[8] Tianzi Mountain Guide \u2014 China Highlights (https://www.chinahighlights.com/zhangjiajie/attraction/tianzi-mountain.htm)",
    "[9] Baofeng Lake \u2014 Travel China Guide (https://www.travelchinaguide.com/attraction/hunan/zhangjiajie/baofeng-lake.htm)",
    "[10] Zhangjiajie Grand Canyon Glass Bridge \u2014 China Discovery (https://www.chinadiscovery.com/hunan/zhangjiajie/zhangjiajie-glass-bridge.html)",
    "[11] Tujia Minority Culture \u2014 China Highlights (https://www.chinahighlights.com/travelguide/nationality/tujia.htm)",
    "[12] Dayong Old Town \u2014 Travel China Guide (https://www.travelchinaguide.com/attraction/hunan/zhangjiajie/dayong-ancient-city.htm)",
    "[13] Zhangjiajie Sanxiaguo Guide \u2014 Hunan Tourism (https://www.hunan.gov.cn/eng/Tourism/Food/)",
    "[14] Wulingyuan Town Guide \u2014 TripAdvisor (https://www.tripadvisor.com/Tourism-g494934-Wulingyuan_District-Vacations.html)",
  ],
};
