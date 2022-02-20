import EventMachine from "../../event/eventMachine";

export default abstract class UIElement extends EventMachine {
  constructor() {
    super()
  }

  protected abstract initialize(): void
}