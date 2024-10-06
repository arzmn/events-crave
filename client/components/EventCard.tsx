"use client";
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import convertUTCToIST from "@/utils/UTCConverter";

interface EventCardType {
  name: string;
  start_time_utc: string;
  city: string;
  tags?: string[];
  thumbnail?: string;
  start_time: string;
  venueName: string;
}
export default function EventCard({
  name,
  start_time_utc,
  city,
  tags,
  thumbnail,
  venueName,
  
}: EventCardType) {
  return (
    <Paper elevation={2} sx={{ maxWidth: 445, height: "100%" }}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 160, objectFit: "cover" }}
          image={thumbnail ? thumbnail : "https://picsum.photos/480/720"}
          title="green iguana"
        />

        <CardContent>
          <Stack spacing={1}>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Stack direction={"row"} gap={1}>
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: "1.2rem", color: "text.secondary" }}
              />
              <Typography variant="body2" sx={{ color: "primary.main"  }}>
                {convertUTCToIST(start_time_utc)}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={1}>
            <FmdGoodOutlinedIcon
                sx={{ fontSize: "1.2rem", color: "text.secondary" }}
              />
            <Typography sx={{ color: "text.secondary" }}>{city}</Typography>
            </Stack>
            <Typography sx={{ color: "text.secondary" }}>{tags && "#" + tags.join(" #")}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
}
