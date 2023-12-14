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

const chartList = ["Oliver Hansen", "hehehe"];

function InputLayout() {
  const [chartName, setChartName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChartName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="checkbox-label">Select from below chart</InputLabel>
      <Select
        labelId="checkbox-label"
        id="checkbox"
        value={chartName}
        onChange={handleChange}
        input={<OutlinedInput label="Select from below chart" />}
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
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputLayout;
