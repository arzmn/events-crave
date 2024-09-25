"use client";
import { createTheme } from "@mui/material/styles";
import getMPTheme from "./getMPTheme";
const mode = "light";
const theme = createTheme(getMPTheme(mode));

export default theme;
