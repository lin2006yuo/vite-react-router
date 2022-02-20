import { MOVE_CHECK_MS } from "./constant/editor";
import UIElement from "./element/baseElement/UIElement";
import _ from 'lodash-es';
import { Mouse } from "./event/domEventHandler";

interface MoveSet {
  fun: () => void; // TODO
  context: any; // TODO
  xy: any; // TODO
}

export class BaseLayout extends UIElement {
  __firstMove: Set<MoveSet>;

  __moves: Set<MoveSet>

  __ends: Set<MoveSet>

  lastPos: Mouse


  protected initialize(): void {
    this.__initBodyMoves();
  }

  private __initBodyMoves() {
    this.__firstMove = new Set();
    this.__moves = new Set();
    this.__ends = new Set();

    this.__modifyBodyMoveSecond(MOVE_CHECK_MS)
  }

  private __modifyBodyMoveSecond(ms = 0) {
    const wrapperLoopBodyMoves = ms === 0 ? this.__loopBodyMoves.bind(this) : _.debounce(this.__loopBodyMoves.bind(this), ms)
    wrapperLoopBodyMoves()
  }

  private __loopBodyMoves() {
    console.log(11)
    requestAnimationFrame(this.__loopBodyMoves.bind(this))
  }
}