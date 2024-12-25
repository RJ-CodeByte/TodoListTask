import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// Define the props type for the returned object
type TabStackController = {
  redirection: (screen: string) => void;
};

/**
 * Custom hook for managing navigation and other functionalities related to TabStack.
 * @returns {void} - Object containing functions for navigation and other functionalities.
 * @exports useTabStackController - Hook for managing TabStack functionalities.
 */
export const useTabStackController = (
  props: BottomTabBarProps,
): TabStackController => {
  const redirection = (screen: string) => {
    props.navigation.navigate(screen);
  };

  return {redirection};
};
