import React from 'react';
import {
View,
Text,
SafeAreaView,
ScrollView
} from 'react-native';
import  FlatCards  from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionsCard from './components/ActionsCard';
function App() {
  return(
    <SafeAreaView>
      <ScrollView>
      
        <Text>Hello world</Text>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
       
        <ActionsCard/>
        </ScrollView>
        

      
    </SafeAreaView>
  )
}
export default App;
