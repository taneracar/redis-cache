import { TImage, TMetaInfo } from "./common";

export type THomeProductCardsData = {
  title: string;
  icon: React.ReactNode;
};

export type THomeBanner = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: TImage;
  mobileImage: TImage;
};

export type THomeWithoutBannerProductsData = {
  upTitle: string;
  title: string;
  description: string;
  videoTitle: string;
  videoLink: string;
};

export type THomeWithoutBannerBrandsBrandItemsData = {
  name: string;
  link: string;
  image: TImage;
};

export type THomeWithoutBannerBrandsData = {
  description: string;
  brandItems: THomeWithoutBannerBrandsBrandItemsData[];
};

export type THomeWithoutBannerVideoData = {
  title: string;
  description: string;
};

export type THomeWithoutBannerNewsData = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export type THomeWithoutBannerData = {
  metaInfo: TMetaInfo;
  products: THomeWithoutBannerProductsData;
  brands: THomeWithoutBannerBrandsData;
  video: THomeWithoutBannerVideoData;
  news: THomeWithoutBannerNewsData;
};

export type THome = {
  banner: THomeBanner[];
  homeWithoutBannerData: THomeWithoutBannerData;
};
