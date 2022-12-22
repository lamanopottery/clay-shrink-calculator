import { Box, TextField } from "@mui/material";

const containerSx = {
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
  maxWidth: "30rem",
  margin: "auto",
};

export default function App() {
  return (
    <Box sx={containerSx} component="form">
      <TextField type="number" label="Width" />
      <TextField type="number" label="Height" />
      <TextField type="number" label="Depth" />
    </Box>
  );
}
