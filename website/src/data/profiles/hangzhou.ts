import type { CityProfile } from "@/types";

export const hangzhouProfile: CityProfile = {
  slug: "hangzhou",
  heroPhoto: { src: "/photos/hangzhou/_hero.jpg", alt: "Boats on West Lake in Hangzhou before sunset", credit: "Jakub Hałun" },
  executiveSummary: [
    "Hangzhou in mid-October is one of the most sensory-rich experiences in China. The city's famous osmanthus trees burst into bloom, filling streets, lakeside paths, and mountain trails with an intoxicating fragrance that locals call \"the scent of autumn.\" West Lake — the landscape that inspired a millennium of Chinese poetry and painting — is framed by hills turning gold and crimson, with mist rising off the water at dawn. October delivers ideal weather: warm days in the upper 60s to low 70s, cool nights, and minimal rain [1].",
    "But Hangzhou rewards those who look beyond the postcard. The hills surrounding Longjing (Dragon Well) Village offer genuine hiking through terraced tea plantations where family farms still hand-pick and roast China's most celebrated green tea. A morning spent hiking from village to village, stopping to drink freshly roasted Longjing tea with elderly farmers, is one of the most quietly profound experiences available anywhere in China. The Zhejiang Provincial Museum and China National Tea Museum are world-class institutions that rarely appear on tourist itineraries [2].",
    "The food scene is exceptional and distinct — Hangzhou cuisine (a branch of Zhejiang cooking) emphasizes freshness, subtle sweetness, and restrained seasoning that contrasts sharply with the bold flavors of Sichuan or the north. Dongpo pork (braised for hours until meltingly tender), beggar's chicken (clay-wrapped and slow-roasted), and West Lake vinegar fish are dishes with centuries of history behind them, best eaten at neighborhood restaurants where the recipes haven't been diluted for outsiders [3].",
  ],
  famousFor: [
    "West Lake",
    "Longjing (Dragon Well) tea",
    "osmanthus blooming in October",
    "Dongpo pork",
    "classical Chinese gardens",
    "silk production",
    "Southern Song dynasty history",
  ],
  whyItFits: [
    "Outstanding hiking through tea villages and forested hills surrounding West Lake",
    "October osmanthus bloom creates a once-a-year sensory experience",
    "Refined food scene with dishes rooted in centuries of culinary tradition",
    "World-class museums (Zhejiang Provincial Museum, China National Tea Museum) with few foreign visitors",
    "Tea culture immersion — from farm to cup in the birthplace of Longjing tea",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 77,
      avgLow: 59,
      rainChance: 20,
      precip: 0.6,
      sunrise: "5:55 AM",
      sunset: "5:42 PM",
      conditions: "Warm, pleasant; osmanthus bloom begins; occasional light rain [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 72,
      avgLow: 55,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:05 AM",
      sunset: "5:28 PM",
      conditions: "Peak osmanthus fragrance; ideal hiking weather; golden autumn light [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 66,
      avgLow: 50,
      rainChance: 12,
      precip: 0.3,
      sunrise: "6:15 AM",
      sunset: "5:15 PM",
      conditions: "Cooler and crisp; autumn foliage developing; fewer visitors",
    },
  ],
  whatToPack:
    "Layers for 50-77\u00b0F temperature swings. Light jacket, comfortable walking shoes for lakeside paths, sturdy hiking shoes for tea village trails. Small daypack for hikes. Umbrella or light rain jacket for occasional drizzle.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "west-lake-north-shore-beishan-road",
      name: "West Lake North Shore / Beishan Road",
      topPick: true,
      description:
        "The quieter, more atmospheric side of West Lake. Beishan Road runs along the north shore past historic villas, the Zhejiang Provincial Museum, and shaded lakeside paths. Less commercial than the east shore, with century-old plane trees forming a canopy over the walking path. The surrounding hills are laced with trails leading to temples and tea houses [4].",
      whyItFitsUs:
        "Most walkable and atmospherically rich base. Direct access to lakeside walks, museums, and hill trails. Boutique hotels in restored historic villas. Morning walks along the lake feel timeless.",
      nearby:
        "Zhejiang Provincial Museum (5 min), Broken Bridge (10 min walk), Baochu Pagoda trail (15 min), Lingyin Temple (20 min by taxi)",
      hotels:
        "West Lake State Guesthouse (historic lakeside property), Amanfayun (luxury resort in restored tea village \u2014 splurge option)",
    },
    {
      slug: "longjing-village-area",
      name: "Longjing Village / Tea Plantation Hills",
      topPick: false,
      description:
        "The hillside village where Dragon Well tea has been cultivated for over a thousand years. Surrounded by terraced tea fields, bamboo groves, and hiking trails connecting to other villages. Feels completely removed from the city despite being only 20 minutes from West Lake [2].",
      whyItFitsUs:
        "Immersive tea culture experience with excellent hiking directly from the doorstep. Stay in a family-run guesthouse for maximum authenticity. Best for travelers who prioritize nature and cultural depth over urban convenience.",
      nearby:
        "China National Tea Museum (10 min walk), Nine Creeks trail (immediate), West Lake (20 min by taxi or 45 min hike)",
      hotels:
        "Longjing village guesthouses (family-run, basic but atmospheric), Amanfayun (nestled between tea plantations and Lingyin Temple)",
    },
    {
      slug: "hefang-street-wushan-area",
      name: "Hefang Street / Wushan Area",
      topPick: false,
      description:
        "The historic commercial district at the southeast corner of West Lake, centered around Hefang Street and Wushan Hill. This was the heart of the Southern Song dynasty capital (1127-1279) when Hangzhou was the largest city in the world. Wushan Night Market and surrounding lanes retain genuine local dining culture [5].",
      whyItFitsUs:
        "Best area for food exploration. Wushan Night Market is where Hangzhou locals eat, not a tourist performance. Good value accommodations with easy access to both West Lake and the old city.",
      nearby:
        "Wushan Night Market (immediate), West Lake south shore (10 min walk), Leifeng Pagoda (15 min walk), Qinghefang Ancient Street (5 min)",
      hotels:
        "Sofitel Hangzhou Westlake (modern, well-located), various boutique hotels on side streets off Hefang Street",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "west-lake-walk-and-boat",
      name: "West Lake Walk and Boat Ride",
      topPick: true,
      description:
        "The lake that has inspired Chinese poets and painters for over a thousand years. A full circuit of the lakeside path is roughly 15 km, passing through willow-lined causeways, arched bridges, lotus ponds, and pavilions. The \"Ten Scenes of West Lake\" are classical landscape compositions meant to be experienced at specific times and seasons \u2014 several peak in October. A hand-rowed wooden boat ride to the Three Pools Mirroring the Moon offers the lake from its best angle [4].",
      time: "3-4 hours (half day for walk + boat)",
      location:
        "Central Hangzhou. Accessible from any lakeside neighborhood on foot",
      cost: "$7/p ($6 boat ride to Three Pools Mirroring the Moon + $1 island)",
      tips: [
        "Walk the Su Causeway at dawn (6:30-7:30 AM) for mist on the lake and almost no crowds",
        "Hire a hand-rowed wooden boat ($25-35 for 3 people, ~1 hour) rather than the large electric ferries \u2014 far more atmospheric",
        "The north and west shores are quieter and more scenic than the commercialized east shore",
        "In October, seek out the osmanthus groves near Manjuelong and along the north shore \u2014 the fragrance is extraordinary [1]",
      ],
      priceTier: 1,
    },
    {
      slug: "longjing-village-tea-hike",
      name: "Longjing Village Tea Plantation Hike",
      topPick: true,
      description:
        "A genuine hiking experience through the terraced tea fields where China's most famous green tea has been grown for over a millennium. The trail connects Longjing Village to Meijiawu Village through bamboo forests and tea plantations, with stops at family tea farms where you can watch the roasting process and taste freshly prepared Longjing tea. October is the autumn harvest season, and the hills are alive with activity [2].",
      time: "3-4 hours (half day)",
      location:
        "Longjing Village, southwest of West Lake. 20 min by taxi from central Hangzhou",
      cost: "$5-10/p (tea tasting at family farms, trail access free)",
      tips: [
        "Start at Longjing Village and hike south toward Meijiawu \u2014 the trail passes through the most scenic tea terraces",
        "Stop at a family farm (not a commercial tea shop) for a tasting \u2014 they'll roast fresh leaves in front of you",
        "The China National Tea Museum is along the route and worth 45-60 minutes [2]",
        "Bring water and snacks \u2014 limited vendors on the trail between villages",
        "Combine with Nine Creeks and Eighteen Gullies trail for a full day of hiking",
      ],
      priceTier: 1,
    },
    {
      slug: "nine-creeks-eighteen-gullies-trail",
      name: "Nine Creeks and Eighteen Gullies Trail (Jiuxi Shiba Jian)",
      topPick: true,
      description:
        "Hangzhou's most beautiful nature trail, following a stream through dense forest with 18 stream crossings over stepping stones. The trail winds through bamboo groves, past small waterfalls, and through tea plantations. In October, the canopy turns golden and the osmanthus along the lower sections perfumes the entire valley [6].",
      time: "2-3 hours",
      location:
        "Starts near Longjing Village area, exits near Qiantang River. 20 min by taxi from West Lake",
      cost: "Free",
      tips: [
        "Hike downhill (south to north) starting from the Longjing/tea plantation end for easier terrain",
        "Wear shoes that can handle wet stones \u2014 the stream crossings are the highlight but can be slippery",
        "Weekday mornings are nearly empty; weekends draw local hikers",
        "Connects naturally with the Longjing Village tea hike for a full-day circuit",
      ],
      priceTier: 0,
    },
    {
      slug: "lingyin-temple-and-feilai-feng",
      name: "Lingyin Temple and Feilai Feng Grottoes",
      topPick: false,
      description:
        "One of China's oldest and most important Buddhist temples, founded in 328 AD, set dramatically against forested limestone cliffs. Feilai Feng (\"Peak That Flew Here\") features over 300 Buddhist rock carvings dating from the 10th to 14th centuries, some of the finest surviving Song and Yuan dynasty sculpture in China. The surrounding forest of ancient camphor trees creates a cathedral-like atmosphere [7].",
      time: "2-3 hours",
      location:
        "West of West Lake, in the hills. 20 min by taxi from lakeside hotels",
      cost: "$12/p ($6 Feilai Feng scenic area + $6 Lingyin Temple)",
      tips: [
        "Arrive by 8 AM to experience the temple before tour groups \u2014 monks chanting at morning prayers is unforgettable",
        "The Feilai Feng carvings are the artistic highlight \u2014 seek out the famous laughing Maitreya Buddha from 1000 AD",
        "Walk past the temple into the hills behind for quieter trails and smaller temples with no crowds [7]",
        "The enormous camphor trees in the courtyard are themselves worth the visit",
      ],
      priceTier: 1,
    },
    {
      slug: "zhejiang-provincial-museum",
      name: "Zhejiang Provincial Museum",
      topPick: true,
      description:
        "One of China's finest provincial museums, beautifully situated on the north shore of West Lake. The collection spans 7,000 years from Neolithic Hemudu culture through the Southern Song dynasty (when Hangzhou was the world's largest and most sophisticated city) to modern Chinese painting. The celadon ceramics collection is world-class [8].",
      time: "2-3 hours",
      location:
        "Gushan Island, north shore of West Lake. Accessible by foot along Beishan Road",
      cost: "Free (ID required)",
      tips: [
        "Don't miss the Southern Song dynasty galleries \u2014 Hangzhou was the capital and this is the best collection anywhere",
        "The celadon ceramics gallery contains pieces of extraordinary beauty and subtlety",
        "Combine with a lakeside walk along Beishan Road and the Broken Bridge",
        "English signage is adequate but a knowledgeable guide transforms the experience [8]",
      ],
      priceTier: 0,
    },
    {
      slug: "china-national-tea-museum",
      name: "China National Tea Museum",
      topPick: false,
      description:
        "The only national-level museum dedicated to tea in China, set among working tea plantations in the hills southwest of West Lake. Covers the full history, cultivation, and culture of Chinese tea across multiple halls. The tasting room offers expertly prepared examples of China's major tea types with knowledgeable staff [2].",
      time: "1.5-2 hours",
      location:
        "Longjing Road, between West Lake and Longjing Village. 15 min by taxi from central Hangzhou",
      cost: "Free",
      tips: [
        "Combine with the Longjing Village tea hike \u2014 the museum is along the route",
        "The tasting session is the highlight \u2014 staff explain the differences between green, oolong, white, and pu-erh teas",
        "October is autumn tea harvest season, adding context to everything in the museum [2]",
        "The surrounding tea fields are lovely for a short walk",
      ],
      priceTier: 0,
    },
    {
      slug: "baochu-pagoda-and-gem-hill-hike",
      name: "Baochu Pagoda and Gem Hill Hike (Baoshi Shan)",
      topPick: false,
      description:
        "A short but rewarding hike up Gem Hill (Baoshi Shan) on the north side of West Lake to the slender Baochu Pagoda. The trail passes through dense forest and emerges at a viewpoint with panoramic views across the entire lake and city. Popular with morning exercisers \u2014 a window into daily Hangzhou life [4].",
      time: "1-1.5 hours",
      location:
        "North shore of West Lake, trailhead near Beishan Road. Walkable from north shore hotels",
      cost: "Free",
      tips: [
        "Best at dawn or late afternoon for golden light across the lake",
        "The trail is well-maintained but involves genuine climbing \u2014 wear proper shoes",
        "Continue past the pagoda along the ridge trail for quieter hiking with lake views",
        "Combine with a morning walk along Beishan Road for a perfect half-morning",
      ],
      priceTier: 0,
    },
    {
      slug: "leifeng-pagoda-sunset",
      name: "Leifeng Pagoda at Sunset",
      topPick: false,
      description:
        "The rebuilt pagoda on the south shore of West Lake, famous from the Legend of the White Snake \u2014 one of China's most beloved folk tales. The original collapsed in 1924 and was rebuilt in 2002 over the excavated ruins. The top floor offers sweeping views across the lake, and sunset from the upper terrace is one of the classic \"Ten Scenes of West Lake\" [4].",
      time: "1-1.5 hours",
      location:
        "South shore of West Lake, near Jingci Temple. 10 min walk from Hefang Street area",
      cost: "$6/p",
      tips: [
        "Time your visit for 1 hour before sunset \u2014 the view of West Lake in golden light is the whole point",
        "The underground excavation of the original pagoda's foundation is genuinely interesting",
        "Less crowded on weekday evenings",
        "Walk to nearby Jingci Temple afterward \u2014 a peaceful counterpoint to the pagoda's tourist traffic",
      ],
      priceTier: 1,
    },
    {
      slug: "xixi-national-wetland-park",
      name: "Xixi National Wetland Park",
      topPick: false,
      description:
        "China's first national wetland park \u2014 a 11.5 sq km labyrinth of waterways, reed beds, persimmon orchards, and traditional fishing villages preserved within the city. In October, the persimmon trees turn orange-red and the annual Persimmon Festival takes place. A genuine escape from the city into a landscape that feels centuries old [9].",
      time: "3-4 hours (half day)",
      location:
        "Western Hangzhou, about 20-25 min by taxi from West Lake",
      cost: "$11/p ($11 entrance including electric boat rides)",
      tips: [
        "Take the small hand-rowed boats through the narrow waterways rather than the large electric boats \u2014 much more atmospheric",
        "October persimmon harvest season adds beautiful color and you can buy fresh fruit from villagers [9]",
        "The deeper sections away from the main entrance feel remarkably wild and quiet",
        "Allow more time than expected \u2014 the waterways are hypnotically peaceful",
      ],
      priceTier: 1,
    },
    {
      slug: "hangzhou-cooking-class",
      name: "Hangzhou Cooking Class",
      topPick: false,
      description:
        "Hands-on class learning Hangzhou's signature dishes: Dongpo pork (the legendary braised pork belly created by poet Su Dongpo), beggar's chicken (clay-wrapped whole chicken), and West Lake vinegar fish. Typically includes a morning market visit to source ingredients and context on Hangzhou's culinary philosophy of freshness and restraint [3].",
      time: "3-4 hours (including market visit)",
      location:
        "Various locations in central Hangzhou",
      cost: "$30-50/p (per person, all-inclusive)",
      tips: [
        "Request Dongpo pork and beggar's chicken specifically \u2014 these are the dishes most unique to Hangzhou",
        "Classes with a market visit are significantly more immersive",
        "Book a private session for a group of 3 \u2014 the interaction becomes much more personal [3]",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // \u2014 Classic Hangzhou \u2014
    {
      slug: "louwailou",
      name: "Louwailou",
      chineseName: "\u697c\u5916\u697c",
      category: "Classic Hangzhou",
      topPick: true,
      location:
        "Gushan Island, north shore of West Lake, next to Zhejiang Provincial Museum",
      priceRange: "$15-25/p",
      cuisine: "Traditional Hangzhou cuisine (est. 1848)",
      description:
        "The most storied restaurant in Hangzhou, operating since 1848 on the shores of West Lake. The setting \u2014 dining rooms overlooking the lake \u2014 matches the historical significance. West Lake vinegar fish, Dongpo pork, and beggar's chicken are prepared according to recipes essentially unchanged for generations [3].",
      reviews:
        "Mixed reviews reflect the tourist-vs-local divide: can feel like a tourist institution at peak hours. Visit at off-peak times (early lunch, late dinner) for much better experience. The food itself, particularly the signature dishes, remains excellent.",
      whatToOrder:
        "West Lake vinegar fish (the signature), Dongpo pork, beggar's chicken (pre-order required), Longjing shrimp.",
      bestFor: "Lunch (arrive at 11 AM opening for lake-view seating)",
      priceTier: 2,
    },
    {
      slug: "zhiweiguan",
      name: "Zhiweiguan",
      chineseName: "\u77e5\u5473\u89c2",
      category: "Classic Hangzhou",
      topPick: true,
      location:
        "Multiple locations; original branch on Renhe Road near Hefang Street",
      priceRange: "$8-18/p",
      cuisine: "Traditional Hangzhou snacks and dishes (est. 1913)",
      description:
        "A century-old institution specializing in Hangzhou's refined snack culture. The original branch has a ground-floor takeaway counter for quick bites and upstairs sit-down dining for full meals. Famous for its cat's ear noodles (mao er duo), xiao long bao, and osmanthus-flavored sweets [5].",
      reviews:
        "Locals consider it the gold standard for traditional Hangzhou snacks. Ground-floor counter is always mobbed \u2014 upstairs restaurant is calmer. Some newer branches feel more commercial.",
      whatToOrder:
        "Cat's ear noodles (mao er duo), Hangzhou xiao long bao, Dongpo pork, osmanthus lotus root stuffed with sticky rice, sweet osmanthus cake (October seasonal specialty).",
      bestFor: "Either meal; ground floor for quick authentic snacks",
      priceTier: 1,
    },
    {
      slug: "grandmas-home",
      name: "Grandma's Home (Waipo Jia)",
      chineseName: "\u5916\u5a46\u5bb6",
      category: "Classic Hangzhou",
      topPick: false,
      location:
        "Multiple locations; Hubin Road branch near West Lake is most convenient",
      priceRange: "$7-12/p",
      cuisine: "Home-style Hangzhou cuisine at remarkable value",
      description:
        "Wildly popular local chain that serves genuinely good Hangzhou home cooking at prices that seem impossibly low. Founded in Hangzhou and still best here. The tea-smoked chicken and Dongpo pork are standouts. Expect long waits at peak hours \u2014 this is where Hangzhou families go [10].",
      reviews:
        "Near-universal local praise for quality-to-price ratio. Waits of 30-60 minutes at dinner are common. Use WeChat to queue remotely. Some dismiss it as a chain, but the food quality is genuinely impressive.",
      whatToOrder:
        "Tea-smoked chicken, Dongpo pork, steamed pork with preserved vegetables, mapo tofu, stir-fried greens.",
      bestFor: "Lunch (arrive before 11:30 AM to avoid worst queues)",
      priceTier: 1,
    },
    {
      slug: "longjing-caotang",
      name: "Longjing Caotang",
      chineseName: "\u9f99\u4e95\u8349\u5802",
      category: "Classic Hangzhou",
      topPick: true,
      location:
        "Longjing Village, in the tea plantation hills southwest of West Lake",
      priceRange: "$20-35/p",
      cuisine: "Refined Hangzhou cuisine using hyper-local ingredients",
      description:
        "Hidden in the tea plantations of Longjing Village, this restaurant serves refined Hangzhou cuisine using ingredients sourced from surrounding hills and farms. Dining rooms overlook tea fields and bamboo groves. The Longjing shrimp (made with tea leaves picked the same morning) is transcendent. Reservations essential [3].",
      reviews:
        "Consistently praised as Hangzhou's finest dining experience that isn't a hotel restaurant. Setting is extraordinary. Some find it pricey, but ingredient quality justifies the cost.",
      whatToOrder:
        "Longjing shrimp (the signature \u2014 shrimp stir-fried with fresh tea leaves), beggar's chicken (pre-order), seasonal bamboo shoot dishes, farmhouse tofu.",
      bestFor: "Lunch after a morning tea village hike",
      priceTier: 2,
    },

    // \u2014 Street Food & Snacks \u2014
    {
      slug: "wushan-night-market",
      name: "Wushan Night Market",
      chineseName: "\u5434\u5c71\u591c\u5e02",
      category: "Street Food & Snacks",
      topPick: true,
      location:
        "Wushan Square area, near Hefang Street, southeast of West Lake",
      priceRange: "$2-6/p",
      cuisine: "Hangzhou street food \u2014 the real deal",
      description:
        "The night market where Hangzhou locals actually eat. Dozens of stalls and small shops serving local specialties: stinky tofu, scallion pancakes, fried stuffed lotus root cakes, osmanthus jelly, and skewered meats. Far more authentic than the performative food stalls on nearby Qinghefang Ancient Street [5].",
      reviews:
        "Overwhelmingly positive from locals and adventurous travelers. Some stalls are better than others \u2014 follow the longest queues. English is minimal to nonexistent.",
      whatToOrder:
        "Stinky tofu (chou doufu), fried lotus root cakes, scallion oil pancakes, osmanthus jelly (October specialty), grilled squid skewers.",
      bestFor: "Evening, 7-10 PM",
      priceTier: 1,
    },
    {
      slug: "kuiyuanguan",
      name: "Kuiyuanguan",
      chineseName: "\u594e\u5143\u9986",
      category: "Street Food & Snacks",
      topPick: false,
      location:
        "Jiefang Road, central Hangzhou, near West Lake east shore",
      priceRange: "$4-8/p",
      cuisine: "Traditional Hangzhou noodles (est. 1867)",
      description:
        "Hangzhou's most famous noodle house, operating since 1867. Known for its pian er chuan noodles \u2014 a delicate soup with hand-cut noodle pieces, sliced pork, bamboo shoots, and pickled mustard greens. Simple, clean, and deeply satisfying. The kind of place where elderly regulars have been eating the same bowl for decades [10].",
      reviews:
        "A Hangzhou institution. Noodle quality is consistently excellent. Setting is functional, not fancy. The shrimp and eel noodle varieties are popular with locals.",
      whatToOrder:
        "Pian er chuan noodles (the signature), shrimp noodle soup, eel noodle soup.",
      bestFor: "Breakfast or lunch",
      priceTier: 1,
    },
    {
      slug: "xin-feng-xiao-chi",
      name: "Xin Feng Xiao Chi",
      chineseName: "\u65b0\u4e30\u5c0f\u5403",
      category: "Street Food & Snacks",
      topPick: false,
      location:
        "Multiple locations throughout Hangzhou; branches near West Lake and Hefang Street",
      priceRange: "$1-4/p",
      cuisine: "Traditional Hangzhou breakfast and snacks",
      description:
        "Beloved local chain for cheap, excellent Hangzhou breakfast food. Steamed buns, savory pancakes, sweet glutinous rice balls, and soy milk. Always packed with locals grabbing breakfast before work. No English menu but pointing works fine [10].",
      reviews:
        "The quintessential Hangzhou breakfast spot. Quality is remarkably consistent across branches. Expect crowds at peak breakfast hours (7-9 AM).",
      whatToOrder:
        "Xiao long bao, savory scallion pancake, sweet sesame glutinous rice balls (tangyuan), fresh soy milk.",
      bestFor: "Breakfast, 7-9 AM",
      priceTier: 1,
    },

    // \u2014 Regional & Specialty \u2014
    {
      slug: "zhang-sheng-ji",
      name: "Zhang Sheng Ji",
      chineseName: "\u5f20\u751f\u8bb0",
      category: "Regional & Specialty",
      topPick: false,
      location:
        "Shuguang Road, near West Lake north shore",
      priceRange: "$15-25/p",
      cuisine: "Hangzhou-style banquet dishes",
      description:
        "Famous for its signature old duck soup \u2014 a whole duck simmered for hours with ham and bamboo shoots until the broth turns silky and intensely flavored. A Hangzhou institution for celebratory and family meals. The setting is more formal than street-food joints but prices remain reasonable [3].",
      reviews:
        "The duck soup is legendary \u2014 many consider it the single best dish in Hangzhou. Other dishes are solid but the soup is why you come. Reservations recommended for dinner.",
      whatToOrder:
        "Old duck soup (lao ya bao \u2014 the must-order), Dongpo pork, stir-fried river shrimp, seasonal greens.",
      bestFor: "Dinner",
      priceTier: 2,
    },
    {
      slug: "green-tea-restaurant",
      name: "Green Tea Restaurant (Lv Cha)",
      chineseName: "\u7eff\u8336\u9910\u5385",
      category: "Regional & Specialty",
      topPick: false,
      location:
        "Longjing Road, near the tea plantations; original Hangzhou location",
      priceRange: "$8-15/p",
      cuisine: "Creative Hangzhou cuisine in a garden setting",
      description:
        "Born in Hangzhou and now a national chain, but the original Longjing Road location retains genuine charm \u2014 a glass-walled dining room overlooking tea fields and a stream. Creative takes on Hangzhou classics at very accessible prices. The bread baked with condensed milk is oddly iconic [10].",
      reviews:
        "Excellent value and beautiful original setting. Waits can be extreme (1-2 hours at dinner). Food quality is a clear step above typical chain restaurants. The Longjing Road branch is worth the trip for the setting alone.",
      whatToOrder:
        "Bread baked with condensed milk (the famous one), green tea cake, Longjing shrimp, roasted chicken with tea leaves.",
      bestFor: "Lunch (combine with tea village hiking)",
      priceTier: 1,
    },
    {
      slug: "shan-wai-shan",
      name: "Shan Wai Shan",
      chineseName: "\u5c71\u5916\u5c71",
      category: "Regional & Specialty",
      topPick: false,
      location:
        "Yuquan Road, near Lingyin Temple and Botanical Garden, west side of West Lake",
      priceRange: "$15-25/p",
      cuisine: "Traditional Hangzhou cuisine in a garden setting (est. 1920s)",
      description:
        "Historic restaurant set in gardens near the Botanical Garden, specializing in refined Hangzhou cuisine. Less tourist-oriented than Louwailou with a more genuinely local clientele. Known for its fish head soup and seasonal dishes featuring ingredients from the surrounding hills [3].",
      reviews:
        "Praised for consistent quality and beautiful garden setting. Less famous than Louwailou but many locals prefer it. Fish head soup is frequently cited as the best in the city.",
      whatToOrder:
        "Fish head soup (the signature), West Lake vinegar fish, osmanthus honey lotus root (October special), stir-fried seasonal greens.",
      bestFor: "Lunch after visiting Lingyin Temple",
      priceTier: 2,
    },

    // \u2014 Splurge \u2014
    {
      slug: "jin-sha-at-amanfayun",
      name: "Jin Sha at Amanfayun",
      chineseName: "\u91d1\u6c99",
      category: "Splurge",
      topPick: false,
      location:
        "Amanfayun resort, Fayun Lane, near Lingyin Temple \u2014 in a restored ancient village",
      priceRange: "$60-120/p",
      cuisine: "Refined Hangzhou and Zhejiang cuisine at the highest level",
      description:
        "Set within the Amanfayun resort's restored village of traditional stone and wood buildings surrounded by tea plantations, bamboo forests, and ancient temples. The kitchen sources ingredients hyper-locally and applies classical Hangzhou technique with extraordinary refinement. Beggar's chicken here \u2014 wrapped in lotus leaves and clay, baked for hours \u2014 is definitive [11].",
      reviews:
        "Regarded as the finest Hangzhou dining experience. Setting is extraordinary \u2014 dining in a centuries-old village house with camphor trees outside the window. Pricey but not outrageous by international fine-dining standards.",
      whatToOrder:
        "Beggar's chicken (must pre-order 24 hours ahead), Longjing tea-smoked dishes, seasonal Zhejiang specialties, handmade tofu.",
      bestFor: "Dinner. Book well in advance, even for non-hotel guests.",
      priceTier: 4,
    },
    {
      slug: "28-hubin-road",
      name: "28 Hubin Road (Hyatt Regency)",
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "Hyatt Regency Hangzhou, 28 Hubin Road, directly on the east shore of West Lake",
      priceRange: "$40-80/p",
      cuisine: "Modern Hangzhou cuisine with West Lake views",
      description:
        "Upscale hotel dining with sweeping West Lake views from floor-to-ceiling windows. Modern interpretations of Hangzhou classics by chefs who understand both tradition and innovation. The sunset dinner experience with lake views is memorable [11].",
      reviews:
        "Excellent food in a spectacular setting. Service is polished and English-friendly. Some feel it lacks the soul of neighborhood restaurants, but it delivers consistently high quality.",
      whatToOrder:
        "Modern Dongpo pork, West Lake fish in vinegar sauce, seasonal prix fixe menu.",
      bestFor: "Dinner with sunset lake views",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Hangzhou's metro covers West Lake area and major stations. Line 1 is most useful for visitors.",
      "Taxis/Rideshare: Didi works well. Most rides within the West Lake area are under $5. Essential for reaching Longjing Village and Lingyin Temple.",
      "Walking/Cycling: The West Lake shoreline is excellent for walking and cycling. Hangzhou pioneered China's bike-share system \u2014 stations are everywhere.",
      "E-bikes: Rental e-bikes are popular for reaching the tea villages and surrounding hills. Available through various apps.",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 4-5 dishes family-style plus rice. Hangzhou portions tend to be moderate \u2014 order an extra dish compared to northern China.",
      "Seasonal specialties: October brings osmanthus-flavored everything \u2014 cakes, jellies, teas, wine. Seek these out as they're only available during bloom season.",
      "Reservations: Essential at Longjing Caotang and Jin Sha. Use WeChat to queue at Grandma's Home and Green Tea Restaurant.",
      "Tipping: Not expected in mainland China.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are universal. Set up international Alipay before the trip. Carry some cash for tea farm purchases and small street vendors.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked in mainland China.",
      "Language: English is limited outside hotel restaurants. Google Translate camera mode works well for menus. Tea farm families rarely speak English but are welcoming.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Osmanthus timing: Peak bloom is typically early-to-mid October but varies by year. Check local reports as your travel date approaches [1].",
      "Lingyin Temple and major sites can be crowded on weekends and national holidays \u2014 weekday visits are strongly recommended.",
      "Tea purchases: Buy Longjing tea directly from family farms in Longjing or Meijiawu villages rather than city shops \u2014 better quality at lower prices, and you can watch the roasting [2].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Hangzhou October Weather \u2014 China Discovery (https://www.chinadiscovery.com/hangzhou-tours/weather/october-weather.html)",
    "[2] Longjing Tea Village Guide \u2014 China Highlights (https://www.chinahighlights.com/hangzhou/attraction/dragon-well-tea-plantation.htm)",
    "[3] Hangzhou Food Guide \u2014 Lost Plate (https://lostplate.com/hangzhou-food-guide/)",
    "[4] West Lake Guide \u2014 China Highlights (https://www.chinahighlights.com/hangzhou/west-lake/)",
    "[5] Hefang Street & Wushan Area \u2014 China Discovery (https://www.chinadiscovery.com/hangzhou-tours/hefang-street.html)",
    "[6] Nine Creeks Eighteen Gullies Trail \u2014 TripAdvisor (https://www.tripadvisor.com/Attraction_Review-g298559-d6485686-Reviews-Nine_Creeks_and_Eighteen_Gullies-Hangzhou_Zhejiang.html)",
    "[7] Lingyin Temple Guide \u2014 China Highlights (https://www.chinahighlights.com/hangzhou/attraction/lingyin-temple.htm)",
    "[8] Zhejiang Provincial Museum \u2014 Travel China Guide (https://www.travelchinaguide.com/attraction/zhejiang/hangzhou/zhejiang-museum.htm)",
    "[9] Xixi Wetland Park Guide \u2014 China Discovery (https://www.chinadiscovery.com/hangzhou-tours/xixi-wetland-park.html)",
    "[10] Hangzhou Restaurant Guide \u2014 China Discovery (https://www.chinadiscovery.com/hangzhou-tours/hangzhou-restaurants.html)",
    "[11] Amanfayun Hangzhou \u2014 Aman Resorts (https://www.aman.com/resorts/amanfayun)",
  ],
};
