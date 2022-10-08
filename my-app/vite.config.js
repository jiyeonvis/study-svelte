import { sveltekit } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess({
				scss: {
					prependData: '@import "./src/base.scss";'
				}
			}) // preprocess 등록
		}) //,
		//sveltekit()
	]
};

export default config;
