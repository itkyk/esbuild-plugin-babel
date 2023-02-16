const esBuild = require("esbuild");
const {dependencies} = require("../package.json");

const init = async() => {
  await esBuild.build({
    entryPoints: ["./src/index.ts"],
    platform: "node",
    format: "esm",
    outfile: "./bin/index.ems.js",
    bundle: true,
    external: Object.keys(dependencies),
    target: "node12",
  })
  await esBuild.build({
    entryPoints: ["./src/index.ts"],
    platform: "node",
    format: "cjs",
    outfile: "./bin/index.cjs.js",
    bundle: true,
    target: "node12",
    external: Object.keys(dependencies)
  })
}

init().then();