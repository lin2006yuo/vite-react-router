
import BaseEventHandler from "./baseEventHandler";
import EventUtils from './utils'

export type Mouse = {
  x: number;
  y: number;
};

interface EMouseMouse extends MouseEvent {
  xy: Mouse
  $dt: any;
}

interface EventObject {
}

export interface EventCallback {
  (e: MouseEvent, dt: any, xy: Mouse): void
}

export default class DomEventHandler extends BaseEventHandler {
  makeDefaultCallback(eventObject: EventObject, callback: EventCallback) {
    return (e: EMouseMouse) => {
      const returnValue = this.runEventCallback(e, eventObject, callback)
      return returnValue
    }
  }

  runEventCallback(e: EMouseMouse, eventObject: EventObject, callback: EventCallback) {
    e.xy = EventUtils.posXY(e)
    const returnValue = callback(e, e.$dt, e.xy)

    return returnValue
  }
}