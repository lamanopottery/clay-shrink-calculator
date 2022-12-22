import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { isNumber } from "./utils";
import ShrinkPair from "./ShrinkPair";

const validShrinkPercent = (shrinkPercent: string) => {
  if (!isNumber(shrinkPercent)) return false;
  const shrinkPercentNumber = +shrinkPercent;
  return shrinkPercentNumber >= 0 && shrinkPercentNumber < 100;
};

const containerSx = {
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  maxWidth: "40rem",
  margin: "auto",
};

export default function App() {
  const [shrinkPercent, setShrinkPercent] = useState("0");

  const shrinkage = validShrinkPercent(shrinkPercent)
    ? +shrinkPercent / 100
    : 0;

  return (
    <Box sx={containerSx} component="form">
      <TextField
        fullWidth
        InputLabelProps={{ shrink: true }}
        label="Shrink Percent"
        value={shrinkPercent}
        error={!validShrinkPercent(shrinkPercent)}
        onChange={({ target: { value } }) => setShrinkPercent(value)}
      />
      <ShrinkPair label="Width" shrinkage={shrinkage} />
      <ShrinkPair label="Height" shrinkage={shrinkage} />
      <ShrinkPair label="Depth" shrinkage={shrinkage} />
    </Box>
  );
}
