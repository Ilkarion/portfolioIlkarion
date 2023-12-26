import Card from "./Card";
import underwatch from "../../assets/projs/underwatch.png"
import StrikerDrones from "../../assets/projs/strikerDrones.png"
import giggle from "../../assets/projs/giggle.png"
export default function ProjectExamples() {
    return(
        <div className="flex flex-row flex-wrap justify-around items-center gap-8">
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
        </div>
    )
};
