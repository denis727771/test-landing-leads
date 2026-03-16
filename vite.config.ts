import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const configuredBase = process.env.VITE_BASE_PATH?.trim();
const base =
  configuredBase ||
  (process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}/`
    : "/");

export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
