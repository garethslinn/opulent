"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Card from "@/app/components/card/Card";
import Image from "next/image";

const OpenSource: React.FC = () => {
    return (
        <>
            <Title first text="Open Source" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                Whether you are working with complex data manipulations, need robust validation methods,
                or require specialised functionality for your JavaScript applications, these packages
                have you covered. From HelpRJS, a comprehensive toolkit for object and array manipulation,
                to other essential packages designed to streamline your coding experience, you will find
                solutions that are both easy to use and highly effective.
                <br /><br />

                <a href="https://github.com/garethslinn" target="_blank" rel="noopener noreferrer">
                    <Image className="img" src='/assets/images/brands/github.svg' alt='GitHub Link' width={30} height={30} />
                    &nbsp;<span>Visit my GitHub</span>
                </a>

            </Paragraph>
            <Card
                title="HelprJS"
                link="https://www.npmjs.com/package/helprjs"
                imageSrc="/assets/images/helprjs.png"
            >
                HelpRJS is a versatile toolkit designed to assist developers in solving challenging tasks involving objects and arrays.
                It provides a comprehensive set of methods that are fully documented and supported with live demos, making it incredibly
                simple to use.
                <br/><br/>
                <h3>Usage Scenarios:</h3>
                <br/>
                <ul>
                    <li>Efficiently manipulate and process arrays and objects.</li>
                    <li>Validate and sanitize data.</li>
                    <li>Perform complex operations such as merging, grouping, and transforming data.</li>
                    <li>Handle common data manipulation tasks with minimal code and effort.</li>
                </ul>
                <br/>
            </Card>

            <Card
                title="Guardly"
                link="https://www.npmjs.com/package/guardly"
                imageSrc="/assets/images/guardly.png"
            >
                Guardly is a JavaScript/TypeScript library that provides a suite of security helper methods
                designed to enhance the security of web applications. It includes methods for preventing
                common web vulnerabilities such as XSS, CSRF, SQL Injection, LDAP Injection, HTTP Parameter
                Pollution, and more.

                <br/><br/>
                <h3>Features:</h3>
                <br/>
                <ul>
                    <li>XSS Prevention: Escape and sanitise HTML input.</li>
                    <li>CSRF Prevention: Generate and set CSRF tokens.</li>
                    <li>HTTPS Enforcement: Ensure HTTPS protocol usage.</li>
                    <li>SSL/TLS Validation: Validate SSL/TLS configurations.</li>
                    <li>CSP Setting: Set Content-Security-Policy meta tags.</li>
                    <li>Command Injection Prevention: Validate allowed commands.</li>
                    <li>SQL Injection Prevention: Escape SQL special characters.</li>
                    <li>LDAP Injection Prevention: Escape LDAP special characters.</li>
                    <li>HTTP Verb Tampering Prevention: Validate HTTP methods.</li>
                    <li>Header Injection Prevention: sanitise headers.</li>
                    <li>XML Injection Prevention: sanitise XML input.</li>
                    <li>SRI for CDN: Add Subresource Integrity (SRI) to CDN scripts.</li>
                    <li>HTTP Parameter Pollution Prevention: sanitise URL parameters.</li>
                    <li>Input Validation: Validate and sanitise user inputs.</li>
                </ul>
            </Card>

            <Card
                title="API Security Gateway"
                link="https://www.npmjs.com/package/api-security-gateway"
                imageSrc="/assets/images/api-security-gateway.png"
            >
                A security gateway for APIs with features such as rate limiting, IP whitelisting, and injection prevention. This library helps you secure your APIs by controlling access and preventing common attack vectors.

                <br/><br/>
                <h3>Features:</h3>
                <br/>
                <ul>
                    <li>Rate Limiting: Control the number of requests a user can make within a specified timeframe.</li>
                    <li>IP Whitelisting/Blacklisting: Allow or deny requests based on IP addresses.</li>
                    <li>Injection Prevention: Sanitize inputs to prevent SQL injection, XSS, and other injection attacks.</li>
                </ul>
                <br/>
            </Card>
        </>
    )
};

export default OpenSource;
