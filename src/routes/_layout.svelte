<script>
  let isMenuExpanded = false;
  import { onMount } from 'svelte';

  let loader = true;

  onMount(() => {
    loader = false;
  }) 
  
  function toggleMenu() {
    isMenuExpanded = !isMenuExpanded;
  }
</script>

<style>
  .nav-split a {
    color: black;
    padding: 0;
  }

  .main-split {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: whitesmoke;
  }

  .info-split {
    flex: 1;
    background-color: salmon;
    display: grid;
    grid-template-rows: 1fr minmax(350px, auto) 1fr;
    grid-template-columns: 1fr minmax(250px, 550px) 1fr;
    grid-template-areas: ". . ." ". card ." ". . .";
    padding: 50px 0 50px 0;
  }

  .nav-split {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr minmax(100px, 350px) 1fr;
    grid-template-columns: 1fr minmax(250px, 550px) 1fr;
    grid-template-areas: ". . ." ". card ." ". . .";
  }

  .card {
    @apply flex flex-col justify-between;
    flex: 1;
    overflow-x: hidden;
    grid-area: card;
    box-shadow: -8px 8px 0px 0px black;
    transition: all 0.2s ease-out;
  }
  
  .card:hover {
    box-shadow: -10px 15px 10px #121210;
    transform: translate(6px,-6px);
  }

  .card > :global(article) {
    overflow-y: scroll;
    padding: 10px;

		margin-bottom: 10px;
		max-width: 100%;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0px 0px 20px gray;
  }

  @media (max-width: 1200px) {
    .nav-split {
      flex: 0.2;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .info-split {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 0;
    }

    .nav-split > .card {
      justify-content: space-evenly;
    }

    .card:hover {
      transform: none;
      box-shadow: none;
    }

    .info-split > .card:hover {
      transform: none;
      box-shadow: none;
    }

    .card {
      box-shadow: none;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  @media (max-width: 778px) {
    .nav-split {
      flex: 0.14;
      flex-direction: row;
    }

    .card > :global(article) {
      overflow-x: hidden;
    }
  }

</style>


<div class="flex-col main-split sm:flex-row">
  <section class="nav-split">
    <div class="px-3 pt-1 border-b-2 border-black border-solid sm:border-r-4 sm:border-0 xl:border-4 bg-theme card">
      <div class="flex flex-col w-full">
        <div class="inline-flex items-center justify-between">
          <a href="/" style="text-decoration: none;">
            <h1 class="text-4xl font-bold md:text-6xl">Fazz.Dev</h1>
          </a>
          <button class="p-1 text-3xl border-2 border-black border-solid rounded cursor-pointer sm:hidden" on:click={toggleMenu} aria-label="navigation menu"><img aria-hidden="true" class="w-5" src="/hamburger.png" alt=""></button>
        </div>
        
        <ul class="hidden mt-6 sm:flex sm:flex-col">
            <li class="text-lg sm:text-2xl">
              <span>📰</span>
              <a href="blog"  class="hover:underline">
                <code>Blog</code>
              </a>
            </li>
            <li class="text-lg sm:text-2xl">
              <span>👷</span>
              <a href="projects" class="hover:underline">
                <code>Projects</code>
              </a>
            </li>
            <li class="text-lg sm:text-2xl">
              <span>👨‍🎨</span>
              <a href="art" class="hover:underline">
                <code>Art</code>
              </a>
            </li> 
          </ul>
      </div>
      <div class="flex justify-between items-center">
        <h4 class="mb-4">A <a class="italic underline" href="https://twitter.com/purefazz">Joe Fazzino</a> Production</h4>
          <a href="https://github.com/joefazz" class="flex mb-4" target="_blank">
            <svg viewBox="0 0 16 16" width="32" height="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
      </div>
    </div>
  </section>
  <section class="bg-gray-200 info-split">
    <div class="relative px-3 bg-gray-200 border-b-2 border-black border-solid sm:border-r-4 sm:border-0 xl:border-4 card">
      {#if isMenuExpanded}
        <ul class="absolute top-0 left-0 z-10 w-full px-3 py-4 border-b-2 border-black border-solid shadow-lg bg-theme">
          <li class="text-xl">
            <span>📰</span>
            <a href="blog" class="hover:underline" on:click={toggleMenu}>
              <code>Blog</code>
            </a>
          </li>
          <li class="text-xl">
            <span>👷</span>
            <a href="projects" class="hover:underline" on:click={toggleMenu}>
              <code>Projects</code>
            </a>
          </li>
          <li class="text-xl">
            <span>👨‍🎨</span>
            <a href="art" class="hover:underline" on:click={toggleMenu}>
              <code>Art</code>
            </a>
          </li>
        </ul>
      {/if}
      <slot />
    </div>
  </section>
</div>