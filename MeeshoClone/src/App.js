import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Account from './Account';
import Cart from './Cart';
import Home from './Home';


import Profile from './Profile';

export default function App() {
  return (
    <View style={{marginTop:30,}}>
   
      <StatusBar style="auto" />
      {/* <Profile/> */}
     {/* <Account/> */}
     {/* <Home/> */}
     <Cart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
