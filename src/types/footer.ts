import { TImage, TPdf } from "./common";

export type TFooterDownloadItems = {
  title: string;
  subTitle: string;
  image: TImage;
  pdf: TPdf;
};

export type TFooterDownload = {
  title: string;
  items: TFooterDownloadItems[];
};

export type TFooterPagesPageItems = {
  title: string;
  link: string;
};

export type TFooterPagesLawItems = {
  title: string;
  link: string;
};

export type TFooterPages = {
  pageItems: TFooterPagesPageItems[];
  lawItems: TFooterPagesLawItems[];
  items: string[];
};

export type TFooter = {
  download: TFooterDownload;
  pages: TFooterPages;
};
