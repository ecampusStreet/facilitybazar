import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
        <div>
          <span className="text-xl mb-4 block">Video Presentation</span>
          <h2 className="text-4xl font-bold mb-8">Glimpse Of Our Work</h2>
          <a 
            href="http://youtube.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <Play className="h-8 w-8 text-white" />
          </a>
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
