import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

/**
 * Common GSAP animation utilities
 */
export const gsapUtils = {
  /**
   * Fade in animation
   */
  fadeIn: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Fade in from bottom
   */
  fadeInUp: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Fade in from top
   */
  fadeInDown: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Scale in animation
   */
  scaleIn: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        ...options,
      }
    );
  },

  /**
   * Slide in from left
   */
  slideInLeft: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Slide in from right
   */
  slideInRight: (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Stagger animation for multiple elements
   */
  staggerFadeIn: (
    elements: gsap.TweenTarget,
    stagger: number = 0.2,
    options?: gsap.TweenVars
  ) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power2.out",
        ...options,
      }
    );
  },

  /**
   * Text reveal animation
   */
  textReveal: (element: gsap.TweenTarget, text: string, options?: gsap.TweenVars) => {
    return gsap.to(element, {
      text: text,
      duration: 1,
      ease: "none",
      ...options,
    });
  },

  /**
   * Scroll-triggered animation
   */
  scrollTrigger: (
    element: gsap.TweenTarget,
    animation: gsap.TweenVars,
    triggerOptions?: ScrollTrigger.Vars
  ) => {
    return gsap.to(element, {
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...triggerOptions,
      },
    });
  },

  /**
   * Parallax effect
   */
  parallax: (element: gsap.TweenTarget, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },
};

/**
 * Create a timeline for complex animations
 */
export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

/**
 * Export GSAP instance for advanced usage
 */
export { gsap, ScrollTrigger, TextPlugin };

