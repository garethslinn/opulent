"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";

const Contact: React.FC = () => {
    return (
        <>
            <Title first text="Privacy Policy" />
            <Paragraph backgroundColor="#f1f1f1" foregroundColor="">

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to GDS Consulting Ltd. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines our approach to handling your personal information, specifically emphasizing that we do not store any personal data collected from our users.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <h3>2.1 Personal Information</h3>
                    <p>
                        GDS Consulting Ltd does not store any personal information. While we may collect certain information to facilitate our services, such as your name, email address, or phone number, this information is not stored by us.
                    </p>
                    <h3>2.2 Non-Personal Information</h3>
                    <p>
                        We may collect non-personal information that does not directly identify you. This includes aggregated data about how users interact with our services. This information is used solely for analytical purposes to improve our services and is not stored in a manner that can be linked to any individual user.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                        GDS Consulting Ltd uses your personal information solely for the duration required to provide the requested service or interaction. Once the service or interaction is completed, all personal information is securely deleted and is not stored.
                    </p>

                    <h2>4. Sharing Your Information</h2>
                    <p>
                        Since we do not store your personal information, there is no personal data to share with third parties. However, for the duration of any service or interaction, your information may be temporarily shared with:
                    </p>
                    <ul>
                        <li><strong>Service Providers:</strong> Third-party vendors who help us provide our services.</li>
                        <li><strong>Business Partners:</strong> Partners with whom we collaborate to offer joint services or promotions.</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights.</li>
                    </ul>
                    <p>Once the service or interaction is complete, all personal information is securely deleted.</p>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement a variety of security measures to ensure that any personal information collected during the course of our interactions is handled securely and deleted immediately after the interaction. These measures include encryption, access controls, and secure servers.
                    </p>

                    <h2>6. Your Rights</h2>
                    <p>
                        Since GDS Consulting Ltd does not store your personal information, most data subject rights under the UK General Data Protection Regulation (UK GDPR) are not applicable. However, you have the right to:
                    </p>
                    <ul>
                        <li><strong>Access Your Data:</strong> Request confirmation that no personal data is stored.</li>
                        <li><strong>Correct Your Data:</strong> Request corrections to any inaccurate or incomplete personal information during the interaction.</li>
                        <li><strong>Delete Your Data:</strong> Confirm that your personal information has been deleted after the interaction.</li>
                        <li><strong>Restrict Processing:</strong> Request a restriction on the processing of your personal information during the interaction.</li>
                        <li><strong>Object to Processing:</strong> Object to the processing of your personal information during the interaction.</li>
                    </ul>
                    <p>To exercise these rights, please contact us at [Insert Contact Information].</p>

                    <h2>7. Cookies</h2>
                    <p>
                        Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. These cookies do not store personal information and can be managed through your browser settings.
                    </p>

                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically to stay informed about our approach to privacy.
                    </p>

                    <p>
                        Thank you for trusting GDS Consulting Ltd. We are committed to protecting your privacy and ensuring that no personal information is stored.
                    </p>

            </Paragraph>
        </>
    )
};

export default Contact;
