import { TImage, TMetaInfo, TPdf } from "./common";

export type TCareerBanner = {
  title: string;
  rotatedTitle: string;
  image: TImage;
};
export type TJourneyItems = {
  title: string;
  description: string;
  image: TImage;
};
export type TJourney = {
  items: TJourneyItems[];
  imageDescription: string;
  image: TImage;
  mobileImage: TImage;
};

export type TInternOpportunities = {
  title: string;
  description: string;
  image: TImage;
  pdf: TPdf;
  pdfTitle: string;
  pdfSubTitle: string;
};
export type TOppurtunities = {
  title: string;
  subTitle: string;
  image: TImage;
  buttonText: string;
  internOpportunities: TInternOpportunities[];
};

export type TVideos = {
  title: string;
  video: TImage;
};
export type TExperience = {
  title: string;
  subTitle: string;
  videos: TVideos[];
};
export type TCareer = {
  banner: TCareerBanner;
  journey: TJourney;
  opportunities: TOppurtunities;
  experience: TExperience;
  metaInfo: TMetaInfo;
};
