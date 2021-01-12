import { InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";

function PlayerDropdown() {
  const [player, setPlayer] = useState(null);
  const handleChange = (event) => {
    setPlayer(event.target.value);
  };
  return (
    <>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
}

export default PlayerDropdown;
