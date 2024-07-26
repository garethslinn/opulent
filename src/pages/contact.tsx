"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";

const Contact: React.FC = () => {
    return (
        <>
            <Title first text="Contact Page" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                Some placeholder text...
            </Paragraph>
        </>
    )
};

export default Contact;
