import {
  TextInput,
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,Button
} from "react-native";
import { List,  TouchableRipple } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useState,useEffect } from "react";
import ProfileBody from "./ProfileBody";

import auth from '@react-native-firebase/auth';

const Profile = () => {
  const [modal, setModal] = useState(false);
  // const [confirm, setConfirm] = useState(null);

  // const [code, setCode] = useState('');
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);



  // async function signInWithPhoneNumber(phoneNumber) {
  //   console.log('pressed','42');
  //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  //   console.log('pressed','45');
  // }


  // async function confirmCode() {
  //   try {
  //    const conf = await confirm.confirm(code);
  //    console.log(conf);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }

  // if (initializing) return null;
  // if (!confirm) {
  //   return (
  //     <Button
  //       title="Phone Number Sign In"
  //       onPress={() => signInWithPhoneNumber('+916387712911')}
  //     />
  //   );
  // }

  // return (
  //   <>
  //     <TextInput value={code} onChangeText={text => setCode(text)} />
  //     <Button title="Confirm Code" onPress={() => confirmCode()} />
  //   </>
  // );


  return (
    <ScrollView style={{ backgroundColor: "#dcdee0" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
          style={{ width: 50, height: 50, borderRadius: 40, margin: 20 }}
        />
        <View>
          <TouchableOpacity
            onPress={() => setModal(!modal)}
            style={{
              backgroundColor: "#f43397",
              borderRadius: 4,
              width: 74,
              elevation: 3,
              borderWidth: 0.001,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 12,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, marginVertical: 7 }}>
            View and update your profile details
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            height: 200,
            flex: 2,
            alignItems: "center",
            backgroundColor: "#00000099",
            
          }}
        >
          <View
            style={{
              height: 350,
              borderWidth: 0.5,
              width: "100%",
              padding: 20,
              backgroundColor: "white",
              borderTopStartRadius:20,
              borderTopEndRadius:20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModal(!modal)}
              style={{ alignItems: "flex-end" }}
            >
              <Entypo name="cross" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "sans-serif,Helvetica Neue",
                fontSize: 17,
                fontWeight: "700",
              }}
            >
              Sign up to continue
            </Text>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
              <View>
                <Text style={{color:'#8f8f8f',fontSize:13}}>Country</Text>
                <Text style={{color:'#8f8f8f',fontSize:13}}>+91</Text>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 0.5,height:21 }}
                ></View>
              </View>
              <View style={{width:'60%'}}>
                <Text style={{color:'#8f8f8f',fontSize:13}}>Phone Number</Text>
                <TextInput    style={{borderBottomColor:'gray',borderBottomWidth:.7,height:40}} />
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor:"#f43397",marginVertical:35,height:45,alignItems:'center',justifyContent:'center',borderRadius:6}}>
              <Text style={{color:'white',}}>Continue</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12,textAlign:'center'}}>By continuing, you agree to Meesho's</Text>
            <View style={{flexDirection:'row',justifyContent:'center',}}>
            <Text style={{fontSize:12,color:'#f43397'}}>Terms & Conditions </Text> 
            <Text style={{fontSize:12,}}>and </Text>
            <Text style={{fontSize:12,color:'#f43397'}}>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          height: 50,
          marginVertical: 10,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <Feather name="headphones" size={25} style={{ marginHorizontal: 20 }} />
        <View>
          <Text>Help Center</Text>
        </View>
      </View>

      <ProfileBody/>
     
    </ScrollView>
  );
};

export default Profile;

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
