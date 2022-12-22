import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ScopedCssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#db3a20" },
  },
  typography: {
    fontFamily: `"Open Sans", Verdana, Geneva, "DejaVu Sans", sans-serif`,
  },
});

ReactDOM.createRoot(
  document.getElementById("clay-shrink-calculator") as HTMLElement,
).render(
  <StrictMode>
    <ScopedCssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ScopedCssBaseline>
  </StrictMode>,
);
