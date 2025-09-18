import { TMetaInfo } from "./common";

export type TKvkkBanner = {
  title: string;
  scrollHintText: string;
  marqueeText: string;
};

export type TContent = {
  title: string;
  description: string;
};

export type TKvkkPolicy = {
  kvkkBanner: TKvkkBanner;
  content: TContent[];
  metaInfo: TMetaInfo;
};
