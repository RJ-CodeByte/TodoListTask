import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Keyboard } from "react-native";
import { AppConstants, AppScreens } from "../../constants";
import { delay, FilePickerUtils, log } from "../../utils";
import { editTaskSchema } from "../../validation/addTask";
import { useAppDispatch, useAppSelector } from "../../store/store.index";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ITodo, todoDataSliceAction } from "../../store/todoSlice";
import Loader from "../../helpers/Loader";

export const useEditTaskController = () =>{
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, AppScreens.EditTaskScreen>>();
  const dispatch = useAppDispatch();
  const todoList  = useAppSelector((state) => state.todoData.todos);
  const formik = useFormik({
    initialValues: {
      title:'',
      description:'',
      comments:'',
      isActive:false,
      status:'',
    },
    validationSchema: editTaskSchema,
    onSubmit: values => onSubmitHandler(values),
  });
  const [openedImage, setOpenedImage] = useState<FileType | null>(null);

      const {taskId} = route.params;
      
      const myTask = useMemo(() => todoList.find((todo) => todo.id === taskId) ?? null, [todoList, taskId]);

      useEffect(() => {
        if(myTask){
          formik.setValues({
            title:myTask.title ?? '',
            description:myTask.description ?? '',
            comments:myTask.comments ?? '',
            isActive:myTask.isActive ?? '',
            status:myTask.status ?? '',
          })
          setOpenedImage(myTask.file ? myTask.file  : null);
        }

      }, [myTask])
      

      const onSubmitHandler = (values:editTaskFormParamType) =>{
        Keyboard.dismiss();
        if(formik.isValid){
          const payload:ITodo={
            id: taskId, 
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
            dispatch(todoDataSliceAction.editTask(payload))
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