'use client'
import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

const Menu = ({height, isVisible} : {height: number, isVisible: boolean}) => {
    return (
        <AnimatePresence>
            {
                isVisible && (
                    <motion.div
                        className='absolute w-full bg-[#161920] z-20 py-7 px-5'
                        style={{height: height + 'px', bottom: `-${height}px`}}
                        initial={{
                            x: '100%'
                        }}
                        animate={{
                            x: 0
                        }}
                        exit={{
                            x: '100%'
                        }}
                        transition={{
                            type: 'just'
                        }}
                    >
                        <div className='grid grid-cols-2 grid-rows-1 gap-x-6 text-center'>
                            <div className='bg-white font-bold text-lg py-3 px-4 rounded-xl cursor-pointer'>Авторизация</div>
                            <div className='bg-white font-bold text-lg py-3 px-4 rounded-xl cursor-pointer'>Регистрация</div>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default Menu;
