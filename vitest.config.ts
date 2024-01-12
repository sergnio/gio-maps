import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    alias: { "@/": new URL("@", import.meta.url).pathname },
    exclude: ["**/node_modules/**", "**/e2e-tests/**"],
  },
  base: ".",
});
