import { cleanEnv, num, str } from "https://deno.land/x/envalid@0.1.1/mod.ts";

export default cleanEnv(Deno.env.toObject(), {
  TD_PATH: str({
    default: {
      linux: "libtdjson.so",
      darwin: "libtdjson.dylib",
      windows: "libtdjson",
    }[Deno.build.os],
  }),
  TD_LEVEL: num({ default: 0 }),
});
