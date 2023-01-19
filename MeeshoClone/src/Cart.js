import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CircleLine from "./CircleLine";


const Cart = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "#ffff" }}>
      <CircleLine />
       <ScrollView>
      <View style={{ marginTop: 60 }}>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "#00000820",
          borderBottomWidth: 7,
        }}
      >
        <Text style={{ margin: 15 }}>Wishlist</Text>
        <Text style={{ margin: 15 }}>
          <Entypo name="chevron-right" size={20} color="#0000008400" />
        </Text>
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
        <TouchableOpacity
        onPress={()=>navigation.navigate('Address')} 
        >
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
  );
};

export default Cart;

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 14,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#6200ee",
    borderWidth: 1,
  },
  circleLine: {
    width: 50,
    height: 1,
    backgroundColor: "#6200ee",
  },
});
