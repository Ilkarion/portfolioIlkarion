import stl from "./skills.module.css"
export default function SoapBubble() {
    return(
        <>
        <div className={`w-[100px] h-[100px] border border-[#b4a0c7] rounded-full relative top-0 left-[60px] ${stl.colorofullCircleBubble} ${stl.circleMoveMini}`}>
                    <div className="w-[15px] h-[15px] relative top-4 left-[20px] bg-[#b4a0c7] rounded-full"></div>
                    <div className="w-[5px] h-[5px] relative top-5 left-[20px] bg-[#b4a0c7] rounded-full"></div>
                </div>
        </>
    )
};
