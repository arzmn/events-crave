"use client";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useParams } from "next/navigation";
import React from "react";
import eventDetailsJSON from "@/data.json";
import convertUTCToIST from "@/utils/UTCConverter";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import MapsCard from "@/components/MapsCard";
import { RoundedCorner } from "@mui/icons-material";
function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const { name, start_time_utc, tags, thumbnail, venue, description } =
    eventDetailsJSON.data[1];
  const { latitude, longitude, city } = venue;

  return (
    <Container>
      <Paper elevation={5} sx={{ marginTop: 10 }}>
        <Stack gap={1} sx={{ p: 4 }}>
          <Typography variant="h2" component="h2">
            {name}
          </Typography>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: "1.2rem", color: "text.secondary" }}
            />
            <Typography fontSize={16}>
              {convertUTCToIST(start_time_utc)}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <FmdGoodOutlinedIcon
              sx={{ fontSize: "1.2rem", color: "text.secondary" }}
            />
            <Typography fontSize={16}>{city}</Typography>
          </Stack>
        </Stack>
      </Paper>
      {/* content start from here */}
      <Grid container spacing={2}>
        {/* left side Image Thumbnail */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              p: 4,
              maxHeight: 700,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={thumbnail}
              alt={name}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        {/* right side  details */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack>
            <Box sx={{ p: 2 }}>
              <MapsCard latitude={latitude} longitude={longitude}></MapsCard>
            </Box>
            <Box sx={{ p: 4 }}>
              <Typography>
                <CalendarTodayOutlinedIcon
                  sx={{ fontSize: "1.2rem", color: "text.secondary" }}
                />
                {convertUTCToIST(start_time_utc)}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid size={11}>
          <Box sx={{ px: 4 }}>
            <Typography sx={{ letterSpacing: 1 }} fontSize={18}>
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ p: 4 }}></Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EventDetails;
