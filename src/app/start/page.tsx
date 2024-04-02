import React from 'react';
import back from '../../utils/assets/zombie.png'
import StartItem from "@/components/StartItem";
import {START_ITEMS} from "@/utils/data/pages/start";
const Start = () => {
    return (
        <div
            className='
                bg-cover grow self-stretch z-10 relative pointer-events-none wrapper pt-7
                after:absolute after:top-0 after:left-0 after:bg-[#161920] after:w-full after:h-full
                after:opacity-90 after:-z-10 max-[720px]:pb-9
            '
            style={{backgroundImage:`url(${back.src})`, backgroundPosition: 'bottom'}}
        >
            <div className='flex flex-col mx-10 max-[370px]:mx-4 '>
                <h1
                    className='text-3xl text-white font-medium my-2'
                >
                    Как начать играть?
                </h1>
                <p className='my-4 text-white max-w-lg'>
                    Приветствуем вас на нашем лампвом проекте! Пожалуста выделите 2 минуты для того, чтобы пройти простенькую регистрацию на нашем проекте
                </p>
                <div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-x-10 max-[950px]:grid-cols-1 max-[950px]:grid-rows-3'>
                        {
                            START_ITEMS.map(el => (
                                <StartItem
                                    number={el.number}
                                    title={el.title}
                                    description={el.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;
