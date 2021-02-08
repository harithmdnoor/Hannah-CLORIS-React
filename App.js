import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity,ActivityIndicator, FlatList, TextInput, Linking } from 'react-native';
import logo from "./assets/icon_white.png";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles.js";
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import HTML from "react-native-render-html";



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
        <View style={{flex:3}}></View>
         {/* <View style={styles.bars}>
              <Icon name="bars" size={50} color="white" onPress = {() =>navigation.navigate("Settings") }/>
          </View> */}
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
  var url = "https://hannah-cloris.azurewebsites.net/api/Concepts"
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var concept;
  useEffect(() => {
    fetch(url,{
      method:"GET"})
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data.toString());
  data.forEach(element => {
    if((element.name.toUpperCase()).includes(query.toUpperCase())){
      console.log(element);
      concept=element;
    }
  });
  return(
    <View style={{backgroundColor:'#663399',flex:2}}>
            <View style={styles.resultContainer}>
              <View style={{flex:1,paddingLeft:15}}>
              <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('Home')}/>
              </View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}>
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(concept.description)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center'}}>
            <View style={styles.topPadding}></View>
            <Text style={styles.resultTitle}>{query}</Text>
            <View style={styles.middleRow}>
              <View style={styles.resultBackground}>
              {isLoading ? <ActivityIndicator/> : (<HTML source={{ html: concept.description }}/>)}
                </View>
              <TouchableOpacity style= {styles.submitButton}
                      onPress = {() => navigation.navigate('ShowMore',{object:concept})}>
                        <Text style = {styles.submitButtonText}> See More </Text>
                      </TouchableOpacity>
          </View>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}
function ShowMoreScreen({route,navigation}){
  const { object } = route.params;

  return(
    <View style={{backgroundColor:"#663399",flex:2}}>
       <View style={styles.resultContainer}>
          <View style={{flex:1,paddingLeft:15}}>
            <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('Results')}/>
          </View>
      </View>
      <View style={{flex:1}}></View>
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.resultTitle}>{object.name}</Text>
      </View>
      <View style={{flex:4}}>
      <View style={styles.showMoreCards}>
          <TouchableOpacity><Text>Purpose</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity><Text>Analogy</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity><Text>How It Works</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity><Text>Links</Text></TouchableOpacity>
        </View>
       
        
      </View>
    </View>
  );
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
        <Stack.Screen name="ShowMore" component={ShowMoreScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


