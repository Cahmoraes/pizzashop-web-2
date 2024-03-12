import path from 'node:path'

import { defineConfig } from 'vitest/config'
// import tsconfigPaths from 'vitest-tsconfig-paths'

export default defineConfig({
  // plugins: [tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
