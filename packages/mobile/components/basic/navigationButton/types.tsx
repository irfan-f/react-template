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
  /**
   * The total number of stacks in the app.
   */
  totalStacks: number;
  /**
   * The options of the button.
   */
  options: NavigationButtonOptions;
};

export type NavigationButtonOptions = {
  /**
   * Whether the button has a right border.
   * Default is true.
   */
  border?: boolean;
  /**
   * If the button should function as a pressable navigation button or just a static button, alternatively provide a function to run on press.
   * Default is true.
   */
  onPress: boolean;
  /**
   * Function to run on button press.
   */
  onPressFunction?: () => void;
  /**
   * The initial state of the button.
   */
  initialState?: string;
  /**
   * The testID of the button.
   */
  testID?: string;
};
