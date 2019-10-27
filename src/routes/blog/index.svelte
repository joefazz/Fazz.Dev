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

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px 5px;
    border: 2px solid black;
    background-color: white;
    border-radius: 0px;
    justify-content: space-between;
    margin-bottom: 20px;
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

   h1 {
     margin: 0;
   }

  .post-list {
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .post-list > ul {
    margin: 0;
  }

  .post-description {
    color: black;
  }
</style>

<svelte:head>
  <title>Blog | Fazz</title>
</svelte:head>

<h1 class="card-title">Recent posts</h1>
<div class="post-list">
  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
          tell Sapper to load the data for the page as soon as
          the user hovers over the link or taps it, instead of
          waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        <p class="post-description">{post.description}</p>
        <p>{post.pubdate}</p>
      </li>
    {/each}
  </ul>
</div>
