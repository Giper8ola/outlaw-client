import React from 'react';
import Menu from "@/components/Menu";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import ServerInfo from "@/components/ServerInfo";

const HeaderBottom = ({curWidth}: {curWidth: number}) => {
    return (
        <div className='flex justify-between'>
            {
                curWidth > 1290
                &&
                <div className='flex items-stretch justify-between grow border-t-2 border-[#474747] px-20'>
                    <Menu/>
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
                <div className='flex'>
                    {
                        curWidth >= 740
                        &&
                        <ServerInfo/>
                    }
                    <button className='w-20 h-20 flex justify-center items-center bg-[#4D4D4D]'>
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
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;