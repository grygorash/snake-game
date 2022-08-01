import { memo, useState } from 'react';

import Menu from 'components/Menu/Menu';
import Settings from 'components/Settings/Settings';
import Game from 'components/Game/Game';
import Quit from 'components/Quit/Quit';
import { GAME, MENU, QUIT, SETTINGS } from 'constants/constants';
import "app.scss";

const getComponent = {
  [MENU]: Menu,
  [SETTINGS]: Settings,
  [GAME]: Game,
  [QUIT]: Quit,
};

const App = () => {
  const [viewComponent, setViewComponent] = useState('menu');
  const Component = getComponent[viewComponent];

  return <Component onViewComponent={setViewComponent} />;
};

export default memo(App);
