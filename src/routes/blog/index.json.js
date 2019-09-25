import { getPosts } from './_posts.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts().map(post => ({
			title: post.metadata.title,
			slug: post.slug
		}));

		
		contents = JSON.stringify(posts);
	}
	console.log(contents);

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}