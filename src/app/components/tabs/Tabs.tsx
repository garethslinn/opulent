import React, { useState } from 'react';
import styled from 'styled-components';
import {TabsProps} from "@/app/components/tabs/Tabs.types";
import {TabButton, TabButtons, TabContent, TabImage} from "@/app/components/tabs/Tabs.styles";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
            <TabButtons>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        onClick={() => handleTabClick(index)}
                        isActive={activeTabIndex === index}
                    >
                        <TabImage src={tab.imageSrc} alt={tab.label} />

                    </TabButton>
                ))}
            </TabButtons>
            <TabContent>
                {tabs[activeTabIndex].content}
            </TabContent>
        </div>
    );
};

export default Tabs;
