import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  phrases: string[];
  className?: string;
  duration?: number;
}

export const TypewriterEffect = ({
  phrases,
  className = "",
  duration = 3000,
}: TypewriterEffectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (phrases.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, duration);

    return () => clearInterval(interval);
  }, [phrases.length, duration]);

  return (
    <span className="relative inline-block">
      {phrases.map((phrase, index) => (
        <span
          key={index}
          className={cn(
            "absolute left-0 top-0 w-full transition-all duration-500",
            index === currentIndex
              ? "opacity-100 translate-y-0"
              : index === (currentIndex - 1 + phrases.length) % phrases.length
                ? "opacity-0 -translate-y-4"
                : "opacity-0 translate-y-4",
            className,
          )}
        >
          {phrase}
        </span>
      ))}
      {/* Invisible placeholder to maintain space */}
      <span className="invisible">{phrases[0]}</span>
    </span>
  );
};
