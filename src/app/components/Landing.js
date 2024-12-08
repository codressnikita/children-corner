// components/Landing.js
import Hero from "./Hero";
import VideoCard from "./VideoCard"; // Import the VideoCard component
// import videosData from "/public/external_contents/contents.json";

const Landing = ({ handleVideoClick, youtubeVideos }) => {
  return (
    <div className="overflow-hidden h-[calc(100vh)]">
      <Hero
        videoSrc={"./background.mp4"}
        overlayOpts={{
          leftSize: { height: 60, width: 100 },
          rightSize: { height: 30, width: 200 },
        }}
      />
      <div className="h-[35vh] flex flex-col items-start justify-center px-10 bg-transparent text-gray-700">
        <h1 className="text-lg md:text-xl mb-2">Learn more about</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-2">
          Constitutional History
        </h2>
      </div>

      {/* Start video grid after half the viewport height */}
      <div className="h-[65vh] mx-10 p-4 grid grid-cols-3 gap-4 overflow-y-auto">
        {youtubeVideos.map((video) => (
          <VideoCard
            key={video.name} // Use a unique identifier for each video
            name={video.name}
            thumbnail={video.thumbnail}
            openVideo={() => handleVideoClick(video)} // Pass the video data to the click handler
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
