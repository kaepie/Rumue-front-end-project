import Section1 from "./section1"
import Section2 from "./section2";
import Section3 from "./section3";

export default function Home(){

    return (
        <div className="flex flex-col items-center">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
};
