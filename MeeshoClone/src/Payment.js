import {View,Text,StyleSheet, ScrollView,TouchableOpacity,Dimensions, Image} from 'react-native';
import { List ,Checkbox} from 'react-native-paper';

const Payment=({navigation})=>{
  const screenHeight = Dimensions.get('screen').height;
 
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
        <ScrollView>
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
        <List.Item title="PhonePe" 
        left={()=><Image  source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png'}} style={{width:30,height:30,marginLeft:20}} />}
        />
        <List.Item title="Enter UPI ID" 
         left={()=><Image  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fqo9FaqmLGE8Hfo6STqs07quzJuf9I4lvnxWdds&s'}} style={{width:30,height:30,marginLeft:20}} />}
         
        />
      </List.Accordion>

      <List.Accordion
        title="Wallet"
        style={{borderBottomWidth:.7,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="wallet-outline" />}>
        <List.Item title="Paytm" 
         left={()=><Image  source={{uri:'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'}} style={{width:30,height:30,marginLeft:20}} />}
        />
        <List.Item title="PhonePe" 
        left={()=><Image  source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png'}} style={{width:30,height:30,marginLeft:20}} />}
        />
        <List.Item title="Mobikwik" 
        left={()=><Image  source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mobikwik-logo-icon.png'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />
      </List.Accordion> 
       
      <List.Accordion
        title="Debit/Credit Card"
        style={{borderBottomWidth:.6,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="credit-card-outline" />}>
       <List.Item title="Add new card" 
        left={()=><Image  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84PS_Ah12Yf8dToHYkUJ4ajxkWDMWhXKHOFDItA_s&s'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />
     
      </List.Accordion>

      <List.Accordion
        title="Net Banking"
        style={{borderBottomWidth:.5,borderBottomColor:'#00000070'}}
        left={props => <List.Icon {...props} icon="bank-outline" />}>
        <List.Item title="State Bank of India" 
        left={()=><Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2048px-SBI-logo.svg.png'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />
        <List.Item title="Axis Bank" 
         left={()=><Image  source={{uri:'https://www.logotaglines.com/wp-content/uploads/2016/08/Axis-Bank-Logo.png'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />
        <List.Item title="ICICI Netbanking" 
         left={()=><Image  source={{uri:'https://i.pinimg.com/originals/ff/d5/31/ffd531a6a78464512a97848e14506738.png'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />
        <List.Item title="HDFC Bank" 
         left={()=><Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png'}} style={{width:30,height:30,marginLeft:20}} resizeMode='contain'/>}
        />

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
            <View>
    <Checkbox.Item label="Item" status="checked" />
  </View>
        {/* <List.Item  title='Cash On delivery'
        
        /> */}
      </List.Accordion>
      
      <View >
        <Text style={{marginHorizontal:10,marginVertical:10}}>Price Details(1 item)</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{marginHorizontal:10,marginVertical:8,fontSize:12,color:'#00000090'}}>Total Product Price</Text>
          <Text style={{marginHorizontal:10,marginVertical:8,fontSize:12,color:'#00000090'}}>+ ₹214</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',height:50,borderTopWidth:.5,alignItems:'center',marginHorizontal:10}}>
        <Text style={{}}>Order Total</Text>
        <Text style={{}}>₹214</Text>
      </View>

      
      <View style={{backgroundColor:'#00000000', flexDirection: "row", justifyContent: "space-around",borderWidth:.5,borderColor:'#00000070',zIndex:6,backgroundColor:'white'}}>
        <View>
          <Text style={{ margin: 13, fontSize: 16, marginLeft: 16 }}>₹214</Text>
          <Text style={{ marginHorizontal: 13, color: "#f43397" }}>
            VIEW PRICE DETAILS
          </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Summary')}>
          <View
            style={{
              backgroundColor: "#f43397",
              width: 180,
              height: 50,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              margin: 13,
            }}
          >
            <Text style={{ color: "white" }}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>

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