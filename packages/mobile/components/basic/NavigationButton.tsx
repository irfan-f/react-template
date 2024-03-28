import Button from './Button';

import React from 'react';

export type NavigationButtonProps = {
  /**
   * The title of the button.
   */
  title: string;
  /**
   * The navigation destination of the button.
   */
  destination: string;
  /**
   * The reference of the navigation container.
   */
  navigationRef?: any;
};

function NavigationButton({
  title,
  destination,
  navigationRef,
}: NavigationButtonProps): React.JSX.Element {
  return (
    <Button
      title={title}
      onPress={() => navigationRef.current?.navigate(destination)}
      testID={`navigation-button-${destination.toLowerCase()}`}
    />
  );
}

export default NavigationButton;
