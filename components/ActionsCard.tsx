import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionsCard() {
    function openwebsite(websitelink:string){
Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text >Blog Card</Text>
      <View style={[styles.card,styles.ElevatedCards]}>
<View style={styles.headingcontainer}>
<Text style={styles.headingText}>
    what's new in javascript-2021
</Text>
</View>
<Image
source={{uri:'https://picsum.photos/seed/picsum/200/300'}}
style={styles.cardImage}
/>
<View style={styles.bodycontainer}>
<Text numberOfLines={3}>
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.03-
</Text>
    </View>    
    <View style={styles.footerContainer}>
<TouchableOpacity
onPress={()=>openwebsite('https://www.google.com/search?q=tinyurl.com&sca_esv=581198566&rlz=1C1RXQR_enIN1026IN1026&sxsrf=AM9HkKlJsNqsZ-kDd0Ue7nRFD9lvdIyxbg%3A1699620849805&ei=8SdOZfLUMO_gseMPgoG1mAc&ved=0ahUKEwiykYWIvbmCAxVvcGwGHYJADXMQ4dUDCBA&uact=5&oq=tinyurl.com&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3Rpbnl1cmwuY29tMgsQABiKBRixAxiRAjIKEAAYgAQYFBiHAjIEEAAYAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIkNUBULYEWLXMAXAVeAKQAQSYAbwBoAGJGqoBBDAuMjO4AQPIAQD4AQGoAhTCAgQQABhHwgIHECMYigUYJ8ICBhAAGBYYHsICCBAAGIoFGIYDwgIHECMY6gIYJ8ICERAAGOMEGOkEGOoCGLQC2AEBwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAsICBBAjGCfCAggQABiKBRiRAsICBxAAGIoFGEPCAgsQABiABBixAxiDAcICDRAAGIoFGLEDGIMBGEPCAgUQLhiABMICCxAAGIoFGLEDGIMBwgIIEC4YgAQYsQPCAgcQLhiKBRgnwgIUEC4YigUYlwUY3AQY3gQY4ATYAQPCAg0QLhiKBRjHARjRAxhDwgILEC4YgAQYsQMYgwHCAhAQLhiKBRixAxjHARjRAxhDwgIKEAAYigUYsQMYQ8ICCBAAGIAEGLEDwgILEC4YgwEYsQMYgATCAgoQABiKBRixAxgKwgIOEAAYigUYsQMYgwEYkQLCAgcQABiABBgKwgIEEAAYHuIDBBgAIEGIBgGQBgi6BgYIARABGAG6BgYIAhABGAu6BgYIAxABGBQ&sclient=gws-wiz-serp')}
>
    <Text style={styles.sociallinks}>Read More</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>openwebsite('https://github.com/sangeeta2003')}
>
    <Text style={styles.sociallinks}>Follow me</Text>
</TouchableOpacity>



    </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:16,
        fontWeight:'600',
        paddingHorizontal:8,
        color:'#000',

    },
    card:{
width:350,
height:360,
borderRadius:6,
marginVertical:12,
marginHorizontal:16
    },
    ElevatedCards:{
backgroundColor:'#E07C24',
elevation:3,
shadowOffset:{
    width:1,
    height:1,
},
shadowColor:'#333',
shadowOpacity:0.4

    },
    headingcontainer:{
height:40,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
    },
    cardImage:{
height:190,
// width:300,
    },
    bodycontainer:{

    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    sociallinks:{
fontSize:16,
color:'#000000',
backgroundColor:'#FFF',
paddingHorizontal:20,
paddingVertical:6,
shadowOffset:{
    width:1,
    height:1,
},
shadowColor:'#333',
shadowOpacity:0.4

    },
    footconatiner:{


    }
})