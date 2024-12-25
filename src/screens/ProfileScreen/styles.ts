import { StyleSheet } from "react-native";
import { AppSpacing } from "../../constants";

export const styles = StyleSheet.create({
    imgContainer:{
        width:AppSpacing[100],
        height:AppSpacing[100],
        borderRadius:AppSpacing[50],
        overflow:'hidden'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        rowGap:AppSpacing[10],
    },
    title:{
        textAlign:'center',
    }
})