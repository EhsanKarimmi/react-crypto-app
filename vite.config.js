import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // when we don't want use import.meta.env => uncomment this line.
    // define: { "process.env": {} },
});
