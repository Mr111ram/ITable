import { defineConfig } from "rollup";

/** ROLLUP PLUGINS **/
import html from '@web/rollup-plugin-html';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve'
import commonjs from '@rollup/plugin-commonjs';
import progress from 'rollup-plugin-progress';
import eslint from '@rollup/plugin-eslint';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const DEV_MODE = process.env.NODE_ENV === 'development';

const transformHtml = (html) => (
	html
		.replace('</head>', '<link rel="stylesheet" href="./styles.asset.css"></head>')
		.replace('</body>', '<script src="./app.js" defer></script></body>')
);
const terserConfig = {
	ecma: (DEV_MODE ? 2020 : 2016),
	format: { beautify: DEV_MODE },
}

const rollupMainConfig = defineConfig({
	cache: true,
	input: './src/app.js',
	output: {
		dir: './public/',
		assetFileNames: '[name].asset.[ext]',
		chunkFileNames: '[name].chunk.js',
		entryFileNames: '[name].js',
		sourcemap: DEV_MODE ? 'inline' : false,
		format: 'esm',
		plugins: [
			terser(terserConfig),
		]
	},
	plugins: [
		styles({ 
			mode: ["extract", "styles.css"],
			sourceMap: DEV_MODE ? 'inline' : false,
			minimize: !DEV_MODE,
		}),
		nodeResolve(),
		commonjs(),
		copy({
			targets: [ { src: './src/assets/**', dest: './public/assets' } ]
		}),
		progress({ clearLine: false })
	]
});

const rollupHTMLConfig = defineConfig({
	input: './src/index.html',
	output: { dir: './public/' },
	plugins: [
		html({ transformHtml, minify: true, extractAssets: false })
	]
});

if (DEV_MODE) {
	rollupMainConfig.plugins.push(
		eslint(),
		serve('./public/'),
		livereload({ watch: './public/**' })
	);
}

export default [rollupHTMLConfig, rollupMainConfig];