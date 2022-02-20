import { DesignEditor } from "../designEditor"

export default class BaseEventHandler {
  $editor: DesignEditor

  constructor(editor: DesignEditor) {
    this.$editor = editor
  }
}