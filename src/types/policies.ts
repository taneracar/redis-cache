import { TImage, TPdf } from "./common";

export type TPoliciesCards = {
  title: string;
  image: TImage;
  pdf: TPdf;
  date: string;
};

export type TPolicies = {
  cards: TPoliciesCards[];
};
