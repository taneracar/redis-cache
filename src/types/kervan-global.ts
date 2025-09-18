export type TLeftContent = {
  text1: string;
  text2: string;
};

export type TGlobalContent = {
  redText: string;
  blackText: string;
  scrollHintText: string;
  leftContent: TLeftContent[];
  rightContent: TLeftContent[];
};
export type TKervanGlobal = {
  globalContent: TGlobalContent;
};
