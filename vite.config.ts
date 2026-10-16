import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        projects: resolve(root, "projects.html"),
        about: resolve(root, "about.html"),
        blog: resolve(root, "blog.html"),
      },
    },
  },
});
