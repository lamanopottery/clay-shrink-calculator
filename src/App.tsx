import { useState, useEffect } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { isNumber } from "./utils";
import ShrinkPair from "./ShrinkPair";

const validShrinkPercent = (shrinkPercent: string) => {
  if (shrinkPercent !== "" && !isNumber(shrinkPercent)) return false;
  const shrinkPercentNumber = +shrinkPercent;
  return shrinkPercentNumber >= 0 && shrinkPercentNumber < 100;
};

const containerSx = {
  display: "grid",
  grid: "auto-flow / 1fr 5rem 1fr",
  rowGap: 3,
  justifyItems: "center",
  alignItems: "center",
  maxWidth: "40rem",
  m: "auto",
};

export default function App() {
  const [clayType, setClayType] = useState("white");
  const [shrinkPercent, setShrinkPercent] = useState("");

  const shrinkage = validShrinkPercent(shrinkPercent)
    ? +shrinkPercent / 100
    : 0;

  useEffect(() => {
    if (clayType === "white") {
      setShrinkPercent("13");
    } else if (clayType === "brown") {
      setShrinkPercent("15");
    }
  }, [clayType]);

  return (
    <Box sx={containerSx} component="form">
      <TextField
        select
        fullWidth
        label="Clay Type"
        value={clayType}
        onChange={({ target: { value } }) => {
          setClayType(value);
        }}
      >
        <MenuItem value="white">White Clay</MenuItem>
        <MenuItem value="brown">Brown Clay</MenuItem>
        <MenuItem value="custom">Custom</MenuItem>
      </TextField>
      <TextField
        sx={{ gridColumn: "3 / span 1" }}
        fullWidth
        // InputLabelProps={{ shrink: true }}
        inputProps={{ inputMode: "decimal" }}
        label="Shrink Percent"
        value={shrinkPercent}
        error={!validShrinkPercent(shrinkPercent)}
        disabled={clayType !== "custom"}
        onChange={({ target: { value } }) => setShrinkPercent(value)}
      />
      <Typography sx={{ gridColumn: "1 / span 1" }} component="h3" variant="h5">
        Before
      </Typography>
      <Typography sx={{ gridColumn: "3 / span 1" }} component="h3" variant="h5">
        After
      </Typography>
      <ShrinkPair label="Width" shrinkage={shrinkage} />
      <ShrinkPair label="Height" shrinkage={shrinkage} />
      <ShrinkPair label="Depth" shrinkage={shrinkage} />
    </Box>
  );
}
