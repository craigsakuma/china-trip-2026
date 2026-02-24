import type { CityProfile } from "@/types";

// Stub profiles for cities that don't have full content yet.
// Each stub has basic weather and the exec summary from candidate-cities.md.

function stub(slug: string, summary: string[], weather: CityProfile["weather"]): CityProfile {
  return {
    slug,
    executiveSummary: summary,
    famousFor: [],
    whyItFits: [],
    weather,
    neighborhoods: [],
    activities: [],
    restaurants: [],
    practicalTips: {},
    sources: [],
  };
}

const octoberWeatherYunnan: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 72, avgLow: 55, rainChance: 25, precip: 0.8, sunrise: "7:05 AM", sunset: "6:50 PM", conditions: "Clear skies, comfortable" },
  { period: "Mid Oct", avgHigh: 68, avgLow: 52, rainChance: 18, precip: 0.5, sunrise: "7:12 AM", sunset: "6:38 PM", conditions: "Dry, golden light" },
  { period: "Late Oct", avgHigh: 64, avgLow: 48, rainChance: 10, precip: 0.3, sunrise: "7:20 AM", sunset: "6:27 PM", conditions: "Cool, crisp, excellent visibility" },
];

const octoberWeatherSichuan: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 72, avgLow: 59, rainChance: 35, precip: 1.2, sunrise: "6:55 AM", sunset: "6:40 PM", conditions: "Mild, occasionally misty" },
  { period: "Mid Oct", avgHigh: 68, avgLow: 55, rainChance: 28, precip: 0.9, sunrise: "7:02 AM", sunset: "6:28 PM", conditions: "Comfortable, autumn color emerging" },
  { period: "Late Oct", avgHigh: 63, avgLow: 52, rainChance: 20, precip: 0.6, sunrise: "7:10 AM", sunset: "6:17 PM", conditions: "Cool, atmospheric fog" },
];

const octoberWeatherHunan: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 75, avgLow: 59, rainChance: 28, precip: 1.0, sunrise: "6:20 AM", sunset: "6:05 PM", conditions: "Warm, good visibility" },
  { period: "Mid Oct", avgHigh: 70, avgLow: 55, rainChance: 25, precip: 0.8, sunrise: "6:28 AM", sunset: "5:53 PM", conditions: "Comfortable, autumn colors" },
  { period: "Late Oct", avgHigh: 64, avgLow: 50, rainChance: 18, precip: 0.5, sunrise: "6:35 AM", sunset: "5:43 PM", conditions: "Cooler, crisp mornings" },
];

const octoberWeatherShanxi: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 66, avgLow: 45, rainChance: 15, precip: 0.4, sunrise: "6:18 AM", sunset: "5:58 PM", conditions: "Dry, crisp" },
  { period: "Mid Oct", avgHigh: 59, avgLow: 39, rainChance: 10, precip: 0.2, sunrise: "6:30 AM", sunset: "5:42 PM", conditions: "Cool, clear skies" },
  { period: "Late Oct", avgHigh: 54, avgLow: 34, rainChance: 8, precip: 0.1, sunrise: "6:42 AM", sunset: "5:28 PM", conditions: "Cold mornings, layers essential" },
];

const octoberWeatherEastern: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 75, avgLow: 61, rainChance: 28, precip: 1.0, sunrise: "5:55 AM", sunset: "5:38 PM", conditions: "Warm, pleasant" },
  { period: "Mid Oct", avgHigh: 70, avgLow: 57, rainChance: 20, precip: 0.7, sunrise: "6:02 AM", sunset: "5:25 PM", conditions: "Golden autumn, osmanthus blooming" },
  { period: "Late Oct", avgHigh: 64, avgLow: 52, rainChance: 18, precip: 0.5, sunrise: "6:10 AM", sunset: "5:14 PM", conditions: "Comfortable, excellent for walking" },
];

const octoberWeatherFujian: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 82, avgLow: 70, rainChance: 28, precip: 1.2, sunrise: "5:58 AM", sunset: "5:45 PM", conditions: "Warm, humid" },
  { period: "Mid Oct", avgHigh: 79, avgLow: 66, rainChance: 20, precip: 0.8, sunrise: "6:05 AM", sunset: "5:35 PM", conditions: "Pleasant, sea breezes" },
  { period: "Late Oct", avgHigh: 75, avgLow: 63, rainChance: 15, precip: 0.5, sunrise: "6:12 AM", sunset: "5:26 PM", conditions: "Comfortable, dry" },
];

const octoberWeatherTibet: CityProfile["weather"] = [
  { period: "Early Oct", avgHigh: 64, avgLow: 36, rainChance: 10, precip: 0.2, sunrise: "7:30 AM", sunset: "7:10 PM", conditions: "Dry, intense sun at altitude" },
  { period: "Mid Oct", avgHigh: 61, avgLow: 32, rainChance: 5, precip: 0.1, sunrise: "7:38 AM", sunset: "6:58 PM", conditions: "Clear, cold mornings, pristine air" },
  { period: "Late Oct", avgHigh: 55, avgLow: 27, rainChance: 3, precip: 0.0, sunrise: "7:47 AM", sunset: "6:47 PM", conditions: "Cold, very dry, stunning visibility" },
];

export const stubProfiles: Record<string, CityProfile> = {
  guilin: stub("guilin", [
    "Iconic karst landscape with the real magic in the surrounding countryside. Yangshuo offers a laid-back, immersive base with cycling routes through rice paddies and limestone towers.",
    "Mid-October brings comfortable temps (18–25°C) and spectacular Li River scenery. The countryside cycling and hiking make this an ideal destination for active travelers.",
  ], octoberWeatherYunnan),

  chengdu: stub("chengdu", [
    "Arguably China's best food city. Thriving teahouse culture, Sichuan opera, contemporary art scene, and surrounding mountains for day hikes.",
    "October weather is mild and atmospheric — perfect for neighborhood food crawls through the Yulin Lu area and day hikes on Mount Qingcheng, the birthplace of Taoism.",
  ], octoberWeatherSichuan),

  dali: stub("dali", [
    "Sits at 2,000m beside Erhai Lake with the Cangshan Mountains as backdrop. Strong Bai ethnic minority culture that's genuinely alive — tie-dye traditions, distinct architecture, and unique cuisine.",
    "October is one of the best months: clear skies and comfortable temps. The Cangshan Mountain trail hikes, e-bike loop around Erhai Lake, and Shaping Monday market are highlights.",
  ], octoberWeatherYunnan),

  lijiang: stub("lijiang", [
    "Gateway to Tiger Leaping Gorge, one of the world's deepest and most dramatic river canyons. The two-day high trail hike is a bucket-list trek.",
    "Naxi minority culture in the area is fascinating with the right guide. Baisha village and its murals offer a quieter, more authentic experience than Lijiang Old Town.",
  ], octoberWeatherYunnan),

  chongqing: stub("chongqing", [
    "A sprawling vertical city built on mountain ridges at the Yangtze/Jialing confluence. Birthplace of Sichuan-style hotpot at its most intense.",
    "Gritty, authentic energy unlike the polished east coast megacities. The Dazu Rock Carvings (UNESCO) are a stunning day trip — 9th to 13th century Buddhist, Taoist, and Confucian cliff carvings.",
  ], octoberWeatherSichuan),

  huangshan: stub("huangshan", [
    "The mountain that inspired centuries of Chinese landscape painting — twisted pines, granite peaks, seas of cloud. October is peak autumn with stunning foliage.",
    "High probability of the famous 'sea of clouds' phenomenon. Surrounding Huizhou villages (Hongcun, Xidi) are UNESCO-listed gems with 900-year-old architecture.",
  ], octoberWeatherEastern),

  guizhou: stub("guizhou", [
    "One of China's least-visited provinces and arguably the best for authentic ethnic minority cultural immersion. Southeastern Guizhou has dozens of Miao and Dong villages with extraordinary architecture and living traditions.",
    "October may coincide with harvest festivals. The food — sour soups, fermented chili, rice wine — is distinctive and outstanding. Xijiang, Langde, Basha, and Zhaoxing are highlights.",
  ], octoberWeatherHunan),

  zhangjiajie: stub("zhangjiajie", [
    "Towering sandstone pillar formations that inspired the Avatar floating mountains. October brings excellent visibility and early autumn colors.",
    "The park is vast enough to escape crowds. The less-visited Yangjiajie section offers multi-day hiking. Surrounding Tujia minority villages offer cultural encounters.",
  ], octoberWeatherHunan),

  hangzhou: stub("hangzhou", [
    "Celebrated for over a thousand years as one of China's most beautiful cities. Beyond West Lake: exceptional tea culture, outstanding museums, and hill walks.",
    "October is outstanding — osmanthus trees bloom and scent the entire city. Hike the hills around Longjing Village visiting family tea farms.",
  ], octoberWeatherEastern),

  pingyao: stub("pingyao", [
    "One of the best-preserved ancient walled cities in China (UNESCO). Ming and Qing dynasty architecture is largely original, and local life continues within the walls.",
    "Was China's financial capital in the 19th century. October brings crisp autumn weather and far fewer tourists. Walk the complete 6km city walls and explore Rishengchang Exchange House.",
  ], octoberWeatherShanxi),

  kunming: stub("kunming", [
    "Often just a transit hub, but deserves time on its own. 'Spring City' climate, excellent Yunnan cuisine — one of China's most diverse and underrated food traditions.",
    "October is still mushroom season. The Stone Forest (UNESCO) makes a great day trip. A natural starting or ending point for any Yunnan circuit.",
  ], octoberWeatherYunnan),

  fenghuang: stub("fenghuang", [
    "Stunningly preserved riverside town with stilted wooden buildings over the Tuo River. Retains genuine Miao and Tujia minority life in surrounding villages.",
    "Dawn walks through the old town before crowds arrive are magical. Half-day trips to nearby Miao villages reveal silver jewelry-making, indigo dyeing, and sour fish soup.",
  ], octoberWeatherHunan),

  leshan: stub("leshan", [
    "Mount Emei is one of China's four sacred Buddhist mountains with multi-day hiking through mist-shrouded forests past ancient temples. October brings fog and golden autumn foliage.",
    "The Giant Buddha at Leshan (71m, world's largest stone Buddha) is genuinely impressive by boat and cliff-side stairways. Two-day hike up Mount Emei with monastery overnight is unforgettable.",
  ], octoberWeatherSichuan),

  datong: stub("datong", [
    "Underrated historical powerhouse. The Yungang Grottoes (51,000 Buddhist statues carved into cliffs in the 5th century) rival Dunhuang with a fraction of the visitors.",
    "October weather is dry and clear, ideal for outdoor sites. The Hanging Monastery — a 1,500-year-old temple built into a sheer cliff — is extraordinary. Famous knife-cut noodles.",
  ], octoberWeatherShanxi),

  luoyang: stub("luoyang", [
    "Capital of 13 Chinese dynasties, home to the Longmen Grottoes (UNESCO). The first Buddhist temple in China (White Horse Temple, founded 68 AD) and Sui-Tang dynasty ruins.",
    "October has clear skies and moderate temps. A guided tour of the Longmen Grottoes explaining Tang Dynasty artistic evolution across 2,300+ caves is essential.",
  ], octoberWeatherEastern),

  xiamen: stub("xiamen", [
    "Relaxed coastal city with excellent seafood and a mix of Southern Fujianese culture and colonial architecture. Gulangyu Island (UNESCO) is car-free with winding lanes.",
    "October is warm and dry. Day trip to Fujian Tulou (massive circular Hakka earthen fortresses) is a highlight. Outstanding street food: oyster omelets, satay noodles, shacha hotpot.",
  ], octoberWeatherFujian),

  suzhou: stub("suzhou", [
    "Nine UNESCO-listed classical gardens representing the highest achievements of Chinese landscape design. Thriving silk and embroidery tradition.",
    "October gardens are at their most beautiful. Pingjiang Road canal district with silk workshops and teahouses. Refined Suzhou cuisine with osmanthus blooms in October.",
  ], octoberWeatherEastern),

  lhasa: stub("lhasa", [
    "One of the most culturally profound destinations in the world. The Potala Palace, Jokhang Temple, and Barkhor pilgrim circuit go far beyond sightseeing.",
    "October is dry, clear, and less crowded. Requires a Tibet Travel Permit arranged through a licensed agency 2–3 weeks in advance. Mandatory guide required.",
  ], octoberWeatherTibet),

  "shangri-la": stub("shangri-la", [
    "Sits at 3,200m on the Tibetan Plateau's edge. Tibetan Buddhist culture in a more accessible setting than Lhasa — no permit required.",
    "October brings golden larches, blue skies, and crisp mountain air. Songzanlin Monastery, Pudacuo National Park with old-growth forests and alpine lakes.",
  ], octoberWeatherYunnan),

  quanzhou: stub("quanzhou", [
    "One of China's most historically significant and least-touristed cities. Was the world's largest port in the Song/Yuan dynasties. UNESCO status since 2021.",
    "Ancient mosques, Hindu temples, Nestorian Christian ruins, and the only surviving Manichaean temple in the world — all within walking distance. Outstanding Fujianese coastal food.",
  ], octoberWeatherFujian),

  shanghai: stub("shanghai", [
    "China's most cosmopolitan metropolis. Beneath the glitzy surface lies a city with deep roots: centuries-old water towns, a thriving local food scene beyond xiaolongbao, and some of China's best museums.",
    "Mid-October weather is excellent (mid-60s to low 70s°F). Rewards those who dig deeper — Jinze Water Town, Old City backstreet food deep-dives, M50 Art District, Power Station of Art.",
  ], octoberWeatherEastern),

  xian: stub("xian", [
    "One of the strongest candidates in all of China for travelers who prioritize history and food. Ancient capital of thirteen dynasties and eastern terminus of the Silk Road.",
    "The depth of history is unmatched — 3,000+ years. The Muslim Quarter's Hui culture has thrived for a millennium. Hand-pulled noodles, lamb, and bread-based dishes reflect Silk Road heritage.",
  ], octoberWeatherShanxi),
};
