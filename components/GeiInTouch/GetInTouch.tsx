import Link from "next/link"
import stl  from "./getinTouch.module.css"
export default function GetInTouch() {
    return(
        <div className="mt-[80px] flex min-[280px]:flex-col min-[280px]:items-center min-[600px]:flex-row min-[600px]:justify-between">
            <span className={`${stl.specialWhiteG} min-[280px]:text-[37px] min-[600px]:text-[40px] transition-all delay-100 min-[600px]:hover:text-[45px] hover:text-[#8625E7]`}>GET IN TOUCH</span>
            <div className="flex flex-col min-[280px]:gap-[20px] min-[600px]:gap-[12px] text-[#DBDBDB]">
                <div className="flex flex-row items-center gap-[7px] underline">
                    <Link href="https://www.linkedin.com/in/illia-lariushyn-6a9314272/" className="min-[280px]:text-[14px] min-[600px]:text-[20px]" target="_blank">Linkedin</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15" fill="none">
                        <path d="M28.7071 8.20711C29.0976 7.81659 29.0976 7.18342 28.7071 6.7929L22.3431 0.428934C21.9526 0.0384097 21.3195 0.0384097 20.9289 0.428934C20.5384 0.819458 20.5384 1.45262 20.9289 1.84315L26.5858 7.5L20.9289 13.1569C20.5384 13.5474 20.5384 14.1805 20.9289 14.5711C21.3195 14.9616 21.9526 14.9616 22.3431 14.5711L28.7071 8.20711ZM-8.74228e-08 8.5L28 8.5L28 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#DBDBDB"/>
                    </svg>
                </div>

                <div className="flex flex-row items-center gap-[7px] underline">
                    <Link href="https://t.me/clickme_ukrpl" className="min-[280px]:text-[14px] min-[600px]:text-[20px]" target="_blank">Telegram</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15" fill="none">
                        <path d="M28.7071 8.20711C29.0976 7.81659 29.0976 7.18342 28.7071 6.7929L22.3431 0.428934C21.9526 0.0384097 21.3195 0.0384097 20.9289 0.428934C20.5384 0.819458 20.5384 1.45262 20.9289 1.84315L26.5858 7.5L20.9289 13.1569C20.5384 13.5474 20.5384 14.1805 20.9289 14.5711C21.3195 14.9616 21.9526 14.9616 22.3431 14.5711L28.7071 8.20711ZM-8.74228e-08 8.5L28 8.5L28 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#DBDBDB"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};
