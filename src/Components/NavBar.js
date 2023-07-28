import React from "react";
import { Stack, Typography } from "@mui/material";
import logo from "../utils/youtube_logo_512.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          justifyContent: "auto",
        }}
      >
        <Link
          title="YouTube Home"
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={logo} alt="Logo" height={45} />
          <Typography
            sx={{
              fontSize: {
                lg: 35,
                md: 25,
                xs: 20,
              },
              ml: 1,
              color: "white",
              fontWeight: "bold",
            }}
          >
            YouTube
          </Typography>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
}

export default NavBar;
