"use client";

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import { techSkills } from "@/app/stubs/techSkills";
import QuoteTool from "../app/components/quoteTool/QuoteTool";
import TwoColumnContainer from "@/app/components/layout/TwoColumnContainer";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import { industries } from "@/app/stubs/industries";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/stubs/methodologies";
import SkillCards from "@/app/components/skillCards/SkillCards";
import { softSkills } from "@/app/stubs/softSkills";
import ImageDisplay from "@/app/components/imageDisplay/ImageDisplay";

const GraphicDesign: React.FC = () => {
    return (
        <>
            <section aria-labelledby="Graphic Design">
                <Title first text="Graphic Design" />
                <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                    Though my commercial expertise is in development, I have always had a natural
                    talent for design and art. Drawing has been a part of my life since childhood,
                    and my early days as a print designer taught me the importance of precise color
                    codes in CMYK.
                    <br /><br />
                    While the industry has evolved, my design skills have seamlessly integrated
                    into my front-end development work, particularly in layout and aesthetics. I
                    can create icons and graphic layouts, leveraging my artistic background.
                    <br /><br />
                    Instead of mundane graphics, here is a brief exhibition of my more elaborate
                    designs for you to enjoy.
                </Paragraph>
            </section>

            <ImageDisplay
                title="A Matter Of Perspective"
                image="/assets/images/design/perspective.png"
                imageRight={false}
            >
                <p>The first image showcases my process of setting up the perspective
                    like a wireframe before drawing the actual image. In this example,
                    I am drawing a sitting room, a challenging task because the human
                    eye can easily detect even the slightest perspective errors. This
                    is why such drawings, though they may appear simple, require
                    meticulous planning and time.</p>
            </ImageDisplay>

            <ImageDisplay
                title="A Coffee Shop Scene"
                image="/assets/images/design/coffee.png"
                imageRight
            >
                <p>The next image is a drawing of a coffee shop rendered in perspective
                    and filled in using vector-based graphics. Here, I apply color theory
                    to choose harmonious colors, enhancing the overall visual appeal. I
                    particularly enjoy adding clouds with a clean cut-off at the bottom.
                    Additionally, I include minute details like irregular brickwork and a
                    few blades of grass to add depth without overwhelming the image. It is
                    all about finding the right balance.</p>
            </ImageDisplay>

            <ImageDisplay
                title="An Impossible Cafe"
                image="/assets/images/design/cafe.png"
                imageRight={false}
            >
                <p>A great design should look simple, and the cartoon perspective effect,
                    though time-consuming to master, yields impressive outcomes, especially
                    for logos and eye-catching adverts. This technique is used in popular
                    cartoon shows like The Simpsons, Rick & Morty, and Family Guy. While it
                    defies real-world possibilities, it cleverly tricks the eye into
                    believing it is plausible.</p>
            </ImageDisplay>

            <ImageDisplay
                title="Logo design"
                image="/assets/images/logo.svg"
                imageRight
            >
                <p>Transforming the letter &quot;G&quot; into a logo involves using vibrant colors,
                    fill techniques, and ornate curves. These elements elevate the letter
                    from simple to sophisticated. Bright colors attract attention, fill adds
                    depth, and curves introduce elegance. Together, these design choices turn
                    the &quot;G&quot; into a memorable and impactful pictographic logo.</p>
            </ImageDisplay>

            <ImageDisplay
                title="Every plaque has its place"
                image="/assets/images/design/slinns-gym-final.png"
                imageRight={false}
            >
                <p>The final piece is a plaque I designed for my home gym. This logo was printed
                    on 2cm shiny vinyl, allowing me to hang it as a plaque in my gym. It is the
                    result of several iterations, experimenting with various colors from reds
                    to blues, before arriving at this final design. A good logo should speak for
                    itself without the need for the designer to explain their subjective perspective.</p>
            </ImageDisplay>
        </>
    );
};

export default GraphicDesign;
