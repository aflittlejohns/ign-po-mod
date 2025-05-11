import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vite.dev/config/
import path from 'path';
export default defineConfig({
	plugins: [react(), commonjs()],
	resolve: {
		alias: {
		  '@inductiveautomation/perspective-client': path.resolve(
			__dirname,
			'/node_modules/@inductiveautomation/perspective-client/build/dist/PerspectiveClient.b95f1df0a45c79e31b1f.js'
		  ),
		},
	  },
});
