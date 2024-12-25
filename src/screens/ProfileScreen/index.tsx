import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppHeader,
  AppImageLoader,
  AppSafeAreaContainer,
  AppText,
} from '../../components';
import {AppConstants} from '../../constants';
import {styles} from './styles';
import { useProfileController } from './controller';

export const ProfileScreen = () => {
  const {email} = useProfileController();
  return (
    <AppSafeAreaContainer>
      
      <View style={styles.container}>
        <AppText text='Profile' containerStyle={styles.title}/>
      <AppImageLoader
        source={AppConstants.IMG_URL}
        imageContainerStyle={styles.imgContainer}
        resizeMode='cover'
        />
           <AppText text={email} containerStyle={styles.title}/>
        </View>
    </AppSafeAreaContainer>
  );
};
