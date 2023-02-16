// src/index.ts
import * as babel from "@babel/core";
import fs from "fs";
var babelPlugin = (options) => ({
  name: "esbuild-plugin-babel",
  setup(build) {
    const filter = options.filter || /.*/;
    build.onLoad({ filter }, ({ path }) => {
      const code = fs.readFileSync(path, "utf-8");
      return new Promise((resolve, reject) => {
        const result = babel.transformSync(code, {
          filename: options.babel.filename || path,
          ...options.babel
        });
        if (result) {
          resolve({ contents: result.code });
        } else {
          reject();
        }
      });
    });
  }
});
var src_default = babelPlugin;
export {
  src_default as default
};
