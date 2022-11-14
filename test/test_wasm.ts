// import binaryen from "npm:binaryen"
import {Module} from "../src/binaryen.ts"

// let x:Module = {}
function tee(x:Module){
  x.ok=1
  x.oki=23

}
// import {Module} from "/binaryen.ts"
// import * as binaryen from "binaryen";
import readFile = Deno.readFile;
// import {error, file_exists, readFile} from "../extensions.ts"
// import binaryen from "https://www.npmjs.com/package/binaryen"
// import App from './App'
// import App from './App.tsx'
// App.test()
// import binaryen from "npm:binaryan"
// import {require} from "https://raw.githubusercontent.com/nuxodin/deno-require/master/require.js";
let binaryen={readBinary(){}}
let wasm_file = "/Users/me/dev/angles/angle.ts/test/test.wasm";
let wasm_bytes=await readFile(wasm_file);
const module1: Module = binaryen.readBinary(wasm_bytes);
console.log(module1)
// const wasmCode = module1.
const wasmCode = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
    3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
    5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
    128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
    105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
    65, 42, 11
]);

const module = new WebAssembly.Module(wasmCode);

const instance = new WebAssembly.Instance(module);

const main = instance.exports.main as CallableFunction;
console.log("main.name", main.name) // 0 ah, no export !?
console.log(main().toString());
