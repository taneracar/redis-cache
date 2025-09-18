// components.ts
import { TImage } from "./common";

export type TSustainabilitySubValue = {
  title: string;
};

export type TSustainabilityValue = {
  order: string;
  title: string;
  subValue?: TSustainabilitySubValue[];
  images?: { image: TImage }[];
  bgImage?: TImage;
};

export type TSustainabilityTexts = {
  description: string;
};

export type TSustainabilitySlider = {
  title: string;
};

export type TSustainabilityBanner = {
  title: string;
  description: string;
  hoverTitle?: string;
  hoverDescription?: string;
  video?: TVideo;
  order?: string;
};

export type TVideo = {
  url: string;
}[];

export type TSustainabilityGes = {
  title: string;
  description: string;
};

export type TSustainabilityParallax = {
  texts?: TSustainabilityTexts[];
  slider?: TSustainabilitySlider[];
  bgImageFirst: TImage;
  bgImageSecond: TImage;
};

export type TSustainabilityVerticalSlider = {
  title: string;
  description: string;
  image: TImage;
};

export type TSSustainabilitytatic = {
  titleFirst: string;
  descriptionFirst: string;
  imageFirst: TImage;
  titleSecond: string;
  descriptionSecond: string;
  imageSecond: TImage;
  descriptionThird: string;
  descriptionFourth: string;
};

export type TSustainabilityFooter = {
  descriptionFirst: string;
  descriptionSecond: string;
  image: TImage;
  mobileImage: TImage;
};

export type TSustainability = {
  banner?: TSustainabilityBanner;
  value?: TSustainabilityValue[];
  ges?: TSustainabilityGes;
  paralax?: TSustainabilityParallax;
  verticalSlider?: TSustainabilityVerticalSlider;
  slider?: TSustainabilitySlider[];
  Static?: TSSustainabilitytatic;
  Footer?: TSustainabilityFooter;
};
