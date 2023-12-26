import underwatch from "../../assets/projs/underwatch.png"

import Image from "next/image";
export default function Card() {
    const imgSizing = `
    min-[280px]:w-[250px]
    min-[280px]:h-[90px]
    min-[400px]:w-[300px]
    min-[400px]:h-[120px]
    min-[920px]:w-[350px]
    min-[920px]:h-[140px]
    min-[1400px]:w-[450px]
    min-[1400px]:h-[190px]
    ovewflow-hidden
    rounded-[16px]
    hover:cursor-pointer
    `
    const nameProject = `
    min-[280px]:text-[23px]
    min-[900px]:text-[30px]
    text-[#FFFFFF]
    `
    const card = `
    bg-[#1F1A23]
    rounded-[40px]
    pt-[20px]
    pb-[30px]
    pl-[20px]
    pr-[20px]
    flex
    flex-col
    min-[280px]:w-[250px]
    min-[400px]:w-[300px]
    min-[920px]:w-[350px]
    min-[1400px]:w-[450px] font-medium
    `
    const describtion = `
    leading-[25px]
    text-[16px]
    text-[#DBDBDB]
    mt-[40px]
    max-[400px]:leading-[20px]
    max-[400px]:text-[14px]
    `
    const technoS = `
    pl-[10px]
    pt-[5px]
    pb-[5px]
    pr-[10px]
    border-[1.35px]
    rounded-[40px]
    text-[14px]
    text-[#DBDBDB]
    `
    return(
        <>
            <div className={card}>
                <div className="flex flex-col items-center gap-[24px]">
                    <Image src={underwatch} alt="underwatch Project" className={imgSizing}/>
                    <span className={nameProject}>Underwatch</span>
                </div>
                <p className={describtion}>This project was commissioned by a client in Discord social media. He needed in promote his company to help other people win in games and get rewards</p>
                <div className="mt-[24px] flex flex-row flex-wrap justify-center w-full gap-2">
                    <span className={technoS}>Technology</span>
                </div>
            </div>
        </>
    )
};
