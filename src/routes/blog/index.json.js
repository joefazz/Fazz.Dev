import { getPosts } from './_posts.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts()
			.filter(post => post.metadata.published === 'true')
			.sort((a, b) => new Date(b.metadata.pubdate) - new Date(a.metadata.pubdate))
			.map(post => ({
				title: post.metadata.title,
				description: post.metadata.description,
				tags: post.metadata.tags,
				pubdate: post.metadata.pubdate,
				slug: post.slug
			}));

		
		contents = JSON.stringify(posts);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}