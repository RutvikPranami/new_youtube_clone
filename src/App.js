import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import VideoDetails from "./Components/VideoDetails";
import ChannelDetails from "./Components/ChannelDetails";
import SearchFeed from "./Components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{background:'black'}} >
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes> 
      </Box>
    </BrowserRouter>
  );
}

export default App;
