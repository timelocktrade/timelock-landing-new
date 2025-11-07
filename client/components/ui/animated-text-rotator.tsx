import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextRotatorProps {
  sentences: string[];
  className?: string;
  duration?: number;
}

export const AnimatedTextRotator = ({
  sentences,
  className = "",
  duration = 3000,
}: AnimatedTextRotatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (sentences.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sentences.length);
        setIsAnimating(false);
      }, 500);
    }, duration);

    return () => clearInterval(interval);
  }, [sentences.length, duration]);

  return (
    <span className={cn("relative inline-block w-full", className)}>
      {sentences.map((sentence, index) => (
        <span
          key={index}
          className={cn(
            "absolute left-0 top-0 w-full transition-all duration-500 ease-out",
            index === currentIndex && !isAnimating
              ? "opacity-100 blur-0 scale-100 animate-gradient-shift"
              : "opacity-0 blur-md scale-95 pointer-events-none",
          )}
        >
          {sentence}
        </span>
      ))}
      {/* Invisible placeholder to maintain space */}
      <span className="invisible">{sentences[0]}</span>
    </span>
  );
};
