import { Box } from "@mui/material";
import ShrinkPair from "./ShrinkPair";

const shrinkage = 0.13;

const containerSx = {
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  maxWidth: "40rem",
  margin: "auto",
};

export default function App() {
  return (
    <Box sx={containerSx} component="form">
      <ShrinkPair label="Width" shrinkage={shrinkage} />
      <ShrinkPair label="Height" shrinkage={shrinkage} />
      <ShrinkPair label="Depth" shrinkage={shrinkage} />
    </Box>
  );
}
