import * as yup from 'yup';



export const addTaskSchema = yup.object<AddTaskFormParamType>().shape({
  title: yup.string().required('Please enter title'),
       description: yup.string().required('Please enter description'),
       comments: yup.string().required('Please enter comments'),
       isActive:yup.boolean().required('Please enter isActive'), 
       status:yup.string().required('Please Select status'),
});
export const editTaskSchema = yup.object<editTaskFormParamType>().shape({
  title: yup.string().required('Please enter title'),
       description: yup.string().required('Please enter description'),
       comments: yup.string().required('Please enter comments'),
       isActive:yup.boolean().required('Please enter isActive'), 
       status:yup.string().required('Please Select status'),
});
