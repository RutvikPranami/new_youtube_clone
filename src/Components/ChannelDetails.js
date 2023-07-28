import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { FeatchAPI } from "../utils/FeatchAPI";

function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FeatchAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FeatchAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
    
  }, [id]);
  

  return (
    <Box minHeight="95vh">
      <Box>
      
        <div
          style={{
            height: "300px",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            zIndex: 10,
          }}
        >
          <Typography sx={{ textAlign:'center',fontSize:{xs:'40px' ,sm:'50px',md:'60px',lg:'80px'},fontFamily:'Raleway'}}>{channelDetail?.snippet?.title}</Typography>
          </div>
        
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetails;
