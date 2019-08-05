<script>
  let x = 3;

  function handleClick() {
    x++;
  }
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.8em;
  }

  li > a {
    text-decoration: none;
  }

  li > a:hover {
    text-decoration-line: underline;
  }

  .card > h1 {
    padding: 0;
    margin: 0;
    color: black;
    font-size: 4em;
  }

  @media (max-width: 620px) {
    .card > h1 {
      font-size: 3em;
    }
  }

  .about {
    padding: 0;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
  }

  .about h1 {
    font-size: 2em;
  }

  .about li {
    font-size: 0.9em;
  }

  .about a {
    text-decoration: underline;
  }

  .about > div {
    flex: 1;
  }
</style>

<svelte:head>
  <title>Fazz.Dev</title>
</svelte:head>

<h1>About</h1>

<div class="about">
  <div>
    <h1>Me</h1>
    <ul>
      <li>
        <h2>Joe Fazzino</h2>
      </li>
      <li>
        <h2>Developer</h2>
      </li>
      <li>
        <h2>London</h2>
      </li>
      <li>
        <h2>70% Water</h2>
      </li>
    </ul>
  </div>
  <div>
    <h1>This</h1>
    <ul>
      <li>
        <h2>My words</h2>
      </li>
      <li>
        <h2>My creations</h2>
      </li>
      <li>
        <h2>Made with Svelte 3</h2>
      </li>
      <li>
        <a href="https://github.com/joefazz">
          <h2>Code here</h2>
        </a>
      </li>
    </ul>
  </div>
</div>
