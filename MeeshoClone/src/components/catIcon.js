import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const CatIcon = ({image,title,id,navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Products", { id: id });
      }}
      style={{ width: "31%", alignItems: "center", marginRight: 5, padding: 5 }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 100,
          resizeMode: "contain",
        }}
      />
      <Text style={{ fontSize: 11, marginVertical: 5, textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CatIcon