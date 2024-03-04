import {StaticImageData} from "next/image";

export type MenuItemProp = {
    title: string;
    link: string;
    selectedTab: string;
}

export type ServerPreviewProp = {
    background: StaticImageData ,
    title: string,
    description: string,
    model: StaticImageData,
    sliderData: StaticImageData[]
}