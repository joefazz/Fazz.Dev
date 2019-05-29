<style>
  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }

  .nav-split a {
    color: black;
  }

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

  h1 {
    font-size: 4em;
  }

  .main-split {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
  }

  .info-split {
    flex: 1;
    background-color: salmon;
    display: grid;
    grid-template-rows: 1fr minmax(350px, auto) 1fr;
    grid-template-columns: 1fr minmax(250px, 550px) 1fr;
    grid-template-areas: ". . ." ". card ." ". . .";
  }

  .nav-split {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr minmax(100px, 350px) 1fr;
    grid-template-columns: 1fr minmax(250px, 550px) 1fr;
    grid-template-areas: ". . ." ". card ." ". . .";
  }

  .card {
    flex: 1;
    grid-area: card;
    background-color: salmon;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 10px;
    border: 2px solid black;
    transition: all 0.2s ease-out;
  }

  .card:hover {
    box-shadow: 3px 10px 10px darkgray;
    transform: translateY(-8px);
  }

  .info-split > .card {
    background-color: whitesmoke;
  }

  .info-split > .card:hover {
    box-shadow: 3px 10px 10px rgba(50, 50, 50, 0.4);
    transform: translateY(-8px);
  }

  @media (max-width: 1200px) {
    .nav-split {
      flex: 0.1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .info-split {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .nav-split > .card {
      border-right: 2px solid black;
      justify-content: space-evenly;
    }

    .card:hover {
      transform: none;
    }

    .info-split > .card:hover {
      transform: none;
    }

    .card {
      border: 0;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  @media (max-width: 620px) {
    .main-split {
      flex-direction: column;
    }

    .info-split,
    .nav-split {
      display: flex;
    }

    .nav-split {
      flex: 0.1;
      flex-direction: row;
    }

    .nav-split > .card {
      height: 200px;
      border: 0;
    }

    h1 {
      font-size: 2rem;
    }

    a {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 0.8rem;
    }

    .info-split > .card {
      justify-content: flex-start;
    }
  }
</style>

<main>
  <div class="main-split">
    <section class="nav-split">
      <div class="card">
        <a href="/" style="text-decoration: none;">
          <h1>Fazz.Dev</h1>
        </a>
        <ul>
          <li>
            📰
            <a href="blog">
              <code>Blog</code>
            </a>
          </li>
          <li>
            👷
            <a href="projects">
              <code>Projects</code>
            </a>
          </li>
        </ul>

        <h4>A Joe Fazzino Production</h4>
      </div>
    </section>
    <section class="info-split">
      <div class="card">
        <slot />
      </div>
    </section>
  </div>
</main>
