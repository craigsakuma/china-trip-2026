import type { CityProfile } from "@/types";

export const pingyaoProfile: CityProfile = {
  slug: "pingyao",
  heroPhoto: { src: "/photos/pingyao/_hero.jpg", alt: "Pingyao ancient city wall", credit: "Bairuilong" },
  executiveSummary: [
    "Pingyao is one of the most remarkably intact ancient walled cities in all of China — a UNESCO World Heritage Site where the Ming and Qing dynasty streetscapes are not reconstructions but original structures that have survived largely unchanged for 600 years. Walking through the city gates and along the 6-kilometer wall that encircles the old town, you're treading on the same flagstones that 19th-century merchants, bankers, and magistrates walked when Pingyao was the undisputed financial capital of the Qing Empire. In October, the crowds thin dramatically, autumn light sharpens the grey-brick courtyard architecture, and the surrounding Shanxi countryside turns golden [1].",
    "What makes Pingyao extraordinary isn't just its architecture — it's the fact that people still live and work within the walls. Unlike many Chinese \"ancient towns\" that have been converted into shopping malls with traditional facades, Pingyao retains genuine neighborhood life: elderly residents playing mahjong in courtyards, vinegar vendors ladling from ceramic jars, and family-run noodle shops pulling dough by hand the same way their grandparents did. The Rishengchang Exchange House, China's first draft bank (established 1823), tells the improbable story of how a small Shanxi town created the financial infrastructure that powered an empire [2]. With a knowledgeable guide, the merchant courtyards and government offices reveal an entire economic and social world.",
    "The food is deeply rooted in Shanxi tradition and unlike anything you'll eat elsewhere in China — hand-pulled and knife-cut noodles in dozens of varieties, Pingyao beef slow-braised in a centuries-old recipe, aged Shanxi vinegar used as both condiment and cooking medium, and hearty wheat-based dishes reflecting the northern interior. This is comfort food perfected over generations, served without pretension in small family restaurants where the owner is often the cook [3].",
  ],
  famousFor: [
    "UNESCO-listed ancient walled city",
    "Ming and Qing dynasty architecture",
    "Rishengchang — China's first bank",
    "Pingyao beef",
    "Shanxi aged vinegar",
    "Hand-pulled noodles",
    "Merchant courtyard culture",
  ],
  whyItFits: [
    "One of the best-preserved ancient cities in China — architecture is original, not reconstructed",
    "Walkable old town entirely within the walls — perfect for slow exploration on foot",
    "Outstanding regional food scene at remarkably low prices",
    "Rich, underappreciated history of Chinese merchant banking culture",
    "October brings ideal weather, dramatic autumn light, and far fewer tourists than summer",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 68,
      avgLow: 45,
      rainChance: 12,
      precip: 0.3,
      sunrise: "6:25 AM",
      sunset: "6:05 PM",
      conditions: "Crisp and clear; autumn foliage beginning; excellent visibility",
    },
    {
      period: "Mid Oct",
      avgHigh: 61,
      avgLow: 39,
      rainChance: 8,
      precip: 0.2,
      sunrise: "6:38 AM",
      sunset: "5:47 PM",
      conditions: "Golden autumn; dry, sunny days; cool mornings and evenings [4]",
    },
    {
      period: "Late Oct",
      avgHigh: 55,
      avgLow: 33,
      rainChance: 6,
      precip: 0.1,
      sunrise: "6:52 AM",
      sunset: "5:30 PM",
      conditions: "Cold mornings near freezing; warm layers essential; very few tourists",
    },
  ],
  whatToPack:
    "Layers for 33-68°F swings. Warm fleece or light down jacket for mornings and evenings, comfortable walking shoes for cobblestone streets, light scarf for wind on the city wall.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "ming-qing-street-central-axis",
      name: "Ming-Qing Street (Nan Dajie) / Central Axis",
      topPick: true,
      description:
        "The main commercial artery running north-south through the walled city, lined with original Ming and Qing dynasty shop fronts, merchant courtyards, and traditional businesses. This is where the Rishengchang Exchange House, the City Tower, and most major courtyard compounds are concentrated. The street buzzes during the day but empties beautifully at dusk [1].",
      whyItFitsUs:
        "Most atmospheric base for exploring. Everything is within a 10-minute walk. Several beautifully restored courtyard guesthouses offer overnight stays in traditional merchant residences with heated kang beds and carved wooden screens.",
      nearby:
        "Rishengchang Exchange House (2 min), City Tower (5 min), city wall south gate access (5 min), County Yamen (8 min)",
      hotels:
        "Jing's Residence (restored Qing merchant courtyard — top pick for atmosphere and service), Pingyao Yide Hotel (300-year-old courtyard compound with traditional kang beds)",
    },
    {
      slug: "west-street-quiet-residential",
      name: "West Street / Quiet Residential Quarter",
      topPick: false,
      description:
        "The western half of the walled city is markedly quieter and more genuinely residential than the commercial central axis. Narrow alleys wind past courtyard homes where daily life unfolds — hanging laundry, elderly neighbors chatting on stone benches, the sound of noodle-making from kitchen windows. Far fewer shops and tourists [5].",
      whyItFitsUs:
        "Most authentic glimpse of life inside the walls. Ideal for morning or evening wandering without the commercial buzz of Ming-Qing Street. Several smaller, family-run guesthouses offer a more intimate experience.",
      nearby:
        "City wall west gate (5 min), Ming-Qing Street (10 min walk), several traditional temples",
      hotels:
        "Harmony Guesthouse (small family-run courtyard, English-speaking owner), various local courtyard homestays",
    },
    {
      slug: "city-wall-perimeter",
      name: "City Wall Perimeter / South Gate Area",
      topPick: false,
      description:
        "The area around the south gate (Yingxun Gate) is the most dramatic entry point into the old city and provides the best access to the city wall walk. The surrounding streets have a mix of local restaurants, small guesthouses, and the characteristic grey-brick architecture without the density of the central axis [1].",
      whyItFitsUs:
        "Best access to the city wall for morning or sunset walks. Slightly lower accommodation prices with the same authentic courtyard architecture. Easy access to the bus/train station area outside the walls.",
      nearby:
        "City wall south gate access (immediate), Ming-Qing Street (8 min walk), Pingyao train station (10 min walk outside walls)",
      hotels:
        "Pingyao Cheng Jia Hotel (courtyard guesthouse near the south gate), Dejuyuan Folk-style Guesthouse (traditional courtyard with carved wood details)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "city-wall-walk",
      name: "Pingyao City Wall Walk",
      photo: { src: "/photos/pingyao/city-wall-walk.jpg", alt: "Pingyao City Wall Walk, Pingyao" },
      topPick: true,
      description:
        "The complete 6.4-kilometer circuit atop Pingyao's remarkably intact Ming dynasty walls (built 1370, expanded in later centuries) offers a panoramic view over the entire ancient city — grey-tile rooftops, courtyard compounds, temple pagodas, and the surrounding farmland. Seventy-two watchtowers punctuate the walls, and the ramparts are wide enough for comfortable walking. Early morning or sunset light transforms the experience [1].",
      time: "1.5-2.5 hours (full circuit)",
      location:
        "Access from south gate (Yingxun Gate) or north gate. South gate is the most popular and dramatic entry point",
      cost: "$18/p (included in the Pingyao Ancient City combo ticket — $18 covers 22 sites within the walls)",
      tips: [
        "Buy the combo ticket at the south gate — it covers the wall plus all major courtyard compounds and museums inside",
        "Walk clockwise from the south gate for the best light progression throughout the day",
        "Sunrise or late afternoon golden hour are the most photogenic times — the morning walk is virtually empty",
        "Some sections have uneven surfaces — wear sturdy shoes, not sandals",
      ],
      priceTier: 1,
    },
    {
      slug: "rishengchang-exchange-house",
      name: "Rishengchang Exchange House (China's First Bank)",
      photo: { src: "/photos/pingyao/rishengchang-exchange-house.jpg", alt: "Rishengchang Exchange House (China's First Bank), Pingyao" },
      topPick: true,
      description:
        "Founded in 1823, Rishengchang was China's first draft bank — a revolutionary institution that allowed merchants to deposit money in one city and withdraw it in another, eliminating the need to transport silver across bandit-ridden roads. At its peak, the Shanxi banks headquartered in Pingyao controlled an estimated 80% of China's financial transfers. The meticulously preserved compound includes the original vault, counting rooms, and living quarters of the bank's managers [2].",
      time: "1-1.5 hours (with guide, 45 min self-guided)",
      location:
        "West end of Ming-Qing Street (Nan Dajie), central old town",
      cost: "$18/p (included in combo ticket)",
      tips: [
        "Hire a local guide or use an audio guide — without context, it's just a pretty courtyard; with explanation, the banking innovations are genuinely fascinating",
        "Look for the original vault and the security systems (hollowed-out walls, hidden rooms)",
        "Several other draft bank sites nearby (Baichuan Tong, Rishengchang's competitor) are included in the combo ticket and far less crowded [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "ancient-county-yamen",
      name: "Ancient County Yamen (Government Office)",
      photo: { src: "/photos/pingyao/ancient-county-yamen.jpg", alt: "Ancient County Yamen (Government Office), Pingyao" },
      topPick: false,
      description:
        "One of the best-preserved ancient government offices in China, dating to the Yuan Dynasty (1346) with expansions through the Ming and Qing periods. The compound includes courtrooms, administrative offices, a prison, and the magistrate's living quarters — a complete picture of how local government functioned in imperial China. Daily theatrical reenactments of magistrate court proceedings add color [6].",
      time: "45 min - 1 hour",
      location:
        "Northwest section of the old town, off Yamen Street",
      cost: "$18/p (included in combo ticket)",
      tips: [
        "The courtroom reenactment (typically 9:30 AM, 11:00 AM, 3:30 PM) is entertaining even without understanding Mandarin",
        "The prison section is surprisingly detailed and evocative",
        "Combine with a walk through the quieter western residential streets afterward",
      ],
      priceTier: 1,
    },
    {
      slug: "merchant-courtyard-compound-tour",
      name: "Merchant Courtyard Compound Tour",
      photo: { src: "/photos/pingyao/merchant-courtyard-compound-tour.jpg", alt: "Merchant Courtyard Compound Tour, Pingyao" },
      topPick: true,
      description:
        "Pingyao's wealthy merchant families built elaborate multi-courtyard residential compounds that reveal the social hierarchies, aesthetic sensibilities, and daily life of Qing-era China's mercantile elite. The best examples — Wang Family Compound and Qiao Family Compound (featured in Zhang Yimou's film Raise the Red Lantern) — lie just outside the city and are extraordinary in scale and detail [7].",
      time: "Half day (3-4 hours including travel)",
      location:
        "Wang Family Compound: Jingsheng village, 35 km southwest of Pingyao (~45 min drive). Qiao Family Compound: Qiaojiabao, 40 km north (~50 min drive)",
      cost: "$12-15/p entrance + ~$20/p shared car",
      tips: [
        "Wang Family Compound is far larger and more impressive than Qiao — choose it if you only have time for one [7]",
        "Qiao Family Compound is the more famous (Raise the Red Lantern filming location) but more touristed",
        "Hire a guide who can explain the symbolism in the carvings, screen walls, and courtyard layouts",
        "Within Pingyao itself, several smaller merchant houses are included in the combo ticket",
      ],
      priceTier: 1,
    },
    {
      slug: "shuanglin-temple",
      name: "Shuanglin Temple — Painted Sculpture Masterpiece",
      photo: { src: "/photos/pingyao/shuanglin-temple.jpg", alt: "Shuanglin Temple — Painted Sculpture Masterpiece, Pingyao" },
      topPick: true,
      description:
        "Often called the \"museum of painted sculpture,\" this 1,500-year-old Buddhist temple (6 km southwest of Pingyao) contains over 2,000 original painted clay sculptures from the Song, Yuan, Ming, and Qing dynasties — widely considered among the finest examples of traditional Chinese sculpture anywhere. The expressions and detail are breathtaking [8].",
      time: "1.5-2 hours (including travel)",
      location:
        "Qiaotou village, 6 km southwest of Pingyao old town (~15 min by taxi or e-bike)",
      cost: "$5/p (separate from combo ticket) + ~$3/p shared taxi each way",
      tips: [
        "This is Pingyao's hidden masterpiece — many visitors skip it, which is a mistake",
        "Photography restrictions vary by hall — ask at the entrance",
        "Morning light through the hall windows illuminates the sculptures beautifully",
        "Combine with Zhenguo Temple (another sculpture gem, 12 km northeast) for a full half-day of sacred art [8]",
      ],
      priceTier: 1,
    },
    {
      slug: "old-town-walking-exploration",
      name: "Old Town Walking Exploration",
      topPick: false,
      description:
        "The best way to experience Pingyao is simply to wander. The walled city is compact enough (roughly 1 mile by 0.7 miles) to cover on foot in a day, but rich enough to reward two or three days of slow exploration. Duck into side alleys, peek through open courtyard gates, follow the sound of noodle-stretching, and discover temples, wells, and carved stone details that no guidebook mentions [5].",
      time: "2-4 hours per session (endlessly repeatable)",
      location:
        "Throughout the walled city — focus on the streets east and west of the central axis for the quietest residential atmosphere",
      cost: "Free",
      tips: [
        "Early morning (before 8 AM) and evening (after 5 PM) are the most atmospheric — the tour bus crowds vanish",
        "The streets running east-west between Ming-Qing Street and the city walls are the most residential and least commercial",
        "Look up — the carved wooden eaves, stone lion door guards, and inscribed lintels reward careful observation",
        "Stop at small local shops for Pingyao lacquerware, a traditional craft dating to the Tang Dynasty",
      ],
      priceTier: 0,
    },
    {
      slug: "shanxi-vinegar-experience",
      name: "Shanxi Vinegar Cultural Experience",
      photo: { src: "/photos/pingyao/shanxi-vinegar-experience.jpg", alt: "Shanxi Vinegar Cultural Experience, Pingyao" },
      topPick: false,
      description:
        "Shanxi province is the vinegar capital of China — aged Shanxi vinegar (laochen cu) is to Chinese cooking what balsamic is to Italian cuisine. Several vinegar workshops in and around Pingyao offer tastings and demonstrations of the traditional aging process, which can take 3-8 years in ceramic jars [3].",
      time: "1-1.5 hours",
      location:
        "Various locations in and around the old town; Donghu Vinegar Workshop is the most established",
      cost: "$3-5/p",
      tips: [
        "Taste the difference between 3-year, 5-year, and 8-year aged vinegar — the complexity rivals aged balsamic",
        "Buy a bottle of 5+ year aged vinegar as a souvenir — it's far superior to supermarket versions and very affordable ($2-5)",
        "Ask about drinking vinegar — diluted aged vinegar is a traditional health tonic in Shanxi [3]",
      ],
      priceTier: 1,
    },
    {
      slug: "pingyao-noodle-making-experience",
      name: "Pingyao Noodle-Making Experience",
      photo: { src: "/photos/pingyao/pingyao-noodle-making-experience.jpg", alt: "Pingyao Noodle-Making Experience, Pingyao" },
      topPick: false,
      description:
        "Shanxi is the noodle capital of China, with more noodle varieties than any other province — hand-pulled, knife-cut, cat ear, rolled, flicked, and dozens more. Several guesthouses and small cooking schools in Pingyao offer hands-on noodle-making sessions where you learn the stretching and cutting techniques from local cooks [3].",
      time: "1.5-2 hours",
      location:
        "Various locations within the old town — ask your guesthouse to arrange",
      cost: "$10-20/p",
      tips: [
        "Request knife-cut noodles (dao xiao mian) — the technique of shaving noodles directly from a dough block into boiling water is mesmerizing and distinctly Shanxi",
        "Most sessions include eating the noodles you made, paired with local sauces and toppings",
        "Your guesthouse can usually arrange a private session with a local family for the most authentic experience",
      ],
      priceTier: 1,
    },
    {
      slug: "city-tower-market-square",
      name: "City Tower (Shi Lou) and Market Square",
      photo: { src: "/photos/pingyao/city-tower-market-square.jpg", alt: "City Tower (Shi Lou) and Market Square, Pingyao" },
      topPick: false,
      description:
        "The three-story City Tower at the intersection of Pingyao's two main streets served as the commercial and civic heart of the old town. Climb to the top for a bird's-eye view down the central axis. The surrounding Market Square was historically where merchants gathered to conduct business and announce prices [1].",
      time: "30-45 minutes",
      location:
        "Central intersection of Ming-Qing Street (Nan Dajie) and East-West Street",
      cost: "$18/p (included in combo ticket)",
      tips: [
        "The view from the top floor is one of the best in town — great for orientation on your first day",
        "The surrounding intersection is a natural gathering point in the evening with street vendors and local activity",
        "Combine with a stroll down Ming-Qing Street in either direction",
      ],
      priceTier: 1,
    },
    {
      slug: "sunset-from-the-wall",
      name: "Sunset from the City Wall",
      photo: { src: "/photos/pingyao/sunset-from-the-wall.jpg", alt: "Sunset from the City Wall, Pingyao" },
      topPick: false,
      description:
        "The western section of the city wall faces the open Shanxi countryside and offers unobstructed sunset views. As the sun drops behind the flat agricultural landscape, the grey-brick city below takes on a warm golden glow. This is one of Pingyao's most memorable moments and costs nothing beyond the combo ticket [1].",
      time: "45 min - 1 hour (arrive 30 min before sunset)",
      location:
        "Western section of the city wall, accessible from the south or north gate",
      cost: "$18/p (included in combo ticket)",
      tips: [
        "Check sunset time for your travel dates — mid-October sunsets are around 5:45-6:00 PM",
        "The section between the southwest and northwest corners is the least crowded",
        "Bring a warm layer — temperatures drop quickly after sunset in October",
        "Follow with dinner at a nearby noodle restaurant for a perfect evening",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Noodles —
    {
      slug: "dejuyuan-restaurant",
      name: "Dejuyuan Restaurant",
      chineseName: "德居源",
      category: "Traditional Shanxi",
      topPick: true,
      location:
        "Ming-Qing Street, central old town — inside the Dejuyuan Guesthouse courtyard",
      priceRange: "$4-8/p",
      cuisine: "Traditional Shanxi noodles and Pingyao specialties",
      description:
        "Set in a beautiful traditional courtyard, Dejuyuan is one of Pingyao's most atmospheric dining experiences. The open-air courtyard setting brings together excellent hand-pulled noodles, Pingyao beef, and local Shanxi dishes. Popular with both locals and visitors who appreciate the genuine courtyard ambiance [9].",
      whatToOrder:
        "Hand-pulled noodles (la mian) with braised pork sauce, Pingyao beef platter, cat ear noodles (mao er duo), stir-fried local greens with vinegar.",
      bestFor: "Lunch — the courtyard is beautiful in afternoon light",
      priceTier: 1,
    },
    {
      slug: "tianyuankui-restaurant",
      name: "Tianyuankui Restaurant",
      chineseName: "天元奎饭店",
      category: "Traditional Shanxi",
      topPick: true,
      location:
        "73 Nan Dajie (Ming-Qing Street), central old town — one of the most prominent courtyard restaurants",
      priceRange: "$5-10/p",
      cuisine: "Shanxi cuisine, Pingyao specialties, traditional banquet dishes",
      description:
        "Housed in a restored Qing dynasty merchant courtyard, Tianyuankui is considered one of Pingyao's best restaurants for traditional Shanxi cuisine. The menu spans local noodle varieties, braised dishes, and specialties you won't find outside Shanxi. Service is attentive and the setting is elegant without being fussy [9].",
      whatToOrder:
        "Pingyao wantuo (a cold buckwheat noodle dish unique to Pingyao), knife-cut noodles with tomato and egg sauce, braised Pingyao beef, Shanxi vinegar fish, deep-fried date cakes (you zao).",
      bestFor: "Dinner — reserve a courtyard-facing table for atmosphere",
      priceTier: 1,
    },
    {
      slug: "pingyao-knife-cut-noodle-shop",
      name: "Local Knife-Cut Noodle Shops",
      photo: { src: "/photos/pingyao/pingyao-knife-cut-noodle-shop.jpg", alt: "Local Knife-Cut Noodle Shops, Pingyao" },
      chineseName: "刀削面",
      category: "Street Food / Noodles",
      topPick: false,
      location:
        "Multiple shops throughout the old town — look for the noodle-shaving motion visible through windows",
      priceRange: "$1.50-3/p",
      cuisine: "Shanxi knife-cut noodles (dao xiao mian)",
      description:
        "Shanxi is the birthplace of knife-cut noodles — thick, irregular ribbons shaved directly from a block of dough into boiling water, giving them a chewy, uneven texture that holds sauce beautifully. The simplest, most ubiquitous meal in Pingyao, served in tiny family shops where the cook performs the mesmerizing shaving technique right in front of you [3].",
      whatToOrder:
        "Knife-cut noodles with braised pork and aged vinegar sauce (the default order), or with tomato and egg. Add a side of Pingyao beef slices.",
      bestFor: "Any meal — this is everyday Pingyao food at its best",
      priceTier: 1,
    },
    {
      slug: "pingyao-beef-specialty",
      name: "Yunjincheng Pingyao Beef",
      chineseName: "云锦成牛肉",
      category: "Pingyao Specialty",
      topPick: true,
      location:
        "Ming-Qing Street area, central old town",
      priceRange: "$3-7/p",
      cuisine: "Pingyao-style braised beef",
      description:
        "Pingyao beef (Pingyao niurou) has been produced here for centuries using a distinctive preparation: the beef is marinated in a proprietary spice blend, slow-braised for hours, then pressed and aged. The result is deeply savory, tender, and sliceable — served cold as an appetizer, in noodles, or as a standalone dish. Several shops on Ming-Qing Street sell it for tasting and takeaway [3].",
      whatToOrder:
        "Sliced Pingyao beef platter (cold, served with vinegar dipping sauce), beef noodle soup, vacuum-sealed packages to take home as gifts.",
      bestFor: "Any time — also makes an excellent edible souvenir",
      priceTier: 1,
    },
    {
      slug: "sakura-noodle-house",
      name: "Sakura Noodle House",
      photo: { src: "/photos/pingyao/sakura-noodle-house.jpg", alt: "Sakura Noodle House, Pingyao" },
      chineseName: "樱花面馆",
      category: "Noodles",
      topPick: false,
      location:
        "East Street, within the old town walls",
      priceRange: "$2-5/p",
      cuisine: "Shanxi noodle varieties",
      description:
        "A small, family-run noodle house popular with locals and budget travelers. The menu covers the full range of Shanxi noodle styles — hand-pulled, knife-cut, cat ear, and rolled — with simple but flavorful sauces. No-frills decor, generous portions, and the kind of warm, unpretentious hospitality that defines Pingyao dining.",
      whatToOrder:
        "Cat ear noodles (mao er duo) with minced pork, hand-pulled noodles with braised eggplant, cold noodle salad with vinegar and sesame.",
      bestFor: "Casual lunch",
      priceTier: 1,
    },
    {
      slug: "pingyao-wantuo-stalls",
      name: "Pingyao Wantuo Stalls",
      chineseName: "碗托",
      category: "Street Food",
      topPick: false,
      location:
        "Various stalls throughout the old town, concentrated near the Market Square and south gate area",
      priceRange: "$0.50-2/p",
      cuisine: "Pingyao wantuo — cold buckwheat jelly noodles",
      description:
        "Wantuo is Pingyao's signature street snack — buckwheat flour is steamed into a firm jelly in small bowls, then sliced into strips and dressed with vinegar, chili oil, sesame paste, and garlic. It's savory, tangy, and refreshing. Unique to the Pingyao area and virtually unknown outside Shanxi. Vendors prepare it fresh throughout the day [3].",
      whatToOrder:
        "Cold wantuo with all the standard toppings (vinegar, chili oil, garlic, sesame). Ask for extra chili oil if you like heat.",
      bestFor: "Afternoon snack while exploring the old town",
      priceTier: 1,
    },
    {
      slug: "yunjincheng-folk-hotel-restaurant",
      name: "Yunjincheng Folk Hotel Restaurant",
      chineseName: "云锦成民俗宾馆",
      category: "Traditional Shanxi",
      topPick: false,
      location:
        "64 Nan Dajie (Ming-Qing Street), central old town",
      priceRange: "$6-12/p",
      cuisine: "Shanxi cuisine, traditional Pingyao banquet dishes",
      description:
        "A well-regarded courtyard restaurant inside a traditional guesthouse compound. Known for slightly more elevated presentations of Shanxi classics — braised dishes, vinegar-based preparations, and seasonal specialties. The courtyard dining area with hanging red lanterns creates an atmospheric evening setting [9].",
      whatToOrder:
        "Vinegar-braised fish, Shanxi-style braised pork, Pingyao beef, yellow-rice wine, deep-fried date cakes.",
      bestFor: "Dinner — the lantern-lit courtyard is the most atmospheric evening dining option",
      priceTier: 1,
    },
    {
      slug: "local-morning-breakfast-stalls",
      name: "Local Morning Breakfast Stalls",
      chineseName: "早餐摊",
      category: "Street Food",
      topPick: false,
      location:
        "Scattered throughout the old town, especially near the south gate and east-west cross streets",
      priceRange: "$0.50-2/p",
      cuisine: "Traditional Shanxi breakfast",
      description:
        "Pingyao's morning food scene is humble and deeply local. Small stalls and shop fronts open by 6:30-7:00 AM serving millet congee, steamed buns (mantou), egg pancakes (jianbing), and soy milk. This is how locals start their day — no English menus, no tourist pricing, just warm food on a cool October morning.",
      whatToOrder:
        "Millet congee (xiaomi zhou — Shanxi's staple grain), steamed vegetable buns, you tiao (fried dough sticks), soy milk.",
      bestFor: "Breakfast before an early morning city wall walk",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Walking: The entire walled city is easily walkable — roughly 1 mile by 0.7 miles. This is the primary and best mode of transport within the old town.",
      "E-bikes/Golf carts: Available for hire within the old town for those with mobility concerns (~$5-8 for a tour circuit). Negotiate price before boarding.",
      "Getting there: Pingyao has a train station with regular service from Taiyuan (1.5 hrs by regular train, 40 min by bullet train). From Beijing, take the bullet train to Taiyuan (2.5 hrs) then connect to Pingyao, or take the direct overnight train (~10 hrs).",
      "Day trips: Hire a driver for trips to Wang Family Compound, Shuanglin Temple, and Zhenguo Temple. Your guesthouse can arrange this for ~$40-60 for a half-day car.",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 3-4 dishes family-style plus a noodle dish to share. Portions are generous and prices are very low.",
      "Must-try local specialties: Pingyao beef, knife-cut noodles (dao xiao mian), cat ear noodles (mao er duo), wantuo (cold buckwheat noodles), aged Shanxi vinegar on everything, deep-fried date cakes (you zao) [3].",
      "Vinegar: Shanxi aged vinegar is served at every table — use it liberally. It transforms simple noodle dishes. Buy a bottle of 5+ year aged vinegar to take home.",
      "Tipping: Not expected anywhere in Pingyao.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are accepted at most shops and restaurants. Cash is still useful at smaller stalls and street vendors. ATMs are available near the south gate.",
      "Language: Very limited English — bring a translation app (Google Translate camera mode works well for menus). Your guesthouse staff may speak basic English.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB. Pingyao is very affordable — budget $20-30/day for food and activities beyond accommodation.",
      "VPN: Download and configure before arriving — Google, WhatsApp, and Instagram are blocked throughout China.",
    ],
    "Planning Ahead": [
      "Combo ticket: The Pingyao Ancient City combo ticket (~$18) covers the city wall plus 22 sites inside the old town. Valid for 3 days. Buy it at the south gate ticket office on arrival [1].",
      "Accommodation: Book a traditional courtyard guesthouse inside the walls — sleeping on a heated kang bed in a 300-year-old merchant courtyard is part of the Pingyao experience. Book 1-2 weeks ahead for October.",
      "Timing: Two full days is ideal — one for the city wall, major courtyard compounds, and in-town sites; one for Shuanglin Temple, Wang Family Compound, and slow wandering.",
      "Pairing: Pingyao pairs naturally with Datong (3 hrs north by train) for a Shanxi circuit, or as a side trip from Beijing (2.5 hrs by bullet train to Taiyuan + 40 min connection).",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Pingyao Ancient City Guide — China Highlights (https://www.chinahighlights.com/pingyao/)",
    "[2] Rishengchang Draft Bank History — UNESCO World Heritage Centre (https://whc.unesco.org/en/list/812/)",
    "[3] Shanxi Food and Noodle Culture — China Discovery (https://www.chinadiscovery.com/shanxi/pingyao/pingyao-food.html)",
    "[4] Pingyao October Weather — China Discovery (https://www.chinadiscovery.com/shanxi/pingyao/weather-in-october.html)",
    "[5] Pingyao Travel Guide — Lonely Planet (https://www.lonelyplanet.com/china/shanxi/pingyao)",
    "[6] Pingyao County Yamen — Travel China Guide (https://www.travelchinaguide.com/attraction/shanxi/pingyao/county-yamen.htm)",
    "[7] Wang Family Compound Guide — China Highlights (https://www.chinahighlights.com/pingyao/attraction/wang-family-compound.htm)",
    "[8] Shuanglin Temple Sculptures — China Discovery (https://www.chinadiscovery.com/shanxi/pingyao/shuanglin-temple.html)",
    "[9] Pingyao Restaurant Recommendations — TripAdvisor (https://www.tripadvisor.com/Restaurants-g303761-Pingyao_Shanxi.html)",
  ],
};
