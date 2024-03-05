'use client'
import React, {FC} from 'react';
import Carousel from "nuka-carousel"
import Image, {StaticImageData} from "next/image";

const GallerySlider: FC<{gallery: StaticImageData[]}> = ({gallery}) => {
    return (
        <div style={{maxWidth: 219 * 3 + 90 }}>
            <Carousel
                slidesToShow={3}
                cellSpacing={30}
                defaultControlsConfig={{
                    pagingDotsStyle: {display: "none"},
                    nextButtonStyle: {
                        width: 45, height: 45, borderRadius: "100%", backgroundColor: "#4E99BC", position: "relative", left: 10,
                        display: "flex", alignItems: "center", justifyContent: "center"
                    },
                    nextButtonText: <div style={
                        {backgroundImage: "url('right-arrow.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100%", height: "100%"}
                    }></div>,
                    prevButtonStyle: {
                        width: 45, height: 45, borderRadius: "100%", backgroundColor: "#4E99BC", position: "relative", right: 10,
                        display: "flex", alignItems: "center", justifyContent: "center"
                    },
                    prevButtonText: <div style={
                        {backgroundImage: "url('left-arrow.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100%", height: "100%"}
                    }></div>
                }}
            >
                {
                    gallery.map(el => (
                        <Image
                            src={el}
                            alt='armia'
                            objectFit="cover"
                            width={0}
                            height={0}
                            className='max-w-[219px] w-full'
                        />
                    ))
                }
            </Carousel>
            <div className="w-full px-4 mt-6 flex items-center gap-10">
                <div className='text-white font-bold'>
                    O сервере
                </div>
                <div className='grow h-[2px] bg-[#474747]'></div>
            </div>
        </div>
    );
};

export default GallerySlider;