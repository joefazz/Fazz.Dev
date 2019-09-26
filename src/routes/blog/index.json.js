import { getPosts } from './_posts.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts().map(post => ({
			title: post.metadata.title,
			description: post.metadata.description,
			pubdate: post.metadata.pubdate,
			reading_time: post.metadata.reading_time,
			slug: post.slug
		}));

		
		contents = JSON.stringify(posts);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}