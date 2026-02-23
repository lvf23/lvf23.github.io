import fs from "node:fs";
import path from "node:path";

const isDev = process.env.NODE_ENV === "development";

const publicDirFolder = isDev ? "staging" : "docs";

const recreateStagingGitKeep = () => {
    const file = "staging/.gitkeep";

    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "");
        console.log(`✔ '${file}' recreated after build`);
    }
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    nitro: {
        output: {
            publicDir: path.join(__dirname, publicDirFolder),
        },
    },
    hooks: {
        "build:done"(builder) {
            setTimeout(recreateStagingGitKeep, 100);
        },
    },
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    plugins: ["~/plugins/bootstrap.client.ts"],
});
