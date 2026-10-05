import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },

    watch: {
      usePolling: true,
    },
  },

  test: {
    server: {
      deps: {
        optimizer: {
          web: {
            include: ["react-dom"],
          },
        },
      },
    },
  },

  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },

    projects: [
      {
        extends: true,

        test: {
          name: "happy-dom",
          include: ["**/*.node.test.{js,jsx}"],
          environment: "happy-dom",
        },
      },

      {
        extends: true,

        test: {
          name: "browser",
          include: ["**/*.browser.test.{js,jsx}"],

          setupFiles: ["vitest-browser-react"],

          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
