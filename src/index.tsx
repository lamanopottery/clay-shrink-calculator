import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ScopedCssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";

const theme = createTheme({
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
