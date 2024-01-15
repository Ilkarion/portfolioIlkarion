import Skill from "./Skill"

interface skillsData {
    name: string;
    describtion: string[];
}
export default function Skills() {
    const dataSkills: skillsData[] = [
        {
            name: "HTML",
            describtion: [
                "Elements",
                "Attributes",
                "Inline-styles",
                "Images",
                "Forms",
                "Classes, id, tags",
                "Graphics(Canvas)",
                "SEO"
            ]
        },
        {
            name: "CSS",
            describtion: [
                "Syntax",
                "Selectors",
                "FlexBox, Grid",
                "Animation",
                "Variables",
                "Responsive",
                "Inheritance",
            ]
        },
        {
            name: "JAVA SCRIPT",
            describtion: [
                "Loops, Variables, Functions, classes",
                "JSON",
                "Prototype",
                "CallBacks",
                "Closures",
                "Asynchronous",
                "Promises",
                "Asynk, Await",
                "Libraries",
            ]
        },
        {
            name: "REACT",
            describtion: [
                ".map(), .filter(), .reduce(), .sort()",
                "Components, Props, JSX, TSX",
                "Asynchronus JS",
                "Hooks",
                "States",
                "Events",
                "Routing",
            ]
        },
        {
            name: "SASS",
            describtion: [
                "Variables",
                "Mixins",
                "Nesting",
                "Composing",
            ]
        },
        {
            name: "GITHUB",
            describtion: [
                "add, commit, pull, push",
                "GitHub Desktop",
                "work with branches",
            ]        },
        {
            name: "TYPESCRIPT",
            describtion: [
                "Types",
                "interface",
                "Objects",
                "Functions",
                "Variables",
            ]
        },
        {
            name: "NEXT.JS",
            describtion: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]        },
        {
            name: "REDUX TOOLKIT",
            describtion: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]        },
        {
            name: "REACT ROUTER",
            describtion: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]        },
        {
            name: "REST API",
            describtion: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]        },
        {
            name: "LIBRERIES & OTHER",
            describtion: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]        },
    ]
    return(
        <>
        <h2 className="mt-[100px] mb-[50px] text-[60px] text-[#DBDBDB] text-center">Skills</h2>
        <div className="flex gap-[50px] justify-center flex-wrap flex-row mb-[100px]">
            {dataSkills.map((item, index) => (<Skill key={index} item={item} />))}
        </div>
        </>
        
    )
};
