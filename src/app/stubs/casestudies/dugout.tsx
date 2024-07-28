"use client"

import React from 'react';
import {
    Container,
    Title,
    Subtitle,
    Paragraph,
    List,
    ListItem,
    InlineList,
    InlineListItem,
} from '../../components/casestudies/caseStudies.styles';

const CaseStudyDugout = () => {
    return (
        <Container>
            <Title>Case Study: Dugout.com</Title>
            <Subtitle>Background</Subtitle>
            <Paragraph>
                Dugout.com is a premier football website offering behind-the-scenes video on demand for football fans. Owned by ten of the world&apos;s leading football teams, it provides up-to-the-minute videos from a unique perspective. Initially, the development of the site was outsourced to an offshore company. However, after 10 months, almost all of the work remained incomplete with no hope of hitting the deadline, which was just over two months away.
            </Paragraph>
            <Subtitle>Objectives</Subtitle>
            <List>
                <ListItem>Scrap the existing Angular-based legacy code due to its poor foundation.</ListItem>
                <ListItem>Build the frontend of the site from scratch within 9 weeks.</ListItem>
                <ListItem>Develop new features and continuously improve revenue post-launch.</ListItem>
            </List>
            <Subtitle>Strategy and Execution</Subtitle>
            <Subtitle as="h3">1. Forming the Team</Subtitle>
            <Paragraph>
                A dedicated team was assembled, with me as the lead frontend developer. We quickly assessed the current state of the project and decided to scrap the legacy code due to its high risk.
            </Paragraph>
            <Subtitle as="h3">2. Starting from Scratch</Subtitle>
            <Paragraph>
                We began building the frontend from scratch, ensuring a solid foundation for future development. The focus was on creating a scalable, maintainable, and efficient codebase.
            </Paragraph>
            <Subtitle as="h3">3. Agile Development</Subtitle>
            <Paragraph>
                Adopted agile methodologies to ensure rapid development and frequent iterations. Prioritied key features and functionalities to meet the tight deadline.
            </Paragraph>
            <Subtitle as="h3">4. Intensive Development Cycle</Subtitle>
            <Paragraph>
                Worked long days, nights, and overtime to ensure the project stayed on track. Collaborated closely with the backend team to integrate the new frontend seamlessly.
            </Paragraph>
            <Subtitle as="h3">5. Continuous Improvement</Subtitle>
            <Paragraph>
                After the initial launch, focused on developing new features and enhancing existing ones. Sought out ways to improve user engagement and increase revenue.
            </Paragraph>
            <Subtitle>Performance Improvements</Subtitle>
            <List>
                <ListItem>Codebase Overhaul: Replaced the inefficient Angular-based code with a new, robust foundation.</ListItem>
                <ListItem>Feature Delivery: Managed to build and deliver the frontend within the 9-week timeframe.</ListItem>
                <ListItem>Efficiency: The new site architecture allowed for easier maintenance and quicker implementation of new features.</ListItem>
            </List>
            <Subtitle>Outcomes</Subtitle>
            <List>
                <ListItem>Successful Launch: Despite the initial setbacks, the site was successfully launched within the 9-week deadline.</ListItem>
                <ListItem>User Engagement: Enhanced user experience led to increased engagement and satisfaction among football fans.</ListItem>
                <ListItem>Revenue Growth: Continuous development of new features and improvements contributed to increased revenue.</ListItem>
                <ListItem>Team Morale: Although the project required significant overtime, the team&apos;s dedication and hard work resulted in a massive success.</ListItem>
            </List>
            <Paragraph>
                By addressing these challenges head-on, my team and I not only rescued the Dugout.com project but also ensured its long-term success and scalability. This project demonstrated the importance of a strong foundation, agile development, and relentless dedication to meet ambitious deadlines and achieve outstanding results.
            </Paragraph>
        </Container>
    );
};

export default CaseStudyDugout;
