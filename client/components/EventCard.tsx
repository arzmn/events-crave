"use client";
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import convertUTCToIST from "@/utils/UTCConverter";

interface EventCardType {
  name: string;
  start_time_utc: string;
  city: string;
  tags?: string[];
  thumbnail?: string;
}
export default function EventCard({
  name,
  start_time_utc,
  city,
  tags,
  thumbnail,
}: EventCardType) {
  return (
    <Paper elevation={2} sx={{ maxWidth: 445 }}>
      <Card>
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
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {convertUTCToIST(start_time_utc)}
              </Typography>
            </Stack>
            <Typography>{city}</Typography>
            <Typography>{tags && "#" + tags.join(" #")}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
}
