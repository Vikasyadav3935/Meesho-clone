import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SliderImage from "./SliderImage";
import Ionicons from "react-native-vector-icons/Ionicons";


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const offer = [1, 2, 3, 4];
const DetailsImage = ({ item, navigation }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("Details", { item: item });
      }}
    >
      <SliderImage images={item.images} />

      <View style={{ width: "100%", alignItems: "flex-start", padding: 5 }}>
        <Text
          numberOfLines={1}
          style={{
            numberOfLines: 1,
            fontSize: 15,
            color: theme.colors.textGray,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginVertical: 5 }}>
          ₹{item.original_price}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "bold",
            borderRadius: 50,
            backgroundColor: theme.colors.offerBatch,
            textAlign: "left",

            paddingHorizontal: 8,
            paddingVertical: 5,
            marginBottom: 4,
          }}
        >
          ₹ {item.discounted_price} with{" "}
          {Math.floor(Math.random() * offer.length)} Special Offer
        </Text>
        <Text
          style={{
            fontSize: 12,
            borderRadius: 50,
            backgroundColor: theme.colors.tertiary,
            textAlign: "left",
            paddingHorizontal: 8,
            marginVertical: 5,
            paddingVertical: 4,
          }}
        >
          Free Delivery
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
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
          <Ionicons name="people" size={14} color={theme.colors.textGray} />
          <Text
            style={{
              fontSize: 12,
              color: theme.colors.textGray,
              marginLeft: 4,
            }}
          >
            {numberWithCommas(item.reviews)} ratings
          </Text>
        </View>

        <View
          style={{
            padding: 5,
            borderRadius: 100,
            position: "absolute",
            flexDirection: "row",
            justifyContentL: "center",
            alignItems: "center",
            right: 5,
            top: 20,
          }}
        >
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={23}
              color={theme.colors.textGray}
            />
            <Text style={{ color: theme.colors.textGray }}>Wishlist</Text>
          </View>

          <View style={{ alignContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="share-variant-outline"
              color={theme.colors.textGray}
              size={23}
            />
            <Text style={{ color: theme.colors.textGray }}>Share</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    alignItems: "flex-start",
    backgroundColor: "white",
    margin: 1,
    paddingBottom: 10,
    padding:10
  },
});
