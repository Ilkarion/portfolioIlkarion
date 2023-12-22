'use client'
import { useState } from "react"
import stl from "./skills.module.css"
interface skillsData {
    name: string;
    describtion: string;
}
export default function Skill({item}:{item:skillsData}) {
    const [ hover, setHover ] = useState(false)
    const animText = `
        transition-[opacity]
        delay-75
        ${hover ? "opacity-100":"opacity-0"}
    `
    const animTextName = `
    ${hover ? ` min-[280px]:text-[26px] min-[700px]:text-[30px] min-[1200px]:text-[35px] ${stl.animTextPurple}` :"text-[24px]"}
`
    return(
        <>
        <div className={`min-[280px]:h-[50px] flex flex-row items-center w-full justify-between ${stl.blockSkill}`} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <span className={`${animText} min-[280px]:hidden text-[#A9A9A9] min-[900px]:inline-block min-[900px]:text-[12px] min-[1200px]:text-[16px]`}>{item.describtion}</span>
            <span className={`text-[#A9A9A9] transition-all duration-500  ${stl.specialWhiteS} ${animTextName}`}>{item.name}</span>
        </div>
        </>
    )
};
