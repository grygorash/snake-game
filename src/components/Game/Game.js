import useGame from 'hooks/useGame';
import { memo } from 'react';
import { map } from 'lodash';

import GameHeader from 'components/Game/GameHeader';
import GameItem from 'components/Game/GameItem';
import { getClassName } from 'constants/constants';
import 'components/Game/game.scss';

const Game = ({ onViewComponent }) => {
  const { gameStatus, setGameStatus, gameMap } = useGame(onViewComponent);

  return (
    <div className="game container container__md">
      <GameHeader gameStatus={gameStatus} onGameStatus={setGameStatus} />
      <div className="game__container">
        {map(gameMap, (value, key) =>
          <GameItem key={key} className={getClassName[value] || 'snake'} />)}
      </div>
    </div>
  );
};

export default memo(Game);
