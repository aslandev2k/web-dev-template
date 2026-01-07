import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
	],
	resolve: {
		alias: {
			'@shadcn-ui': path.resolve('./src/shadcn/components/ui'),
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: { outDir: '../../dist' },
});
