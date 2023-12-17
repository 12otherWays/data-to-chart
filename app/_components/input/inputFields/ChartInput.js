"use client";
import React, { useState } from "react";
import {
  Box,
  Select,
  ListItemText,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { chartList } from "@/app/_utils/textUtils";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function ChartInput({ page }) {
  const [chartName, setChartName] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChartName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="checkbox-label">
        {page.chart_list_input_placeholder}
      </InputLabel>
      <Select
        labelId="checkbox-label"
        id="checkbox"
        sx={{ textTransform: "capitalize" }}
        value={chartName}
        onChange={handleChange}
        input={<OutlinedInput label={page.chart_list_input_placeholder} />}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* <img src="/Screen1.png" height="40px" width="40px" /> */}
            <ListItemText primary={selected} />
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {chartList.map((name) => (
          <MenuItem key={name} value={name}>
            {/* <img src="/Screen1.png" height="40px" width="40px" /> */}
            <ListItemText primary={name} sx={{ textTransform: "capitalize" }} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ChartInput;
