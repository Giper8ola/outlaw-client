'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {v4} from "uuid";
import Logo from "@/components/Logo";
import {useWindowDimensions} from "@/utils/hooks/UseResize";
import HeaderBottom from "@/components/HeaderBottom";
import {usePathname} from "next/navigation";

const Header = () => {
    const {width, height} = useWindowDimensions();
    const pathName = usePathname();
    const [pageHeight, setPageHeight] = useState(0)

    useEffect(() => {
        const header = document.getElementById('header') as HTMLElement
        setPageHeight(height - header.scrollHeight)
    }, [height])

    return (
        <div className='bg-[#161920] h-auto' id='header'>
            <div className='grid content-between h-full'>
                {
                    width >= 1291
                    &&
                    <div className='flex items-center justify-between text-white py-4 wrapper'>
                        <Logo/>
                        {
                            ['Политика конфиденциальности', 'Лицензионное соглашение'].map(el => (
                                <div
                                    className='text-lg underline decoration-1 text-[#3D3D3D] font-bold max-[1500px]:text-base'
                                    key={v4()}
                                >
                                    {el}
                                </div>
                            ))
                        }
                        <Link className='bg-[#4E99BC] px-12 py-4 font-bold text-lg' href='/start'>
                            {
                                pathName === '/start'
                                ?
                                    'СКАЧАТЬ ЛАУНЧЕР'
                                :
                                    'НАЧАТЬ ИГРАТЬ'
                            }
                        </Link>
                    </div>
                }
                <HeaderBottom
                    curWidth={width}
                    pageHeight={pageHeight}
                />
            </div>
        </div>
    );
};

export default Header;
