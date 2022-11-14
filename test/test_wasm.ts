const wasmCode = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
    3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
    5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
    128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
    105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
    65, 42, 11
]);
const wasm_module = new WebAssembly.Module(wasmCode);
const instance = new WebAssembly.Instance(wasm_module);
const main = instance.exports.main as CallableFunction;
const add = instance.exports.add as CallableFunction;

// The name of the exported Wasm function is defined to be the index. WTF!!!
console.log("main.name", main.name) // 0 ah, no export !?

console.log(main().toString());
