import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import image from '@rollup/plugin-image';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command: _command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        publicDir: 'public',
        build: {
            assetsInlineLimit: 0,
            chunkSizeWarningLimit: 2000,
            sourcemap: false,
            rollupOptions: {
                output: {
                    entryFileNames: 'index-visualisation.js',
                },
            },
        },
        resolve: {
            preserveSymlinks: true,
            alias: {
                '@': path.resolve(__dirname, './src'),
                'ui-kit': path.resolve(__dirname, './src/ui-kit'),
                common: path.resolve(__dirname, './src/common'),
                emr: path.resolve(__dirname, './src/_EMR'),
            },
        },
        plugins: [
            react(),
            VitePWA({
                manifest: {
                    name: 'vite-react-ts-100',
                    short_name: 'vite-react-ts-100',
                    start_url: '/',
                    display: 'standalone',
                    background_color: '#ffffff',
                    lang: 'en',
                    scope: '/',
                    theme_color: '#ffffff',
                },
            }),
            {
                ...image(),
                enforce: 'post',
            },
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        server: {
            base: './',
            host: true,
            watch: {
                usePolling: true,
            },
            port: 3000,
            strictPort: true,
            proxy: {
                '/api': {
                    target:
                        env.CODEMAX_API_TARGET ||
                        'https://demo-codemax.azurewebsites.net/api',
                    changeOrigin: true,
                    ws: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
        base: '/Visualisation_Tool/',
        envPrefix: 'Visualization_Tool',
    };
});
