import {View,FlatList, ImageBackground,Text} from 'react-native';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA=[
    {
        id:1,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:2,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:3,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:4,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    

]

const Product=()=>{
    return (
        <View>
        <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({item})=> <View style={{flexDirection:'row',borderWidth:.5, borderColor:'gray',width:'50%',justifyContent:'center'}} >
        <View style={{paddingBottom:10}} >
        <ImageBackground source={{uri:'https://images.meesho.com/images/products/161471180/rox8n_256.webp'}}  style={{width:'100%',height:200}} resizeMode="contain" >
        </ImageBackground>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'86%',marginLeft:10}} >
            <View style={{marginLeft:10,marginVertical:5}}> 
                <Text style={{fontSize:10,letterSpacing:.5,color:'gray',}}>Vellical Men Shirts</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Text style={{fontSize:16}}>₹362</Text>
                    <Text style={{fontSize:10,letterSpacing:.5,color:'gray',marginLeft:6}}>onwards</Text>
                </View>
            </View>
          <MaterialCommunityIcons name='share-variant-outline' size={20} style={{marginRight:10}}  />
            
         </View>
        <Text style={{padding:3,backgroundColor:'#daf2da',fontSize:10,textAlign:'center',color:'green',borderRadius:8,width:'70%',marginLeft:'5%'}}>₹362 with 2 special Offers</Text>
        <Text style={{fontSize:10,marginLeft:'7%',marginVertical:7}}>Free Delivery</Text>
         <View style={{flexDirection:'row',marginLeft:'7%',alignItems:'center'}}>
           <View style={{backgroundColor:'darkgreen',flexDirection:'row',alignItems:'center',width:40,justifyContent:'center',borderRadius:15,height:25}}>
            <Text style={{color:'white'}}>4</Text>
            <MaterialCommunityIcons  name='star' style={{marginLeft:5,color:'white'}}  />
           </View>
           
           
            <Text style={{fontSize:12,marginLeft:8}}>(331)</Text>
         </View>

        </View>
     
      </View>}
        keyExtractor={item => item.id}
        />
        </View>
    )
}

export default Product;