import {View,Text,StyleSheet,TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const Address=({navigation})=>{
    
    const [name,setName]=useState(false);
    const [number,setNumber]=useState(false);
    const [House,setHouse]=useState(false);
    const [road,setRoad]=useState(false);
    const [city,setCity]=useState(false);
    const [pin,setPin]=useState(false);
    const [state,setState]=useState(false);






    return(
        <ScrollView>
            {/* =========================circle line */}
            <View style={{borderWidth:1,borderColor:'#00000820',position:'absolute',width:'100%',zIndex:1,backgroundColor:'white'}}>
         <View  >
            <View style={styles.circleContainer}>
        <View style={[styles.circle,{ borderColor:"#6200ee",backgroundColor:'#6200ee'}]} ><Text style={{color:"white",textAlign:'center',fontSize:11}}>1</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#6200ee",}]} />
        <View style={[styles.circle,{ borderColor:"#6200ee",}]}><Text style={{color:"#6200ee",textAlign:'center',fontSize:11}}>2</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#00000890",}]}/>
        <View style={[styles.circle,{ borderColor:"#00000890",}]} ><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>3</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#00000890",}]} />
        <View style={[styles.circle,{ borderColor:"#00000890",}]} ><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>4</Text></View>
      </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:25,marginTop:-10,marginBottom:10}}>
            <Text style={styles.tinner}>
            Cart
            </Text>
            <View style={styles.ttext} />
            <Text style={styles.tinner}>
              Address  
            </Text>
            <View style={styles.ttext} />
            <Text style={styles.tinner}>
               Payment 
            </Text>
            <View style={styles.ttext} />
            <Text style={styles.tinner}>
               Summary 
            </Text>
           </View>
        </View>
        {/* ==============================circle line end===== */}
            <View style={{flexDirection:'row',height:30,backgroundColor:'#10001110',alignItems:'center',marginTop:63}}>
            <Text style={{marginHorizontal:8}}><Ionicons  name='alert-circle' size={20}  /></Text>
            <Text>Order will be delivered at this address</Text>
           
            </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{margin:12}}>
         <Ionicons name='call-outline' size={25}   />
            </Text>
            <Text style={{fontSize:17}}>
             Contact Details
            </Text>
        </View>
        <View>
        <View style={styles.view}>
            <Text style={name?styles.focustext:styles.text}>Name *</Text>
            <TextInput  style={[name?styles.focus:styles.input]} onFocus={()=>setName(true)} onBlur={()=>setName(false)} />
            </View>
        </View>
        <View style={{borderBottomWidth:10,borderColor:'#00000010'}}>
        <View style={styles.view}>
            <Text style={number?styles.focustext:styles.text}>Phone Number *</Text>
            <TextInput  style={[number?styles.focus:styles.input]} onFocus={()=>setNumber(true)} onBlur={()=>setNumber(false)} />
            </View>
        </View>
        <View style={{flexDirection:'row'  ,alignItems:'center'}}>
            <Text style={{margin:16}}>
           <Ionicons  name='location-outline' size={25}    />
            </Text>
            <Text style={{fontSize:17}}>
             Address
            </Text>
        </View>

        
        <View >
        <View style={styles.view}>
            <Text style={House?styles.focustext:styles.text}>House no./Building Name</Text>
            <TextInput  style={[House?styles.focus:styles.input]} onFocus={()=>setHouse(true)} onBlur={()=>setHouse(false)} />
            </View>
        </View>
        
        <View>
        <View style={styles.view}>
            <Text style={road?styles.focustext:styles.text}>Road Name / Area / Colony</Text>
            <TextInput  style={[road?styles.focus:styles.input]} onFocus={()=>setRoad(true)} onBlur={()=>setRoad(false)} />
            </View>
        </View>

         
        <View>
        <View style={styles.view}>
            <Text style={pin?styles.focustext:styles.text}>Pin code</Text>
            <TextInput  style={[pin?styles.focus:styles.input]} onFocus={()=>setPin(true)} onBlur={()=>setPin(false)} />
            </View>
        </View>

        <View>
        <View style={styles.view}>
            <Text style={city?styles.focustext:styles.text}>City</Text>
            <TextInput  style={[city?styles.focus:styles.input]} onFocus={()=>setCity(true)} onBlur={()=>setCity(false)} />
            </View>
        </View>

        <View style={{borderBottomWidth:10,borderColor:'#00000010'}}>
        <View style={styles.view}>
            <Text style={state?styles.focustext:styles.text}>State</Text>
            <TextInput  style={[state?styles.focus:styles.input]} onFocus={()=>setState(true)} onBlur={()=>setState(false)} />
            </View>
        </View>


     <View >
        <TouchableOpacity onPress={()=>navigation.navigate('Payment')}
         style={{elevation:1.5,width:'90%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#f43397',marginHorizontal:'4%',marginVertical:'3%',borderRadius:5}}>
            <Text style={{color:'white'}}>Save Address and Continue</Text>
        </TouchableOpacity>
     </View>

        
        


        </ScrollView>

    


    )
}
export default Address;


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
      },
      input: {
        borderBottomColor:'gray',
        borderBottomWidth:.5,
        
      },
      focus:{
        
        borderBottomWidth:2,
         
        borderBottomColor:'#f542d4' ,
       
        
      },
      focustext:{
          fontSize:13,
          color:'#f542d4',
          fontWeight:'6'
      },
      text:{
          
          fontSize:13,
          color:'#929493',
          
      },
      view:{
      marginHorizontal:20,
      marginVertical:10,
      height:55,
      },
      ttext:{
        width:44
      },
      tinner:{
        fontSize:12,color:'#00000880'
      }

     
})