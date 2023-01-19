import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CircleLine from "./CircleLine";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Summary = () => {
  return (
    <View style={{ backgroundColor: "#ffff" }}>
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
      <View style={{ marginTop: 64 ,alignItems:'center',height:50,flexDirection:'row',borderWidth:.4,borderColor:'#00000040'}}>
        <Text style={{marginHorizontal:15}}><MaterialCommunityIcons  name='truck-delivery-outline' size={30} /></Text>
        <Text>Estimated Delivery by Sunday, 22nd Jan</Text>
      </View>

      <View >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
            justifyContent: "space-around",
          }}
        >
          <Image
            source={{
              uri: "https://images.meesho.com/images/products/72782403/v2x3a_512.jpg",
            }}
            style={{ width: 70, height: 100 }}
            resizeMode="contain"
          />
          <View style={{ marginRight: 10 }}>
            <Text style={{ marginVertical: 2, fontSize: 15 }}>
              Kids - Boys Black Pu Casual Wat...
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", marginVertical: 3 }}>
                <Text>Size : Free Size </Text>
                <Text> Qty : 1</Text>
              </View>

              <Entypo name="chevron-right" size={20} />
            </View>
            <Text style={{ marginVertical: 4 }}>₹175</Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 15,
                alignItems: "center",
              }}
            >
              <Text>
                <MaterialIcons
                  name="clear"
                  size={20}
                  style={{ fontWeight: "100" }}
                  color="#f43397"
                />
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "",
                  letterSpacing: 0.5,
                  fontFamily: "Monsterrat",
                }}
              >
                Remove
              </Text>
            </View>
          </View>
          
        </View>

        <View
          style={{
            borderTopWidth: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 55,
            alignItems: "center",
            borderColor: "#00000820",
            borderBottomWidth: 7,
          }}
        >
          <Text style={{ fontSize: 14, color: "#00000870" }}>
            Supplier : ivg store
          </Text>
          <Text style={{ fontSize: 14, color: "#00000870" }}>
            Free Delivery
          </Text>
        </View>
      </View>
      <View style={{borderColor: "#00000820",
          borderBottomWidth: 7,}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{marginHorizontal:10,marginVertical:6}}><Ionicons name="location-outline" size={24}/></Text>
        <Text style={{marginHorizontal:0,marginVertical:6}}>Delivery Address</Text>
        </View>
        <View style={{flexDirection:'row',}}>
            <Text style={{marginHorizontal:10,fontSize:13}}>Vikas</Text>
            <Text style={{fontSize:13}}>6387712911</Text>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:10,marginBottom:10,justifyContent:'space-between'}}>
            <Text style={{fontSize:12,width:'80%'}}>Raithuwa, Darshan Nagar ,Faizabad ,Uttar Pradesh, 224202 </Text>
            <Text><Entypo name="chevron-right" size={20} /></Text>
        </View>
        
      </View>
       
       <View  style={{borderColor: "#00000820",
          borderBottomWidth: 7,}}>
        <Text style={{marginHorizontal:10,marginVertical:7}}>
         Payment Mode
        </Text>
       <View style={{flexDirection:'row',marginHorizontal:10,justifyContent:'space-between',marginBottom:8,marginTop:8}}>
        <Text>Cash on Delivery</Text>
        <Entypo name="chevron-right" size={20} />
       </View>
       </View>
      
     

      <View>
        <Text
          style={{ marginHorizontal: 14, marginVertical: 10, fontSize: 15 }}
        >
          Price Details (1 Item)
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginHorizontal: 14,
              marginVertical: 10,
              fontSize: 13,
              color: "#00000860",
            }}
          >
            Total Product Price
          </Text>
          <Text style={{ marginHorizontal: 14, marginVertical: 10 }}>
            + 175
          </Text>
        </View>
        <View style={{ borderColor: "#00000870", borderBottomWidth: 0.5 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ marginHorizontal: 14, marginVertical: 10, fontSize: 15 }}
          >
            Order Total
          </Text>
          <Text
            style={{ marginHorizontal: 14, marginVertical: 15, fontSize: 15 }}
          >
            175
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 25,
          backgroundColor: "#00000010",
        }}
      >
        <Text style={{ fontSize: 11 }}>
          Clicking on 'Continue' will not deduct any money
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Text style={{ margin: 13, fontSize: 16, marginLeft: 16 }}>₹214</Text>
          <Text style={{ marginHorizontal: 13, color: "#f43397" }}>
            VIEW PRICE DETAILS
          </Text>
        </View>
        <TouchableOpacity>
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
            <Text style={{ color: "white" }}>Place Order</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default Summary;


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

