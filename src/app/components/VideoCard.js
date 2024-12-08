import { FileVideo } from "lucide-react";

// Array of pastel background colors
const pastelColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#D7BAFF",
  "#FFDFD3",
  "#F7B7A3",
  "#B3E5FF",
  "#B3FFE1",
];

// Function to determine color based on Video name
const getColorFromText = (txt) => {
  const hash = [...txt].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return pastelColors[hash % pastelColors.length];
};

function VideoCard({ name, thumbnail, openVideo }) {
  const formattedThumbnail = thumbnail
    ? thumbnail.replace(/ /g, "%20").replace(/'/g, "%27")
    : null;
  const bgColor = getColorFromText(name);

  return (
    <div
      onClick={openVideo}
      className="inline-flex flex-col items-center gap-1 cursor-pointer group"
    >
      <div
        className="relative w-64 h-48 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${formattedThumbnail})`,
          backgroundColor: bgColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay with hover effect for darker hue */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition group-hover:bg-opacity-50"></div>

        {/* Video icon */}
        <div className="absolute top-2 right-2 text-white">
          <FileVideo size={24} />
        </div>

        {/* Optional Video Duration (conditionally render if exists) */}
        {/* {vid.duration && (
          <div className="absolute bottom-2 right-2 text-white text-xs">
            {vid.duration}
          </div>
        )} */}
      </div>

      {/* Video name below the rectangle with hover effect */}
      <div className="text-center text-lg font-medium text-gray-900 group-hover:text-orange-800 group-hover:underline">
        {name}
      </div>
    </div>
  );
}

export default VideoCard;
