import * as esBuild from "esbuild";

const init = async() => {
  await esBuild.build({
    entryPoints: ["./src/index.ts"],
    platform: "node",
    format: "esm",
    outfile: "./bin/index.ems.js",
    bundle: true
  })
  await esBuild.build({
    entryPoints: ["./src/index.ts"],
    platform: "node",
    format: "cjs",
    outfile: "./bin/index.cjs.js",
    bundle: true
  })
}

init().then();