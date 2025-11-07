import React from 'react';

// Define the content structure for easy mapping/rendering
const termsSections = [
    {
        title: '1. Acceptance of Terms',
        id: 'acceptance',
        content: "By accessing or using the VR Associate service (the “Service”), you agree to be bound by these Terms and Conditions (“Terms”). If you disagree with any part of the terms, then you may not access the Service.",
    },
    {
        title: '2. User Accounts',
        id: 'accounts',
        content: "When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
        points: [
            'You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
            'You must be at least [Insert Age, e.g., 13 or 16] years of age to use the Service.',
        ],
    },
    {
        title: '3. Intellectual Property',
        id: 'ip',
        content: "The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors.",
        points: [
            'The Service is protected by copyright, trademark, and other laws of both the [Your Jurisdiction] and foreign countries.',
            'Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Your Company Name].',
        ],
    },
    {
        title: '4. User-Generated Content (UGC)',
        id: 'ugc',
        content: "Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.",
        points: [
            'By posting Content, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.',
            'You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.',
        ],
    },
    {
        title: '5. Termination',
        id: 'termination',
        content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.",
    },
    {
        title: '6. Limitation of Liability',
        id: 'liability',
        content: "In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
        points: [
            'Your access to or use of or inability to access or use the Service.',
            'Any conduct or content of any third party on the Service.',
            'Any content obtained from the Service.',
            'Unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.',
        ],
    },
    {
        title: '7. Governing Law',
        id: 'law',
        content: "These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.",
    },
    {
        title: '8. Changes to Terms',
        id: 'changes',
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.",
    },
];

const VRAssociateTermsOfService = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-10">

                {/* Header */}
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl flex items-center">
                        <span className="text-red-600 mr-3"></span>
                        VR Associate Terms & Conditions
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Last Updated:Septmber 2025
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-8 text-gray-700">
                    <p className="mb-4">
                        Please read these Terms and Conditions ("Terms", "Terms of Service") carefully before using the VR Associate service operated by [Your Company Name].
                    </p>
                    {/* <p className="text-sm p-3 bg-red-50 border-l-4 border-red-500 text-red-800">
                        **Important:** This document is a template and does not constitute legal advice. You must replace bracketed placeholders and consult with a lawyer to ensure compliance with laws applicable to your business.
                    </p> */}
                </section>

                {/* Content Sections */}
                {termsSections.map((section) => (
                    <section key={section.id} id={section.id} className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            {section.title}
                        </h2>
                        <p className="mb-4 text-gray-700">{section.content}</p>

                        {/* Bullet Points */}
                        {section.points && (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {section.points.map((point, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                {/* Contact Section */}
                <section id="contact-info" className="mt-12 pt-6 border-t">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Contact Us
                    </h2>
                    <p className="mb-4 text-gray-700">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-gray-800">
                            <span className="font-semibold">Email:</span> <a href="mailto:support@vrassociate.com" className="text-red-600 hover:text-red-800">[Insert Support Email Address]</a>
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default VRAssociateTermsOfService;