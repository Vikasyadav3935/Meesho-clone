import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTheme } from "react-native-paper";



const CatBtn = ({ con, setCon,title,image,data,setCat }) => {
   
    const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        
        setCon(title);
        setCat(data)

        
      }}
      style={[
        styles.leftBtn,
        {
         
          backgroundColor:
            con === title
              ? theme.colors.catBtn
              : theme.colors.tertiary,
          borderLeftColor: theme.colors.primary,
          borderLeftWidth: con === title ? 4 : 0,
        },
      ]}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical:20,
          marginHorizontal:5
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 20,
            height: 20,
            tintColor:
              con === title
                ? theme.colors.primary
                : theme.colors.textGray,
          }}
        />
        <Text
          style={{margin:5,
            textAlign: "center",
            color:
              con === title
                ? theme.colors.primary
                : theme.colors.textGray,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatBtn;

const styles = StyleSheet.create({
  leftBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "gray",
    height:80
  },
});
