---
title: Web Development vs Game Development
published: false
description: 3.2.1. FIGHT!
pubdate: 2020-10-03
---

## Who is this post for?

This is for people with a basic understanding of programming, in particular web development or game development.

## Introduction

In the roughly 3 years of being a professional developer I've done 3 different jobs targetting 3 different platforms using 3 different technologies. On the one hand maybe this is a bit short sighted as I could be sitting pretty with three solid years experience in a singular technology with a strong knowledge of developing software for a certain platform in a certain environment. But I find that boring as heck and it's way more fun to try new things, even more so when I can be paid _cash money_ to learn new things.

This blog post is going to talk about my most recent tech transition which is from the sole frontend web developer at [Gravity Sketch](https://gravitysketch.com) to being one of 8 members of the dev team working with [Unity](https://unity.com) every day making pull requests to the same repo.

## Web Development

Web development is equal parts fun and frustrating. The speed at which you can develop something and ship it to production in the same day as having the idea/receiving the feature request is so great and as a sole developer, is very empowering and a point of pride to me that I could work that quickly when I needed to.

I'm not going to dwell too much on web dev as it's probably the more familiar area of development for most people, even non web devs probably have a pretty solid understanding of how it works.

A small list of reasons I like web development:

- R A P I D deployment
- _whispers_ I like CSS or more specifically I like [Tailwind](https://tailwind.com)
- There is so much information online about how to do almost everything there's almost never such a thing as an original problem so help is almost always a Google search away
- I know how to do it and I like making websites

> Editors note (still me): While writing this post on my blog that I over engineered everything was being incredibly slow and I was getting progressively more irritated so web dev still knows how to toy with me despite how much I like it.

## Game Development

I suppose I should start this by prefacing with my job title not actually having anything to do with Game Development as my title is actually **UI Engineer** however I don't feel like a _total_ fraud titling this post with the words and talking about it as it is more than just an adjacent role (I also have some side game projects I'm working on). I've been doing Unity professionally since September 2020 and started casually learning it around May/June time. When I started in September I was a bit intimidated by the change but at this point I feel very comfortable with C# (which Unity uses for scripting) in Rider (IDE), using the Unity Editor itself and it's associated _quirks_ of which there are plenty. At this point I'm spending roughly 20-30 hours a week inside Unity or Rider so doing the math I have maybe around 300ish hours experience which I know is incredibly arbitrary but I'm trying to communicate that I sort of maybe know what I'm talking about 🙂

## Some terminology...

There's going to be a few of words and definitions that need to be described in order to explore the similarities and differences between creating UI for Unity projects vs React projects.

- **MonoBehaviours** are the base class from which every Unity script (and component) derives. They contain lifecycle methods similar to React class components (with some distinct differences). They also allow you to create member variables that can drive UI creating something close to state in React.
- **GameObjects** is the base class for all Unity entities that are in the scene. GameObjects are just containers for components and will always have a transform component (2D or 3D depending on usage) that tell the rendering engine where the entity is in the world. GameObjects are hierarchical like DOM elements in the way they have a parent GameObject and can have many siblings/children.
- (Unity) **Components** are scripts that attach to GameObjects to give them special functionality, for example to display a 2D image you need to attach the `Image` component to your GameObject which will in turn have lots of additional property fields that let you select the colour of the image, the sprite to use etc.
- **Prefabs** are reusable collections of GameObjects that are saved to the disk with the .prefab extension and can be either drag and dropped into a scene or Instantiated through the code. You can have prefabs within prefabs but unless you edit them at their root you won't change all the other instances of the prefab.

There are obviously more low level concepts but these are the core ones that are important to understand in order to do 2D UI in a way that is comparable to the web.

## Scripting vs Coding

I'm not going to deep dive into the differences between the languages and the tools better devs than me have done that kind of thing but I will make some maybe more _unique_ comparisons that probably do exist but I never found them.

One thing I will mention before I go a bit deeper is that online writing code for the Unity Engine is referred to as writing _Scripts_. This isn't to say that the code is not like real coding (which is a dumb idea anyway) but it's just the terminology that Unity itself uses to refer to custom components that are attached to GameObjects. I also find it to be a really good descriptor for the way that coding in Unity works as you can write relatively small scripts that have significant impact on a GameObject.

## Prefabs vs (React) Components

As mentioned when explaining the terminology Prefabs are collections of GameObjects including all of their components and properties set at the time of saving. In the UI projects I've worked on I've found myself creating a library of UI Prefabs similar to what I might have in React but because the concept of props doesn't exist what I end up doing is making a singular general Button prefab with the correct styling, size, etcetera and then when I need a slightly modified version say for a secondary button, I tend to duplicate the prefab instance and modify the components properties directly, this doesn't override the original and if I wanted to I could actually save the modified version as a variant of the original prefab which is super helpful!

React creates all your elements when the page loads which is quite different to Unity where you can assemble your Prefabs and GameObjects before you press the play button in the _Scene view_ and the final built output will resemble what you see in the exactly (provided you don't edit the UI at runtime with a script). This is such a nice workflow in comparison to web development where you have to wait for the page to reload and switch to a browser, instant accurate feedback is pretty hard to compete with though.

It is also possible to instantiate a prefab from the code at runtime and the actual code to do it is quite straightforward.

`Instantiate(prefabName, parentTransform)`

The cases you might want to do this range but commonly what is done in the projects I've been a part of is all the prefabs are assembled ahead of time and then in each _Scene_ there will be a script that will instantiate all the relevant GameObjects and components that are needed for the game to work when it's in _play mode_.

This tells the engine to create a new clone of the prefab that uses the 2nd argument to determine the transform of the GameObject that will be the parent in the hierarchy. In Unity UI it's quite common that the prefab will depend on it's parent in some way to determine the size of it so it's important when editing these types of prefabs that they are edited in the context of the parent which luckily is nice and easy to do.

## Developer Experience

In Web Dev land the experience with webpack and CRA makes this pretty nice overall and rarely did I have much to complain when it came to how productive I felt. You didn't need great hardware to have an experience where it feels almost seamless between editing UI code and seeing the results on your browser du jour.

Unity is far more... turbulent, it can feel as rapid as possible like in the above mentioned example when you're editing a purely UI prefab in the scene view and you get to see the changes you're making and be confident that it will look the same way in play mode.

Times where you can really drag though do occur thick and fast especially when you're trying to plug in business logic via Scripts. To undersell Unity a bit, it's a glorified compiler, this means that when you're editing code in your editor of choice (VSCode works way better than it has any right to imo) it doesn't compile until Unity realises you have changed one of the files in the solution and sometimes it can be quite tedious waiting for it to compile and hearing your laptop fan kick up, especially when you're just changing a single value to see the effect it has on physics (there are ways to mitigate this). Resolving conflicts in prefabs is also basically a no go and you need to fix it by visually comparing the two which is not that straightforward.

Another fact of the matter is that Unity is a Game Engine and the rule of thumb (that I was told) is that if you want to make a game your hardware should be twice as powerful as the lowest end device you want to target. The new M1 MacBook Air's might be the new web dev laptop of choice but unless you have a discrete GPU in your laptop you're going to struggle with shaders and real time lighting.

## The Future of Unity UI

Every year Unity hosts a conference for developers and in 2019 they announced a new feature that is particularly interesting to me called **UI Builder** which, to cut a long story short is Unity's attempt at implementing a HTML and CSS style workflow into GameObjects. You can build your UI graphically as you can now, but instead of using Unity UI components you'll be creating custom components built off of a small number of primitives (React Native style) that you can extend with a near exact CSS like syntax (USS). This new way of doing UI in Unity is planned to be released this year and I'm quite excited to get into it but at the same time this is classic Unity where they release a new system for something essential and then some years later go "oh actually we don't like that try this out" _cough_ input system _cough_. Either way though I think this is a good direction and there is the possibility to blend systems together so you can use traditional Unity UI components in some places and the UI Builder in others.

## Conclusion

Unity and the Web are two distantly related cousins that are looking to get in touch with each in different extents. in the web, web assembly is letting developers write code in any language to compile down to a fast binary that can run on the web. In Unity they're borrowing ideas from the web that web developers have come to be very familiar with and utilising them to help everyone make better interfaces. I personally have a pretty vested interest in both these platforms becoming more like the other and borrowing each others best ideas and regardless of which platform you choose to work with, now is the best time to be working there.
