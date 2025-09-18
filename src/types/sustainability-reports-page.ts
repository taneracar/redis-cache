import { TImage, TMetaInfo, TPdf } from "./common";

export type TReportsBanner = {
  title: string;
  subTitle: string;
  marqueeText: string;
  scrollHintText: string;
  mobileImage: TImage;
  image: TImage;
};

export type TPdfs = {
  pdfTitle: string;
  pdfSubTitle: string;
  pdf: TPdf;
};
export type TReports = {
  title: string;
  description: string;
  pdfs: TPdfs[];
};

export type TSustainabilityReportsPage = {
  reportsBanner: TReportsBanner;
  reports: TReports;
  metaInfo: TMetaInfo;
};
