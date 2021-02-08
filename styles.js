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
    resultContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#663399',
    },
    buttonContainer: {
      flex: 1,
    },
    submitButton: {
      flexDirection: "row",
      backgroundColor:"white",
      marginHorizontal:100,
      marginVertical:20,
      height: 40,
      borderRadius:15,
      borderColor:"grey",
      borderWidth:3,
      alignItems:"center",
      justifyContent:"center",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2
    },
    submitButtonText:{
      color: 'black',
      fontSize:20
    },
    iconView:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      flex:1
    },
    topPadding:{
      flex:1
    },
    middleRow:{
      flex:3
    },
    bottomPadding:{
      flex:6
    },
    resultText:{
      color:"black"
    },
    resultBackground:{
      backgroundColor:"white",
      flexDirection:"row",
      flexWrap:"wrap",
      paddingRight:20,
      paddingLeft:10
    },
    resultBackground2:{
      backgroundColor:"white",
      borderRadius:15,
      flexDirection:"row",
      padding:10,
      marginHorizontal:10,
      flexWrap:"wrap",
    },
    resultTitle:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      paddingBottom:10,
      alignItems:"center",
      textTransform:"uppercase"
    },
    bars:{
      alignSelf: 'flex-start',
      marginTop: 15,
      padding:15,
      paddingTop:30
    },
    showMoreCards:{
      backgroundColor:"white",
      borderRadius:15,
      flexDirection:"column",
      padding:10,
      marginTop:20,
      marginHorizontal:10,
      flexWrap:"wrap",
      flexDirection: "row",
      backgroundColor:"white",
      height: 50,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2
    }
  });
  