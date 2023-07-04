import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import pkg from "./package.json";

const config = {
  kit: {
    adapter: adapter(),
    target: "#svelte",
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      optimizeDeps: {
        include: ["cookie", "jsonwebtoken"],
      },
    },
  },
  preprocess: preprocess(),
};

export default config;
