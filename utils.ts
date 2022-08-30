import { Class } from "./classes.ts";
import * as classes from "./classes.ts";

// deno-lint-ignore no-explicit-any
export function toCString(object: any) {
  const string = JSON.stringify(object);
  return Deno.UnsafePointer.of(new TextEncoder().encode(`${string}\0`));
}

export function getJSON(pointer: number | bigint) {
  if (pointer) {
    const string = new Deno.UnsafePointerView(pointer as bigint).getCString();
    try {
      return JSON.parse(string);
    } catch (_err) {
      //
    }
  }
  return null;
}

// deno-lint-ignore no-explicit-any
export function decodeClass(d: any) {
  const params = Object.fromEntries(
    Object.entries(d)
      .filter((v) => !v[0].startsWith("@")),
  );
  for (const k in params) {
    if (
      typeof params[k] === "object" &&
      // deno-lint-ignore no-explicit-any
      typeof (params[k] as any)["@type"] === "string"
    ) {
      params[k] = decodeClass(params[k]);
    }
  }
  const name = d["@type"][0].toUpperCase() + d["@type"].slice(1);
  // @ts-ignore: should be fine
  return new classes[name](params);
}

export function encodeClass(c: Class) {
  const entries = Object.entries(c);
  entries.push(["@type", c.constructor.name]);
  return entries;
}
