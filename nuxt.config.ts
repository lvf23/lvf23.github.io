import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    nitro: {
        output: {
            publicDir: path.join(__dirname, "docs"),
        },
    },
});
