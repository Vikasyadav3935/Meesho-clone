
import {View,Text, Image,StyleSheet,ScrollView} from 'react-native';
import { List } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'

const Profile=()=>{
    return (
        <ScrollView style={{backgroundColor:'#dcdee0'}}>
       <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
        <Image  source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}} style={{width:50,height:50,borderRadius:40,margin:20}} />
        <Text>
           +91 687712911
        </Text>
         
       </View>
       <View style={{height:50,marginVertical:10,alignItems:'center',flexDirection:'row',backgroundColor:'white'}}>
        <Feather name='headphones' size={25}  style={{marginHorizontal:20}}  />
        <View >
            <Text>Help Center</Text>

        </View>
       </View>
       <List.Item style={styles.item}
    title="Change language"
    
    left={props => <List.Icon style={styles.list} icon="google-translate" />}
    
  />
  <List.Item  title="My Banks & UPI Details"  
   style={styles.item}
  left={props=><List.Icon style={styles.list}  icon="bank"  />}
  />
  <List.Item  title="My Shared Products" style={styles.item}
    left={props=><List.Icon style={styles.list}  icon="share-variant-outline"  />}
  />

  <List.Item style={styles.item}
   title='My Viewed Products'
   left={props=><List.Icon style={styles.list}  icon="clock-time-eight-outline"  />}
  />
  <List.Item style={styles.item}
   title='My Payments'
   left={props=><List.Icon style={styles.list}  icon="credit-card"  />}
  />
  <List.Item style={styles.item}
   title='Refer & Earn'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
  <List.Item style={styles.item}
   title='Spins'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item style={styles.item}
   title='My Followed Shops'
   left={props=><List.Icon style={styles.list}  icon="storefront-outline"  />}
  />
   <List.Item style={styles.item}
   title='Meesho Credits'
   left={props=><List.Icon style={styles.list}  icon="wallet-outline"  />}
  />

<List.Item style={styles.item}
   title='Entreprenuer Learning Centre'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item style={styles.item}
   title='Business Logo'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item style={styles.item}
   title='Become a Supplier'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item style={styles.item}
   title='Setting'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item style={styles.item}
   title='Rate Meesho'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />
   <List.Item  style={styles.item}
   title='Legal and Policies'
   left={props=><List.Icon style={styles.list}  icon="gift-outline"  />}
  />

        </ScrollView>
    )
}

export default Profile;

const styles=StyleSheet.create({
    list:{
        marginLeft:23
    },
    item:{
        backgroundColor:'white',
        marginTop:1,
        paddingVertical:16
    }
})