import Image from "next/image"
import stl from "./header.module.css"
import me from "../../assets/Header/me.jpg"

export default function Header() {
    const textStl = `
    font-semibold
    min-[280px]:text-[45px]
    min-[412px]:text-[54px]
    min-[730px]:text-[91px]
    min-[280px]:tracking-[1.16px]
    min-[730px]:tracking-[3.3px]
    `
    const imgSt = `
        min-[280px]:w-[328px]
        min-[930px]:w-[217px]
        min-[1190px]:w-[330px]
        min-[280px]:rounded-[22px]
        min-[730px]:rounded-[50px]
    `
    const describtionMeSt = `
    min-[730px]:w-[489px]

    min-[280px]:text-[14px]
    min-[730px]:text-[16px]

    min-[280px]:leading-[22px]
    min-[730px]:leading-[27px]

    min-[280px]:tracking-[0.28px]

    min-[1300px]:text-[21px]
    min-[1300px]:w-[685px]

    `
    return(
        <section className="relative">
            <h1 className="mt-[100px]">
                <p className={`${textStl} text-left ${stl.purpleSpecialText}`}>FRONTEND</p>
                <div className="w-[1px] h-[97px] bg-[#8625E7] rotate-[145deg] max-[730px]:h-[50px] max-[600px]:hidden mx-auto"></div>
                <p className={`${textStl} text-right ${stl.purpleSpecialText}`}>DEVELOPER</p>
            </h1>
            <div className={`${stl.gradientH} z-[-10] absolute top-[350px] left-[-80px] w-[80%] min-[280px]:h-[431px] min-[730px]:h-[830px] rotate-[-45deg]`}></div>
            <div className="flex min-[280px]:flex-col min-[930px]:flex-row min-[280px]:gap-[20px] min-[930px]:gap-[112px] items-center mt-[145px]">
                <div className="flex flex-col">
                    <Image src={me} alt="myPhoto" className={`${imgSt} ${stl.imgObjectH}`}/>
                    <p className="min-[280px]:text-[23px] min-[1200px]:text-[40px] text-center text-[#DBDBDB]">LARIN ILLYA</p>
                </div>
                <p className={`${describtionMeSt} text-[#DBDBDB]`}>
                Hello! I&apos;m a Frontend Developer passionate about creative solutions. My codes serve as a bridge between ideas and users.<br /> Immersed in the world of web technologies, I strive for perfection in every line of code. I navigate the stream of new technologies, and each project is like a pool where I swim towards success.<br /> Let&apos;s create something amazing together!
                </p>
            </div>
        </section>
    )
};
