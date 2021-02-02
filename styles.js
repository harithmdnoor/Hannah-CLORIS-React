import { StyleSheet } from 'react-native';
export default StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#663399',
      alignItems: 'center',
      justifyContent: 'center',
      color: "white"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      paddingBottom:10
    },
    captionText1:{
      flex:0.25,
      marginTop:10,
      fontSize:10,
      color: "white",
    },
    captionText2:{
      flex:0.25,
      fontSize:10,
      color: "white",
    },
    mainLogo:{
      height:150,
      width:107
    },
    input: {
      margin: 15,
      padding:5,
      height: 40,
      backgroundColor:"white",
      width:300,
      borderRadius:15
    },
    submitButton: {
      flexDirection: "row",
      backgroundColor:"white",
      marginHorizontal:100,
      height: 40,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center"
    },
    submitButtonText:{
      color: 'black',
    },
    topPadding:{
      flex:2
    },
    middleRow:{
      flex:1
    },
    bottomPadding:{
      flex:6
    },
    resultText:{
      color:"black"
    },
    resultBackground:{
      backgroundColor:"white",
      borderRadius:15,
      flexDirection:"row",
      padding:10,
      marginHorizontal:10
    },
    resultTitle:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      paddingBottom:10,
      textTransform:"uppercase"
    },
    arrowUp:{
    },
    volumeUp:{
    },
    bars:{
      alignSelf: 'flex-start',
      marginTop: 15,
      padding:15,
      paddingTop:30
    }
  });
  