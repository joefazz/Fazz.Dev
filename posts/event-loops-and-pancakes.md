---
title: Event Loops and the Pancake Stack
published: true
description: A simple look at how a single threaded language can handle complexity
tags: javascript, beginner, event loop, nodejs
pubdate: 2019-03-05
---

*Warning: In the UK pancakes are more like crepes*

Whenever I've ever mentioned to another developer that isn't super familiar with JavaScript and Nodejs that it's single threaded it's usually met with:

> - Heavens no, what if you need to read a file
> - Golly, that must not scale well
> - Gee whiz that's magic

All of these are common responses and yet JavaScript is powering infrastructure we use every day like Twitter and Netflix.

How can something that inherently can't handle more than one thing at a time possibly be capable of powering such services with high usage?

I'm going to paint a picture in this post using a festive theme.

## Pancake Parallelism

Lets imagine that it's pancake day. You've promised your nearest and dearest that every meal will be pancakes and it'll be grand. You make your batter, get a pan and start the crafting process.

You quickly realise though that everyone's going to be eating their food at different times making it more like a drive-by pancaking than a nice social meal.

This is when you have the bright idea to get another pan out of the cupboard and chuck the heat on a different stove so you can get two pancakes going at a time. This is much better. Now at most two people can eat together giving them time to talk together about how they prefer the american style while you cry quietly.

Duel wielding pancakes can get quite tiring, you need to make sure they're not burning and are flipped appropriately. Your guests are still hungry so maybe it's time to get a third one of those pans on the heat to redeem some level of social standing with your quickly dwindling level of friends.

Three pancakes at once is more pancakes than god intended man to cook, your friends are demanding different varieties of shapes and you keep getting them mixed up and the overall quality is dwindling because not as much love is being put into each pancake as is necessary.

**This is where you give up**

The moral of the story here is making pancakes is quite demanding, also I've just tricked you into learning how multi-threading works with reference to CPU usage and memory.

> HA

All jokes aside how do we fix our pancake? First you might ask on ~~Pancake~~ Stack Overflow _(I'm sorry)_ where it'll tell you you need some of your friends to help you out with cooking some of the pancakes, this means that the job you have to do is less intense which will do just fine.

> BUT

What if you only have the one stove? How will you possibly be able to cater for all of your friends then? Maybe you just shouldn't try and let someone with more space for cooking host.

> NO!

You're gonna cook those pancakes like a hero and you're going to do it with...

## The PancakeCreator 3000

Cooking pancakes is a process that can be performed asynchronously but the problem that we faced before is that it was too difficult managing everything ourselves.

What if instead we buy a machine which can perfectly cook a huge amount of pancakes with little to no oversight? All you have to do is turn it on and take the pancakes out to serve. If such a machine existed that would free up time to spend with friends talking about why pancakes even get a special day anyway. Then you get to all eat at the same time give or take the seconds it takes to put peoples food onto plates from the machine.

This magical machine is doing all of the work so long as you correctly tell it the pancakes you want it to produce and remove them at the end for serving.

**That is the Event Loop.**

# The Call Stack and Callback Queue

To understand the `Event Loop` fully you need to have a basic understanding of how all of it's components fit together.

The `Call Stack` is a `Stack` which will push the task of executing code onto it and when the result is calculated, will pop it off.

Some functionality calls are asynchronous and interact with external APIs.

This is where they are delegated off to their respective service which handles them and adds the response to the `Callback Queue` when the API finishes handling the request. This queue will handle the callbacks and they will be processed _in the order they are added to the `Callback Queue` this is known as First-In-First-Out_.

_NB: The Callback Queue is also referred to as the Message Queue_

## The Event Loop

The `Event Loop` is what is constantly checking what the status of the `Call Stack` is to make sure it's empty. If it is then it will handle the response from the external process from the first frame in the queue and put the result back onto the `Call Stack`.

> IMPORTANT: The `Event Loop` will only evaluate an item in the queue when there is nothing on the `Call Stack` (because JavaScript is single threaded).

This is how Nodejs is able to handle thousands of requests for a database resource at the same time. The bottleneck in this is the database, not the server, as the `Call Stack` simply says to the database "Hey can you go get me this user, just let me know when you're done". When the database goes and succeeds (or fails) it comes back and adds the frame to the `Callback Queue` which is eventually evaluated by the `Event Loop`.  If you're thinking "this is similar to how promises and async/await works" you're right because they are helping you perform this process in a way that lets you utilise the response the `Callback Queue` provides!

You usually don't have to think directly about the event loop but if you've ever seen some code like this...

```javascript
// This works, dunno why, don't delete please
setTimeout(() => doThingThatIsDependantOnOtherThing(), 0);
```

Congratulations you've found out how to cheat the event loop into doing something in the 'right order' which is actually just adding it to the back of the queue so it executes it's callback after any other asynchronous request callbacks are resolved.

The reason it works even though it's a timeout of 0 is because it forces the `doThing...()` function onto the back of the `Callback Queue` after the timer finishes executing so it won't resolve until everything else that has been added to the `Callback Queue` is handled by the `Event Loop`.

## Why isn't everything event loop based?

There are real cases where you need to do processing that has to happen that can't be delegated. Complex floating point maths for example, is a more appropriate situation for multiple threads to be able to help out.

If someone finds out how to make pancakes utilise the event loop please email me.

---

This post was inspired by genuinely not being able to cook enough pancakes at once... 

Also the following articles which have good diagrams for reference:
- [https://medium.com/@gaurav.pandvia](https://medium.com/@gaurav.pandvia)
- [https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
