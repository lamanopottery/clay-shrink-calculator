import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { East } from "@mui/icons-material";

const isNumber = (str: string) => !isNaN(+str) && !isNaN(parseFloat(str));

const rounded = (num: number) => String(+num.toFixed(2));

type ShrinkPairProps = {
  shrinkage: number;
  label: string;
};

export default function ShrinkPair({ shrinkage, label }: ShrinkPairProps) {
  const [before, setBefore] = useState<string>("");
  const [after, setAfter] = useState<string>("");

  const rate = 1 - shrinkage;

  return (
    <Box sx={{ display: "flex", alignItems: "center", columnGap: 4 }}>
      <TextField
        fullWidth
        InputLabelProps={{ shrink: true }}
        label={`${label} Before`}
        value={before}
        error={isNaN(+before)}
        onChange={({ target: { value } }) => {
          setBefore(value);
          setAfter(isNumber(value) ? rounded(+value * rate) : "");
        }}
      />
      <East />
      <TextField
        fullWidth
        InputLabelProps={{ shrink: true }}
        label={`${label} After`}
        value={after}
        error={isNaN(+after)}
        onChange={({ target: { value } }) => {
          setAfter(value);
          setBefore(isNumber(value) ? rounded(+value / rate) : "");
        }}
      />
    </Box>
  );
}
