/* AppImage with Loader image component */
import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  type ImageSourcePropType,
  ImageStyle,
  View,
  type ViewStyle,
} from 'react-native';
import FastImage, {
  ImageStyle as FastImageStyle,
  ResizeMode,
} from 'react-native-fast-image';

import {AppColors, AppPngImages} from '../../constants';
import {isFalsyValue} from '../../utils';

import styles from './styles';

/* The `interface IAppImageLoader` is defining the shape of the props that can be passed to the
`AppImageLoader` component. It specifies the following properties: */
interface IAppImageLoader {
  source: string;
  resizeMode?: ResizeMode;
  imageStyle?: FastImageStyle;
  imageContainerStyle?: ViewStyle;
  placeHolderImgStyle?: ImageStyle;
  placeholderImage?: ImageSourcePropType;
  loaderColor?: string;
  placeholderImageResizeMode?: ImageResizeMode;
  testID?: string;
}

/* The code is defining a React component called `AppImageLoader`. It is a memoized functional
component that takes in a set of props defined by the `IAppImageLoader` interface. */
export const AppImageLoader = memo((props: IAppImageLoader) => {
  const {
    imageStyle,
    source,
    imageContainerStyle,
    testID,
    placeholderImage = AppPngImages.IcPlaceholder,
    placeholderImageResizeMode = 'contain',
    resizeMode = 'contain',
    loaderColor = AppColors.greyE8,
    placeHolderImgStyle,
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const placeHolderImageStyle: ImageStyle = useMemo(() => {
    return {
      ...styles.placeholderStyle,
      ...placeHolderImgStyle,
      display: hasError ? 'flex' : 'none',
    };
  }, [placeHolderImgStyle, hasError]);

  const extraLoaderStyle: ViewStyle = useMemo(() => {
    return {
      ...styles.loaderStyle,
      display: isLoading ? 'flex' : 'none',
    };
  }, [isLoading]);

  const mergedImageStyle: FastImageStyle = useMemo(() => {
    return {
      ...imageStyle,
      flex: 1,
    };
  }, [imageStyle]);

  const url: string = useMemo(() => {
    return isFalsyValue(source) ? 'dummy.jpg' : source;
  }, [source]);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onLoadStart = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
  }, []);

  const onError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  return (
    <View
      testID={testID}
      key={source}
      style={[styles.imageContainerStyle, imageContainerStyle]}>
      <ActivityIndicator
        color={loaderColor}
        size={'large'}
        style={extraLoaderStyle}
      />
      <Image
        resizeMode={placeholderImageResizeMode}
        style={placeHolderImageStyle}
        source={placeholderImage}
      />
      <FastImage
        source={{uri: url}}
        style={mergedImageStyle}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        resizeMode={resizeMode}
        onError={onError}
      />
    </View>
  );
});
