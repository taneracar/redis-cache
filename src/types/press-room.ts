import { TImage } from "./common";

export type TPressRoomCards = {
  title: string;
  images: TImage;
  date: string;
};

export type TPressRoom = {
  cards: TPressRoomCards[];
};
