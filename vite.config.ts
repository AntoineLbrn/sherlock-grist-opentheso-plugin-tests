import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    base: '/sherlock-grist-opentheso-plugin-test/',
    build: {
        outDir: "../dist",
    },
});