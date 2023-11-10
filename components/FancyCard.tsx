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
<Text style={styles.describition}>Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a unique structure with a distinctive honeycomb-like façade. The palace is constructed of red and pink sandstone, reflecting the architectural style of the region.</Text>
<Text style={styles.footer}>12 min away</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardimage:{
// width:100,
height:190,
    },
    cardBody:{
flex:1,
flexGrow :1,
paddingHorizontal  :12,
backgroundColor:'#ffffff',
    },
    cardTitle:{
color:'#000000',
fontSize:22,
fontWeight:'bold',
marginBottom:6,
marginLeft:9,
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