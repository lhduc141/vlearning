import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        my: 3,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu" disabled>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="warning" aria-label="directions">
        <Typography sx={{ color: "#333", fontWeight: 600 }}>
          Tìm kiếm
        </Typography>
      </IconButton>
    </Paper>
  );
}
