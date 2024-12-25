/**
 * Represents the parameter list for the authentication stack navigator.
 */
type AuthStackParamList = {
  LoginScreen: {};
};

/**
 * Represents the parameter list for the AppStack navigator.
 */
type AppStackParamList = {
  AuthStack: {};
  MainStack: {};
};

/**
 * Represents the parameter list for the MainStack navigator.
 */
type MainStackParamList = {
  TabStack: {};
  AddTaskScreen: {};
  EditTaskScreen:{taskId:string};
};

/**
 * Represents the parameter list for the tab stack navigator.
 */
type TabStackParamList = {
  HomeScreen: {};
  ProfileScreen: {};
};
