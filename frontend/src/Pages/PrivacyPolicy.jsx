import React from 'react';

// Define the content structure for easy mapping/rendering
const sections = [
    {
        title: '1. Information We Collect',
        id: 'info-collection',
        content: "The type of information we collect depends on how you interact with our VR Associate service. This may include:",
        subsections: [
            {
                heading: 'A. Information You Directly Provide to Us',
                points: [
                    '**Account Information:** Name, email address, password, and profile information.',
                    '**Communication Data:** Information provided when you contact us for support, feedback, or inquiries.',
                ],
            },
            {
                heading: 'B. Usage and Technical Data (Automatically Collected)',
                points: [
                    '**VR Interaction Data:** Headset tracking data (orientation, position), controller input, interaction logs, session duration, and frequency of use.',
                    '**Device Information:** VR headset model, operating system, unique device identifiers, and IP address.',
                    '**Log Information:** Server logs recording access times, dates, and activity details.',
                ],
            },
            {
                heading: 'C. Data from Third-Party Platforms (If Applicable)',
                points: [
                    'Information received if you connect through a third-party VR platform (e.g., user ID or profile information), subject to their privacy policies.',
                ],
            },
        ],
    },
    {
        title: '2. How We Use Your Information',
        id: 'how-we-use',
        content: "We use the collected information for various purposes, including:",
        points: [
            '**To Provide and Maintain the Service:** To operate, maintain, and improve the functionality and user experience.',
            '**To Personalize Your Experience:** To tailor content, associate functions, and recommendations within the VR environment.',
            '**For Communication:** To respond to inquiries, send service updates, and security alerts.',
            '**For Security and Compliance:** To monitor for fraudulent activity and to comply with legal obligations.',
            '**For Research and Development:** To analyze usage patterns and develop new features or services.',
        ],
    },
    {
        title: '3. How We Share Your Information',
        id: 'how-we-share',
        content: "We do not sell your personal information. We may share your information in the following situations:",
        points: [
            '**With Service Providers:** Third-party vendors who perform services on our behalf (e.g., hosting, analytics).',
            '**For Legal Reasons:** If required by law, court order, or to protect our rights, property, or safety.',
            '**Business Transfers:** In connection with any merger, sale of company assets, or acquisition.',
        ],
    },
    {
        title: '4. Data Security',
        id: 'data-security',
        content: "We implement a variety of security measures designed to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
        title: '5. Your Data Rights and Choices',
        id: 'data-rights',
        content: "Depending on your jurisdiction, you may have the following rights regarding your data:",
        points: [
            '**Access and Correction:** The right to request a copy of your personal data or to request corrections.',
            '**Deletion (Right to be Forgotten):** The right to request the deletion of your personal data, subject to certain legal exceptions.',
            '**Opt-Out of Communications:** You can opt-out of receiving promotional emails.',
        ],
    },
    {
        title: "6. Children's Privacy",
        id: 'children-privacy',
        content: "Our service is **not** directed to individuals under the age of 13. We do not knowingly collect personally identifiable information from children under that age. If we become aware of such collection, we will take steps to remove that information.",
    },
];

const VRAssociatePrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-10">

                {/* Header */}
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl flex items-center">
                        {/* <span className="text-indigo-600 mr-3"></span> */}
                        VR Associate Privacy Policy
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Last Updated: September 2025
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-8 text-gray-700">
                    <p className="mb-4">
                        Welcome to our Vinay Raj (VR) Associate service. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when you use our service.
                    </p>
                    {/* <p className="text-sm p-3 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800">
                        **Disclaimer:** This is a template. Please consult with a legal professional to ensure this policy complies with all applicable laws (GDPR, CCPA, etc.) for your specific business and location.
                    </p> */}
                </section>

                {/* Content Sections */}
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            {section.title}
                        </h2>
                        <p className="mb-4 text-gray-700">{section.content}</p>

                        {/* Main Bullet Points */}
                        {section.points && (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {section.points.map((point, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                ))}
                            </ul>
                        )}

                        {/* Subsections */}
                        {section.subsections && (
                            <div className="mt-4 space-y-4">
                                {section.subsections.map((subsection, subIndex) => (
                                    <div key={subIndex}>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {subsection.heading}
                                        </h3>
                                        <ul className="list-disc pl-5 ml-4 space-y-1 text-gray-600">
                                            {subsection.points.map((point, pointIndex) => (
                                                <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }} />
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}

                {/* Contact Section */}
                <section id="contact" className="mt-12 pt-6 border-t">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        7. Contact Us
                    </h2>
                    <p className="mb-4 text-gray-700">
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <p className="text-gray-800">
                            <span className="font-semibold">Email:</span> <a href="mailto:privacy@vrassociate.com" className="text-indigo-600 hover:text-indigo-800">[Insert Contact Email Address]</a>
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Mailing Address:</span> [Insert Business Address, if applicable]
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default VRAssociatePrivacyPolicy;