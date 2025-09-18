import { TImage, TMetaInfo } from "./common";

export type TNewsData = {
  title: string;
  description: string;
  link: string;
  date: string;
  image: TImage;
  metaInfo: TMetaInfo;
};
