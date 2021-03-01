---
title: 2D in 3D: Using a SpriteRenderer with Shadows 
published: true
description: Use SpriteSheets and 2D workflows in 3D nicely without compromising by losing shadows
pubdate: 2021-03-01
---

## The Problem

You have a SpriteSheet with a bunch of sprites in different states of animation and you want to be able to use these in the normal way while working in 3D, using the SpriteRenderer on it's own however doesn't cast shadows which isn't very '3D' of it and if you decide to use a Quad then you'll have to break up your SpriteSheet into individual textures (or use a Texture Atlas) have to write some supporting code.

## The Solution

Just to get this out of the way early on for people Googling to find this out as I was today for over an hour, if you want to be able to cast and receive shadows using a SpriteRenderer. Here is what you do.

### 1. Create a new ShaderGraph

I'm going to assume you have either got the ShaderGraph package installed or can Google and figure that part out yourself 😉

The purpose of this shader is going to be to do nothing, it's going to pass the colour from the vertex multiplied by the texture to the albedo. In the output targets however the Active Target should be Universal and then within the Universal dropdown the Material type select **Lit** or **Unlit** depending on whether or not you want your sprite to receive shadows (this will not impact if it will cast shadows). For workflow you'll either know what this does or you won't in which case I recommend going with Metallic [(info here for the curious)](https://docs.unity3d.com/Manual/StandardShaderMetallicVsSpecular.html). If you want to do transparency properly it will require slightly more set up but is optional. Optionally also you can turn on Two Sided which will mean both the front and the back of the sprite will be visible.

![shadergraph](/CompleteShaderGraph.png)

The ShaderGraph should look like this. Important to note that an external property is defined \_MainTex, as well as defining this in the property tab it is also important to change the Reference ID to \_MainTex as this is what the SpriteRenderer looks for to put the sprite loaded onto.

### 2. Using Our Shader

Now that we have the shader that is going to let our sprite cast shadows all we have to do now is create a new material using our shader...

![material](/DemoMaterial.png)

...and apply it to the GameObject with the SpriteRenderer.

If you get a warning about \_MainTex having to be a property on the shader it's because you forgot to change the Reference of the property in the shader.

### 3. Debug Mode

At this point you should be seeing your sprite in all of it's glory in 3D space but still no shadows?! At this point you have to open the Debug mode for the Inspector so that you can change some magic toggles, steps shown below.

![debug](/DebugMenu.png)

![Sprite renderer debug settings](/SpriteRendererDebugSettings.png)

### 4. Profit

![working!](/DemoSpriteShadows.png)

At this point you should have some beautiful shadows rendering in your scene. If you want to go further it's definitely a good idea to add support for Opacity so you don't treat any non 0 alpha value as 1. You can do this fairly simply in the shader, if you use a Split node to take the output of the multiply and then multiply the alpha output by an \_Opacity property feeding that into the Alpha value on the Fragment node.

[Let me know if you found this useful!](https://twitter.com/purefazz)
