import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute w-full inset-0 z-20 flex items-center justify-center text-center text-white">
        <div className="w-full h-full">
          {/* <span className="text-xl mb-4 block">Video Presentation</span>
          <h2 className="text-4xl font-bold mb-8">Glimpse Of Our Work</h2> */}
          {/* <a
          href="http://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
           
            <Play className="h-8 w-8 text-white" />
          </a> */}
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/89NJdbYTgJ8?si=Hpv6EKOa_o-fLgM4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="highway-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
