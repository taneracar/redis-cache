import { TImage, TMetaInfo } from "./common";

export type TBannerSlider = {
    rotatedTitle: string;
    subText1: string;
    subText2: string;
    description: string;
    scrollHintText: string;
    buttonText: string;
    historyItems: THistoryItems[];
};
export type THistoryItems = {
    date: string;
    description: string;
    image1: TImage;
    image2: TImage;
};
export type TVideoContent = {
    title: string;
    description: string;
    video: TImage;
    videoMuteText: string;
    videoUnmuteText: string;
    contentItems: TContentItems[];
};
export type TContentItems = {
    title: string;
    icon: string;
};

export type TWorld = {
    title: string;
    subTitle: string;
    image: TImage;
};

export type THistoryPage = {
    bannerSlider: TBannerSlider;
    videoContent: TVideoContent;
    world: TWorld;
    metaInfo: TMetaInfo;
};