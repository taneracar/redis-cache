import { TImage, TPdf } from "./common";
import { TMetaInfo } from "./common";

export type TBrandsDetail = {
  link: string;
  description: string;
  websiteLink: string;
  pdfTitle: string;
  longDescription: string;
  brandImage: TImage;
  brandImageBig: TImage;
  productImage: TImage;
  pdf: TPdf;
  metaInfo: TMetaInfo;
  order: number;
};

export type TBrandItems = {
  name: string;
  link: string;
  image: TImage;
};

export type TBrandBanner = {
  description: string;
  brandItems: TBrandItems[];
};

export type TAchievementItems = {
  title: string;
  description: string;
  image: TImage;
};

export type TBrandsAchievements = {
  title: string;
  description: string;
  achievementItems: TAchievementItems[];
};

export type TBrands = {
  title: string;
  description: string;
  link: string;
  image: TImage;
};
