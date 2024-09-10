import AppAppBar from "@/components/AppAppBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="">
      <AppAppBar />
      <Hero />
      <Footer />
    </Box>
  );
}
