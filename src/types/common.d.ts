type LibPermissionType = import('react-native-permissions').Permission;

type FileType = {
  uri: string;
  type: string;
  name: string;
};

type DropdownPickerType = {
  label: string;
  value: string;
};

type FilePickerType = {
  CAMERA;
  GALLERY;
  CANCEL;
};

type MultiplePermissionResType = {
  Permission: LibPermissionType;
  status: boolean;
};

/*
  type for common dropdown picker
 */
type MetaItem = {
  name: string;
  value: string;
};
