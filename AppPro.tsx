import React from 'react';
import {
View,
Text,
StyleSheet,
useColorScheme
} from 'react-native';
function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(
<View style={StyleS.container}>
<Text style={isDarkMode?StyleS.whitetext :StyleS.darktext}>hello world</Text>
</View>
    
    

    )
}
const StyleS=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    whitetext:{
        color:'#ffffff',
    },
    darktext:{
        color:'#000000',
    }
})
export default AppPro;