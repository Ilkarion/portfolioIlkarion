import stl from "./header.module.css"
export default function Header() {
    const textStl = `
    font-semibold
    min-[280px]:text-[58px]
    min-[730px]:text-[110px]
    min-[280px]:tracking-[1.16px]
    min-[730px]:tracking-[3.3px]
    `
    return(
        <>
            <h1 className="mt-[100px]">
                <p className={`${textStl} text-left ${stl.purpleSpecialText}`}>FRONTEND</p>
                <div className="w-[1px] h-[97px] bg-[#8625E7] rotate-[145deg] max-[730px]:h-[50px] max-[600px]:hidden mx-auto"></div>
                <p className={`${textStl} text-right ${stl.purpleSpecialText}`}>DEVELOPER</p>
            </h1>
        </>
    )
};
