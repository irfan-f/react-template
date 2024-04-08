export type ButtonProps = {
  /**
   * The title of the button.
   */
  title?: string;
  /**
   * The icon of the button.
   */
  icon?: string;
  /**
   * The onPress function of the button.
   */
  onPress: () => void;
  /**
   * The testID of the button.
   */
  testID?: string;
  /**
   * The style of the button.
   * Options ... Pending options ....
   */
  style?: null | 'circle';
  /**
   * The number of buttons in the navbar.
   * Default is 0.
   */
  navbarCount?: number;
  /**
   * The border of the button.
   * Default is 'none'.
   * Options are 'none', 'full', or an array containing one or several of 'Left', 'Right', 'Top', and 'Bottom'.
   */
  border?: 'none' | 'full' | ('Left' | 'Right' | 'Top' | 'Bottom')[];
  /**
   * The fill of the button.
   * Default is 'solid'.
   * Options are 'solid', 'outline', or 'clear'.
   */
  fill?: 'solid' | 'outline' | 'clear';
  /**
   * State of the button.
   * Default is 'enabled'.
   * Options are 'enabled', 'disabled', or 'active'.
   */
  state?: 'enabled' | 'disabled' | 'active';
};
