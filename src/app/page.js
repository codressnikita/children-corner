"use client";

import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import VideoViewer from "./components/VideoViewer";
import axios from "axios"; // Using Axios for the API call

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const PLAYLIST_ID = "PL7FyP3s7bLbIAAZpD1x81RF4zqlidgUCI";
  const API_KEY = "AIzaSyBHSv6fT10HfnWHE1NoZhP0j_rU3QV385I";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              playlistId: PLAYLIST_ID,
              maxResults: 50,
              key: API_KEY,
            },
          }
        );

        const videosData = response.data.items.map((item) => ({
          name: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          src: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        }));

        setVideos(videosData);
      } catch (error) {
        console.error(
          "Failed to fetch videos:",
          error.response?.data || error.message
        );
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (vid) => {
    setSelectedVideo(vid);
  };

  const handleVideoClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="flex-grow overflow-hidden">
      <Landing handleVideoClick={handleVideoClick} youtubeVideos={videos} />
      {selectedVideo && (
        <VideoViewer video={selectedVideo || {}} onClose={handleVideoClose} />
      )}
    </div>
  );
}
