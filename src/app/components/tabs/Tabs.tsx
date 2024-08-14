import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TabsProps } from "@/app/components/tabs/Tabs.types";
import { TabButton, TabButtons, TabContent, TabImage } from "@/app/components/tabs/Tabs.styles";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        if (router.query.tab) {
            const tabIndex = tabs.findIndex(tab => tab.label === router.query.tab);
            if (tabIndex !== -1) {
                setActiveTabIndex(tabIndex);
            }
        }
    }, [router.query.tab, tabs]);

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
            <TabButtons role="tablist">
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        role="tab"
                        aria-selected={activeTabIndex === index}
                        aria-controls={`tabpanel-${index}`}
                        onClick={() => handleTabClick(index)}
                        isActive={activeTabIndex === index}
                    >
                        <TabImage src={tab.imageSrc} alt={tab.label} />
                    </TabButton>
                ))}
            </TabButtons>
            <TabContent
                role="tabpanel"
                aria-labelledby={`tabpanel-${activeTabIndex}`}
            >
                {tabs[activeTabIndex].content}
            </TabContent>
        </div>
    );
};

export default Tabs;
