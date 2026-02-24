import type { CityProfile } from "@/types";

export const chongqingProfile: CityProfile = {
  slug: "chongqing",
  heroPhoto: { src: "/photos/chongqing/_hero.jpg", alt: "Raffles City Chongqing skyline from the Yangtze River", credit: "Junyi Lou" },
  executiveSummary: [
    "Chongqing is China at its most visceral — a sprawling vertical metropolis of 30 million people built on steep mountain ridges at the confluence of the Yangtze and Jialing rivers. Unlike the polished east-coast megacities, Chongqing retains a raw, working-class energy rooted in its history as China's wartime capital (1937-1945) and its identity as the heartland of Sichuan-style hotpot in its most ferocious form. October delivers some of the year's best weather, burning off the notorious summer humidity and revealing the city's dramatic topography — skyscrapers erupting from forested hillsides, elevated rail lines threading between apartment towers, and ancient stilted neighborhoods clinging to cliff faces above the rivers [1].",
    "The food alone is reason to come. Chongqing hotpot is not a gentle affair — it is a cauldron of beef tallow, dried chilies, and Sichuan peppercorns that numbs your lips and makes you sweat through your shirt. The best hotpot joints are not the famous chains but the unmarked back-alley operations in neighborhoods like Jiulongpo and Nanshan, where communal tables spill onto sidewalks and the broth recipe has not changed in decades. Beyond hotpot, the city's xiaomian (small noodles) culture rivals any noodle tradition in Asia — thousands of tiny shops each with a fiercely loyal following, serving bowls of spicy, sesame-laced noodles for under a dollar [2].",
    "A day trip to the Dazu Rock Carvings (UNESCO World Heritage, 90 minutes west) is one of the most rewarding excursions in all of China — over 50,000 Buddhist, Taoist, and Confucian sculptures carved into cliff faces between the 9th and 13th centuries, rivaling the Longmen and Yungang Grottoes with a fraction of the crowds. Back in the city, the wartime-era neighborhoods of Ciqikou and the stilted houses of Shibanpo offer a window into a Chongqing that is rapidly disappearing, while Testbed2 and the Sichuan Fine Arts Institute campus showcase a scrappy contemporary art scene that thrives on the city's outsider energy [3].",
  ],
  famousFor: [
    "hotpot capital of China",
    "dramatic vertical cityscape",
    "Dazu Rock Carvings (UNESCO)",
    "Yangtze and Jialing river confluence",
    "wartime capital history",
    "xiaomian (small noodles)",
    "stilted hillside neighborhoods",
  ],
  whyItFits: [
    "The most intense and authentic hotpot experience in China — eaten the way locals eat it",
    "Dazu Rock Carvings day trip rivals any Buddhist art site in the country with almost no crowds",
    "Gritty, vertical cityscape unlike anything else — genuine urban hiking just navigating the hills",
    "Wartime-era stilted neighborhoods and disappearing old Chongqing offer powerful cultural immersion",
    "Pairs naturally with Chengdu on a Sichuan circuit (90 min by high-speed rail)",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 77,
      avgLow: 61,
      rainChance: 35,
      precip: 1.2,
      sunrise: "6:35 AM",
      sunset: "6:25 PM",
      conditions: "Warm and occasionally misty; humidity breaking after summer",
    },
    {
      period: "Mid Oct",
      avgHigh: 72,
      avgLow: 57,
      rainChance: 30,
      precip: 0.9,
      sunrise: "6:45 AM",
      sunset: "6:10 PM",
      conditions: "Comfortable; clearer skies; best visibility for river views [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 66,
      avgLow: 52,
      rainChance: 25,
      precip: 0.7,
      sunrise: "6:55 AM",
      sunset: "5:58 PM",
      conditions: "Cooler and drier; excellent conditions for Dazu day trip",
    },
  ],
  whatToPack:
    "Layers for 52-77\u00b0F range. Light rain jacket (Chongqing drizzle is common). Comfortable shoes with good grip — you will be climbing steep hills and stone stairways constantly. Umbrella.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "yuzhong-peninsula-jiefangbei",
      name: "Yuzhong Peninsula / Jiefangbei",
      topPick: true,
      description:
        "The historic heart of Chongqing, occupying a narrow peninsula where the Yangtze and Jialing rivers meet. Jiefangbei (Liberation Monument) is the commercial center, but the real draw is the surrounding vertical maze — escalators tunneled through mountains, elevated walkways bridging ravines, and old stairway neighborhoods stacked beneath modern towers. Hongya Cave, a reconstructed stilted building complex clinging to the cliff above the Jialing River, is dramatic at night [4].",
      whyItFitsUs:
        "Most central and walkable base. River confluence views, best access to city's vertical character, walking distance to major sights. Multiple good hotels at various price points.",
      nearby:
        "Hongya Cave (10 min walk), Huguang Guild Hall (15 min walk), Chaotianmen Wharf (15 min walk), Ciqikou (30 min metro)",
      hotels:
        "JW Marriott Chongqing (river views from upper floors), Intercontinental Chongqing (directly on the peninsula tip at Chaotianmen), various mid-range boutique options along Jiefangbei pedestrian street",
    },
    {
      slug: "nanshan-south-bank",
      name: "Nanshan / South Bank",
      topPick: false,
      description:
        "Across the Yangtze on the south bank, Nanshan (South Mountain) rises steeply above the river, offering the definitive panoramic views of Chongqing's skyline — particularly spectacular at night. The hillside is dotted with old hotpot restaurants, teahouses, and the Laojun Cave Taoist temple. More residential and less developed than Yuzhong [5].",
      whyItFitsUs:
        "Best nighttime skyline views in China. Nanshan's old-school hillside hotpot joints are among the most authentic in the city. Quieter alternative base.",
      nearby:
        "Yikeshu Viewing Platform (on Nanshan), Nanshan Botanical Garden (10 min), Yuzhong Peninsula (15 min by taxi across bridge)",
      hotels:
        "Limited hotel options — better as a half-day/evening excursion from Yuzhong rather than a base",
    },
    {
      slug: "ciqikou-shapingba",
      name: "Ciqikou / Shapingba",
      topPick: false,
      description:
        "Ciqikou Ancient Town dates to the late Ming Dynasty (1,000+ years) and preserves a stretch of flagstone streets, traditional wooden buildings, and riverside teahouses. The main drag is tourist-heavy, but the back alleys and upper hillside paths remain genuinely atmospheric — elderly residents playing mahjong, incense drifting from small temples, and traditional craft workshops [6].",
      whyItFitsUs:
        "Best-preserved old town architecture in Chongqing. The back alleys reward exploration on foot. Pairs well with the nearby Sichuan Fine Arts Institute for a half-day cultural itinerary.",
      nearby:
        "Sichuan Fine Arts Institute Huxi Campus (15 min), Gele Mountain (20 min taxi), Yuzhong Peninsula (30 min metro)",
      hotels:
        "A few guesthouses in the old town, but most travelers base in Yuzhong and visit as a half-day trip",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "dazu-rock-carvings-day-trip",
      name: "Dazu Rock Carvings (UNESCO) \u2014 Day Trip",
      topPick: true,
      description:
        "Over 50,000 Buddhist, Taoist, and Confucian sculptures carved into cliff faces between the 9th and 13th centuries. The Baoding Mountain site is the masterpiece \u2014 a horseshoe-shaped cliff with a reclining Buddha stretching 31 meters, a thousand-armed Guanyin with 830 individually carved gilded hands, and vivid narrative reliefs depicting Buddhist parables with startling emotional realism. Unlike Longmen or Yungang, the carvings retain much of their original painted color [3].",
      time: "Full day (1.5 hrs each way by car + 3-4 hrs at site)",
      location:
        "Dazu District, ~90 minutes west of central Chongqing by car or bus",
      cost: "$27/p ($18 entrance Baoding Mountain + $27/3 shared car)",
      tips: [
        "Hire a private driver for flexibility \u2014 leave Chongqing by 7:30 AM to arrive before tour groups",
        "Baoding Mountain is the must-see site; Beishan is secondary and can be skipped if short on time",
        "Hire an English-speaking guide at the entrance ($20-30 for group) \u2014 the narrative reliefs are incomprehensible without context [3]",
        "Bring water and snacks; on-site food options are limited",
      ],
      priceTier: 2,
    },
    {
      slug: "chongqing-hotpot-crawl",
      name: "Chongqing Hotpot Crawl",
      topPick: true,
      description:
        "Chongqing is the undisputed birthplace and capital of mala hotpot \u2014 and eating it here is a fundamentally different experience from anywhere else. The base is pure beef tallow loaded with dried chilies, Sichuan peppercorns, and fermented bean paste. The best joints are unmarked neighborhood operations where the broth recipe has not changed in decades and locals sit at plastic tables on the sidewalk [2].",
      time: "2-3 hours (dinner)",
      location:
        "Various \u2014 Jiulongpo back alleys and Jiefangbei area for the most authentic spots",
      cost: "$8-15/p (all-you-can-order at most local joints)",
      tips: [
        "Order yuanyang (split pot with one mild, one spicy side) if anyone in the group needs a break from the heat",
        "Essential order: fresh duck intestine (huya), sliced beef throat (huanghou), luncheon meat, potato slices, lotus root, frozen tofu, and sesame oil dipping sauce",
        "The beef tallow base is traditional \u2014 if the restaurant offers a choice, pick niuyou (beef tallow) over qingyou (vegetable oil) [2]",
        "Pair with cold local beer (Shancheng Beer) or sour plum juice (suanmeitang) to cool the burn",
      ],
      priceTier: 1,
    },
    {
      slug: "hongya-cave-and-jialing-riverfront",
      name: "Hongya Cave and Jialing Riverfront",
      topPick: false,
      description:
        "An 11-story stilted building complex carved into the cliff face above the Jialing River, recreating the traditional diaojiaolou (stilted house) architecture that once defined Chongqing's riverside. Admittedly touristy, but the structure itself is genuinely impressive \u2014 especially at night when the illuminated layers cascading down the cliff evoke comparisons to Spirited Away. The surrounding Jialing riverfront promenade is excellent for evening walks [4].",
      time: "1-1.5 hours (best at dusk/evening)",
      location:
        "Yuzhong District, Cangbai Road, along the Jialing River. Walking distance from Jiefangbei",
      cost: "Free",
      tips: [
        "Visit at dusk to see it transition from daylight to full illumination",
        "Enter from the top (street level at the 11th floor) and walk down through the levels to the riverfront",
        "Skip the interior shops and restaurants \u2014 the exterior views and the structure itself are the draw",
        "Walk the Jialing riverfront promenade afterward for views back at the illuminated complex",
      ],
      priceTier: 0,
    },
    {
      slug: "ciqikou-ancient-town",
      name: "Ciqikou Ancient Town \u2014 Back Alley Exploration",
      topPick: false,
      description:
        "A 1,000-year-old porcelain trading port on the Jialing River with flagstone streets, wooden Ming/Qing-era buildings, and riverside teahouses. The main commercial street is crowded with tourists and snack vendors, but turn into any side alley and you enter a different world \u2014 residential lanes with laundry strung between buildings, elderly residents, and small temples with burning incense [6].",
      time: "2-3 hours (morning or afternoon)",
      location:
        "Shapingba District. Metro Line 1 to Ciqikou station, 30-40 min from Yuzhong",
      cost: "Free (food purchases extra)",
      tips: [
        "Arrive before 10 AM or after 3 PM to avoid peak crowds on the main drag",
        "Immediately turn off the main street into the uphill back alleys \u2014 this is where the authentic character lives",
        "Try mahua (fried dough twists) from Chen Mahua, Chongqing's most famous version [6]",
        "Walk uphill to the Baolun Temple area for quiet lanes and river overlooks",
      ],
      priceTier: 0,
    },
    {
      slug: "chaotianmen-yangtze-jialing-confluence",
      name: "Chaotianmen \u2014 Yangtze/Jialing Confluence",
      topPick: false,
      description:
        "The dramatic point where the muddy brown Yangtze meets the green Jialing River, with visibly different colored waters merging at the peninsula tip. Chaotianmen Wharf has been Chongqing's gateway for over 2,000 years. The Raffles City complex now occupies the site, but the viewing platforms and riverside promenades remain accessible [4].",
      time: "1-1.5 hours",
      location:
        "Eastern tip of Yuzhong Peninsula. 15-20 min walk from Jiefangbei",
      cost: "Free",
      tips: [
        "Best viewed in the morning when the color contrast between the two rivers is most visible",
        "Walk down to the lowest waterfront level for the best perspective on the merging waters",
        "The Raffles City observation deck offers aerial views but charges admission ($10)",
        "Combine with a walk along the Yangtze riverfront south toward Huguang Guild Hall",
      ],
      priceTier: 0,
    },
    {
      slug: "huguang-guild-hall",
      name: "Huguang Guild Hall",
      topPick: false,
      description:
        "A beautifully restored Qing Dynasty (1759) guild hall complex documenting the massive Huguang Filling Sichuan migration \u2014 when millions of settlers from Hubei and Hunan repopulated Sichuan after 17th-century wars devastated the region. Ornate theaters, ancestral halls, and a museum explaining this population movement that shaped modern Chongqing's culture, dialect, and cuisine [7].",
      time: "1.5-2 hours",
      location:
        "Yuzhong District, Dongshui Gate, above the Yangtze riverfront. 15 min walk from Jiefangbei",
      cost: "$4/p ($4 entrance)",
      tips: [
        "The migration history museum inside provides essential context for understanding Chongqing's distinct identity within Sichuan",
        "The ornate theatrical stages are among the finest surviving Qing-era examples in southwestern China [7]",
        "Combine with a walk along the Yangtze riverfront steps",
        "Uncrowded even on weekends \u2014 a genuine hidden gem",
      ],
      priceTier: 1,
    },
    {
      slug: "liziba-monorail-and-vertical-chongqing",
      name: "Liziba Monorail and Vertical Chongqing Walk",
      topPick: true,
      description:
        "Chongqing's topography creates urban experiences that exist nowhere else. At Liziba Station, the Line 2 monorail passes directly through the 6th-8th floors of a 19-story residential building \u2014 a surreal engineering solution that has become a symbol of the city. A self-guided walking route through the surrounding Yuzhong hills reveals the city's vertical character: outdoor escalators climbing hillsides, skywalks bridging ravines, and stairway neighborhoods where the 1st floor of one building connects to the 10th floor of the next [4].",
      time: "2-3 hours (self-guided walk)",
      location:
        "Liziba Metro Station (Line 2) and surrounding Yuzhong hillside neighborhoods",
      cost: "Free (metro fare ~$0.50)",
      tips: [
        "Ride Line 2 from Linjiangmen to Liziba for the river-crossing views, then exit and watch the train emerge from the building",
        "Walk the Shanwangping Skybridge and nearby hillside stairways for the most dramatic vertical city experience",
        "Morning or late afternoon light is best for photography",
        "This is genuine urban exploration \u2014 wear comfortable shoes with grip for steep stone stairs",
      ],
      priceTier: 0,
    },
    {
      slug: "nanshan-night-views",
      name: "Nanshan Night Views \u2014 Yikeshu Viewing Platform",
      topPick: true,
      description:
        "The south bank's Nanshan mountain offers the definitive panoramic view of Chongqing's peninsula skyline \u2014 widely considered the most dramatic urban night vista in China. The Yikeshu (One Tree) viewing platform captures the full sweep of the illuminated Yuzhong Peninsula with both rivers flanking it, skyscrapers rising from the hillside like a vertical forest of light [5].",
      time: "1.5-2 hours (evening)",
      location:
        "Nanshan, Nan'an District. 20-30 min by taxi from Yuzhong",
      cost: "$4/p ($4 entrance to viewing platform)",
      tips: [
        "Arrive 30 minutes before sunset to watch the transition from daylight to full illumination",
        "Weekday evenings are significantly less crowded",
        "Combine with dinner at a Nanshan hillside hotpot restaurant (Qinniujiao or Lao Lushan) before heading to the viewpoint [5]",
        "Bring a light jacket \u2014 it's exposed and breezy on the mountain at night",
      ],
      priceTier: 1,
    },
    {
      slug: "sichuan-fine-arts-institute",
      name: "Sichuan Fine Arts Institute \u2014 Huxi Campus",
      topPick: false,
      description:
        "One of China's eight major fine arts academies, with a campus that doubles as an open-air sculpture garden and art space. The hilltop campus in Shapingba has striking architecture, student galleries, and panoramic views. A window into Chongqing's scrappy, independent art scene that operates far from Beijing and Shanghai's commercial galleries [8].",
      time: "1.5-2 hours",
      location:
        "Shapingba District, near Daxuecheng. 20-30 min by taxi from Yuzhong",
      cost: "Free",
      tips: [
        "Walk the campus loop through the sculpture installations and rooftop garden",
        "Check the Tank Loft contemporary art space nearby (Huangjueping campus area) for exhibitions",
        "Combine with a morning visit to Ciqikou (15 min away) for a full arts-and-history half-day [8]",
        "Best on weekdays when students are active and galleries are open",
      ],
      priceTier: 0,
    },
    {
      slug: "xiaomian-noodle-crawl",
      name: "Xiaomian (Small Noodles) Morning Crawl",
      topPick: false,
      description:
        "Chongqing's everyday obsession is not hotpot but xiaomian \u2014 small bowls of alkaline wheat noodles in a spicy, sesame-laced sauce, eaten for breakfast or any meal. Every neighborhood has shops with cult followings, and locals will argue passionately about which is best. A morning crawl through 2-3 shops in the Jiefangbei or Guanyinqiao area reveals extraordinary variety within what seems like a simple dish [2].",
      time: "1.5-2 hours (morning)",
      location:
        "Various \u2014 concentrated around Jiefangbei, Guanyinqiao, and residential neighborhoods citywide",
      cost: "$1-2/p per bowl",
      tips: [
        "Order 'er liang' (small portion) at each stop so you can try multiple shops",
        "Variations to try: classic mala xiaomian (numbing-spicy), zhajiang mian (meat sauce), dandan mian, and suanla fen (sour-spicy sweet potato noodles) [2]",
        "Follow the crowds \u2014 the busiest shop on any block is almost always the best",
        "Peak breakfast hours are 7-9 AM; most shops close by early afternoon",
      ],
      priceTier: 1,
    },
    {
      slug: "eling-park-wartime-history",
      name: "Eling Park and Wartime History Walk",
      topPick: false,
      description:
        "Eling Park occupies a hilltop overlooking both rivers and was the political heart of wartime China (1937-1945) when Chongqing served as the national capital during the Japanese invasion. The park and surrounding area contain Chiang Kai-shek's wartime residence, the Stilwell Museum (General Joseph Stilwell's headquarters), and panoramic views. A walking route through the surrounding hillside connects to remnants of the old city [9].",
      time: "1.5-2 hours",
      location:
        "Yuzhong District hilltop, between the two rivers. 10-15 min from Jiefangbei by taxi or walking",
      cost: "Free (park); Stilwell Museum $2/p",
      tips: [
        "The park's two-river viewing pavilion offers one of the best free vistas in the city",
        "The Stilwell Museum provides fascinating WWII context about the China-Burma-India theater [9]",
        "Walk downhill through the surrounding old residential lanes for a taste of disappearing old Chongqing",
        "Best combined with an early morning visit before the midday warmth",
      ],
      priceTier: 1,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // \u2014 Hotpot \u2014
    {
      slug: "zhu-laoliu-hotpot",
      name: "Zhu Lao Liu Hotpot",
      chineseName: "\u6731\u8001\u516d\u706b\u9505",
      category: "Hotpot",
      topPick: true,
      location:
        "Jiulongpo District \u2014 a back-alley neighborhood joint beloved by taxi drivers and local workers",
      priceRange: "$8-12/p",
      cuisine: "Traditional Chongqing beef-tallow hotpot",
      description:
        "The platonic ideal of old-school Chongqing hotpot \u2014 plastic stools on a sloping sidewalk, a bubbling cauldron of blood-red beef tallow broth, and ingredients so fresh they were walking that morning. No English, no decor, no concessions to outside sensibilities. This is how Chongqing eats [2].",
      whatToOrder:
        "Beef tallow base (niuyou guodi), fresh duck intestine (xian yazhuang), sliced beef throat (huanghou), brain flower (naohua \u2014 if adventurous), potato, lotus root, frozen tofu. Sesame oil dipping sauce with crushed garlic.",
      bestFor: "Dinner \u2014 arrive before 6:30 PM as it fills up fast",
      priceTier: 1,
    },
    {
      slug: "qinniujiao-hotpot",
      name: "Qinniujiao Old Hotpot",
      chineseName: "\u7275\u725b\u89d2\u8001\u706b\u9505",
      category: "Hotpot",
      topPick: true,
      location:
        "Nanshan, Nan'an District \u2014 hillside location with outdoor terraces overlooking the city",
      priceRange: "$10-15/p",
      cuisine: "Traditional Chongqing hotpot with panoramic views",
      description:
        "A Nanshan institution combining serious old-school hotpot with outdoor hillside seating and sweeping views of the Chongqing skyline. The terrace at night, with the illuminated city below and a roiling pot of chili-laden broth in front of you, is an unforgettable Chongqing moment [5].",
      whatToOrder:
        "Traditional beef tallow pot, yellow throat (huanghou), duck blood (yaxue), tripe (maodu), seasonal greens, sweet potato noodles to finish.",
      bestFor: "Dinner \u2014 combine with Nanshan night views afterward",
      priceTier: 1,
    },
    {
      slug: "luzhousandui-hotpot",
      name: "Luzhousan Dui Hotpot",
      chineseName: "\u6cf8\u5dde\u4e09\u961f\u706b\u9505",
      category: "Hotpot",
      topPick: false,
      location:
        "Jiangbei District, near Guanyinqiao pedestrian street",
      priceRange: "$10-14/p",
      cuisine: "Chongqing hotpot \u2014 modern setting, traditional flavors",
      description:
        "A step up in comfort from the back-alley joints without sacrificing authenticity. Clean, well-lit, air-conditioned \u2014 a good option for those who want the full Chongqing hotpot experience in a more accessible setting. Popular with younger Chongqing locals.",
      whatToOrder:
        "Yuanyang pot (split spicy/mild) if anyone needs relief, fresh shrimp paste (xiapa), quail eggs, enoki mushrooms, hand-cut potato slices.",
      bestFor: "Either meal \u2014 a good introduction for hotpot newcomers",
      priceTier: 1,
    },

    // \u2014 Xiaomian / Street Food \u2014
    {
      slug: "huashipai-xiaomian",
      name: "Hua Shi Pai Xiaomian",
      chineseName: "\u82b1\u5e02\u62cc\u5c0f\u9762",
      category: "Street Food",
      topPick: true,
      location:
        "Yuzhong District, near Huaxin Street \u2014 tiny shopfront with a few stools",
      priceRange: "$1-2/p",
      cuisine: "Chongqing xiaomian (small noodles)",
      description:
        "Consistently ranked among Chongqing's top xiaomian by locals and food media alike. The sauce is the secret \u2014 a precise blend of chili oil, Sichuan pepper oil, sesame paste, preserved vegetables (yacai), and peanuts that coats each strand of perfectly chewy alkaline noodle [2].",
      whatToOrder:
        "Classic mala xiaomian, zhajiang mian (meat sauce noodles). Order 'er liang' (small) to leave room for more exploration.",
      bestFor: "Breakfast or early lunch \u2014 opens early, closes by mid-afternoon",
      priceTier: 1,
    },
    {
      slug: "shuangliu-laomama-rabbit-head",
      name: "Shuangliu Laomama Rabbit Head",
      chineseName: "\u53cc\u6d41\u8001\u5988\u5988\u5154\u5934",
      category: "Street Food",
      topPick: false,
      location:
        "Multiple locations; Jiefangbei area branch is most accessible",
      priceRange: "$2-5/p",
      cuisine: "Sichuan-style spiced rabbit head and cold dishes",
      description:
        "Spiced rabbit head is a beloved Chongqing-Chengdu delicacy that bewilders most outsiders \u2014 you crack it open and eat the cheek meat, tongue, and brain. It sounds challenging but the mala-spiced version is genuinely delicious and is a defining local experience [10].",
      whatToOrder:
        "Mala (numbing-spicy) rabbit head, wuxiang (five-spice) rabbit head, cold spiced rabbit pieces. Pair with cold beer.",
      bestFor: "Afternoon snack or late-night \u2014 a quintessential Chongqing experience",
      priceTier: 1,
    },
    {
      slug: "haoyu-suanlafen",
      name: "Haoyu Suanla Fen",
      chineseName: "\u597d\u53c8\u6765\u9178\u8fa3\u7c89",
      category: "Street Food",
      topPick: false,
      location:
        "Ciqikou Ancient Town, main street entrance \u2014 permanent stall with long queues",
      priceRange: "$1-3/p",
      cuisine: "Chongqing suanla fen (sour-spicy sweet potato noodles)",
      description:
        "This stall is famous for its suanla fen \u2014 thick, slippery sweet potato noodles in a searingly sour-spicy broth topped with crushed peanuts, pickled vegetables, and cilantro. Aggressively flavored and addictive. The perpetual queue is your guide [6].",
      whatToOrder:
        "Suanla fen (one size \u2014 it's all they make well). Add extra chili oil if you can handle it.",
      bestFor: "Snack during a Ciqikou visit",
      priceTier: 1,
    },

    // \u2014 Regional / Traditional \u2014
    {
      slug: "lao-sichuan-jianghu-cai",
      name: "Lao Sichuan Jianghu Cai",
      chineseName: "\u8001\u56db\u5ddd\u6c5f\u6e56\u83dc",
      category: "Regional Chinese",
      topPick: true,
      location:
        "Yuzhong District, near Jiefangbei. Multiple branches citywide",
      priceRange: "$7-12/p",
      cuisine: "Chongqing jianghu cai (maverick Sichuan cooking)",
      description:
        "Jianghu cai ('rivers and lakes cuisine') is Chongqing's distinctive contribution to the Sichuan food tradition \u2014 bold, unrefined dishes born in riverside towns, heavy on garlic, chili, and fermented bean paste. Less elegant than Chengdu cooking and proud of it. These are the dishes that Chongqing locals eat when they are not eating hotpot [10].",
      whatToOrder:
        "Lazi ji (chicken buried in a mountain of dried chilies \u2014 pick out the meat), shuizhu yu (boiled fish in chili oil), huiguorou (twice-cooked pork), laohuo tang (traditional slow-simmered soup for a non-spicy break).",
      bestFor: "Lunch or dinner \u2014 essential for understanding Chongqing's food beyond hotpot",
      priceTier: 1,
    },
    {
      slug: "liu-yi-shou-hotpot",
      name: "Liu Yi Shou Hotpot",
      chineseName: "\u5218\u4e00\u624b\u706b\u9505",
      category: "Hotpot",
      topPick: false,
      location:
        "Multiple branches citywide; flagship near Jiefangbei, Yuzhong District",
      priceRange: "$12-18/p",
      cuisine: "Chongqing hotpot \u2014 well-known chain, reliable quality",
      description:
        "One of Chongqing's most established hotpot chains \u2014 more polished than back-alley joints with English menus and picture ordering, making it a good fallback option. Quality is consistent and the broth is genuinely excellent, even if locals will argue it lacks the soul of the neighborhood spots [2].",
      whatToOrder:
        "Signature Liu Yi Shou base, tripe (maodu), sliced lamb, duck intestine, taro, pumpkin, and noodles to finish.",
      bestFor: "Dinner \u2014 a reliable option with English menu for a less adventurous evening",
      priceTier: 1,
    },
    {
      slug: "zhongshan-teahouse",
      name: "Zhongshan Teahouse",
      chineseName: "\u4e2d\u5c71\u8336\u9986",
      category: "Traditional Chongqing",
      topPick: false,
      location:
        "Ciqikou Ancient Town, upper back alleys",
      priceRange: "$2-4/p",
      cuisine: "Traditional Sichuan tea, light snacks",
      description:
        "A vanishing breed \u2014 an authentic old Chongqing teahouse where elderly locals gather to drink bowl tea (gaiwan cha), play mahjong, and smoke. Wooden benches, peeling walls, and a soundtrack of clinking tiles and Chongqing dialect. No English, no concessions to tourism [6].",
      whatToOrder:
        "Gaiwan cha (lidded bowl tea \u2014 jasmine is the classic), sunflower seeds. Sit and absorb.",
      bestFor: "Afternoon \u2014 pairs with Ciqikou exploration",
      priceTier: 1,
    },

    // \u2014 Grilled Fish \u2014
    {
      slug: "wanzhou-grilled-fish",
      name: "Wanzhou Grilled Fish",
      chineseName: "\u4e07\u5dde\u70e4\u9c7c",
      category: "Regional Chinese",
      topPick: false,
      location:
        "Multiple locations; concentrated around Jiefangbei and Guanyinqiao areas",
      priceRange: "$8-14/p",
      cuisine: "Chongqing-style grilled fish (kaoyu)",
      description:
        "Chongqing-style grilled fish is a regional obsession \u2014 whole fish grilled over charcoal then served in a shallow pan of bubbling chili oil with vegetables. Originating in the Yangtze river town of Wanzhou, it combines grilling and braising techniques for crispy-skinned, tender, intensely flavored fish [10].",
      whatToOrder:
        "Whole grilled fish in mala (numbing-spicy) or douchi (black bean) sauce, with tofu skin, potato, and lotus root added to the bubbling pan.",
      bestFor: "Dinner \u2014 a great alternative to hotpot that's equally Chongqing",
      priceTier: 1,
    },

    // \u2014 Splurge \u2014
    {
      slug: "yuntian-restaurant",
      name: "Yuntian Restaurant",
      chineseName: "\u6e1d\u73cd\u9152\u697c",
      category: "Splurge",
      topPick: false,
      location:
        "Yuzhong District, near Jiefangbei \u2014 upscale setting with river views",
      priceRange: "$40-70/p",
      cuisine: "Refined Chongqing/Sichuan fine dining",
      description:
        "Chongqing's answer to the question of whether the city's bold flavors can be elevated to fine dining. Seasonal ingredients, precise technique, and elegant plating applied to Sichuan and Chongqing classics. A rare opportunity to experience the region's cuisine in a polished setting without losing its soul [11].",
      whatToOrder:
        "Chef's tasting menu (seasonal), refined mapo tofu, tea-smoked duck, any seasonal river fish preparation.",
      bestFor: "Special dinner \u2014 book in advance",
      priceTier: 3,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "Metro: Clean and expanding rapidly. Lines 1, 2, 3, and 6 cover most tourist areas. The monorail (Line 2) is itself an attraction. $0.30-0.70 per ride.",
      "Taxis/Rideshare: Use Didi (China's Uber). Essential for Nanshan, Dazu day trip, and cross-river trips. Most rides within the city under $5.",
      "Walking: Chongqing is intensely walkable but exhausting \u2014 the terrain is steep. Expect to climb the equivalent of 30-50 flights of stairs on a full day of exploration. Public escalators and elevators are built into the hillsides throughout the city.",
      "Navigation: Download Amap or Baidu Maps (Google Maps is blocked). Chongqing's 3D terrain makes flat maps misleading \u2014 your destination may be 10 floors above or below you.",
    ],
    "Food & Dining": [
      "Spice levels: Chongqing food is the spiciest major regional cuisine in China. Request 'wei la' (mild spicy) if needed. Keep in mind that 'mild' here is still quite hot by most standards.",
      "Hotpot etiquette: For 3 people, order 8-12 plates of ingredients. Items cook at different speeds \u2014 thin meats (seconds), tripe (30 seconds), vegetables (2-3 minutes), potatoes (5+ minutes). Dip everything in sesame oil with crushed garlic.",
      "Meal timing: Chongqing eats late. Dinner hotpot often starts at 7-8 PM and goes until 10-11 PM. Xiaomian breakfast shops open as early as 6 AM.",
      "Tipping: Not expected in mainland China.",
    ],
    "Money & Communication": [
      "Payment: Alipay and WeChat Pay are universal. Set up international Alipay before the trip. Small street vendors may be cash-only.",
      "VPN: Download and configure before arriving \u2014 Google, WhatsApp, and Instagram are blocked in mainland China.",
      "Language: Very little English anywhere in Chongqing, including hotels. Google Translate camera mode is essential. Chongqing dialect is quite different from standard Mandarin \u2014 even Chinese visitors from other regions sometimes struggle.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Planning Ahead": [
      "Dazu Rock Carvings: Book a private driver the day before through your hotel or Didi. No advance ticket reservation needed \u2014 buy at the gate.",
      "Weather: Chongqing is one of China's 'three furnaces' but October is comfortable. Occasional drizzle is common \u2014 the city is famously foggy. Pack a light rain layer.",
      "Chengdu connection: High-speed rail connects Chongqing to Chengdu in ~90 minutes, making a combined Sichuan circuit very practical.",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Chongqing October Weather \u2014 China Discovery (https://www.chinadiscovery.com/chongqing/weather/weather-in-october.html)",
    "[2] Chongqing Food Guide: Hotpot and Xiaomian \u2014 Lost Plate (https://lostplate.com/chongqing-food-guide/)",
    "[3] Dazu Rock Carvings Visitor Guide \u2014 China Highlights (https://www.chinahighlights.com/chongqing/attraction/dazu-rock-carvings.htm)",
    "[4] Chongqing Top Attractions \u2014 China Discovery (https://www.chinadiscovery.com/chongqing/chongqing-top-attractions.html)",
    "[5] Nanshan Night Views \u2014 TripAdvisor Chongqing (https://www.tripadvisor.com/Attraction_Review-g297889-d3236055-Reviews-Nanshan_Scenic_Area-Chongqing.html)",
    "[6] Ciqikou Ancient Town Guide \u2014 China Highlights (https://www.chinahighlights.com/chongqing/attraction/ciqikou-old-town.htm)",
    "[7] Huguang Guild Hall \u2014 Chongqing Guide (https://www.chinadiscovery.com/chongqing/huguang-guild-hall.html)",
    "[8] Sichuan Fine Arts Institute \u2014 Art Spaces Guide (https://www.artron.net/sichuan-fine-arts-institute)",
    "[9] Chongqing WWII History \u2014 Stilwell Museum (https://www.chinadiscovery.com/chongqing/stilwell-museum.html)",
    "[10] Chongqing Street Food and Jianghu Cai \u2014 Serious Eats (https://www.seriouseats.com/chongqing-street-food-guide)",
    "[11] Chongqing Fine Dining \u2014 MICHELIN Guide (https://guide.michelin.com/en/article/dining-out/chongqing-restaurants)",
  ],
};
