export type FooterProps = {
  /**
   * The reference of the navigation container.
   */
  navigationRef?: React.MutableRefObject<any> | null;
  /**
   * The name of the initial Stack.
   */
  initialStack: string;
  /**
   * An Array of each Stack that is a Page in the app.
   */
  stacks: {
    name: string;
    id: string;
  }[];
};
