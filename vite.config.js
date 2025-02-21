import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@containers': path.resolve(__dirname, './src/containers'),
			'@services': path.resolve(__dirname, './src/services'),
			'@hoc-helpers': path.resolve(__dirname, './src/hoc-helpers'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@routs': path.resolve(__dirname, './src/routesConfig'),
			'@static': path.resolve(__dirname, './src/static'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@ui': path.resolve(__dirname, './src/Ui-kit'),
			'@store': path.resolve(__dirname, './src/store'),
    },
  },
});