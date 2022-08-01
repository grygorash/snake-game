import { memo, useState } from 'react';

import { getComponent, MENU } from 'constants/constants';
import 'app.scss';

const App = () => {
  const [viewComponent, setViewComponent] = useState(MENU);
  const Component = getComponent[viewComponent];

  return <Component onViewComponent={setViewComponent} />;
};

export default memo(App);
