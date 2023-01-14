import { View, Text,StyleSheet ,FlatList} from 'react-native'
import {useEffect, useState} from 'react'
import firestore from "@react-native-firebase/firestore";
import Item from '../components/Item';
import { ActivityIndicator, MD2Colors ,useTheme} from 'react-native-paper';

const re =[4251,100,500,265,486,964,346,58,5465,8465,54,6513,546,74,56,64,1464,848,854,8161]


const Products = ({ navigation, route }) => {
  const {id} =  route.params
  const [data, setData] = useState([]);

  const theme = useTheme();
  useEffect(() => {
firestore()
  .collection("Products")
  // Filter results
  .where("category", "==", id)
  .get()
  .then(async (querySnapshot) => {
    
          
    let arr = [];
     querySnapshot.forEach((doc) => {
      arr.push(doc.data());
     });
     setData((prev) => arr);

  }).catch((err)=>{console.log(err)})
  

  }, []);
 
    
  return (
    <View
      style={[
        styles.container,
        { justifyContent: data.length == 0 ? "center" : "flex-start" },
      ]}
    >
      {data.length == 0 ? (
        <ActivityIndicator
          animating={true}
          color={theme.colors.primary}
          size="normal"
        />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default Products

const styles =  StyleSheet.create({
   container:{
   flex:1,
  
   
   alignContent:'center'
     

   }
})