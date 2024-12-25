import { StyleSheet } from "react-native";
import { AppColors, AppSpacing } from "../../constants";

export const styles = StyleSheet.create({
    listcontainer:{
        flexGrow:1,
        rowGap:AppSpacing[20],
        paddingHorizontal:AppSpacing[20],
        paddingVertical:AppSpacing[20]
    },itemContainer:{
        borderWidth:1,
        borderRadius:AppSpacing[10],
        paddingVertical:AppSpacing[10],
        paddingHorizontal:AppSpacing[10],
    },Container:{
        flex:1,
    },
    disableBg:{
        backgroundColor:AppColors.greyE8
    },
    btnStyle:{
        marginTop:AppSpacing[10],
        paddingVertical:AppSpacing[10],
        paddingHorizontal:AppSpacing[20],
    }, checkBoxContainer: {
        flexDirection: 'row',
        columnGap: AppSpacing[10],
      },
    checkBoxButton: {
        alignSelf:'center'
      },
      pickerContainer:{
        
        maxHeight:AppSpacing[50],
    },
      pickerView:{
      flexDirection:'row',
      columnGap:AppSpacing[10],
    },buttonStyle:{
            backgroundColor: AppColors.white,
            paddingHorizontal: 0,
    }
})