"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";

const PrimarySearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 26,
    fontSize: 18,
    width: "100%",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    padding: "26px 16px",
    boxShadow: `0 0 4px ${theme.palette.primary.main}`,

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&.Mui-focused": {
      boxShadow: `0 0 10px ${theme.palette.primary.main}`, // Example: add a shadow on focus
      outline: "0px",
    },
    // Use the system font instead of the default Roboto font.

    "&:focus": {},
  },
}));
export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={1}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "90%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Find Your Next&nbsp;
          </Typography>

          <Typography
            component="span"
            variant="h1"
            sx={(theme) => ({
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              // fontSize: "inherit",
              color: "primary.main",
              ...theme.applyStyles("dark", {
                color: "primary.light",
              }),
            })}
          >
            Favourite Events&nbsp;
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Your real-time events search starts here.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems={"center"}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Event variable
            </InputLabel>
            <PrimarySearchInput
              id="event-her"
              aria-label="Search you event here"
              placeholder="Search you event here"
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          minWidth: "fit-content",
                          borderRadius: 30,
                        }}
                      >
                        <SearchIcon />
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Search&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
