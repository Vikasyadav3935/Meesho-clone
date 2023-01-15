import {View,Text,StyleSheet,} from 'react-native';
import { List } from 'react-native-paper';

const Payment=()=>{
    return (
        <View>
        <View style={{borderWidth:1,borderColor:'#00000820',position:'absolute',width:'100%',zIndex:1,backgroundColor:'white'}}>
        <View> 
        <View style={styles.circleContainer}>
        <View style={[styles.circle,{ borderColor:"#6200ee",backgroundColor:'#6200ee'}]} ><Text style={{color:"white",textAlign:'center',fontSize:11}}>1</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#6200ee",}]} />
        <View style={[styles.circle,{ borderColor:"#6200ee",backgroundColor:'#6200ee'}]}><Text style={{color:"white",textAlign:'center',fontSize:11}}>2</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#6200ee",}]}/>
        <View style={[styles.circle,{ borderColor:"#6200ee",}]} ><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>3</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#00000890",}]} />
        <View style={[styles.circle,{ borderColor:"#00000890",}]} ><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>4</Text></View>
        </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:25,marginTop:-10,marginBottom:10}}>
            <Text style={styles.inner}>
            Cart
            </Text>
            <View style={styles.text} />
            <Text style={styles.inner}>
              Address  
            </Text>
            <View style={styles.text} />
            <Text style={styles.inner}>
               Payment 
            </Text>
            <View style={styles.text} />
            <Text style={styles.inner}>
               Summary 
            </Text>
           </View>
        </View>
       <View style={{marginTop:80,}}>
        <Text style={{marginHorizontal:16,fontSize:17,marginBottom:8}}>Select payment method</Text>

       </View>
       <View>
        <View  style={{margin:13}}>
        <View style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}} />
          <Text style={{fontSize:12,backgroundColor:'white',zIndex:3,width:78,marginTop:-10,color:'#00000090'}}>PAY ONLINE</Text>
        
        </View>
       </View>

       <List.Accordion
        title="UPI (Google Pay/PhonePe)"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="card-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Wallet"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="wallet-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion> 
       
      <List.Accordion
        title="Debit/Credit Card"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="credit-card-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Net Banking"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="bank-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
       

      <View style={{marginTop:10}}>
        <View  style={{margin:13}}>
        <View style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}} />
          <Text style={{fontSize:12,backgroundColor:'white',zIndex:3,width:78,marginTop:-10,color:'#00000090'}}>PAY IN CASH</Text>
        
        </View>
       </View>
      
       <List.Accordion
        title="Cash on Delivery"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="bank-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      
      <View >
        <Text>Price Details(1 item)</Text>
        <View>
          <Text>Total Product Price</Text>
          <Text>+ ₹214</Text>
        </View>
      </View>
      <View>
        <Text>Order Total</Text>
        <Text>₹214</Text>
      </View>

        </View>

    )
}

export default Payment;


const styles= StyleSheet.create({
    circleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical:14
      },
      circle: {
        width: 17,
        height: 17,
        borderRadius: 10,
       borderWidth:1
      },
      circleLine: {
        width: 70,
        height: 1, 
      },
      text:{
       width:44
      },
      inner:{
        fontSize:12,color:'#00000880'
      }
})