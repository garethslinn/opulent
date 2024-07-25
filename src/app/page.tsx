"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Card from "@/app/components/card/Card";

const About: React.FC = () => {
    return (
        <>
            <Title first text="Developing Custom Solutions Tailored to Your Needs" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                At GDS Consulting Ltd, I offer elegant, custom-built solutions from
                start to finish, addressing the significant challenges you face. I
                build entire products while also tackling your immediate development
                and optimisation needs.
            </Paragraph>

            <Card
                title="Frontend Development"
                link="/experience"
                imageSrc="/assets/images/frontend.svg"
            >
                I excel in building products primarily around frontend technologies. The world of
                frontend moves fast, but my extensive experience with developing open source, rapid
                performance, and advanced UX/UI ensures that I can contribute effectively and stay
                updated with new tech.
            </Card>

            <Card
                title="Backend Development"
                link="/experience"
                imageSrc="/assets/images/backend.svg"
            >
                My backend stack includes TypeScript, Express, NodeJS, and MongoDB,
                ensuring your backend is robust and efficient. I can also assist with
                Python as when needed.
            </Card>

            <Card
                title="Performance Optimisation"
                link="/experience"
                imageSrc="/assets/images/optimisation.svg"
            >
                Scalability problems can be a good sign of growth, but they
                can also be painful. I analyse potential bottlenecks in your
                code and infrastructure, propose a prioritized backlog of improvements,
                and bring them to life. I will prepare your product for user surges,
                making it reliable, resource-efficient, and scalable.
            </Card>

            <Card
                title="Product Design"
                link="/experience"
                imageSrc="/assets/images/design.svg"
            >
                Whether you have just the hint of an idea or are further along in
                product development, I dive in to produce interfaces where beauty
                and functionality combine to provide users with an exceptional experience.
            </Card>


        </>
    );
};

export default About;


//
// Introduction
// Welcome to my professional portfolio, where over two decades of experience as a Senior Front End and Full Stack Developer converge to tell a story of innovation, expertise, and relentless pursuit of excellence.
//
//     Meet Gareth Slinn
// As a seasoned developer with over 20 years of commercial experience, I have had the privilege of working across a myriad of industries including telecommunications, e-commerce, digital agencies, finance, gambling, retail, and many more. My journey is marked by a continuous commitment to learning and adapting, allowing me to stay at the forefront of technological advancements and industry best practices.
//
//     What I Bring to the Table
// In my role as a Senior Front End Developer, I have honed a diverse skill set that encompasses the latest in front-end and back-end technologies. From mastering TypeScript, JavaScript, and ReactJS, to deploying robust solutions with AWS and Azure, my technical toolkit is both broad and deep. I thrive in environments where I can tackle complex problems, lead development teams, and deliver exceptional user experiences through responsive web design and mobile applications.
//
//     Highlights of My Career
// Throughout my career, I have successfully led and contributed to high-impact projects for renowned companies such as BT, Cisco, AIG, William Hill, and many others. My role often involves mentoring junior developers, spearheading major releases, and refactoring legacy systems to improve performance and maintainability. Each project is a testament to my ability to blend technical acumen with strategic vision, ensuring that each solution not only meets but exceeds client expectations.
//
//     A Commitment to Excellence
// Beyond my technical skills, I bring strong interpersonal abilities that are crucial in today’s collaborative work environments. Whether it's communicating complex ideas clearly, fostering teamwork, or navigating the challenges of tight deadlines, my soft skills are a critical component of my professional arsenal. I pride myself on being adaptable, detail-oriented, and driven by a genuine passion for technology and innovation.
//
// Explore My Work
// I invite you to explore my GitHub repository, where you can find an array of open-source projects such as Guardly and Helprjs. These projects showcase my ability to create practical tools and libraries that address common development challenges. Additionally, my experience spans various methodologies including Agile, Waterfall, Lean, and Kanban, ensuring a versatile approach to project management and delivery.
//
//     Looking Ahead
// As I continue to grow and evolve in my career, I remain committed to pushing the boundaries of what’s possible in web and software development. I am always on the lookout for new challenges and opportunities to apply my skills in innovative ways. If you’re looking for a developer who combines extensive experience with a passion for continuous improvement, I would love to connect and explore how we can create something exceptional together.
