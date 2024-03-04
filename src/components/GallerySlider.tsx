'use client'
import React, {FC} from 'react';
import Carousel from "nuka-carousel"
import Image, {StaticImageData} from "next/image";

const GallerySlider: FC<{gallery: StaticImageData[]}> = ({gallery}) => {
    return (
        <Carousel
            slidesToShow={3}
            cellSpacing={30}
            style={{width: 219 * 3 + 90}}

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
                        width={219}
                        height={131}
                    />
                ))
            }
        </Carousel>
    );
};

export default GallerySlider;