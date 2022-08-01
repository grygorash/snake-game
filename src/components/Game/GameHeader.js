import { memo, useEffect, useMemo, useState } from 'react';

import { FINISHED, READY, STARTED } from 'constants/constants';

const GameHeader = ({ gameStatus, onGameStatus }) => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const counterInterval = setInterval(handleCounterInterval, 1000);

    function handleCounterInterval() {
      setCounter((counterState) => {
        if (counterState === 1) {
          clearInterval(counterInterval);
        }

        return counterState - 1;
      });
    }
  }, []);

  useEffect(() => {
    if (counter === 0) {
      onGameStatus(STARTED);
    }
  }, [counter]);

  const getHeaderText = useMemo(
    () => ({ [READY]: counter, [STARTED]: 'GO!', [FINISHED]: 'Game Over :( Press Enter' }),
    [counter],
  );

  return <h3 className="game__header">{getHeaderText[gameStatus]}</h3>;
};

export default memo(GameHeader);
