import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			routesDirectory: './src/routes',
			target: 'react',
			autoCodeSplitting: true,
			generatedRouteTree: './src/routeTree.gen.ts',
			routeFileIgnorePrefix: '-',
			quoteStyle: 'single',
		}),
		react(),
		tailwindcss(),
		svgr(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	envDir: '../../',
	envPrefix: 'VITE',
	build: {
		emptyOutDir: true,
		outDir: '../../dist',
	},
});
