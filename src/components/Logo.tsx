import React from 'react';
import Image from "next/image";

const Logo = ({styles}: {styles?: string}) => {
    return (
        <div className={`flex items-center ${styles}`}>
            <Image
                src='/logo.svg'
                alt='logo'
                width={80}
                height={80}
            />
            <header className='text-4xl font-bold text-white max-[380px]:pr-4 max-[470px]:leading-none max-[470px]:text-3xl '>Outlaw / Craft</header>
        </div>
    );
};

export default Logo;