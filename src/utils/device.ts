import {Platform} from 'react-native';


/**
 * The function `getAndroidApiLevel` returns the Android API level as a number.
 * @returns The function `getAndroidApiLevel` returns the Android API level as a number. If
 * `Platform.Version` is a string, it converts it to a number using the unary plus operator (`+`).
 * Otherwise, it returns `Platform.Version` as is.
 */
const getAndroidApiLevel = (): number => {
  return typeof Platform.Version === 'string'
    ? +Platform.Version
    : Platform.Version;
};


export const DeviceUtils = {
  getAndroidApiLevel,
};
