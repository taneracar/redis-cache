import { TImage, TPdf } from "./common";

export type TDocumentsCertificatesCards = {
  title: string;
  subTitle: string;
  image: TImage;
  pdf: TPdf;
  date: string;
};

export type TDocumentsCertificates = {
  cards: TDocumentsCertificatesCards[];
};
