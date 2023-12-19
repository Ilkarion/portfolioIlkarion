'use client'
import Image from 'next/image'
import gitHub from "../../assets/NavBar/GithubWhite.svg"
import gitHubPurple from "../../assets/NavBar/GithubPurple.svg"
import gmailWhite from "../../assets/NavBar/gmailDefault.svg"
import gmailColor from "../../assets/NavBar/gmailColor.svg"
import stl from "./navBar.module.css"
import { useState } from 'react'
import Link from 'next/link'
export default function NavBar() {
    const [ gitHubHover, setGitHubHover ] = useState(false)
    const [ gmailHover, setGmailHover ] = useState(false)
    const [ copied, setCopied] = useState(false)
    function copyCopy() {
        setCopied(true)
        navigator.clipboard.writeText("myfirststepsprogramming@gmail.com")
        setTimeout(()=>{setCopied(false)}, 1000)
        setGmailHover(false)
    }
    const styleNavPurple = `
    min-[280px]:font-[700]
    min-[280px]:text-[23px]
    min-[280px]:tracking-[0.69px]

    min-[730px]:font-[700]
    min-[730px]:text-[30px]
    min-[730px]:tracking-[0.9px]
    `
    const imgStyle = `
    min-[280px]:w-[24px]
    min-[280px]:h-[24px]

    min-[730px]:w-[30px]
    min-[730px]:h-[30px]
    `
    const styleNavBlur = `
    min-[280px]:pl-[20px]
    min-[280px]:pr-[20px]
    min-[280px]:pb-[8px]
    min-[280px]:pt-[8px]

    min-[730px]:pl-[30px]
    min-[730px]:pr-[30px]
    min-[730px]:pb-[10px]
    min-[730px]:pt-[10px]
    `
    return(
            <div className='w-full pt-[20px] sticky top-0 z-10 flex flex-row justify-between items-center'>
                <div className={`${stl.specialPurpleText} ${styleNavPurple}`}>LARIN</div>
                <div className={`flex flex-row items-center min-[280px]:gap-[24px] min-[730px]:gap-[76px] ${styleNavBlur} ${stl.bgBlurNav}`}>
                    <Link href="https://github.com/Ilkarion" target='_blank'><Image src={gitHubHover ? gitHubPurple : gitHub} alt="logo-gitHub" onMouseEnter={() => setGitHubHover(true)} onMouseLeave={()=>setGitHubHover(false)} className={`${imgStyle} hover:cursor-pointer`}/></Link>
                    {copied ? <span className='text-[20px] text-[white]'>copied</span> : (<Image src={gmailHover ? gmailColor : gmailWhite} alt="logo-gitHub" onMouseEnter={() => setGmailHover(true)} onMouseLeave={() => setGmailHover(false)} className={`${imgStyle} hover:cursor-pointer`} onClick={copyCopy}/>)}
                    <span className='text-[#C4C4C4] min-[280px]:text-[23px] min-[730px]:text-[30px] hover:cursor-pointer hover:text-[#8625E7]'>Pf</span>
                </div>
                <div className={`${stl.specialPurpleText} ${styleNavPurple} max-[410px]:hidden`}>UP</div>
            </div>
    )
};

