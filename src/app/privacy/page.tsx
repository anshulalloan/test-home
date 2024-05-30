import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import PrivacyPage from "@/pages/Privacy";
import { Box } from "@mui/material";
import bg from "./../../../public/bg/Background.png";
import "./../../styles/styles.scss";

export default function TeamPage() {
  return (
      <Box className={'privacy-layout'}
          sx={{
            backgroundImage: `url(${bg.src})`,
      }}
      >
      <Navigation />
      <PrivacyPage/>
      <Footer/>
    </Box>
  );
}
