import { Theme, Components } from "@mui/material/styles";

const layoutCustomizations: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: ({}) => ({
        // border: "1px solid  red",
      }),
    },
  },
};

export { layoutCustomizations };
