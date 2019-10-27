<style>
  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }

  .nav-split a {
    color: black;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.8em;
  }

  li > span {
    display: inline-block;
    min-width: 40px;
  }

  li > a {
    text-decoration: none;
  }

  li > a:hover {
    text-decoration-line: underline;
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
    flex: 1;
    overflow-x: hidden;
    grid-area: card;
    background-color: salmon;
    box-shadow: -8px 8px 0px 0px black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 2px solid black;
    transition: all 0.2s ease-out;
    padding: 0 10px;  
  }
  
  .card:hover {
    box-shadow: -10px 15px 10px darkgrey;
    transform: translate(6px,-6px);
  }

  .info-split > .card {
    background-color: whitesmoke;
  }

  .info-split > .card:hover {
    box-shadow: -10px 15px 10px rgba(50, 50, 50, 0.4);
  }

  .card > :global(article) {
    overflow-y: scroll;
    padding: 10px;

		margin-bottom: 10px;
		max-width: 100%;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0px 0px 20px lightgray;
  }

  :global(.card-title) {
      font-size: 4em;
      margin: 0;
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
      padding: 0;
    }

    .info-split > .card {
      padding: 5px 10px;
    }

    .nav-split > .card {
      border-right: 2px solid black;
      justify-content: space-evenly;
      padding: 0 10px;
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
      border: 0;
      box-shadow: none;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  @media (max-width: 620px) {
    .main-split {
      flex-direction: column;
      width: 100%;
    }

    .info-split,
    .nav-split {
      display: flex;
    }

    .nav-split {
      flex: 0.1;
      min-height: 70px;
      flex-direction: row;
    }

    .nav-split > .card {
      border: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
       margin-bottom: 4px;
    }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      margin-bottom: 3px;
      margin-left: 10px;
    }

    span {
      display: none !important;
    }

    .card > :global(article) {
      overflow-x: hidden;
    }

    :global(.card-title) {
      font-size: 2em;
    }

    h4 {
      font-size: 0.8rem;
    }

    .info-split > .card {
      justify-content: flex-start;
    }
  }

  @media (max-width: 440px) {
    li > a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    li > a {
      font-size: 1.1rem;
    }
  }
</style>

<main>
  <div class="main-split">
    <section class="nav-split">
      <div class="card">
        <div class="nav-links">
          <a href="/" style="text-decoration: none;">
            <h1 class="card-title">Fazz.Dev</h1>
          </a>
          <ul>
            <li>
              <span>📰</span>
              <a href="blog">
                <code>Blog</code>
              </a>
            </li>
            <li>
              <span>👷</span>
              <a href="projects">
                <code>Projects</code>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>A <a href="https://twitter.com/purefazz">Joe Fazzino</a> Production</h4>
        </div>
      </div>
    </section>
    <section class="info-split">
      <div class="card">
        <slot />
      </div>
    </section>
  </div>
</main>
