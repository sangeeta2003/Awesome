import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
<Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
<Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
<Text>Green</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,

flexDirection:'row',
padding:8
    },
    card:{
        flex:1,
        height:100,
        width:100,
        borderRadius:8,
        margin:8,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'#FF0000'
    },
    cardTwo:{
        backgroundColor:'#0000FF'
    },
    cardThree:{
        backgroundColor:'#00FF00'
    }
})