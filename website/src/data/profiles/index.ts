import type { CityProfile } from "@/types";
import { beijingProfile } from "./beijing";
import { chengduProfile } from "./chengdu";
import { chongqingProfile } from "./chongqing";
import { daliProfile } from "./dali";
import { datongProfile } from "./datong";
import { fenghuangProfile } from "./fenghuang";
import { guilinProfile } from "./guilin";
import { guizhouProfile } from "./guizhou";
import { hangzhouProfile } from "./hangzhou";
import { hongKongProfile } from "./hong-kong";
import { huangshanProfile } from "./huangshan";
import { kunmingProfile } from "./kunming";
import { leshanProfile } from "./leshan";
import { lhasaProfile } from "./lhasa";
import { lijiangProfile } from "./lijiang";
import { luoyangProfile } from "./luoyang";
import { pingyaoProfile } from "./pingyao";
import { quanzhouProfile } from "./quanzhou";
import { shanghaiProfile } from "./shanghai";
import { shangriLaProfile } from "./shangri-la";
import { suzhouProfile } from "./suzhou";
import { xiamenProfile } from "./xiamen";
import { xianProfile } from "./xian";
import { zhangjiajieProfile } from "./zhangjiajie";

// Registry of all city profiles.
const fullProfiles: Record<string, CityProfile> = {
  beijing: beijingProfile,
  chengdu: chengduProfile,
  chongqing: chongqingProfile,
  dali: daliProfile,
  datong: datongProfile,
  fenghuang: fenghuangProfile,
  guilin: guilinProfile,
  guizhou: guizhouProfile,
  hangzhou: hangzhouProfile,
  "hong-kong": hongKongProfile,
  huangshan: huangshanProfile,
  kunming: kunmingProfile,
  leshan: leshanProfile,
  lhasa: lhasaProfile,
  lijiang: lijiangProfile,
  luoyang: luoyangProfile,
  pingyao: pingyaoProfile,
  quanzhou: quanzhouProfile,
  shanghai: shanghaiProfile,
  "shangri-la": shangriLaProfile,
  suzhou: suzhouProfile,
  xiamen: xiamenProfile,
  xian: xianProfile,
  zhangjiajie: zhangjiajieProfile,
};

export function getProfile(slug: string): CityProfile | null {
  return fullProfiles[slug] ?? null;
}

export function hasFullProfile(slug: string): boolean {
  return slug in fullProfiles;
}
