'use client'
import { useState } from "react"
import stl from "./skills.module.css"
import DescribeSkill from "./DescribeSkill";
interface skillsData {
    name: string;
    describtion: string[];
}
export default function Skill({item}:{item:skillsData}) {
    const [ hover, setHovered ] = useState(false)
    const [ showMore, setShowMore ] = useState(false)
    const resposiveCardSkil = `
    min-[280px]:pl-[10px]
    min-[280px]:pr-[10px]
    min-[280px]:pt-[5px]
    min-[280px]:pb-[5px]

    min-[500px]:pl-[15px]
    min-[500px]:pr-[15px]
    min-[500px]:pt-[7px]
    min-[500px]:pb-[7px]
    `
    return(
        <>
            <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onClick={()=>setShowMore(true)} className={`
            hover:cursor-pointer
            hover:shadow-[0px_0px_0px_0px_#4F326B]
            hover:text-yellow-500
            hover:bg-[#4F326B]
            ${resposiveCardSkil}
            ${hover && stl.movingBlocksAnim}
            text-black
            bg-[#403549]
            rounded-[4px]
            shadow-[0px_10px_15px_0px_#4F326B]
            inline-block`
            }>


                <span className={`text-[20px]`}>{item.name}</span>


            </div>
            {showMore ? <div onClick={()=>setShowMore(false)} className="fixed flex items-center justify-center top-0 right-0">
                <div className="w-[100vw] h-[100vh] z-[40] bg-[#191919] opacity-[0.5]"></div>
                <DescribeSkill desc={item.describtion}/>
            </div> : ''}
        </>
    )
};
