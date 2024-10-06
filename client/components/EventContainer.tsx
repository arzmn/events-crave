"use client";
import { Container } from "@mui/material";

import React from "react";
import Grid from "@mui/material/Grid2";
import EventCard from "@/components/EventCard";
import JSON_DATA from "../data.json";

const EventContainer = () => {
  return (
    <Container
      sx={(theme) => ({
        width: "80%",
        [theme.breakpoints.up("xs")]: {
          width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.up("md")]: {
          width: "100%",
        },

        [theme.breakpoints.up("lg")]: {
          width: "80%",
        },
      })}
      maxWidth={false}
    >
      <Grid container spacing={2}>
        {JSON_DATA.data.map((v, index) => {
          const { name, start_time_utc, tags, thumbnail  } = v;
          const { city } = v.venue;
         

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <EventCard
                name={name}
                start_time_utc={start_time_utc}
                tags={tags}
                city={city}
                thumbnail={thumbnail}
                key={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EventContainer;
