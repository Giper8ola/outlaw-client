import ServerPreview from "@/components/ServerPreview";
import {MAIN_PAGE_DATA} from "@/utils/data";
export default function Home() {
    return (
        <div className='h-[76vh] flex flex-col relative max-[1291px]:h-[calc(100vh-80px)]'>
            {
                MAIN_PAGE_DATA.data.map((el) => (
                    <ServerPreview
                        background={el.background}
                        title={el.title}
                        description={el.description}
                        model={el.model}
                        sliderData={el.sliderData}
                    />
                ))
            }
            <div className='absolute bottom-20 left-24 flex gap-4 items-center'>
                <div className='w-8 h-8 bg-transparent border-2 border-white box-border rounded-lg '></div>
                <div className='w-5 h-5 bg-transparent border-2 border-white box-border rounded-md cursor-pointer hover:w-8 hover:h-8 hover:rounded-lg duration-500' ></div>
                <div className='w-5 h-5 bg-transparent border-2 border-white box-border rounded-md cursor-pointer' ></div>
            </div>
        </div>

    );
}
