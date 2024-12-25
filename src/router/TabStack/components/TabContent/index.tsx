import React, {memo, useEffect, useMemo, useState} from 'react';
import {Keyboard, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  AppColors,
  AppScreens,
  AppSpacing,
  IcHome,
  IcProfile,
} from '../../../../constants';

import {useTabStackController} from '../../controller';
import {TabItem} from '../TabItem';

interface TabContentProps {
  navigationProps: BottomTabBarProps;
}
/*
  Tab Content represent a bottom tab bar view component
 */
export const TabContent = memo((props: TabContentProps) => {
  const {navigationProps} = props;

  const selectedIndex = navigationProps.state.index;

  const {bottom} = useSafeAreaInsets();
  const {redirection} = useTabStackController(navigationProps);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

  const style = useMemo<ViewStyle>(() => {
    return {marginBottom: bottom !== 0 ? bottom : AppSpacing[10]};
  }, [bottom]);

  const extraContainerStyle = useMemo<ViewStyle>(() => {
    return {display: keyboardStatus ? 'none' : 'flex'};
  }, [keyboardStatus]);

  /*
    attached a keyboard listener for hide tab content when user typing on keyboard.
  */
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, extraContainerStyle]}>
        <View style={[styles.tabContainer, style]}>
          <TabItem
            onPress={redirection.bind(null, AppScreens.HomeScreen)}
            activeIcon={IcHome}
            inActiveIcon={IcHome}
            isActive={selectedIndex === 0}
            text={'Home'}
          />
          <TabItem
            onPress={redirection.bind(null, AppScreens.ProfileScreen)}
            activeIcon={IcProfile}
            inActiveIcon={IcProfile}
            isActive={selectedIndex === 1}
            text={'Profile'}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.gray2A,
    borderTopLeftRadius: AppSpacing[24],
    borderTopRightRadius: AppSpacing[24],
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: AppSpacing[20],
  },
  mainContainer: {
    backgroundColor: AppColors.black0D,
  },
});
