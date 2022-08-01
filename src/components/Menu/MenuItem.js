import { memo } from 'react';
import classNames from 'classnames';

const MenuItem = ({ label, isActive }) =>
  <div className={classNames('menu__item', { active: isActive })}>
    {label}
  </div>;

export default memo(MenuItem);
