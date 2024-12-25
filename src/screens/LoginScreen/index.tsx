import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppButton,
  AppKeyboardAvoidSafeAreaContainer,
  AppTextInput,
} from '../../components';
import {styles} from './styles';
import {useLoginController} from './controller';

export const LoginScreen = () => {
  const {formik, onLoginPress} = useLoginController();
  return (
    <AppKeyboardAvoidSafeAreaContainer>
      <View style={styles.container}>
        <AppTextInput
          labelText="Email"
          placeholder="Enter Your email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          errorText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''
          }
          autoCapitalize='none'
        />
        <AppTextInput
          labelText="Password"
          placeholder="Enter Your Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          errorText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''
          }
          isPassword={true}
          autoCapitalize='none'
        />
        <AppButton text="Login" onPress={onLoginPress} />
      </View>
    </AppKeyboardAvoidSafeAreaContainer>
  );
};
