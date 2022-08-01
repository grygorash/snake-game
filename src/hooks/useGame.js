import { useEffect, useMemo, useState } from 'react';
import { filter, findIndex, includes, map } from 'lodash';

import {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  MENU,
  READY,
  STARTED,
  FINISHED,
  ENTER,
  PLUS,
  MINUS,
  defaultGameMap,
  getNewDirection,
} from 'constants/constants';

export default function(onViewComponent) {
  const [gameMap, setGameMap] = useState(defaultGameMap);
  const [gameStatus, setGameStatus] = useState(READY);
  const [direction, setDirection] = useState(RIGHT);

  const handleNewAppleIndex = () => {
    const randomIndex = Math.floor(Math.random() * gameMap.length);

    if (gameMap[randomIndex] === 'e') {
      return randomIndex;
    }

    return handleNewAppleIndex();
  };

  const handleNextIndex = (headIndex, index) => ({ [PLUS]: headIndex + index, [MINUS]: headIndex - index });

  const handleGameMap = (operand, index) => {
    const headIndex = findIndex(gameMap, (v) => v === 'h');
    const tailIndex = findIndex(gameMap, (v) => v === 't');
    const nextIndex = handleNextIndex(headIndex, index)[operand];
    const nextValue = gameMap[nextIndex];

    if (includes(['w', 't'], nextValue) || /^\d+$/.test(gameMap[nextIndex])) {
      setGameStatus(FINISHED);

      return;
    }

    const snakeBody = filter(gameMap, (v) => /^\d+$/.test(v));
    const lastSnakeBodyIndex = findIndex(gameMap, (v) => v === Math.max.apply(Math, snakeBody).toString());

    if (nextValue === 'e') {
      setGameMap((gameMapState) => map(gameMapState, (v, i) => {
        if (i === tailIndex) {
          return 'e';
        }

        if (i === lastSnakeBodyIndex) {
          return 't';
        }

        if (i === nextIndex) {
          return 'h';
        }

        if (i === headIndex) {
          return '1';
        }

        if (/^\d+$/.test(gameMap[i]) && i !== 1) {
          return (+v + 1).toString();
        }

        return v;
      }));
    }

    if (nextValue === 'a') {
      const newAppleIndex = handleNewAppleIndex();
      setGameMap((gameMapState) => map(gameMapState, (v, i) => {
        if (i === newAppleIndex) {
          return 'a';
        }

        if (i === nextIndex) {
          return 'h';
        }

        if (i === headIndex) {
          return '1';
        }

        if (/^\d+$/.test(gameMap[i]) && i !== 1) {
          return (+v + 1).toString();
        }

        return v;
      }));
    }
  };

  const handleSnakeRight = () => handleGameMap(PLUS, 1);

  const handleSnakeLeft = () => handleGameMap(MINUS, 1);

  const handleSnakeDown = () => handleGameMap(PLUS, 20);

  const handleSnakeUp = () => handleGameMap(MINUS, 20);

  const getSnakeAction = useMemo(
    () => ({ [RIGHT]: handleSnakeRight, [LEFT]: handleSnakeLeft, [UP]: handleSnakeUp, [DOWN]: handleSnakeDown }),
    [direction, gameMap],
  );

  const handleSnakeByDirection = () => getSnakeAction[direction]();

  const handleKeyDown = ({ key }) => {
    if (key === ENTER && gameStatus === FINISHED) {
      onViewComponent(MENU);
      return;
    }

    const newDirection = getNewDirection[key];
    if (newDirection) {
      if (
        (newDirection === LEFT && direction === RIGHT)
        || (newDirection === RIGHT && direction === LEFT)
        || (newDirection === DOWN && direction === UP)
        || (newDirection === UP && direction === DOWN)
      ) {
        return;
      }

      setDirection(newDirection);
    }
  };

  useEffect(() => {
    const gameInterval = setInterval(handleGameInterval, 100);

    function handleGameInterval() {
      if (gameStatus === STARTED) {
        handleSnakeByDirection();
      }
    }

    if (gameStatus === FINISHED) {
      clearInterval(gameInterval);
    }

    return () => clearInterval(gameInterval);
  }, [gameStatus, gameMap]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameStatus]);

  return { gameStatus, setGameStatus, gameMap };
}
