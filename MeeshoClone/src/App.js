import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Account from './Account';
import Address from './Address';
import Cart from './Cart';
import CartStack from './CartStack';
import Home from './Home';
import Payment from './Payment';


import Profile from './Profile';
import Summary from './Summary';

export default function App() {
  return (
    <View style={{marginTop:30,}}>
   
      <StatusBar style="auto" />
      {/* <Profile/> */}
     {/* <Account/> */}
     {/* <Home/> */}
     {/* <Cart/> */}
     {/* <Address/> */}
     {/* <CartStack/> */}
     {/* <Payment/> */}
     <Summary/>
     
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
