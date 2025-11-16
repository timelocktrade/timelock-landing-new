import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, Draggable, MotionPathPlugin);
}

/**
 * Hook to animate an element on mount
 * @param ref - React ref to the element to animate
 * @param animation - GSAP animation config
 * @param dependencies - Optional dependencies array for re-running animation
 */
export function useGSAPAnimation(
  ref: RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, animation);
    });

    return () => {
      ctx.revert();
    };
  }, [ref, ...dependencies]);
}

/**
 * Hook to animate an element from initial state
 * @param ref - React ref to the element to animate
 * @param from - Initial animation state
 * @param to - Final animation state
 * @param dependencies - Optional dependencies array for re-running animation
 */
export function useGSAPFromTo(
  ref: RefObject<HTMLElement>,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, from, to);
    });

    return () => {
      ctx.revert();
    };
  }, [ref, ...dependencies]);
}

/**
 * Hook to create a GSAP timeline
 * @param ref - React ref to the element to animate
 * @param setup - Function that receives the timeline and element
 * @param dependencies - Optional dependencies array for re-running animation
 */
export function useGSAPTimeline(
  ref: RefObject<HTMLElement>,
  setup: (tl: gsap.core.Timeline, element: HTMLElement) => void,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setup(tl, ref.current!);
    });

    return () => {
      ctx.revert();
    };
  }, [ref, ...dependencies]);
}

/**
 * Hook to animate with ScrollTrigger
 * @param ref - React ref to the element to animate
 * @param animation - GSAP animation config
 * @param scrollTrigger - ScrollTrigger config
 * @param dependencies - Optional dependencies array for re-running animation
 */
export function useGSAPScrollTrigger(
  ref: RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  scrollTrigger: ScrollTrigger.Vars,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        ...animation,
        scrollTrigger: {
          trigger: ref.current,
          ...scrollTrigger,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [ref, ...dependencies]);
}

/**
 * Utility to create a fade-in animation
 */
export const fadeIn = {
  opacity: 0,
  y: 20,
};

export const fadeInTo = {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
};

/**
 * Utility to create a scale animation
 */
export const scaleIn = {
  scale: 0.8,
  opacity: 0,
};

export const scaleInTo = {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  ease: "back.out(1.7)",
};

/**
 * Utility to create a slide animation
 */
export const slideInLeft = {
  x: -50,
  opacity: 0,
};

export const slideInRight = {
  x: 50,
  opacity: 0,
};

export const slideInTo = {
  x: 0,
  opacity: 1,
  duration: 0.6,
  ease: "power2.out",
};

// Export GSAP and plugins for direct use
export { gsap, ScrollTrigger, TextPlugin, Draggable, MotionPathPlugin };
