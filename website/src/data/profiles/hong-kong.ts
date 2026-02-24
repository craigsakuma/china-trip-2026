import type { CityProfile } from "@/types";

export const hongKongProfile: CityProfile = {
  slug: "hong-kong",
  heroPhoto: { src: "/photos/hong-kong/_hero.jpg", alt: "Hong Kong skyline and Victoria Harbour at dusk", credit: "Simon Zhu" },
  executiveSummary: [
    "Hong Kong in mid-October is widely regarded as the city at its finest. The brutal summer humidity has broken, typhoon season is winding down (though a tail-end storm remains a small statistical possibility), and temperatures settle into a sweet spot that makes the city\u2019s extraordinary network of hiking trails genuinely enjoyable. The urban frenzy that defines Hong Kong year-round is still fully present, but October light is golden, the harbor shimmers, and outdoor tables fill nightly with locals who have emerged from months of air-conditioned hibernation.",
    "Hong Kong remains one of the world\u2019s most singular cities: a vertical Cantonese metropolis with a British colonial overlay, a booming contemporary art scene layered over ancient temple traditions, and a food culture of almost absurd range and quality. At the same time, it is compact and superbly connected by one of the world\u2019s best public transit systems. Three friends willing to walk, take the MTR, and eat at plastic-stool restaurants alongside bankers and construction workers can experience the full spectrum \u2014 from incense-clouded ancestral halls to Michelin-starred rooftop dining \u2014 within a single day.",
    "One practical note: October falls at the very tail of typhoon season. The statistical likelihood of a direct hit in October is low \u2014 roughly 1 in 10 years experiences a significant October storm. Travelers should download the Hong Kong Observatory app (MyObservatory), purchase travel insurance with typhoon disruption coverage, and maintain flexibility in their schedule for any outdoor day trips planned in the latter part of the month.",
  ],
  famousFor: [
    "dim sum",
    "harbor views",
    "hiking trails",
    "roast goose",
    "temple culture",
    "Star Ferry",
    "night markets",
  ],
  whyItFits: [
    "World-class hiking trails accessible by public transit (Dragon\u2019s Back, Lion Rock, Lantau Peak)",
    "Incredible food scene from $6 dai pai dong breakfasts to three-Michelin-star Cantonese dining",
    "Compact and superbly connected \u2014 one of the world\u2019s best public transit systems",
    "Deep temple culture and island day trips offer respite from urban intensity",
    "No mainland firewall \u2014 Google Maps, WhatsApp, and all apps work normally",
  ],
  weather: [
    {
      period: "Early Oct",
      avgHigh: 84,
      avgLow: 75,
      rainChance: 30,
      precip: 1.8,
      sunrise: "6:14 AM",
      sunset: "6:11 PM",
      conditions: "Warm and hazy, still feels like late summer",
    },
    {
      period: "Mid Oct",
      avgHigh: 81,
      avgLow: 72,
      rainChance: 25,
      precip: 1.3,
      sunrise: "6:20 AM",
      sunset: "5:58 PM",
      conditions: "Transition window, spectacular mornings, afternoons can cloud up",
    },
    {
      period: "Late Oct",
      avgHigh: 77,
      avgLow: 68,
      rainChance: 15,
      precip: 0.9,
      sunrise: "6:27 AM",
      sunset: "5:46 PM",
      conditions: "Best stretch, excellent for hikes and island day trips",
    },
  ],
  whatToPack:
    "Lightweight, breathable clothing. One warmer layer (light fleece or packable down) for cool evenings and heavily air-conditioned interiors. Waterproof trail shoes for hikes. Compact rain poncho or packable umbrella. Sunscreen and wide-brim hat for exposed trails.",

  // ─── Neighborhoods ─────────────────────────────────────────────
  neighborhoods: [
    {
      slug: "sheung-wan-sai-ying-pun",
      name: "Sheung Wan / Sai Ying Pun",
      topPick: true,
      description:
        "The most intellectually rich neighborhood in Hong Kong for curious travelers. Sheung Wan is the old trading quarter, a place of antique shops, dried seafood markets, ancestral halls, and incense-filled air that merges seamlessly into a contemporary arts district (Po Hing Fong / PoHo) dense with galleries, independent cafes, and designer studios. Next door, Sai Ying Pun is quieter, more residential, and deeply local.",
      whyItFitsUs:
        "The pedestrian experience is exceptional. You can wander from a century-egg vendor to a Michelin-listed restaurant to a gallery showing contemporary Cantonese photography within four city blocks. The food at every price point is outstanding.",
      nearby:
        "Man Mo Temple (10 min walk), Cat Street antiques (15 min walk), Hollywood Road galleries (15 min walk), Central IFC/Star Ferry (3 MTR stops)",
      hotels:
        "The Figo (27-room boutique, ~$130-180/night), Hotel Indigo Hong Kong Island (design-forward, ~$250-350/night)",
    },
    {
      slug: "wan-chai",
      name: "Wan Chai",
      topPick: false,
      description:
        "Once notorious \u2014 bars, sailors, neon \u2014 now reclaimed as one of Hong Kong\u2019s most layered neighborhoods. The Blue House heritage tenement sits beside a wet market operating since the 1930s. Lee Tung Avenue brings boutique shopping under a leafy canopy. Yet two blocks away you\u2019re in a working-class zone with bamboo scaffolding and mahjong parlors.",
      whyItFitsUs:
        "Excellent food diversity without feeling like an expat party zone. Walking distance to Causeway Bay and Tai Hang. Central on the MTR. Rewards slow, unplanned wandering.",
      nearby:
        "Blue House Cluster, Hong Kong Arts Centre, Convention and Exhibition Centre waterfront, Wan Chai MTR",
      hotels:
        "AKI Hong Kong - MGallery Collection (~$180-240/night), Mira Moon (~$250-350/night)",
    },
    {
      slug: "tai-hang",
      name: "Tai Hang",
      topPick: false,
      description:
        "A hidden gem \u2014 a former fishing village grid urbanized in the 1890s but never fully modernized. Narrow streets, low-rise, and still feels vaguely like a village tucked inside a city. Independent restaurants, craft cocktail bars, boutique bakeries. Known for the annual Fire Dragon Dance.",
      whyItFitsUs:
        'Perhaps the most "village within a city" feel on Hong Kong Island. Small-scale, local-facing food scene. Walkable to Causeway Bay and Wan Chai. No clubs, no massive malls.',
      nearby:
        "Victoria Park (5 min walk), Causeway Bay MTR (10 min walk), Tin Hau MTR (8 min walk)",
      hotels:
        "Courtyard by Marriott Hong Kong Tai Hang (~$150-210/night), Hotel Victoria on the Harbour (~$280-380/night)",
    },
    {
      slug: "tsim-sha-tsui",
      name: "Tsim Sha Tsui (Kowloon)",
      topPick: false,
      description:
        "Traditional gateway to Kowloon across Victoria Harbour. Cultural infrastructure is outstanding: Museum of Art, Museum of History, Space Museum, waterfront promenade (Avenue of Stars), 1881 Heritage complex. Staying in TST provides immediate Kowloon access.",
      whyItFitsUs:
        "Kowloon-side perspective, harbor crossing by Star Ferry becomes ritual, unmatched museum density within walking distance.",
      nearby:
        "Clock Tower, Museum of History (5 min walk), Museum of Art (10 min walk), Star Ferry Pier (5 min walk), TST MTR",
      hotels:
        "K11 ARTUS (~$220-320/night), The Salisbury YMCA (~$130-200/night, best value harbor views), The Peninsula (~$500-900+/night, legendary)",
    },
  ],

  // ─── Activities ────────────────────────────────────────────────
  activities: [
    {
      slug: "dragons-back-hike",
      name: "Dragon\u2019s Back Hike",
      topPick: true,
      description:
        "Ridgeline hike with panoramic South China Sea views, finishes at Shek O Beach.",
      time: "3-4 hours",
      location: "Start at Shek O Road bus stop",
      cost: "$2-3/p (bus fare + lunch $15-25/p)",
      tips: [
        "Start before 9am to beat the heat",
        "Wear sunscreen \u2014 the ridge is fully exposed",
        "Finish at Shek O for a seafood lunch on the beach",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/dragons-back-hike.jpg", alt: "Ridgeline hiking trail with ocean views" },
    },
    {
      slug: "lion-rock-hike",
      name: "Lion Rock Hike",
      topPick: true,
      description:
        "Cultural pilgrimage to a 495m granite summit with views of both Kowloon and Hong Kong Island.",
      time: "4-5 hours round trip",
      location: "Near Wong Tai Sin MTR",
      cost: "~$3/p (taxi to trailhead)",
      tips: [
        "Go on weekday mornings for fewer crowds",
        "Steep stairs \u2014 proper hiking shoes essential",
        "Bring 2L water per person",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/lion-rock-hike.jpg", alt: "Urban hiking with Kowloon skyline views" },
    },
    {
      slug: "lantau-peak-hike",
      name: "Lantau Peak Hike",
      topPick: false,
      description:
        "934m, second-highest summit in Hong Kong. Classic pairing with Po Lin Monastery and Giant Buddha.",
      time: "5-6 hours",
      location: "Lantau Island via ferry or Ngong Ping 360",
      cost: "$7-20/p depending on transport",
      tips: [
        "October offers the best visibility of the year",
        "The sunrise hike is legendary \u2014 start in darkness from Ngong Ping",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/lantau-peak-hike.jpg", alt: "Lantau Peak trail above the clouds" },
    },
    {
      slug: "chi-lin-nunnery-and-nan-lian-garden",
      name: "Chi Lin Nunnery and Nan Lian Garden",
      topPick: true,
      description:
        "Tang Dynasty Buddhist complex built without a single nail. Adjacent classical Chinese garden with bonsai, lotus ponds, and timber pavilions.",
      time: "2-3 hours",
      location: "Diamond Hill MTR",
      cost: "Free entry, vegetarian lunch ~$10-15/p",
      tips: [
        "Arrive 9am on a weekday for peaceful atmosphere",
        "Combine with Wong Tai Sin Temple (one MTR stop away)",
      ],
      priceTier: 0,
      photo: { src: "/photos/hong-kong/chi-lin-nunnery-and-nan-lian-garden.jpg", alt: "Tang Dynasty temple complex wooden architecture" },
    },
    {
      slug: "man-mo-temple-and-hollywood-road",
      name: "Man Mo Temple and Hollywood Road Antiques Walk",
      topPick: true,
      description:
        "Hong Kong\u2019s oldest surviving structure (1847), wreathed in incense coils hanging from the ceiling. Cat Street antiques corridor runs alongside.",
      time: "2-3 hours",
      location: "Sheung Wan MTR",
      cost: "Free temple, $20-100+ for antiques",
      tips: [
        "Arrive 8-10am before tour groups",
        "Bargain at 50-60% of asking price on Cat Street",
      ],
      priceTier: 0,
      photo: { src: "/photos/hong-kong/man-mo-temple-and-hollywood-road.jpg", alt: "Incense coils hanging from temple ceiling" },
    },
    {
      slug: "star-ferry-crossing-and-tst-waterfront",
      name: "Star Ferry Crossing and TST Waterfront",
      topPick: false,
      description:
        "Since 1888, an 8-minute harbor crossing that remains one of the world\u2019s great short journeys. TST promenade hosts the Symphony of Lights at 8pm nightly.",
      time: "30 min crossing + 1-2 hours promenade",
      location: "Central Pier 7",
      cost: "$0.44/p",
      tips: [
        "Sit on the upper deck for best views",
        "Cross at dusk for golden-hour harbor light",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/star-ferry-crossing-and-tst-waterfront.jpg", alt: "Victoria Harbour with Star Ferry crossing" },
    },
    {
      slug: "hong-kong-museum-of-history",
      name: "Hong Kong Museum of History",
      topPick: false,
      description:
        '"The Hong Kong Story" permanent exhibition spans 8 galleries from prehistory through the 1997 handover.',
      time: "2.5-3 hours",
      location: "TST, Chatham Road South",
      cost: "Free permanent exhibition",
      tips: [
        "Free on Wednesdays",
        "Combine with nearby Museum of Art for a full museum day",
      ],
      priceTier: 0,
      photo: { src: "/photos/hong-kong/hong-kong-museum-of-history.jpg", alt: "Hong Kong cultural museum building exterior" },
    },
    {
      slug: "kowloon-walled-city-park",
      name: "Kowloon Walled City Park",
      topPick: false,
      description:
        "Site of the famous lawless enclave (demolished 1993). Now a classical Chinese garden with the original Yamen building and historical exhibition.",
      time: "1.5-2 hours",
      location: "Carpenter Road, Kowloon City",
      cost: "Free",
      tips: [
        "Adjacent Kowloon City Food Street has great Thai restaurants",
      ],
      priceTier: 0,
      photo: { src: "/photos/hong-kong/kowloon-walled-city-park.jpg", alt: "Classical Chinese garden in Kowloon" },
    },
    {
      slug: "mong-kok-markets-and-flower-bird-garden-circuit",
      name: "Mong Kok Markets and Flower/Bird Garden Circuit",
      topPick: false,
      description:
        "Densest urban district on earth. Flower Market, Bird Garden, and Ladies Market packed into a few vibrant blocks.",
      time: "2-3 hours",
      location: "Mong Kok MTR",
      cost: "Free to walk, street food $5-10/p",
      tips: [
        "Flower Market is best before 11am",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/mong-kok-markets-and-flower-bird-garden-circuit.jpg", alt: "Busy Mong Kok street market at night" },
    },
    {
      slug: "cheung-chau-island-day-trip",
      name: "Cheung Chau Island Day Trip",
      topPick: true,
      description:
        'Car-free island, 35-minute ferry ride. Fishing village, pirate cave, beaches, and a "Mini Great Wall" coastal trail.',
      time: "Full day",
      location: "Central Pier 5",
      cost: "Ferry $5/p round trip, food $20-30/p",
      tips: [
        "Take the first morning ferry to maximize time",
        "Rent bikes for $5-8/day to explore the island",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/cheung-chau-island-day-trip.jpg", alt: "Cheung Chau fishing village harbor" },
    },
    {
      slug: "lamma-island-seafood-day-trip",
      name: "Lamma Island Seafood Day Trip",
      topPick: false,
      description:
        "20-minute ferry to an artist colony. 90-minute trail between villages, ending at waterfront seafood restaurants.",
      time: "Full day",
      location: "Central Pier 4",
      cost: "Ferry ~$5/p round trip, seafood lunch $30-60/p",
      tips: [
        "Book Rainbow Seafood in advance",
        "Confirm live seafood prices before ordering",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/lamma-island-seafood-day-trip.jpg", alt: "Lamma Island coastal hiking trail" },
    },
    {
      slug: "temple-street-night-market-yau-ma-tei",
      name: "Temple Street Night Market + Yau Ma Tei",
      topPick: false,
      description:
        "Open-air night market with fortune tellers and dai pai dong stalls. The real Hong Kong after dark.",
      time: "2-3 hours (7pm-10pm)",
      location: "Temple Street, Yau Ma Tei MTR",
      cost: "Free browsing, dinner $12-20/p",
      tips: [
        "Begin at Kansu Street Jade Market before it closes",
        "Best food is on Woosung Street, not the main market strip",
      ],
      priceTier: 1,
      photo: { src: "/photos/hong-kong/temple-street-night-market-yau-ma-tei.jpg", alt: "Temple Street Night Market stalls and lights" },
    },
    {
      slug: "wong-tai-sin-temple",
      name: "Wong Tai Sin Temple",
      topPick: true,
      description:
        "Most actively worshipped temple in Hong Kong. Kau cim fortune sticks, three religions in one compound, and a vibrant local atmosphere.",
      time: "1.5-2 hours",
      location: "Wong Tai Sin MTR",
      cost: "Free entry",
      tips: [
        "Visit on a weekday morning for a more contemplative experience",
        "Combine with Chi Lin Nunnery (one MTR stop away)",
      ],
      priceTier: 0,
      photo: { src: "/photos/hong-kong/wong-tai-sin-temple.jpg", alt: "Wong Tai Sin Temple main hall with incense" },
    },
  ],

  // ─── Restaurants ───────────────────────────────────────────────
  restaurants: [
    {
      slug: "tim-ho-wan",
      name: "Tim Ho Wan",
      chineseName: "\u6dfb\u597d\u904b",
      category: "Dim Sum",
      topPick: true,
      location: "Sham Shui Po",
      priceRange: "$15-22/p",
      cuisine: "Dim sum, Michelin Bib Gourmand",
      description:
        "World\u2019s cheapest Michelin restaurant. Tiny, no-frills, and perpetually packed. The BBQ pork buns with their crackly sugar-topped crust are iconic.",
      whatToOrder:
        "BBQ pork buns (the signature), har gow, turnip cake.",
      bestFor: "Late breakfast / early lunch",
      priceTier: 1,
      photo: { src: "/photos/hong-kong/tim-ho-wan.jpg", alt: "BBQ pork buns with crackly sugar top" },
    },
    {
      slug: "luk-yu-tea-house",
      name: "Luk Yu Tea House",
      chineseName: "\u9678\u7fbd\u8336\u5ba4",
      category: "Traditional Dim Sum / Heritage",
      topPick: false,
      location: "24-26 Stanley Street, Central",
      priceRange: "$25-40/p",
      cuisine: "Traditional dim sum, Cantonese classics",
      description:
        "Est. 1933, dark wood interior, stained glass, ceiling fans. Legendary brusque service is part of the experience. One of the last bastions of old-school Cantonese tea culture.",
      whatToOrder:
        "Chicken feet, BBQ pork buns, egg tarts.",
      bestFor: "Weekday morning yum cha",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/luk-yu-tea-house.jpg", alt: "Traditional tea house dark wood interior" },
    },
    {
      slug: "yung-kee",
      name: "Yung Kee",
      chineseName: "\u93de\u8a18\u9152\u5bb6",
      category: "Cantonese Roast",
      topPick: true,
      location: "32-40 Wellington Street, Central",
      priceRange: "$30-50/p",
      cuisine: "Cantonese roast meats, traditional Cantonese",
      description:
        "Est. 1942, charcoal-fired roast goose (300 birds per day). Multi-story institution on Wellington Street. The roast goose has been a Hong Kong benchmark for over 80 years.",
      whatToOrder:
        "Roast goose (the signature), century egg with pickled ginger.",
      bestFor: "Lunch",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/yung-kee.jpg", alt: "Charcoal-fired roast goose on platter" },
    },
    {
      slug: "maxims-palace",
      name: "Maxim\u2019s Palace",
      chineseName: "\u7f8e\u5fc3\u7687\u5bae",
      category: "Classic Trolley Dim Sum",
      topPick: false,
      location: "City Hall, Central",
      priceRange: "$18-28/p",
      cuisine: "Classic Cantonese dim sum, trolley service",
      description:
        "Old-school trolley dim sum in a grand ballroom. Carts rattle past with bamboo steamers \u2014 point and eat. This is how dim sum was meant to be experienced.",
      whatToOrder:
        "Whatever the trolley brings \u2014 that\u2019s the whole point.",
      bestFor: "Weekend brunch",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/maxims-palace.jpg", alt: "Dim sum trolley with bamboo steamers" },
    },
    {
      slug: "sing-heung-yuen",
      name: "Sing Heung Yuen",
      chineseName: "\u52dd\u9999\u5712",
      category: "Dai Pai Dong / Street Breakfast",
      topPick: false,
      location: "Gough Street, Sheung Wan",
      priceRange: "$6-12/p",
      cuisine: "Dai pai dong, traditional Hong Kong breakfast",
      description:
        "Open-air street stall with plastic stools and tin tables. Legendary tomato beef noodles in a rich, slightly sweet broth. One of Hong Kong\u2019s few remaining dai pai dongs.",
      whatToOrder:
        "Tomato beef noodles, butter toast, Hong Kong milk tea.",
      bestFor: "Breakfast",
      priceTier: 1,
      photo: { src: "/photos/hong-kong/sing-heung-yuen.jpg", alt: "Dai pai dong street stall with stools" },
    },
    {
      slug: "joy-hing-roasted-meat",
      name: "Joy Hing Roasted Meat",
      chineseName: "\u518d\u8208\u71d2\u81d8\u98ef\u5e97",
      category: "Cantonese Roast Meats",
      topPick: true,
      location: "265-267 Hennessy Road, Wan Chai",
      priceRange: "$10-18/p",
      cuisine: "Cantonese roast meats",
      description:
        "Benchmark char siu (BBQ pork) with a deep, caramelized glaze. Roast pork belly with impossibly crispy skin. Tiny shop, massive reputation.",
      whatToOrder:
        "Char siu rice, roast pork belly rice.",
      bestFor: "Lunch",
      priceTier: 1,
      photo: { src: "/photos/hong-kong/joy-hing-roasted-meat.jpg", alt: "Char siu BBQ pork with rice" },
    },
    {
      slug: "lin-heung-tea-house",
      name: "Lin Heung Tea House",
      chineseName: "\u84ee\u9999\u8336\u6a13",
      category: "Traditional Yum Cha / Heritage",
      topPick: false,
      location: "160 Wellington Street, Central",
      priceRange: "$15-25/p",
      cuisine: "Traditional Cantonese yum cha",
      description:
        "Operating since the 1920s. Regulars bring their own teacups. Elbows-out trolley scrambles, communal tables with strangers, and the most authentic old-Hong-Kong atmosphere still in existence.",
      whatToOrder:
        "Follow the regulars \u2014 grab whatever comes off the trolley fastest.",
      bestFor: "Early morning yum cha",
      priceTier: 1,
      photo: { src: "/photos/hong-kong/lin-heung-tea-house.jpg", alt: "Trolley dim sum with communal tables" },
    },
    {
      slug: "cha-chaan-teng-circuit",
      name: "Cha Chaan Teng Circuit",
      chineseName: undefined,
      category: "Hong Kong Caf\u00e9 / Street Food",
      topPick: false,
      location:
        "Various (Lan Fong Yuen in Central, Capital Caf\u00e9 in Wan Chai, Mido Caf\u00e9 in Yau Ma Tei)",
      priceRange: "$5-10/p",
      cuisine: "Hong Kong-style caf\u00e9 food",
      description:
        "The cha chaan teng is Hong Kong\u2019s culinary soul \u2014 a uniquely local caf\u00e9 format serving East-meets-West comfort food. Formica tables, fluorescent lights, brusque efficiency.",
      whatToOrder:
        "Pineapple buns (with butter slab), French toast (drenched in condensed milk), Hong Kong milk tea.",
      bestFor: "Breakfast or afternoon snack",
      priceTier: 1,
      photo: { src: "/photos/hong-kong/cha-chaan-teng-circuit.jpg", alt: "Hong Kong cha chaan teng formica tables" },
    },
    {
      slug: "rainbow-seafood",
      name: "Rainbow Seafood",
      chineseName: "\u5f69\u8679\u6d77\u9bae\u9152\u5bb6",
      category: "Seafood / Lamma Island",
      topPick: false,
      location: "Sok Kwu Wan, Lamma Island",
      priceRange: "$30-60/p",
      cuisine: "Cantonese seafood",
      description:
        "Most famous Lamma Island seafood restaurant. Free boat pickup from Central. Waterfront tables overlooking the fishing harbor.",
      whatToOrder:
        "Steamed fish (whatever is freshest), typhoon shelter crab, salt-and-pepper squid.",
      bestFor: "Lunch or dinner",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/rainbow-seafood.jpg", alt: "Waterfront seafood restaurant Lamma Island" },
    },
    {
      slug: "lei-garden",
      name: "Lei Garden",
      chineseName: "\u5229\u82d1\u9152\u5bb6",
      category: "Premium Cantonese",
      topPick: false,
      location: "ICBC Tower, Central",
      priceRange: "$40-70/p",
      cuisine: "Michelin-starred Cantonese",
      description:
        "Professional-class Cantonese dining. Michelin-starred, polished service, and a lunch dim sum menu that rivals any in the city.",
      whatToOrder:
        "BBQ char siu, steamed crab, dim sum at lunch.",
      bestFor: "Lunch dim sum or dinner",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/lei-garden.jpg", alt: "Elegant Cantonese restaurant interior" },
    },
    {
      slug: "lung-king-heen",
      name: "Lung King Heen",
      chineseName: "\u9f8d\u666f\u8ed2",
      category: "Cantonese Fine Dining / Splurge",
      topPick: false,
      location: "Four Seasons Hotel, Central",
      priceRange: "$100-180/p dinner",
      cuisine: "Cantonese fine dining",
      description:
        "First Chinese restaurant to receive 3 Michelin stars (2009). Harbor views, impeccable service, and Cantonese cuisine at its absolute pinnacle.",
      whatToOrder:
        "Chef\u2019s tasting menu, or order \u00e0 la carte and trust the captain\u2019s recommendations.",
      bestFor: "Weekday lunch (half the price of dinner)",
      priceTier: 4,
      photo: { src: "/photos/hong-kong/lung-king-heen.jpg", alt: "Fine dining harbor view restaurant" },
    },
    {
      slug: "chuen-cheung-kui",
      name: "Chuen Cheung Kui",
      chineseName: "\u6cc9\u7ae0\u5c45",
      category: "Hakka Cuisine",
      topPick: false,
      location: "49 Fa Yuen Street, Mong Kok",
      priceRange: "$18-30/p",
      cuisine: "Hakka home cooking",
      description:
        "Since 1963, the definitive Hakka restaurant in Hong Kong. Famous salt-baked chicken wrapped in parchment paper, cooked in coarse salt until impossibly tender.",
      whatToOrder:
        "Salt-baked chicken (the signature), stuffed tofu, braised pork belly with preserved vegetables.",
      bestFor: "Dinner",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/chuen-cheung-kui.jpg", alt: "Salt-baked chicken in parchment" },
    },
    {
      slug: "lamma-hilton",
      name: "Lamma Hilton",
      chineseName: "\u5357\u4e2b\u6f01\u6751\u6d77\u9bae\u9152\u5bb6",
      category: "Casual Seafood",
      topPick: false,
      location: "Yung Shue Wan, Lamma Island",
      priceRange: "$18-35/p",
      cuisine: "Cantonese seafood, casual waterfront",
      description:
        "Lower prices than Rainbow, relaxed outdoor setting on Lamma\u2019s main village waterfront. Popular with locals who prefer the laid-back vibe over the tourist-oriented competition.",
      whatToOrder:
        "Steamed fish, garlic prawns, salt-and-pepper mantis shrimp.",
      bestFor: "Lunch",
      priceTier: 2,
      photo: { src: "/photos/hong-kong/lamma-hilton.jpg", alt: "Casual waterfront seafood dining" },
    },
    {
      slug: "mott-32",
      name: "Mott 32",
      chineseName: "\u5345\u4e8c\u516c\u9928",
      category: "Elevated Cantonese / Splurge",
      topPick: false,
      location: "Standard Chartered Bank Building, Central",
      priceRange: "$80-130/p",
      cuisine: "Elevated Cantonese, modern Chinese",
      description:
        "Transformed bank vault with soaring ceilings and industrial-luxe design. The applewood-roasted Peking duck is a showstopper, and the dim sum is among the most refined in the city.",
      whatToOrder:
        "Applewood Peking duck (must pre-order), iberico char siu, crispy sugar-coated pork.",
      bestFor: "Dinner",
      priceTier: 3,
      photo: { src: "/photos/hong-kong/mott-32.jpg", alt: "Dramatic bank vault restaurant interior" },
    },
  ],

  // ─── Practical Tips ────────────────────────────────────────────
  practicalTips: {
    "Getting Around": [
      "MTR is the foundation \u2014 clean, punctual, cheap. Fares HK$8-20 (~$1-2.60 USD).",
      "Buy an Octopus Card immediately at the airport. HK$50 deposit + HK$200-300 load. Works on MTR, buses, trams, Star Ferry, Peak Tram, and 7-Eleven.",
      "Star Ferry: HK$3.40 (~$0.44 USD). Take it multiple times at different hours.",
      "Trams (HK Island only): Flat HK$3.00 (~$0.39 USD). Slow and atmospheric \u2014 excellent for surface exploration.",
      "Taxis: Starting fare HK$29 (~$3.70 USD). Have destination written in Chinese characters.",
      "Mid-Levels Escalator: World\u2019s longest outdoor covered escalator. Free. Uphill 10:20am-midnight, downhill 6-10am.",
    ],
    "Food & Dining": [
      "Dim sum served at lunch (10am-3pm). \"Yum cha\" = drink tea = the brunch ritual.",
      "Fewer than 20 dai pai dongs remain \u2014 eat at any you encounter.",
      "Cooked Food Centres in public housing are great cheap authentic options.",
      "Dining hours: dinner peaks 7:30-9pm, late-night snacks until 2am+.",
    ],
    "Money & Communication": [
      "HKD pegged to USD at ~HK$7.78 = $1 USD. No meaningful currency risk.",
      "Octopus card handles most small transactions. Credit cards widely accepted. Cash for street vendors and markets.",
      "Tourist SIM at airport: 30-day, 30-80GB data, ~HK$88-118 ($11-15 USD).",
      "No mainland firewall in HK \u2014 Google Maps, WhatsApp, all apps work normally.",
    ],
    "Planning Ahead": [
      "Book Lung King Heen dinner 6-8 weeks ahead, Mott 32 2-3 weeks ahead, Ngong Ping cable car in advance.",
      "Download MyObservatory app for typhoon monitoring. T8 signal = everything shuts down (rare in October).",
      "US/UK/Canada/Australia citizens get 90 days visa-free. Separate from mainland China visa.",
      "Hong Kong uses UK-style three-pin plugs (Type G, 220V/50Hz).",
    ],
  },

  // ─── Sources ───────────────────────────────────────────────────
  sources: [
    "[1] Hong Kong October Weather \u2014 Hong Kong Observatory (https://www.hko.gov.hk/en/cis/monthlyMean.htm)",
    "[2] Dragon\u2019s Back Trail Guide \u2014 AllTrails (https://www.alltrails.com/trail/hong-kong/hong-kong-island/dragons-back)",
    "[3] Lion Rock Hike Guide \u2014 Hong Kong Tourism Board (https://www.discoverhongkong.com/eng/explore/great-outdoors/lion-rock.html)",
    "[4] Lantau Peak Hiking Guide \u2014 Hong Kong Tourism Board (https://www.discoverhongkong.com/eng/explore/great-outdoors/lantau-peak.html)",
    "[5] Chi Lin Nunnery \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/chi-lin-nunnery.html)",
    "[6] Man Mo Temple \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/man-mo-temple.html)",
    "[7] Star Ferry History \u2014 Star Ferry Company (https://www.starferry.com.hk/en/history)",
    "[8] Hong Kong Museum of History \u2014 Leisure and Cultural Services (https://hk.history.museum/en/)",
    "[9] Kowloon Walled City Park \u2014 Leisure and Cultural Services (https://www.lcsd.gov.hk/en/parks/kwcp/)",
    "[10] Cheung Chau Island Guide \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/cheung-chau-island.html)",
    "[11] Lamma Island Guide \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/lamma-island.html)",
    "[12] Temple Street Night Market \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/temple-street-night-market.html)",
    "[13] Wong Tai Sin Temple \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/wong-tai-sin-temple.html)",
    "[14] Tim Ho Wan \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/tim-ho-wan)",
    "[15] Yung Kee Restaurant \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/yung-kee)",
    "[16] Joy Hing Roasted Meat \u2014 OpenRice Hong Kong (https://www.openrice.com/en/hongkong/r-joy-hing-roasted-meat-wan-chai)",
    "[17] Lung King Heen \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/lung-king-heen)",
    "[18] Mott 32 \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/mott-32)",
    "[19] Lei Garden \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/lei-garden)",
    "[20] Sheung Wan Neighborhood Guide \u2014 Time Out Hong Kong (https://www.timeout.com/hong-kong/sheung-wan-neighbourhood-guide)",
    "[21] Wan Chai Heritage Trail \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/wan-chai-heritage-trail.html)",
    "[22] Tai Hang Fire Dragon Dance \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/tai-hang-fire-dragon-dance.html)",
    "[23] Tsim Sha Tsui Guide \u2014 Time Out Hong Kong (https://www.timeout.com/hong-kong/tsim-sha-tsui-neighbourhood-guide)",
    "[24] Hong Kong Octopus Card Guide \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/plan/traveller-info/octopus-card.html)",
    "[25] MTR System Map \u2014 MTR Corporation (https://www.mtr.com.hk/en/customer/services/system_map.html)",
    "[26] Hong Kong Observatory \u2014 MyObservatory App (https://www.hko.gov.hk/en/myobservatory.htm)",
    "[27] Mong Kok Markets Guide \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/mong-kok-markets.html)",
    "[28] Luk Yu Tea House \u2014 MICHELIN Guide Hong Kong (https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/luk-yu-tea-house)",
    "[29] Lin Heung Tea House History \u2014 South China Morning Post (https://www.scmp.com/lifestyle/food-drink/article/lin-heung-tea-house)",
    "[30] Maxim\u2019s Palace City Hall \u2014 OpenRice Hong Kong (https://www.openrice.com/en/hongkong/r-maxims-palace-city-hall)",
    "[31] Sing Heung Yuen Dai Pai Dong \u2014 Time Out Hong Kong (https://www.timeout.com/hong-kong/restaurants/sing-heung-yuen)",
    "[32] Chuen Cheung Kui Hakka Restaurant \u2014 OpenRice Hong Kong (https://www.openrice.com/en/hongkong/r-chuen-cheung-kui)",
    "[33] Rainbow Seafood Lamma Island (https://www.rainbowrest.com.hk/)",
    "[34] Cha Chaan Teng Culture \u2014 South China Morning Post (https://www.scmp.com/lifestyle/food-drink/article/cha-chaan-teng-culture)",
    "[35] Hong Kong Visa Requirements \u2014 Immigration Department (https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html)",
    "[36] Hong Kong Electricity \u2014 CLP Power (https://www.clp.com.hk/en/)",
    "[37] Hong Kong Typhoon Warning Signals \u2014 Hong Kong Observatory (https://www.hko.gov.hk/en/informtc/tcWarning.htm)",
    "[38] Hollywood Road Antiques \u2014 Time Out Hong Kong (https://www.timeout.com/hong-kong/shopping/hollywood-road-antiques-guide)",
    "[39] Flower Market Road \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/flower-market-road.html)",
    "[40] Mid-Levels Escalator \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/explore/attractions/central-mid-levels-escalator.html)",
    "[41] Hong Kong Hiking Trails \u2014 AFCD (https://www.afcd.gov.hk/english/country/cou_vis/cou_vis.html)",
    "[42] Hong Kong Air Quality \u2014 Environmental Protection Department (https://www.aqhi.gov.hk/en.html)",
    "[43] Dai Pai Dong Heritage \u2014 South China Morning Post (https://www.scmp.com/lifestyle/food-drink/article/dai-pai-dong-heritage)",
    "[44] Symphony of Lights \u2014 Tourism Board (https://www.discoverhongkong.com/eng/explore/attractions/a-symphony-of-lights.html)",
    "[45] Hotel Indigo Hong Kong Island (https://www.ihg.com/hotelindigo/hotels/us/en/hong-kong/hkgid/hoteldetail)",
    "[46] The Peninsula Hong Kong (https://www.peninsula.com/en/hong-kong)",
    "[47] Cooked Food Centre Guide \u2014 Time Out Hong Kong (https://www.timeout.com/hong-kong/restaurants/best-cooked-food-centres)",
    "[48] Hong Kong SIM Card Guide \u2014 Discover Hong Kong (https://www.discoverhongkong.com/eng/plan/traveller-info/communications.html)",
    "[49] Cheung Chau Pirate Cave \u2014 Lonely Planet (https://www.lonelyplanet.com/china/hong-kong/cheung-chau)",
    "[50] Lamma Hilton \u2014 OpenRice Hong Kong (https://www.openrice.com/en/hongkong/r-lamma-hilton)",
  ],
};
