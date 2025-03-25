import { Play } from "lucide-react";
// import videoSrc from "../../assets/videos/old-video.mp4";
import videoSrc from "../../assets/videos/fb-video.mp4";

export default function VideoSection() {
  return (
    <section className="relative h-[600px] overflow-hidden m-auto max-w-screen-xl">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "black",
        }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-contain"
          // controls
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
