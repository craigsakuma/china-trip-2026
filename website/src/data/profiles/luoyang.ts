import type { CityProfile } from "@/types";

export const luoyangProfile: CityProfile = {
  slug: "luoyang",
  heroPhoto: { src: "/photos/luoyang/_hero.jpg", alt: "Longmen Grottoes carved into cliffs along the Yi River, Luoyang", credit: "G41rn8" },
  executiveSummary: [
    "Luoyang served as the capital of thirteen Chinese dynasties across nearly two millennia, making it one of the most historically layered cities on earth. In mid-October the summer heat has broken, skies turn clear and crisp (highs around 66-73\u00b0F), and the Longmen Grottoes \u2014 over 2,300 caves carved into limestone cliffs along the Yi River \u2014 glow in warm autumn light without the crushing crowds of peak season. The city feels genuinely un-touristed by Western visitors, and its scale is walkable and human compared to megacities like Beijing or Xi\u2019an.",
    "The food alone makes Luoyang worth the detour. The famous water banquet (shui xi) \u2014 a multi-course soup-based feast originating in the Tang Dynasty \u2014 is unlike anything else in Chinese cuisine, and the morning soup culture (beef soup, pepper soup, sour noodles) reflects a city where locals still eat with deep regional pride. White Horse Temple, founded in 68 AD as China\u2019s first Buddhist temple, predates every other Buddhist site in the country and retains a genuine devotional atmosphere far removed from the tourist circuit.",
    "Luoyang rewards two focused days: one for the Longmen Grottoes and Yi River area, another for the Old Town, Luoyang Museum, Sui-Tang dynasty ruins, and a deep dive into the food scene. With a knowledgeable local guide, the artistic evolution across the grottoes \u2014 from Northern Wei austerity to Tang Dynasty opulence \u2014 becomes a masterclass in Chinese Buddhist art that rivals anything in the country.",
  ],
  famousFor: [
    "Longmen Grottoes (UNESCO)",
    "White Horse Temple",
    "water banquet (shui xi)",
    "capital of 13 dynasties",
    "morning soup culture",
    "peonies",
    "Sui-Tang dynasty ruins",
  ],
  whyItFits: [
    "World-class Buddhist art at Longmen Grottoes \u2014 rivaling Dunhuang with far fewer visitors",
    "Unique food traditions found nowhere else in China (water banquet, morning soups)",
    "Deep layered history best experienced with an expert guide",
    "Compact and walkable \u2014 two focused days cover the highlights thoroughly",
    "Genuinely off the Western tourist radar with an authentic local atmosphere",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 73,
      avgLow: 55,
      rainChance: 18,
      precip: 0.6,
      sunrise: "6:15 AM",
      sunset: "6:00 PM",
      conditions: "Warm and clear; comfortable for extended outdoor exploring",
    },
    {
      period: "Mid Oct",
      avgHigh: 68,
      avgLow: 50,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:25 AM",
      sunset: "5:42 PM",
      conditions: "Crisp autumn weather; ideal for Longmen Grottoes; excellent visibility",
    },
    {
      period: "Late Oct",
      avgHigh: 62,
      avgLow: 45,
      rainChance: 12,
      precip: 0.3,
      sunrise: "6:38 AM",
      sunset: "5:25 PM",
      conditions: "Cooler; light jacket needed mornings and evenings; fewer visitors",
    },
  ],
  whatToPack:
    "Layers for 45-73\u00b0F swings. Light jacket and fleece for mornings and evenings. Comfortable walking shoes for grottoes and Old Town cobblestones. Sun protection for exposed riverside walks at Longmen.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "old-town-lao-cheng",
      name: "Old Town (Lao Cheng)",
      topPick: true,
      description:
        "Luoyang\u2019s historic heart, north of the Luo River. Narrow lanes, traditional shopfronts, the famous Old Town night market on Xinghua Street, and a concentration of water-banquet restaurants and Hanfu costume shops. The old city walls frame a district that still feels lived-in, with morning soup vendors, local markets, and genuine neighborhood energy.",
      whyItFitsUs:
        "Most atmospheric base for exploring Luoyang. Night market, best breakfast soup spots, and Old Town temples all within walking distance. Plenty of character-filled guesthouses in traditional buildings.",
      nearby:
        "Lijingmen Gate (5 min), Old Town Night Market (immediate), Luoyang Museum (15 min taxi), Longmen Grottoes (25 min taxi)",
      hotels:
        "Luoyang Old Town boutique guesthouses in traditional courtyard buildings \u2014 affordable and atmospheric",
    },
    {
      slug: "downtown-xigong-jianxi",
      name: "Downtown (Xigong / Jianxi)",
      topPick: false,
      description:
        "Luoyang\u2019s modern commercial center with the widest range of hotels from budget to luxury. Wangcheng Park (home to the annual Peony Festival) anchors the district. Less historic character than the Old Town, but more convenient transit connections and walkable access to Xigong Food Street.",
      whyItFitsUs:
        "Best selection of mid-range and upscale hotels. Convenient base if arriving by train. Xigong Food Street provides excellent local breakfast and late-night eating without the tourist markup.",
      nearby:
        "Wangcheng Park (5 min), Xigong Food Street (5 min), Luoyang Museum (10 min taxi), Old Town (10 min taxi)",
      hotels:
        "Hyatt Place Luoyang (modern, well-located), Luoyang Christian\u2019s Hotel (4-star, good value with airport shuttle)",
    },
    {
      slug: "longmen-yi-river-area",
      name: "Longmen / Yi River Area",
      topPick: false,
      description:
        "The area surrounding the Longmen Grottoes along the Yi River, about 12 km south of the city center. Quieter and more scenic, with views of the limestone cliffs. A handful of guesthouses cater to visitors who want early-morning access to the grottoes before tour groups arrive.",
      whyItFitsUs:
        "Ideal if you want first entry to the grottoes at opening time. Peaceful riverside setting. Limited dining options \u2014 best as a strategic one-night stay rather than a full base.",
      nearby:
        "Longmen Grottoes (5 min walk), Xiangshan Temple (10 min walk), Bai Juyi\u2019s Tomb (10 min walk), Old Town (25 min taxi)",
      hotels:
        "Small guesthouses near the scenic area entrance \u2014 basic but functional",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "longmen-grottoes",
      name: "Longmen Grottoes (UNESCO World Heritage)",
      photo: { src: "/photos/luoyang/longmen-grottoes.jpg", alt: "Longmen Grottoes (UNESCO World Heritage), Luoyang" },
      topPick: true,
      description:
        "Over 2,300 caves and 110,000 Buddhist statues carved into limestone cliffs flanking the Yi River, spanning 400 years from the Northern Wei Dynasty (493 AD) through the Tang Dynasty. The artistic evolution is extraordinary \u2014 from the austere, elongated figures of Northern Wei to the full-bodied, sensual forms of the Tang. The colossal Vairocana Buddha (17 meters tall, carved under Empress Wu Zetian\u2019s patronage) is one of the finest stone sculptures in the world [3].",
      time: "3-4 hours (half day with guide)",
      location:
        "12 km south of Luoyang city center along the Yi River. 25-30 min by taxi",
      cost: "$17/p ($12.50 entrance + $13/p shared guide for group of 3)",
      tips: [
        "Arrive at 8:00 AM opening to beat tour groups \u2014 start on the West Hill (main caves) and work south to north",
        "A knowledgeable guide transforms this from \u2018looking at old statues\u2019 into understanding 400 years of artistic, political, and religious evolution [3]",
        "The ticket includes West Hill, East Hill, Xiangshan Temple, and Bai Juyi\u2019s Tomb \u2014 allow time for all four [4]",
        "Cross the bridge to the East Hill for the best panoramic photograph of the West Hill cliff face",
        "Book tickets online in advance \u2014 October weekends can sell out",
      ],
      priceTier: 1,
    },
    {
      slug: "white-horse-temple",
      name: "White Horse Temple (Bai Ma Si)",
      topPick: true,
      description:
        "Founded in 68 AD, this is the first Buddhist temple ever built in China \u2014 predating every other Buddhist site in the country by centuries. Two white stone horses guard the entrance, commemorating the horses that carried Buddhist scriptures from India. The complex includes the original Chinese temple grounds plus Thai, Burmese, and Indian temple sections built through modern cultural exchange. Active worship continues daily [5].",
      time: "2-3 hours",
      location:
        "12 km east of Luoyang city center. Bus No. 56 from railway station or 25 min by taxi",
      cost: "$7/p ($7 entrance)",
      tips: [
        "Visit early morning for a peaceful, devotional atmosphere before tour buses arrive",
        "The original Chinese halls are the main draw \u2014 don\u2019t rush through to the newer international temples",
        "The Qiyun Pagoda behind the main complex (a short walk east) dates to the 12th century and is often overlooked",
        "Combine with Luoyang Museum on the same half-day circuit",
      ],
      priceTier: 1,
    },
    {
      slug: "luoyang-museum",
      name: "Luoyang Museum",
      photo: { src: "/photos/luoyang/luoyang-museum.jpg", alt: "Luoyang Museum, Luoyang" },
      topPick: true,
      description:
        "A world-class museum housing artifacts from Luoyang\u2019s extraordinary run as capital of 13 dynasties. Seven exhibition halls cover everything from Shang Dynasty bronze ritual vessels to Tang Dynasty tri-colored glazed pottery (sancai). The royal relics and calligraphy collections are exceptional. Free admission makes this one of the best value cultural experiences in all of China [10].",
      time: "2-3 hours",
      location:
        "Luolong New District, about 15 min by taxi from Old Town",
      cost: "Free (passport/ID required for entry)",
      tips: [
        "Don\u2019t miss the Tang sancai (tri-colored pottery) hall \u2014 Luoyang was the epicenter of this art form",
        "The Shang and Zhou bronze collections contextualize just how ancient Luoyang\u2019s history truly is",
        "Audio guides available \u2014 worthwhile for the depth of historical context",
        "Pairs naturally with the nearby Sui-Tang Dynasty Ruins on the same afternoon",
      ],
      priceTier: 0,
    },
    {
      slug: "sui-tang-dynasty-ruins-national-heritage-park",
      name: "Sui-Tang Dynasty Ruins National Heritage Park",
      photo: { src: "/photos/luoyang/sui-tang-dynasty-ruins-national-heritage-park.jpg", alt: "Sui-Tang Dynasty Ruins National Heritage Park, Luoyang" },
      topPick: false,
      description:
        "A vast archaeological park built on the ruins of the Sui and Tang Dynasty imperial capital. The reconstructed Yingtianmen Gate (the main palace gate, rebuilt in 2019) stands 50 meters tall and houses an excellent museum inside. The Mingtang and Tiantang halls recreate the ceremonial heart of Empress Wu Zetian\u2019s court. On Friday and Saturday evenings, a dramatic 3D light projection show illuminates the ruins [13].",
      time: "2-3 hours (longer if catching the evening light show)",
      location:
        "Central Luoyang, Luolong District. 10-15 min by taxi from Old Town",
      cost: "$8/p ($8 combined entrance for Yingtianmen + Mingtang/Tiantang)",
      tips: [
        "Visit in late afternoon and stay for dusk when the buildings are dramatically illuminated",
        "The Friday/Saturday night 3D projection show on Yingtianmen is spectacular and free with park admission",
        "Climb to the top of Yingtianmen for panoramic views of the park and surrounding city",
        "The interior museum exhibitions explain Luoyang\u2019s role as Tang Dynasty co-capital alongside Xi\u2019an",
      ],
      priceTier: 1,
    },
    {
      slug: "old-town-and-lijingmen-gate",
      name: "Old Town Walk and Lijingmen Gate",
      topPick: false,
      description:
        "Luoyang\u2019s Old Town retains its traditional grid of narrow lanes, local markets, and centuries-old shopfronts. Lijingmen Gate, a reconstructed section of the old city wall, marks the western entrance and offers rooftop views. The area is increasingly popular for Hanfu (traditional costume) culture \u2014 young Chinese visitors dress in Tang Dynasty clothing to photograph themselves against the old architecture [14].",
      time: "1.5-2 hours (more if exploring food stalls)",
      location:
        "Old Town (Lao Cheng), north bank of the Luo River",
      cost: "Free (Lijingmen Gate rooftop: $2)",
      tips: [
        "Walk from Lijingmen Gate eastward through the old lanes toward the night market area",
        "Morning is best for seeing authentic local life \u2014 soup vendors, produce markets, elderly residents",
        "The Hanfu phenomenon is fascinating to observe even if you don\u2019t participate",
        "Continue to Xinghua Street in the evening for the night market",
      ],
      priceTier: 0,
    },
    {
      slug: "old-town-night-market",
      name: "Old Town Night Market (Xinghua Street)",
      photo: { src: "/photos/luoyang/old-town-night-market.jpg", alt: "Old Town Night Market (Xinghua Street), Luoyang" },
      topPick: true,
      description:
        "A 160-meter stretch of Xinghua Street in the Old Town transforms nightly into a buzzing food market hung with red lanterns. This is where locals eat \u2014 stalls serve bufantang (a hearty Luoyang soup), grilled skewers, peony cakes, water banquet dishes in small portions, and snacks from across China. The atmosphere is lively, affordable, and genuinely local [14].",
      time: "1.5-2 hours (evening)",
      location:
        "Xinghua Street, Old Town. Walk south from Zhongzhou East Road into the old city lanes",
      cost: "$3-8/p (street food varies)",
      tips: [
        "Arrive around 7:00-8:00 PM when the market is in full swing",
        "Try bufantang (a thick Luoyang soup), lamb skewers, and peony cake",
        "Bring cash for smaller stalls \u2014 most accept mobile payment but some don\u2019t",
        "The surrounding Old Town lanes are beautifully illuminated and worth wandering after eating",
      ],
      priceTier: 1,
    },
    {
      slug: "luoyi-ancient-city",
      name: "Luoyi Ancient City",
      photo: { src: "/photos/luoyang/luoyi-ancient-city.jpg", alt: "Luoyi Ancient City, Luoyang" },
      topPick: false,
      description:
        "A reconstructed historical complex on the site of the ancient Zhou Dynasty capital (dating back over 3,000 years) on Luoyang\u2019s eastern outskirts. While partly a commercial development, the architecture is impressive and the site comes alive at dusk with dramatic illuminations. Popular with young Chinese visitors for Hanfu photography and cultural performances.",
      time: "1.5-2 hours (best at dusk)",
      location:
        "Eastern outskirts of Luoyang, about 20 min by taxi from Old Town",
      cost: "$4/p ($4 entrance)",
      tips: [
        "Visit at dusk for the best atmosphere and illuminations",
        "Worth combining with a meal at one of the site\u2019s restaurants for a full evening experience",
        "Skip if short on time \u2014 the Old Town and Sui-Tang Ruins are more authentic",
      ],
      priceTier: 1,
    },
    {
      slug: "morning-soup-culture-experience",
      name: "Morning Soup Culture Experience",
      photo: { src: "/photos/luoyang/morning-soup-culture-experience.jpg", alt: "Morning Soup Culture Experience, Luoyang" },
      topPick: true,
      description:
        "Luoyang\u2019s morning soup tradition is as essential to the city\u2019s identity as Peking duck is to Beijing. By 6:00 AM, neighborhood soup shops are packed with locals hunching over steaming bowls of niurou tang (beef soup with flatbread), hulatang (pepper soup), and donkey meat soup. This is not a tourist activity \u2014 it is daily life, and joining in is the most authentic way to experience the city [7].",
      time: "1-1.5 hours (early morning, 6:00-8:00 AM)",
      location:
        "Various neighborhood soup shops throughout Old Town and Xigong district",
      cost: "$2-4/p",
      tips: [
        "Seek out a busy neighborhood shop rather than one near tourist sites \u2014 follow the crowds of locals",
        "Niurou tang (beef soup) is the most accessible entry point \u2014 tear flatbread into the broth yourself",
        "No English menus anywhere \u2014 use a translation app or point at what others are eating",
        "This is best done on your first morning to set the cultural tone for the visit",
      ],
      priceTier: 1,
    },
    {
      slug: "yi-river-walk-and-longmen-bridge",
      name: "Yi River Walk and Longmen Bridge",
      photo: { src: "/photos/luoyang/yi-river-walk-and-longmen-bridge.jpg", alt: "Yi River Walk and Longmen Bridge, Luoyang" },
      topPick: false,
      description:
        "The tree-lined riverside promenade along the Yi River connects the Longmen Grottoes area with scenic walking paths, traditional bridges, and views of the carved cliff faces from across the water. A peaceful counterpoint to the intensity of the grottoes themselves, and an excellent way to decompress after a morning of cave exploration.",
      time: "1-1.5 hours",
      location:
        "Along the Yi River near the Longmen Grottoes, 12 km south of city center",
      cost: "Free (included with Longmen Grottoes ticket area)",
      tips: [
        "Walk the east bank for the best views of the West Hill grottoes across the river",
        "Late afternoon light is ideal for photography of the cliff faces",
        "Combine naturally with the Longmen Grottoes visit \u2014 cross the bridge after finishing the West Hill caves",
      ],
      priceTier: 0,
    },
    {
      slug: "wangcheng-park",
      name: "Wangcheng Park",
      photo: { src: "/photos/luoyang/wangcheng-park.jpg", alt: "Wangcheng Park, Luoyang" },
      topPick: false,
      description:
        "Luoyang\u2019s central public park, home to the annual Peony Festival (April-May) and a year-round gathering place for local life. In October the peonies are finished, but the park reveals Luoyang\u2019s daily rhythms \u2014 morning tai chi groups, elderly card players, families, and a small zoo. A slice of authentic urban Chinese park culture.",
      time: "1-1.5 hours",
      location:
        "Xigong District, central Luoyang. Walking distance from downtown hotels",
      cost: "Free (October, outside peony season)",
      tips: [
        "Visit early morning (6:30-8:00 AM) for the best park culture \u2014 exercise groups, musicians, calligraphers",
        "The park is a pleasant walk-through between downtown hotels and lunch spots",
        "Skip if short on time \u2014 prioritize Longmen Grottoes and the Old Town",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Water Banquet —
    {
      slug: "zhen-bu-tong",
      name: "Zhen Bu Tong",
      photo: { src: "/photos/luoyang/zhen-bu-tong.jpg", alt: "Zhen Bu Tong, Luoyang" },
      chineseName: "\u771f\u4e0d\u540c",
      category: "Water Banquet",
      topPick: true,
      location:
        "No. 393 Zhongzhou East Road, Old Town area \u2014 large classical-style building",
      priceRange: "$10-20/p",
      cuisine: "Traditional Luoyang water banquet (shui xi)",
      description:
        "Luoyang\u2019s most famous water banquet restaurant, with over 113 years of history dating to the late Qing Dynasty. The full 24-course banquet is a procession of soup-based dishes \u2014 each course arrives in a bowl of broth, giving the feast its \u2018water\u2019 name. Ornate classical decor matches the ceremonial nature of the meal. This is the definitive place to experience Luoyang\u2019s signature culinary tradition [8].",
      reviews:
        "Consistently praised for authenticity and atmosphere. Some find the full banquet overwhelming \u2014 a half-banquet (8-12 courses) is available and more practical for a small group. Service is formal and attentive.",
      whatToOrder:
        "Half water banquet for 3 people (8-12 courses), must include peony yan cai (the signature opening dish \u2014 a delicate egg-white swallow\u2019s nest imitation), Luoyang yan cai, braised pork in broth, sweet soup finale.",
      bestFor: "Lunch or dinner. Arrive by 11:30 AM or 6:00 PM for best seating.",
      priceTier: 1,
    },
    {
      slug: "luoyang-shui-xi-yuan",
      name: "Luoyang Shui Xi Yuan (Water Banquet Garden)",
      photo: { src: "/photos/luoyang/luoyang-shui-xi-yuan.jpg", alt: "Luoyang Shui Xi Yuan (Water Banquet Garden), Luoyang" },
      chineseName: "\u6d1b\u9633\u6c34\u5e2d\u56ed",
      category: "Water Banquet",
      topPick: false,
      location:
        "50 meters north of the intersection of Tianjin Road and Jinghua Road",
      priceRange: "$8-18/p",
      cuisine: "Traditional Luoyang water banquet",
      description:
        "A beloved local alternative to Zhen Bu Tong with a pleasant dining environment and attentive service. Every Luoyang resident has eaten here at some point. Less formal than Zhen Bu Tong but equally authentic, with a slightly more relaxed atmosphere that some prefer [7].",
      reviews:
        "Locals consistently recommend this alongside Zhen Bu Tong. The quality-to-price ratio may actually be better. Less tourist traffic.",
      whatToOrder:
        "Water banquet set menu, peony yan cai, braised meatballs in broth, sour noodle soup, sweet rice dessert soup.",
      bestFor: "Either meal. Less crowded than Zhen Bu Tong at peak times.",
      priceTier: 1,
    },

    // — Morning Soups —
    {
      slug: "majesan-beef-soup",
      name: "Majesan Beef Soup",
      chineseName: "\u9a6c\u6770\u4e09\u725b\u8089\u6c64",
      category: "Morning Soups",
      topPick: true,
      location:
        "Old Town area \u2014 multiple branches throughout Luoyang",
      priceRange: "$2-4/p",
      cuisine: "Luoyang beef soup (niurou tang), halal",
      description:
        "A long-established halal eatery and the most famous breakfast destination in Luoyang. The beef soup is slow-simmered overnight with spices until the broth is rich and milky-white. You tear flatbread (mo) into the bowl yourself and let it soak. Packed with locals from 6 AM onward \u2014 this is Luoyang at its most unguarded and authentic [7].",
      reviews:
        "Universally praised by locals. Affordable, hearty, and genuinely delicious. No English whatsoever. The morning crowd is part of the experience.",
      whatToOrder:
        "Niurou tang (beef soup) with flatbread, add extra chili paste from the table. That\u2019s it \u2014 one dish, perfected.",
      bestFor: "Breakfast, 6:00-8:00 AM. Go hungry.",
      priceTier: 1,
    },
    {
      slug: "old-town-hulatang-shops",
      name: "Old Town Hulatang (Pepper Soup) Shops",
      chineseName: "\u80e1\u8fa3\u6c64",
      category: "Morning Soups",
      topPick: false,
      location:
        "Various locations throughout Old Town \u2014 look for the busiest storefronts before 8 AM",
      priceRange: "$1-3/p",
      cuisine: "Luoyang hulatang (pepper soup), traditional Han breakfast",
      description:
        "Thick, peppery, and warming \u2014 hulatang is northern China\u2019s definitive morning pick-me-up. Luoyang\u2019s version features a hearty broth thickened with starch, loaded with vegetables, tofu skin, and ground meat, with a serious kick of white pepper and chili oil. Multiple nameless neighborhood shops serve excellent versions [11].",
      reviews:
        "An acquired taste for some \u2014 aggressively peppery and thick. But for adventurous eaters, it\u2019s one of the most distinctly \u2018Luoyang\u2019 food experiences available.",
      whatToOrder:
        "One bowl of hulatang with a side of fried dough stick (youtiao) for dipping. Add chili oil to taste.",
      bestFor: "Breakfast, before 8:00 AM.",
      priceTier: 1,
    },

    // — Local Specialties —
    {
      slug: "jiang-mian-tiao-noodle-shops",
      name: "Jiang Mian Tiao (Sour Noodle) Shops",
      chineseName: "\u6d46\u9762\u6761",
      category: "Local Specialties",
      topPick: false,
      location:
        "Throughout Old Town and Xigong district \u2014 look for handwritten signs",
      priceRange: "$1-3/p",
      cuisine: "Luoyang sour fermented noodles",
      description:
        "Luoyang\u2019s most distinctive noodle dish. The broth is made from jiang \u2014 a sour, creamy liquid left over from fermenting mung bean starch. Noodles are cooked directly in this tangy base, then topped with pickled mustard greens, soybeans, and sesame sauce. It\u2019s a taste that divides visitors but defines Luoyang\u2019s culinary identity [11].",
      reviews:
        "Deeply polarizing \u2014 the sour, fermented flavor is unlike anything most visitors have tasted. Locals adore it. Try it at least once as an adventurous cultural experience.",
      whatToOrder:
        "One bowl of jiang mian tiao with all the standard toppings. Ask for extra pickled vegetables.",
      bestFor: "Lunch or a mid-morning snack.",
      priceTier: 1,
    },
    {
      slug: "xigong-food-street",
      name: "Xigong Food Street",
      photo: { src: "/photos/luoyang/xigong-food-street.jpg", alt: "Xigong Food Street, Luoyang" },
      chineseName: "\u897f\u5de5\u5c0f\u8857",
      category: "Local Specialties",
      topPick: true,
      location:
        "10-minute walk from Wangcheng Park, Xigong District. 500-meter strip of neon-lit food stalls",
      priceRange: "$2-8/p",
      cuisine: "Luoyang street food \u2014 breakfast classics and late-night snacks",
      description:
        "A fiercely local 500-meter food street specializing in Luoyang\u2019s breakfast staples and late-night comfort food. No tourist gloss whatsoever \u2014 this is where Luoyang\u2019s working class eats, and the quality reflects generations of competition. Beef soup, hulatang, grilled skewers, stir-fried noodles, and regional snacks at rock-bottom prices [12].",
      reviews:
        "Authentic, affordable, and completely un-touristed. No English anywhere. Bring a translation app and a sense of adventure.",
      whatToOrder:
        "Beef soup with flatbread, lamb skewers, stir-fried knife-cut noodles, grilled flatbread stuffed with meat (rou jia mo).",
      bestFor: "Early breakfast (6:00-8:00 AM) or late-night eating (9:00 PM+).",
      priceTier: 1,
    },
    {
      slug: "minzhu-street-snack-row",
      name: "Minzhu Street Snack Row",
      chineseName: "\u6c11\u4e3b\u8857",
      category: "Local Specialties",
      topPick: false,
      location:
        "Minzhu Street, central Luoyang \u2014 a concentrated strip of local snack vendors",
      priceRange: "$1-5/p",
      cuisine: "Luoyang traditional snacks \u2014 fruit oil tea, pan-fried buns, braised meats",
      description:
        "A concentrated hub of Luoyang snack culture where vendors sell fruit oil tea (a thick, sweet grain-based drink), pan-fried buns (sheng jian bao), braised meat, and traditional pastries. Less atmospheric than the Old Town night market but arguably more authentic \u2014 this is a daytime operation catering to locals on lunch breaks [12].",
      reviews:
        "Excellent value, genuine local clientele. Best for sampling a variety of Luoyang\u2019s traditional snacks in one concentrated area.",
      whatToOrder:
        "Fruit oil tea, pan-fried buns, braised beef, Luoyang-style cold noodles.",
      bestFor: "Lunch or mid-afternoon snack run.",
      priceTier: 1,
    },
    {
      slug: "old-town-night-market-food",
      name: "Old Town Night Market Food Stalls",
      photo: { src: "/photos/luoyang/old-town-night-market-food.jpg", alt: "Old Town Night Market Food Stalls, Luoyang" },
      chineseName: "\u8001\u57ce\u591c\u5e02",
      category: "Night Market",
      topPick: true,
      location:
        "Xinghua Street and surrounding lanes, Old Town",
      priceRange: "$3-8/p",
      cuisine: "Luoyang street food, grilled meats, soups, peony cakes, regional snacks",
      description:
        "The culinary heart of the Old Town night market. Red lanterns, blue flagstone streets, and dozens of stalls serving bufantang (a hearty Luoyang-style soup), grilled lamb and chicken skewers, peony cakes (a sweet pastry), and an array of regional Chinese street food. The atmosphere is festive, prices are low, and the crowd is overwhelmingly local [14].",
      reviews:
        "Best evening food experience in Luoyang. Some stalls are better than others \u2014 follow the longest lines. Quality is consistently high for the price.",
      whatToOrder:
        "Bufantang soup, lamb skewers, peony cake, grilled flatbread, cold noodles. Try the no-flip egg soup (bu fan tang) if available.",
      bestFor: "Evening, 7:00-10:00 PM. Come hungry and graze across multiple stalls.",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Taxis/Rideshare: Use Didi (China\u2019s Uber). Most rides within the city are under $4. Essential for reaching Longmen Grottoes and White Horse Temple.",
      "Buses: Public buses connect major sites but are slow and signs are in Chinese only. Bus 81 runs to Longmen Grottoes, Bus 56 to White Horse Temple.",
      "Walking: Old Town and downtown are very walkable. The compact city center is a major advantage over larger Chinese cities.",
      "Luoyang is small enough that you won\u2019t need the metro system for a 2-day visit.",
    ],
    "Food & Dining": [
      "Morning soup culture is essential \u2014 plan to eat breakfast at a local soup shop at least once. Arrive by 6:30-7:00 AM.",
      "Water banquet ordering: For 3 people, a half-banquet (8-12 courses) is ideal. A full 24-course banquet is ceremonial and overwhelming for a small group.",
      "Tipping: Not expected anywhere in Luoyang. No restaurants add service charges.",
      "No English menus at most local restaurants. Download a translation app with camera mode before arriving.",
    ],
    "Money & Communication": [
      "Payment: Alipay/WeChat Pay accepted almost everywhere. Set up international Alipay before the trip. Bring cash for night market stalls and small soup shops.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in mainland China.",
      "Language: Very little English spoken anywhere in Luoyang, even at hotels. This is part of the authentic appeal but requires preparation.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Longmen Grottoes: Book tickets online in advance. October weekends can sell out. Arrive at 8:00 AM opening.",
      "Luoyang pairs naturally with Xi\u2019an (1.5 hours by high-speed rail) for a combined Central China history itinerary.",
      "Two full days is sufficient to cover all major sites thoroughly. A third day allows for a more relaxed pace and deeper food exploration.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Luoyang October Weather \u2014 Climate-Data.org (https://en.climate-data.org/asia/china/henan/luoyang-2474/t/october-10/)",
    "[2] Luoyang Weather & Climate \u2014 China Discovery (https://www.chinadiscovery.com/luoyang-tours/weather-seasons.html)",
    "[3] Longmen Grottoes Visitor Guide \u2014 China Highlights (https://www.chinahighlights.com/luoyang/attraction/longmen-grottoes.htm)",
    "[4] Longmen Grottoes Tickets & Hours \u2014 Trip.com (https://www.trip.com/travel-guide/attraction/luoyang/longmen-grottoes-77498/)",
    "[5] White Horse Temple Guide \u2014 China Highlights (https://www.chinahighlights.com/luoyang/attraction/white-horse-temple.htm)",
    "[6] Where to Stay in Luoyang \u2014 China Discovery (https://www.chinadiscovery.com/luoyang-tours/luoyang-hotels.html)",
    "[7] Luoyang Food & Restaurants \u2014 China Culture Tour (https://www.chinaculturetour.com/luoyang/food-restaurants.htm)",
    "[8] Zhen Bu Tong Restaurant \u2014 TripAdvisor (https://www.tripadvisor.com/Restaurant_Review-g303731-d4677630-Reviews-ZhenBuTong_Restaurant_ZhengHe_Road-Luoyang_Henan.html)",
    "[9] Water Banquet \u2014 Wikipedia (https://en.wikipedia.org/wiki/Water_Banquet)",
    "[10] Top Luoyang Attractions \u2014 China Discovery (https://www.chinadiscovery.com/luoyang-tours/attractions.html)",
    "[11] Luoyang Dining Guide \u2014 Travel China Guide (https://www.travelchinaguide.com/cityguides/henan/luoyang/dining.htm)",
    "[12] Luoyang Food Streets \u2014 Top China Travel (https://www.topchinatravel.com/china-food-restaurant/where-to-eat-in-luoyang.htm)",
    "[13] Sui-Tang Dynasty Ruins \u2014 Asia Odyssey Travel (https://www.asiaodysseytravel.com/henan/luoyang-attractions.html)",
    "[14] Luoyang Old Town Night Market \u2014 Lonely Planet (https://www.lonelyplanet.com/china/henan/luoyang/restaurants/old-town-night-market/a/poi-eat/1240180/355988)",
  ],
};
