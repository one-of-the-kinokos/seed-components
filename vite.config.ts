import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "seed-components",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@chakra-ui/react", "@emotion/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@chakra-ui/react": "ChakraUI",
          "@emotion/react": "Emotion",
        },
      },
    },
  },
});
