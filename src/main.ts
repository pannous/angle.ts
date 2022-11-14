// import * as my from './extensions.ts'
import {range} from './extensions.ts'
import * as x from './test/test_wasm.ts'
export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
for (const i of range(1,100)){
  console.log("Add 2 + 3 =", add(2, i));
}
// }
