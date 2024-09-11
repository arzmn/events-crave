import Navbar from "@/components/Navbar";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Box } from "@mui/material";

import EventContainer from "@/components/EventContainer";

export default function Home() {
  return (
    <Box className="">
      <Navbar />
      <Hero />
      <EventContainer />
      <FAQ />
      <Footer />
    </Box>
  );
}
