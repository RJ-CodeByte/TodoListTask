import React, {
  forwardRef,
  memo,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

interface AppModalProps {
  cancelable?: boolean;
  children?: React.JSX.Element;
  containerStyle?: ViewStyle;
  subContainerStyle?: ViewStyle;
  setPropsData?: (values: unknown) => void;
}

export interface RefAppModalProps {
  open: (values?: unknown) => void;
  close: () => void;
}

// design for reusable modal with transparent backdrop and common open and close function.
export const AppModal = memo(
  forwardRef((props: AppModalProps, ref: Ref<RefAppModalProps | undefined>) => {
    const {
      cancelable = true,
      containerStyle,
      subContainerStyle,
      setPropsData,
      children = <></>,
    } = props;

    const [isModelVisible, setIsModelVisible] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      // methods connected to `ref`
      open: values => open(values),
      close: () => close(),
    }));

    const open = useCallback((values: unknown) => {
      if (values && setPropsData) {
        setPropsData(values);
      }
      setIsModelVisible(true);
    }, []);

    const close = useCallback(() => {
      setIsModelVisible(false);
    }, []);

    const onCancelableClose = useCallback(() => {
      if (cancelable) {
        setIsModelVisible(false);
      }
    }, [cancelable]);

    return (
      <Modal
        animationType="fade"
        transparent={true}
        collapsable={true}
        visible={isModelVisible}
        onRequestClose={onCancelableClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={styles.keyboardAvoidContainer}>
          <TouchableWithoutFeedback onPress={onCancelableClose}>
            <View style={[styles.modalContainer, containerStyle]}>
              <TouchableWithoutFeedback>
                <View style={[styles.container, subContainerStyle]}>
                  {children}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    );
  }),
);
