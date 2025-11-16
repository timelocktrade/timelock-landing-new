import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to animate elements on mount
 */
export function useGsapAnimation<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T) => gsap.core.Tween | gsap.core.Timeline,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = animationFn(ref.current);

    return () => {
      animation?.kill?.();
    };
  }, deps);

  return ref;
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T) => gsap.core.Tween | gsap.core.Timeline,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = animationFn(ref.current);

    return () => {
      animation?.kill?.();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, deps);

  return ref;
}

/**
 * Hook to get a ref that can be used with GSAP
 */
export function useGsapRef<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  return useRef<T>(null);
}

