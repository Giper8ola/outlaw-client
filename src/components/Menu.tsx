'use client'
import React, {useState} from 'react';
import {MAIN_MENU} from "@/utils/consts";
import {motion} from "framer-motion";
import Link from "next/link";

const Menu = () => {
    const [selectedTab, setSelectedTab] = useState(MAIN_MENU[0]);
    return (
        <menu className='grid grid-flow-col items-stretch gap-20 relative'>
            {
                MAIN_MENU.map(el => (
                    <li
                        className='flex items-center font-medium text-white relative px-4'
                        key={el.title}
                        onClick={() => setSelectedTab(el)
                    }>
                        {el === selectedTab ? (
                            <motion.div className="absolute h-[2px] w-full bg-red-600 left-0 -top-[2px]" layoutId="underline" />
                        ) : null}
                        <Link href={el.link}>
                            {el.title}
                        </Link>
                    </li>
                ))
            }
        </menu>
    );
};

export default Menu;