import React from 'react';
import { View } from 'react-native';
import {
  AppButton,
  AppImagePlaceholder,
  AppKeyboardAvoidSafeAreaContainer,
  AppSinglePicker,
  AppText,
  AppTextInput,
  AppTouchable
} from '../../components';
import { IcCheckBlue, IcUnCheckBlack } from '../../constants';
import { statusList } from '../../constants/app.dummy.data';
import { getPickerTypeList } from '../../utils';
import { useAddTaskController } from './controller';
import { styles } from './styles';

export const AddTaskScreen = () => {
  const {formik,openMedia,onStatusChange,onSubmitTask,onCheckboxPress,openedImage} = useAddTaskController();
  return (
    <AppKeyboardAvoidSafeAreaContainer 
    scrollChildren={
      <View style={styles.container}>
      <AppTextInput
                labelText="Title"
                placeholder="Enter Your title"
                value={formik.values.title}
                onChangeText={formik.handleChange('title')}
                errorText={
                  formik.touched.title && formik.errors.title
                    ? formik.errors.title
                    : ''
                }
                autoCapitalize='none'
              />
              <AppTextInput
                labelText="Description"
                placeholder="Enter Your Description"
                value={formik.values.description}
                onChangeText={formik.handleChange('description')}
                errorText={
                  formik.touched.description && formik.errors.description
                    ? formik.errors.description
                    : ''
                }
                autoCapitalize='none'
              />
              <AppTextInput
                labelText="Comments"
                placeholder="Enter Your Comments"
                value={formik.values.comments}
                onChangeText={formik.handleChange('comments')}
                errorText={
                  formik.touched.comments && formik.errors.comments
                    ? formik.errors.comments
                    : ''
                }
               multiline={true}
                autoCapitalize='none'
              />
              {/* checkbox */}
              <View style={styles.checkBoxContainer}>
              <AppText text='IsActive'/>
              <AppTouchable
               style={styles.checkBoxButton}
               onPress={onCheckboxPress}>
               {formik.values.isActive ? ( 
                 <IcCheckBlue /> 
                ) : (
                 <IcUnCheckBlack />
                )}
             </AppTouchable>
            </View>
            <AppSinglePicker
           data={getPickerTypeList(statusList)}
           value={formik.values.status}
           onChange={onStatusChange}
           labelText={'Status'}
           placeholderText={'Select Status'}
           errorText={formik.errors.status ?? ''}
         />
         {openedImage && openedImage?.uri &&(
                   <AppImagePlaceholder source={openedImage?.uri} 
                   imageContainerStyle={styles.imgContainer}
                   resizeMode='contain'
                   />
                 ) }
                 <AppButton text="Choose File" onPress={openMedia} /> 
       </View>
    }> 

<AppButton text="Submit" onPress={onSubmitTask} containerStyle={styles.btnContainer}/>
     
    </AppKeyboardAvoidSafeAreaContainer>
  );
};
