import { memo, useEffect, useMemo, useState } from 'react';
import { map, findIndex } from 'lodash';

import MenuItem from 'components/Menu/MenuItem';
import { ARROW_DOWN, ARROW_UP, ENTER, defaultMenuItems } from 'constants/constants';
import 'components/Menu/menu.scss';
import logo from 'assets/img/logo.png';

const Menu = ({ onViewComponent }) => {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);

  const handleActiveIndex = () => findIndex(menuItems, { isActive: true });

  const activeIndex = useMemo(handleActiveIndex, [menuItems]);

  const handleActiveItemChange = (newIndex) => setMenuItems((menuItemsState) =>
    map(menuItemsState, (props, index) => ({ ...props, isActive: index === newIndex })),
  );

  const handleArrowDown = () => {
    const newIndex = menuItems[activeIndex + 1] ? activeIndex + 1 : 0;

    handleActiveItemChange(newIndex);
  };

  const handleArrowUp = () => {
    const newIndex = menuItems[activeIndex - 1] ? activeIndex - 1 : menuItems.length - 1;

    handleActiveItemChange(newIndex);
  };

  const handleEnter = () => onViewComponent(menuItems[activeIndex].component);

  const getKeyAction = { [ARROW_DOWN]: handleArrowDown, [ARROW_UP]: handleArrowUp, [ENTER]: handleEnter };

  const handleKeyDown = ({ key }) => getKeyAction[key]?.();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuItems]);

  return (
    <div className="menu container container__sm">
      <img src={logo} alt="logo" />
      {map(menuItems, ({ component, ...props }) =>
        <MenuItem key={component} {...props} />)}
    </div>
  );
};

export default memo(Menu);
