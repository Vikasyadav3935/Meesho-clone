import {View,Text, Image,StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Cart=()=>{
    return (
        <View style={{backgroundColor:'#ffff'}}>
            <View style={{borderWidth:1,borderColor:'#00000820'}}>
            <View style={styles.circleContainer}>
        <View style={styles.circle} ><Text style={{color:"#6200ee",textAlign:'center'}}>1</Text></View>
        <View style={styles.circleLine} />
        <View style={styles.circle}><Text style={{color:"#6200ee",textAlign:'center'}}>2</Text></View>
        <View style={styles.circleLine}/>
        <View style={styles.circle} ><Text style={{color:"#6200ee",textAlign:'center'}}>3</Text></View>
        <View style={styles.circleLine} />
        <View style={styles.circle} ><Text style={{color:"#6200ee",textAlign:'center'}}>4</Text></View>
      </View>
           </View>
            <View>
                <View style={{flexDirection:'row',marginVertical:8,justifyContent:'space-around'}}>
                    <Image source={{uri:'https://images.meesho.com/images/products/72782403/v2x3a_512.jpg'}} style={{width:70,height:100}}  resizeMode='contain' />
                    <View>
                        <Text style={{marginVertical:2,fontSize:15}}>Kids - Boys Black Pu Casual Wat...</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',marginVertical:3}}>
                                <Text>Size : Free Size </Text>
                                <Text>  Qty : 1</Text>
                            </View>

                            <Entypo  name='chevron-right' size={20}  />
                        </View>
                        <Text style={{marginVertical:4}}>₹175</Text>
                      <View style={{flexDirection:'row',marginVertical:20}}><Text><MaterialIcons name='clear' size={25} style={{fontWeight:'100'}} color='#f43397' /></Text><Text style={{fontSize:18,color:'#f43397',letterSpacing:.5}}>REMOVE</Text></View>
                    </View>
                </View>
                <View style={{borderTopWidth:1,flexDirection:'row',justifyContent:'space-around',height:55,alignItems:'center',borderColor:'#00000820',borderBottomWidth:7}}>
                    <Text style={{fontSize:14,color:'#00000870'}} >Supplier : ivg store</Text>
                    <Text style={{fontSize:14,color:'#00000870'}}>Free Delivery</Text>
                    
                </View>
            </View>

        </View>
    )
}

export default Cart;


const styles= StyleSheet.create({
    circleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical:14
      },
      circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
       borderColor:"#6200ee",
       borderWidth:1
       
      },
      circleLine: {
        width: 50,
        height: 1,
        backgroundColor: "#6200ee",
        
        
      },
})