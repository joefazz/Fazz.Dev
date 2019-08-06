<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style: none;
  }

  li {
    padding: 5px 0;
  }

  a {
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: grey;
  }
</style>

<svelte:head>
  <title>Blog | Fazz</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      <p>{post.description}</p>
    </li>
  {/each}
</ul>
