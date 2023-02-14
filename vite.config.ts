import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel";
// import { viteStaticCopy } from "vite-plugin-static-copy";
// import { fileURLToPath } from "url";

export default defineConfig(() => {
  return {
    plugins: [
      solid({ ssr: true, adapter: vercel({ edge: false }) }),
      // viteStaticCopy({
      //   targets: [
      //     {
      //       src: fileURLToPath(new URL("./node_modules/blockly/media/*", import.meta.url)),
      //       dest: "media",
      //     },
      //   ],
      // }),
    ],
  };
});
