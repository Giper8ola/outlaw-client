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
                bg-cover grow relative grid grid-cols-2 -z-0 pt-20
                after:absolute after:top-0 after:bg-[#161920] 
                after:w-full after:h-full after:opacity-55 after:-z-10
            `}
            style={{backgroundImage:`url(${background.src})`}}
        >
            <div className='pl-20 pt-14'>
                <h1 className='text-8xl text-white'>
                    {title}
                </h1>
                <p className='max-w-[600px] pt-16 text-xl font-bold text-[#575757]'>
                    {description}
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-auto flex flex-col items-center'>
                    <div>
                        <Image
                            src={model}
                            alt='model_preview'
                            width={425}
                            height={322}
                        />
                    </div>
                    <GallerySlider gallery={sliderData}/>
                    <div className="w-full px-4 mt-6 flex items-center gap-10">
                        <div className='text-white font-bold'>
                            O сервере
                        </div>
                        <div className='grow h-[2px] bg-[#474747]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServerPreview;