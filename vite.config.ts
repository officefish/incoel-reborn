import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
//const webpack = require('webpack');
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import inject from '@rollup/plugin-inject'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
// https://vitejs.dev/config/
export default (({ mode } : { mode: string }) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return defineConfig({

      plugins: [react(),
      ],
      optimizeDeps: {
        esbuildOptions: {
          // Node.js global to browser polyfills
          define: {
            global: 'globalThis',
          },
          plugins: [
            NodeGlobalsPolyfillPlugin({
              buffer: true,
              process: true,
            }),
          ],
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'), 
          util: 'rollup-plugin-node-polyfills/polyfills/util',
          sys: 'util',
          events: 'rollup-plugin-node-polyfills/polyfills/events',
          stream: 'rollup-plugin-node-polyfills/polyfills/stream',
          path: 'rollup-plugin-node-polyfills/polyfills/path',
          querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
          punycode: 'rollup-plugin-node-polyfills/polyfills/punycode',
          url: 'rollup-plugin-node-polyfills/polyfills/url',
          string_decoder:
              'rollup-plugin-node-polyfills/polyfills/string-decoder',
          http: 'rollup-plugin-node-polyfills/polyfills/http',
          https: 'rollup-plugin-node-polyfills/polyfills/http',
          os: 'rollup-plugin-node-polyfills/polyfills/os',
          assert: 'rollup-plugin-node-polyfills/polyfills/assert',
          constants: 'rollup-plugin-node-polyfills/polyfills/constants',
          _stream_duplex:
              'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
          _stream_passthrough:
              'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
          _stream_readable:
              'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
          _stream_writable:
              'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
          _stream_transform:
              'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
          timers: 'rollup-plugin-node-polyfills/polyfills/timers',
          console: 'rollup-plugin-node-polyfills/polyfills/console',
          vm: 'rollup-plugin-node-polyfills/polyfills/vm',
          zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
          tty: 'rollup-plugin-node-polyfills/polyfills/tty',
          domain: 'rollup-plugin-node-polyfills/polyfills/domain',
          buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
          process: 'rollup-plugin-node-polyfills/polyfills/process-es6'
        },
      },
      build: {
        minify: true,
        cssMinify: true,
     
        rollupOptions: {
          plugins: [
              // Enable rollup polyfills plugin
              // used during production bundling
              // @ts-ignore
              rollupNodePolyFill(),
          ]
      }
      }
    
  })
})