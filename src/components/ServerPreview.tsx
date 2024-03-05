import React, {FC} from 'react';
import {ServerPreviewProp} from "@/utils/types";
import Image from "next/image";
import GallerySlider from "@/components/GallerySlider";

const ServerPreview: FC<ServerPreviewProp> = (
    {
       title,
       description,
       model,
       sliderData,
       background
    }) => {
    return (
        <div
            className={`
                bg-cover grow relative grid grid-cols-2 max-[1100px]:flex
                max-[1100px]:flex-col -z-0 pt-20 
                after:absolute after:top-0 after:bg-[#161920] after:w-full after:h-full 
                after:opacity-55 after:-z-10
            `}
            style={{backgroundImage:`url(${background.src})`, backgroundPosition: 'bottom'}}
        >
            <div className='
                pl-20 pt-14 max-[1100px]:pl-0 max-[1100px]:pt-30 max-[1100px]:flex max-[1100px]:flex-col
                max-[1100px]:items-center max-[600px]:pt-0 max-[600px]:px-5
            '>
                <h1 className='
                    text-[5vw] max-[1100px]:text-[7vw] leading-tight text-white max-[770px]:text-5xl
                    max-[770px]:text-center max-[540px]:text-6xl
                '>
                    {title}
                </h1>
                <p className='
                    max-w-[600px] w-full pt-16 text-xl font-medium text-[#575757] max-[1500px]:max-w-[500px]
                    max-[1100px]:text-center max-[1100px]:text-[3vw] max-[1100px]:text-white max-[1100px]:leading-normal
                    max-[1100px]:max-w-[700px] max-[770px]:text-2xl max-[770px]:px-10
                '>
                    {description}
                </p>
            </div>
            <div className='flex flex-col items-center max-[1100px]:pt-24'>
                <div className='w-auto flex flex-col items-center max-[1650px]:mr-5 '>
                    <div>
                        <Image
                            src={model}
                            alt='model_preview'
                            width={425}
                            height={322}
                        />
                    </div>
                    <GallerySlider gallery={sliderData}/>
                </div>
            </div>
        </div>
    );
};

export default ServerPreview;