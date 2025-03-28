import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
