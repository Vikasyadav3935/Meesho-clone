import { View, Text,TouchableOpacity,StyleSheet,Image, } from 'react-native'
import React from 'react'
import { Button ,useTheme} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";




function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const offer = [1,2,3,4]
const Item = ({ item, navigation }) => {
    
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}
     onPress={()=>{
      navigation.navigate("Details", { item:item});

     }}
    >
      <Image
        source={{
          uri: item.images[0],
        }}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
        }}
      />



      <View style={{ width: "100%", alignItems: "flex-start", padding: 5 }}>
        <Text
          numberOfLines={1}
          style={{
            numberOfLines: 1,
            fontSize: 12,
            color: theme.colors.textGray,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, margin: 4 }}>
          ₹{item.original_price}
        </Text>
        <Text
          style={{
            fontSize: 10,
            borderRadius: 50,
            backgroundColor: theme.colors.offerBatch,
            textAlign: "left",

            paddingHorizontal: 5,
            paddingVertical: 3,
          }}
        >
          ₹ {item.discounted_price} with
          {Math.floor(Math.random() * offer.length)} Special Offer
        </Text>
        <Text
          style={{
            fontSize: 10,
            borderRadius: 50,
            backgroundColor: theme.colors.tertiary,
            textAlign: "left",
            paddingHorizontal: 8,
            marginVertical: 5,
            paddingVertical: 3,
          }}
        >
          Free Delivery
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              borderRadius: 50,
              backgroundColor: theme.colors.ratingBatch,
              textAlign: "left",
              paddingHorizontal: 5,
              padding: 4,
              fontWeight: "bold",
              color: "white",
              marginRight: 5,
              fontSize: 12,
            }}
          >
            {item.rating} ★
          </Text>
          <Text style={{ fontSize: 12 }}>
            ({numberWithCommas(item.reviews)})
          </Text>
        </View>

        <View
          style={{
            padding: 5,
            borderRadius: 100,
            position: "absolute",

            right: 5,
            top: 20,
          }}
        >
          <MaterialCommunityIcons name="share-variant-outline" size={22} />
        </View>
      </View>

      <View
        style={{
          padding: 5,
          borderRadius: 100,
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.58)",
          right: 10,
          top: 10,
        }}
      >
        <MaterialCommunityIcons name="cards-heart-outline" size={22} />
      </View>
    </TouchableOpacity>
  );
};

export default Item

const styles = StyleSheet.create({
    container:{
      flex:1,
        
        alignItems:'flex-start',
        backgroundColor:"white",
        margin:1,
        paddingBottom:10
         

    }
})