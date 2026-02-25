import type { CityProfile } from "@/types";

export const lhasaProfile: CityProfile = {
  slug: "lhasa",
  heroPhoto: { src: "/photos/lhasa/_hero.jpg", alt: "Potala Palace in Lhasa, Tibet", credit: "Luca Galuzzi" },
  executiveSummary: [
    "Lhasa in mid-October is one of the most culturally profound destinations on earth. Sitting at 11,995 feet on the Tibetan Plateau, the city enters its dry, clear autumn season with deep blue skies, intense sunlight, and minimal rainfall. The crowds of peak summer have thinned, yet the weather remains comfortable for walking and sightseeing. The air is crisp and the visibility extraordinary — on clear days the surrounding mountains appear etched against the sky. The challenge is real: altitude sickness affects most visitors in the first 24-48 hours, and a full acclimatization day is non-negotiable [1].",
    "The experience of Lhasa operates on a level that transcends conventional tourism. The Barkhor kora — the ancient pilgrim circuit around the Jokhang Temple — is a living, breathing act of devotion, not a museum exhibit. Thousands of Tibetan pilgrims prostrate along the flagstone path, spin prayer wheels, and burn juniper incense, as they have for over a thousand years. The Potala Palace, rising 13 stories above the city, is staggering in scale and sacred weight. Sera Monastery's afternoon debating courtyard, where monks clap and challenge each other on points of Buddhist philosophy, is one of the most electrifying spectacles in all of Asia [2].",
    "Practical realities shape any Lhasa visit: a Tibet Travel Permit is mandatory for all foreign visitors, must be arranged 2-3 weeks in advance through a licensed agency, and independent travel is not permitted — you must have a registered guide and driver throughout your stay. These constraints are real, but the upside is significant: a knowledgeable Tibetan guide transforms every temple visit, every monastery debate, and every roadside encounter into something far deeper than you could access alone. The food is distinctive — yak meat, momos (Tibetan dumplings), thukpa (noodle soup), butter tea, and tsampa (roasted barley flour) — hearty, warming, and unlike anything else in China [3].",
  ],
  famousFor: [
    "Potala Palace",
    "Jokhang Temple",
    "Barkhor pilgrim circuit",
    "Tibetan Buddhist monasteries",
    "high-altitude sacred lakes",
    "Tibetan cuisine",
    "living pilgrimage culture",
  ],
  whyItFits: [
    "Unparalleled cultural and spiritual immersion — the Barkhor kora is unlike anything else in China",
    "Extraordinary high-altitude scenery at Namtso and Yamdrok Lakes",
    "Mandatory guide requirement actually enhances the experience with deep local knowledge",
    "Distinctive Tibetan cuisine entirely different from the rest of China",
    "October offers dry weather, clear skies, and thinner crowds than summer peak",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 64,
      avgLow: 34,
      rainChance: 12,
      precip: 0.3,
      sunrise: "7:48 AM",
      sunset: "7:36 PM",
      conditions: "Clear, dry; strong sun; cool mornings; end of monsoon season [1]",
    },
    {
      period: "Mid Oct",
      avgHigh: 61,
      avgLow: 31,
      rainChance: 8,
      precip: 0.2,
      sunrise: "7:57 AM",
      sunset: "7:24 PM",
      conditions: "Crisp and sunny; excellent visibility; best autumn weather [1]",
    },
    {
      period: "Late Oct",
      avgHigh: 57,
      avgLow: 27,
      rainChance: 5,
      precip: 0.1,
      sunrise: "8:07 AM",
      sunset: "7:12 PM",
      conditions: "Cold mornings; warm midday sun; very dry; layers essential",
    },
  ],
  whatToPack:
    "Layers are critical for 27-64\u00b0F swings. Warm fleece, down jacket for mornings and evenings, sunscreen (SPF 50+ — UV is intense at 12,000 ft), quality sunglasses, lip balm, comfortable walking shoes, and a refillable water bottle (hydration is key for altitude). Bring Diamox (acetazolamide) if prescribed by your doctor for altitude sickness prevention.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "barkhor-old-town",
      name: "Barkhor / Old Town (Chengguan District)",
      topPick: true,
      description:
        "The spiritual and cultural heart of Lhasa. The Barkhor pilgrim circuit radiates from the Jokhang Temple through a labyrinth of narrow alleyways, traditional Tibetan whitewashed buildings, incense smoke, and prayer flag-draped rooftops. This is where Tibetan life is most concentrated and most authentic — pilgrims, monks, market vendors, and teahouse regulars fill the streets from dawn to dusk [4].",
      whyItFitsUs:
        "Most walkable, atmospherically rich area. Everything accessible on foot — Jokhang Temple, Barkhor kora, traditional teahouses, Tibetan restaurants. Several boutique guesthouses in converted traditional Tibetan buildings. The pilgrim energy at dawn is unforgettable.",
      nearby:
        "Jokhang Temple (immediate), Barkhor Street market (immediate), Potala Palace (15 min walk), Ramoche Temple (10 min walk)",
      hotels:
        "Shambhala Palace (boutique Tibetan-style hotel, 5-10 min walk from Barkhor), Kyichu Hotel (traditional Tibetan style, between Jokhang and Potala)",
    },
    {
      slug: "potala-palace-area",
      name: "Potala Palace / Beijing East Road Area",
      topPick: false,
      description:
        "The broad boulevard area surrounding the Potala Palace, where modern Lhasa meets the monumental. Beijing East Road connects the Potala to the old town and is lined with hotels, shops, and restaurants. Less atmospheric than the Barkhor area but more convenient for higher-end hotels and as a base between the old town and western sites like Norbulingka [5].",
      whyItFitsUs:
        "Best for travelers who want comfortable modern hotels with easy access to both the Potala and the old town. The St. Regis Lhasa and Shangri-La are both here, offering altitude-adjusted rooms and oxygen systems.",
      nearby:
        "Potala Palace (5-10 min walk), Jokhang Temple (15 min walk), Norbulingka (15 min taxi)",
      hotels:
        "St. Regis Lhasa (luxury, individual oxygen systems in rooms — helps with altitude), Shangri-La Lhasa (289 rooms, close to Potala and Norbulingka) [5]",
    },
    {
      slug: "sera-monastery-area",
      name: "Sera Monastery / Northern Lhasa",
      topPick: false,
      description:
        "Quieter area at the foot of Sera Utse mountain, about 5 km north of the city center. Sera Monastery anchors this area with its famous debating courtyard. The surrounding hillside has sky burial sites, hermitage caves, and kora hiking paths that see very few tourists.",
      whyItFitsUs:
        "Worth visiting for a half-day but not the ideal base. The monastery debates alone justify the trip, and the surrounding hillside walks offer genuine altitude-appropriate hiking with monastery views.",
      nearby:
        "Sera Monastery (immediate), Sera Utse hermitage hike (30 min from monastery), Potala Palace (20 min taxi)",
      hotels: "",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "potala-palace",
      name: "Potala Palace",
      photo: { src: "/photos/lhasa/potala-palace.jpg", alt: "Potala Palace, Lhasa" },
      topPick: true,
      description:
        "The iconic 13-story white-and-red fortress rising above Lhasa was the winter residence of the Dalai Lamas for centuries. Over 1,000 rooms contain chapels, tombs of past Dalai Lamas adorned in gold and jewels, thousands of Buddhist statues, and murals depicting Tibetan history. The sheer scale and sacred density are overwhelming — this is not a museum but a place of active worship [6].",
      time: "2-3 hours (strict 1-hour limit inside the palace; allow time for climbing and exterior)",
      location:
        "Central Lhasa, visible from everywhere in the city. 15 min walk from Barkhor area",
      cost: "$28/p ($28 entrance in Oct peak season)",
      tips: [
        "Daily visitor cap of 2,300 — your guide/agency must book tickets at least 1 day in advance with passport details [6]",
        "The climb to the top is roughly 300 steps at 12,000+ feet — go slow and take breaks",
        "Visit in the morning when light hits the White Palace beautifully",
        "Photography is prohibited inside the chapels but allowed on exterior terraces",
      ],
      priceTier: 2,
    },
    {
      slug: "jokhang-temple-and-barkhor-kora",
      name: "Jokhang Temple and Barkhor Kora",
      photo: { src: "/photos/lhasa/jokhang-temple-and-barkhor-kora.jpg", alt: "Jokhang Temple and Barkhor Kora, Lhasa" },
      topPick: true,
      description:
        "The holiest temple in Tibetan Buddhism, founded in the 7th century, housing the most sacred Buddha statue in Tibet — the Jowo Rinpoche. But the experience begins outside: the Barkhor kora is the pilgrim circuit encircling the temple, alive with prostrating devotees, prayer wheel spinners, incense burners, and chanting monks. Walking the kora at dawn amid hundreds of pilgrims is Lhasa's single most powerful experience [2].",
      time: "2-3 hours (temple interior + kora circuit + Barkhor Street market)",
      location:
        "Heart of the Old Town, Barkhor Square. Walking distance from most central hotels",
      cost: "$12/p ($12 entrance to Jokhang Temple interior — cash only in RMB)",
      tips: [
        "Walk the Barkhor kora at dawn (6:00-7:30 AM) before entering the temple — the pilgrim atmosphere is most intense at first light",
        "Always walk clockwise — this is the direction of Buddhist circumambulation",
        "Temple interior open to tourists only in the afternoon (11:30 AM - 5:30 PM); reserve one day ahead [2]",
        "Barkhor Street market surrounding the kora sells prayer flags, turquoise jewelry, singing bowls, and Tibetan crafts — bargaining expected",
      ],
      priceTier: 1,
    },
    {
      slug: "sera-monastery-debates",
      name: "Sera Monastery — Monk Debates",
      photo: { src: "/photos/lhasa/sera-monastery-debates.jpg", alt: "Sera Monastery — Monk Debates, Lhasa" },
      topPick: true,
      description:
        "One of the three great Gelug monasteries of Tibet, Sera is most famous for its afternoon debating courtyard. Every day except Sunday from 3:00-5:00 PM, monks in crimson robes gather under trees and engage in rapid-fire philosophical debates — punctuated by dramatic hand-clapping, foot-stamping, and theatrical gestures. It is mesmerizing, kinetic, and unlike anything you've seen in any other religious tradition [7].",
      time: "2-3 hours (monastery tour + debates from 3:00-5:00 PM)",
      location:
        "5 km north of central Lhasa, at the foot of Sera Utse mountain. 15-20 min by taxi",
      cost: "$7/p ($7 entrance before 5 PM)",
      tips: [
        "Arrive by 2:30 PM to explore the monastery chapels before debates begin at 3:00 PM",
        "No debates on Sundays — plan accordingly",
        "Sit on the stone walls around the debating courtyard for the best vantage point",
        "Your guide can explain the philosophical points being debated — it transforms the experience [7]",
      ],
      priceTier: 1,
    },
    {
      slug: "yamdrok-lake-day-trip",
      name: "Yamdrok Lake Day Trip",
      topPick: true,
      description:
        "One of Tibet's three sacred lakes, Yamdrok-tso sits at 14,570 feet with water so turquoise it looks digitally enhanced. The drive from Lhasa crosses the 16,500-foot Kamba La pass with jaw-dropping panoramic views of the lake backed by snow-capped peaks. Closer to Lhasa and more accessible than Namtso, Yamdrok is the better choice for a day trip and lies on the road to Shigatse [8].",
      time: "Full day (2-3 hours each way + 2-3 hours at lake and pass viewpoints)",
      location:
        "100 km southwest of Lhasa. ~2-3 hours by car via Kamba La pass",
      cost: "$60-80/p (private car and driver arranged through your mandatory tour agency; entrance fee ~$5)",
      tips: [
        "The Kamba La pass viewpoint (16,500 ft) is the money shot — turquoise lake with 23,000-foot Nojin Kangsang glacier behind",
        "Do NOT attempt this on your first day in Lhasa — acclimatize for at least 2 days before going to higher altitude [8]",
        "Bring warm layers — the pass is significantly colder and windier than Lhasa",
        "Pairs well with a stop at Samding Monastery on the lake's southern shore",
      ],
      priceTier: 3,
    },
    {
      slug: "namtso-lake-day-trip",
      name: "Namtso Lake — Overnight Option",
      topPick: false,
      description:
        "Tibet's largest sacred lake at 15,479 feet, backed by the snow-covered Nyenchen Tanglha mountain range. The scale is staggering — the lake is 70 km long. The Tashi Dor peninsula on the south shore has meditation caves, a small monastery, and the iconic holy rock formations. More remote and more dramatic than Yamdrok, but also higher and farther [8].",
      time: "Very long day trip (4-5 hours each way) or better as an overnight",
      location:
        "220 km north of Lhasa across the 17,100-foot Laken La pass. 4-5 hours by car",
      cost: "$80-120/p (private car, driver, entrance ~$15, shuttle bus ~$14; guesthouse overnight ~$20-40)",
      tips: [
        "Strongly consider an overnight at Tashi Dor — the sunset and sunrise over the lake with Nyenchen Tanglha are extraordinary",
        "At 15,479 feet, altitude effects are more intense — only attempt after 3+ days acclimatizing in Lhasa",
        "Basic guesthouses at Tashi Dor have no heating and limited electricity — bring a sleeping bag liner and warm layers [8]",
        "The road crosses Laken La pass (17,100 ft) — brief stops only; don't linger at extreme altitude",
      ],
      priceTier: 4,
    },
    {
      slug: "drepung-monastery",
      name: "Drepung Monastery",
      photo: { src: "/photos/lhasa/drepung-monastery.jpg", alt: "Drepung Monastery, Lhasa" },
      topPick: false,
      description:
        "Once the largest monastery in the world with over 10,000 monks, Drepung sprawls across a mountainside west of Lhasa like a whitewashed city. Founded in 1416, it served as the seat of the Dalai Lamas before the Potala was built. The Ganden Palace within the complex is where the 2nd-5th Dalai Lamas lived. Fewer tourists than Sera, more contemplative atmosphere [9].",
      time: "2-3 hours",
      location:
        "8 km west of central Lhasa, at the foot of Mount Gambo Utse. 20 min by taxi",
      cost: "$7/p ($7 entrance)",
      tips: [
        "Visit in the morning when monks are chanting in the assembly hall — the deep resonant sound in the dark, incense-filled hall is profoundly moving",
        "The kora path around the monastery offers excellent hillside hiking with city views",
        "Combine with Nechung Monastery (the State Oracle's temple, 10 min walk downhill) for a full morning",
        "Significant uphill walking — pace yourself at altitude [9]",
      ],
      priceTier: 1,
    },
    {
      slug: "norbulingka-summer-palace",
      name: "Norbulingka — Summer Palace",
      photo: { src: "/photos/lhasa/norbulingka-summer-palace.jpg", alt: "Norbulingka — Summer Palace, Lhasa" },
      topPick: false,
      description:
        "The Dalai Lamas' summer palace and garden complex, a UNESCO World Heritage Site alongside the Potala. Norbulingka means 'Jeweled Garden' — 36 hectares of parkland, pavilions, and palace buildings. The New Summer Palace (built for the 14th Dalai Lama in the 1950s) contains remarkably personal murals depicting the entire history of Tibet [10].",
      time: "1.5-2 hours",
      location:
        "Western Lhasa, 2 km southwest of Potala Palace. 10 min by taxi",
      cost: "$8/p ($8 entrance in peak season)",
      tips: [
        "Visit the New Summer Palace first — the murals are the highlight and are remarkably well-preserved",
        "The gardens are peaceful and relatively uncrowded — a welcome contrast to the intensity of the Barkhor",
        "Good place for a quiet afternoon when you need a lower-energy activity during acclimatization [10]",
      ],
      priceTier: 1,
    },
    {
      slug: "barkhor-street-market",
      name: "Barkhor Street Market and Teahouse Culture",
      topPick: false,
      description:
        "The market stalls lining the Barkhor kora circuit sell everything from prayer flags and mala beads to turquoise jewelry, yak bone carvings, and Tibetan thangka paintings. But the real cultural treasure is the teahouse scene — traditional Tibetan sweet tea houses where locals gather for hours over endless cups of sweet milky tea, socializing and people-watching.",
      time: "1.5-2 hours",
      location:
        "Barkhor circuit around Jokhang Temple, Old Town",
      cost: "Free (purchases and tea vary — sweet tea ~$0.30/cup)",
      tips: [
        "Bargaining is expected at market stalls — start at roughly 40% of asking price",
        "Duck into one of the traditional teahouses on the side streets off Barkhor for sweet tea — point to what others are drinking if no English",
        "The market is most active mid-morning through afternoon",
        "Quality varies wildly — genuine turquoise and coral are increasingly rare; ask your guide for honest guidance",
      ],
      priceTier: 0,
    },
    {
      slug: "tibetan-cooking-class",
      name: "Tibetan Cooking Class",
      photo: { src: "/photos/lhasa/tibetan-cooking-class.jpg", alt: "Tibetan Cooking Class, Lhasa" },
      topPick: false,
      description:
        "Hands-on cooking in a traditional Tibetan home, learning to make momos (Tibetan dumplings), thukpa (noodle soup), and tsampa. Tibetan Family Kitchen is the most highly rated operator, offering a 2-hour class that includes dinner with the family. An intimate window into daily Tibetan domestic life [3].",
      time: "2 hours (including dinner)",
      location:
        "Near Barkhor, Old Town. Arranged through your guide or directly with the restaurant",
      cost: "$21/p (~150 RMB per person including dinner)",
      tips: [
        "Book at least 1 day in advance — small class sizes fill up",
        "Tibetan Family Kitchen is the standout — owner Lhakpa's warmth and stories make it personal [3]",
        "You'll learn to fold momos by hand — the technique is meditative and satisfying",
      ],
      priceTier: 2,
    },
    {
      slug: "sera-utse-hermitage-hike",
      name: "Sera Utse Hermitage Hike",
      photo: { src: "/photos/lhasa/sera-utse-hermitage-hike.jpg", alt: "Sera Utse Hermitage Hike, Lhasa" },
      topPick: false,
      description:
        "A moderate hike up the mountainside behind Sera Monastery to the Sera Utse hermitage — a small meditation retreat clinging to the cliff at roughly 13,500 feet. The trail passes painted rock carvings, prayer flags strung across ravines, and offers panoramic views over the Lhasa valley. This is the best accessible hiking experience within Lhasa itself.",
      time: "2-3 hours round trip from Sera Monastery",
      location:
        "Behind Sera Monastery, 5 km north of central Lhasa",
      cost: "Free (included with Sera Monastery entrance or accessible from the monastery kora path)",
      tips: [
        "Only attempt after 2+ full days of acclimatization — you'll be climbing above 13,000 feet",
        "Go slow — the altitude makes even moderate inclines strenuous",
        "Morning is best for light and cooler temperatures",
        "Combine with the afternoon monastery debates for a full-day Sera experience",
      ],
      priceTier: 0,
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    // — Tibetan Traditional —
    {
      slug: "tibetan-family-kitchen",
      name: "Tibetan Family Kitchen",
      chineseName: undefined,
      category: "Tibetan Traditional",
      topPick: true,
      location:
        "Near Jokhang Temple, Barkhor area, Old Town",
      priceRange: "$5-10/p",
      cuisine: "Home-style Tibetan",
      description:
        "The #1-rated restaurant in Lhasa on TripAdvisor, run by a Tibetan family out of their home. Intimate setting with a few tables, home-cooked Tibetan dishes, and genuine warmth. Also offers a popular 2-hour cooking class. The owner Lhakpa's hospitality and storytelling make this deeply personal [3].",
      reviews:
        "Universally praised for authenticity and warmth. Small space means reservations are essential. Some dishes rotate based on market availability — flexibility is part of the charm.",
      whatToOrder:
        "Yak meat in tomato sauce, hand-made momos (steamed or fried), yak burger, chicken curry, butter tea.",
      bestFor: "Lunch or dinner. Book ahead.",
      priceTier: 1,
    },
    {
      slug: "snowland-restaurant",
      name: "Snowland Restaurant",
      chineseName: undefined,
      category: "Tibetan Traditional",
      topPick: true,
      location:
        "Near Jokhang Temple, Barkhor area, Old Town",
      priceRange: "$5-12/p",
      cuisine: "Tibetan, Nepali, and Western",
      description:
        "One of Lhasa's longest-running and most popular restaurants, right in the heart of the Barkhor. Rooftop terrace with views of the Jokhang Temple's golden roof. Reliable, flavorful Tibetan and Nepali cooking with a few Western options for those battling altitude-related appetite loss [11].",
      reviews:
        "Consistently praised for quality, portion size, and the rooftop views. A traveler institution. Can get crowded at peak meal times.",
      whatToOrder:
        "Hand-picked yak meat, sesame grilled lamb chops, momos (steamed dumplings), thukpa noodle soup, sweet tea, ginseng fruit rice.",
      bestFor: "Either meal. Rooftop lunch for the views.",
      priceTier: 1,
    },
    {
      slug: "makye-ame",
      name: "Makye Ame",
      chineseName: "\u739b\u5409\u963f\u7c73",
      category: "Tibetan Traditional",
      topPick: false,
      location:
        "Southeast corner of Barkhor Street, in a historic two-story Tibetan wooden building",
      priceRange: "$6-14/p",
      cuisine: "Tibetan, Nepali, and Western",
      description:
        "Set in a beautiful traditional Tibetan building on Barkhor Street, Makye Ame is named after a love poem by the 6th Dalai Lama who allegedly met his lover at this spot. The second-floor window seats overlook the Barkhor kora — watching pilgrims circle below while drinking sweet tea is quintessential Lhasa [11].",
      reviews:
        "Setting is the star — the Barkhor views from the upper floor are unbeatable. Food is decent but not as strong as Tibetan Family Kitchen. Worth visiting for the atmosphere and history.",
      whatToOrder:
        "Yak steak, momos, Nepali curry, sweet tea or yak butter tea. Come for the views and atmosphere more than the food.",
      bestFor: "Afternoon tea or lunch with a Barkhor view",
      priceTier: 1,
    },
    // — Teahouse / Casual —
    {
      slug: "tashi-restaurant",
      name: "Tashi Restaurant (Tashi I)",
      photo: { src: "/photos/lhasa/tashi-restaurant.jpg", alt: "Tashi Restaurant (Tashi I), Lhasa" },
      chineseName: undefined,
      category: "Teahouse / Casual",
      topPick: false,
      location:
        "Near Barkhor area, Old Town",
      priceRange: "$3-8/p",
      cuisine: "Tibetan and Western backpacker fare",
      description:
        "A longtime Lhasa institution popular with both travelers and locals. Straightforward Tibetan food alongside pancakes, pasta, and other comfort food for altitude-weary stomachs. Unpretentious, reliable, and affordable.",
      reviews:
        "Solid reviews for consistency and friendliness. Not the most refined cooking, but dependable when you need a familiar meal or a gentle dish during acclimatization.",
      whatToOrder:
        "Tibetan momos, tsampa porridge, thukpa, fried yak meat. Western options if altitude has killed your appetite.",
      bestFor: "Breakfast or casual lunch",
      priceTier: 1,
    },
    // — Regional / Nepali —
    {
      slug: "dunya-restaurant",
      name: "Dunya Restaurant",
      chineseName: undefined,
      category: "International",
      topPick: false,
      location:
        "Beijing East Road, central Lhasa",
      priceRange: "$8-18/p",
      cuisine: "International (European, Tibetan, Nepali)",
      description:
        "Run to European hygienic standards with quality ingredients and a diverse menu spanning yak burgers to Italian pasta. A common recommendation for travelers who need a break from heavy Tibetan fare or are struggling with altitude-related nausea. Good wine and beer list — unusual for Lhasa [11].",
      reviews:
        "Praised for food quality and cleanliness. Pricier than local Tibetan restaurants but worth it for those seeking variety. Helpful English-speaking staff.",
      whatToOrder:
        "Yak burger, pasta dishes, fresh salads, Nepali curry. Good coffee — a rarity in Lhasa.",
      bestFor: "Dinner or when you need comfort food",
      priceTier: 1,
    },
    // — Sichuan Chinese —
    {
      slug: "sichuan-restaurants-beijing-east-road",
      name: "Sichuan Restaurants on Beijing East Road",
      photo: { src: "/photos/lhasa/sichuan-restaurants-beijing-east-road.jpg", alt: "Sichuan Restaurants on Beijing East Road, Lhasa" },
      chineseName: undefined,
      category: "Regional Chinese",
      topPick: false,
      location:
        "Beijing East Road between Potala Palace and Barkhor, central Lhasa",
      priceRange: "$4-10/p",
      cuisine: "Sichuan Chinese",
      description:
        "Lhasa has a large Sichuan Chinese population, and Beijing East Road is lined with small Sichuan restaurants serving fiery, numbing, deeply flavorful food. These no-frills spots are where local Chinese residents eat — cheap, authentic, and a world away from Tibetan cuisine.",
      reviews:
        "Quality varies but the busy ones are consistently good. No English menus — use a translation app or point at neighboring tables. Excellent value.",
      whatToOrder:
        "Mapo doufu, dry-fried green beans, twice-cooked pork (huiguorou), dan dan noodles, any hotpot.",
      bestFor: "Either meal. Look for the busiest spot.",
      priceTier: 1,
    },
    // — Sweet Tea —
    {
      slug: "lhasa-sweet-tea-houses",
      name: "Traditional Lhasa Sweet Tea Houses",
      photo: { src: "/photos/lhasa/lhasa-sweet-tea-houses.jpg", alt: "Traditional Lhasa Sweet Tea Houses, Lhasa" },
      chineseName: undefined,
      category: "Teahouse Culture",
      topPick: true,
      location:
        "Throughout Old Town, especially side streets off the Barkhor",
      priceRange: "$0.30-1/p",
      cuisine: "Tibetan sweet tea, butter tea, snacks",
      description:
        "The Tibetan sweet tea house is to Lhasa what the pub is to London — a social institution where locals spend hours chatting, playing dice games, and drinking cup after cup of sweet milky tea brewed with black tea leaves, milk, and sugar. Stepping into a packed, steamy tea house and sitting among monks, traders, and families is one of the most authentic everyday experiences in Lhasa [4].",
      reviews:
        "Not a restaurant review experience — this is cultural immersion. The tea costs almost nothing. The warmth, noise, and community atmosphere are the point.",
      whatToOrder:
        "Sweet tea (ja ngamo) — leave coins on the table and the server will refill your cup. Try butter tea (po cha) at least once — salty, buttery, and an acquired taste.",
      bestFor: "Anytime. Mid-morning or mid-afternoon for peak atmosphere.",
      priceTier: 1,
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Tibet Travel Permit": [
      "MANDATORY: All foreign visitors must obtain a Tibet Travel Permit (TTP) through a licensed Tibetan travel agency. You cannot visit Tibet independently [12].",
      "Apply 20-25 days before travel. Processing takes ~10 days. Your agency handles everything but needs passport scans and a confirmed itinerary.",
      "The permit itself is free, but it's always bundled into your tour package cost (guide + driver + vehicle + permit typically $150-250/day for a private tour for 2-3 people).",
      "Independent travel is NOT permitted for foreigners — you must have a registered guide and driver for your entire stay in Tibet.",
    ],
    "Altitude & Health": [
      "Lhasa sits at 11,995 feet (3,656m). Most visitors experience some altitude sickness symptoms (headache, fatigue, shortness of breath) in the first 24-48 hours [1].",
      "Dedicate your first day entirely to acclimatization — rest at the hotel, drink water, take short gentle walks. Do NOT visit the Potala Palace or do anything strenuous on Day 1.",
      "Hydrate aggressively — drink at least 3-4 liters of water per day. Avoid alcohol for the first 2 days.",
      "Consider asking your doctor about Diamox (acetazolamide) before the trip. Ibuprofen helps with altitude headaches.",
      "Do NOT attempt lake day trips (Yamdrok or Namtso) until you've acclimatized for at least 2-3 days — both lakes are significantly higher than Lhasa.",
    ],
    "Getting Around": [
      "Your mandatory guide and driver handle all transportation. Most Lhasa sightseeing is walkable from the Barkhor area.",
      "For the Barkhor kora and Old Town, walking is the only way — narrow alleys don't accommodate vehicles.",
      "Taxis are cheap within Lhasa (most rides ~$1-3) but your guide typically arranges transport.",
    ],
    "Money & Communication": [
      "Payment: Cash (RMB) is more commonly needed in Lhasa than in eastern Chinese cities. Bring sufficient cash. Some shops accept WeChat Pay/Alipay.",
      "VPN: Same as mainland China — Google, WhatsApp, Instagram are blocked. Download and configure a VPN before arriving.",
      "Language: Tibetan and Mandarin are spoken. English is limited to tourist-facing restaurants and hotels. Your mandatory guide bridges all language gaps.",
      "Currency: All USD prices based on exchange rate of approximately 1 USD = 7.2 RMB.",
    ],
    "Cultural Etiquette": [
      "Always walk clockwise around temples, monasteries, stupas, and mani stone piles — this is the direction of Buddhist circumambulation.",
      "Ask permission before photographing monks or pilgrims. Many are happy to be photographed; some prefer not to be.",
      "Photography is prohibited inside most temple and monastery chapels.",
      "Remove hats when entering temple chapels. Dress modestly (cover shoulders and knees).",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Lhasa October Weather & Climate — Travel China Guide (https://www.travelchinaguide.com/cityguides/tibet/lhasa/weather-october.htm)",
    "[2] Top Things to Do in Tibet — China Highlights (https://www.chinahighlights.com/tibet/top-things-to-do.htm)",
    "[3] Best Restaurants in Lhasa — Tibet Travel (https://www.tibettravel.org/tibet-travel-advice/tibetan-restaurants-in-lhasa.html)",
    "[4] Where to Stay in Lhasa — The Land of Snows (https://www.thelandofsnows.com/best-hotels-in-lhasa/)",
    "[5] Hotels in Lhasa — Asia Odyssey Travel (https://www.asiaodysseytravel.com/lhasa/hotels.html)",
    "[6] Potala Palace Travel Guide — Tibet Tour (https://www.tibettour.org/lhasa-tours/potala-palace.html)",
    "[7] Sera Monastery Guide — Tibet Tour (https://www.tibettour.org/lhasa-tours/sera-monastery.html)",
    "[8] Namtso Lake vs Yamdrok Lake — Windhorse Tour (https://windhorsetour.com/tibet-travel-tips/tour-namsto-lake-vs-yamdrok-lake)",
    "[9] Temples in and Around Lhasa — Tibet Travel (https://www.tibettravel.org/tibet-travel-guide/temples-in-and-around-lhasa.html)",
    "[10] Norbulingka Palace — Tibet Travel (https://www.tibettravel.org/tibet-travel-guide/norbulingka.html)",
    "[11] Top Restaurants in Lhasa — Great Tibet Tour (https://www.greattibettour.com/lhasa-travel-tips/lhasa-restaurants.html)",
    "[12] Tibet Travel Permit Guide 2026 — China Highlights (https://www.chinahighlights.com/tibet/visa-document.htm)",
  ],
};
