import React, {FC} from 'react';
import {StartPageItemProps} from "@/utils/types";

const StartItem: FC<StartPageItemProps> = ({number, description, title}) => {
    return (
        <div
            className='
                grid grid-rows-1 grid-cols-[80px_1fr] gap-x-4 border-b-[1px] border-b-[#4D4D4D]
                py-9 last:border-none
                max-[720px]:pb-0 max-[720px]:pt-9
                max-[480px]:grid-rows-[80px_1fr] max-[480px]:grid-cols-1 max-[480px]:gap-x-0
            '
        >
            <div className='w-16 h-16 rounded-xl bg-white flex items-center justify-center'>
                <div className='font-black text-2xl'>
                    {number}
                </div>
            </div>
            <div className='text-white'>
                <h1 className='text-xl font-bold mt-2'>
                    {title}
                </h1>
                <p className='text-[#4D4D4D] font-medium mt-3 text-[14px]'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default StartItem;
