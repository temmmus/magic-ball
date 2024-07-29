import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/magic-ball/",
  plugins: [vue(), ghPages()],
});
