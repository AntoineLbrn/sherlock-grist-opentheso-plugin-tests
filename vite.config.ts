import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    base: '/sherlock-grist-opentheso-plugin-tests/',
    build: {
        outDir: "../dist",
    },
});