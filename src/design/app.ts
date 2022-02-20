import { DesignEditor } from "./editor/designEditor";

export const start = (Cls: typeof DesignEditor) => {
  const app = new Cls();

  return app
}