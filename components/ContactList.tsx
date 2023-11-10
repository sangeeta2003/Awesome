import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contact=[
{
    uid:1,
    name:'Hitesh Choudhury',
    status:'Just an teacher',
    imageUrl:'https://www.istockphoto.com/photos/landscapes',
},
{
    uid:2,
    name:'Anurag Tiwari',
    status:'i love to code and Teach!',
    imageUrl:'https://www.pexels.com/photo/silhouette-photo-of-woman-against-during-golden-hour-39853/',
},
{
    uid:3,
    name:'sanket Singh',
    status:'Making your gpay smooth',
    imageUrl:'https://www.pexels.com/photo/photo-of-woman-raising-both-hands-1556691/',
}
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      
scrollEnabled={false}
>
    {contact.map(({uid,name,status,imageUrl})=>(
<View key={uid} style={styles.usercard}>
    <Image
    source={{
        uri:imageUrl
    }}
    style={styles.userImage}/>
    <Text style={styles.username}>{name}</Text>
    <Text style={styles.userstatus}>{status}</Text>
</View>
    )

    )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    container:{

    },
    usercard:{

    },
    userImage:{
width:60,
height:60,
borderRadius:30
    },
    username:{

    },
    userstatus:{

  }
})