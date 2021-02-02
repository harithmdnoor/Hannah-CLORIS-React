import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Text, Image, View, TouchableOpacity, TextInput, Linking } from 'react-native';
import logo from "./assets/icon_white.png";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles.js";
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';



function HomeScreen({navigation}) {
  const [text, setText] = useState('');
  const onPress = () => {
    if (text!="") {
    navigation.navigate("Results",{query:text});
  } else {
    alert('Please Input Text!');
  }}
  
    return(
      <View style={styles.container}>
         <View style={styles.bars}>
              <Icon name="bars" size={50} color="white" onPress = {() =>navigation.navigate("Settings") }/>
          </View>
      <View style={styles.topPadding}></View>
      <Text style={styles.titleText}>CYBER SECURITY PRO</Text>
      <Image style={styles.mainLogo} source={logo}/>
      <Text style={styles.captionText1}>A Hannah-CLORIS project</Text>
      <Text style={styles.captionText2}>to make concepts easy to learn </Text>
      <View style={styles.middleRow}>
        <TextInput style={styles.input} underlineColorAndroid = "transparent"
               placeholder = "Concept"
               placeholderTextColor = "#808080"
               autoCapitalize = "none"
               value={text}
               onChangeText={(newValue)=>setText(newValue)}></TextInput>
               <View>
               <TouchableOpacity style= {styles.submitButton}
               onPress = {onPress}>
                 <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>
               </View>
      </View>
      <View style={styles.bottomPadding}></View>
    </View>
    );
}


function ResultsScreen({route,navigation}){
  const { query } = route.params;
  var url = "https://hannah-cloris.com/?Category=&ConceptName="+query;
  var x;
  async function loadGraphicCards() {
    const response = await fetch(url);   // fetch page
    const htmlString = await response.text();  // get response text
    
  }
  fetch(url).then((resp)=>{ return resp.text() }).then(()=>{ x })
  console.log(x);
  const text = "In cybersecurity, a Trojan or Trojan Horse is a set of code that disguises itself as a legitimate program. When activated by a victim, the malicious part of the code will reside in the victim's computer memory and perform malicious acts such as deleting files or stealing information and send back to its creator." 
  

  return(
      <View style={styles.container}>
        <View style={[{alignItems:'center', flexDirection:'row' }]}>
            <Icon name="arrow-left" size={50} style={[{marginRight:'auto'}]} color="white" onPress = {() => navigation.navigate('Home')}/>
            <Icon name="volume-up" size={50} style={[{marginLeft:'auto'}]} color="white" onPress ={()=>Speech.speak(text)}/>
        </View>
      <View style={styles.topPadding}></View>
      <Text style={styles.resultTitle}>{query}</Text>
      <View style={styles.middleRow}>
        <View style={styles.resultBackground}>
          <Text style={styles.resultText}>{text}</Text>
        </View>
        <TouchableOpacity style= {styles.submitButton}
               onPress = {() => {Linking.openURL({url}.url)}}>
                 <Text style = {styles.submitButtonText}> See More </Text>
               </TouchableOpacity>
      </View>
      <View style={styles.bottomPadding}></View>
    </View>
    
    )
}
function SettingScreen({navigation}){
  return(
    <View style={styles.container}>
       <View style={styles.bars}>
            <Icon name="arrow-left" size={50} color="white" onPress = {() => navigation.navigate('Home')}/>
        </View>
    <View style={styles.topPadding}></View>
    <Text style={styles.titleText}>Settings</Text>
    <Image style={styles.mainLogo} source={logo}/>
    
    
    <View style={styles.bottomPadding}></View>
  </View>
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


