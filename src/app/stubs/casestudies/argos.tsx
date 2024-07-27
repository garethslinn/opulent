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

const CaseStudyArgos = () => {
    return (
        <Container>
            <Title>Case Study: Argos</Title>
            <Subtitle>Background</Subtitle>
            <Paragraph>
                In 2014, before the days of useful libraries like React, Argos&apos;s online website was heavily backend-driven, serving up pages via Java and JSPs. The core issue wasn&apos;t maintenance, which was relatively easy, but two significant challenges:
            </Paragraph>
            <Subtitle as="h3">1. Legacy Code Bloat</Subtitle>
            <List>
                <ListItem>
                    Argos had a core JavaScript library developed solely for their use, which over time was layered with lots of jQuery code. This was done to simplify work for the external team managing the project before it was handed over to my team.
                </ListItem>
                <ListItem>
                    This layering caused severe issues, such as:
                    <InlineList>
                        <InlineListItem>Slow implementation of new features.</InlineListItem>
                        <InlineListItem>An ever-growing list of defects with each new deployment.</InlineListItem>
                    </InlineList>
                </ListItem>
            </List>
            <Subtitle as="h3">2. Performance Issues</Subtitle>
            <List>
                <ListItem>Page load times were excessively long.</ListItem>
                <ListItem>Argos&apos;s analytics showed that these delays were causing significant customer loss.</ListItem>
            </List>
            <Subtitle>Objectives</Subtitle>
            <List>
                <ListItem>Decouple the front end from the backend.</ListItem>
                <ListItem>Rewrite the JavaScript library, removing the jQuery that caused code pollution.</ListItem>
                <ListItem>Improve overall performance and reduce page load times.</ListItem>
            </List>
            <Subtitle>Strategy and Execution</Subtitle>
            <Subtitle as="h3">1. Decoupling Frontend and Backend</Subtitle>
            <Paragraph>
                Implemented a separation between frontend and backend systems to streamline development and deployment processes.
            </Paragraph>
            <Subtitle as="h3">2. JavaScript Library Rewrite</Subtitle>
            <Paragraph>
                Rewrote the existing JavaScript library, often porting from the original library and removing jQuery. Reduced the codebase by 70%, significantly simplifying the code and making it more maintainable.
            </Paragraph>
            <Subtitle as="h3">3. API Development</Subtitle>
            <Paragraph>
                Created a new set of APIs to handle data exchange between the frontend and backend. Utilized Express for routing, which provided faster and more efficient data handling.
            </Paragraph>
            <Subtitle>Performance Improvements</Subtitle>
            <List>
                <ListItem>Codebase Reduction: The JavaScript codebase was reduced by 70%, decreasing load times and simplifying maintenance.</ListItem>
                <ListItem>Routing Efficiency: Using Express for routing, performance improved by almost five times.</ListItem>
                <ListItem>Page Load Times: Significant reduction in page load times, leading to a better user experience.</ListItem>
            </List>
            <Subtitle>Outcomes</Subtitle>
            <List>
                <ListItem>Enhanced Performance: Page load times were reduced by approximately 80%, improving user experience and reducing bounce rates.</ListItem>
                <ListItem>Improved Analytics: Customer retention increased as the site became more responsive and user-friendly. Significant reduction in the number of defects and bugs, resulting in fewer customer complaints and support tickets.</ListItem>
            </List>
            <Paragraph>
                By addressing these challenges, my team and I not only modernized Argos&apos;s online presence but also ensured that it was scalable and maintainable for future developments. This project demonstrated the importance of clean, efficient code and the impact of performance on customer satisfaction and retention.
            </Paragraph>
        </Container>
    );
};

export default CaseStudyArgos;
