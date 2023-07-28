import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FeatchAPI } from "../utils/FeatchAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FeatchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          © 2023 Shinchu
        </Typography>
      </Box>
      
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      
        <Typography
          variant="h4"
          mb={2}
          fontWeight={"bold"}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>
        

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
