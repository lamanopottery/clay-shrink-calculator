import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { East } from "@mui/icons-material";
import { isNumber, rounded } from "./utils";

type ShrinkPairProps = {
  shrinkage: number;
  label: string;
};

export default function ShrinkPair({ shrinkage, label }: ShrinkPairProps) {
  const [before, setBefore] = useState<string>("");
  const [after, setAfter] = useState<string>("");

  const rate = 1 - shrinkage;

  useEffect(() => {
    setAfter(isNumber(before) ? rounded(+before * rate) : "");
  }, [rate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TextField
        sx={{ gridColumn: "1 / span 1" }}
        fullWidth
        // InputLabelProps={{ shrink: true }}
        inputProps={{ inputMode: "decimal" }}
        label={`${label} Before`}
        value={before}
        error={isNaN(+before)}
        onChange={({ target: { value } }) => {
          setBefore(value);
          setAfter(isNumber(value) ? rounded(+value * rate) : "");
        }}
      />
      <East sx={{ gridColumn: "2 / span 1" }} />
      <TextField
        sx={{ gridColumn: "3 / span 1" }}
        fullWidth
        // InputLabelProps={{ shrink: true }}
        inputProps={{ inputMode: "decimal" }}
        label={`${label} After`}
        value={after}
        error={isNaN(+after)}
        onChange={({ target: { value } }) => {
          setAfter(value);
          setBefore(isNumber(value) ? rounded(+value / rate) : "");
        }}
      />
    </>
  );
}
