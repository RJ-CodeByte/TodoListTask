import { StyleSheet } from "react-native";
import { AppSpacing } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:AppSpacing[10],
        justifyContent:'center',
        rowGap:AppSpacing[20]
    }
})