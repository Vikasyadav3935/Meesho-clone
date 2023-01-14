import { View, Text ,StyleSheet,FlatList,TouchableOpacity,ScrollView} from 'react-native'
import { useState } from "react";
import DetailsImage from '../components/DetailsImage'
import {useTheme} from 'react-native-paper'


const Details = ({ navigation, route }) => {
     const theme = useTheme()
  const { item } = route.params;
  return (
    <ScrollView>
      <DetailsImage item={item} navigation={navigation} />

      <View style={style.size}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
          Select Size
        </Text>

        <FlatList
          data={item.sizes}
          numColumns={4}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => console.log()}>
              <Text
                style={{
                  alignItems: "center",
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                  borderWidth: 1,
                  backgroundColor: "pink",
                  borderRadius: 50,
                  padding: 7,
                  paddingHorizontal: 10,
                  margin: 5,
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={style.size}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
          Products Details
        </Text>

        <Text style={{}}>
          Name: {item.title} {"\n"}
          {item.details.Description &&
            "Description: " + item.details.Description + "\n"}
          {item.details.Multipack &&
            "MultiPcak: " + item.details.Multipack + "\n"}
          {item.details.Fabric && "Fabric: " + item.details.Fabric + "\n"}
          {item.details["Sleeve Length"] &&
            "Sleeve Length: " + item.details["Sleeve Length"] + "\n"}
          {item.details.Pattern && "Pattern: " + item.details.Pattern + "\n"}
          {
            "It can be said that there is no fun in indulging in frolic without the right attire. Sarees are included in the clothing for women to choose from.  There is always a new way to dress for women and the best outfit for women is the saree which they like the most. This banarasi saree will make you stand out and stand out from the rest. "
          }
          {"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Details
const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },

  size: {
    marginTop:10,
    alignItems: "flex-start",
    backgroundColor:"white",
    padding:10
  },
});