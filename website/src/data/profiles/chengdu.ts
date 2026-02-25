import type { CityProfile } from "@/types";

export const chengduProfile: CityProfile = {
  slug: "chengdu",
  heroPhoto: { src: "/photos/chengdu/_hero.jpg", alt: "Jinli commercial street in Chengdu, Sichuan", credit: "Fanghong" },
  executiveSummary: [
    "Chengdu is the undisputed food capital of China and the only city in Asia to hold UNESCO Creative City of Gastronomy status since 2010 [1]. Sichuan cuisine is not just about heat — it is about \"mala,\" the numbing-spicy interplay of Sichuan peppercorn and dried chili that creates a tingling, almost electric sensation on the tongue unlike anything in Western cooking. October in Chengdu brings mild, misty weather (60-75°F), fewer tourists than the summer peak, and the city's famous laid-back rhythm at its most inviting. The locals have a saying — \"shao bu nao\" (少不闹), loosely meaning life is too short to rush — and it shows in the pace of every teahouse, every park, every drawn-out hotpot dinner.",
    "Beyond the food, Chengdu is a city that rewards wandering and lingering. The teahouse culture is unmatched anywhere in China — not the performative tea ceremonies of Beijing or Hangzhou, but genuinely communal outdoor bamboo-chair teahouses where retired men play mahjong for hours, ear-cleaning vendors work the crowd, and you can sit with a covered-bowl gaiwan tea refilled endlessly for $1.50 [2]. The Yulin Lu neighborhood is ground zero for Chengdu's street-level food culture, a residential area where tiny family-run restaurants serve dishes that would earn accolades in any world capital. The city's contemporary art scene, centered on the Eastern Suburb Memory industrial park and the ambitious Chengdu Museum of Contemporary Art, is one of China's most vital.",
    "For active travelers, the surrounding Sichuan mountains offer outstanding day-trip hiking. Mount Qingcheng, the birthplace of Taoism and a UNESCO World Heritage site, combines forested mountain trails with ancient temples in a half-day hike just 45 minutes from the city center [3]. Dujiangyan, the 2,200-year-old irrigation system that still functions today, sits at the mountain's base and makes a natural pairing. Sichuan opera's fire-breathing face-changing (bian lian) performances are visually electrifying even without understanding the dialogue. The giant panda research base, while undeniably touristy, remains a genuinely world-class conservation facility where seeing pandas in semi-natural habitat is a singular experience [4].",
  ],
  famousFor: [
    "Sichuan cuisine (UNESCO City of Gastronomy)",
    "teahouse culture",
    "giant pandas",
    "Sichuan opera face-changing",
    "Mount Qingcheng (birthplace of Taoism)",
    "hotpot",
    "mahjong culture",
    "laid-back lifestyle",
  ],
  whyItFits: [
    "Best food city in China — possibly the world's greatest street food scene",
    "Outstanding day hiking at Mount Qingcheng (UNESCO) and surrounding Sichuan mountains",
    "Teahouse culture is the most authentic communal experience in urban China",
    "Yulin Lu and Kuanzhai Xiangzi neighborhoods reward food-focused exploration on foot",
    "Genuinely relaxed pace that encourages lingering — the opposite of rushed tourism",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 73,
      avgLow: 59,
      rainChance: 30,
      precip: 1.2,
      sunrise: "6:50 AM",
      sunset: "6:35 PM",
      conditions: "Warm, overcast; frequent mist; comfortable for walking [5]",
    },
    {
      period: "Mid Oct",
      avgHigh: 68,
      avgLow: 55,
      rainChance: 25,
      precip: 0.9,
      sunrise: "7:02 AM",
      sunset: "6:18 PM",
      conditions: "Mild, less rain; best balance of weather and fewer crowds",
    },
    {
      period: "Late Oct",
      avgHigh: 63,
      avgLow: 50,
      rainChance: 20,
      precip: 0.6,
      sunrise: "7:15 AM",
      sunset: "6:03 PM",
      conditions: "Cooler, drier; light layers needed; ginkgo trees begin turning gold",
    },
  ],
  whatToPack:
    "Layers for 50-73°F range. Light rain jacket essential (Chengdu is famously overcast and misty). Comfortable walking shoes for city food crawls, sturdy hiking shoes for Mount Qingcheng. Umbrella more useful than a heavy rain shell.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "yulin-lu-area",
      name: "Yulin Lu Area",
      topPick: true,
      description:
        "The epicenter of Chengdu's residential food culture. A grid of tree-lined streets in the south-central city where tiny family-run restaurants, fly restaurants (cangying guan), barbecue stalls, and neighborhood teahouses outnumber tourists a thousand to one. This is where Chengdu locals actually eat, drink beer on plastic stools, and play mahjong until midnight [6].",
      whyItFitsUs:
        "The single best neighborhood for food-focused travelers in all of China. Dozens of legendary hole-in-the-wall restaurants within a 15-minute walk. Deeply residential, totally walkable, and buzzing with local life from morning congee to late-night skewer stalls.",
      nearby:
        "Wuhou Shrine (10 min walk), Jinli Ancient Street (12 min walk), People's Park (15 min taxi)",
      hotels:
        "The Temple House (top pick — luxury boutique in restored heritage courtyard on Sino-Ocean Taikoo Li), BuddhaZen Hotel (affordable courtyard boutique near Wuhou Shrine)",
    },
    {
      slug: "kuanzhai-xiangzi-wide-narrow-alleys",
      name: "Kuanzhai Xiangzi (Wide & Narrow Alleys)",
      topPick: false,
      description:
        "Three parallel Qing Dynasty alleys (Wide Alley, Narrow Alley, Well Alley) restored as Chengdu's premier historic walking district. The main alleys are touristy, but the side streets and surrounding blocks retain genuine residential character with excellent teahouses and small restaurants [7].",
      whyItFitsUs:
        "Best area for teahouse culture — several traditional bamboo-chair teahouses within walking distance. Pairs well with People's Park. More polished than Yulin Lu but still atmospheric for an afternoon wander.",
      nearby:
        "People's Park (5 min walk), Qingyang Palace (10 min walk), Sichuan Museum (15 min walk)",
      hotels:
        "The Ritz-Carlton Chengdu (5 min walk), various boutique guesthouses on surrounding streets",
    },
    {
      slug: "taikoo-li-chunxi-lu",
      name: "Taikoo Li / Chunxi Lu — Central Hub",
      topPick: false,
      description:
        "Chengdu's modern commercial core surrounding the ancient Daci Temple. Sino-Ocean Taikoo Li is an open-air luxury retail complex built around and preserving the 1,600-year-old temple — a striking juxtaposition of ancient and ultra-modern that defines contemporary Chengdu [8].",
      whyItFitsUs:
        "Most convenient central base with excellent transit connections. Walking distance to the best Sichuan opera venue (Shufeng Yayun) and traditional food streets. The Temple House hotel sits within the complex.",
      nearby:
        "Daci Temple (immediate), Chunxi Lu pedestrian street (immediate), Shufeng Yayun Opera House (5 min walk), Anshun Bridge (10 min walk)",
      hotels:
        "The Temple House (within Taikoo Li — top pick for location and design), Daci Temple Zen Hotel",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "mount-qingcheng-day-hike",
      name: "Mount Qingcheng Day Hike (Front Mountain)",
      photo: { src: "/photos/chengdu/mount-qingcheng-day-hike.jpg", alt: "Mount Qingcheng Day Hike (Front Mountain), Chengdu" },
      topPick: true,
      description:
        "The birthplace of Taoism and a UNESCO World Heritage site. The Front Mountain (Qian Shan) trail winds through ancient forests, past Taoist temples dating to the Jin Dynasty, and up stone staircases to Shangqing Palace at 1,600m elevation. The mountain is sacred to Taoism the way Mount Sinai is to Judaism — this is where Zhang Daoling founded the religion in 142 AD [3].",
      time: "Full day (1 hr each way by car + 4-5 hrs hiking round trip)",
      location:
        "Dujiangyan City, ~45 min west of central Chengdu by high-speed rail (¥10/$1.40) or 1 hr by car",
      cost: "$14/p ($12 entrance + $2 round-trip high-speed rail)",
      tips: [
        "Take the Chengdu-Dujiangyan high-speed rail from Xipu Station — 30 min, cheap, easy",
        "Hike up, take the cable car down ($5) to save your knees — the ascent is the scenic part",
        "The Back Mountain (Hou Shan) is wilder and less crowded but requires 6-7 hours — for serious hikers only",
        "Combine with Dujiangyan Irrigation System in the afternoon (they are 15 min apart) [3]",
      ],
      priceTier: 1,
    },
    {
      slug: "dujiangyan-irrigation-system",
      name: "Dujiangyan Irrigation System",
      photo: { src: "/photos/chengdu/dujiangyan-irrigation-system.jpg", alt: "Dujiangyan Irrigation System, Chengdu" },
      topPick: false,
      description:
        "A 2,200-year-old hydraulic engineering marvel built in 256 BC by Li Bing that still irrigates the entire Chengdu Plain today — making Sichuan the \"Land of Abundance.\" No mortar, no dam, just brilliant use of natural water flow. UNESCO World Heritage alongside Mount Qingcheng [9].",
      time: "2-3 hours (pairs with Mount Qingcheng for a full day)",
      location:
        "Dujiangyan City, adjacent to Mount Qingcheng. 15 min by taxi between the two sites",
      cost: "$12/p ($12 entrance)",
      tips: [
        "Hire a local guide ($40-60 for the group) — the engineering is invisible without explanation",
        "Walk across the Anlan Suspension Bridge for the best perspective on how the system splits the river",
        "The Erwang Temple above the system offers panoramic views of the entire water-diversion network [9]",
        "Visit in the morning before Mount Qingcheng, or afternoon after descending",
      ],
      priceTier: 1,
    },
    {
      slug: "chengdu-research-base-of-giant-panda-breeding",
      name: "Chengdu Research Base of Giant Panda Breeding",
      photo: { src: "/photos/chengdu/chengdu-research-base-of-giant-panda-breeding.jpg", alt: "Chengdu Research Base of Giant Panda Breeding, Chengdu" },
      topPick: true,
      description:
        "The world's foremost giant panda conservation and breeding facility, home to over 200 giant pandas and 80+ red pandas in large semi-natural enclosures. October is ideal — the pandas are active in cooler weather and summer crowds have thinned. The new northern expansion area (opened 2023) dramatically increased space and reduced crowding [4].",
      time: "3-4 hours (half day including transit)",
      location:
        "Northern Chengdu suburbs, ~40 min by taxi from central city. Metro Line 3 to Panda Avenue + shuttle bus",
      cost: "$8/p ($8 entrance)",
      tips: [
        "Arrive at 7:30 AM opening — pandas are most active during morning feeding (8:00-10:00 AM) and often sleep by midday [4]",
        "Head directly to the sub-adult and yearling enclosures first (most playful behavior), then work backward to adults",
        "The new northern zone is less crowded and has the best-designed habitats",
        "Skip the expensive volunteer programs ($300+) — the brief encounters don't justify the cost",
      ],
      priceTier: 1,
    },
    {
      slug: "peoples-park-teahouse-culture",
      name: "People's Park and Teahouse Culture",
      photo: { src: "/photos/chengdu/peoples-park-teahouse-culture.jpg", alt: "People's Park and Teahouse Culture, Chengdu" },
      topPick: true,
      description:
        "The beating heart of Chengdu's public life. Heming Teahouse, operating since 1920 inside the park, is the single most iconic teahouse in China — hundreds of bamboo chairs under ancient trees where locals sip gaiwan (covered-bowl) jasmine tea, get their ears cleaned by roaming craftsmen, play mahjong, and read newspapers for entire afternoons [2].",
      time: "2-3 hours (a leisurely afternoon)",
      location:
        "Central Chengdu, Qingyang District. Metro Line 2 to People's Park. Walking distance from Kuanzhai Xiangzi",
      cost: "$2-3/p (tea refilled endlessly for one price)",
      tips: [
        "Order gaiwan jasmine tea ($1.50-2.50) and settle into a bamboo chair — there is no rush",
        "Try the ear-cleaning service ($3-5) from the roaming craftsmen — a uniquely Chengdu experience [2]",
        "Visit on a weekday afternoon for the most authentic atmosphere (weekends are busy with younger crowds)",
        "The matchmaking corner (xiangqin jiao) where parents post their children's dating profiles is fascinating and unique to Chengdu",
      ],
      priceTier: 1,
    },
    {
      slug: "sichuan-opera-face-changing",
      name: "Sichuan Opera Face-Changing (Bian Lian) Performance",
      photo: { src: "/photos/chengdu/sichuan-opera-face-changing.jpg", alt: "Sichuan Opera Face-Changing (Bian Lian) Performance, Chengdu" },
      topPick: true,
      description:
        "Sichuan opera's signature art: performers change elaborately painted silk masks in fractions of a second using concealed mechanisms that remain a closely guarded secret. Combined with fire-breathing, shadow puppetry, and comedic interludes, it is the most visually spectacular traditional performance art in China [10].",
      time: "1.5-2 hours (evening, typically 8:00 PM)",
      location:
        "Shufeng Yayun Opera House, Huaxingzheng Street (near Chunxi Lu). Or Jinjiang Theatre",
      cost: "$15-35/p (depending on seat tier)",
      tips: [
        "Shufeng Yayun is the most atmospheric venue — a traditional courtyard theater with tea service during the show [10]",
        "Book mid-range seats ($20-25) — front-row is too close and side angles miss face-change effects",
        "Arrive 30 min early for complimentary tea and ear-cleaning (at Shufeng Yayun)",
        "The fire-breathing act is genuinely startling — sit back and enjoy",
      ],
      priceTier: 2,
    },
    {
      slug: "yulin-lu-food-crawl",
      name: "Yulin Lu Neighborhood Food Crawl",
      topPick: true,
      description:
        "A self-guided evening food crawl through Chengdu's most celebrated residential food neighborhood. Within a few blocks: legendary mapo tofu, dry-pot rabbit, cold noodles, skewer stalls, craft beer bars, and some of the best hole-in-the-wall Sichuan cooking on earth. This is how Chengdu locals eat — on plastic stools on the sidewalk, sharing cold beer and conversation [6].",
      time: "3-4 hours (evening, start around 5:30-6:00 PM)",
      location:
        "Yulin Lu area, south-central Chengdu. Metro Line 3 to Provincial Gymnasium, then 10 min walk south",
      cost: "$8-15/p (grazing across 4-5 stops)",
      tips: [
        "Start at Yulin Chuanchuanxiang for skewers, then work south toward Zhimin Lu",
        "Eat small portions at each stop — the goal is variety, not volume",
        "Bring a translation app — almost no English menus in this area",
        "The late-night barbecue stalls (after 9 PM) are where the real atmosphere begins [6]",
      ],
      priceTier: 1,
    },
    {
      slug: "wuhou-shrine-and-jinli-street",
      name: "Wuhou Shrine and Jinli Ancient Street",
      photo: { src: "/photos/chengdu/wuhou-shrine-and-jinli-street.jpg", alt: "Wuhou Shrine and Jinli Ancient Street, Chengdu" },
      topPick: false,
      description:
        "The only shrine in China dedicated to both a ruler (Liu Bei) and his minister (Zhuge Liang) from the Three Kingdoms period (220-280 AD). The adjacent Jinli Ancient Street is touristy but worth a brief walk for the architecture and street snacks — particularly the legendary zhong shuijiao (sweet-water dumplings) and san da pao (glutinous rice balls) [11].",
      time: "2-3 hours",
      location:
        "Wuhou District, south-central Chengdu. Metro Line 3 to Provincial Gymnasium. 10 min walk from Yulin Lu",
      cost: "$7/p ($7 Wuhou Shrine entrance; Jinli Street is free)",
      tips: [
        "Visit the shrine first (quieter in the morning), then walk into Jinli for snacks",
        "The Red Wall Bamboo Path connecting the shrine to Jinli is one of Chengdu's most photographed spots [11]",
        "Three Kingdoms history enthusiasts should hire a guide — the stories of Zhuge Liang's military genius are extraordinary",
        "Skip Jinli's sit-down restaurants (overpriced tourist traps) — stick to the walk-up snack stalls",
      ],
      priceTier: 1,
    },
    {
      slug: "sichuan-cuisine-cooking-class",
      name: "Sichuan Cuisine Cooking Class",
      photo: { src: "/photos/chengdu/sichuan-cuisine-cooking-class.jpg", alt: "Sichuan Cuisine Cooking Class, Chengdu" },
      topPick: false,
      description:
        "Hands-on class starting with a morning market visit to source Sichuan peppercorns, doubanjiang (fermented chili bean paste), and fresh ingredients, followed by cooking 4-5 signature Sichuan dishes. Learning the \"mala\" spice philosophy — the precise balance of numbing and heat — is a skill you bring home [12].",
      time: "4-5 hours (including market visit)",
      location:
        "Various operators in central Chengdu. Best classes start at local wet markets",
      cost: "$30-50/p (per person, all-inclusive)",
      tips: [
        "Book a class that includes a wet market visit — the market is half the education [12]",
        "Request to make mapo tofu, kung pao chicken, and dan dan noodles — the foundational Sichuan trinity",
        "Smaller group sizes (under 8) allow more hands-on time and better instructor interaction",
        "Ask your instructor about the difference between Sichuan peppercorn varieties (green vs. red) — it transforms your understanding of the cuisine",
      ],
      priceTier: 2,
    },
    {
      slug: "chengdu-museum-of-contemporary-art",
      name: "Chengdu Museum of Contemporary Art (MoCA)",
      photo: { src: "/photos/chengdu/chengdu-museum-of-contemporary-art.jpg", alt: "Chengdu Museum of Contemporary Art (MoCA), Chengdu" },
      topPick: false,
      description:
        "Designed by Zaha Hadid Architects and opened in 2023, this striking building in the Tianfu Art Park complex houses rotating exhibitions of Chinese contemporary art with a strong focus on Sichuan's historically rebellious art scene — the province produced many of China's most important contemporary artists [13].",
      time: "2-3 hours",
      location:
        "Tianfu Art Park, south Chengdu. Metro Line 6 to Xihelin",
      cost: "Free (advance reservation required)",
      tips: [
        "Book free tickets on WeChat mini-program 1-3 days ahead — walk-ins often turned away",
        "The building itself is the art — spend time exploring the flowing interior architecture",
        "Combine with the adjacent Tianfu Art Park for a walk along the lake [13]",
        "Check exhibition schedule online — the quality varies significantly between shows",
      ],
      priceTier: 0,
    },
    {
      slug: "eastern-suburb-memory-art-district",
      name: "Eastern Suburb Memory (East Art District)",
      photo: { src: "/photos/chengdu/eastern-suburb-memory-art-district.jpg", alt: "Eastern Suburb Memory (East Art District), Chengdu" },
      topPick: false,
      description:
        "A repurposed Soviet-era electronics factory turned creative district with independent galleries, live music venues, indie bookshops, and street art. Less polished than Beijing's 798 — more raw, more local, more genuinely Chengdu in spirit. The district also hosts regular outdoor concerts and cultural events [14].",
      time: "2-3 hours (afternoon into evening for best atmosphere)",
      location:
        "Chenghua District, east-central Chengdu. Metro Line 4 to Eastern Suburb Memory",
      cost: "Free (gallery admission varies, most free)",
      tips: [
        "Visit in late afternoon — the cafes and bars come alive toward evening",
        "Check for live music events happening during your visit (Chengdu has China's best indie music scene after Beijing) [14]",
        "The industrial architecture and street art make for excellent photography",
        "Little Bar (Xiao Jiuba) nearby is one of China's legendary small live-music venues",
      ],
      priceTier: 0,
    },
    {
      slug: "hotpot-experience",
      name: "Sichuan Hotpot Experience",
      photo: { src: "/photos/chengdu/hotpot-experience.jpg", alt: "Sichuan Hotpot Experience, Chengdu" },
      topPick: true,
      description:
        "Hotpot in Chengdu is not a meal — it is a ritual. A bubbling cauldron of chili oil, Sichuan peppercorns, and 30+ spices sits at the center of the table while you cook thinly sliced meats, vegetables, and offal tableside. The communal, interactive nature makes it the ideal group dining experience. Chengdu hotpot differs from Chongqing's — slightly less aggressive heat, more emphasis on dipping sauce customization [15].",
      time: "2-3 hours (dinner — hotpot cannot be rushed)",
      location: "Citywide; best options in Yulin Lu area and along Zhimin Lu",
      cost: "$12-20/p (including beer)",
      tips: [
        "Order a split pot (yuanyang guo) with one spicy and one mild broth if anyone in the group has low spice tolerance [15]",
        "Must-order items: beef tripe (mao du — cook exactly 15 seconds), sliced beef throat (huanghou), duck intestine (ya chang), potato slices, lotus root",
        "Build your own dipping sauce at the sauce bar — classic Chengdu style is sesame oil + crushed garlic + chopped cilantro",
        "Go to a local neighborhood joint, not a chain — the atmosphere is half the experience",
      ],
      priceTier: 1,
    },
    {
      slug: "qingyang-palace-taoist-temple",
      name: "Qingyang Palace (Green Ram Temple)",
      photo: { src: "/photos/chengdu/qingyang-palace-taoist-temple.jpg", alt: "Qingyang Palace (Green Ram Temple), Chengdu" },
      topPick: false,
      description:
        "The oldest and most significant Taoist temple in western China, founded during the Zhou Dynasty (over 2,500 years ago). Still an active place of worship with resident Taoist monks. The temple's serene grounds include a traditional teahouse where monks and locals mingle over tea — one of the most peaceful spots in the city [16].",
      time: "1.5-2 hours",
      location:
        "Qingyang District, west-central Chengdu. Metro Line 5 to Qingyang Palace. 10 min walk from People's Park",
      cost: "$1.50/p ($1.50 entrance)",
      tips: [
        "Visit in the morning when monks are chanting — the atmosphere is genuinely sacred",
        "The bronze ram statues at the entrance are Chengdu icons — rubbing them is said to bring good health [16]",
        "The temple teahouse inside the grounds is less famous but equally atmospheric to Heming Teahouse",
        "Combine with People's Park (5-10 min walk) for a contemplative morning",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Hotpot —
    {
      slug: "da-long-yi-hotpot",
      name: "Da Long Yi Hotpot",
      photo: { src: "/photos/chengdu/da-long-yi-hotpot.jpg", alt: "Da Long Yi Hotpot, Chengdu" },
      chineseName: "大龙燚火锅",
      category: "Hotpot",
      topPick: true,
      location:
        "Multiple locations; Yulin Lu branch is most atmospheric (Yulin Zhong Lu 335)",
      priceRange: "$12-18/p",
      cuisine: "Traditional Chengdu-style mala hotpot",
      description:
        "One of Chengdu's most beloved local hotpot chains, famous for its intensely numbing-spicy broth with a thick layer of crimson chili oil. The beef tripe (mao du) and duck intestine (ya chang) are benchmark quality. Always packed with locals — a ringing endorsement [15].",
      whatToOrder:
        "Mao du (beef tripe — cook 15 seconds only), ya chang (duck intestine), sliced beef, potato, lotus root, frozen tofu, quail eggs. Pair with local Snowflake beer.",
      bestFor: "Dinner (arrive before 6 PM or after 8:30 PM to reduce wait)",
      priceTier: 1,
    },
    {
      slug: "xiaolongkan-hotpot",
      name: "Xiaolongkan Hotpot",
      chineseName: "小龙坎火锅",
      category: "Hotpot",
      topPick: false,
      location:
        "Multiple locations citywide; Kuanzhai Xiangzi branch for convenience",
      priceRange: "$12-18/p",
      cuisine: "Sichuan hotpot with signature tallow (niuyou) base",
      description:
        "Chengdu's other hotpot heavyweight, distinguished by its pure beef tallow broth that delivers a richer, more savory depth than oil-based competitors. The late-night branches stay open until 2-4 AM, making it a perfect post-opera stop [15].",
      whatToOrder:
        "Tallow-base broth (niuyou guodi), thousand-layer tripe, brain flower (naohua — adventurous but excellent), enoki mushrooms, luncheon meat.",
      bestFor: "Late dinner or post-opera midnight hotpot",
      priceTier: 1,
    },

    // — Sichuan Classics —
    {
      slug: "chen-mapo-tofu",
      name: "Chen Mapo Tofu",
      photo: { src: "/photos/chengdu/chen-mapo-tofu.jpg", alt: "Chen Mapo Tofu, Chengdu" },
      chineseName: "陈麻婆豆腐",
      category: "Sichuan Classics",
      topPick: true,
      location:
        "Qingyang District, 197 Xi Yulong Jie (original location near Luomashi). Multiple branches",
      priceRange: "$5-10/p",
      cuisine: "Home of the original mapo tofu (since 1862)",
      description:
        "The restaurant that invented mapo tofu 160+ years ago. The dish here is a revelation compared to any version outside Sichuan — silky tofu swimming in a fiery slick of chili oil and ground beef, with a numbing Sichuan peppercorn finish that builds and builds. The original location has zero pretension [17].",
      whatToOrder:
        "Mapo tofu (obviously — order it \"traditional style\"), dan dan noodles, twice-cooked pork (huiguo rou), dry-fried green beans.",
      bestFor: "Lunch (less crowded than dinner, pairs with nearby Qingyang Palace visit)",
      priceTier: 1,
    },
    {
      slug: "yulin-chuanchuanxiang",
      name: "Yulin Chuanchuanxiang",
      chineseName: "玉林串串香",
      category: "Sichuan Classics",
      topPick: true,
      location:
        "Yulin Lu area, near the intersection of Yulin Nan Lu and Yulin Heng Jie",
      priceRange: "$6-12/p",
      cuisine: "Chuanchuanxiang (Sichuan skewer hotpot)",
      description:
        "Chuanchuanxiang is Chengdu's most democratic food format: pick bamboo skewers loaded with meats, vegetables, and offal from refrigerated displays, then cook them in a communal pot of spicy broth. Pay by counting your empty skewers. It is hotpot's more casual, more fun cousin — and this is its spiritual home in the Yulin Lu neighborhood [6].",
      whatToOrder:
        "Grab a wide variety: beef, lotus root, potato, quail eggs, mushrooms, tofu skin, duck gizzards. Start with 20-30 skewers per person ($0.15-0.30 each). Add cold beer.",
      bestFor: "Dinner — the sidewalk tables after dark are quintessential Chengdu",
      priceTier: 1,
    },
    {
      slug: "zhong-shuijiao",
      name: "Zhong Dumplings (Zhong Shuijiao)",
      chineseName: "钟水饺",
      category: "Sichuan Classics",
      topPick: false,
      location:
        "Multiple locations; Chunxi Lu branch is most accessible, original on Tidu Jie",
      priceRange: "$2-5/p",
      cuisine: "Chengdu-style sweet-spicy pork dumplings (since 1893)",
      description:
        "Chengdu's signature dumpling — smaller and more delicate than northern jiaozi, filled with pure pork, and doused in a sweet-spicy soy sauce with chili oil that is unlike any other dumpling sauce in China. A Chengdu institution since the late Qing Dynasty [18].",
      whatToOrder:
        "Zhong shuijiao (the namesake — order 2 bowls for the table), dan dan noodles, chaoshou (Sichuan wontons in chili oil).",
      bestFor: "Quick lunch or snack stop between sightseeing",
      priceTier: 1,
    },
    {
      slug: "lao-ma-tou-hotpot",
      name: "Lao Ma Tou Hotpot",
      chineseName: "老码头火锅",
      category: "Hotpot",
      topPick: false,
      location:
        "Jinjiang District, near Anshun Bridge (Binjiang Dong Lu)",
      priceRange: "$14-22/p",
      cuisine: "Old-style Chengdu hotpot with river views",
      description:
        "A slightly more refined hotpot experience in a beautiful riverside location near the historic Anshun Bridge. The broth is traditional Chengdu style — milder than Chongqing but still robustly spiced. The terrace seating overlooking the Jin River at night is magical [15].",
      whatToOrder:
        "Signature old-style broth, fresh yellow-throat fish (huanghou yu), sliced lamb, winter melon, handmade meatballs.",
      bestFor: "Dinner — request riverside terrace seating",
      priceTier: 2,
    },

    // — Street Food & Snacks —
    {
      slug: "he-xiaoxian-dumplings",
      name: "He Xiaoxian Dumplings",
      chineseName: "贺小仙饺子",
      category: "Street Food",
      topPick: false,
      location:
        "Yulin Lu area, Yulin Dong Lu",
      priceRange: "$3-6/p",
      cuisine: "Sichuan-style dumplings and wontons",
      description:
        "A tiny neighborhood dumpling shop beloved by Yulin Lu locals. The chaoshou (Sichuan wontons) in red chili oil are a masterclass in the balance between tender wrapper, savory pork filling, and electric mala sauce. No English menu, no ambiance, exceptional food.",
      whatToOrder:
        "Hongyou chaoshou (red-oil wontons), zheng jiao (steamed dumplings), suanla fen (hot-and-sour sweet potato noodles).",
      bestFor: "Lunch or afternoon snack",
      priceTier: 1,
    },
    {
      slug: "yan-jianbing",
      name: "Yan Jianbing (Yan's Pancakes)",
      photo: { src: "/photos/chengdu/yan-jianbing.jpg", alt: "Yan Jianbing (Yan's Pancakes), Chengdu" },
      chineseName: "严记煎饼",
      category: "Street Food",
      topPick: false,
      location: "Changshun Shang Jie, near Wenshu Monastery",
      priceRange: "$1-3/p",
      cuisine: "Savory Sichuan-style jianbing (breakfast crepes) and snacks",
      description:
        "A morning street vendor near Wenshu Monastery making savory egg crepes with Sichuan chili flakes, scallions, and crispy wonton skin. The perfect grab-and-go breakfast before exploring the monastery grounds.",
      whatToOrder:
        "Jianbing with extra chili and egg, soy milk (doujiang), youtiao (fried dough stick).",
      bestFor: "Breakfast (before 9 AM, pairs with Wenshu Monastery visit)",
      priceTier: 1,
    },

    // — Regional & Refined —
    {
      slug: "yuzhi-lan",
      name: "Yu Zhi Lan",
      chineseName: "玉芝兰",
      category: "Splurge",
      topPick: true,
      location:
        "Qingyang District, near Kuanzhai Xiangzi (reservation address provided upon booking)",
      priceRange: "$80-140/p",
      cuisine: "Elevated Sichuan fine dining — China's most celebrated Sichuan restaurant",
      description:
        "Chef Lan Guijun's 12-seat private dining room serves a multi-course menu that redefines Sichuan cuisine at the highest level. Each dish explores a different Sichuan flavor profile — mala, yuxiang, guaiwei, suanla — with exquisite ingredients and technique. Two Michelin stars. The experience is intimate, unhurried, and revelatory [19].",
      whatToOrder:
        "Chef's tasting menu only (no a la carte). 15-20 courses showcasing the full range of Sichuan's 24 recognized flavor profiles.",
      bestFor: "Dinner. Book 2-4 weeks in advance — only 12 seats per seating [19].",
      priceTier: 4,
    },
    {
      slug: "ma-wangzi-chuan-cai-guan",
      name: "Ma Wangzi",
      chineseName: "马旺子川菜馆",
      category: "Regional Sichuan",
      topPick: false,
      location: "Jinniu District, Jinghua Bei Lu",
      priceRange: "$8-14/p",
      cuisine: "Traditional Sichuan home-style (jiachang cai) with recipes from the chef's grandmother",
      description:
        "A neighborhood Sichuan restaurant that earned a Michelin Bib Gourmand by doing nothing trendy — just executing classic home-style Sichuan dishes with exceptional ingredients and generations of technique. The maocai (Chengdu-style individual hotpot) and double-cooked pork are benchmarks [20].",
      whatToOrder:
        "Huiguo rou (twice-cooked pork), shui zhu niu rou (water-boiled beef in chili oil), tiger-skin green peppers (hupi jiao), dry-fried green beans.",
      bestFor: "Lunch or dinner",
      priceTier: 1,
    },
    {
      slug: "ming-ting-fandian",
      name: "Ming Ting",
      photo: { src: "/photos/chengdu/ming-ting-fandian.jpg", alt: "Ming Ting, Chengdu" },
      chineseName: "明亭饭店",
      category: "Traditional Sichuan",
      topPick: false,
      location: "Wuhou District, near Wuhou Shrine",
      priceRange: "$4-8/p",
      cuisine: "No-frills Sichuan canteen classics",
      description:
        "A bare-bones canteen that draws massive lunch crowds for its dan dan noodles and wontons in chili oil. The kind of place where you share a table with strangers and everyone is eating the same three dishes because they're that good. Plastic tables, fluorescent lights, extraordinary food.",
      whatToOrder:
        "Dan dan mian (the namesake dan dan noodles), hongyou chaoshou (red-oil wontons), liang fen (cold mung bean jelly in chili oil).",
      bestFor: "Lunch (arrive before 11:30 AM to beat the rush)",
      priceTier: 1,
    },

    // — Late Night —
    {
      slug: "gui-jie-barbecue-shaokao",
      name: "Yulin Lu Late-Night Shaokao (Barbecue Stalls)",
      chineseName: "玉林路烧烤",
      category: "Late Night",
      topPick: true,
      location: "Yulin Lu area, various stalls along Yulin Xi Lu and Zhimin Lu",
      priceRange: "$5-12/p",
      cuisine: "Sichuan-style shaokao (charcoal-grilled skewers with cumin and chili)",
      description:
        "After 9 PM, the Yulin Lu sidewalks transform into an open-air barbecue festival. Dozens of stalls set up small charcoal grills and plastic-stool seating, grilling lamb skewers, chicken wings, leeks, eggplant, and the local favorite: roasted rabbit head (tutou — a genuine Chengdu delicacy). Cold Snowflake beer, spicy skewers, warm night air — this is peak Chengdu [6].",
      whatToOrder:
        "Lamb skewers (yang rou chuan), grilled eggplant with garlic (kao qiezi), chicken wings, leeks. For the adventurous: roasted rabbit head (tutou). Ice-cold beer mandatory.",
      bestFor: "Late night, 9 PM-midnight. Best experienced after a few beers.",
      priceTier: 1,
    },
    {
      slug: "jiuyanqiao-bar-street-snacks",
      name: "Jiuyanqiao Night Snack Strip",
      chineseName: "九眼桥小吃",
      category: "Late Night",
      topPick: false,
      location:
        "Jiuyanqiao (Nine-Eye Bridge) area, Jinjiang District, along the south bank of the Jin River",
      priceRange: "$4-10/p",
      cuisine: "Late-night Sichuan snacks and craft beer bars",
      description:
        "Chengdu's liveliest nightlife strip runs along the Jin River near the historic Nine-Eye Bridge. Street vendors sell grilled skewers, cold noodles, and stinky tofu while bars and live-music venues line the waterfront. The bridge itself, illuminated at night, makes for atmospheric walking [14].",
      whatToOrder:
        "Cold noodles (liang mian), stinky tofu (chou doufu), grilled squid (kao youyu). Grab a craft beer from one of the riverside bars.",
      bestFor: "Late night, after 10 PM. Combine with Sichuan opera if attending evening performance.",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Chengdu's metro system is modern, clean, and covers most tourist areas (12 lines as of 2025). $0.25-0.70 per ride. Lines 1, 2, and 3 cover the most useful routes.",
      "Taxis/Rideshare: Use Didi (China's Uber). Chengdu taxis are cheap — most cross-city rides under $5. Traffic can be heavy during rush hour (7:30-9:30 AM, 5:00-7:30 PM).",
      "High-speed rail: Chengdu East and Chengdu South stations connect to Dujiangyan/Mount Qingcheng (30 min), Leshan (1 hr), and Chongqing (1.5 hr). Book on 12306.cn or Trip.com.",
      "Walking: Central Chengdu is flat and very walkable. The Yulin Lu area, Kuanzhai Xiangzi, and People's Park are all best explored on foot.",
    ],
    "Food & Dining": [
      "Spice levels: Sichuan food is genuinely spicy. Specify \"wei la\" (微辣, mild spice) when ordering if you want a gentler introduction. Most restaurants will accommodate.",
      "Ordering strategy: For 3 people, order 4-5 dishes family-style plus rice. Sichuan dining is highly communal — dishes come to the center and everyone shares.",
      "Hotpot etiquette: Cook items in the correct order (quick-cook items like tripe first, hearty items like potato later). Never drink the hotpot broth directly — it is for cooking only.",
      "Tipping: Not expected in mainland China. No service charges at local restaurants. High-end spots like Yu Zhi Lan may add a service fee.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are used everywhere — even street stalls. Set up international Alipay before the trip. Carry small cash (50-100 RMB) as backup for very small vendors.",
      "VPN: Essential. Download and configure before arriving — Google, WhatsApp, Instagram, and most Western apps are blocked in China.",
      "Language: English is rare outside international hotels. Download offline Mandarin in Google Translate before trip. Photograph menus for translation. Useful phrase: \"bu yao tai la\" (不要太辣) = don't make it too spicy.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Panda base tickets: Book 1-3 days ahead on the official WeChat mini-program. October is manageable but morning slots fill up.",
      "Mount Qingcheng: No advance tickets needed for the mountain, but book high-speed rail tickets to Dujiangyan 2-3 days ahead on 12306.cn.",
      "Yu Zhi Lan reservation: Book 2-4 weeks in advance through WeChat or have your hotel concierge arrange. Only 12 seats per seating.",
      "Sichuan opera: Book Shufeng Yayun tickets 1-2 days ahead through Trip.com or your hotel. Weekend shows sell out faster.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Chengdu UNESCO Creative City of Gastronomy — UNESCO Creative Cities Network (https://en.unesco.org/creative-cities/chengdu)",
    "[2] Chengdu Teahouse Culture — China Highlights (https://www.chinahighlights.com/chengdu/culture/teahouse-culture.htm)",
    "[3] Mount Qingcheng Travel Guide — China Discovery (https://www.chinadiscovery.com/chengdu/mount-qingcheng.html)",
    "[4] Chengdu Panda Base Guide — China Highlights (https://www.chinahighlights.com/chengdu/attraction/chengdu-panda-base.htm)",
    "[5] Chengdu October Weather — China Discovery (https://www.chinadiscovery.com/chengdu-tours/weather/weather-in-october.html)",
    "[6] Yulin Lu Food Guide — Lost Plate (https://lostplate.com/chengdu-best-restaurants-where-to-eat-guide/)",
    "[7] Kuanzhai Xiangzi (Wide and Narrow Alleys) — China Highlights (https://www.chinahighlights.com/chengdu/attraction/kuanzhai-alley.htm)",
    "[8] Sino-Ocean Taikoo Li Chengdu — ArchDaily (https://www.archdaily.com/tag/taikoo-li-chengdu)",
    "[9] Dujiangyan Irrigation System — China Discovery (https://www.chinadiscovery.com/chengdu/dujiangyan.html)",
    "[10] Sichuan Opera Face-Changing Guide — China Highlights (https://www.chinahighlights.com/chengdu/culture/sichuan-opera.htm)",
    "[11] Wuhou Shrine and Jinli Street — China Discovery (https://www.chinadiscovery.com/chengdu/wuhou-memorial-temple.html)",
    "[12] Chengdu Cooking Class — China Highlights (https://www.chinahighlights.com/day-tours/chengdu/sichuan-cooking-class.htm)",
    "[13] Chengdu Museum of Contemporary Art — ArchDaily (https://www.archdaily.com/tag/chengdu-museum-of-contemporary-art)",
    "[14] Eastern Suburb Memory — Chengdu Living (https://www.chengduliving.com/eastern-suburb-memory/)",
    "[15] Chengdu Hotpot Guide — China Discovery (https://www.chinadiscovery.com/chengdu/chengdu-food/hotpot.html)",
    "[16] Qingyang Palace Guide — China Highlights (https://www.chinahighlights.com/chengdu/attraction/green-ram-temple.htm)",
    "[17] Chen Mapo Tofu Restaurant — Atlas Obscura (https://www.atlasobscura.com/places/chen-mapo-tofu)",
    "[18] Zhong Dumplings — Chengdu Food Tours (https://www.chengdufoodtours.com/zhong-dumplings/)",
    "[19] Yu Zhi Lan — MICHELIN Guide (https://guide.michelin.com/en/article/dining-in/yu-zhi-lan-chengdu)",
    "[20] MICHELIN Guide Chengdu Bib Gourmand (https://guide.michelin.com/en/sichuan/chengdu/restaurants/bib-gourmand)",
  ],
};
