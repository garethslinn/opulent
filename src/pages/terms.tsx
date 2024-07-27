"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";

const Terms: React.FC = () => {
    return (
        <>
            <Title first text="Terms and Conditions" />
            <Paragraph backgroundColor="#f1f1f1" foregroundColor="">

                <h2>1. Introduction</h2>
                <p>
                    These terms and conditions outline the rules and regulations for the use of GDS Consulting Ltd&apos;s Website and Services.
                </p>

                <h2>2. Acceptance of Terms</h2>
                <p>
                    By accessing this website and/or using our services, you accept these terms and conditions in full. Do not continue to use GDS Consulting Ltd&apos;s website or services if you do not accept all of the terms and conditions stated on this page.
                </p>

                <h2>3. Services</h2>
                <p>
                    GDS Consulting Ltd provides [describe services]. We reserve the right to modify or discontinue the service with or without notice at any time.
                </p>

                <h2>4. User Responsibilities</h2>
                <p>
                    Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                    Unless otherwise stated, GDS Consulting Ltd and/or its licensors own the intellectual property rights for all material on this website and provided through our services. All intellectual property rights are reserved.
                </p>

                <h2>6. Limitation of Liability</h2>
                <p>
                    In no event shall GDS Consulting Ltd, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website or services, whether such liability is under contract, tort or otherwise, and GDS Consulting Ltd, including its officers, directors, and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website or services.
                </p>

                <h2>7. Indemnification</h2>
                <p>
                    You hereby indemnify to the fullest extent GDS Consulting Ltd from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney&apos;s fees) arising out of or in any way related to your breach of any of the provisions of these terms.
                </p>

                <h2>8. Termination</h2>
                <p>
                    We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                </p>

                <h2>10. Changes to Terms</h2>
                <p>
                    GDS Consulting Ltd reserves the right to revise these terms at any time as it sees fit, and by using this website and services you are expected to review these terms on a regular basis.
                </p>

            </Paragraph>
        </>
    )
};

export default Terms;
