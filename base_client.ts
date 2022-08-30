import { createClient, receive, send } from "./lib.ts";
import { Class } from "./classes.ts";
import { decodeClass } from "./utils.ts";
import { classes } from "./mod.ts";

export class BaseClient {
  private id: number;
  private running: boolean;
  private resolvers: Map<
    string,
    // deno-lint-ignore no-explicit-any
    { resolve: (v: any) => void; reject: (v: any) => void }
  >;
  handler?: (update: Class) => void | Promise<void>;

  constructor() {
    this.id = createClient();
    this.running = false;
    this.resolvers = new Map();
  }

  private async receive() {
    const d = await receive(10.0);
    return d ? d["@client_id"] == this.id ? d : null : d;
  }

  // deno-lint-ignore no-explicit-any
  async send(request: any) {
    const id = crypto.randomUUID();
    request["@extra"] = id;
    const promise = new Promise(
      (resolve, reject) => this.resolvers.set(id, { resolve, reject }),
    );
    send(this.id, request);
    return await promise;
  }

  async start() {
    this.running = true;
    while (this.running) {
      const d = await this.receive();
      if (d) {
        let decoded: classes.Class;
        try {
          decoded = decodeClass(d);
        } catch (_err) {
          continue;
        }
        if (d["@extra"]) {
          const resolver = this.resolvers.get(d["@extra"]);
          if (resolver) {
            if (decoded instanceof classes.Error) {
              resolver.reject(decoded);
            } else {
              resolver.resolve(decoded);
            }
          }
        } else if (this.handler) {
          this.handler(decoded);
        }
      }
    }
  }

  stop() {
    this.running = false;
  }
}
