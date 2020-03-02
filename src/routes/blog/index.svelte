<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      }).catch(err => console.log(err));
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog | Fazz</title>
</svelte:head>

<div class="flex-col w-full py-2">
  <h1 class="text-3xl font-bold">Recent posts</h1>
  <div class="post-list">
    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
            tell Sapper to load the data for the page as soon as
            the user hovers over the link or taps it, instead of
            waiting for the 'click' event -->
        <li class="px-4 py-2 mb-4 bg-gray-100 border-2 border-black border-solid">
          <a class="text-lg font-bold underline" rel="prefetch" href="blog/{post.slug}">{post.title}</a>
          <p class="mb-1 tracking-tight">{post.description}</p>
          <p class="text-sm italic">{post.pubdate}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
