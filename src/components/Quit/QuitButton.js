import { memo } from 'react';
import classNames from 'classnames';

const QuitButton = ({ label, isActive }) =>
  <button
    key={label}
    className={classNames('button', { active: isActive })}
  >
    {label}
  </button>;

export default memo(QuitButton);
