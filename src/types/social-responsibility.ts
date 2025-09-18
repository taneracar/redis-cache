import { TImage, TMetaInfo } from "./common";

export type TCards = {
  title: string;
  image: TImage[];
};
export type TBanner = {
  title: string;
  scrollHintText: string;
  marqueeText: string;
  image: TImage;
  imageText: string;
  mobileImage: TImage;
};

export type TEvents = {
  cards: TCards[];
};

export type TSocialResponsibility = {
  banner: TBanner;
  events: TEvents;
  metaInfo: TMetaInfo;
};
