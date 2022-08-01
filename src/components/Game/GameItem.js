import { memo } from 'react';
import classNames from 'classnames';

const GameItem = ({ className }) =>
  <div className={classNames(`game__container--item ${className}`)} />;

export default memo(GameItem);
