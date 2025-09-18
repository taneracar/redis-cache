import { TImage, TMetaInfo } from "./common";

export type TManagementBanner = {
  circularText: string;
  title: string;
  subTitle: string;
  scrollHintText: string;
};
export type TPeopleCards = {
  name: string;
  title: string;
  instagramLink: string;
  linkedinLink: string;
  image: TImage;
  description: string;
};
export type TBoardOfManagement = {
  managementBanner: TManagementBanner;
  peopleCards: TPeopleCards[];
  metaInfo: TMetaInfo;
};
