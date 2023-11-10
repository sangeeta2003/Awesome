import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text>FancyCard</Text>
      <View>
        <Image
        source={{
            uri:'https://picsum.photos/200/300'
        }}
        style={styles.cardimage}
        />
        <View style={styles.cardBody}>
<Text style={styles.cardTitle}>Hawamahal</Text>
<Text style={styles.cardLabel}>Pink city,jaypore</Text>
<Text style={styles.describition}>Mahla is placed in jeypre.it is so beautiful</Text>
<Text style={styles.footer}>bye bye</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardimage:{
width:100,
height:100,
    },
    cardBody:{
flex:1,
flexGrow :1,
paddingHorizontal  :12,
    },
    cardTitle:{
color:'#000000',
fontSize:22,
fontWeight:'bold',
marginBottom:6
    },
    cardLabel:{
color:'#000000',
fontSize:14,
marginBottom:6
    },
    describition:{
color:'#242B2E',
fontSize:12,
marginBottom:12,
flexShrink:1
    },
    footer:{
color:'#000000',
    }

})