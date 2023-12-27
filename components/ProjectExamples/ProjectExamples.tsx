import Card from "./Card";
import underwatch from "../../assets/projs/underwatch.png"
import StrikerDrones from "../../assets/projs/strikerDrones.png"
import giggle from "../../assets/projs/giggle.png"
import masterComponent from "../../assets/projs/masterComponent.png"
import stl from './examples.module.css'
export default function ProjectExamples() {
    return(
        <>
            <h2 className="text-[50px] text-center text-[#FFFFFF] mt-[80px] mb-[50px]">Projects Examples</h2>
            <div className="relative flex flex-row flex-wrap justify-around items-center gap-[40px]">
                <div className={stl.purpleGradientE}></div>
                <Card imageC={underwatch} header={"Underwatch"}
                desc={"Client's Discord project: Promoting gaming success and rewards for his company. "}
                techs={["Next.js", "TypeScript", "JavaScript", "SCSS", "Tailwind.css", "HTML"]}
                linkGit="https://github.com/Ilkarion/underwatch"
                linkLook="https://underwatch.vercel.app/uk"/>


                <Card imageC={StrikerDrones} header={"Striker Drones"}
                desc={"My first project in a frontend team—focused on adaptive layout and image optimization."}
                techs={["JavaScript", "CSS", "HTML", "Owl Carousel", "Bootstrap"]}
                linkGit="https://github.com/Ilkarion/1027-team-03?tab=readme-ov-file"
                linkLook="https://koldovsky.github.io/1027-team-03/"/>

                <Card imageC={giggle} header={"Giggle"}
                desc={"Main goal: Develop a multilingual website with theme mode flexibility."}
                techs={["Next.js", "TypeScript", "next-intl", "next-themes", "CSS", "Tailwind.css", "HTML"]}
                linkGit="https://github.com/Ilkarion/giggle"
                linkLook="https://giggle-three.vercel.app/"/>

                <Card imageC={masterComponent} header={"Master Component"}
                desc={"Learned new technologies, skills. Gained first-time experience with a designer, backender, PM, and QA."}
                techs={["Next.js", "TypeScript", "ReduxToolkit", "next-auth", "SCSS", "Email.js", "Tailwind.css", "HTML"]}
                linkGit="https://github.com/Ilkarion/masterComponent"
                linkLook="https://master-component.vercel.app/"/>
                <div className={stl.purpleGradientE} style={{top:"700px", right:"400px"}}></div>
            </div>
        </>
    )
};
