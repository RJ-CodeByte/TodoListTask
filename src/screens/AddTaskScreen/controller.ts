import { useFormik } from "formik";
import { useState } from "react";
import { Keyboard } from "react-native";
import { AppConstants } from "../../constants";
import { delay, FilePickerUtils, generateId, log } from "../../utils";
import { addTaskSchema } from "../../validation/addTask";
import { useAppDispatch } from "../../store/store.index";
import { ITodo, todoDataSliceAction } from "../../store/todoSlice";
import Loader from "../../helpers/Loader";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useAddTaskController = () =>{
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();
    const [openedImage, setOpenedImage] = useState<FileType | null>(null);
    const formik = useFormik({
        initialValues: {
       title:'',
       description:'',
       comments:'',
       isActive:false,
       status:'',
        },
        validationSchema: addTaskSchema,
        onSubmit: values => onSubmitHandler(values),
      });

      const onSubmitHandler = async(values:AddTaskFormParamType) =>{
        Keyboard.dismiss();
        if(formik.isValid){
          const payload:ITodo={
            id: generateId(), // Generate a unique random ID
            title: values.title,
            description: values.description,
            status: values.status,
            isActive: values.isActive,
            comments: values.comments,
          }
          if(openedImage){
            payload.file = openedImage;
          }
          Loader.showLoader();
          dispatch(todoDataSliceAction.addTask(payload));
          Loader.hideLoader();
          navigation.goBack();
          
        }
      }

    const openMedia = async () => {
        await delay(AppConstants.MODEL_DELAY);
        const file = await FilePickerUtils.launchLibraryUtil({
          mediaType: 'photo',
          selectionLimit: 1,
        });
        if (file?.length > 0) {
          log('file', file?.[0]);
          setOpenedImage(file?.[0]);
        }
      };

      const  onStatusChange = (value:DropdownPickerType) =>{
            formik.setFieldValue('status',value.value);
      }

      const onSubmitTask = ()=>{
        formik.handleSubmit();
      }
      const onCheckboxPress = ()=>{
        formik.setFieldValue('isActive',!formik.values.isActive);
      }
    return {
        openMedia,
        onStatusChange,
        onSubmitTask,
        onCheckboxPress,
        openedImage,
        formik,
    }
}