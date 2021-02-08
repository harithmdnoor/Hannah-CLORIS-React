import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity,ActivityIndicator, ScrollView, TextInput, Linking } from 'react-native';
import logo from "./assets/icon_white.png";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles.js";
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import HTML from "react-native-render-html";
import HTMLParser from 'fast-html-parser';



function Home({navigation}) {
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


function Results({route,navigation}){
  const { query } = route.params;
  var url = "https://hannah-cloris.azurewebsites.net/api/Concepts"
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var concept;
  var ttsDesriptionString;
  var conceptNotFound={
    description:"Concept Not Found"
  }; 
  useEffect(() => {
    fetch(url,{
      method:"GET"})
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  data.forEach(element => {
    if((element.name.toUpperCase()).includes(query.toUpperCase())){
      concept=element;
      ttsDesriptionString = HTMLParser.parse(concept.description).text;
    }
    else{
      concept = conceptNotFound;
    }
  });
  const onPress=()=>{
    if (concept.description =="Concept Not Found"){
      alert("Concept Not Found");
    }
    else{
      navigation.navigate('ShowMore',{object:concept});
    }
  }
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
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(ttsDesriptionString)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center'}}>
            <View style={styles.topPadding}></View>
            <Text style={styles.resultTitle}>{query}</Text>
            <View style={styles.middleRow}>
              <View style={styles.resultBackground2}>
              {isLoading ? <ActivityIndicator/> : (<HTML source={{ html: concept.description }}/>)}
                </View>
              <TouchableOpacity style= {styles.submitButton}
                      onPress = {onPress}>
                        <Text style = {styles.submitButtonText}> See More </Text>
                      </TouchableOpacity>
          </View>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}
function ShowMore({route,navigation}){
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
          <TouchableOpacity onPress = {() => navigation.navigate('Purpose',{object:object})}><Text style = {styles.submitButtonText}>Purpose</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity onPress = {() => navigation.navigate('Analogy',{object:object})}><Text style = {styles.submitButtonText}>Analogy</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity onPress = {() => navigation.navigate('HowItWorks',{object:object})}><Text style = {styles.submitButtonText}>How It Works</Text></TouchableOpacity>
        </View>
        <View style={styles.showMoreCards}>
          <TouchableOpacity onPress = {() => navigation.navigate('Links',{object:object})}><Text style = {styles.submitButtonText}>Links</Text></TouchableOpacity>
        </View>
       
        
      </View>
    </View>
  );
}

function Purpose({route,navigation}){
  const { object } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var ttsPurposeString = HTMLParser.parse(object.purpose).text;
 
  return(
    <View style={{backgroundColor:'#663399',flex:2}}>
            <View style={styles.resultContainer}>
              <View style={{flex:1,paddingLeft:15}}>
              <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('ShowMore')}/>
              </View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}>
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(ttsPurposeString)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center',marginTop:-100}}>
            <Text style={styles.resultTitle}>Purpose</Text>
            <ScrollView>
              <View style={styles.middleRow}>
                <View style={styles.resultBackground}>
                  <HTML source={{ html: object.purpose }}/>
                  </View>
              </View>
            </ScrollView>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}

function Analogy({route,navigation}){
  const { object } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var ttsAnalogyString = HTMLParser.parse(object.purpose).text;
 
  return(
    <View style={{backgroundColor:'#663399',flex:2}}>
            <View style={styles.resultContainer}>
              <View style={{flex:1,paddingLeft:15}}>
              <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('ShowMore')}/>
              </View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}>
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(ttsAnalogyString)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center',marginTop:-100}}>
            <Text style={styles.resultTitle}>Analogy</Text>
            <ScrollView>
              <View style={styles.middleRow}>
                <View style={styles.resultBackground}>
                  <HTML source={{ html: object.analogy }}/>
              </View>
              </View>
            </ScrollView>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}

function HowItWorks({route,navigation}){
  const { object } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var ttsHowItWorksString = HTMLParser.parse(object.purpose).text;
 
  return(
    <View style={{backgroundColor:'#663399',flex:2}}>
            <View style={styles.resultContainer}>
              <View style={{flex:1,paddingLeft:15}}>
              <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('ShowMore')}/>
              </View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}>
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(ttsHowItWorksString)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center',marginTop:-100}}>
            <Text style={styles.resultTitle}>How It Works</Text>
            <ScrollView>
              <View style={styles.middleRow}>
                <View style={styles.resultBackground}>
                  <HTML source={{ html: object.howItWorks }}/>
                  </View>
              </View>
            </ScrollView>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}

function Links({route,navigation}){
  const { object } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var ttsLinksString = HTMLParser.parse(object.purpose).text;
 
  return(
    <View style={{backgroundColor:'#663399',flex:2}}>
            <View style={styles.resultContainer}>
              <View style={{flex:1,paddingLeft:15}}>
              <Icon name="arrow-left" size={50} color="white"  onPress = {() => navigation.navigate('ShowMore')}/>
              </View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}></View>
              <View style={styles.buttonContainer}>
              <Icon name="volume-up" size={50}  color="white" onPress ={()=>Speech.speak(ttsLinksString)}/>
              </View>
            </View>
            <View style={{flex:2,alignItems: 'center',justifyContent: 'center',marginTop:-100}}>
            <Text style={styles.resultTitle}>How It Works</Text>
            <ScrollView>
              <View style={styles.middleRow}>
                <View style={styles.resultBackground}>
                  <HTML source={{ html: object.links }}/>
                  </View>
              </View>
            </ScrollView>
          <View style={styles.bottomPadding}></View></View>
          </View>
    )
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Results" component={Results} options={{headerShown:false}}/>
        <Stack.Screen name="Purpose" component={Purpose} options={{headerShown:false}}/>
        <Stack.Screen name="ShowMore" component={ShowMore} options={{headerShown:false}}/>
        <Stack.Screen name="Analogy" component={Analogy} options={{headerShown:false}}/>
        <Stack.Screen name="HowItWorks" component={HowItWorks} options={{headerShown:false}}/>
        <Stack.Screen name="Links" component={Links} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


