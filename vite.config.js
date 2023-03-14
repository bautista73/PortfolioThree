import { defineConfig } from 'vite';
import html from 'vite-plugin-html';
import sass from 'sass';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default defineConfig({
  root: 'src/',
  publicDir: '../static/',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    {
      name: 'scss',
      transform: (code, id) => {
        if (id.endsWith('.scss')) {
          const result = sass.renderSync({ data: code });
          return {
            code: result.css.toString(),
          };
        }
      },
    },
    ...html(),
  ],
});

// const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// export default {
//     root: 'src/',
//     publicDir: '../static/',
//     base: './',
//     server:
//     {
//         host: true,
//         open: !isCodeSandbox // Open if it's not a CodeSandbox
//     },
//     build:
//     {
//         outDir: '../dist',
//         emptyOutDir: true,
//         sourcemap: true
//     }
// }