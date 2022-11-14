import binaryen from "npm:binaryen"

let i32 = binaryen.i32
// import {Module} from "npm:binaryen"
// import {Module} from "/binaryen.ts"
// import * as binaryen from "binaryen";
import readFile = Deno.readFile;
// import {Features} from "../binaryen";
// import {readBinary} from "npm:binaryen"// "../node_modules.bad/binaryen";
// import Module = WebAssembly.Module;
// import {error, file_exists, readFile} from "../extensions.ts"
// import binaryen from "https://www.npmjs.com/package/binaryen"
// import App from './App'
// import App from './App.tsx'
// App.test()
// import binaryen from "npm:binaryan"
// import {require} from "https://raw.githubusercontent.com/nuxodin/deno-require/master/require.js";
// let binaryen={readBinary(){}}
let wasm_file = "/Users/me/dev/angles/angle.ts/test/test.wasm";
let wasm_bytes = await readFile(wasm_file);
const module: binaryen.Module = binaryen.readBinary(wasm_bytes);
module.setFeatures(binaryen.Features.Multivalue)
module.setFeatures(binaryen.Features.ReferenceTypes)
module.setFeatures(binaryen.Features.ExceptionHandling)
module.setFeatures(binaryen.Features.GC)
module.setFeatures(binaryen.Features.MutableGlobals)
module.setFeatures(binaryen.Features.Atomics)

let ii = binaryen.createType([i32, i32])
module.addFunction("add", ii, i32, [i32],
	// module.block(null, [
	// module.local.set(2,
	module.i32.add(
		module.local.get(0, i32),
		module.local.get(1, i32)
	)
	// ),
	// module.return(
	//   module.local.get(2, i32)
	// )
	// ])
);
module.addFunctionExport("add", "add");
console.log(module.emitText())
const wasmCode = module.emitBinary()

enum ReturnType {
	I32,
	I64,
	F32,
	F64,
}

let function_index = module.getFunction("add");
console.log("function_index add", function_index)
console.log("module.validate()", module.validate())
console.log("interpreted", module.interpret())
console.log("module.getDebugInfoFileName(0)", module.getDebugInfoFileName(0))
console.log("module.getFeatures()", module.getFeatures());
console.log("module.getNumFunctions()", module.getNumFunctions())
// let typo:binaryen.Type=new binaryen.Type()
console.log("Calling main: ", module.call("main", [], ReturnType.I32));
console.log("Calling add: ", module.call("add", [1, 2], ReturnType.I32));
// console.log("Calling add: ", module.cal

// console.log("interpreted",module1.runPasses(["main"]))

const wasm_module = new WebAssembly.Module(wasmCode);
const instance = new WebAssembly.Instance(wasm_module);
const main = instance.exports.main as CallableFunction;
const add = instance.exports.add as CallableFunction;

// The name of the exported Wasm function is defined to be the index. WTF!!!
console.log("main.name", main.name) // 0 ah, no export !?

console.log(main().toString());
console.log(add(11, 22).toString());
