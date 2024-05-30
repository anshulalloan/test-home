import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import Team from "@/pages/Team";
import { Box } from "@mui/material";
import bg from "./../../../public/bg/Background.png";
import "./../../styles/styles.scss";

export default function TeamPage() {
  return (
      <Box className={'team-layout'}
          sx={{
            backgroundImage: `url(${bg.src})`,
      }}
      >
      <Navigation />
      <Team/>
      <Footer/>
    </Box>
  );
}
