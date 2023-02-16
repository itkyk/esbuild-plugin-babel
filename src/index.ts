import * as babel from "@babel/core";
import {Plugin} from "esbuild"
import fs from "fs";

interface babelPluginOptions {
  filter?:  RegExp,
  babel: babel.TransformOptions
}

const babelPlugin = (options:babelPluginOptions):Plugin => ({
  name: "esbuild-plugin-babel",
  setup(build) {
    const filter = options.filter || /.*/;
    build.onLoad({filter}, ({path}) => {
      const code = fs.readFileSync(path, "utf-8");
      return new Promise((resolve, reject) => {
        const result = babel.transformSync(code, {
          filename: options.babel.filename || path,
          ...options.babel
        });
        if (result) {
          resolve({contents: result.code!});
        } else {
          reject()
        }
      })
    })
  }
})

export default babelPlugin;