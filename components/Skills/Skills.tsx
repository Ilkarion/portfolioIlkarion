import Skill from "./Skill"

interface skillsData {
    name: string;
    describtion: string;
}
export default function Skills() {
    const dataSkills: skillsData[] = [
        {
            name: "HTML",
            describtion: "to provide structure to a webpage and make it accessible to users"
        },
        {
            name: "CSS",
            describtion: "to define styles for your web pages, including the design, layout and variations in display for different devices"
        },
        {
            name: "JAVA SCRIPT",
            describtion: "to make web pages interactive"
        },
        {
            name: "REACT",
            describtion: "to build any kind of applications, making it a versatile framework for cross-platform development"
        },
        {
            name: "SASS",
            describtion: "to use variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff"
        },
        {
            name: "GITHUB",
            describtion: "to work together on projects from anywhere"
        },
        {
            name: "TYPESCRIPT",
            describtion: "to extends JavaScript and improves the developer experience"
        },
        {
            name: "NEXT.JS",
            describtion: "to build full-stack web applications"
        },
        {
            name: "REDUX TOOLKIT",
            describtion: "to write good Redux applications"
        },
        {
            name: "REACT ROUTER",
            describtion: "to handle client and server-side routing in React apps"
        },
        {
            name: "REST API",
            describtion: "lets you interact with any kind of server over HTTP"
        },
        {
            name: "LIBRERIES & OTHER",
            describtion: "Tailwind.css, Chart.js, Material UI, Daisy UI, Bootstrap, npm, Vite"
        },
    ]
    return(
        <>
            {dataSkills.map((item, index) => (<Skill key={index} item={item} />))}
        </>
    )
};
