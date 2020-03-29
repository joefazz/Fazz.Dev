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
          </ul>
      </div>
      <h4 class="mb-4">A <a class="italic underline" href="https://twitter.com/purefazz">Joe Fazzino</a> Production</h4>
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
        </ul>
      {/if}
      <slot />
    </div>
  </section>
</div>