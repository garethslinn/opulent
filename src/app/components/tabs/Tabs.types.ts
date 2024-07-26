import React from "react";

export interface TabProps {
    label: string;
    content: React.ReactNode;
    imageSrc: string;
}

export interface TabsProps {
    tabs: TabProps[];
}