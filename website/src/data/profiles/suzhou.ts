import type { CityProfile } from "@/types";

export const suzhouProfile: CityProfile = {
  slug: "suzhou",
  heroPhoto: { src: "/photos/suzhou/_hero.jpg", alt: "Classical garden in Suzhou with traditional pavilion", credit: "Francesco Bandarin" },
  executiveSummary: [
    'Suzhou in mid-October is a sensory poem. The city\'s nine UNESCO-listed classical gardens reach peak beauty as osmanthus trees burst into fragrant golden bloom, scenting entire neighborhoods with a sweet, honeyed perfume that the Chinese have celebrated in poetry for centuries. Temperatures hover in the low 70s with minimal rain, making this the ideal season for slow wandering through garden corridors, canal-side lanes, and silk workshops. The light is warm and low, filtering through latticed windows and reflecting off still garden ponds in ways that feel deliberately composed [1].',
    "Suzhou operates on a principle of refinement rather than spectacle. Where Beijing overwhelms with imperial scale, Suzhou enchants with intimate mastery -- gardens that compress entire landscapes into a single courtyard, embroidery so fine it takes a magnifying glass to appreciate, and a culinary tradition that prizes subtle sweetness, seasonal ingredients, and presentation as art. Pingjiang Road, a canal-side street dating to the Song Dynasty (960 AD), still follows its original layout -- stone bridges, whitewashed houses, and narrow waterways where gondola-like boats glide past teahouses and silk shops [2].",
    'The food alone is a revelation for travelers accustomed to bold northern Chinese flavors. Suzhou\'s Jiangnan cuisine is China\'s most refined regional tradition -- delicate freshwater fish, sweet osmanthus-scented pastries, braised dishes with subtle sugar-vinegar balance, and seasonal ingredients that change weekly. With 2,500 years of continuous history as one of China\'s wealthiest cities, Suzhou earned Marco Polo\'s description as the "Venice of the East" -- though locals would argue Venice is the Suzhou of the West [3].',
  ],
  famousFor: [
    "UNESCO classical gardens",
    "silk and embroidery",
    "canal-side old town",
    "Jiangnan cuisine",
    "Kunqu opera",
    "osmanthus season",
    "scholar-literati culture",
  ],
  whyItFits: [
    "Nine UNESCO gardens offering meditative beauty unlike anything else in China",
    "Refined Jiangnan cuisine -- subtle, seasonal, and unlike any other Chinese regional tradition",
    "Atmospheric canal neighborhoods preserved from the Song Dynasty",
    "Living silk and embroidery tradition with hands-on workshop opportunities",
    "October osmanthus bloom transforms the city into a fragrant, golden-tinged wonderland",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 77,
      avgLow: 59,
      rainChance: 20,
      precip: 0.8,
      sunrise: "5:55 AM",
      sunset: "5:45 PM",
      conditions: "Warm and pleasant; osmanthus begins blooming; occasional brief showers",
    },
    {
      period: "Mid Oct",
      avgHigh: 73,
      avgLow: 55,
      rainChance: 15,
      precip: 0.5,
      sunrise: "6:05 AM",
      sunset: "5:30 PM",
      conditions: "Peak osmanthus fragrance; ideal garden weather; clear skies [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 68,
      avgLow: 50,
      rainChance: 12,
      precip: 0.4,
      sunrise: "6:15 AM",
      sunset: "5:15 PM",
      conditions: "Cooler and crisp; autumn color emerging; comfortable walking weather",
    },
  ],
  whatToPack:
    "Layers for 50-77\u00b0F temperature swings. Light jacket, comfortable walking shoes for cobblestone lanes and garden paths, compact umbrella for occasional drizzle. A light scarf doubles for sun and temple visits.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "pingjiang-road-historic-district",
      name: "Pingjiang Road Historic District",
      topPick: true,
      description:
        "Suzhou's best-preserved canal neighborhood, following its original Song Dynasty (960 AD) street plan. A stone-paved lane runs alongside a quiet canal lined with whitewashed houses, arched bridges, silk shops, teahouses, and small galleries. Despite growing popularity, the residential back-alleys remain genuinely lived-in -- laundry drying above canals, elderly neighbors playing cards at stone tables [2].",
      whyItFitsUs:
        "Most atmospheric base in Suzhou. Everything walkable -- gardens, canal strolls, local restaurants, and silk workshops within minutes. Multiple boutique hotels in restored courtyard houses.",
      nearby:
        "Humble Administrator's Garden (10 min walk), Lion Grove Garden (5 min walk), Suzhou Museum (10 min walk), Guanqian Street (10 min walk)",
      hotels:
        "Suzhou Pingjiang Lodge (restored Ming Dynasty courtyard, canal-side -- top pick), Garden Hotel Suzhou (near Lion Grove Garden)",
    },
    {
      slug: "shantang-street-area",
      name: "Shantang Street (Seven Li Shantang)",
      topPick: false,
      description:
        "A 1,100-year-old canal street stretching seven li (3.5 km) from Chang Gate to Tiger Hill. The eastern section near Chang Gate is tourist-oriented, but walk 15 minutes west and it becomes increasingly residential and atmospheric -- fishermen, noodle stalls, and old women shelling beans on doorsteps [4].",
      whyItFitsUs:
        "Longer canal walks than Pingjiang with a gradient from polished to genuinely local. Evening lantern reflections on the canal are beautiful. Tiger Hill accessible on foot from the western end.",
      nearby:
        "Tiger Hill (20 min walk from western end), Hanshan Temple (15 min by taxi), Panmen Gate (15 min by taxi)",
      hotels:
        "Tonino Lamborghini Hotel Suzhou (modern luxury near Shantang), boutique guesthouses along the quieter western stretches",
    },
    {
      slug: "guanqian-street-central",
      name: "Guanqian Street / Central Old City",
      topPick: false,
      description:
        "Suzhou's commercial heart for over 700 years, centered on the Taoist Xuanmiao Temple. Bustling pedestrian street with time-honored food shops, traditional pharmacies, and the city's highest concentration of classic Suzhou restaurants. More commercial than Pingjiang but deeply rooted in local daily life.",
      whyItFitsUs:
        "Best concentration of traditional Suzhou restaurants and food shops. Central location between major gardens. Good base for food-focused exploration.",
      nearby:
        "Humble Administrator's Garden (15 min walk), Master of Nets Garden (10 min walk), Pingjiang Road (5 min walk), Suzhou Museum (15 min walk)",
      hotels:
        "Pan Pacific Suzhou (modern comfort near Guanqian), various mid-range hotels within walking distance of gardens",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "humble-administrators-garden",
      name: "Humble Administrator's Garden (Zhuozheng Yuan)",
      photo: { src: "/photos/suzhou/humble-administrators-garden.jpg", alt: "Humble Administrator's Garden (Zhuozheng Yuan), Suzhou" },
      topPick: true,
      description:
        "The largest and most celebrated of Suzhou's nine UNESCO classical gardens, built in 1509 by a retired Ming Dynasty official. A masterwork of Chinese landscape design -- winding paths reveal new vistas at every turn, with pavilions, bridges, lotus ponds, and carefully framed views that compress mountains, forests, and lakes into 12 acres. In October, osmanthus trees within the garden fill the air with sweet fragrance [5].",
      time: "2-3 hours (morning, with guide)",
      location:
        "Northeastern old city, Dongbei Street. 10 min walk from Pingjiang Road",
      cost: "$11/p ($11 entrance, Oct peak season)",
      tips: [
        "Arrive at 7:30 AM opening -- the garden transforms from tranquil to crowded by 10 AM",
        "Hire a specialist garden guide ($80-120 for 2-3 hours, split 3 ways) who can explain the symbolism in every rock placement, window frame, and sight line [5]",
        "The Central Section around the Hall of Distant Fragrance is most iconic, but the quieter Eastern and Western gardens reward patient exploration",
        "Exit through the north gate directly to the Suzhou Museum",
      ],
      priceTier: 1,
    },
    {
      slug: "master-of-nets-garden",
      name: "Master of Nets Garden (Wangshi Yuan)",
      photo: { src: "/photos/suzhou/master-of-nets-garden.jpg", alt: "Master of Nets Garden (Wangshi Yuan), Suzhou" },
      topPick: true,
      description:
        "The most perfectly proportioned of Suzhou's gardens -- only one acre, yet feels vast through brilliant spatial illusion. A retired Song Dynasty official designed it as the ideal scholar's retreat. Every view is a composed painting. The garden is so admired that its殿春簃 (Late Spring Studio) courtyard was replicated in the Metropolitan Museum of Art in New York [6].",
      time: "1-1.5 hours",
      location:
        "Southeastern old city, Kuojiatou Xiang. 10 min walk south of Pingjiang Road",
      cost: "$5/p ($5 entrance)",
      tips: [
        "Visit late afternoon when western light illuminates the central courtyard pond",
        "Evening performances (Kunqu opera, traditional music) run March-November, 7:30-10 PM -- check schedule in advance [6]",
        "Small size means it gets crowded quickly -- weekday mornings or late afternoons are best",
        "The miniature courtyard gardens connecting the residential halls are easily missed but extraordinary",
      ],
      priceTier: 1,
    },
    {
      slug: "lion-grove-garden",
      name: "Lion Grove Garden (Shizi Lin)",
      photo: { src: "/photos/suzhou/lion-grove-garden.jpg", alt: "Lion Grove Garden (Shizi Lin), Suzhou" },
      topPick: false,
      description:
        "A 650-year-old garden famous for its extraordinary labyrinth of rockeries -- fantastically shaped Taihu limestone formations that create a maze of caves, tunnels, and hidden passages. Built by a Zen Buddhist monk in 1342, the rocks are said to resemble lions, giving the garden its name. The Qianlong Emperor was so enchanted he visited six times and built replicas in Beijing [7].",
      time: "1-1.5 hours",
      location:
        "Northern old city, Yuanlin Road. 5 min walk from Pingjiang Road",
      cost: "$5/p ($5 entrance)",
      tips: [
        "The rockery labyrinth is genuinely fun to explore -- allow time to get intentionally lost in the stone maze",
        "Best combined with the Humble Administrator's Garden (a 5-minute walk away) for a morning garden pair [7]",
        "The elevated viewing pavilion offers a bird's-eye perspective of the rockery layout",
      ],
      priceTier: 1,
    },
    {
      slug: "suzhou-museum",
      name: "Suzhou Museum",
      photo: { src: "/photos/suzhou/suzhou-museum.jpg", alt: "Suzhou Museum, Suzhou" },
      topPick: true,
      description:
        "Designed by I.M. Pei (a Suzhou native) as his final gift to his hometown. The building itself is the masterpiece -- a dialogue between traditional Suzhou garden architecture and bold modernism, with geometric white walls, reflecting pools, and a courtyard garden that reinterprets classical forms. The collection includes Song Dynasty ceramics, Ming paintings, and excavated artifacts from Suzhou's 2,500-year history [8].",
      time: "2-3 hours",
      location:
        "Adjacent to the Humble Administrator's Garden, Dongbei Street",
      cost: "Free (reservation required)",
      tips: [
        "Reserve free timed tickets online at least 1-2 days in advance -- walk-ins are rarely available in October [8]",
        "The building itself deserves as much attention as the art -- Pei's garden courtyard and the way light moves through the galleries are extraordinary",
        "Visit immediately after the Humble Administrator's Garden for a natural morning sequence",
        "The underground temporary exhibition hall hosts excellent rotating shows",
      ],
      priceTier: 0,
    },
    {
      slug: "pingjiang-road-canal-walk",
      name: "Pingjiang Road Canal Walk",
      photo: { src: "/photos/suzhou/pingjiang-road-canal-walk.jpg", alt: "Pingjiang Road Canal Walk, Suzhou" },
      topPick: true,
      description:
        "A 1.5 km stroll along Suzhou's best-preserved Song Dynasty canal street. Stone-paved path, arched bridges, whitewashed houses leaning over calm water, silk shops, teahouses, and calligraphy studios. Take a gondola-style boat ride through the narrow waterways for a water-level perspective of the old city [2].",
      time: "2-3 hours (leisurely walk with tea and boat ride)",
      location:
        "Central old city, running north-south between Bai Ta East Road and Ganjiang East Road",
      cost: "$7/p ($7 for a 30-minute canal boat ride) -- walking is free",
      tips: [
        "Walk the canal in the early morning (before 9 AM) or at dusk when the lanterns are lit and crowds thin",
        "Duck into the narrow side alleys branching off the main path -- these are where genuine residential life continues [2]",
        "Stop at a canal-side teahouse for biluochun (Suzhou's famous green tea)",
        "The northern end near the Humble Administrator's Garden is quieter; the southern section has more shops",
      ],
      priceTier: 1,
    },
    {
      slug: "tiger-hill",
      name: "Tiger Hill (Huqiu)",
      photo: { src: "/photos/suzhou/tiger-hill.jpg", alt: "Tiger Hill (Huqiu), Suzhou" },
      topPick: false,
      description:
        "A 2,500-year-old hilltop park crowned by the leaning Cloud Rock Pagoda (built 961 AD, leaning 3 degrees -- China's own Tower of Pisa). Legend holds that the King of Wu was buried here with 3,000 swords, and a white tiger appeared to guard his tomb. The Sword Testing Stone, Sword Pool, and thousand-year-old trees make the climb atmospheric and genuinely historical [9].",
      time: "2-3 hours",
      location:
        "Northwestern old city. 20 min walk from the western end of Shantang Street, or 10 min by taxi from Pingjiang area",
      cost: "$11/p ($11 entrance, Oct peak season)",
      tips: [
        "Walk to Tiger Hill via Shantang Street for a combined canal-and-hill half-day [9]",
        "The Sword Pool at the base is said to conceal the King of Wu's burial chamber -- genuinely atmospheric",
        "October osmanthus trees along the hillside paths are particularly fragrant",
        "The Huqiu Doujiang breakfast (local savory soy milk with toppings) from vendors near the gate is a Suzhou institution",
      ],
      priceTier: 1,
    },
    {
      slug: "silk-embroidery-workshop",
      name: "Silk Museum and Embroidery Workshop",
      photo: { src: "/photos/suzhou/silk-embroidery-workshop.jpg", alt: "Silk Museum and Embroidery Workshop, Suzhou" },
      topPick: false,
      description:
        "Suzhou has been China's silk capital for over 2,000 years. The Suzhou Silk Museum traces the history from silkworm cultivation to imperial robes, while nearby workshops offer hands-on embroidery classes in the Suzhou style -- double-sided embroidery so fine that both sides of the fabric display different images. Watching master embroiderers work is mesmerizing [10].",
      time: "2-3 hours (museum + workshop)",
      location:
        "Suzhou Silk Museum on Renmin Road; various embroidery studios in Pingjiang area",
      cost: "$12/p (museum free, embroidery class $10-35/p)",
      tips: [
        "The Suzhou Silk Museum is free and provides essential context before visiting workshops",
        "Suzhou Embroidery Research Institute (on Jingde Road) has master artisans working on museum-quality pieces -- visitors can observe [10]",
        "For a hands-on experience, book a 2-hour beginner embroidery class through a local operator",
        "Small silk items (scarves, handkerchiefs) make excellent gifts and are lighter to carry than most souvenirs",
      ],
      priceTier: 1,
    },
    {
      slug: "kunqu-opera-performance",
      name: "Kunqu Opera Performance",
      photo: { src: "/photos/suzhou/kunqu-opera-performance.jpg", alt: "Kunqu Opera Performance, Suzhou" },
      topPick: false,
      description:
        "Kunqu opera originated in Suzhou's Kunshan district in the 14th century and is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage. Older and more refined than Peking opera, Kunqu features exquisite costumes, poetic lyrics, and delicate flute-led music. Suzhou is the best place in China to experience it in an intimate traditional setting [11].",
      time: "1.5-2 hours (evening)",
      location:
        "Master of Nets Garden (seasonal evening shows) or Kunqu Opera Museum on Zhongzhangjia Xiang",
      cost: "$14-28/p (depending on venue)",
      tips: [
        "The Master of Nets Garden evening performance combines Kunqu opera, classical music, and the garden setting -- reserve in advance [11]",
        "The Kunqu Opera Museum offers more context on the art form's history",
        "Even without understanding Mandarin, the visual grace and musical beauty are captivating",
        "Performances typically run March-November; check schedules for October dates",
      ],
      priceTier: 2,
    },
    {
      slug: "tongli-water-town-day-trip",
      name: "Tongli Water Town Day Trip",
      topPick: false,
      description:
        "A 1,000-year-old water town 18 km from Suzhou, connected by 49 bridges across a network of canals. Less commercialized than the famous Zhouzhuang, Tongli retains genuine residential character. The UNESCO-listed Retreat and Reflection Garden is considered one of the finest small gardens in China [12].",
      time: "Half day (3-4 hours on-site + 40 min each way)",
      location:
        "Wujiang District, 18 km southeast of Suzhou. 40 min by bus or taxi",
      cost: "$14/p ($11 entrance + $3 bus fare)",
      tips: [
        "Take the first bus (7:30 AM) to arrive before day-trip crowds from Shanghai [12]",
        "The Retreat and Reflection Garden alone justifies the trip -- a masterclass in small-garden design",
        "Walk past the main tourist streets into the residential canal alleys for the real Tongli",
        "Try Tongli's signature snack: zhuangyuan ti (braised pig's trotter, named for a local scholar who passed the imperial exam)",
      ],
      priceTier: 1,
    },
    {
      slug: "suzhou-cooking-class",
      name: "Suzhou Cuisine Cooking Class",
      photo: { src: "/photos/suzhou/suzhou-cooking-class.jpg", alt: "Suzhou Cuisine Cooking Class, Suzhou" },
      topPick: false,
      description:
        "Hands-on class learning the refined techniques of Jiangnan cooking -- the emphasis on fresh ingredients, gentle seasoning, subtle sweetness, and beautiful presentation that defines Suzhou's culinary tradition. Classes typically include a market visit to source seasonal ingredients [13].",
      time: "3-4 hours (including market visit)",
      location:
        "Various locations in the old city, typically near Pingjiang Road or Guanqian Street",
      cost: "$25-50/p (per person, all-inclusive)",
      tips: [
        "Request October seasonal specialties: osmanthus sugar pastries, osmanthus wine-poached fish, fresh water chestnuts",
        "Classes that start with a morning market visit provide the most immersive experience [13]",
        "Suzhou cooking emphasizes knife skills and sauce balance -- very different from northern or Sichuan styles",
        "Book a private class for our group of 3 for more personal instruction",
      ],
      priceTier: 2,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Classic Suzhou Cuisine —
    {
      slug: "songhelou",
      name: "Song He Lou",
      photo: { src: "/photos/suzhou/songhelou.jpg", alt: "Song He Lou, Suzhou" },
      chineseName: "\u677e\u9e64\u697c",
      category: "Classic Suzhou",
      topPick: true,
      location:
        "Guanqian Street, central old city -- flagship location since 1757",
      priceRange: "$15-30/p",
      cuisine: "Classic Suzhou cuisine (est. 1757). Qianlong Emperor's favorite restaurant",
      description:
        "The most storied restaurant in Suzhou, operating continuously for nearly 270 years. The Qianlong Emperor dined here during his southern inspection tours. Famous for squirrel-shaped mandarin fish -- deep-fried into a playful shape and doused with sweet-sour sauce. Refined without being pretentious [14].",
      reviews:
        "Flagship branch maintains quality despite tourist popularity. Locals still celebrate special occasions here. Arrive early or late to avoid peak crowds. Service can be brisk during rush [14].",
      whatToOrder:
        "Squirrel-shaped mandarin fish (songshugu yui -- the signature), osmanthus sugar lotus root, braised bamboo shoots with fresh soybeans, watermelon chicken (a cold dish).",
      bestFor: "Lunch (arrive 11 AM) or dinner (after 7 PM)",
      priceTier: 2,
    },
    {
      slug: "de-yue-lou",
      name: "De Yue Lou",
      chineseName: "\u5f97\u6708\u697c",
      category: "Classic Suzhou",
      topPick: true,
      location:
        "Guanqian Street (Taijian Nong branch), near Xuanmiao Temple",
      priceRange: "$12-25/p",
      cuisine:
        "Traditional Suzhou cuisine. Featured in the 1983 film 'Xiao Xiao'",
      description:
        "A beloved institution since 1688 specializing in authentic Suzhou home-style cooking elevated to restaurant quality. Less theatrical than Song He Lou, more focused on pure flavor. The cherry pork (yinghua rou) -- braised until the fat melts into a sweet glaze -- is legendary among local foodies [15].",
      reviews:
        "Consistently praised by Suzhou residents as more 'real' than Song He Lou. Excellent value. Some branches are better than others -- the Taijian Nong location is the most reliable [15].",
      whatToOrder:
        "Cherry pork (yinghua rou), shrimp with Biluochun tea leaves, braised gluten with mushrooms, osmanthus lotus root.",
      bestFor: "Either meal; lunch is quieter",
      priceTier: 1,
    },
    {
      slug: "wumen-renjia",
      name: "Wu Men Ren Jia",
      chineseName: "\u5434\u95e8\u4eba\u5bb6",
      category: "Classic Suzhou",
      topPick: false,
      location:
        "Pingjiang Road, canal-side seating available",
      priceRange: "$10-20/p",
      cuisine: "Suzhou home-style cuisine in a canal-side setting",
      description:
        "A local favorite along Pingjiang Road that manages to serve genuinely good Suzhou food despite the tourist-adjacent location. Canal-side tables in warm weather. Specializes in the delicate freshwater flavors that define Jiangnan cooking [16].",
      reviews:
        "Praised for maintaining quality despite location on a tourist street. Canal-side atmosphere adds charm. Some find portions small by northern Chinese standards -- that's the Suzhou style.",
      whatToOrder:
        "Osmanthus-scented sweet rice cakes, stir-fried river shrimp, tofu skin rolls, braised pork belly Suzhou-style.",
      bestFor: "Lunch with canal views",
      priceTier: 1,
    },

    // — Noodles —
    {
      slug: "tongdexing",
      name: "Tong De Xing",
      photo: { src: "/photos/suzhou/tongdexing.jpg", alt: "Tong De Xing, Suzhou" },
      chineseName: "\u540c\u5f97\u5174",
      category: "Noodles",
      topPick: true,
      location:
        "Multiple locations; Shiquan Street branch is most accessible",
      priceRange: "$3-6/p",
      cuisine: "Suzhou-style noodles (est. 1980s, but following century-old recipes)",
      description:
        "Suzhou's noodle tradition is an obsession. Tong De Xing exemplifies the local style: handmade noodles with a bouncy bite, topped with exquisitely prepared 'jiaotou' (toppings braised separately). The crimson braised duck and pork trotters are prepared overnight. Locals debate their favorite noodle shop the way New Yorkers argue about pizza [17].",
      reviews:
        "Among the most consistently praised noodle shops in Suzhou. Morning and lunch queues are a sign of quality. No-frills decor, exceptional noodles [17].",
      whatToOrder:
        "Braised duck noodles (the signature), pork trotter noodles, sanxia (three-fresh topping: pork, shrimp, eel). Ask for 'mian ruan' (softer noodles) or 'mian ying' (firmer) to specify your preference.",
      bestFor: "Breakfast or lunch (arrive before 7 AM for the full local breakfast experience)",
      priceTier: 1,
    },
    {
      slug: "zhu-hong-xing",
      name: "Zhu Hong Xing",
      chineseName: "\u6731\u9e3f\u5174",
      category: "Noodles",
      topPick: false,
      location:
        "Gongxiangfang, near Guanqian Street",
      priceRange: "$2-5/p",
      cuisine: "Suzhou-style noodle soup (est. 1938)",
      description:
        "One of Suzhou's oldest noodle shops, famous for its 'aozhao mian' (noodles with slow-braised toppings). The broth is clear but deeply savory, prepared from pork and chicken bones simmered for hours. A working-class Suzhou institution [17].",
      reviews:
        "The breakfast noodle experience is quintessential Suzhou. Expect communal seating, no English, and sublime noodles. Cash helpful.",
      whatToOrder:
        "Aozhao pork noodles, braised eel noodles (huangshan noodles), plain scallion oil noodles for purists.",
      bestFor: "Breakfast (peak local atmosphere 6:30-8 AM)",
      priceTier: 1,
    },

    // — Street Food / Pastries —
    {
      slug: "huangtianyuan",
      name: "Huang Tian Yuan",
      photo: { src: "/photos/suzhou/huangtianyuan.jpg", alt: "Huang Tian Yuan, Suzhou" },
      chineseName: "\u9ec4\u5929\u6e90",
      category: "Pastries & Sweets",
      topPick: false,
      location:
        "Guanqian Street, near Xuanmiao Temple (flagship since 1821)",
      priceRange: "$1-4/p",
      cuisine: "Traditional Suzhou pastries and seasonal confections",
      description:
        "A 200-year-old pastry institution. Suzhou's pastry tradition is the most refined in China -- delicate, lightly sweet, and deeply seasonal. In October, the star is osmanthus sugar cakes (guihua gao), along with mooncake variants, flaky savory pastries, and rice-flour sweets [18].",
      reviews:
        "Legendary among locals. October queues for osmanthus pastries can be long -- worth the wait. Excellent for gifts and snacking [18].",
      whatToOrder:
        "Osmanthus sugar cakes (guihua gao -- October seasonal), fresh meat mooncakes (xianrou yuebing), flaky radish pastries (luobo si bing), mung bean pastries.",
      bestFor: "Morning snack or afternoon tea; buy to carry for garden picnicking",
      priceTier: 1,
    },
    {
      slug: "haji-shaguo",
      name: "Ha Ji Shaguo",
      chineseName: "\u54c8\u6c0f\u7802\u9505",
      category: "Local Favorites",
      topPick: false,
      location:
        "Fenghuang Street, near Shiquan Street, old city",
      priceRange: "$5-10/p",
      cuisine: "Clay pot dishes and Suzhou home cooking",
      description:
        "A neighborhood favorite specializing in shaguo (clay pot) cooking -- a traditional Suzhou method where ingredients simmer slowly in earthenware pots, concentrating flavors and keeping dishes warm at the table. Unpretentious, deeply local, and excellent [16].",
      reviews:
        "Locals recommend this as 'real Suzhou food without the tourist markup.' Claypot dishes are hearty and comforting. Small space, occasional wait at dinner.",
      whatToOrder:
        "Clay pot fish head, clay pot tofu with vegetables, braised pork belly shaguo, stir-fried seasonal greens.",
      bestFor: "Dinner",
      priceTier: 1,
    },

    // — Splurge —
    {
      slug: "xin-ji",
      name: "Xin Ji",
      photo: { src: "/photos/suzhou/xin-ji.jpg", alt: "Xin Ji, Suzhou" },
      chineseName: "\u65b0\u5b63",
      category: "Splurge",
      topPick: false,
      location:
        "Suzhou Industrial Park, Jinji Lake area",
      priceRange: "$80-140/p",
      cuisine:
        "Contemporary Jiangnan fine dining -- seasonal Suzhou flavors with modern technique",
      description:
        "Suzhou's most refined dining experience, elevating traditional Jiangnan ingredients with modern presentations. Seasonal tasting menus highlight the October harvest: freshwater crab, osmanthus-infused dishes, chrysanthemum preparations, and Taihu lake fish. Elegant setting overlooking Jinji Lake [19].",
      reviews:
        "Praised for showcasing Suzhou's culinary heritage at a fine-dining level without losing the soul of the cuisine. Reservations essential. English-speaking staff available [19].",
      whatToOrder:
        "Seasonal tasting menu (changes with October harvest), hairy crab (dazhaxie -- October is peak season), osmanthus wine-braised dishes, chef's selection of lake fish.",
      bestFor: "Dinner. Book well in advance for October (hairy crab season).",
      priceTier: 4,
    },

    // — Teahouses —
    {
      slug: "ouxiangguan",
      name: "Ou Xiang Guan",
      photo: { src: "/photos/suzhou/ouxiangguan.jpg", alt: "Ou Xiang Guan, Suzhou" },
      chineseName: "\u85d5\u9999\u9986",
      category: "Teahouse",
      topPick: false,
      location:
        "Pingjiang Road, canal-side",
      priceRange: "$4-8/p",
      cuisine: "Suzhou traditional tea service with local snacks",
      description:
        "A canal-side teahouse on Pingjiang Road serving Suzhou's famous Biluochun green tea alongside traditional pastries. Sitting by the window watching boats glide past on the canal below while drinking tea from a covered gaiwan is one of Suzhou's most quintessential experiences [16].",
      reviews:
        "Atmosphere is the main draw -- canal views, traditional decor, and the slow pace of Suzhou tea culture. Tea quality is good, snacks are standard. A place for lingering, not rushing.",
      whatToOrder:
        "Biluochun green tea (Suzhou's signature tea, grown on nearby Dongting Mountain), osmanthus tea (seasonal), sweet pastries.",
      bestFor: "Afternoon tea break during Pingjiang Road exploration",
      priceTier: 1,
    },
    {
      slug: "wang-si-jiu-jia",
      name: "Wang Si Jiu Jia",
      photo: { src: "/photos/suzhou/wang-si-jiu-jia.jpg", alt: "Wang Si Jiu Jia, Suzhou" },
      chineseName: "\u738b\u56db\u9152\u5bb6",
      category: "Local Favorites",
      topPick: true,
      location:
        "Shiquan Street area, near Master of Nets Garden",
      priceRange: "$8-15/p",
      cuisine: "Authentic Suzhou home-style cooking, known for hairy crab in season",
      description:
        "A no-frills neighborhood restaurant beloved by Suzhou locals for impeccably prepared home-style dishes. In October, this is one of the best places in town for hairy crab (dazhaxie) at a fraction of fine-dining prices. The kitchen treats seasonal Jiangnan ingredients with respect and restraint [15].",
      reviews:
        "Consistently cited by locals as a go-to for authentic taste. No English menu -- bring a translation app. Worth the language barrier for the quality and value.",
      whatToOrder:
        "Hairy crab (October seasonal -- order steamed, eat with vinegar-ginger dip), red-braised pork, stir-fried river shrimp, seasonal greens, osmanthus rice wine.",
      bestFor: "Dinner (reserve for hairy crab in October)",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Walking: The old city is compact and best explored on foot. Most gardens, canals, and restaurants are within 20-30 minutes of each other.",
      "Metro: Suzhou has 5 metro lines. Line 1 connects the train station to the old city and Jinji Lake. Line 4 runs through the historic district.",
      "Taxis/Rideshare: Use Didi. Affordable -- most rides within the old city are under $3. Traffic can be slow on Guanqian Street area.",
      "From Shanghai: 25-minute bullet train (frequent departures from Shanghai Hongqiao). Suzhou is an easy day trip or 2-night add-on.",
    ],
    "Food & Dining": [
      "Suzhou cuisine is subtly sweet -- a contrast to northern and western Chinese flavors. Embrace the delicacy; it rewards attention.",
      "October highlights: Hairy crab (dazhaxie) is peak season -- a must-try. Osmanthus appears in cakes, wine, tea, and savory dishes throughout the month.",
      "Noodle breakfast: Join locals at a noodle shop before 7 AM for the quintessential Suzhou morning experience. Order 'jiaotou' (braised toppings) separately.",
      "Tipping: Not expected in mainland China. Some upscale restaurants may add a service charge.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are used everywhere. Set up international Alipay before the trip. Bring cash for small pastry shops and street vendors.",
      "VPN: Download and configure before arriving -- Google, WhatsApp, Instagram are blocked in China.",
      "Language: Very little English in Suzhou restaurants outside hotels. Google Translate camera mode is essential. Learn to say 'tuijian' (recommend) to let the server choose.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Garden tickets: Humble Administrator's Garden in October requires advance online booking (tickets sell out by late morning). Other gardens are less constrained.",
      "Suzhou Museum: Free but requires advance reservation online. October slots fill quickly -- book 2-3 days ahead.",
      "Hairy crab: If this is a priority, confirm availability and reserve at restaurants in advance. Peak season is October-November.",
      "Shanghai connection: Suzhou is 25 minutes from Shanghai by bullet train -- can be combined as part of an Eastern Refinement circuit with Hangzhou and Huangshan.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Suzhou October Weather -- China Discovery (https://www.chinadiscovery.com/suzhou/weather/october.html)",
    "[2] Pingjiang Road Walking Guide -- China Highlights (https://www.chinahighlights.com/suzhou/attraction/pingjiang-road.htm)",
    "[3] Suzhou Overview -- China Discovery (https://www.chinadiscovery.com/jiangsu/suzhou-tours.html)",
    "[4] Shantang Street Guide -- China Highlights (https://www.chinahighlights.com/suzhou/attraction/shantang-street.htm)",
    "[5] Humble Administrator's Garden -- China Highlights (https://www.chinahighlights.com/suzhou/attraction/humble-administrators-garden.htm)",
    "[6] Master of Nets Garden -- China Discovery (https://www.chinadiscovery.com/suzhou/attraction/master-of-nets-garden.html)",
    "[7] Lion Grove Garden -- China Discovery (https://www.chinadiscovery.com/suzhou/attraction/lion-grove-garden.html)",
    "[8] Suzhou Museum -- I.M. Pei Official Archive (https://www.pfranchini.com/suzhou-museum-i-m-pei/)",
    "[9] Tiger Hill -- China Highlights (https://www.chinahighlights.com/suzhou/attraction/tiger-hill.htm)",
    "[10] Suzhou Silk and Embroidery -- China Discovery (https://www.chinadiscovery.com/suzhou/attraction/suzhou-silk-museum.html)",
    "[11] Kunqu Opera UNESCO Listing -- UNESCO Intangible Cultural Heritage (https://ich.unesco.org/en/RL/kun-qu-opera-00004)",
    "[12] Tongli Water Town Guide -- China Highlights (https://www.chinahighlights.com/suzhou/attraction/tongli-water-town.htm)",
    "[13] Suzhou Cooking Classes -- China Highlights (https://www.chinahighlights.com/suzhou/activity/cooking-class.htm)",
    "[14] Song He Lou History -- China Daily (https://www.chinadaily.com.cn/travel/2015-07/20/content_21344098.htm)",
    "[15] Suzhou Restaurant Guide -- Lost Plate (https://lostplate.com/suzhou-food-guide/)",
    "[16] Pingjiang Road Food and Tea -- Suzhou Tourism (https://www.visitsz.com/)",
    "[17] Suzhou Noodle Culture -- Serious Eats (https://www.seriouseats.com/suzhou-noodle-guide)",
    "[18] Huang Tian Yuan and Suzhou Pastries -- China Travel Guide (https://www.travelchinaguide.com/cityguides/jiangsu/suzhou/food-drink.htm)",
    "[19] Suzhou Fine Dining -- MICHELIN Guide Shanghai & Jiangsu (https://guide.michelin.com/en/jiangsu/suzhou/restaurants)",
  ],
};
