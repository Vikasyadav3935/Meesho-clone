import {View,Text,StyleSheet} from 'react-native';

const CircleLine=()=>{
    return (
        <View style={{borderWidth:1,borderColor:'#00000820',position:'absolute',width:'100%',zIndex:1,backgroundColor:'white'}}>
         <View  >
            <View style={styles.circleContainer}>
        <View style={[styles.circle,{ borderColor:"#6200ee",}]} ><Text style={{color:"#6200ee",textAlign:'center',fontSize:11}}>1</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#00000890",}]} />
        <View style={[styles.circle,{ borderColor:"#00000890",}]}><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>2</Text></View>
        <View style={[styles.circleLine,{backgroundColor: "#00000890",}]}/>
        <View style={[styles.circle,{ borderColor:"#00000890",}]} ><Text style={{color:"#00000890",textAlign:'center',fontSize:11}}>3</Text></View>
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
    )
}

export default CircleLine


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