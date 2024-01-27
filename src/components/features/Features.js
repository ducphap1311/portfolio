import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title="Features" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card
                    title="Web Development"
                    des="Writing code in languages like HTML, CSS, SASS, TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS to create web pages that are functional, visually appealing, and responsive across different devices."
                />
                <Card
                    title="UI Design"
                    des="Using Figma designing template."
                />
            </div>
        </section>
    );
};

export default Features;
