import {StaticImageData} from "next/image";

export type MenuItemProp = {
    title: string;
    link: string;
    selectedTab: string;
}

export type ServerPreviewProps = {
    background: StaticImageData,
    title: string,
    description: string,
    model: StaticImageData,
    sliderData: StaticImageData[]
}

export type StartPageItemProps = {
    number: string;
    title: string;
    description: string;
}
