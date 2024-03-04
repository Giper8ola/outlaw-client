import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

const Header = () => {
    return (
        <div className='bg-[#161920] h-[25vh]'>
            <div className='grid content-between h-full'>
                <div className='flex items-center justify-between text-white pt-8 max-w-[1760px] w-full mx-auto'>
                    <div className='flex items-center'>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={87}
                            height={87}
                        />
                        <header className='text-4xl font-bold '>Outlaw / Craft</header>
                    </div>
                    <div className='text-lg underline decoration-1 text-[#3D3D3D] font-bold'>
                        Политика конфиденциальности
                    </div>
                    <div className='text-lg underline decoration-1 text-[#3D3D3D] font-bold'>
                        Лицензионное соглашение
                    </div>
                    <button className='bg-[#4E99BC] px-14 py-5 font-bold text-xl'>
                        НАЧАТЬ ИГРАТЬ
                    </button>
                </div>
                <div className='flex'>
                    <div  className='flex items-stretch justify-between grow border-t-2 border-[#474747] px-20'>
                        <Menu/>
                        <Link href='/sale' className='grid grid-flow-col items-center gap-4 text-white font-bold'>
                            <Image
                                src='/sale.svg'
                                alt='sale_link'
                                width={27}
                                height={27}
                            />
                            Скидки и Акции
                        </Link>
                    </div>
                    <div className='flex'>
                        <Image
                            src='/head.svg'
                            alt='player_head'
                            width={80}
                            height={80}
                        />
                        <div className='pr-24 pl-12 bg-[#363636] flex justify-center flex-col '>
                            <div className='font-bold underline decoration-1 text-white pb-1'>ZOMBIE APOCALYPSE</div>
                            <div className='font-bold text-white'>Онлайн: 384 / 500</div>
                        </div>
                        <button className='w-20 h-20 flex justify-center items-center bg-[#4D4D4D]'>
                            <Image
                                src='/exit.svg'
                                alt='exit_button'
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;