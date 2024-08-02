"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import {techSkills} from "@/app/constants/skillData";
import TechSkill from "@/app/components/techSkill/TechSkill";

const Contact: React.FC = () => {
    return (
        <>
            <Title first text="Web Development Overview" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                This is not a comprehensive list of everything I know, but rather a general
                overview. Including exhaustive details is beyond the scope of this website
                and would only serve to bore the user.
            </Paragraph>
            <TechSkill skills={techSkills} />
        </>
    )
};

export default Contact;
