import {Platform} from 'react-native';
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';



import {DeviceUtils} from './device';
import {PermissionUtils} from './permissions';

/*
  camera permission handler for android and ios.
 */
const checkCameraPermission = async (): Promise<boolean> => {
  const cameraPermission = await PermissionUtils.requestSinglePermissionHandler(
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA,
  );
  return cameraPermission;
};

/*
  gallery permission handler for android based on api level (scope storage) and ios
 */
const checkGalleryPermission = async (): Promise<boolean> => {
  const cameraPermission = await PermissionUtils.requestSinglePermissionHandler(
    Platform.OS === 'android'
      ? DeviceUtils.getAndroidApiLevel() >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.PHOTO_LIBRARY,
  );
  return cameraPermission;
};

/*
  common options for image picker dialog.
 */
const commonPickerOption: ImageLibraryOptions = {
  mediaType: 'mixed',
  selectionLimit: 1,
};

/*
  utility function for getting the image from library with permissions handling.
 */
const launchLibraryUtil = (
  options?: ImageLibraryOptions,
): Promise<FileType[]> => {
  return new Promise((resolve, reject) => {
    checkGalleryPermission().then(hasGalleryPermission => {
      if (hasGalleryPermission) {
        launchImageLibrary({
          ...commonPickerOption,
          ...options,
        })
          .then(result => {
            if (result?.assets && result.assets.length > 0) {
              const fileList: FileType[] = result.assets.map((item: Asset) => {
                const file: FileType = {
                  uri:
                    Platform.OS === 'ios'
                      ? String(item?.uri).replace('file://', '') ?? ''
                      : item?.uri ?? '',
                  type: item?.type ?? '',
                  name: item?.fileName ?? '',
                };
                return file;
              });
              if (fileList && fileList.length > 0) {
                resolve(fileList);
              } else {
                reject(new Error('no image selected'));
              }
            } else {
              reject(new Error('no image selected'));
            }
          })
          .catch((err: Error) => {
            reject(new Error(err?.message ?? JSON.stringify(err)));
          });
      } else {
        reject(new Error('permission denied'));
      }
    });
  });
};

/*
  utility function for getting the image from camera with permissions handling.
 */
const launchCameraUtil = (options?: CameraOptions): Promise<FileType[]> => {
  return new Promise((resolve, reject) => {
    checkCameraPermission()
      .then(hasCameraPermission => {
        if (hasCameraPermission) {
          launchCamera({
            ...commonPickerOption,
            ...options,
          })
            .then(result => {
              if (result?.assets && result.assets.length > 0) {
                const fileList: FileType[] = result.assets.map(
                  (item: Asset) => {
                    const file: FileType = {
                      uri:
                        Platform.OS === 'ios'
                          ? String(item?.uri).replace('file://', '') ?? ''
                          : item?.uri ?? '',
                      type: item?.type ?? '',
                      name: item?.fileName ?? '',
                    };
                    return file;
                  },
                );
                if (fileList && fileList.length > 0) {
                  resolve(fileList);
                } else {
                  reject(new Error('no image selected'));
                }
              } else {
                reject(new Error('no image selected'));
              }
            })
            .catch((err: Error) => {
              reject(new Error(err?.message ?? JSON.stringify(err)));
            });
        } else {
          reject(new Error('permission denied'));
        }
      })
      .catch((err: Error) => {
        reject(new Error(err?.message ?? JSON.stringify(err)));
      });
  });
};

export const FilePickerUtils = {
  launchCameraUtil,
  launchLibraryUtil,
};
