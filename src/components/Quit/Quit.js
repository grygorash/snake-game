import { memo, useEffect, useMemo, useState } from 'react';
import { map } from 'lodash';

import QuitButton from 'components/Quit/QuitButton';
import { defaultButtons, MENU } from 'constants/constants';
import 'components/Quit/quit.scss';

const Quit = ({ onViewComponent }) => {
  const [buttons, setButtons] = useState(defaultButtons);

  const handleActiveButtonChange = (newIndex) => setButtons((buttonsState) =>
    map(buttonsState, (props, index) => ({ ...props, isActive: newIndex === index })),
  );

  const handleArrowLeft = () => handleActiveButtonChange(0);

  const handleArrowRight = () => handleActiveButtonChange(1);

  const handleEnter = () => {
    if (buttons[0].isActive) {
      window.close();

      return;
    }

    onViewComponent(MENU);
  };

  const getKeyAction = { ArrowLeft: handleArrowLeft, ArrowRight: handleArrowRight, Enter: handleEnter };

  const handleKeyDown = ({ key }) => getKeyAction[key]?.();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buttons]);

  return (
    <div className="quit container container__sm">
      <h3>Are you sure you want to leave the game?</h3>
      <div className="quit__actions">
        {map(buttons, (props, key) => <QuitButton key={key} {...props} />)}
      </div>
    </div>
  );
};

export default memo(Quit);
