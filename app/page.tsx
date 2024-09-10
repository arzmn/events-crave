import AppAppBar from "@/components/AppAppBar";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="">
      <AppAppBar />
      <Hero />
      <FAQ/>
      <Footer />
    </Box>
  );
}
