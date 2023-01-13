import {
    TextInput,
    Modal,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import { List,  TouchableRipple } from "react-native-paper";
  import Feather from "react-native-vector-icons/Feather";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import Entypo from "react-native-vector-icons/Entypo";
  import { useState } from "react";


  const ProfileBody=()=>{


    return  (
        <View>
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Change language"
            left={(props) => (
              <List.Icon style={styles.list} icon="google-translate" />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            title="My Banks & UPI Details"
            style={styles.item}
            left={(props) => <List.Icon style={styles.list} icon="bank" />}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            title="My Shared Products"
            style={styles.item}
            left={(props) => (
              <List.Icon style={styles.list} icon="share-variant-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="My Viewed Products"
            left={(props) => (
              <List.Icon style={styles.list} icon="clock-time-eight-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="My Payments"
            left={(props) => <List.Icon style={styles.list} icon="credit-card" />}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Refer & Earn"
            left={(props) => (
              <List.Icon style={styles.list} icon="gift-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Spins"
            left={(props) => (
              <List.Icon style={styles.list} icon="gift-outline" />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="My Followed Shops"
            left={(props) => (
              <List.Icon style={styles.list} icon="storefront-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Meesho Credits"
            left={(props) => (
              <List.Icon style={styles.list} icon="wallet-outline" />
            )}
          />
        </TouchableRipple>
          
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Entreprenuer Learning Centre"
            left={(props) => (
              <SimpleLineIcons style={styles.list} name="graduation" size={23} />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Business Logo"
            left={(props) => (
              <List.Icon style={styles.list} icon="hexagon-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Become a Supplier"
            left={(props) => (
              <List.Icon style={styles.list} icon="storefront-outline" />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Setting"
            left={(props) => (
              <Feather style={styles.list} name="settings" size={23} />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Rate Meesho"
            left={(props) => (
              <AntDesign style={styles.list} name="staro" size={20} />
            )}
          />
        </TouchableRipple>
  
        <TouchableRipple
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
          style={{ backgroundColor: "white", marginTop: 1 }}
        >
          <List.Item
            style={styles.item}
            title="Legal and Policies"
            left={(props) => <List.Icon style={styles.list} icon="security" />}
          />
        </TouchableRipple>
        </View>
    )
  }


  export default ProfileBody;


  const styles = StyleSheet.create({
    list: {
      marginLeft: 20,
    },
    item: {
      marginTop: 1,
      paddingVertical: 13,
    },
    modalView: {
      height: 300,
      borderWidth: 0.5,
      width: "100%",
    },
  });