import { randomUUID } from "crypto";

export const privacyPolicy = [
    {
        id: randomUUID().toString(),
        section: null,
        content: [
            {
                id: randomUUID().toString(),
                subHeading: null,
                description: ['Alloan is a financial technology (fintech) organization dedicated to enhancing operational efficiencies in the finance sector using artificial intelligence.',
                    'Our commitment is to refrain from deriving profits through usage of your information without your consent. This policy outlines what information we collect from you, what we do with it and who can access it as you use our services. ']
            },
            {
                id: randomUUID().toString(),
                subHeading: 'Information Alloan collects and controls',
                description: [
                    'We only collect the information we need. Some of that is information that you actively give us when you sign up for an account or perform similar activities. When you use our services, we might automatically log some basic information like how you got to the site, where you navigated within it and what features and settings you use. We use this to improve the quality of our services and it is typically anonymised and aggregated.'
                    ,'Sometimes we receive information indirectly. If you engage with our brand on social media (for instance, liking, commenting, retweeting, mentioning, or following us), we could have access to your interactions and profile information through them.']
            },
            {
                id: randomUUID().toString(),
                subHeading: 'How Alloan uses your information ',
                description: [
                    'We use your information to provide the services you have requested, create and maintain your accounts, and keep an eye out for unauthorized activity on your accounts.  We also use it to communicate with you about the products you are currently using, your customer support requests, chances for you to give us feedback, and policy updates. We analyze the information we collect to understand user needs and to improve our websites and services.'
                    , 'We are required to have a legal basis for collecting and processing your information. In most cases, we either have your consent or need the information to provide the service you have requested from us. When that is not the case, we will demonstrate that we have another legal basis, such as our legitimate business interests.',
                    'You can decline certain kinds of information use either by not providing the information in the first place or by opting out later. You can also disable cookies to prevent your browser from giving us information, but if you do so, certain website features may not work properly.']
            },
            {
                id: randomUUID().toString(),
                subHeading: 'Information Alloan processes on your behalf ',
                description: [
                    'If you handle your organization’s or a third party’s data using Alloan services, you are entrusting that data to us for processing, termed “service data”.',
                    'We may provide access to your service data to our employees and individuals who are independent contractors of Alloan involved in providing the services so that they can identify, analyze and resolve errors, and improve the service experience. We communicate our privacy and security guidelines to our employees and strictly enforce privacy safeguards.',
                    'Our employees will also have access to data that you knowingly share with us for technical support or to import data into our products or services.',
                    'You own your service data. We protect it, limit access to it, and only process it according to your instructions. We do not share service data with any third party. You may access it and request we delete it.'
                ]
            },

        ]
    },
    {
        id: randomUUID().toString(),
        section: 'General',
        content: [
            {
                id: randomUUID().toString(),
                subHeading: 'Disclosures through the service lifecycle and compliance',
                description: [
                    'We might share information where applicable with third-party processors who provide hosting, maintenance, and other services that support our business which shall be processed in accordance with their privacy policy. These companies do not have any right to use your information that we share with them beyond what is necessary to assist us. For instance, services offered by Microsoft Corporation via Azure for Cloud Computing and Data hosting.',
                    'We may be required by law to preserve or disclose your personal information and service data to comply with any applicable law, regulation, legal process or governmental request, including to meet national security requirements.',
                    'We may disclose personal information and service data to a third party if we believe that such disclosure is necessary for preventing fraud, spam filtering, investigating any suspected illegal activity, enforcing our agreements or policies, or protecting the safety of our users.',

                ]},
            {
                id: randomUUID().toString(),
                subHeading: 'Notification of changes',
                description: [
                    'If we make significant changes to the Privacy Policy that affect your rights, your organization will be notified via email at your primary email address. You will not receive email notifications of what are deemed by Alloan to be minor changes to the Privacy Policy.']
            },
        ]
    }
]