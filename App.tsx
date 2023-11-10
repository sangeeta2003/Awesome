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
function App() {
  return(
    <SafeAreaView>
      <ScrollView>
      
        <Text>Hello world</Text>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <FancyCard/>
        </ScrollView>

      
    </SafeAreaView>
  )
}
export default App;
