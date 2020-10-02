<script>
  import Tailwindcss from '../tailwindcss.svelte';
  import { onMount } from 'svelte';

  let loader = true;
  let slowLoad = false;

  onMount(() => {
    loader = false;
    setTimeout(() => {
      slowLoad = true;
    }, 200);
  });
</script>

<Tailwindcss />

<svelte:head>
  <title>Fazz.Dev</title>
</svelte:head>

{#if loader}
  <div class="flex items-center justify-around w-full h-full py-8 bg-gray-400">
    <img
      src="/pic.jpg"
      alt="spinning loader"
      class="w-32 h-32 transition-all duration-500 transform border-4 border-solid rounded-full
        shadow-lg hover:rotate-180 border-theme" />
    <span class="flex flex-col items-center justify-between">
      <span class="text-3xl font-bold uppercase">Please Hold the Line Caller...</span>
      <span
        class="text-xl duration-1000 transition-opacity font-thin {slowLoad ? 'opacity-100' : 'opacity-0'}">Your
        pageview is very important to us, you are the next pageview in the queue...</span>
    </span>
  </div>
{:else}
  <div class="flex flex-col items-center w-full py-4">
    <div
      class="flex justify-between w-full p-2 m-auto bg-white border-2 border-black border-solid
        shadow md:justify-around">
      <img
        src="/pic.jpg"
        class="w-24 h-24 border-2 border-solid rounded-full shadow-lg border-theme"
        alt="profile picture" />
      <span class="flex flex-col items-end justify-between md:items-center">
        <h1 class="text-3xl font-bold text-black">Joe Fazzino</h1>
        <h2 class="text-2xl font-thin text-black uppercase">UI Engineer</h2>
      </span>
    </div>
    <div class="w-full px-2 py-2 pb-4 my-4 bg-white border-2 border-black border-solid">
      <p class="mb-2">
        Hi! 👋 I'm Joe, a
        <strike>Web Engineer</strike>
        <b>UI Engineer</b> based in London, UK.
      </p>
      <p>
        I first got into coding when I was young trying to copy my dad who is also a Developer, the
        first language I learnt was Ruby on Codecademy. I got into JavaScript during a placement at
        a start up in the UK called <a
          href="https://fluid.work"
          class="underline text-theme-darker">Fluid</a> where I was tasked to develop and maintain their
        React Native codebase.
      </p>
      <p class="my-2">
        Since then I graduated from University of Reading with a First and now work at <a
          href="https://gravitysketch.com"
          class="underline text-theme-darker">Gravity Sketch</a> working with <b>Unity</b> and <b>C#</b>
        everyday across various projects giving the UI the ol' <b>Razzle Dazzle</b> ✨. Before that I
        worked on their cloud platform <a
          class="underline text-theme-darker"
          href="https://landingpad.me">Landing Pad</a> as the companies first Web Engineer hire.
      </p>
      <p class="my-2 mb-4">
        I enjoy doing public speaking and have done two technical talks, one at React London on <b>React
          Native</b>
        <a
          href="https://www.youtube.com/watch?v=EFiDHJBVKyA"
          class="underline text-theme-darker">(available to watch here)</a> and one at Google Developer
        Group doing a workshop and talk on <b>React</b>.
      </p>
      <div class="w-full text-center">
        <a
          href="mailto:joseph@fazzino.net?subject=You%20Have%20An%20Amazing%20Blog!"
          class="p-2 font-bold text-white transition-colors duration-100 rounded shadow
            hover:bg-theme-darker bg-theme">Get in touch</a>
      </div>
    </div>
  </div>
{/if}
