'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import {v4} from "uuid";
import Logo from "@/components/Logo";
import ServerInfo from "@/components/ServerInfo";
import {useWindowDimensions} from "@/utils/hooks/UseResize";
import HeaderBottom from "@/components/HeaderBottom";

const Header = () => {
    const {width, height} = useWindowDimensions()

    return (
        <div className='bg-[#161920] h-[24vh] max-[1291px]:h-auto'>
            <div className='grid content-between h-full'>
                {
                    width >= 1291
                    &&
                    <div className='flex items-center justify-between text-white pt-7 wrapper max-[1800px]:px-6'>
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
                        <button className='bg-[#4E99BC] px-12 py-4 font-bold text-lg'>
                            НАЧАТЬ ИГРАТЬ
                        </button>
                    </div>
                }
                <HeaderBottom curWidth={width}/>
            </div>
        </div>
    );
};

export default Header;