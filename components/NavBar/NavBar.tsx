'use client'
import Image from 'next/image'
import gitHub from "../../assets/NavBar/GithubWhite.svg"
import gitHubPurple from "../../assets/NavBar/GithubPurple.svg"
import gmailWhite from "../../assets/NavBar/gmailDefault.svg"
import gmailColor from "../../assets/NavBar/gmailColor.svg"
import { useState } from 'react'
export default function NavBar() {
    const [ gitHubHover, setGitHubHover ] = useState(false)
    const [ gmailHover, setGmailHover ] = useState(false)
    return(
        <div className='w-full fixed z-10'>
            <div>LARIN</div>
            <div>
                {gitHubHover ? <Image src={gitHubPurple} alt="logo-gitHub" onMouseLeave={()=>setGitHubHover(false)}/> : <Image src={gitHub} alt="logo-gitHub" onMouseEnter={()=>setGitHubHover(true)}/>}
                {gmailHover ? <Image src={gmailColor} alt="logo-gitHub" onMouseLeave={()=>setGmailHover(false)}/> : <Image src={gmailWhite} alt="logo-gitHub" onMouseEnter={()=>setGmailHover(true)}/>}
                <span className=''>Pf</span>
            </div>
            <div>UP</div>
        </div>
    )
};
