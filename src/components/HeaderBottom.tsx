'use client'

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import ServerInfo from "@/components/ServerInfo";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";

const HeaderBottom = ({curWidth, pageHeight}: {curWidth: number, pageHeight: number}) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className='flex justify-between'>
            {
                curWidth > 1290
                &&
                <div className='flex items-stretch justify-between grow border-t-2 border-[#474747] px-20'>
                    <Navigation/>
                    {
                        curWidth > 1800
                        &&
                        <Link href='/sale' className='grid grid-flow-col items-center gap-4 text-white font-bold'>
                            <Image
                                src='/sale.svg'
                                alt='sale_link'
                                width={27}
                                height={27}
                            />
                            Скидки и Акции
                        </Link>
                    }
                </div>
            }
            <div className='flex max-[1290px]:justify-between max-[1290px]:w-full '>
                {
                    curWidth > 1500
                    &&
                    <Image
                        src='/head.svg'
                        alt='player_head'
                        width={80}
                        height={80}
                    />
                }
                {
                    curWidth <= 1290 && <Logo/>
                }
                <div className='flex relative'>
                    {
                        curWidth >= 740
                        &&
                        <ServerInfo/>
                    }
                    <button className='w-20 h-20 flex justify-center items-center bg-[#4D4D4D]' onClick={() => setVisible(!visible)}>
                        {
                            curWidth > 1500
                                ?
                                <Image
                                    src='/exit.svg'
                                    alt='exit_button'
                                    width={30}
                                    height={30}
                                />
                                :
                                <Image
                                    src='/burger.svg'
                                    alt='menu_button'
                                    width={50}
                                    height={50}
                                />

                        }
                    </button>
                    <Menu
                        height={pageHeight}
                        isVisible={visible}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
