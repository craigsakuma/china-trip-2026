import type { CityProfile } from "@/types";

export const beijingProfile: CityProfile = {
  slug: "beijing",
  executiveSummary: [
    'Beijing in mid-October enters what locals call "golden autumn" \u2014 the city\u2019s ginkgo trees explode into brilliant yellow, temple grounds blaze with red maple, and the surrounding mountains turn crimson and gold. October delivers the best air quality of the year (average AQI of 74) [1].',
    "The city operates on two parallel tracks: the monumental Beijing of imperial palaces and grand boulevards, and the deeply human Beijing of narrow hutong alleyways where elderly neighbors play chess on stone benches, parks where retirees practice tai chi at dawn, and neighborhood restaurants where Peking duck is served with no English menu and no tourist markup. With knowledgeable local guides, 3,000 years of history come alive in ways that remain invisible to the selfie-stick crowd. The Great Wall sections favored by hikers (Jinshanling, Gubeikou) offer genuinely challenging terrain with sweeping mountain views and almost no other visitors [2].",
    "The food alone justifies the trip \u2014 from Peking duck and hand-pulled noodles to lamb hotpot, jianbing breakfast crepes, and elaborate imperial court dishes. The contemporary art scene, anchored by the 798 Art District, is world-class and deeply engaged with Chinese identity and modernity [3].",
  ],
  famousFor: [
    "Forbidden City",
    "Great Wall",
    "Peking duck",
    "hutong culture",
    "imperial history",
    "contemporary art",
    "temple parks",
  ],
  whyItFits: [
    "World-class hiking on the Great Wall (Jinshanling, Gubeikou)",
    "Incredible food scene from $2 street breakfasts to three-Michelin-star dining",
    "Deep history best experienced with expert guides",
    "Authentic neighborhood life in the hutongs",
    "Active local park culture (tai chi, calligraphy, music at dawn)",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: "21\u00b0C / 70\u00b0F",
      avgLow: "10\u00b0C / 50\u00b0F",
      rainDays: "2 days",
      aqi: "~74",
      conditions: "Clear, crisp; peak autumn color begins",
    },
    {
      period: "Mid Oct",
      avgHigh: "18\u00b0C / 64\u00b0F",
      avgLow: "8\u00b0C / 46\u00b0F",
      rainDays: "1-2 days",
      aqi: "~74",
      conditions:
        "Golden autumn; best foliage; excellent visibility [1]",
    },
    {
      period: "Late Oct",
      avgHigh: "14\u00b0C / 57\u00b0F",
      avgLow: "4\u00b0C / 39\u00b0F",
      rainDays: "1 day",
      aqi: "~80",
      conditions: "Cooler; layers essential; fewer visitors",
    },
  ],
  whatToPack:
    "Layers for 4-21\u00b0C (39-70\u00b0F) swings within a single day. Light jacket, fleece, comfortable walking shoes, sturdy hiking shoes for Great Wall.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "gulou-drum-tower-nanluoguxiang-area",
      name: "Gulou (Drum Tower) / Nanluoguxiang Area",
      topPick: true,
      description:
        "The beating heart of hutong Beijing. Narrow alleyways radiate from the ancient Drum and Bell Towers through some of the city\u2019s best-preserved traditional courtyard homes. Houhai lakes on the western edge, Nanluoguxiang on the eastern boundary. Despite its popularity with younger Chinese visitors, the residential back-alleys remain deeply authentic [4].",
      whyItFitsUs:
        "Most walkable, atmospherically rich neighborhood. Everything accessible on foot \u2014 morning park culture at Houhai Lake, hutong wandering, Drum and Bell Towers, excellent local restaurants. Multiple boutique courtyard hotels.",
      nearby:
        "Drum Tower (5 min), Houhai Lakes (5 min), Beihai Park (15 min walk), Forbidden City (20 min walk)",
      hotels:
        "The Orchid Hotel (9-room boutique in restored hutong courtyard \u2014 top pick), Mao\u2019er Courtyard Boutique Hotel",
    },
    {
      slug: "dongsi-central-dongcheng",
      name: "Dongsi / Central Dongcheng",
      topPick: false,
      description:
        'Quieter pocket east of the Forbidden City where well-preserved hutongs meet modern Beijing. More genuinely residential than Gulou \u2014 you\u2019ll see more locals than visitors in morning markets and noodle shops.',
      whyItFitsUs:
        'Most "lived-in" authentic feel with walkable proximity to major sites. Several courtyard boutique hotels in centuries-old residences.',
      nearby:
        "Forbidden City (10-15 min walk), Temple of Heaven (15 min taxi), Lama Temple (10 min taxi)",
      hotels:
        "Peking Yard Boutique Hotel (400-year-old courtyard), Dasein Youlan Hotel (includes free bikes, tea ceremonies, calligraphy sessions) [4]",
    },
    {
      slug: "qianmen-dashilar",
      name: "Qianmen / Dashilar \u2014 Splurge Option",
      topPick: false,
      description:
        "Beijing\u2019s oldest commercial district (600 years), directly south of Tiananmen Square. The Dashilar hutong neighborhood retains extraordinary character \u2014 narrow alleys with traditional medicine shops, century-old restaurants, and a genuine neighborhood buzz.",
      whyItFitsUs:
        "Most dramatic contrast between imperial grandeur and gritty authentic neighborhood life. Home to the Mandarin Oriental Qianmen (#14 World\u2019s 50 Best Hotels 2025) [5].",
      nearby:
        "Tiananmen Square (10 min walk), Forbidden City (15 min walk), Temple of Heaven (15 min walk)",
      hotels:
        "Mandarin Oriental Qianmen (42 individual courtyard houses scattered through the hutong \u2014 extraordinary splurge) [5], Qianmen Courtyard Hotel (200-year-old courtyard, more affordable)",
    },
    {
      slug: "wudaoying-yonghegong-area",
      name: "Wudaoying / Yonghegong Area",
      topPick: false,
      description:
        "Northeast Dongcheng\u2019s most creative-intellectual neighborhood. Confucius Temple and Imperial College anchor history; Wudaoying Hutong\u2019s indie cafes and galleries give it bohemian character. Quieter and more refined than Gulou.",
      whyItFitsUs:
        'Art, history, and a slightly off-center cultural sensibility. Less "discovered" by tourists.',
      nearby:
        "Lama Temple (5 min), Confucius Temple (5 min), Wudaoying Hutong (immediate), 798 Art District (20 min taxi)",
      hotels: "",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "the-forbidden-city-palace-museum",
      name: "The Forbidden City (Palace Museum)",
      topPick: true,
      description:
        "The world\u2019s largest palace complex \u2014 980 buildings across 180 acres \u2014 served as home to 24 emperors across the Ming and Qing dynasties [6]. With a knowledgeable guide, the symbolism in every roof tile, dragon motif, and courtyard layout comes alive.",
      time: "3-4 hours (half day with guide)",
      location:
        "Central Beijing, Dongcheng District. Metro: Tiananmen East/West. 15-30 min from most central hotels",
      cost: "$50/p ($8 entrance + $125/3 shared guide)",
      tips: [
        "Arrive at 8:30 AM opening",
        "Avoid the central axis (clogged with tour groups) \u2014 veer into the quieter eastern/western wings (Treasure Gallery and Clock Gallery) [6]",
        "Book tickets 3-5 days in advance on the Palace Museum WeChat mini-program (October dates sell out)",
        "Exit through the north gate directly into Jingshan Park",
      ],
    },
    {
      slug: "great-wall-at-jinshanling",
      name: "Great Wall at Jinshanling",
      topPick: true,
      description:
        "The premier Great Wall section for serious hikers. 154 km northeast of Beijing with a striking mix of partially restored and wild original wall \u2014 crumbling watchtowers, overgrown battlements, and dramatic ridgeline hiking. Unlike Badaling (which resembles a theme park), Jinshanling sees a fraction of visitors [2].",
      time: "Full day (2.5 hrs each way + 3.5-4 hrs hiking the 7km West-to-East Gate route)",
      location:
        "Luanping County, Hebei Province. ~2-2.5 hours by car from central Beijing",
      cost: "$33/p ($9 entrance + $70/3 shared private car) \u2014 or $18/p via shared minivan ($9 entrance + $9 minivan)",
      tips: [
        "Hire a private driver for flexibility \u2014 leave Beijing by 6:30-7:00 AM",
        "Bring sturdy hiking shoes, water, snacks, layers \u2014 the wall is exposed and windy",
        "The transition zone between restored and wild sections is where the magic happens",
        "October autumn colors in surrounding mountains are spectacular [2]",
      ],
    },
    {
      slug: "gubeikou-to-jinshanling-wild-wall-hike",
      name: "Gubeikou-to-Jinshanling Wild Wall Hike \u2014 Advanced Option",
      topPick: false,
      description:
        'The most adventurous Great Wall experience: ~12 km of completely unrestored "wild wall" transitioning into partially restored sections. Crumbling, vine-covered ruins feel like discovering the wall yourself. Challenging terrain with broken surfaces and steep sections [7].',
      time: "Full day (leave early morning, 6-7 hrs total hiking)",
      location:
        "Gubeikou ~130 km NE of Beijing (2-2.5 hrs by car), hike ends at Jinshanling",
      cost: "$36/p ($4 entrance + $97/3 shared car/driver)",
      tips: [
        "Check current status before planning \u2014 the connecting route was temporarily closed in mid-2025 due to military restrictions [7]",
        "Proper hiking boots essential; hire a local guide from Gubeikou village",
        "Carry all water and food \u2014 no vendors on wild sections",
        "The S501 suburban train from Beijing North to Gubeikou departs ~6:50 AM ($2)",
      ],
    },
    {
      slug: "summer-palace-and-longevity-hill",
      name: "Summer Palace and Longevity Hill",
      topPick: false,
      description:
        "A masterpiece of Chinese garden design covering 290 hectares, built as a retreat for Empress Dowager Cixi. The real draw is Longevity Hill \u2014 a genuine hike up through layered temples, pavilions, and forested paths to the Tower of Buddhist Incense with panoramic views over Kunming Lake [8].",
      time: "3-4 hours (half day)",
      location:
        "Haidian District, NW Beijing. ~40-50 min by taxi. Metro Line 4 to Beigongmen",
      cost: "$39/p ($6 entrance + $100/3 shared guide)",
      tips: [
        "Arrive before 8 AM",
        "Walk the 728m Long Gallery (14,000 paintings) then break away from tourist flow and climb Longevity Hill",
        "The rear hill area has far fewer visitors and more natural scenery [8]",
        "Rent a boat on Kunming Lake (~$8/hr) for a different perspective",
      ],
    },
    {
      slug: "fragrant-hills-park",
      name: "Fragrant Hills Park \u2014 Autumn Foliage Hike",
      topPick: false,
      description:
        "Beijing\u2019s premier autumn foliage destination with 200,000+ smoke trees, maples, and ginkgo. Mid-October is the beginning of peak season. Genuine mountain hiking with multiple trails, historic temples, and panoramic city views [9].",
      time: "3-4 hours (half day)",
      location:
        "Western suburbs, Haidian District. ~45-60 min from central Beijing by car",
      cost: "$2/p ($2 entrance)",
      tips: [
        "Visit weekday morning before 10 AM (weekends get very crowded during foliage season)",
        "Skip the main Xianglu Peak trail \u2014 take the southern mountain trails past Yan Yue Pavilion and Xiangshan Temple for best foliage with fewer people [9]",
        "Wear proper hiking shoes",
      ],
    },
    {
      slug: "temple-of-heaven-and-morning-park-culture",
      name: "Temple of Heaven and Morning Park Culture",
      topPick: true,
      description:
        "The 15th-century temple complex is architecturally stunning, but the real magic is the surrounding park at dawn \u2014 hundreds of locals gather for tai chi, fan dancing, erhu playing, choir singing, and calligraphy writing with water brushes. This is authentic Beijing at its most unguarded [10].",
      time: "2-3 hours (morning)",
      location:
        "Dongcheng District. Metro Line 5 to Tiantan Dongmen. 20-30 min from central hotels",
      cost: "$5/p ($2 park + $3 Hall of Prayer)",
      tips: [
        "Arrive 6:00-7:30 AM to witness the park culture \u2014 temple buildings don\u2019t open until 8 AM so explore the park first",
        "Walk the Long Corridor where retirees sing and play instruments \u2014 visitors are often invited to join [10]",
        "Pairs well with a Peking duck lunch afterward at nearby Siji Minfu",
      ],
    },
    {
      slug: "jingshan-park",
      name: "Jingshan Park \u2014 Panoramic Views",
      topPick: false,
      description:
        "This artificial hill (built from Forbidden City moat excavation) offers the single best panoramic view of the entire Forbidden City and Beijing\u2019s central axis. Also the site where the last Ming emperor hanged himself as rebels stormed the city in 1644 [11].",
      time: "1-1.5 hours",
      location:
        "Immediately north of the Forbidden City\u2019s north gate",
      cost: "$2/p ($2 entrance)",
      tips: [
        "Visit immediately after exiting the Forbidden City\u2019s north gate",
        "Climb to Wanchun Pavilion for the definitive photograph of the golden rooftops stretching south",
        "Late afternoon golden-hour light is ideal; most tour groups skip this entirely",
        "After descending, walk to Beihai Park\u2019s east entrance (200m away)",
      ],
    },
    {
      slug: "beihai-park",
      name: "Beihai Park",
      topPick: false,
      description:
        "Beijing\u2019s best-kept secret among major attractions. 1,000-year-old imperial garden predating the Forbidden City with a White Dagoba on Jade Flower Island and a 600-year-old Nine Dragon Screen (one of only three in China) [12].",
      time: "1.5-2 hours",
      location:
        "Xicheng District, directly west of Jingshan Park",
      cost: "$2/p ($2 entrance)",
      tips: [
        "Visit early morning or late afternoon",
        "Climb Jade Flower Island for views of the White Dagoba",
        "North shore is quieter and more contemplative",
        'Combines naturally with Jingshan and the Forbidden City for a full "imperial core" day',
      ],
    },
    {
      slug: "lama-temple-and-guozijian-street",
      name: "Lama Temple (Yonghe Temple) and Guozijian Street",
      topPick: false,
      description:
        "Beijing\u2019s most magnificent Tibetan Buddhist temple, with progressively larger Buddha statues culminating in a breathtaking 26-meter Buddha carved from a single piece of white sandalwood (a gift from the 7th Dalai Lama) [13]. Incense-filled halls and devoted worshippers create a genuinely sacred atmosphere. Adjacent Guozijian Street connects to the Confucius Temple and Imperial College.",
      time: "2-3 hours (including Confucius Temple and Guozijian Street stroll)",
      location:
        "Dongcheng District. Metro Line 2/5 to Yonghegong. 15-20 min from central Beijing",
      cost: "$8/p ($4 Lama Temple + $4 Confucius Temple)",
      tips: [
        "Visit early morning (9 AM opening) for peaceful atmosphere",
        "Walk to the Confucius Temple and Imperial College after \u2014 far quieter and more contemplative [13]",
        "Guozijian Street has traditional architecture, cafes, and cultural shops, connecting directly to Wudaoying Hutong",
      ],
    },
    {
      slug: "wudaoying-hutong",
      name: "Wudaoying Hutong \u2014 Creative Hutong Culture",
      topPick: false,
      description:
        "Beijing\u2019s most charming creative hutong \u2014 traditional grey-brick courtyard houses with independent cafes, art galleries, vintage shops, and bookstores. Retains genuine neighborhood character unlike the commercialized Nanluoguxiang [14].",
      time: "1.5-2 hours (great for coffee break or lunch between temple visits)",
      location:
        "Dongcheng District, directly opposite Yonghegong Metro. Steps from the Lama Temple",
      cost: "Free",
      tips: [
        'Combine with Lama Temple and Guozijian Street for a half-day "northeast hutong" itinerary',
        "Metal Hands Coffee is a neighborhood institution",
        "Wander into side alleys for quieter residential atmosphere \u2014 excellent lunch spot",
      ],
    },
    {
      slug: "deep-hutong-walking-tour",
      name: "Deep Hutong Walking Tour (Shichahai / Houhai Area)",
      topPick: true,
      description:
        "The hutongs around Shichahai and Houhai lakes represent old Beijing at its most atmospheric \u2014 courtyard homes with carved doorways, street vendors, elderly neighbors chatting on doorsteps, and a labyrinth of lanes that reward getting intentionally lost [15].",
      time: "2-3 hours",
      location:
        "Xicheng/Dongcheng border, around Houhai Lake. Metro Line 8 to Shichahai",
      cost: "$25/p ($75/3 shared private guide) \u2014 or free self-guided",
      tips: [
        "AVOID the rickshaw tours around Houhai \u2014 overpriced and scripted",
        "Walk or hire a private guide who grew up in the hutongs [15]",
        "The best hutongs have no shops, just residential life",
        "Visit Prince Gong\u2019s Mansion ($6) for the best-preserved aristocratic courtyard compound",
      ],
    },
    {
      slug: "798-art-district",
      name: "798 Art District (Dashanzi)",
      topPick: true,
      description:
        "Beijing\u2019s premier contemporary art hub in a repurposed 1950s East German-designed military electronics factory. Bauhaus industrial architecture houses galleries showing China\u2019s most provocative contemporary artists. UCCA (Ullens Center for Contemporary Art) is the anchor [3].",
      time: "3-4 hours (half day)",
      location:
        "Chaoyang District, NE Beijing. ~30-40 min by taxi. Metro Line 14 to Jiangtai",
      cost: "$14/p ($14 UCCA exhibition) \u2014 district entry is free",
      tips: [
        "Go on a weekday \u2014 start at UCCA then wander; nearly 80 exhibitions rotate monthly [3]",
        "Outdoor murals and sculptures between buildings are compelling",
        "Have lunch at one of the district\u2019s cafes",
        "Consider combining with nearby Caochangdi art village (10 min taxi) for a more raw, less commercial scene",
      ],
    },
    {
      slug: "traditional-tea-ceremony",
      name: "Traditional Tea Ceremony",
      topPick: false,
      description:
        "A guided tea ceremony in a traditional Beijing courtyard teaches the art of Chinese tea culture \u2014 from precise water heating to multiple short infusions revealing different layers of oolong, pu-erh, green, and jasmine teas [16].",
      time: "1.5-2 hours",
      location: "Various hutong locations in Dongcheng District",
      cost: "$30-80/p (per person, all-inclusive)",
      tips: [
        "Seek small, intimate venues (4-5 guests) over large tourist teahouses",
        'BEWARE the "tea ceremony scam" \u2014 friendly strangers inviting you to a teahouse is a well-known Beijing scam [16]',
        "Only book through reputable operators or your hotel",
      ],
    },
    {
      slug: "hutong-cooking-class",
      name: "Hutong Cooking Class",
      topPick: false,
      description:
        "Hands-on cooking in a traditional hutong courtyard home, typically starting with a visit to a local morning market followed by making dumplings (jiaozi), hand-pulled noodles, and other Beijing staples [17].",
      time: "3-4 hours (including market visit)",
      location:
        "Various hutong locations. 15-20 min from central hotels",
      cost: "$25-60/p (per person, all-inclusive)",
      tips: [
        "Book a private class for our group of 3 \u2014 the interaction with the host family becomes much more personal",
        "Classes that include a morning market visit are significantly more immersive [17]",
        "Request Beijing-specific dishes (zhajiang noodles, dumplings, scallion pancakes)",
      ],
    },
    {
      slug: "panjiayuan-antique-market",
      name: "Panjiayuan Antique Market",
      topPick: false,
      description:
        "China\u2019s largest and most authentic antique and flea market. Thousands of vendors selling Chinese paintings, calligraphy, jade, ceramics, Mao-era memorabilia, Tibetan artifacts, minority-group textiles, and vintage curiosities. This is where Chinese collectors shop, not a tourist souvenir market [18].",
      time: "2-3 hours",
      location:
        "SE Chaoyang District. Metro Line 10 to Panjiayuan. ~25-30 min from central Beijing",
      cost: "Free (purchases vary)",
      tips: [
        "Go Saturday or Sunday morning, arrive 7:00-8:00 AM",
        "Bargaining is mandatory \u2014 start at ~25% of asking price [18]",
        "Bring cash; the minority-group crafts and vintage propaganda poster sections are fascinating",
        "Ask vendors to tell stories behind pieces",
      ],
    },
    {
      slug: "peking-opera-performance",
      name: "Peking Opera Performance",
      topPick: false,
      description:
        "A 200-year-old art form combining singing, martial arts, acrobatics, dance, and elaborate facial makeup. Even without understanding Mandarin, the visual spectacle and musical intensity are mesmerizing [19].",
      time: "1.5-2 hours (evening)",
      location: "Various theaters in central Beijing",
      cost: "$25-55/p (ticket price varies by venue and seating)",
      tips: [
        "Zheng Yici Peking Opera Theatre is the most authentic \u2014 a 200-year-old wooden theater that hosted Qing court performances [19]",
        "Liyuan Theatre is more accessible with English subtitles and 70-minute highlights programs",
        "Arrive early to watch actors applying face paint backstage",
        "No shows Mon/Tue/Sun",
      ],
    },
    {
      slug: "chinese-calligraphy-workshop",
      name: "Chinese Calligraphy Workshop",
      topPick: false,
      description:
        'Hands-on workshop learning brush calligraphy \u2014 the "four treasures of the study," basic strokes, and the philosophy behind this 3,000-year-old art form. Create your own piece to take home [20].',
      time: "2-3 hours",
      location:
        "Wangfujing/Dongcheng District, walking distance from Forbidden City",
      cost: "$35/p (materials included)",
      tips: [
        "Seek a class taught by a genuine calligraphy master. The meditative pace IS the point. Your finished piece makes a meaningful souvenir.",
      ],
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Peking Duck —
    {
      slug: "siji-minfu",
      name: "Siji Minfu",
      chineseName: "\u56db\u5b63\u6c11\u798f\u70e4\u9e2d\u5e97",
      category: "Peking Duck",
      topPick: true,
      location:
        "Dongcheng District \u2014 multiple locations; Nanchizi branch has Forbidden City moat views",
      priceRange: "$20-35/p",
      cuisine: "Peking duck, traditional Beijing dishes",
      description:
        "Wood-fired ovens, carved tableside, with shiny translucent skin that\u2019s crispy outside and tender meat. This is where Beijingers themselves go [21]. The Nanchizi branch has stunning views of the Forbidden City walls.",
      reviews:
        "Consistently praised for quality-to-price ratio. Main complaint: expect 1-2 hour waits at peak times. Use WeChat to queue remotely or arrive before 11 AM [21].",
      whatToOrder:
        "Whole Peking duck ($36), crispy skin dipped in white sugar (the traditional opening bite), black pepper duck liver, cold-tossed pea shoots.",
      bestFor:
        "Lunch (arrive 10:30 AM opening to avoid worst queues)",
    },
    {
      slug: "li-qun-roast-duck",
      name: "Li Qun Roast Duck",
      chineseName: "\u5229\u7fa4\u70e4\u9e2d\u5e97",
      category: "Peking Duck",
      topPick: true,
      location:
        "Qianmen area, Beixiangfeng Hutong \u2014 hidden deep in a traditional hutong",
      priceRange: "~$28/p",
      cuisine: "Traditional Peking duck",
      description:
        "Family-run courtyard restaurant where ducks roast over fragrant pear wood in a brick oven you can see from your table. Father-daughter team, 20+ years. Crumbling courtyard with hanging lanterns [22].",
      reviews:
        "Duck itself among Beijing\u2019s best \u2014 superb crispy skin with distinctive smoky flavor. No-frills setting. Basic restrooms. Go for the duck, not the ambiance [22].",
      whatToOrder:
        "Whole roast duck (~$26), duck soup from the carcass (complimentary \u2014 ask for it), cucumber side.",
      bestFor: "Either meal. Call ahead to pre-order your duck.",
    },
    {
      slug: "sheng-yong-xing",
      name: "Sheng Yong Xing",
      chineseName: "\u665f\u6c38\u5174",
      category: "Peking Duck",
      topPick: false,
      location: "Multiple locations including Sanlitun",
      priceRange: "~$27/p",
      cuisine: "Creative modern Peking duck",
      description:
        "Creative interpretations: jujube-flavored duck, caviar-topped duck skin alongside classic preparation. Polished but not stuffy.",
      reviews:
        "Innovative preparations, consistently high quality. Reservations recommended.",
      whatToOrder:
        "Classic duck, jujube roast duck, duck skin with creative toppings.",
      bestFor: "Dinner. Make a reservation.",
    },

    // — Street Food —
    {
      slug: "manjie-dumpling-house",
      name: "Manjie Dumpling House",
      chineseName: "\u6ee1\u59d0\u997a\u5b50",
      category: "Street Food",
      topPick: false,
      location:
        "Near Dongsishitiao Metro (Line 2, Exit D), Dongcheng District",
      priceRange: "$6-10/p",
      cuisine: "Dumplings \u2014 massive variety",
      description:
        "Largest dumpling selection in Beijing. Thin, delicate wrappers, generous fillings, always bustling with locals. English menu available [23].",
      reviews:
        '4.8 rating. Pork and fennel dumplings "life-changing." Space is small and crowded, service is no-nonsense [23].',
      whatToOrder:
        "Pork and fennel, leek/shrimp/egg, zucchini and scrambled egg, lamb. Get at least three varieties for the table.",
      bestFor: "Lunch",
    },
    {
      slug: "zhang-mama",
      name: "Zhang Mama",
      chineseName: "\u5f20\u5988\u5988",
      category: "Street Food",
      topPick: false,
      location:
        "Fensiting Hutong near Andingmen, Dongcheng District",
      priceRange: "$4-7/p",
      cuisine: "Authentic Sichuan hole-in-the-wall",
      description:
        "Tiny beloved spot run by a native Chengdu woman. Blisteringly authentic: numbing, spicy, deeply flavorful. Skewers from $0.15 each. No English menu whatsoever [24].",
      reviews:
        "Best cheap Sichuan food in Beijing. Boboji is legendary. Tiny space, potential wait, no English \u2014 bring a translation app or a sense of adventure [24].",
      whatToOrder:
        "Boboji (skewers in spicy broth \u2014 the signature), huiguorou (twice-cooked pork), mapo doufu, dry-pot dishes.",
      bestFor: "Either meal; dinner has more atmosphere",
    },
    {
      slug: "huguo-si-xiaochi",
      name: "Huguo Si Xiaochi",
      chineseName: "\u62a4\u56fd\u5bfa\u5c0f\u5403",
      category: "Street Food",
      topPick: false,
      location:
        "Huguosi Street, Xicheng District, near Ping\u2019anli Metro (Lines 4/6)",
      priceRange: "$2-4/p",
      cuisine:
        "Traditional Beijing snacks (300+ year history, 80+ varieties)",
      description:
        "Opens 5:30 AM. The kind of food older Beijingers grew up eating. Halal-certified, clean, affordable, and far more genuine than Wangfujing snack street [23].",
      reviews:
        "Definitive traditional Beijing snack experience. Some dishes (starchy garlic fried liver) are an acquired taste. Always crowded, fast turnover.",
      whatToOrder:
        "Wandouhuang (sweet pea cake), ludagun (rolling donkey sweet rice rolls), aiwowo, miancha (millet flour tea). For breakfast: jianbing, douzhir (fermented mung bean drink \u2014 true Beijing acquired taste).",
      bestFor:
        "Breakfast (before 8 AM for the real morning crowd)",
    },

    // — Regional Chinese —
    {
      slug: "chuan-ban",
      name: "Chuan Ban",
      chineseName: "\u5ddd\u529e",
      category: "Regional Chinese",
      topPick: true,
      location:
        "Near Jianguomen Metro, Dongcheng District \u2014 inside the Sichuan Provincial Government office compound",
      priceRange: "$7-11/p",
      cuisine:
        "Fiercely authentic Sichuan. Michelin Bib Gourmand [25]",
      description:
        "The legendary Sichuan government canteen that went public. Originally opened 1979 to feed homesick officials. Plain government-canteen decor \u2014 you come purely for the food [25].",
      reviews:
        "Near-universal praise for authenticity at remarkably low prices. No reservations \u2014 arrive before 6 PM or after 8 PM.",
      whatToOrder:
        "Shui zhu yu (boiled fish in chili oil), mapo doufu, lazi ji (chicken buried in dried chilies), fuqi fei pian (husband-and-wife lung slices), dan dan noodles.",
      bestFor: "Lunch is less crowded",
    },
    {
      slug: "crescent-moon-muslim-restaurant",
      name: "Crescent Moon Muslim Restaurant",
      chineseName: "\u5f2f\u5f2f\u6708\u4eae",
      category: "Regional Chinese",
      topPick: false,
      location: "Hutong near Dongsi, Dongcheng District",
      priceRange: "$8-14/p",
      cuisine:
        "Halal Uyghur \u2014 Central Asian flavors, grilled lamb, hand-pulled noodles, cumin, flatbread",
      description:
        "A world apart from Han Chinese cooking. English menu with pictures [25].",
      reviews:
        "Excellent lamb kebabs, authentic dapanji. Warm hospitality. Occasional inconsistency but majority report generous portions.",
      whatToOrder:
        "Lamb kebabs, dapanji (big plate chicken over noodles \u2014 great for 3 people), kao baozi (baked stuffed buns), hand-pulled noodles, homemade yogurt.",
      bestFor: "Dinner",
    },
    {
      slug: "little-yunnan",
      name: "Little Yunnan",
      chineseName: "\u5c0f\u4e91\u5357",
      category: "Regional Chinese",
      topPick: false,
      location: "Di\u2019anmen East Street, Dongcheng District",
      priceRange: "$10-17/p",
      cuisine:
        "Yunnan \u2014 herb-forward, Southeast Asian-influenced",
      description:
        "Light-filled, plant-adorned restaurant. Lemongrass, mint, wild mushrooms, exotic spices you won\u2019t find elsewhere in Beijing. Refreshing change from heavier northern flavors.",
      reviews:
        "Love the freshness and beautiful setting. Some feel portions could be larger.",
      whatToOrder:
        "Yunnan beef with mint salad, Lijiang spicy chicken, grilled tilapia with lemongrass, crossing-the-bridge noodles, fried goat\u2019s cheese.",
      bestFor: "Either meal",
    },

    // — Traditional Beijing —
    {
      slug: "dong-lai-shun",
      name: "Dong Lai Shun",
      chineseName: "\u4e1c\u6765\u987a",
      category: "Traditional Beijing",
      topPick: false,
      location:
        "Wangfujing, 198 Wangfujing Street, Dongcheng District",
      priceRange: "$17-28/p",
      cuisine:
        "Beijing-style copper pot lamb hotpot (est. 1903). Hand-slicing technique is a national intangible cultural heritage [25]",
      description:
        "Paper-thin lamb cooks in seconds when swished through bubbling copper pot broth. Five most tender cuts only. Dip in signature sesame paste sauce with garlic, chives, and fermented tofu. Communal and interactive \u2014 perfect for a group.",
      reviews:
        'Overwhelmingly positive. Sesame dipping sauce called "addictive." Pricier than other hotpot, some branches feel dated.',
      whatToOrder:
        "Hand-sliced lamb (multiple cuts), sesame paste dipping sauce, frozen tofu, Chinese cabbage, hand-pulled noodles to finish, sugar garlic as palate cleanser.",
      bestFor:
        "Dinner (hotpot is quintessentially an evening social meal)",
    },
    {
      slug: "yaoji-chaogan",
      name: "Yaoji Chaogan",
      chineseName: "\u59da\u8bb0\u7092\u809d",
      category: "Traditional Beijing",
      topPick: false,
      location: "Near Gulou (Drum Tower), Dongcheng District",
      priceRange: "$3-6/p",
      cuisine:
        "Traditional Beijing breakfast (Joe Biden visited in 2011) [26]",
      description:
        "Legendary since 1989. Signature chaogan: thick starchy stew of pork liver and intestines laced with garlic. Baozi (steamed buns) equally famous \u2014 pork skin in the filling for extra juiciness.",
      reviews:
        "Best chaogan in Beijing. Baozi among the city\u2019s finest. Chaogan is an acquired taste (garlicky, starchy, organ-meat heavy). Always packed, up to 1 hour wait [26].",
      whatToOrder: "Chaogan (try it at least once), pork baozi.",
      bestFor: "Breakfast, 7:00-9:00 AM",
    },

    // — Splurge —
    {
      slug: "xin-rong-ji",
      name: "Xin Rong Ji",
      chineseName: "\u65b0\u8363\u8bb0",
      category: "Splurge",
      topPick: false,
      location:
        "Xinyuan South Road, Chaoyang District (Genesis Beijing Hotel)",
      priceRange: "$140-350/p",
      cuisine:
        "Taizhou (coastal Zhejiang) \u2014 Beijing\u2019s pinnacle of Chinese fine dining",
      description:
        'Three Michelin stars for seven consecutive years (2020-2026) [25]. Pristine seafood prepared with deceptive simplicity. The 28-day baby Peking duck (pre-order only) has been called "the best Peking duck I\u2019ve ever had." English menu, English-speaking staff, impeccable service.',
      reviews:
        "Near-universal acclaim. Ingredients, preparation, and service all extraordinary. Pricey by Beijing standards. Reservations difficult [25].",
      whatToOrder:
        "28-day baby Peking duck (must pre-order), crab marrow ball, steamed seasonal seafood, chef\u2019s recommendation.",
      bestFor: "Dinner. Book well in advance.",
    },
    {
      slug: "trb-hutong",
      name: "TRB Hutong (Temple Restaurant Beijing)",
      chineseName: undefined,
      category: "Splurge",
      topPick: false,
      location:
        "600-year-old Buddhist temple courtyard near Forbidden City, Dongcheng District",
      priceRange: "$49 (brunch) to $140+ (dinner) per person",
      cuisine:
        "Contemporary French/European in a breathtaking Chinese setting",
      description:
        "Meticulously restored 600-year-old temple \u2014 soaring wooden beams, candlelight, stone courtyards. One Michelin star three years running (2023-2025) [25]. Local Chinese produce through a modern French lens.",
      reviews:
        "Setting universally described as breathtaking. Food polished and immaculately crafted. Some feel pricey vs. European equivalents, but the temple setting is unique [27].",
      whatToOrder:
        "Premium signature tasting menu (seasonal). Sunday brunch ($49) for better value.",
      bestFor:
        "Sunday brunch for value; dinner for the full candlelit temple experience",
    },

    // — Night Markets —
    {
      slug: "gui-street-ghost-street",
      name: "Gui Street / Ghost Street",
      chineseName: "\u7c0b\u8857",
      category: "Night Markets",
      topPick: true,
      location:
        "Dongcheng District, near Beixinqiao Metro (Line 5, Exit B)",
      priceRange: "$7-21/p",
      cuisine: "Spicy crawfish, grilled fish, Sichuan-style late night",
      description:
        "Mile-long stretch draped in red lanterns, open until 2 AM+. This is where Beijingers go for late-night eating. Mountain of spicy crawfish in chili oil and Sichuan peppercorns, eating with your hands, cold beer. Rowdy, messy, intensely flavorful [28].",
      reviews:
        "Atmosphere universally praised. Hu Da Restaurant is the most famous crawfish spot (2+ hour waits at 10 PM). Walk a few doors down for equally good food at lower prices.",
      whatToOrder:
        "Mala crawfish at Hu Da or any busy competitor, grilled whole fish, lamb skewers, cold beer.",
      bestFor: "Late night, arrive 9-10 PM",
    },
    {
      slug: "niujie-muslim-quarter",
      name: "Niujie Muslim Quarter",
      chineseName: "\u725b\u8857",
      category: "Night Markets",
      topPick: false,
      location:
        "Niujie, Xicheng District, near Niujie Metro (Line 7, Exit G)",
      priceRange: "$1-6 per item",
      cuisine:
        "Halal Hui Muslim \u2014 lamb baozi, hotpot, traditional pastries",
      description:
        "Beijing\u2019s historic Muslim quarter around the 1,000-year-old Niujie Mosque. Hui community making lamb baozi and traditional pastries for generations. Arabic signage mixed with Chinese. Zero tourist gloss [28].",
      reviews:
        "Most authentic neighborhood food experience in Beijing. Hongji Snacks and Jubaoyuan get best reviews. Less polished than central food streets \u2014 that\u2019s the appeal.",
      whatToOrder:
        "Lamb baozi at Hongji Snacks, lotus leaf sticky rice cake at Yibao, lamb hotpot at Jubaoyuan.",
      bestFor:
        "Late afternoon through evening. Pair with Niujie Mosque visit.",
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Extensive, clean, and cheap ($0.30-0.70 per ride). Covers most tourist sites. Download Amap or Baidu Maps (Google Maps is blocked).",
      "Taxis/Rideshare: Use Didi (China\u2019s Uber). Affordable \u2014 most cross-city rides under $7.",
      "Walking: Central Dongcheng is very walkable. Hutong neighborhoods are best explored on foot.",
    ],
    "Food & Dining": [
      "Ordering strategy: For 3 people, order 4-5 dishes family-style plus rice/noodles. Chinese dining is communal.",
      "Reservations: Essential at Xin Rong Ji, TRB Hutong, Sheng Yong Xing. Use WeChat to queue at Siji Minfu and Hu Da.",
      "Tipping: Not expected in mainland China. High-end restaurants may add 10% service charge.",
    ],
    "Money & Communication": [
      "Payment: Most places accept Alipay/WeChat Pay. Set up international Alipay before the trip. Bring some cash for street vendors.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram are blocked.",
      "Language: English menus at Crescent Moon, Manjie Dumplings, Little Yunnan, Xin Rong Ji, TRB Hutong. Elsewhere, use Google Translate camera mode.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Tickets: Forbidden City, Summer Palace, and Great Wall sections require advance online booking. October dates sell out.",
      "Air quality: October is typically Beijing\u2019s best month, but pack a KN95 mask just in case [1].",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Beijing October Weather \u2014 China Discovery (https://www.chinadiscovery.com/beijing-tours/weather-seasons/weather-in-october.html)",
    "[2] Jinshanling Great Wall Hiking Guide \u2014 China Discovery (https://www.chinadiscovery.com/hiking-mountain-climbing-tour/great-wall-hiking/jinshanling-great-wall.html)",
    "[3] 798 Art District Guide \u2014 China Discovery (https://www.chinadiscovery.com/beijing/798-art-district.html)",
    "[4] Where to Stay in Beijing \u2014 Baba Goes China (https://www.babagoeschina.com/beijing-where-to-stay/)",
    "[5] Mandarin Oriental Qianmen \u2014 World\u2019s 50 Best Hotels 2025 (https://www.theworlds50best.com/stories/News/mandarin-oriental-qianmen-best-new-hotel-the-worlds-50-best-hotels-2025.html)",
    "[6] How to Visit the Forbidden City \u2014 China Highlights (https://www.chinahighlights.com/beijing/forbidden-city/how-to-visit.htm)",
    "[7] Gubeikou-to-Jinshanling Day Hike Guide \u2014 Wild Great Wall (https://wildgreatwall.com/gubeikou-jinshanling-day-hike-complete-guide/)",
    "[8] Summer Palace Guide \u2014 China Discovery (https://www.chinadiscovery.com/beijing/summer-palace.html)",
    "[9] Fragrant Hills Autumn Foliage Tips \u2014 Beijing Deep Tour (https://beijingdeeptour.com/tips-for-fragrant-hill-park-autumn-foliage-how-to-maximize-your-visit-and-avoid-the-crowds/)",
    "[10] Temple of Heaven Guide \u2014 China Highlights (https://www.chinahighlights.com/beijing/attraction/temple-of-heaven.htm)",
    "[11] Jingshan Park Walking Route \u2014 China Explorer Tour (https://chinaexplorertour.com/2025/blog/jingshan-park-walking-route-photo-tips-itinerary-guide/)",
    "[12] Beihai Park Visitor Guide \u2014 China Explorer Tour (https://chinaexplorertour.com/2025/blog/beihai-park-beijing-complete-visitor-guide-2025-tips-attractions/)",
    "[13] Lama Temple \u2014 China Highlights (https://www.chinahighlights.com/beijing/attraction/lama-temple.htm)",
    "[14] Wudaoying Hutong Guide \u2014 Arron Goh (https://www.arrongoh.com/post/wudaoying-hutong-beijing-travel-guide)",
    "[15] Authentic Beijing Experiences \u2014 Museum of Wander (https://museumofwander.com/authentic-beijing-experiences/)",
    "[16] Traditional Teahouses in Beijing \u2014 Bite Escape (https://www.biteescape.com/post/traditional-teahouses-in-beijing)",
    "[17] Hutong Cooking Class \u2014 China Highlights (https://www.chinahighlights.com/day-tours/beijing/3-hour-hutong-dumpling-cooking-class.htm)",
    "[18] Panjiayuan Market Guide \u2014 Our Beijing (https://our-beijing.com/panjiayuan-flea-market/)",
    "[19] Zheng Yici Peking Opera Theatre \u2014 TripAdvisor (https://www.tripadvisor.com/Attraction_Review-g294212-d1930380-Reviews-Zheng_Yici_Peking_Opera_Theatre-Beijing.html)",
    "[20] Calligraphy Class \u2014 Travelers Universe (https://www.travelersuniverse.com/beijing-calligraphy-class/)",
    "[21] Peking Duck Restaurants \u2014 China Discovery (https://www.chinadiscovery.com/beijing/beijing-food-and-snack/peking-duck-restaurants.html)",
    "[22] Where to Eat Peking Duck \u2014 Hidden Gems Guide \u2014 China Explorer Tour (https://chinaexplorertour.com/2025/blog/where-to-eat-peking-duck-in-beijing-hidden-gems-guide/)",
    "[23] Beijing Best Restaurants Guide \u2014 Lost Plate (https://lostplate.com/beijing-best-restaurants-where-to-eat-guide/)",
    "[24] Zhang Mama \u2014 Adventures Around Asia (https://www.adventuresaroundasia.com/zhangmama-best-restaurant-beijing/)",
    "[25] MICHELIN Guide Beijing 2025 (https://guide.michelin.com/en/article/news-and-views/beijing-2025-starred-restaurants)",
    "[26] Yaoji Chaogan \u2014 Ruqin Travel (https://ruqintravel.com/china-destination-guides/yaoji-chaogan-restaurant/)",
    "[27] TRB Hutong Official Site (https://www.trbhutong.com/about-us)",
    "[28] Beijing Night Markets Guide \u2014 Lost in China (https://www.lostincn.com/beijing-night-markets-guide/)",
  ],
};
