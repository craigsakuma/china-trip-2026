import type { CityProfile } from "@/types";

export const xianProfile: CityProfile = {
  slug: "xian",
  heroPhoto: { src: "/photos/xian/_hero.jpg", alt: "Xi'an ancient city wall", credit: "chensiyuan" },
  executiveSummary: [
    "Xi'an in mid-October is a city wrapped in golden light and 3,100 years of history. As the ancient capital of thirteen Chinese dynasties and the eastern anchor of the Silk Road, Xi'an's historical depth is rivaled only by Beijing's — but here, the layers feel more concentrated and immediate. The Terracotta Warriors remain one of the great archaeological discoveries of the 20th century, but Xi'an's real power lies in the living city: the intact 14th-century Ming Dynasty walls encircling the urban core, the Forest of Steles museum preserving 2,000 years of calligraphy carved in stone, and the Big Wild Goose Pagoda where the monk Xuanzang translated the Buddhist sutras he carried back from India along the Silk Road [1].",
    "The Muslim Quarter is Xi'an's culinary and cultural heart — a dense labyrinth of alleyways where Hui Muslim families have been pulling noodles, roasting lamb, and baking flatbreads for over a thousand years. This is not a sanitized food court; venture beyond the main Beiyuanmen tourist drag and you'll find generations-deep family shops where yangrou paomo (lamb soup with hand-torn bread), biang biang noodles (belt-wide hand-pulled noodles slapped against the counter), and roujiamo (Chinese 'hamburgers' with cumin-spiced meat) are served from the same stalls that have operated since the Qing Dynasty. The food here is unlike anything else in China — heavy on wheat, lamb, cumin, and chili, reflecting centuries of Central Asian trade and cultural exchange [2].",
    "October delivers Xi'an's finest weather: crisp, dry days in the mid-60s with clear blue skies and minimal rain, making it ideal for cycling the full 13.7-kilometer city wall loop, exploring outdoor archaeological sites, and — for the ambitious — tackling the legendary plank walk and granite peaks of Huashan, one of China's five sacred Taoist mountains and one of the most thrilling day hikes in Asia [3].",
  ],
  famousFor: [
    "Terracotta Warriors",
    "Silk Road heritage",
    "Muslim Quarter food",
    "Ming Dynasty city walls",
    "biang biang noodles",
    "ancient imperial capital",
    "calligraphy and steles",
  ],
  whyItFits: [
    "Deepest concentration of Chinese imperial history outside Beijing — 13 dynasties, 3,100 years",
    "One of China's most distinctive regional food scenes (Silk Road cuisine unlike anywhere else in the country)",
    "Cycling the complete city wall loop is an unforgettable active experience",
    "Muslim Quarter offers genuine cultural immersion in living Hui heritage",
    "Optional Huashan day hike is world-class for adventurous travelers",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 68,
      avgLow: 52,
      rainChance: 20,
      precip: 0.6,
      sunrise: "6:30 AM",
      sunset: "6:15 PM",
      conditions: "Warm days, cool evenings; occasional light rain possible",
    },
    {
      period: "Mid Oct",
      avgHigh: 63,
      avgLow: 47,
      rainChance: 15,
      precip: 0.4,
      sunrise: "6:40 AM",
      sunset: "6:00 PM",
      conditions: "Crisp golden autumn; clear skies; ideal sightseeing weather [3]",
    },
    {
      period: "Late Oct",
      avgHigh: 57,
      avgLow: 41,
      rainChance: 12,
      precip: 0.3,
      sunrise: "6:52 AM",
      sunset: "5:45 PM",
      conditions: "Cooler; layering essential; excellent visibility; fewer crowds",
    },
  ],
  whatToPack:
    "Layers for 41-68\u00b0F temperature swings. Light jacket and fleece for mornings/evenings. Comfortable walking shoes for city exploration. Sturdy hiking shoes if doing Huashan. Cycling gloves optional for the city wall ride.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "muslim-quarter-zhonggulou",
      name: "Muslim Quarter / Zhonggulou (Bell & Drum Tower) Area",
      topPick: true,
      description:
        "The vibrant Hui Muslim neighborhood radiating northwest from the Bell and Drum Towers. Beiyuanmen is the famous tourist-facing food street, but the real treasures are the quieter side alleys — Dapi Yuan, Xiyangshi, and Daxuexi Alley — where multi-generational family restaurants operate without English signs or tourist markup. The Great Mosque, one of China's largest and most beautiful, hides behind residential walls [2].",
      whyItFitsUs:
        "Most atmospheric neighborhood in the city. Walking distance to Bell Tower, Drum Tower, city wall access, and the best food in Xi'an. Several boutique hotels within or adjacent to the quarter.",
      nearby:
        "Bell Tower (5 min), Drum Tower (2 min), City Wall south gate (15 min walk), Great Mosque (5 min walk)",
      hotels:
        "Xi'an Bell Tower Hotel (overlooks the Bell Tower, walkable to everything \u2014 solid mid-range pick), Shuyuan Youth Hostel near Shuyuan Gate (budget, near calligraphy street)",
    },
    {
      slug: "shuyuan-gate-south-wall",
      name: "Shuyuan Gate / South Wall Cultural District",
      topPick: false,
      description:
        "The scholarly heart of Xi'an, anchored by Shuyuan Gate (the ancient calligraphy and antique street) and the Forest of Steles Museum. The neighborhood radiates south from the city wall's South Gate (Yongningmen) through tree-lined streets with traditional shops selling ink stones, brushes, rubbings, and antique scrolls. More refined and contemplative than the Muslim Quarter [4].",
      whyItFitsUs:
        "Best area for calligraphy enthusiasts and history buffs. Walking distance to the Forest of Steles and city wall South Gate (the most popular starting point for the wall cycle). Quieter and more local-feeling.",
      nearby:
        "Forest of Steles (5 min), City Wall South Gate (5 min), Shaanxi History Museum (15 min taxi), Small Wild Goose Pagoda (10 min taxi)",
      hotels:
        "Shuyuan International Youth Hostel (atmospheric courtyard setting near the steles), Han Tang Inn (traditional style near South Gate)",
    },
    {
      slug: "qujiang-big-wild-goose-pagoda",
      name: "Qujiang / Big Wild Goose Pagoda Area",
      topPick: false,
      description:
        "The modern cultural district south of the old city wall, centered on the Big Wild Goose Pagoda and the outstanding Shaanxi History Museum. More polished and spacious than the walled city, with parks, wide boulevards, and the Tang Paradise cultural park. The area around the Small Wild Goose Pagoda retains more traditional neighborhood character [5].",
      whyItFitsUs:
        "Best access to the Shaanxi History Museum and Big Wild Goose Pagoda. Higher-end hotel options. More breathing room than the dense old city.",
      nearby:
        "Big Wild Goose Pagoda (5 min), Shaanxi History Museum (5 min), Tang Paradise (10 min walk), City Wall South Gate (15 min taxi)",
      hotels:
        "Grand Hyatt Xi'an (modern, near Big Wild Goose Pagoda), Wyndham Grand Xi'an South (well-located mid-range option near Shaanxi History Museum)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "terracotta-warriors-museum",
      name: "Terracotta Warriors (Emperor Qinshihuang's Mausoleum Site Museum)",
      photo: { src: "/photos/xian/terracotta-warriors-museum.jpg", alt: "Terracotta Warriors (Emperor Qinshihuang's Mausoleum Site Museum), Xian" },
      topPick: true,
      description:
        "One of the most significant archaeological discoveries ever made. In 1974, farmers digging a well uncovered an underground army of over 8,000 life-sized terracotta soldiers, horses, and chariots guarding the tomb of China's first emperor, Qin Shi Huang (259-210 BC). Each warrior has individualized facial features. Pit 1 is the largest and most impressive (6,000 figures in battle formation), Pit 2 has the highest-ranking warriors and cavalry, and Pit 3 is the command headquarters. A knowledgeable guide transforms this from 'looking at statues' into understanding the paranoia, ambition, and engineering genius of the man who unified China [1].",
      time: "3-4 hours (half day including transit; full day if combined with Huaqing Hot Springs)",
      location:
        "Lintong District, ~40 km east of Xi'an. 1-1.5 hours by car or tourist bus (Line 5/306 from Xi'an Train Station, ~$1)",
      cost: "$22/p ($22 entrance, includes all pits and exhibition hall)",
      tips: [
        "Hire a guide at the entrance or pre-book \u2014 the context makes an enormous difference ($30-50 for 2-hour English-speaking guide, shared among group)",
        "Visit Pit 1 first at opening (8:30 AM) before tour groups arrive, then work backward to Pit 3",
        "The bronze chariots exhibition hall (included in ticket) is easy to miss and exceptional",
        "Combine with Huaqing Hot Springs (15 min drive) for a full day trip [1]",
      ],
      priceTier: 2,
    },
    {
      slug: "city-wall-cycling",
      name: "Cycling the Ming Dynasty City Wall",
      photo: { src: "/photos/xian/city-wall-cycling.jpg", alt: "Cycling the Ming Dynasty City Wall, Xian" },
      topPick: true,
      description:
        "Xi'an's city wall is the most complete ancient city wall in China \u2014 13.7 km of continuous, fully intact 14th-century fortification standing 12 meters high and wide enough on top for two lanes of traffic. Cycling the full loop takes about 90 minutes and delivers a constantly shifting panorama: the dense old city on one side, the modern skyline on the other, with watchtowers, ramparts, and moat gardens below [6].",
      time: "2-3 hours (including stops for views and photos)",
      location:
        "South Gate (Yongningmen) is the main access point and bike rental hub. Multiple other gates offer access.",
      cost: "$12/p ($7 wall entrance + $5 tandem or single bike rental for 100 minutes)",
      tips: [
        "Start at the South Gate \u2014 it has the best bike rental facilities and is the most dramatic entry point",
        "Late afternoon (4-5 PM) gives the best light for photography and avoids midday heat",
        "The southeast corner has the most photogenic watchtowers with mountain views on clear days",
        "Electric carts available (~$7/p) for those who prefer not to cycle the full distance [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "muslim-quarter-food-walk",
      name: "Muslim Quarter Deep Food Walk",
      photo: { src: "/photos/xian/muslim-quarter-food-walk.jpg", alt: "Muslim Quarter Deep Food Walk, Xian" },
      topPick: true,
      description:
        "The Muslim Quarter is Xi'an's most important culinary destination \u2014 a dense network of alleys where Hui Muslim families have been cooking Silk Road-influenced food for over a millennium. The main Beiyuanmen street is famous but heavily touristed; the real treasures are in the side alleys (Dapi Yuan, Xiyangshi, Daxuexi Alley, and Huajue Alley) where multi-generational shops serve locals with no English menus and no inflated prices [2].",
      time: "2-3 hours (morning or evening)",
      location:
        "Northwest of the Drum Tower, Lianhu District. Main entrance at Beiyuanmen; better to approach from side streets",
      cost: "$5-12/p (for a full food crawl across multiple stalls)",
      tips: [
        "Skip the main Beiyuanmen drag for your first bites \u2014 head directly into the side alleys for better food at lower prices",
        "Must-try sequence: yangrou paomo at a sit-down shop (you tear the bread yourself), biang biang noodles, roujiamo, then persimmon cakes (shi zi bing) for dessert",
        "Evening (6-9 PM) has the best atmosphere with the most stalls operating and the most locals eating",
        "The Great Mosque is hidden behind residential walls in Huajue Alley \u2014 combine with your food walk [2]",
      ],
      priceTier: 1,
    },
    {
      slug: "shaanxi-history-museum",
      name: "Shaanxi History Museum",
      photo: { src: "/photos/xian/shaanxi-history-museum.jpg", alt: "Shaanxi History Museum, Xian" },
      topPick: true,
      description:
        "One of China's four great museums and arguably the best single museum for understanding the full sweep of Chinese civilization. Over 370,000 artifacts spanning 1.1 million years, from Paleolithic tools through Tang Dynasty gold and silver work. The Tang Dynasty gallery alone \u2014 gold filigree crowns, tri-color glazed horses, and exquisite silver vessels \u2014 justifies the visit. The museum traces how Xi'an as a capital shaped Chinese culture across 13 dynasties [5].",
      time: "2-3 hours",
      location:
        "91 Xiaozhai East Road, Yanta District. Near Big Wild Goose Pagoda. 20 min taxi from city center",
      cost: "Free (basic galleries) or $4/p for special exhibition halls (the Tang Dynasty treasures hall is worth the upgrade)",
      tips: [
        "Free tickets require advance booking on WeChat mini-program \u2014 reserve 1-3 days ahead as October slots fill fast",
        "Pay the $4 upgrade for the Tang Dynasty treasures hall \u2014 the gold and silver work is extraordinary",
        "Visit early morning (8:30 AM opening) or after 2 PM to avoid school groups",
        "Combine with Big Wild Goose Pagoda (10 min walk) for a half-day Qujiang cultural circuit [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "great-mosque-of-xian",
      name: "Great Mosque of Xi'an",
      photo: { src: "/photos/xian/great-mosque-of-xian.jpg", alt: "Great Mosque of Xi'an, Xian" },
      topPick: false,
      description:
        "One of the largest and oldest mosques in China, founded in 742 AD during the Tang Dynasty. Unlike any mosque you've seen \u2014 the architecture is entirely traditional Chinese (wooden halls, gardens, memorial arches, and courtyards) but filled with Arabic calligraphy and Islamic decorative motifs. The fusion of Chinese and Islamic aesthetics reflects a thousand years of Hui Muslim life in Xi'an [7].",
      time: "1-1.5 hours",
      location:
        "30 Huajue Alley, inside the Muslim Quarter. Hidden behind residential walls \u2014 easy to walk past",
      cost: "$4/p ($4 entrance for non-Muslims)",
      tips: [
        "Visit during non-prayer times; the mosque remains an active place of worship",
        "The fourth courtyard with its prayer hall and garden is the most beautiful \u2014 most tourists turn around too early",
        "Photography is permitted in the courtyards but not inside the prayer hall",
        "Combine with Muslim Quarter food walk \u2014 the mosque entrance is in Huajue Alley, one of the best food streets [7]",
      ],
      priceTier: 1,
    },
    {
      slug: "forest-of-steles-museum",
      name: "Forest of Steles Museum (Beilin Museum)",
      photo: { src: "/photos/xian/forest-of-steles-museum.jpg", alt: "Forest of Steles Museum (Beilin Museum), Xian" },
      topPick: false,
      description:
        "A collection of over 3,000 inscribed stone steles spanning 2,000 years \u2014 the largest collection of its kind in the world. For calligraphy enthusiasts, this is hallowed ground: Tang Dynasty master calligraphy preserved in stone, Nestorian Christian inscriptions from 781 AD documenting early Christianity in China, Confucian classics carved as the imperial standard, and a forest of carved tablets that constitutes one of the longest continuously maintained libraries in human history [4].",
      time: "1.5-2 hours",
      location:
        "15 Sanxue Street, near the South Gate. Inside the city wall, Beilin District",
      cost: "$10/p ($10 entrance)",
      tips: [
        "Hire a guide or download an audio guide \u2014 without context, the steles are just inscribed rocks; with context, they're 2,000 years of Chinese intellectual history",
        "The stone rubbings workshop lets you make your own rubbing to take home ($3-10 depending on size) \u2014 a meaningful and unique souvenir",
        "The Nestorian Stele (Room 2) is one of the most historically significant objects in China [4]",
        "Combine with nearby Shuyuan Gate antique street for calligraphy supplies and traditional crafts",
      ],
      priceTier: 1,
    },
    {
      slug: "big-wild-goose-pagoda",
      name: "Big Wild Goose Pagoda (Da Ci'en Temple)",
      topPick: false,
      description:
        "Built in 652 AD to house the Buddhist scriptures that the monk Xuanzang brought back from his epic 17-year journey to India along the Silk Road \u2014 the journey that later inspired the classic novel 'Journey to the West.' The seven-story brick pagoda is a masterpiece of Tang Dynasty architecture and a UNESCO World Heritage Site. Climbing to the top provides panoramic views of Xi'an's southern districts [5].",
      time: "1.5-2 hours",
      location:
        "Da Ci'en Temple, Yanta District. Near Shaanxi History Museum. Metro Line 3/4 to Dayanta",
      cost: "$7/p ($5 temple entrance + $2 pagoda climb)",
      tips: [
        "The temple grounds are more interesting than the pagoda interior \u2014 spend time in the courtyards",
        "Visit in the morning before the surrounding plaza fills with tour groups",
        "The north plaza has a large musical fountain show at set times (free) \u2014 impressive but very crowded",
        "Combine with Shaanxi History Museum (10 min walk) for a Qujiang half day [5]",
      ],
      priceTier: 1,
    },
    {
      slug: "huaqing-hot-springs",
      name: "Huaqing Hot Springs (Huaqing Palace)",
      photo: { src: "/photos/xian/huaqing-hot-springs.jpg", alt: "Huaqing Hot Springs (Huaqing Palace), Xian" },
      topPick: false,
      description:
        "A 3,000-year-old imperial hot springs complex at the foot of Mount Li, most famous as the site of Emperor Xuanzong's doomed love affair with his concubine Yang Guifei \u2014 one of the great love stories in Chinese literature. Also the site where Chiang Kai-shek was captured in the 1936 Xi'an Incident that changed the course of Chinese history. The combination of Tang Dynasty ruins, natural hot springs, and dramatic mountain scenery makes it a rich half-day stop [8].",
      time: "2-3 hours (usually combined with Terracotta Warriors, 15 min drive apart)",
      location:
        "Lintong District, at the base of Mount Li. ~30 km east of Xi'an, en route to the Terracotta Warriors",
      cost: "$17/p ($17 entrance, includes the ruins and gardens)",
      tips: [
        "Visit in the morning before heading to the Terracotta Warriors \u2014 both are in Lintong District",
        "Climb the short trail up Mount Li for panoramic views over the hot springs complex and surrounding valley",
        "The evening 'Song of Everlasting Sorrow' performance (seasonal, ~$20-55) dramatizes the Emperor Xuanzong/Yang Guifei love story with spectacular staging [8]",
        "The original hot spring pools are viewable but you cannot bathe in them \u2014 some modern hot spring facilities are nearby",
      ],
      priceTier: 2,
    },
    {
      slug: "small-wild-goose-pagoda",
      name: "Small Wild Goose Pagoda and Xi'an Museum",
      photo: { src: "/photos/xian/small-wild-goose-pagoda.jpg", alt: "Small Wild Goose Pagoda and Xi'an Museum, Xian" },
      topPick: false,
      description:
        "Often overlooked in favor of its larger sibling, the Small Wild Goose Pagoda (built 707-709 AD) is set in a beautiful walled park with far fewer tourists. The surrounding Xi'an Museum is free and excellent. The pagoda survived a major earthquake in 1556 that cracked it from top to bottom \u2014 the crack is still visible. The temple grounds with ancient trees and quiet courtyards feel like stepping back in time [9].",
      time: "1.5-2 hours",
      location:
        "Youyi West Road, Beilin District. 10 min taxi from the city wall",
      cost: "Free (both pagoda grounds and Xi'an Museum are free; advance booking required)",
      tips: [
        "Book free tickets on WeChat in advance \u2014 entry is timed",
        "The morning bell-ringing ceremony is atmospheric if you catch it",
        "The Xi'an Museum inside the compound has excellent Tang Dynasty artifacts with no crowds",
        "A more peaceful, local-feeling alternative to the Big Wild Goose Pagoda [9]",
      ],
      priceTier: 0,
    },
    {
      slug: "huashan-sacred-mountain",
      name: "Huashan (Mount Hua) \u2014 Sacred Mountain Day Hike",
      topPick: false,
      description:
        "One of China's five great sacred Taoist mountains and arguably the most dramatic and physically challenging of all. Sheer granite peaks, chain-assisted cliff ascents, and the infamous 'Plank Walk in the Sky' \u2014 wooden planks bolted to a vertical cliff face at 2,000+ meters. The North Peak via the Soldier's Trail is a serious hike with genuine exposure. Not for the faint-hearted, but the views and sense of accomplishment are extraordinary [10].",
      time: "Full day (2 hours each way by train/car + 5-8 hours hiking depending on route)",
      location:
        "Huayin, ~120 km east of Xi'an. High-speed train from Xi'an North Station to Huashan North (30 min, ~$8)",
      cost: "$40/p ($25 entrance + $8 round-trip train + $5 shuttle bus within park; cable car optional $11-17 one way)",
      tips: [
        "Take the high-speed train from Xi'an North to Huashan North Station \u2014 30 minutes vs. 2+ hours by car",
        "The North Peak via Soldier's Trail is the most rewarding hiking route; cable car option available for those who want to save energy for the summit ridges",
        "The Plank Walk in the Sky costs an additional $4 and requires a harness \u2014 exhilarating but optional",
        "Start very early (5-6 AM departure from Xi'an) to have enough daylight for the full circuit [10]",
      ],
      priceTier: 3,
    },
    {
      slug: "tang-dynasty-music-and-dance-show",
      name: "Tang Dynasty Music and Dance Show",
      photo: { src: "/photos/xian/tang-dynasty-music-and-dance-show.jpg", alt: "Tang Dynasty Music and Dance Show, Xian" },
      topPick: false,
      description:
        "A recreation of the elaborate court music and dance performances that defined Tang Dynasty (618-907 AD) high culture, when Xi'an (then Chang'an) was the largest and most cosmopolitan city in the world. Colorful costumes, traditional instruments, and choreography based on Tang Dynasty murals and historical records. Multiple venues offer variations [11].",
      time: "1.5 hours (evening)",
      location:
        "Multiple venues; Shaanxi Grand Opera House and Tang Dynasty Palace are the most established",
      cost: "$25-50/p (ticket prices vary by venue and seating; some include a dumpling banquet dinner)",
      tips: [
        "The combination dinner-and-show packages (~$35-50/p) at Tang Dynasty Palace include a multi-course dumpling banquet \u2014 worth it for the full experience",
        "Shaanxi Grand Opera House offers a more polished, theatrical production",
        "Book through your hotel for better prices than walk-up rates [11]",
        "Evening shows typically start at 8:00-8:30 PM",
      ],
      priceTier: 2,
    },
    {
      slug: "dumpling-banquet-experience",
      name: "Dumpling Banquet (Jiaozi Yan)",
      photo: { src: "/photos/xian/dumpling-banquet-experience.jpg", alt: "Dumpling Banquet (Jiaozi Yan), Xian" },
      topPick: false,
      description:
        "A Xi'an signature: an elaborate multi-course banquet where every dish is a different style of dumpling \u2014 steamed, boiled, fried, baked \u2014 shaped into animals, flowers, and other decorative forms, with fillings ranging from traditional pork to walnuts, seafood, and sweet dessert dumplings. The concept originated in the 1980s to showcase Xi'an's dumpling mastery to visiting dignitaries [12].",
      time: "1.5-2 hours (lunch or dinner)",
      location:
        "De Fa Chang (Zhonggulou Square, near Bell Tower) is the most famous venue; Xi'an Dumpling Restaurant (Jiefang Road) is another well-known option",
      cost: "$12-25/p (set banquet menus with 15-20 dumpling varieties)",
      tips: [
        "De Fa Chang near the Bell Tower is the original and most celebrated venue \u2014 ask for the full banquet menu rather than a la carte",
        "The decorative dumplings (shaped like walruses, roses, ducks) are the visual highlight",
        "Pairs well with a Tang Dynasty show at the adjacent venues for a full evening [12]",
        "Lunch is less crowded than dinner service",
      ],
      priceTier: 2,
    },
    {
      slug: "bell-tower-drum-tower",
      name: "Bell Tower and Drum Tower",
      photo: { src: "/photos/xian/bell-tower-drum-tower.jpg", alt: "Bell Tower and Drum Tower, Xian" },
      topPick: false,
      description:
        "The two towers at the geographic heart of the old walled city. The Bell Tower (built 1384) stands at the intersection of Xi'an's four main avenues; the Drum Tower (built 1380) marks the entrance to the Muslim Quarter. Together they formed the city's ancient timekeeping system \u2014 the bell rang at dawn, the drum at dusk. Both offer excellent elevated views of the city center [6].",
      time: "1-1.5 hours (both towers)",
      location:
        "Central Xi'an, Zhonggulou Square. Metro Line 2 to Zhonglou",
      cost: "$6/p ($4 combo ticket for both towers)",
      tips: [
        "The Drum Tower is more interesting \u2014 it houses a collection of ancient drums and marks the entrance to the Muslim Quarter",
        "Evening illumination of both towers is spectacular \u2014 worth walking by even if you don't go inside",
        "Bell and drum performance demonstrations happen at set times (check at ticket window)",
        "The combo ticket saves $2 over buying separately [6]",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // \u2014 Signature Xi'an Dishes \u2014
    {
      slug: "lao-sun-jia",
      name: "Lao Sun Jia",
      chineseName: "\u8001\u5b59\u5bb6",
      category: "Signature Xi'an",
      topPick: true,
      location:
        "364 Dong Dajie (East Main Street), near Bell Tower, Beilin District",
      priceRange: "$5-10/p",
      cuisine: "Xi'an Muslim cuisine \u2014 yangrou paomo specialist since 1898",
      description:
        "The most famous yangrou paomo restaurant in Xi'an, operating since 1898. Yangrou paomo is Xi'an's signature dish: a rich lamb broth poured over bread you tear into tiny pieces by hand \u2014 the ritual of tearing is part of the experience. Five generations of the same family. The mutton soup is simmered overnight. No frills, all substance [13].",
      whatToOrder:
        "Yangrou paomo (lamb soup with hand-torn bread \u2014 you must tear the bread yourself into pea-sized pieces; the waiter will show you), youpo chemian (oiled hand-pulled noodles), lamb skewers.",
      bestFor: "Lunch (arrive before 11:30 AM to avoid the queue)",
      priceTier: 1,
    },
    {
      slug: "biang-biang-noodle-lao-zhangjia",
      name: "Lao Zhang Jia Biang Biang Noodles",
      chineseName: "\u8001\u5f20\u5bb6bi\u00e1ngbi\u00e1ng\u9762",
      category: "Signature Xi'an",
      topPick: true,
      location:
        "Dapi Yuan, Muslim Quarter side alley (off Beiyuanmen), Lianhu District",
      priceRange: "$2-5/p",
      cuisine: "Biang biang noodles \u2014 belt-wide hand-pulled noodles",
      description:
        "Biang biang noodles are Xi'an's most distinctive pasta: hand-pulled noodles stretched to belt-width, slapped dramatically against the counter (the 'biang' sound), then topped with chili oil, garlic, and vinegar. The noodle is so iconic that its Chinese character is one of the most complex in the language (58 strokes). This small shop in the Dapi Yuan side alley does them with exceptional chewiness and an aggressive chili oil [2].",
      whatToOrder:
        "Biang biang noodles with chili oil (youpo biang biang mian), add a lamb skewer or two on the side.",
      bestFor: "Lunch or casual dinner",
      priceTier: 1,
    },
    {
      slug: "jia-san-guantang-baozi",
      name: "Jia San Guantang Baozi",
      chineseName: "\u8d3e\u4e09\u704c\u6c64\u5305\u5b50",
      category: "Signature Xi'an",
      topPick: true,
      location:
        "93 Bei Yuan Men (Beiyuanmen Street), Muslim Quarter, Lianhu District",
      priceRange: "$3-6/p",
      cuisine: "Guantang baozi (soup-filled dumplings), halal",
      description:
        "Xi'an's answer to Shanghai's xiaolongbao \u2014 but halal and with a distinctly Northwest Chinese character. These steamed buns are filled with beef or lamb and a burst of hot savory soup. Jia San has been making them for three generations and is consistently ranked among Xi'an's essential eating experiences. The trick is biting a small hole, slurping the soup, then eating the bun [14].",
      whatToOrder:
        "Beef guantang baozi (soup dumplings \u2014 order 2 steamers of 8), babao xifan (sweet eight-treasure porridge) as a complement, pickled garlic on the side.",
      bestFor: "Lunch or afternoon snack",
      priceTier: 1,
    },
    {
      slug: "liu-jia-roujiamo",
      name: "Liu Jia Roujiamo",
      photo: { src: "/photos/xian/liu-jia-roujiamo.jpg", alt: "Liu Jia Roujiamo, Xian" },
      chineseName: "\u5218\u5bb6\u8089\u5939\u99cd",
      category: "Street Food",
      topPick: false,
      location:
        "Beiguangji Street, near the Drum Tower, Lianhu District (multiple locations)",
      priceRange: "$1-3/p",
      cuisine: "Roujiamo \u2014 Chinese 'hamburger'",
      description:
        "Roujiamo \u2014 braised, cumin-spiced chopped meat stuffed into a crispy baked flatbread \u2014 is Xi'an's most portable and addictive snack. Often called the 'Chinese hamburger' but predating the Western version by centuries. This well-established shop does the classic la zhi roujiamo (wax-braised pork version) and the Muslim Quarter lamb version with equal expertise [2].",
      whatToOrder:
        "La zhi roujiamo (wax-braised pork in flatbread) and/or cumin lamb roujiamo. Add a bowl of liangpi (cold rice noodles with chili oil) for the quintessential Xi'an combo.",
      bestFor: "Breakfast, lunch, or anytime snack",
      priceTier: 1,
    },
    {
      slug: "lao-mi-jia-youpo-chemian",
      name: "Lao Mi Jia Da Yu Chemian",
      chineseName: "\u8001\u7c73\u5bb6\u5927\u96e8\u626f\u9762",
      category: "Noodles",
      topPick: false,
      location:
        "Daxuexi Alley, Muslim Quarter (off the main Beiyuanmen drag), Lianhu District",
      priceRange: "$2-5/p",
      cuisine: "Hand-pulled noodles with chili oil",
      description:
        "Hidden in one of the Muslim Quarter's best side alleys, this family operation specializes in youpo chemian \u2014 hand-torn noodles doused in searingly hot chili oil poured over raw garlic and dried chili flakes, with the sizzle and fragrance hitting you the moment it arrives. It's a simpler, more rustic preparation than biang biang noodles and arguably more satisfying [2].",
      whatToOrder:
        "Youpo chemian (chili oil hand-pulled noodles), suanla tang (hot-and-sour soup), lamb pita soup if still hungry.",
      bestFor: "Lunch",
      priceTier: 1,
    },
    {
      slug: "tong-sheng-xiang",
      name: "Tong Sheng Xiang",
      photo: { src: "/photos/xian/tong-sheng-xiang.jpg", alt: "Tong Sheng Xiang, Xian" },
      chineseName: "\u540c\u76db\u7965",
      category: "Signature Xi'an",
      topPick: false,
      location:
        "Zhonggulou Square, near the Drum Tower, Beilin District",
      priceRange: "$5-10/p",
      cuisine: "Yangrou paomo and traditional Shaanxi cuisine",
      description:
        "A China Time-Honored Brand (Zhonghua Laozihao) with a century of history, Tong Sheng Xiang is the other great yangrou paomo institution alongside Lao Sun Jia. Some locals prefer the broth here \u2014 slightly more complex with a heavier spice profile. The ornate dining rooms feel more formal than typical Xi'an noodle shops. Listed as Intangible Cultural Heritage for its paomo technique [13].",
      whatToOrder:
        "Yangrou paomo (lamb bread-soup), suanla beef fensitang (hot-and-sour beef glass noodle soup), osmanthus cake for dessert.",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "xi-an-fan-zhuang",
      name: "Xi'an Fan Zhuang",
      photo: { src: "/photos/xian/xi-an-fan-zhuang.jpg", alt: "Xi'an Fan Zhuang, Xian" },
      chineseName: "\u897f\u5b89\u996d\u5e84",
      category: "Traditional Shaanxi",
      topPick: false,
      location:
        "298 Dong Dajie (East Main Street), Beilin District",
      priceRange: "$10-20/p",
      cuisine: "Full-spectrum traditional Shaanxi cuisine",
      description:
        "Xi'an's most venerable full-service restaurant, established in 1929 and serving the complete range of Shaanxi cuisine beyond noodles and paomo. This is where officials and local families go for celebratory meals. The Shaanxi banquet-style dishes \u2014 gourd chicken, braised pork, and hand-made wheat dishes in elaborate presentations \u2014 give a fuller picture of the region's culinary heritage [15].",
      whatToOrder:
        "Gourd chicken (hulu ji \u2014 crispy whole chicken in gourd shape), braised pork belly Shaanxi-style, hand-rolled cat-ear pasta (mao er duo), persimmon cake.",
      bestFor: "Dinner (for a more formal Shaanxi dining experience)",
      priceTier: 2,
    },
    {
      slug: "hong-hong-chao-shou",
      name: "Hong Hong Chao Shou",
      photo: { src: "/photos/xian/hong-hong-chao-shou.jpg", alt: "Hong Hong Chao Shou, Xian" },
      chineseName: "\u7ea2\u7ea2\u9178\u83dc\u7092\u7c73",
      category: "Street Food",
      topPick: false,
      location:
        "Multiple locations inside the Muslim Quarter, Lianhu District",
      priceRange: "$2-4/p",
      cuisine: "Stir-fried rice, liangpi, grilled skewers",
      description:
        "A beloved local chain within the Muslim Quarter known for suanfen (hot-and-sour glass noodles) and stir-fried rice dishes. No-frills plastic stools and metal tables, open late, packed with locals after 9 PM. The kind of place where you point at what the table next to you is eating [2].",
      whatToOrder:
        "Suanfen (hot-and-sour glass noodle soup), fried rice with lamb, liangpi (cold noodles with chili oil and sesame paste), grilled lamb skewers.",
      bestFor: "Late night snack or casual dinner",
      priceTier: 1,
    },
    {
      slug: "de-fa-chang",
      name: "De Fa Chang",
      photo: { src: "/photos/xian/de-fa-chang.jpg", alt: "De Fa Chang, Xian" },
      chineseName: "\u5fb7\u53d1\u957f",
      category: "Dumpling Banquet",
      topPick: true,
      location:
        "Zhonggulou Square, west of Bell Tower, Beilin District",
      priceRange: "$12-25/p",
      cuisine: "Dumpling banquet \u2014 multi-course artistic dumplings",
      description:
        "The original and most celebrated dumpling banquet restaurant in Xi'an, designated a China Time-Honored Brand. The full banquet features 15-20 courses of intricately shaped dumplings \u2014 each variety a different filling, cooking method, and decorative form (roses, fish, walnuts, ducks). A unique Xi'an cultural dining experience that showcases the city's dumpling mastery in theatrical fashion [12].",
      whatToOrder:
        "Full dumpling banquet set menu (ask for the 18-course version for the complete experience), mung bean soup to accompany.",
      bestFor: "Dinner \u2014 pairs well with a Tang Dynasty show afterward",
      priceTier: 2,
    },
    {
      slug: "spring-restaurant",
      name: "Chun Fa Sheng (Spring Restaurant)",
      photo: { src: "/photos/xian/spring-restaurant.jpg", alt: "Chun Fa Sheng (Spring Restaurant), Xian" },
      chineseName: "\u6625\u53d1\u751f",
      category: "Traditional Shaanxi",
      topPick: false,
      location:
        "Nan Yuan Men, South Gate area, Beilin District",
      priceRange: "$4-8/p",
      cuisine: "Hulu tou (gourd-head soup) \u2014 pork tripe and intestine soup with bread",
      description:
        "A century-old institution specializing in hulu tou \u2014 a rich, peppery pork tripe and intestine broth served over hand-torn bread, similar in concept to yangrou paomo but with pork offal instead of lamb. A deeply local dish that most tourists miss entirely. The fragrant, cumin-laced broth is simmered for hours. Not for the squeamish, but a genuine window into old Xi'an [15].",
      whatToOrder:
        "Hulu tou (gourd-head pork tripe soup with torn bread \u2014 the only thing to order here). Add extra chili oil.",
      bestFor: "Breakfast or lunch (the earlier the better \u2014 locals line up by 7 AM)",
      priceTier: 1,
    },
    {
      slug: "xiao-chao-paomo-stalls",
      name: "Xiao Chao Paomo (Various Stalls)",
      chineseName: "\u5c0f\u7092\u6ce1\u998d",
      category: "Street Food",
      topPick: false,
      location:
        "Multiple stalls in and around the Muslim Quarter; also found throughout the walled city",
      priceRange: "$3-5/p",
      cuisine: "Stir-fried paomo \u2014 the dry version of yangrou paomo",
      description:
        "While yangrou paomo is soupy, xiao chao paomo is its stir-fried cousin \u2014 torn bread pieces wok-fried with lamb, wood ear mushrooms, tomato, and chili in a concentrated sauce. More intensely flavored and less filling than the soup version. Many locals actually prefer it. Found at countless small stalls but the Muslim Quarter versions are consistently excellent [13].",
      whatToOrder:
        "Xiao chao paomo (stir-fried bread-and-lamb), add a side of pickled garlic and a glass of sour plum juice (suanmeitang).",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "persimmon-cake-stalls",
      name: "Shi Zi Bing (Persimmon Cake Stalls)",
      chineseName: "\u67ff\u5b50\u997c",
      category: "Street Food",
      topPick: false,
      location:
        "Throughout the Muslim Quarter, with the most famous stalls on Beiyuanmen Street",
      priceRange: "$0.50-1 per cake",
      cuisine: "Traditional Xi'an persimmon pastries",
      description:
        "October is persimmon season in Shaanxi, and these golden, pan-fried cakes made from ripe persimmon flesh mixed with flour and stuffed with walnut, osmanthus, and rose filling are the quintessential autumn treat. Crispy on the outside, molten-sweet inside. Sold from griddle carts throughout the Muslim Quarter \u2014 follow the smell of caramelizing fruit [2].",
      whatToOrder:
        "Shi zi bing (persimmon cake \u2014 get 2-3 as they're small), best eaten hot off the griddle.",
      bestFor: "Afternoon snack while exploring the Muslim Quarter",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Xi'an has 8 metro lines covering most tourist areas. Line 2 connects the train station to Bell Tower (city center) and south to the museum district. $0.30-0.70 per ride.",
      "Taxis/Rideshare: Didi (China's Uber) works well in Xi'an. Most cross-city rides are $3-5. Essential for reaching Terracotta Warriors if not taking the tourist bus.",
      "Tourist Bus 306/Line 5: Runs from Xi'an Train Station to Terracotta Warriors via Huaqing Hot Springs ($1). Efficient and clearly marked \u2014 ignore touts offering 'private' tourist buses.",
      "City Wall: Bikeable and walkable; the wall itself is a transportation route between gates. Start at South Gate for best bike rental access.",
    ],
    "Food & Dining": [
      "Ordering strategy: In the Muslim Quarter, eat at multiple stalls rather than sitting down at one restaurant. Budget $5-8 for a full food crawl hitting 4-5 specialties.",
      "Yangrou paomo ritual: You will be given a bowl and a piece of flatbread \u2014 tear the bread into tiny pea-sized pieces yourself. The smaller the pieces, the better the soup absorbs. Waiter takes your bowl to the kitchen once torn.",
      "Halal awareness: Most Muslim Quarter restaurants are halal (qingzhen). Do not bring outside pork or alcohol into halal establishments.",
      "Tipping: Not expected in Xi'an. No service charges at local restaurants.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are dominant. Set up international Alipay before the trip. Carry cash for small Muslim Quarter stalls.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, Instagram, and most Western apps are blocked in mainland China.",
      "Language: Very little English spoken outside major hotels and the Shaanxi History Museum. Google Translate camera mode is essential for menus. Learn '\u8fd9\u4e2a' (zh\u00e8ge \u2014 'this one') for pointing-and-ordering.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Tickets: Terracotta Warriors, Shaanxi History Museum (free but timed entry), and Huashan all require advance online booking via WeChat mini-programs. October is peak season \u2014 book 3-5 days ahead.",
      "Terracotta Warriors timing: Go early (arrive 8:30 AM opening) or after 2 PM. Midday is overwhelmed by tour groups.",
      "Huashan preparation: If attempting the hike, start very early. Bring sturdy shoes, water, snacks, layers, and a headlamp if doing the overnight sunrise route. Check weather forecasts \u2014 the mountain closes in heavy rain or snow.",
      "Xi'an pairs naturally with Pingyao and Datong (Shanxi province) for a 'northern history circuit' \u2014 high-speed rail connects them efficiently.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Terracotta Warriors Visitor Guide \u2014 China Highlights (https://www.chinahighlights.com/xian/terracotta-army/)",
    "[2] Muslim Quarter Food Guide \u2014 Lost Plate (https://lostplate.com/xian-muslim-quarter-food-guide/)",
    "[3] Xi'an October Weather \u2014 China Discovery (https://www.chinadiscovery.com/xian-tours/weather/weather-in-october.html)",
    "[4] Forest of Steles (Beilin Museum) \u2014 China Highlights (https://www.chinahighlights.com/xian/attraction/the-forest-of-steles.htm)",
    "[5] Shaanxi History Museum \u2014 China Discovery (https://www.chinadiscovery.com/xian/shaanxi-history-museum.html)",
    "[6] Xi'an City Wall Guide \u2014 China Highlights (https://www.chinahighlights.com/xian/attraction/xian-city-wall.htm)",
    "[7] Great Mosque of Xi'an \u2014 China Discovery (https://www.chinadiscovery.com/xian/great-mosque.html)",
    "[8] Huaqing Hot Springs Guide \u2014 China Highlights (https://www.chinahighlights.com/xian/attraction/huaqing-hot-springs.htm)",
    "[9] Small Wild Goose Pagoda \u2014 China Discovery (https://www.chinadiscovery.com/xian/small-wild-goose-pagoda.html)",
    "[10] Huashan Hiking Guide \u2014 China Highlights (https://www.chinahighlights.com/xian/attraction/huashan.htm)",
    "[11] Tang Dynasty Music and Dance \u2014 Travel China Guide (https://www.travelchinaguide.com/attraction/shaanxi/xian/tang-dynasty-show.htm)",
    "[12] Xi'an Dumpling Banquet Guide \u2014 China Discovery (https://www.chinadiscovery.com/xian/xian-food/xian-dumpling-banquet.html)",
    "[13] Yangrou Paomo Guide \u2014 Lost Plate (https://lostplate.com/xian-best-restaurants-where-to-eat-guide/)",
    "[14] Jia San Guantang Baozi \u2014 TripAdvisor (https://www.tripadvisor.com/Restaurant_Review-g298557-d1661711-Reviews-Jia_San_Guan_Tang_Bao_Zi-Xi_an_Shaanxi.html)",
    "[15] Traditional Shaanxi Cuisine Guide \u2014 China Explorer Tour (https://chinaexplorertour.com/2025/blog/xian-traditional-shaanxi-cuisine-guide/)",
  ],
};
