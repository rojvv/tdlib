import { getJSON, toCString } from "./utils.ts";
import env from "./env.ts";

const lib = Deno.dlopen(
  env.TD_PATH,
  {
    td_create_client_id: { parameters: [], result: "i32" },
    td_receive: { parameters: ["f64"], result: "pointer", nonblocking: true },
    td_send: { parameters: ["i32", "pointer"], result: "void" },
    td_execute: { parameters: ["pointer"], result: "pointer" },
    td_set_log_message_callback: {
      parameters: ["i32", "pointer"],
      result: "void",
    },
  },
).symbols;

lib.td_execute(toCString(
  {
    "@type": "setLogVerbosityLevel",
    "new_verbosity_level": env.TD_LEVEL,
  },
));

// deno-lint-ignore no-explicit-any
export function execute(request: any) {
  return getJSON(lib.td_execute(toCString(request)) as bigint);
}

// deno-lint-ignore no-explicit-any
export function send(client: number, request: any) {
  lib.td_send(client, toCString(request));
}

export async function receive(timeout: number) {
  return getJSON(await lib.td_receive(timeout));
}

export function createClient() {
  return lib.td_create_client_id();
}
