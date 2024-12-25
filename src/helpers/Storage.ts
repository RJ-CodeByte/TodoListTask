import {MMKV} from 'react-native-mmkv';

import { AppStorageKeys} from '../constants';

/* This code snippet is creating a new instance of the `MMKV` class from the `react-native-mmkv`
library and exporting it as `storage`. The `MMKV` class is used for key-value storage in React
Native applications. */
export const storageInstance = new MMKV({
  id:'default',
  encryptionKey: 'super-secret-key',
});

/**
 * The function `getAccessToken` retrieves the access token from storage in TypeScript.
 * @returns The `getAccessToken` function is returning a string or `undefined`.
 */
const getAccessToken = (): string | undefined => {
  return storageInstance.getString(AppStorageKeys.ACCESS_TOKEN);
};

/**
 * The function `getDeviceToken` retrieves the device token from storage, returning it as a string or
 * undefined.
 * @returns The `getDeviceToken` function is returning a string value or `undefined`.
 */
const getDeviceToken = (): string | undefined => {
  return storageInstance.getString(AppStorageKeys.DEVICE_TOKEN);
};

/**
 * The function `getUserData` retrieves user data from storage and returns it as a `LoginResponseType`
 * object or `null`.
 * @returns The `getUserData` function returns either a `LoginResponseType` object or `null`.
 */
const getUserData = (): LoginResponseType | null => {
  const userData = storageInstance.getString(AppStorageKeys.USER_DATA);
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
};

/**
 * The function `setAccessToken` stores a given string value in the app storage using a specific key.
 * @param {string} value - A string value that represents the access token to be set.
 */
const setAccessToken = (value: string) => {
  storageInstance.set(AppStorageKeys.ACCESS_TOKEN, value);
};

/**
 * The function `setDeviceToken` stores a device token value in the storage using a specific key.
 * @param {string} value - The `value` parameter in the `setDeviceToken` function is a string that
 * represents the device token that you want to store in the app's storage.
 */
const setDeviceToken = (value: string) => {
  storageInstance.set(AppStorageKeys.DEVICE_TOKEN, value);
};

/**
 * The function `setUserData` stores the user data in local storage after converting it to a JSON
 * string.
 * @param {LoginResponseType} value - The `value` parameter in the `setUserData` function is of type
 * `LoginResponseType`, which is the type of data that will be stored in the user data.
 */
const setUserData = (value: LoginResponseType) => {
  storageInstance.set(AppStorageKeys.USER_DATA, JSON.stringify(value));
};

/**
 * The function `clearStorage` clears all items from the storage.
 */
const clearStorage = () => {
  storageInstance.clearAll();
};


export const Storage = {
  getAccessToken,
  getDeviceToken,
  getUserData,
  setAccessToken,
  setDeviceToken,
  setUserData,
  clearStorage,
};
