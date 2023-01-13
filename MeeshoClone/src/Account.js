import React from "react";
import {useState} from 'react';
import { SafeAreaView,View, StyleSheet, TextInput,Button ,Text, Touchable, TouchableOpacity,} from "react-native";
import { List} from 'react-native-paper';
const Account = () => {
    
    const [focus,setFocus]=React.useState(false);
    const [email,setEmail]=useState(false);
    const [pop,setPop]=useState(false);

    return (
      <SafeAreaView>
        <View style={{marginHorizontal:20}}>
            <View style={styles.view}>
            <Text  style={focus?styles.focustext:styles.text}>Full Name *</Text>
            <TextInput  style={[focus?styles.focus:styles.input]} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} />
            </View>

            <View style={styles.view}>
            <Text  style={styles.text}>Phone Number *</Text>
            <TextInput   style={styles.input} />
            </View>
             
             <View style={styles.view}>
            <Text style={email?styles.focustext:styles.text}>Email ID *</Text>
            <TextInput  style={[email?styles.focus:styles.input]} onFocus={()=>setEmail(true)} onBlur={()=>setEmail(false)} />
            </View>
            
            <View style={styles.view}>
              <TouchableOpacity onPress={()=>setPop(prev=> !prev)}>
            <Text  style={styles.text}>Gender *</Text>
            <View  style={[styles.input,{height:20}]} ></View>
            </TouchableOpacity>
              <View style={[pop?{display:'none'}:{elevation:4,borderWidth:.001,borderRadius:3,backgroundColor:'white',zIndex:2,marginTop:5}]}>
                <Text style={styles.gen}>Male</Text>
                <Text style={styles.gen}>Female</Text>
                <Text style={styles.gen}>others</Text>
              </View>
            </View>

            <View style={styles.view}>
            <Text style={email?styles.focustext:styles.text}>Language Spoken *</Text>
            <TextInput  style={[email?styles.focus:styles.input]} />
            </View>

            


        </View>
      </SafeAreaView>
    );
};

export default Account;
const styles = StyleSheet.create({
    input: {
      borderBottomColor:'gray',
      borderBottomWidth:.5,
      
    },
    focus:{
      
      borderBottomWidth:2,
       
      borderBottomColor:'#f542d4' ,
     
      
    },
    focustext:{
        fontSize:13,
        color:'#f542d4',
        fontWeight:'6'
    },
    text:{
        
        fontSize:13,
        color:'#929493',
        
    },
    view:{
    marginVertical:10,
    height:55
    },
    gen:{
      marginVertical:10,
      marginHorizontal:15,
      color:'#0009',
      fontWeight:'700'
    }

  });