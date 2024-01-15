export default function DescribeSkill({desc}:{desc:string[]}) {
    return(
        <>
            <div className="absolute p-[20px] z-[41] opacity-[1] bg-[#1F1A23] rounded-[10px]">
                {desc.map((item, index)=><p key={index} className="text-[20px] text-yellow-500">-{item}</p>)}
            </div>
        </>
    )
};
