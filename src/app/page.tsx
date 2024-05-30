import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import HomePage from "@/pages/Home";
import { Box } from "@mui/material";
import bg from "./../../public/bg/Background.png"
import "./../styles/styles.scss";

export default function Home() {
  return (
    <Box className={'home-layout'}
    sx={{
            backgroundImage: `url(${bg.src})`,
      }}
    >
      <Navigation />
      <HomePage />
      <Footer/>
    </Box>
  );
}
