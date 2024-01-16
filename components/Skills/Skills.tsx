import BubbleCarousel from "./BubbleCarousel";
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
                "Pages and Routing",
                "Data Fetching",
                "Dynamic Routes",
                "CSR & SSR",
                "Image Optimization",
                "Link & Image",
            ]
        },
        {
            name: "REDUX TOOLKIT",
            describtion: [
                "useDispatch",
                "useSelector",
                "createSlice",
                "Initialization",
            ]
        },
        {
            name: "REST API",
            describtion: [
                "GET, POST, PUT, DELETE",
                "URLs and Endpoints",
                "Status Codes",
                "Error Handling",
                "header, body",
                "Tokens",
            ]        },
        {
            name: "Bootstrap",
            describtion: [
                "Components",
                "Customise",
                "Layout, Grid",
                "Forms",
                "Helpers",
            ]        },
        {
            name: "Chart.js",
            describtion: [
                "Components",
                "Data display",
            ]        },
        {
            name: "Material UI",
            describtion: [
                "Components",
                "Data Display",
                "Inputs",
                "Lab",
            ]        },
        {
            name: "Daisy UI",
            describtion: [
                "Components",
                "Data Display",
                "Layout",
                "Navigation",
                "Themes",
            ]        },
        {
            name: "Tailwind.css",
            describtion: [
                "class-styles",
                "components",
            ]        },
    ]
    return(
        <section className="relative">
            <BubbleCarousel />
            <h2 className="mt-[100px] mb-[50px] text-[60px] text-[#DBDBDB] text-center">Skills</h2>
            <div className="flex gap-[50px] max-[500px]:gap-[30px] justify-center flex-wrap flex-row mb-[100px]">
                {dataSkills.map((item, index) => (<Skill key={index} item={item} />))}
            </div>
        </section>
        
    )
};
