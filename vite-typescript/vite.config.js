import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
const path = require('path');

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
        production: path.resolve(__dirname, './src/production.html'),
      },
      output: {
        manualChunks: (id) => {
          //   console.log('id', id);
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
});
