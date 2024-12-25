import { StyleSheet } from "react-native";
import { AppSpacing, SCREEN_WIDTH } from "../../constants";

export const styles = StyleSheet.create({
    imgContainer:{
        width:SCREEN_WIDTH-AppSpacing[40],
        height:SCREEN_WIDTH-AppSpacing[100],
        overflow:'hidden'
    },
    container:{
        flex:1,
        paddingHorizontal:AppSpacing[20],
        rowGap:AppSpacing[10],
    },
    title:{
        textAlign:'center',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        paddingHorizontal:AppSpacing[10],
        columnGap: AppSpacing[10],
      },
    checkBoxButton: {
        alignSelf:'center'
      },btnContainer:{
        marginBottom:AppSpacing[20],
        marginHorizontal:AppSpacing[20]
      }

})