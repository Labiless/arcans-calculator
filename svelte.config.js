// import adapter from '@sveltejs/adapter-auto';
import adapter from "svelte-adapter-appengine";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [preprocess()]
};

export default config;
