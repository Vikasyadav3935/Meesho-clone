import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Address from './Address';
import Cart from './Cart';
import Payment from './Payment';
import Summary from './Summary';

 const Stack=createStackNavigator();
const App=()=>{
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen  name='Summary' component={Summary} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default App