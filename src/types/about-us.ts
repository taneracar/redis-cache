import { TImage } from "./common";

export type TPageBanner = {
    title: string;
    description: string;
    rotatedTitle: string;
    video: TImage;
    animationText1: string;
    animationText2: string;
    
};
export type TMissionDescription = {
    description: string;  
}
export type TMisson  = {
    title: string;
    missionDescription: TMissionDescription[];
    icon: string;
}

export type TNumbers = {
    text1: string;
    text2: string;
}
export type TSlider = {
    title: string;
    description: string;
    images: TImage[];
    numbers: TNumbers[];
}

export type TAboutUsPage = {
    pageBanner: TPageBanner;
    mission: TMisson[];
    slider: TSlider;
}