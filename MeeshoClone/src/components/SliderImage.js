import { View, Text,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native'
import {useState} from 'react'
import {useTheme}  from 'react-native-paper'

const SliderImage = ({images}) => {

   const [i ,setI] = useState(0)
   const theme = useTheme()
 
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: images[i],
        }}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "contain",
        }}
      />

      <FlatList
        horizontal
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={()=>setI(index)}
          >
            <Image
              source={{
                uri: item,
              }}
              style={[
                style.smallImage,
                {
                  borderWidth: i == index ? 2 : 0,
                  borderColor:theme.colors.primary
                },
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default SliderImage

const style =  StyleSheet.create({
container:{

width:'100%'


},
smallImage:{
    width:52,
    height:70,
    borderRadius:10,
     resizeMode: "contain",
     marginTop:20,
    margin:7
    
     

}




})