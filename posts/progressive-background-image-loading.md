---
title: Progressively Loading a Background Image in CSS
published: true
description: How to use the shorthand `background` property to smoothly load large images
tags: css
pubdate: 2020-04-06
---

You know the problem, your designer has given you a large beautiful background image that you're expected to use underneath some content a la almost every websites hero header ever.

```css
background: linear-gradient(rgba(53, 26, 128, 0.8), rgba(53, 26, 128, 0.8), url('resource/my-large-image.png');
```

> If you want to know about the linear-gradient shenanigans then take a look at [this CSS tricks article](https://css-tricks.com/tinted-images-multiple-backgrounds/)

Alas, the file is too large and so when the page is refreshed it takes a non zero amount of time to get the image and that leaves you with a jarring transition from.

![](/overlay-no-image.png)
to
![](/overlay-w-image.png)

In order to fix this first you need a version of your image that is waaaay smaller. What I tend to do is use an [image resizer](https://resizeimage.net/) and resize the image to 10% which will reduce the size drastically (single digit KB or below is best). Once you've got this second smaller image you'll want to change you CSS line to...

```css
background: linear-gradient(rgba(53, 26, 128, 0.8), rgba(53, 26, 128, 0.8)),
  url('resource/my-large-image.png'), url('resource/my-small-image.png');
```

The order of the two background image urls _does_ matter here, if the first one doesn't resolve it will skip over to the next one so if you had the smaller image first it would never load the larger image.

> Remember to set `background-size: cover;` so that your small image is stretched to cover the full width of the container.

That's it! Now refresh the page and you should see a blurry background at first before the higher resolution image loads replacing it.

Find the code and the application in the Code Sandbox demo below!

<iframe
     src="https://codesandbox.io/embed/progressive-background-image-dp4z3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="progressive-background-image"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
