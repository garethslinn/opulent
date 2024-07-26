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

const CaseStudyBT = () => {
    return (
        <Container>
            <Title>Case Study: BT</Title>
            <Subtitle>Background</Subtitle>
            <Paragraph>
                In 2015, I joined BT as a senior developer. It quickly became apparent that there were several significant challenges that needed to be addressed. These challenges revolved around a lack of cohesion within the team, friction between backend developers in Cardiff, and issues with the offshore team due to the absence of a work tracking system. Recognizing the need for a structured approach, I stepped up as a temporary project manager while continuing my role as a senior frontend developer.
            </Paragraph>
            <Subtitle>Objectives</Subtitle>
            <List>
                <ListItem>Introduce a system to track and manage work effectively.</ListItem>
                <ListItem>Foster a cohesive and cooperative team environment.</ListItem>
                <ListItem>Ensure timely delivery of projects and tasks.</ListItem>
                <ListItem>Improve overall efficiency and workflow processes.</ListItem>
            </List>
            <Subtitle>Strategy and Execution</Subtitle>
            <Subtitle as="h3">1. Introducing Jira and Agile Scrum</Subtitle>
            <Paragraph>
                Implemented Jira as the primary tool for tracking work and managing projects. Trained the junior project manager in Agile Scrum methodologies. Introduced Scrum practices to the team, facilitating regular stand-ups, sprint planning, and retrospectives.
            </Paragraph>
            <Subtitle as="h3">2. Fostering Team Cohesion</Subtitle>
            <Paragraph>
                Worked on bridging the gap between backend developers in Cardiff and the offshore team. Encouraged open communication and collaboration, leading to a more cohesive and cooperative team.
            </Paragraph>
            <Subtitle as="h3">3. Frontend Development and Automation</Subtitle>
            <Paragraph>
                Developed CSS/HTML static pages to reflect the designs and variations. Implemented JavaScript functionality to demonstrate interactions. Built an automated service to process CSS/JS and package them for deployment. Created an automated sprite generator for rapid image management. Developed a living wiki containing all controls, code snippets, and additional information for development, design, and Q&A support.
            </Paragraph>
            <Subtitle as="h3">4. Coaching and Support</Subtitle>
            <Paragraph>
                Provided ongoing coaching and support to the team to ensure efficiency. Engaged the team with a view towards adopting a more Agile approach. Implemented tagging, accessibility/code standards, unit testing, documentation, and new ways of working.
            </Paragraph>
            <Subtitle>Performance Improvements</Subtitle>
            <List>
                <ListItem>System Implementation: The introduction of Jira provided a clear system for tracking and managing work, improving visibility and accountability.</ListItem>
                <ListItem>Team Cohesion: The team became more cohesive and cooperative, leading to smoother workflows and better collaboration.</ListItem>
                <ListItem>Automation and Efficiency: Automated processes for CSS/JS packaging and sprite generation significantly reduced manual work and increased efficiency.</ListItem>
                <ListItem>Documentation and Support: The living wiki served as a valuable resource for development, design, and Q&A support, streamlining workflows and providing essential information.</ListItem>
            </List>
            <Subtitle>Outcomes</Subtitle>
            <List>
                <ListItem>Timely Delivery: Projects and tasks were delivered on time, thanks to improved tracking, planning, and team cohesion.</ListItem>
                <ListItem>Increased Efficiency: Automated processes and a well-documented system contributed to increased efficiency and reduced errors.</ListItem>
                <ListItem>Agile Transformation: The team successfully adopted Agile practices, leading to more organized and efficient workflows.</ListItem>
                <ListItem>Enhanced Collaboration: Improved communication and collaboration between the Cardiff and offshore teams resulted in a more harmonious working environment.</ListItem>
            </List>
            <Paragraph>
                By addressing these challenges head-on, I played a key role in transforming BT's workflow and team dynamics. The success of this project highlights the importance of structured project management, cohesive team dynamics, and the adoption of Agile practices.
            </Paragraph>
        </Container>
    );
};

export default CaseStudyBT;
