import React, {memo, useEffect, useState} from 'react';
import {Animated, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {AppColors, AppFontSizes, IcArrowDownBlue} from '../../constants';

import {AppRadioButton} from '../AppRadioButton';
import {AppText} from '../AppText';

import styles from './styles';

interface AppSinglePicker {
  labelText?: string;
  errorText?: string;
  data: DropdownPickerType[];
  value: string;
  testID?: string;
  errorTestID?: string;
  containerStyle?: ViewStyle;
  subContainerStyle?: ViewStyle;
  disable?: boolean;
  placeholderText: string;
  dropdownPosition?: 'top' | 'auto' | 'bottom' | undefined;
  isRightIconVisible?: boolean;
  selectedTextStyle?: TextStyle;
  activeColor?: string;
  placeHolderStyle?: TextStyle;
  inverted?: boolean;
  autoScroll?: boolean;
  onChange(values: DropdownPickerType): void;
  renderDropDownItemView?: (item: DropdownPickerType) => React.JSX.Element;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const AppSinglePicker = memo((props: AppSinglePicker) => {
  const {
    labelText,
    errorText,
    data,
    value,
    testID,
    errorTestID,
    containerStyle,
    subContainerStyle,
    disable = false,
    placeholderText,
    dropdownPosition,
    isRightIconVisible = true,
    selectedTextStyle,
    activeColor,
    placeHolderStyle,
    inverted,
    autoScroll,
    onFocus,
    onBlur,
    onChange,
    renderDropDownItemView,
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const spinValue = useState(new Animated.Value(0))[0]; // Makes animated value

  useEffect(() => {
    Animated.spring(spinValue, {
      toValue: !isFocused ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [isFocused, spinValue]);

  const spinDeg = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderDropdownItem = (item: DropdownPickerType) => {
    if (renderDropDownItemView) {
      return renderDropDownItemView(item);
    } else {
      let isSelected = false;
      if (value) {
        isSelected = value === item.value;
      }
      return (
        <View style={styles.itemContainer}>
          <AppRadioButton isSelected={isSelected} />
          <AppText
            text={item.label}
            fontSize={AppFontSizes[14]}
            
            fontColor={AppColors.black}
            containerStyle={styles.flex1}
          />
        </View>
      );
    }
  };

  const renderRightIcon = () => {
    if (isRightIconVisible) {
      return (
        <Animated.View
          style={[styles.pickerPadding, {transform: [{rotate: spinDeg}]}]}>
          <IcArrowDownBlue />
        </Animated.View>
      );
    } else {
      return <></>;
    }
  };

  const onFocusHandler = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const onBlurHandler = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View testID={testID} style={[styles.container, containerStyle]}>
      {labelText && (
        <Text>
          {labelText && (
            <AppText
              text={labelText}
              fontSize={AppFontSizes[14]}
              
              fontColor={AppColors.black}
            />
          )}
        </Text>
      )}
      <View style={[styles.subContainer, subContainerStyle]}>
        <Dropdown
          disable={disable}
          style={styles.dropdown}
          selectedTextStyle={[styles.pickerPadding, selectedTextStyle]}
          selectedTextProps={{numberOfLines: 1}}
          data={data}
          activeColor={activeColor}
          value={value}
          labelField="label"
          valueField="value"
          placeholder={placeholderText}
          placeholderStyle={[styles.placeHolderStyle, placeHolderStyle]}
          renderRightIcon={renderRightIcon}
          renderItem={renderDropdownItem}
          keyboardAvoiding={true}
          dropdownPosition={dropdownPosition}
          autoScroll={autoScroll}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChange}
          containerStyle={styles.pickerContainer}
          inverted={inverted}
        />
      </View>
      {errorText && (
        <AppText
          testID={errorTestID}
          text={errorText}
          fontSize={AppFontSizes[14]}
          
          fontColor={AppColors.red45}
          containerStyle={styles.errorTextStyle}
        />
      )}
    </View>
  );
});
