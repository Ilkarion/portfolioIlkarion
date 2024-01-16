import SoapBubble from "./SoapBubble";
import stl from "./skills.module.css"
export default function BubbleCarousel() {
    return(
        <>
        <div className={`top-[210px] left-[-400px] z-[-10] flex justify-between w-[500px] ${stl.circleMove} rounded-full h-[500px] absolute `}>
                <div className="flex flex-col justify-between">
                    <div className="relative top-[67px] left-[-68px]">
                        <SoapBubble />
                    </div>
                    <div className="relative top-[-119px] left-[-33px]">
                        <SoapBubble />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="relative top-[13px] left-[-47px]">
                        <SoapBubble />
                    </div>
                    <div className="relative top-[-13px] left-[-47px]">
                        <SoapBubble />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="relative top-[125px] right-[62px]">
                        <SoapBubble />
                    </div>
                    <div className="relative top-[-103px] right-[20px]">
                        <SoapBubble />
                    </div>
                </div>  
            </div>
        </>
    )
};
