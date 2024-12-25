import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatingButton from './components/FloatingButton';
import {
  AppButton,
  AppContainer,
  AppFlatList,
  AppHeader,
  AppKeyboardAvoidSafeAreaContainer,
  AppSafeAreaContainer,
  AppSinglePicker,
  AppText,
  AppTextRow,
  AppTouchable,
  SearchBar,
  SearchTextInput,
} from '../../components';
import {styles} from './styles';
import {useHomeController} from './controller';
import {
  AppColors,
  IcCheckBlue,
  IcCircleClose,
  IcFilter,
  IcInputSearchBlue,
  IcUnCheckBlack,
} from '../../constants';
import {ITodo} from '../../store/todoSlice';
import {getPickerTypeList, keyExtractorHandler} from '../../utils';
import {statusList} from '../../constants/app.dummy.data';

export const HomeScreen = () => {
  const {
    searchInputRef,
    filteredTasks,
    searchText,
    selectedStatus,
    searchDebounceFunction,
     handleStatusChange,
    onDeletePress,
    clearSearch,
    navigateToAddTask,
    onEditPress,
    onCancelHandler
  } = useHomeController();
  const renderHeader = () => (
    <>
 
      <View style={styles.pickerView}>

      
      <AppSinglePicker
        data={getPickerTypeList(statusList)}
        value={selectedStatus}
        onChange={ handleStatusChange}
        placeholderText={'Select Status'}
        containerStyle={styles.pickerContainer}
        />
        <AppButton
                text={'Cancel'}
                onPress={onCancelHandler}
                textColor={AppColors.black}
                containerStyle={styles.buttonStyle}
              />
              </View>
    </>
  );

  const renderItem = (item: ITodo) => {
    return (
      <View style={[styles.itemContainer, !item.isActive && styles.disableBg]}>
        <AppTextRow title={'title'} subTitle={item.title} />
        <AppTextRow title={'description'} subTitle={item.description} />
        <AppTextRow title={'comments'} subTitle={item.comments} />
        <AppTextRow title={'status'} subTitle={item.status} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppButton
            disabled={!item.isActive}
            text="Edit"
            containerStyle={styles.btnStyle}
            onPress={onEditPress.bind(null, item.id)}
          />
          <AppButton
            text="Delete"
            containerStyle={styles.btnStyle}
            onPress={onDeletePress.bind(null, item.id)}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <AppTouchable style={styles.checkBoxButton}>
            {item.isActive ? <IcCheckBlue /> : <IcUnCheckBlack />}
          </AppTouchable>
          <AppText text="IsActive" />
        </View>
      </View>
    );
  };

  return (
    <AppSafeAreaContainer>
           <AppHeader text="Home" />
<SearchBar onCancelPress={clearSearch}>
  <SearchTextInput
    ref={searchInputRef}
    leftIcon={IcInputSearchBlue}
    rightIcon={IcCircleClose}
    rightIconEnabled={searchText.length > 0}
    rightIconPress={clearSearch}
    inputProps={{
      placeholder: 'Search',
      onChangeText: searchDebounceFunction,
    }}
  />
</SearchBar>
      <AppFlatList
      ListHeaderComponent={renderHeader}
        data={filteredTasks}
        keyExtractor={keyExtractorHandler}
        contentContainerStyle={styles.listcontainer}
        renderItem={({item}) => renderItem(item as ITodo)}
      />
  
      <FloatingButton onPress={navigateToAddTask} />
    </AppSafeAreaContainer>
  );
};
