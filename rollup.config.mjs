import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import path from "path";
import { fileURLToPath } from "url";

import packageJson from "./package.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Resolver = resolve({
  extensions: [".mjs", ".ts", ".tsx", ".json", ".js", ".jsx"],
  browser: true,
});

export default [
  {
    input: "src/index.ts",
    output: [
      { file: packageJson.main, format: "cjs", sourcemap: true },
      { file: packageJson.module, format: "esm", exports: "named" },
    ],
    plugins: [
      peerDepsExternalPlugin(),
      alias({
        entries: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "src"),
          },
        ],
        Resolver,
      }),
      image(),
      svgr(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
