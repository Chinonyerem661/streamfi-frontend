"use client";

import { Play, Pause, Volume2, Settings, Maximize } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FeaturedStreamProps } from "@/types/explore/home";

export function FeaturedStream({ stream }: FeaturedStreamProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative w-full aspect-video xl:aspect-[20/8.5] rounded-lg overflow-hidden border border-purple-600"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${stream.thumbnail})` }}
        animate={{
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {stream.isLive && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md font-medium"
        >
          Live
        </motion.div>
      )}

      {stream.streamerThumbnail && (
        <div className="absolute top-4 right-4 w-16 h-16 rounded-md overflow-hidden border-2 border-purple-500">
          <img
            src={stream.streamerThumbnail || "/placeholder.svg"}
            alt="Streamer"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="absolute bottom-16 left-4 right-4 text-white">
        <h1 className="text-base md:text-3xl font-bold mb-2">{stream.title}</h1>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hover:text-purple-400 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          <button className="hover:text-purple-400 transition-colors">
            <Volume2 className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="hover:text-purple-400 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button className="hover:text-purple-400 transition-colors">
            <Maximize className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
