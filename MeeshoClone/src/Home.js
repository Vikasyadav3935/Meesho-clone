import {Image, ScrollView, Text, TextInput, View,FlatList, VirtualizedList,StyleSheet, } from 'react-native';
 import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import Ionicons from 'react-native-vector-icons/Ionicons'
import FlatList1 from './Flatlist1';
import Bachat from './Bachat';

const DATA=[
    {
        id:1,
        image:'https://images.meesho.com/images/marketing/1649688366308_100.webp',
        title:"Categories"
    },
    {
        id:2,
        image:'https://images.meesho.com/images/marketing/1649688502928_100.webp',
        title:'Kurti & Suit'
    },
    {
        id:3,
        image:'https://images.meesho.com/images/marketing/1649690440106_100.webp',
        title:'Westernwear'
    },
    {
        id:4,
        image:'https://images.meesho.com/images/marketing/1649688585249_100.webp',
        title:'Men'
    },
    {
        id:5,
        image:'https://images.meesho.com/images/marketing/1649689217815_100.webp',
        title:'Kids'
    },
    {
        id:6,
        image:'https://images.meesho.com/images/marketing/1628672353857_100.webp',
        title:'Saree'
    },
    { 
        id:7,
        image:'https://images.meesho.com/images/marketing/1649689036546_100.webp',
        title:'Accessories'
    },
    {  
        id:8,
        image:'https://images.meesho.com/images/marketing/1649689138272_100.webp',
        title:'Jewellery'
    },
];





const Home=()=>{
   
    return (

        <ScrollView >
       <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'30%'}}>
       <Image  source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}   style={{ width: 50, height: 50, borderRadius: 40,marginLeft:20 }} />
       <Text style={{fontSize:14}}>User</Text>
        </View>
        <View style={{flexDirection:'row' ,justifyContent:'space-evenly',width:'30%',alignItems:'center'}}>
          <Ionicons name='heart-outline'  size={25}  />
          <Ionicons name='cart-outline'  size={25} />
        </View>
       </View>

       <View style={{flexDirection:'row',margin:17,width:'90%',}}>
        <View style={{borderWidth:1,flexDirection:'row',width:'70%',height:36,alignItems:'center',justifyContent:'space-between',borderRightWidth:.5,borderTopStartRadius:7,borderBottomStartRadius:7}}>
            <Ionicons name='search' size={20} color="#8f8f8f"/>
            <TextInput  style={{width:'88%',fontSize:16,paddingLeft:5}}  />
        </View>
        <View style={{borderWidth:1,width:'27%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',borderLeftWidth:0.5,borderBottomRightRadius:7,borderTopRightRadius:7}}>
        <Ionicons  name='mic-outline' size={25} color="#8f8f8f"  />
        <Ionicons  name='camera-outline'  size={25} color="#8f8f8f" />
        </View>
       </View>

       <View style={{backgroundColor:'#e5c2f2',flexDirection:'row',alignItems:'center'}} >
        <Ionicons name='location-outline'  size={20} color='purple' style={{margin:10}} />
        <Text style={{fontSize:12.5}}>Add delivery location to get extra discount </Text>
       </View>
         
       <FlatList
        data={DATA}
        horizontal
        renderItem={({item}) => <View style={{alignItems:'center'}}>
            <Image  source={{uri:item.image}}  style={{width:60,height:60,margin:10,borderRadius:50}}  />
            <Text style={{fontSize:12}}>{item.title}</Text>
        </View>}
        keyExtractor={item => item.id}
      />
     <View style={{backgroundColor:'#00000011'}}>
      <Image  source={{uri:'https://images.meesho.com/images/widgets/49788/oktxl_800.webp'}} style={{width:'100%',height:50,marginVertical:8}} />
      </View>
        <View>
            <View>

            </View>
        </View>
     
       <Bachat />
       <View>
        <Image  source={{uri:'https://images.meesho.com/images/products/59140357/z4dej_256.webp'}} style={{width:'50%',height:300}} />
      <Text>Hello</Text>
       
       </View>


        </ScrollView>
    )
}

export default Home;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });