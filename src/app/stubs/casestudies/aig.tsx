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

const CaseStudyAIG = () => {
    return (
        <Container>
            <Title>Case Study: AIG</Title>
            <Subtitle>Background</Subtitle>
            <Paragraph>
                In 2019, I was instrumental in establishing a world-recognized component library for AIG, written in React and TypeScript. This library has become a cornerstone of their frontend development, still in use today, providing a standardized and efficient way to build user interfaces across various applications within the organization.
            </Paragraph>
            <Subtitle>Objectives</Subtitle>
            <List>
                <ListItem>Develop a robust and scalable component library using React and TypeScript.</ListItem>
                <ListItem>Ensure the library is easy to use, well-documented, and maintainable.</ListItem>
                <ListItem>Create a standardized approach to building user interfaces across AIG's applications.</ListItem>
            </List>
            <Subtitle>Strategy and Execution</Subtitle>
            <Subtitle as="h3">1. Initial Assessment</Subtitle>
            <Paragraph>
                Analyzed existing UI components and identified the need for a standardized library. Collaborated with stakeholders to gather requirements and set clear goals for the library.
            </Paragraph>
            <Subtitle as="h3">2. Component Design</Subtitle>
            <Paragraph>
                Designed reusable and scalable components, ensuring they met AIG's design guidelines and accessibility standards. Focused on creating a flexible architecture that allowed for easy customization and extension.
            </Paragraph>
            <Subtitle as="h3">3. Development with React and TypeScript</Subtitle>
            <Paragraph>
                Leveraged the power of React for building interactive and dynamic user interfaces. Used TypeScript to add type safety, improve code quality, and facilitate easier maintenance. Implemented best practices for component development, including modularity, encapsulation, and reusability.
            </Paragraph>
            <Subtitle as="h3">4. Documentation and Testing</Subtitle>
            <Paragraph>
                Created comprehensive documentation to ensure developers could easily understand and use the components. Implemented rigorous testing procedures to guarantee the reliability and stability of the components. Used Storybook for interactive documentation and component testing.
            </Paragraph>
            <Subtitle as="h3">5. Integration and Adoption</Subtitle>
            <Paragraph>
                Integrated the component library into existing and new projects within AIG. Provided training and support to development teams to ensure smooth adoption. Continuously gathered feedback and made improvements to the library.
            </Paragraph>
            <Subtitle>Performance Improvements</Subtitle>
            <List>
                <ListItem>Standardization: Established a consistent approach to UI development, reducing development time and improving the user experience.</ListItem>
                <ListItem>Scalability: Designed the library to be easily extendable, allowing for the addition of new components and features.</ListItem>
                <ListItem>Type Safety: Leveraged TypeScript to catch errors early in the development process, reducing bugs and improving code quality.</ListItem>
            </List>
            <Subtitle>Outcomes</Subtitle>
            <List>
                <ListItem>Widespread Adoption: The component library was quickly adopted across various teams within AIG, becoming a critical part of their development workflow.</ListItem>
                <ListItem>Improved Efficiency: Development teams could build applications faster and more efficiently, thanks to the reusable components and standardized approach.</ListItem>
                <ListItem>Ongoing Use and Recognition: The library has continued to be a vital tool for AIG, recognized for its robustness and effectiveness in streamlining frontend development.</ListItem>
            </List>
            <Paragraph>
                By spearheading the development of this component library, I played a key role in transforming AIG's frontend development practices. The success of this project highlights the importance of standardization, scalability, and type safety in modern web development.
            </Paragraph>
        </Container>
    );
};

export default CaseStudyAIG;
