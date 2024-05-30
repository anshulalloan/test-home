import { privacyPolicy } from "./../../public/data/privacy/privacyPolicy";
import { Box } from "@mui/material";


const PrivacyPage = () => {
    return (
        <Box className={'privacy-page'}>
            <h2 className={'page-heading'}>Privacy Policy</h2>
            <Box className={'privacy-policy-container'}>
                {
                    privacyPolicy.map((section, index) => (
                        <Box key={section.id} className={'privacy-policy-section'}>
                            {section.section ? <h3 className={'section-heading'}>{section.section}</h3>: null}
                            {section.content.map((content, index) => (
                                <Box key={index} className={'privacy-policy-content'}>
                                    <h4 className={'section-subheading'}>{content.subHeading}</h4>
                                    {content.description.map((desc, index) => (
                                        <p key={index} className={'description'}>{desc}</p>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    ))
                }

            </Box>
        </Box>
    );
}

export default PrivacyPage;