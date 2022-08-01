import Game from 'components/Game/Game';
import Menu from 'components/Menu/Menu';
import Quit from 'components/Quit/Quit';
import Settings from 'components/Settings/Settings';

export const MENU = 'menu';
export const GAME = 'game';
export const SETTINGS = 'settings';
export const QUIT = 'quit';

export const RIGHT = 'right';
export const LEFT = 'left';
export const UP = 'up';
export const DOWN = 'down';

export const PLUS = 'plus';
export const MINUS = 'minus';

export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const ENTER = 'Enter';

export const READY = 'ready';
export const STARTED = 'started';
export const FINISHED = 'finished';

export const getComponent = {
  [MENU]: Menu,
  [SETTINGS]: Settings,
  [GAME]: Game,
  [QUIT]: Quit,
};

export const defaultMenuItems = [
  { label: 'New Game', component: GAME, isActive: true },
  { label: 'Settings', component: SETTINGS, isActive: false },
  { label: 'Quit', component: QUIT, isActive: false },
];

export const defaultButtons = [{ label: 'Yes', isActive: false }, { label: 'No', isActive: true }];

export const defaultGameMap = [
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 't', '1', 'h', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'a', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'w',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
];

export const getClassName = {
  w: 'wall',
  h: 'head',
  t: 'tail',
  a: 'apple',
  e: 'empty',
};

export const getNewDirection = {
  [ARROW_DOWN]: DOWN,
  [ARROW_UP]: UP,
  [ARROW_LEFT]: LEFT,
  [ARROW_RIGHT]: RIGHT,
};
