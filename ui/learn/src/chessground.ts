import { Config as CgConfig } from 'chessground/config';
import { h, VNode } from 'snabbdom';
import { RunCtrl } from './run/runCtrl';

export type CgMove = {
  orig: Key;
  dest: Key;
};

export default function (ctrl: RunCtrl): VNode {
  return h('div.cg-wrap', {
    hook: {
      insert: vnode => {
        const el = vnode.elm as HTMLElement;
        ctrl.setChessground(site.makeChessground(el, makeConfig()));
      },
      destroy: () => ctrl.chessground!.destroy(),
    },
  });
}

const makeConfig = (): CgConfig => ({
  fen: '8/8/8/8/8/8/8/8',
  blockTouchScroll: true,
  coordinates: true,
  movable: { free: false, color: undefined },
  drawable: { enabled: false },
  draggable: { enabled: true },
  selectable: { enabled: true },
});
