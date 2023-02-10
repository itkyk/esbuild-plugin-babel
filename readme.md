# esbuild-plugin-babel

This package is for using babel with esbuild.  
In the plugin, `babel.transfromSync` works.

## Installation
To install the package, simply run the following command in your terminal:
```bash
npm i -D @itkyk/esbuild-plugin-babel
```


## Usage
```typescript
import * as esbuild from "esbuild";
import babelPlugin from "@itkyk/esbuild-plugin-babel";

await esbuild.build({
  //...
  plugins: [
    babelPlugin({
      presets:["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"]
    })
  ]
  //...
})
```

## Options Reference

### filter

|             |      |
|-------------|------|
| default     | /.*/ |
| description | You can specify the pattern of files to be read. |

### babel
|             |                                                 |
|-------------|-------------------------------------------------|
| default     | {}                                              |
| description | babel settings can be added. |

## Dependencies
- @babel/core: ^7.20.12

