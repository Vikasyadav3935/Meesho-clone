import { View, Text ,SafeAreaView,StyleSheet,ScrollView,TouchableOpacity,Image,FlatList,SectionList} from 'react-native'
import {useTheme} from 'react-native-paper'
import React, { useState } from 'react'
import CatBtn from '../components/CatBtn'
import  {catBtnData,Women_Ethnic_Data,Men,DressesData,JelleryData,BeautyData,BagData,HomeKichanData} from '../../CatData'
import CatIcon from '../components/catIcon'

//   "datac":["Sarees", "Jewellery", "Dresses", "Mens Top Were", "Beauty and health", "Bags and Footwear", "Home and Kitchen"]
//     ]



const Categories = () => {
  const [con, setCon] = useState("Women Ethnic");
  const [cat, setCat] = useState(Women_Ethnic_Data);
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={[styles.leftParent]}>
          <FlatList
            data={catBtnData}
            renderItem={({ item }) => (
              <CatBtn
                con={con}
                setCon={setCon}
                title={item.title}
                image={item.image}
                data={item.data}
                setCat={setCat}
              />
            )}
          />
        </View>

        <View style={styles.rightParent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                color: theme.colors.textGray,
                fontSize: 10,
              }}
            >
              {con}
            </Text>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.5,
                marginLeft: 10,
                borderBottomColor: "gray",
              }}
            ></View>
          </View>

          <SectionList
            ListEmptyComponent={() => (
              <View style={{height:1000,flex:1,justifyContent:'center',alignItems:"center"}}>
                <Text> Empty..</Text>
              </View>
            )}
            sections={cat}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <FlatList
                numColumns={3}
                crossAxisCount={2}
                data={item.list}
                renderItem={({ item }) => (
                  <CatIcon title={item.name} image={item.image} />
                )}
              />
            )}
            renderSectionHeader={({ section: { category } }) => (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  margin: 10,
                  marginTop: 20,
                }}
              >
                {category}
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Categories
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
   
    flexDirection: "row",
  },
  leftParent: {
    flex: 1,
    
  },
  rightParent: {
    flex: 2.8,
    paddingTop:10,
    paddingLeft:10,
    backgroundColor:"white"
  },
  leftBtn:{
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:1,
    borderTopColor:'gray'

  }
});