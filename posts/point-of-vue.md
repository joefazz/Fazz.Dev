---
title: A Different Point of Vue
description: Dipping a toe into Vue.js
published: true
pubdate: 2018-11-15
---

For the past 2 months or so I've been experimenting with VueJS. As I've only done React Native
before I thought it would be a good way to learn web development in general, and a different approach to building a modern application. Here are some of my takeaways and thoughts after working in this new area.

### 🤬 Websites are hard

The idea of working in a horizontal plane was something I found... intimidating. Having only worked on phones (and never allowing horizontal rotation 😬). I was initially scared of the idea that things should be responsive across different screen sizes.

I quickly realised that actually, _Media Queries_ make life quite easy and so long as you don't forget to keep things up to date across all sizes it's not too bad (CSS Grid has helped a lot).

I've been rolling my own styling for a VueJS work project but for my university project I've been using Vue Material which has been really brilliant to work with and lets me, a web newbie, feel like I know how to design things when all I'm really doing is adding some classes to some components and DOM elements.

### 🌈 Vue is... different

I don't mean this in a bad way at all. After only doing React, I'm so used to thinking in the **React way** of implementing solutions and thinking about problems. Vue takes quite a different (although not unique) approach to data binding and creating interactive web applications.

#### Example

```javascript
/* React example of binding to an input */
state = {
    val: ''
};

// Inside render
<input
  type="text"
  onChange={e => this.setState({ val: e.target.value })}
  value={this.state.val}
/>


/* Vue example of binding to an input */
data() {
    return {
        val: ''
    };
}

// Inside template
<input
  type="text"
  v-model="val"
/>
```

This approach from Vue is **such** a breath of fresh air. I cannot express in words how much easier creating Forms is in Vue thanks to this _two way binding_ that is used by Vue (you may recognise similar syntax from KnockoutJS).

If you've only done React before you may be thinking

> But Joe how do I do JavaScript inside the template of a VueJS component, in React it's so simple.

Great question.

```html
<template>
  <span> {{ isError ? 'Oops there was an error' : data.toString() }} </span>
</template>
```

> But what about attributes?

```html
<template>
  <img v-bind:src="imageLink" :alt="imageAlt" />
</template>
```

Here you can see that `v-bind` is added before the `src` attribute of the `img` tag. This lets Vue know that you want the contents of the quotation marks to be evaluated as JavaScript rather than the default interpretation. You can also see that the `alt` tag is written as `:alt`. This is simply a shorthand way of writing `v-bind:alt` which is more commonly seen in production code (which I write at least ✌️).

One difference in Vue with attribute binding is that you need a different V directive for event handlers which is `v-on` so to bind a click of a button to a Vue function you would write is as...

```html
<button v-on:click="performFunc">Wow, so direct(ive)</button>
```

There is also a shorthand for this `v-on` which is to write `@` so this example would become `@click` to let Vue know that you're referencing a Vue _method_ (Vue methods are a special property inside the Vue object).

These kinds of things are what I found the most different to React along with the way that .vue files are structured with the template code at the top, the JavaScript code which describes the behaviour and functionality of the component, and the option to have styling at the bottom which can be `scoped` to that particular component.

### 🤔 What did we learn?

I don't want to go too deep into an entire Vue tutorial explaining all the lifecycle methods and the differences in component logic but maybe I will if someone asks me too? I think I might write about VueX because for some reason I prefer it to Redux when it's basically the same thing (from a developer experience point of view anyway)?

So far I'm enjoying writing Vue and haven't hit on anything that has really irritated me or made me want to go full `File > New Project` back to React but having said that.

## 😭 I miss React

![Distracted Frontend Meme](https://i.imgflip.com/2moaq4.jpg)

Seriously though all the cool stuff that came out at ReactConf this year made me really miss and appreciate the work React has done to improve itself. I am particularly excited about the upcoming [Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) feature which allows developers to create stateful functional components (something previously only possible with the Component class).

I also find myself missing the community of great developers that I became familiar with over the year and a half of React (Native) development. Not to say Vue doesn't have a great community I just haven't found the time to get to know it.

Let me know via some form of communcation channel if you enjoyed this blog post, maybe I'll add a likes feature to the site or something (will that even work in Gatsby?) Tune in next time!
