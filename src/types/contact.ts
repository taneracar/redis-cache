import { TMetaInfo } from "./common";

export type TSocial = {
  title: string;
  link: string;
  icon: string;
};
export type TContactInfo = {
  title: string;
  description: string;
  icon: string;
  social: TSocial[];
};
export type TLocations = {
  title: string;
  mapSource: string;
  contactInfo: TContactInfo[];
};
export type TContact = {
  leftTitle: string;
  rightTitle: string;
  locations: TLocations[];
};
export type TContactBanner = {
  title: string;
  subTitleTop: string;
  subTitleBottom: string;
};

export type TContactPage = {
  banner: TContactBanner;
  contact: TContact;
  metaInfo: TMetaInfo;
};
