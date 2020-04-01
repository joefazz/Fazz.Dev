---
title: Create your own CSS loading spinner
published: false
description: Using some simple transitions and shapes to create your own unique loading spinner
tags: svg, css, animations
pubdate: 2020-04-01
---

On [Landing Pad](https://landingpad.me) we have a loading state for when the user's data is being fetched. During this state we show the logo of the site and a pulsating Gravity Sketch Purple coloured circle which grows and shrinks in an fun way. Making this was quite a fun and surprisingly simple experience which makes a good short blog post.

> Gif of Landing Pad loader goes here

The core topics that will be talked about in this post will be...

- Super basic SVG stuff
- CSS animation keyframes
- Easing functions

# The SVG

First start with the basic shapes that you want to animate, commonly for a loading _"spinner"_ you'll want a circle but if you want to get funky you can try assembling a bunch of strokes together to create a more unique loading "experience" but I'm gonna keep it straightforward with just a circle.

# CSS Animations

## Easing Functions
