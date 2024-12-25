import {useFormik} from 'formik';
import {Alert, Keyboard} from 'react-native';
import {LoginSchema} from '../../validation';
import {AppScreens, SECRET_KEY} from '../../constants';
import {sign, decode} from 'react-native-pure-jwt';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import Loader from '../../helpers/Loader';
import {log} from '../../utils';
import {Storage} from '../../helpers';
import {useEffect, useState} from 'react';

export const useLoginController = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: (values: LoginFormParamsType) => onSubmitHandler(values),
  });

  const verifyLoginToken = async (dummyToken: string) => {
    try {
      if (dummyToken) {
        const decoded = await decode(dummyToken, SECRET_KEY, {
          skipValidation: true,
        });
        console.log(
          '🚀 ~ verifyLoginToken ~ decoded:',
          decoded,
          formik.values.email,
        );

        if (
          decoded.payload.email === formik.values.email &&
          decoded.payload.password === formik.values.password
        ) {
          Alert.alert('Login Successful', 'Welcome back!');
          navigateToHome();
        } else {
          Alert.alert('Login Failed', 'Invalid email or password.');
        }
      }
    } catch (error) {
      log(String(error));
    }
  };

  /**
   * Navigate the mains screen and clear the stack.
   */
  const navigateToHome = () => {
    if (navigation) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: AppScreens.MainStack, params: {}}],
        }),
      );
    }
  };

  const onSubmitHandler = async (values: LoginFormParamsType) => {
    Keyboard.dismiss();
    if (formik.isValid) {
      Loader.showLoader();
      try {
        const dummyToken = await sign(
          {email: 'dummy@yopmail.com', password: 'Dummy@123'},
          SECRET_KEY,
          {alg: 'HS256'},
        );

        if (dummyToken) {
          Storage.setUserData({email: values.email});
          Storage.setAccessToken(dummyToken);
          verifyLoginToken(dummyToken);
        }
      } catch (err) {
        log(String(err));
        Alert.alert('Error', 'Failed to generate token.');
      } finally {
        Loader.hideLoader();
      }
    }
  };
  const onLoginPress = () => {
    formik.handleSubmit();
  };
  return {formik, onLoginPress};
};
