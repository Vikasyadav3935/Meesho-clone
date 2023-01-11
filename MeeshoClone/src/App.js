import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import database from "@react-native-firebase/database";
import{useEffect, useState} from 'react'
import MainNavigator from './Navigatores/MainNavigator';
import data from '../../MeeshoClone/data.json'
import firestore from "@react-native-firebase/firestore";
//   "datac":["Sarees", "Jewellery", "Dresses", "Mens Top Were", "Beauty and health", "Bags and Footwear", "Home and Kitchen"]
//     ]

export default function App() {
  

    


  
 

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
