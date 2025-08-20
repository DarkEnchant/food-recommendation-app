import React, { useEffect, useState } from "react";

const emojis = ["🍣", "🍜", "🍱", "🍥", "🍙", "🥢"];

export default function EmojiRain() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = {
        id: Date.now(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
      };
      setDrops((prev) => [...prev.slice(-30), newDrop]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-2xl animate-fall"
          style={{
            left: `${drop.left}%`,
            top: 0,
          }}
        >
          {drop.emoji}
        </div>
      ))}
    </div>
  );
}
