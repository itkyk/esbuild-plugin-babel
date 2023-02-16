import * as babel from "@babel/core";
import { Plugin } from "esbuild";
interface babelPluginOptions {
    filter?: RegExp;
    babel: babel.TransformOptions;
}
declare const babelPlugin: (options: babelPluginOptions) => Plugin;
export default babelPlugin;
