import type { CityProfile } from "@/types";

export const quanzhouProfile: CityProfile = {
  slug: "quanzhou",
  heroPhoto: { src: "/photos/quanzhou/_hero.jpg", alt: "Twin pagodas of Kaiyuan Temple in Quanzhou", credit: "Windmemories" },
  executiveSummary: [
    'Quanzhou is one of China\'s most historically extraordinary and least-touristed cities. During the Song and Yuan dynasties (10th-14th centuries), it was the largest port in the world — Marco Polo called it one of the two greatest ports on Earth. In 2021, UNESCO inscribed "Quanzhou: Emporium of the World in Song-Yuan China" as a World Heritage Site, recognizing 22 heritage sites that tell the story of a city where Arab merchants, Persian traders, Indian Hindus, Nestorian Christians, and Manichaeans all lived and worshipped alongside Chinese Buddhists, Taoists, and Confucians. In October 2025, Quanzhou was designated a UNESCO City of Gastronomy [1].',
    "What makes Quanzhou genuinely unique is the density and diversity of its living religious heritage. Within walking distance of each other in the old city, you can visit Kaiyuan Temple (one of China's greatest Buddhist monasteries), Qingjing Mosque (one of China's oldest, built by Arab traders in 1009 AD), a Confucian temple, Taoist shrines, and — most remarkably — Cao'an, the world's only surviving Manichaean temple. No other city in China, and few in the world, preserve this kind of multi-faith coexistence in such a compact, walkable area [2].",
    "The food alone is worth the detour. Quanzhou's Fujianese coastal cuisine is distinct from anything you'll eat elsewhere in China — savory noodle paste breakfasts topped with oysters, impossibly bouncy fish ball soup, crispy oyster omelets, slow-braised ginger duck, and meat dumplings with a sweet-savory filling that reflects centuries of Southeast Asian and Middle Eastern trade influence. The city's historic streets — West Street and Zhongshan Road — remain authentically lived-in, with puppetry theaters, Nanyin music performances, and neighborhood life unfolding around UNESCO monuments without the tourist infrastructure (or crowds) of better-known Chinese cities [3].",
  ],
  famousFor: [
    "UNESCO Maritime Silk Road heritage",
    "world's only Manichaean temple",
    "multi-religious coexistence",
    "Kaiyuan Temple",
    "Fujianese coastal cuisine",
    "marionette puppetry",
    "Nanyin ancient music",
  ],
  whyItFits: [
    "Deeply unique history found nowhere else in China — multi-faith heritage, Maritime Silk Road legacy",
    "Outstanding Fujianese coastal food scene with UNESCO City of Gastronomy recognition",
    "Genuinely off the beaten path — almost no foreign tourists despite UNESCO status",
    "Compact, walkable old city where all major sites are within 30 minutes on foot",
    "Living cultural traditions — Nanyin music, marionette puppetry, Xunpu village flower headdresses",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 84,
      avgLow: 72,
      rainChance: 20,
      precip: 0.8,
      sunrise: "5:55 AM",
      sunset: "5:45 PM",
      conditions: "Warm and pleasant; tail end of summer heat; occasional showers",
    },
    {
      period: "Mid Oct",
      avgHigh: 79,
      avgLow: 68,
      rainChance: 15,
      precip: 0.6,
      sunrise: "6:05 AM",
      sunset: "5:30 PM",
      conditions: "Ideal weather; comfortable temps, lower humidity, clear skies [4]",
    },
    {
      period: "Late Oct",
      avgHigh: 75,
      avgLow: 63,
      rainChance: 12,
      precip: 0.4,
      sunrise: "6:15 AM",
      sunset: "5:20 PM",
      conditions: "Crisp autumn feel; cool mornings and evenings; excellent for walking",
    },
  ],
  whatToPack:
    "Light layers for 63-84°F range. Breathable shirts, light jacket for cool evenings, comfortable walking shoes for cobblestone streets, small umbrella for occasional showers.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "west-street-tumen-street-area",
      name: "West Street / Tumen Street Area",
      topPick: true,
      description:
        "The historic heart of Quanzhou and the city's oldest continuously inhabited district. West Street runs directly past the twin pagodas of Kaiyuan Temple, lined with traditional Minnan-style shophouses, family-run food stalls, and centuries-old neighborhood life. Tumen Street, recently restored, offers a glimpse into Song and Yuan dynasty urban planning. Most of Quanzhou's UNESCO heritage sites are within a 15-minute walk. The area is largely pedestrianized with stone-paved lanes [5].",
      whyItFitsUs:
        "Maximum immersion in Quanzhou's old-city atmosphere. Everything walkable — Kaiyuan Temple, West Street food stalls, Zhongshan Road, Qingjing Mosque. Several boutique guesthouses in renovated historic residences.",
      nearby:
        "Kaiyuan Temple (immediate), Zhongshan Road (5 min walk), Qingjing Mosque (10 min walk), Confucius Temple (10 min walk)",
      hotels:
        "Tuji Lane Homestay (renovated courtyard guesthouse, top-rated for location), Fanghe Homestay West Street Branch (near Kaiyuan Temple, family-run)",
    },
    {
      slug: "zhongshan-road-fengze-area",
      name: "Zhongshan Road / Fengze District",
      topPick: false,
      description:
        "Quanzhou's most famous commercial street features China's only fully preserved arcade-style (qilou) colonial shophouses — a UNESCO-recognized architectural heritage. The covered colonnades, reflecting Southeast Asian trade influences, shelter pedestrians from rain and sun. More modern amenities than the West Street area while still retaining strong historical character [6].",
      whyItFitsUs:
        "Best balance of old-city access and modern convenience. Walking distance to Qingjing Mosque, Confucius Temple, and the clock tower. More hotel options including international chains.",
      nearby:
        "Qingjing Mosque (5 min walk), Confucius Temple (5 min walk), Kaiyuan Temple (15 min walk), Maritime Museum (15 min taxi)",
      hotels:
        "InterContinental Quanzhou (5-star, Fengze District), Citywell Hotel (near food street, good value)",
    },
    {
      slug: "xunpu-village-donghai",
      name: "Xunpu Village / Donghai Area",
      topPick: false,
      description:
        "A living fishing village 10 km from the city center, famous for its oyster-shell houses — walls built entirely from layered oyster shells that reflect sunlight and resist coastal humidity. The village's women maintain the centuries-old tradition of wearing elaborate fresh flower headdresses (zanhuawei). Despite receiving over 8.5 million visitors in 2024, the village retains genuine fishing-community life [7].",
      whyItFitsUs:
        "Unique cultural experience impossible to find elsewhere. Quieter if you stay overnight and explore at dawn before day-trippers arrive. Several newly built hotels (2024-2025) with sea views.",
      nearby:
        "Quanzhou city center (20 min taxi), Luoyang Bridge (30 min drive)",
      hotels:
        "Several new 3-5 star hotels opened 2024-2025 with sea views; best as a half-day visit from central Quanzhou",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "kaiyuan-temple",
      name: "Kaiyuan Temple",
      photo: { src: "/photos/quanzhou/kaiyuan-temple.jpg", alt: "Kaiyuan Temple, Quanzhou" },
      topPick: true,
      description:
        "Quanzhou's crown jewel — a sprawling Buddhist monastery founded in 686 AD, famous for its twin stone pagodas (East and West Pagodas) that are among the tallest stone towers in China. The main hall contains extraordinary Hindu-influenced stone carvings on its columns — evidence of the Indian traders who once lived in Quanzhou. The compound includes the ancient mulberry tree that, according to legend, bloomed lotus flowers and inspired the temple's founding [2].",
      time: "1.5-2 hours",
      location:
        "West Street, Licheng District. Walking distance from most central hotels",
      cost: "Free",
      tips: [
        "Visit early morning (before 9 AM) to see monks at prayer and avoid tour groups",
        "Study the column carvings in the main hall — Hindu figures on a Chinese Buddhist temple are extraordinary evidence of Quanzhou's cosmopolitan past",
        "The East Pagoda (Zhenguo Pagoda, 48m) has 80 relief carvings of Buddhist stories — bring binoculars",
        "Exit onto West Street for immediate access to street food stalls",
      ],
      priceTier: 0,
    },
    {
      slug: "qingjing-mosque",
      name: "Qingjing Mosque (Ashab Mosque)",
      photo: { src: "/photos/quanzhou/qingjing-mosque.jpg", alt: "Qingjing Mosque (Ashab Mosque), Quanzhou" },
      topPick: true,
      description:
        "One of China's oldest mosques, built in 1009 AD by Arab merchants during the Song Dynasty, modeled on a mosque in Damascus. The roofless stone walls of the original prayer hall create an atmospheric ruin unlike any other religious site in China. Adjacent to the intact Ming-era prayer hall still used by Quanzhou's Muslim community today [2].",
      time: "45 min-1 hour",
      location:
        "Tumen Street, Licheng District. 10 min walk from Kaiyuan Temple",
      cost: "Free",
      tips: [
        "The contrast between the ruined original hall and the active Ming-era hall powerfully illustrates a thousand years of continuous worship",
        "Look for Arabic inscriptions on the stone gateway",
        "Combine with a walk down Tumen Street to see restored Song-dynasty streetscape",
        "Best photographed in morning light when the roofless walls cast dramatic shadows",
      ],
      priceTier: 0,
    },
    {
      slug: "caoan-manichaean-temple",
      name: "Cao'an Manichaean Temple",
      photo: { src: "/photos/quanzhou/caoan-manichaean-temple.jpg", alt: "Cao'an Manichaean Temple, Quanzhou" },
      topPick: true,
      description:
        "The only surviving Manichaean temple in the world. Manichaeism, a 3rd-century Persian religion that once spread from Rome to China, has vanished everywhere else — except this modest hilltop shrine in Quanzhou's outskirts. Inside is a carved stone relief of Mani, the religion's prophet, repurposed as a Buddha figure by locals who unknowingly preserved it for centuries. A profoundly rare cultural artifact [8].",
      time: "1-1.5 hours (including travel time)",
      location:
        "Huabiao Mountain, Jinjiang city, about 15 km south of central Quanzhou. 30-40 min by taxi",
      cost: "Free",
      tips: [
        "Hire a taxi or use Didi — no convenient public transit",
        "The temple is small and modest; the significance is in what it represents, not its scale",
        "A guide who can explain Manichaean history transforms this from a curiosity into a profound experience",
        "Combine with a visit to Anping Bridge (20 min further south)",
      ],
      priceTier: 0,
    },
    {
      slug: "old-city-heritage-walk",
      name: "Old City Heritage Walk (West Street to Zhongshan Road)",
      photo: { src: "/photos/quanzhou/old-city-heritage-walk.jpg", alt: "Old City Heritage Walk (West Street to Zhongshan Road), Quanzhou" },
      topPick: true,
      description:
        "A self-guided or guided walk through Quanzhou's living old city, connecting the major UNESCO heritage sites along a Z-shaped route: start at Kaiyuan Temple on West Street, walk through the clock tower intersection, south along Zhongshan Road's covered arcades past the Confucius Temple, ending at Qingjing Mosque and Tumen Street. The entire route is flanked by Minnan-style architecture, street food vendors, puppet workshops, and neighborhood life [5].",
      time: "3-4 hours (with stops for food and temples)",
      location:
        "West Street to Zhongshan Road to Tumen Street, central Licheng District",
      cost: "Free (self-guided) or ~$25/p (shared guide)",
      tips: [
        "Start at Kaiyuan Temple in the morning, walk south through the old city, ending with street food for lunch",
        "Zhongshan Road's covered arcades are UNESCO-recognized — the only fully preserved qilou commercial street in China [6]",
        "Duck into side alleys off Zhongshan Road for the most authentic residential neighborhoods",
        "Stop at the Confucius Temple (free) midway along the route",
      ],
      priceTier: 0,
    },
    {
      slug: "quanzhou-maritime-museum",
      name: "Quanzhou Maritime Museum",
      photo: { src: "/photos/quanzhou/quanzhou-maritime-museum.jpg", alt: "Quanzhou Maritime Museum, Quanzhou" },
      topPick: false,
      description:
        "China's premier museum of maritime trade history, documenting Quanzhou's role as the world's largest port. Highlights include a full-size replica of a Song-dynasty trading ship, collections of religious artifacts from the city's diverse faith communities, and stone anchors and navigation instruments recovered from the seabed. The museum brings the Maritime Silk Road to life [9].",
      time: "1.5-2 hours",
      location:
        "425 Donghu Street, Fengze District. 15 min taxi from old city center",
      cost: "Free (register via app or ID)",
      tips: [
        "Don't skip this — it provides essential context for understanding why Quanzhou's multi-religious heritage exists",
        "The ship gallery with the reconstructed trading vessel is the highlight",
        "Closed Mondays. Hours: 9 AM - 5 PM (last entry 4:30 PM)",
        "Audio guides available — worthwhile for the historical depth",
      ],
      priceTier: 0,
    },
    {
      slug: "xunpu-village",
      name: "Xunpu Village — Oyster Shell Houses and Flower Headdresses",
      topPick: false,
      description:
        "A centuries-old fishing village where houses are built with walls of layered oyster shells and women maintain the tradition of wearing elaborate fresh flower headdresses (zanhuawei). The shells reflect sunlight and resist the coastal humidity — a brilliant adaptation to the local climate. Despite growing tourism, the village retains genuine fishing-community rhythms, especially in the early morning [7].",
      time: "2-3 hours (half day including travel)",
      location:
        "Donghai community, Fengze District. About 10 km from central Quanzhou, 20-25 min by taxi",
      cost: "Free (flower headdress experience ~$3-5)",
      tips: [
        "Go early morning (before 9 AM) to avoid the social-media crowds — the village received 8.5 million visitors in 2024",
        "Watch for the elderly women wearing genuine zanhuawei headdresses — they're the real tradition, not the tourist dress-up shops",
        "Seek out the remaining original oyster-shell houses in the older sections of the village",
        "Try the fresh seafood at the village waterfront stalls",
      ],
      priceTier: 0,
    },
    {
      slug: "luoyang-bridge",
      name: "Luoyang Bridge",
      photo: { src: "/photos/quanzhou/luoyang-bridge.jpg", alt: "Luoyang Bridge, Quanzhou" },
      topPick: false,
      description:
        "China's oldest surviving cross-sea stone bridge, built in 1053 AD under the direction of scholar-official Cai Xiang. The bridge stretches 834 meters across the Luo River estuary with 45 boat-shaped stone piers. Most remarkably, the foundation stones were anchored using cultivated oyster colonies — an ingenious biological engineering technique devised nearly a millennium ago. A UNESCO World Heritage component site [10].",
      time: "1-1.5 hours",
      location:
        "Luoyang town, northeast of Quanzhou center. About 20 min by taxi or Bus No. 13 from the train station",
      cost: "Free",
      tips: [
        "Walk the full length of the bridge — start from the south end for the best approach views",
        "Visit the Cai Xiang stone statue and memorial hall at the north end",
        "Late afternoon light is best for photography",
        "The Zhongzhou island midway has pavilions where you can rest and take in the views",
      ],
      priceTier: 0,
    },
    {
      slug: "nanyin-music-and-puppet-show",
      name: "Nanyin Music and Marionette Puppet Show",
      topPick: true,
      description:
        "Two of Quanzhou's UNESCO Intangible Cultural Heritage traditions performed in intimate settings. Nanyin, called the 'living fossil of ancient Chinese music,' is a hauntingly slow, elegant musical form sung in the local Minnan dialect with bamboo flutes and crooked-neck lutes. Quanzhou's marionette puppetry dates back over a thousand years, preserving 700+ traditional plays performed with extraordinary string-manipulation artistry [11].",
      time: "1.5-2 hours (evening)",
      location:
        "Minnan Opera House (Former Residence of Su Tingyu), central Quanzhou. Performances Tue/Thu/Sat at 7:30 PM",
      cost: "Free or minimal ($2-5)",
      tips: [
        "Check the schedule — performances are typically Tuesday, Thursday, and Saturday evenings at 7:30 PM",
        "The Minnan Opera House in Su Tingyu's former residence is the most atmospheric venue",
        "Even without understanding Minnan dialect, the musicality and puppet artistry are mesmerizing",
        "Interactive sessions sometimes allow audience members to try manipulating the marionettes",
      ],
      priceTier: 1,
    },
    {
      slug: "qingyuan-mountain",
      name: "Qingyuan Mountain Hike",
      topPick: false,
      description:
        "Quanzhou's sacred mountain, rising behind the city with Taoist temples, the massive Laojun Rock (a Song-dynasty carving of Laozi that stands 5.6 meters tall), and panoramic views of the city and coastline. Multiple trails of varying difficulty wind through forested slopes past carved inscriptions and quiet shrines. A UNESCO World Heritage component site [2].",
      time: "2-3 hours",
      location:
        "Northern edge of Quanzhou, Fengze District. 15-20 min by taxi from old city center",
      cost: "$4/p (~¥30 entrance fee)",
      tips: [
        "The Laojun Rock is the largest Laozi stone carving in China and a highlight of the hike",
        "Start early morning for cooler temperatures and better visibility",
        "Several trails available — the main route past Laojun Rock to the summit is moderately challenging",
        "Bring water — limited vendors on the trails",
      ],
      priceTier: 1,
    },
    {
      slug: "anping-bridge",
      name: "Anping Bridge — World's Longest Medieval Stone Bridge",
      topPick: false,
      description:
        "Built between 1138-1152, this 2,255-meter stone bridge was the longest bridge on Earth during the Middle Ages and remains the world's longest ancient stone bridge. Stretching across a tidal flat with 360 stone piers, it is a monument to Song-dynasty engineering ambition and Quanzhou's maritime wealth. A UNESCO World Heritage component site [10].",
      time: "1-1.5 hours",
      location:
        "Anhai town, Jinjiang city. About 30 km south of central Quanzhou, 40-50 min by taxi",
      cost: "Free",
      tips: [
        "Combine with Cao'an Manichaean Temple for a half-day southern excursion",
        "Walking the full 2.2 km length is a meditative experience — allow 40 minutes each way",
        "Best visited at low tide when the full scope of the bridge and its piers are visible",
        "The bridge has rest pavilions along its length",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Street Food / Breakfast —
    {
      slug: "west-street-noodle-paste-stalls",
      name: "West Street Noodle Paste Stalls (Mianxianhu)",
      chineseName: "面线糊",
      category: "Street Food",
      topPick: true,
      location:
        "Multiple stalls along West Street near Kaiyuan Temple, Licheng District",
      priceRange: "$1-3/p",
      cuisine: "Quanzhou noodle paste breakfast — the quintessential local morning meal",
      description:
        "Thin rice vermicelli cooked into a thick, silky savory broth, customized with your choice of toppings — oysters, pork intestines, shrimp, fried egg, braised pork. Paired with deep-fried dough sticks (youtiao) for dipping. This is what Quanzhou eats for breakfast, and the West Street stalls near Kaiyuan Temple are the most atmospheric setting [3].",
      reviews:
        "Universally loved by locals and visitors. The customization is part of the fun — point at toppings and they're added to your bowl. Expect to eat standing or on tiny stools.",
      whatToOrder:
        "Mianxianhu with oysters and pork intestines (the classic combination), youtiao for dipping, a side of curou (fried vinegar pork).",
      bestFor: "Breakfast, 6:30-9:00 AM",
      priceTier: 1,
    },
    {
      slug: "lao-abo",
      name: "Lao Abo",
      chineseName: "老阿伯",
      category: "Street Food",
      topPick: true,
      location: "West Street area, Licheng District",
      priceRange: "$2-5/p",
      cuisine: "Traditional Quanzhou snacks — Michelin Bib Gourmand [12]",
      description:
        "A beloved local institution serving Quanzhou's classic street snacks in a no-frills setting. The meat dumplings (rouzhong) here are among the city's best — sticky rice wrapped around a sweet-savory pork filling, steamed in banana leaves. Michelin Bib Gourmand recognition in the 2025 Fujian guide [12].",
      reviews:
        "Michelin Bib Gourmand 2025. Lines form at mealtimes. Tiny space, fast turnover, no English menu — use pictures or a translation app.",
      whatToOrder:
        "Rouzhong (Quanzhou meat dumplings), fish ball soup, yuanxiao (glutinous rice balls), runbing (Fujianese spring rolls).",
      bestFor: "Lunch or afternoon snack",
      priceTier: 1,
    },
    {
      slug: "aqiu-steak-huxin-street",
      name: "Aqiu Steak (Huxin Street)",
      chineseName: "阿秋牛排",
      category: "Street Food",
      topPick: false,
      location: "Huxin Street, Licheng District",
      priceRange: "$3-6/p",
      cuisine: "Quanzhou-style beef steak — a unique local adaptation. Michelin Bib Gourmand [12]",
      description:
        "Quanzhou's distinctive take on 'steak' — thinly sliced beef pan-fried on a sizzling iron plate with onions and a sweet-savory sauce, served with a fried egg and buttered bread. This is not Western steak — it's a purely Quanzhou invention reflecting decades of Southeast Asian influence [12].",
      reviews:
        "Michelin Bib Gourmand 2025. A genuinely unique dish you won't find outside Quanzhou. Cheap, filling, and delicious.",
      whatToOrder:
        "Beef steak plate with fried egg, buttered toast, and mushroom soup (the classic combination).",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "zhang-lin-ah-shan-ginger-duck",
      name: "Zhang Lin Ah Shan Ginger Duck",
      chineseName: "张林阿山姜母鸭",
      category: "Regional Fujianese",
      topPick: true,
      location: "Multiple locations in Quanzhou",
      priceRange: "$8-14/p",
      cuisine: "Quanzhou ginger duck — the city's signature warming dish. Michelin Bib Gourmand [12]",
      description:
        "Whole duck slow-braised with generous slabs of old ginger and sesame oil in a clay pot until the meat falls off the bone and the ginger melts into the rich, aromatic broth. A dish with deep roots in Fujianese folk medicine — believed to warm the body and boost circulation. Intensely flavorful without being spicy [3].",
      reviews:
        "Michelin Bib Gourmand 2025. The ginger duck here is considered the benchmark. Rich, warming, deeply savory. Perfect for a group sharing around the clay pot.",
      whatToOrder:
        "Whole ginger duck (serves 2-3), stir-fried vegetables, rice. The braising liquid is meant to be drunk as soup.",
      bestFor: "Dinner — a hearty, warming evening meal",
      priceTier: 1,
    },
    {
      slug: "dewen-shrimp-noodles",
      name: "Dewen Shrimp Noodles",
      chineseName: "德文虾面",
      category: "Regional Fujianese",
      topPick: false,
      location: "Licheng District, central Quanzhou",
      priceRange: "$3-5/p",
      cuisine: "Quanzhou shrimp noodles — rich shrimp broth, Michelin Bib Gourmand [12]",
      description:
        "Egg noodles served in a deeply concentrated shrimp broth made by slow-simmering shrimp shells and heads for hours. Topped with whole shrimp, pork slices, and bean sprouts. The broth is the star — intensely umami with a natural sweetness from the shellfish [12].",
      reviews:
        "Michelin Bib Gourmand 2025. The broth is extraordinarily rich for such an affordable bowl. Queue at peak hours.",
      whatToOrder:
        "Shrimp noodles (large bowl), add extra shrimp if available.",
      bestFor: "Lunch",
      priceTier: 1,
    },
    {
      slug: "chunsheng-restaurant",
      name: "Chunsheng Restaurant",
      photo: { src: "/photos/quanzhou/chunsheng-restaurant.jpg", alt: "Chunsheng Restaurant, Quanzhou" },
      chineseName: "春生饭店",
      category: "Regional Fujianese",
      topPick: false,
      location: "Licheng District, central Quanzhou",
      priceRange: "$5-10/p",
      cuisine: "Home-style Fujianese cooking, Michelin Bib Gourmand [12]",
      description:
        "A neighborhood restaurant serving refined home-style Fujianese dishes — the kind of cooking that Quanzhou families aspire to on special occasions. Clean, umami-forward flavors with minimal spice, emphasizing fresh seafood and seasonal produce [12].",
      reviews:
        "Michelin Bib Gourmand 2025. Locals consider this among the best home-cooking restaurants in the city. Generous portions, reasonable prices.",
      whatToOrder:
        "Oyster omelet (hao jian), braised pork belly Fujian-style, stir-fried clams with basil, fish ball soup, seasonal greens.",
      bestFor: "Either meal",
      priceTier: 1,
    },
    {
      slug: "green-island-seafood-restaurant",
      name: "Green Island Seafood Restaurant",
      photo: { src: "/photos/quanzhou/green-island-seafood-restaurant.jpg", alt: "Green Island Seafood Restaurant, Quanzhou" },
      chineseName: "绿岛海鲜酒楼",
      category: "Splurge",
      topPick: false,
      location: "Fengze District, Quanzhou",
      priceRange: "$25-50/p",
      cuisine: "Fujianese seafood — Michelin-starred [12]",
      description:
        "One of four Michelin-starred restaurants in Quanzhou's inaugural 2025 Fujian guide. Pristine local seafood prepared in refined Fujianese style — steamed, braised, and lightly sauced to let the ingredients speak. A step up in ambiance and presentation from the street-food scene without losing the regional identity [12].",
      reviews:
        "Michelin-starred 2025. Praised for exceptionally fresh seafood and skilled preparation. Higher prices than typical Quanzhou dining but excellent value by international fine-dining standards.",
      whatToOrder:
        "Steamed seasonal fish, salt-baked shrimp, braised sea cucumber, oyster dishes. Ask what's freshest that day.",
      bestFor: "Dinner. Reservations recommended.",
      priceTier: 2,
    },
    {
      slug: "zhong-ji-salt-roasted-duck",
      name: "Zhong Ji Salt-Roasted Duck",
      photo: { src: "/photos/quanzhou/zhong-ji-salt-roasted-duck.jpg", alt: "Zhong Ji Salt-Roasted Duck, Quanzhou" },
      chineseName: "钟记盐烧鸭",
      category: "Street Food",
      topPick: false,
      location: "Central Quanzhou, Licheng District",
      priceRange: "$4-8/p",
      cuisine: "Quanzhou salt-roasted duck, Michelin Bib Gourmand [12]",
      description:
        "Whole duck encased in coarse salt and slow-roasted until the skin turns golden and the meat stays impossibly moist. The salt crust seals in all the juices while imparting a subtle, clean flavor. A distinctive Quanzhou preparation quite different from Peking duck or Cantonese roast duck [12].",
      reviews:
        "Michelin Bib Gourmand 2025. The duck sells out — go early. Takeaway portions are perfect for a picnic on Zhongshan Road.",
      whatToOrder:
        "Half or whole salt-roasted duck, paired with rice or as part of a broader meal.",
      bestFor: "Lunch or early dinner — sells out",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Walking: The old city (West Street, Zhongshan Road, Tumen Street) is compact and best explored entirely on foot. Most heritage sites are within 15-20 min of each other.",
      "Taxis/Didi: Essential for sites outside the old city — Cao'an Temple (30 min), Luoyang Bridge (20 min), Xunpu Village (20 min), Qingyuan Mountain (15 min). Rides are very affordable ($2-5 within the city).",
      "Buses: City buses are cheap ($0.15-0.30) but routes can be confusing without Chinese. Didi is more practical for visitors.",
    ],
    "Food & Dining": [
      "Ordering strategy: Many Quanzhou food stalls are single-dish specialists. Plan to eat at 3-4 places per meal, sampling specialties at each — this is how locals eat.",
      "Breakfast is king: Quanzhou's breakfast culture is extraordinary. Don't sleep in — mianxianhu (noodle paste), rouzhong (meat dumplings), and fried vinegar pork are best before 9 AM.",
      "No tipping: Not expected anywhere in Quanzhou. No service charges at local restaurants.",
      "English menus: Extremely rare in Quanzhou. Use your phone's camera translation or save photos of dishes you want to try.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are ubiquitous. Many street stalls don't accept cash. Set up international Alipay before arriving.",
      "VPN: Download and configure before arriving — Google, WhatsApp, Instagram are blocked in mainland China.",
      "Language: Very little English spoken in Quanzhou. A translation app is essential. The local Minnan dialect differs significantly from Mandarin.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Cao'an Temple and Anping Bridge are outside the city — plan a combined half-day excursion south with a hired car.",
      "Quanzhou pairs naturally with Xiamen (1 hour by high-speed rail) for a combined Fujian Coast itinerary.",
      "Most heritage sites are free — budget primarily for food, transport, and accommodation.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Quanzhou UNESCO City of Gastronomy — Quanzhou Gastronomy Official (https://www.quanzhougastronomy.com/en/Updates/news/202502/t20250215_3140265.htm)",
    "[2] Quanzhou: Starting Point of the Maritime Silk Road — The China Journey (https://www.thechinajourney.com/quanzhou/)",
    "[3] 20 Must-Try Dishes of Quanzhou — Quanzhou Gastronomy Official (https://www.quanzhougastronomy.com/en/guide/flavors/202502/t20250221_3142323.htm)",
    "[4] Quanzhou Weather & Best Time to Visit — China Discovery (https://www.chinadiscovery.com/fujian/quanzhou/quanzhou-weather.html)",
    "[5] Visit Quanzhou: Ultimate Travel Guide — China Discovery (https://www.chinadiscovery.com/fujian/quanzhou.html)",
    "[6] Zhongshan Street in Quanzhou — China Xian Tour (https://www.chinaxiantour.com/quanzhou-attractions/zhongshan-street-in-quanzhou.html)",
    "[7] Xunpu Village — Top China Travel (https://www.topchinatravel.com/china-attractions/quanzhou-xunpu-village.htm)",
    "[8] Cao'an Manichaean Temple — Lonely Planet (https://www.lonelyplanet.com/china/fujian/quanzhou/attractions/cao-an-manichaean-temple/a/poi-sig/1437394/355914)",
    "[9] Quanzhou Maritime Museum — Travel China Guide (https://www.travelchinaguide.com/attraction/fujian/quanzhou/maritimemuseum.htm)",
    "[10] Luoyang Bridge in Quanzhou — Top China Travel (https://www.topchinatravel.com/china-attractions/luoyang-bridge.htm)",
    "[11] Nanyin — UNESCO Intangible Cultural Heritage (https://ich.unesco.org/en/RL/nanyin-00199)",
    "[12] MICHELIN Guide Fujian Province 2025 (https://guide.michelin.com/en/article/news-and-views/fujian-province-2025-starred-restaurants)",
  ],
};
