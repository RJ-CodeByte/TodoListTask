import { useEffect, useMemo, useRef, useState } from "react";
import {Storage  } from "../../helpers";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppConstants, AppScreens } from "../../constants";
import { TextInput } from "react-native";
import {debounce} from 'lodash';
import { useAppDispatch, useAppSelector } from "../../store/store.index";
import { ITodo, todoDataSliceAction } from "../../store/todoSlice";

export const useHomeController = () =>{
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const dispatch = useAppDispatch();
    const todoList = useAppSelector(state => state.todoData.todos);
    const searchInputRef = useRef<TextInput | null>(null);
    const navigateToAddTask = ()=>{
        navigation.navigate(AppScreens.AddTaskScreen,{})
    }
    const [searchText, setSearchText] = useState<string>('');
    const [tasks, setTasks] = useState<ITodo[]>(todoList); 
    const [selectedStatus, setSelectedStatus] = useState<string>(''); // Status filter
    
    useEffect(() => {
          setTasks(todoList)
    }, [todoList])
    
/* check if selected status then filter status vise if status selected and search then search based on status 
    if no status then search based on search text
*/
    const filteredTasks = useMemo(() => {
      if(selectedStatus){
        if(searchText.length>0){
          return tasks.filter(
                (task) => task.status === selectedStatus &&
                  task.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  task.description.toLowerCase().includes(searchText.toLowerCase())
              );
        }else{
        return tasks.filter(
          (task) =>
            task.status === selectedStatus
        );
      }
      }
      else{
        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchText.toLowerCase()) ||
            task.description.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      
    }, [tasks, searchText,selectedStatus]);



 // Function to handle search
 const handleSearch = (text: string) => {
    setSearchText(text);
  };
  const onDeletePress = (id:string) =>{
    dispatch(todoDataSliceAction.deleteTask(id))
  }

  const onEditPress  = (id:string) =>{
    navigation.navigate(AppScreens.EditTaskScreen,{taskId:id})
  }
  /*
   * debounce function for text input search
   */
  const searchDebounceFunction = useRef(
    debounce(handleSearch, AppConstants.DEBOUNCE_DELAY),
  ).current;
  /**
   * Clear search query and filtered data
   */
  const clearSearch = () => {
    searchInputRef.current?.clear?.();
    searchDebounceFunction('');
  };

  const handleStatusChange = (status: DropdownPickerType) => {
    setSelectedStatus(status.value);
};

const onCancelHandler = () => {
    setSelectedStatus('');
}
    return {
        navigateToAddTask,
        searchInputRef,
        searchText,
        clearSearch,
        searchDebounceFunction,
        filteredTasks,
        selectedStatus,
        onDeletePress,
        onEditPress,
        handleStatusChange,
        onCancelHandler
    }
}