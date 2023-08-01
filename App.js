// import { Text, View,Image ,TouchableOpacity,Dimensions} from 'react-native'
// import React, { Component } from 'react'
// import { launchCamera,launchImageLibrary } from 'react-native-image-picker'
// import NativeAsyncSQLiteDBStorage from 'react-native/Libraries/Storage/NativeAsyncSQLiteDBStorage';
// const options ={
//   title:'Select app'
// }
// export default class App extends Component {
// constructor(props){
//   super(props);
//   this.state ={
//     resourcePath: '',
//   }
// }
// UploadImage =()=>{
//   console.log("Upload :->"+ this.state.uri )
//   launchImageLibrary(options,(response) =>{
//     console.log( "response" +  JSON.stringify(response))
//    if(response.didCancel)
//    {
//      console.log('User cancelled image picker',response.didCancel)
//    }
//    else if(response.errorCode){
//     console.log('ImagePicker Error: ', response.errorCode);
//    }
//   else if(response.errorMessage ){
//     console.log('User tapped custom button: ', response.errorMessage);
//   }
//   else {
            
//             this.setState({
//               resourcePath
//             });
//           }
//   })
// }
//   render() {
//     const{resourcePath} =this.state
//     return (
//       <View style={{flex:1}}>
//             <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center',flexDirection:'column'}}>
//                <Image style={{height:250 ,width:250}} source={{uri:resourcePath.assets[0].uri}}/>
//                <Text style={{ alignItems: 'center' }}>
// {resourcePath.uri}
//          </Text>
// <TouchableOpacity onPress={()=>this.UploadImage()}>
// <View style={{padding:'2.5%', width:Dimensions.get('screen').width/1.2,backgroundColor:'grey',top:5}}>
// <Text style={{textAlign:'center',color:'white'}}>Upload  Image  </Text>
// </View>
// </TouchableOpacity>
//             </View>


//       </View>
//     )
//   }
// }
// // App.js
// // App.js
// // import React from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// // import * as ImagePicker from "react-native-image-picker"
// // export default class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       resourcePath: {},
// //     };
// //   }
// //   selectFile = () => {
// //     var options = {
// //       title: 'Select Image',
// //       customButtons: [
// //         { 
// //           name: 'customOptionKey', 
// //           title: 'Choose file from Custom Option' 
// //         },
// //       ],
// //       storageOptions: {
// //         skipBackup: true,
// //         path: 'images',
// //       },
// //     };
// //     ImagePicker.launchImageLibrary(options, res => {
// //       console.log('Response = ', res);
// //       if (res.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (res.error) {
// //         console.log('ImagePicker Error: ', res.error);
// //       } else if (res.customButton) {
// //         console.log('User tapped custom button: ', res.customButton);
// //         alert(res.customButton);
// //       } else {
// //         let source = res;
        
// //         this.setState({
// //           resourcePath: source,
// //         });
// //       }
// //     });
// //   };
// //   // Launch Camera
// //   cameraLaunch = () => {
// //     let options = {
// //       storageOptions: {
// //         skipBackup: true,
// //         path: 'images',
// //       },
// //     };
// //     ImagePicker.launchCamera(options, (res) => {
// //       // console.log('Response = ', res);
// //       if (res.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (res.error) {
// //         console.log('ImagePicker Error: ', res.error);
// //       } else if (res.customButton) {
// //         console.log('User tapped custom button: ', res.customButton);
// //         alert(res.customButton);
// //       } else {
// //         const source = { uri: res.uri };
// //         console.log('response', JSON.stringify(res));
// //         this.setState({
// //           filePath: res,
// //           fileData: res.data,
// //           fileUri: res.uri
// //         });
// //       }
// //     });
// //   }
// //   imageGalleryLaunch = () => {
// //     let options = {
// //       storageOptions: {
// //         skipBackup: true,
// //         path: 'images',
// //       },
// //     };
// //     ImagePicker.launchImageLibrary(options, (res) => {
// //       // console.log('Response = ', res);
// //       if (res.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (res.error) {
// //         console.log('ImagePicker Error: ', res.error);
// //       } else if (res.customButton) {
// //         console.log('User tapped custom button: ', res.customButton);
// //         alert(res.customButton);
// //       } else {
// //         const source = { uri: res.uri };
// //         // console.log('response', JSON.stringify(res));
// //         console.log("Resource path :-> " +filePath )
// //         this.setState({
// //           filePath: res,
// //           fileData: res.data,
// //           fileUri: res.uri
// //         });
// //       }
// //     });
// //   }  
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <View style={styles.container}>
// //           <Image
// //             source={{
// //               uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
// //             }}
// //             style={{ width: 100, height: 100 }}
// //           />
// //           <Image
// //             source={{ uri: this.state.resourcePath.uri }}
// //             style={{ width: 200, height: 200 }}
// //           />
// //           <Text style={{ alignItems: 'center' }}>
// //             {this.state.resourcePath.uri}
// //           </Text>
// //           <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
// //               <Text style={styles.buttonText}>Select File</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
// //               <Text style={styles.buttonText}>Launch Camera Directly</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
// //               <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     );
// //   }
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 30,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: '#fff'
// //   },
// //   button: {
// //     width: 250,
// //     height: 60,
// //     backgroundColor: '#3740ff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 4,
// //     marginBottom:12    
// //   },
// //   buttonText: {
// //     textAlign: 'center',
// //     fontSize: 15,
// //     color: '#fff'
// //   }
// // });
import React,{useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
  
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
  
import { launchImageLibrary } from 'react-native-image-picker';
  
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const [pickerResponse, setPickerResponse] = useState(null);
  
  const openGallery = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, setPickerResponse);
  };
  
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title="Pick from Gallery" onPress={openGallery} />
      {
        uri && (
          <Image source={{uri}} style=
            {{height:400, width:400,margin:20}}>
          </Image>
        )
      }
    </SafeAreaView>
  );
};
  
export default App;