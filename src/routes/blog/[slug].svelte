<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

	.content {
		max-width: 100%;
	}

	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: rgb(224, 224, 224);
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		border: 2px grey solid;
		padding: 0.5em;
		border-radius: 4px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		max-width: 20px;
		background-color: transparent;
		white-space: pre-wrap;
		color: black;
		padding: 0;
		font-size: 0.8rem;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content :global(p) {
		font-size: 1rem;
		margin-top: 0;
	}

	.content :global(p)::before {
		content: "\A";
		white-space: pre;
	}

	.content :global(img) {
		max-width: 100%;
	}

	.content :global(blockquote) {
		font-weight: bold;
		font-style: italic;
		font-size: 0.8rem;
		padding: 0 0.2rem;
		padding-left: 0.5rem;
	}

	.content :global(a) {
		color: indianred;
		text-decoration-line: underline;
	}

</style>

<svelte:head>
	<title>{post.metadata.title} | Fazz</title>
</svelte:head>

<h1 class="text-3xl font-bold uppercase">{post.metadata.title}</h1>

<article class='content'>
	{@html post.html}
</article>