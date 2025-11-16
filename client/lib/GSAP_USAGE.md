# GSAP Usage Guide

GSAP (GreenSock Animation Platform) is now installed and ready to use in this project.

## Quick Start

### Import GSAP utilities

```typescript
import { gsap, gsapUtils, ScrollTrigger } from "@/lib/gsap-utils";
import { useGsapAnimation, useScrollAnimation } from "@/hooks/use-gsap";
```

## Available Utilities

### `gsapUtils` - Pre-built animation functions

- `fadeIn(element, options)` - Fade in animation
- `fadeInUp(element, options)` - Fade in from bottom
- `fadeInDown(element, options)` - Fade in from top
- `scaleIn(element, options)` - Scale in with bounce
- `slideInLeft(element, options)` - Slide in from left
- `slideInRight(element, options)` - Slide in from right
- `staggerFadeIn(elements, stagger, options)` - Stagger animation for multiple elements
- `textReveal(element, text, options)` - Text reveal animation
- `scrollTrigger(element, animation, triggerOptions)` - Scroll-triggered animation
- `parallax(element, speed)` - Parallax effect

### React Hooks

- `useGsapAnimation(animationFn, deps)` - Animate on mount
- `useScrollAnimation(animationFn, deps)` - Scroll-triggered animations
- `useGsapRef()` - Get a ref for GSAP animations

## Examples

### Basic Animation

```typescript
import { gsapUtils } from "@/lib/gsap-utils";
import { useEffect, useRef } from "react";

const MyComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsapUtils.fadeInUp(ref.current);
    }
  }, []);

  return <div ref={ref}>Animated content</div>;
};
```

### Using Timeline

```typescript
import { gsap } from "@/lib/gsap-utils";
import { useEffect, useRef } from "react";

const MyComponent = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (titleRef.current) {
      tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 });
    }
    
    if (textRef.current) {
      tl.from(textRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");
    }
  }, []);

  return (
    <>
      <h1 ref={titleRef}>Title</h1>
      <p ref={textRef}>Text</p>
    </>
  );
};
```

### Scroll-Triggered Animation

```typescript
import { gsap, ScrollTrigger } from "@/lib/gsap-utils";
import { useEffect, useRef } from "react";

const MyComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return <div ref={ref}>Scroll to see me animate</div>;
};
```

### Using Hooks

```typescript
import { useGsapAnimation } from "@/hooks/use-gsap";
import { gsapUtils } from "@/lib/gsap-utils";

const MyComponent = () => {
  const ref = useGsapAnimation((element) => {
    return gsapUtils.fadeInUp(element, { duration: 1 });
  });

  return <div ref={ref}>Animated with hook</div>;
};
```

## GSAP Documentation

For more advanced features, visit:
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing](https://greensock.com/docs/v3/Eases)

## Notes

- GSAP is 100% free for commercial use
- ScrollTrigger and TextPlugin are included and registered automatically
- All animations are optimized for performance
- Remember to cleanup animations in useEffect return functions

