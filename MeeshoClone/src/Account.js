import React from "react";
import {useState,useEffect} from 'react';
import { SafeAreaView,View, StyleSheet, TextInput,Button ,Text, Touchable, TouchableOpacity, Image, ScrollView,} from "react-native";
import { List, TouchableRipple} from 'react-native-paper';

import { Dimensions } from 'react-native';

const Account = () => {
    
    const [focus,setFocus]=React.useState(false);
    const [email,setEmail]=useState(false);
    const [gen,setGen]=useState(true);
    const [Occupation,setOccupation]=useState(true);
    const [pin,setPin]=useState(false);
    const [lang,setLang]=useState(false);

    const [occu,setOccu]=useState('');

    const [sex,setSex]=useState('');
    
    const [Bhasha,setBhasha]=useState('')


    useEffect(()=>{
     setOccupation(true)
     setGen(true);
     setLang(true)
    },[occu,sex,Bhasha])
  

    const screenHeight = Dimensions.get('screen').height;


    return (
      <View>
      <ScrollView>
      
        <View style={{marginHorizontal:20}}>
          <View style={{height:230,justifyContent:'center',alignItems:'center'}}>
           <View style={{borderWidth:1,width:100,height:100,borderRadius:50,marginTop:20}}>
           <Image  source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}   style={{ width: 98, height:98, borderRadius: 50, }} />
          
           </View>
           <Text style={{marginTop:20,color:'#f542d4',fontWeight:'bold',}}>ADD PICTURE</Text>
          </View>
            <View style={styles.view}>
            <Text  style={focus?styles.focustext:styles.text}>Full Name *</Text>
            <TextInput  style={[focus?styles.focus:styles.input]} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} />
            </View>

            <View style={styles.view}>
            <Text  style={styles.text}>Phone Number *</Text>
            <TextInput value="" placeholder="+91736373833" editable={false} style={styles.input} />
            </View>
             
             <View style={styles.view}>
            <Text style={email?styles.focustext:styles.text}>Email ID *</Text>
            <TextInput  style={[email?styles.focus:styles.input]} onFocus={()=>setEmail(true)} onBlur={()=>setEmail(false)} />
            </View>
            
            <View style={styles.view}>
              <TouchableOpacity onPress={()=>setGen(prev=> !prev)}>
            <Text  style={styles.text}>Gender *</Text>
            <TextInput editable={false} value={sex}  style={[styles.input,{height:25},{fontSize:15,fontWeight:'bold',color:'black'}]} />
            </TouchableOpacity>
              <View style={[gen?{display:'none'}:{elevation:10,borderWidth:.001,borderRadius:3,backgroundColor:'white',zIndex:2,marginTop:5}]}>
               <TouchableOpacity onPress={()=>setSex('Male')}><Text style={styles.gen}>Male</Text></TouchableOpacity> 
                <TouchableOpacity onPress={()=>setSex('Female')}><Text style={styles.gen}>Female</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setSex('Others')}><Text style={styles.gen}>others</Text></TouchableOpacity>
              </View>
            </View>

            <View style={styles.view}>
              <TouchableOpacity onPress={()=>setLang(prev=> !prev)}>
              
            <Text  style={styles.text}>Language Spoken *</Text>
            <TextInput editable={false} value={Bhasha} style={[styles.input,{height:25},{fontSize:15,fontWeight:'bold',color:'black'}]} />
            </TouchableOpacity>
            <View style={[lang?{display:'none'}:{elevation:10,borderWidth:.001,borderRadius:3,backgroundColor:'white',zIndex:2,marginTop:5,}]}>
             <TouchableOpacity onPress={()=>setBhasha('Hindi')}><Text style={styles.gen}>Hindi</Text></TouchableOpacity> 
             <TouchableOpacity onPress={()=>setBhasha('English')}><Text style={styles.gen}>English</Text></TouchableOpacity> 
              <TouchableOpacity onPress={()=>setBhasha('Marathi')}><Text style={styles.gen}>Marathi</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setBhasha('Bengali')}><Text style={styles.gen}>Bengali</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setBhasha('Tamil')}><Text style={styles.gen}>Tamil</Text></TouchableOpacity>  
               
              </View>
             
            </View>
          

            <View style={styles.view}>
              <TouchableOpacity onPress={()=>setOccupation(prev=> !prev)}>
              
            <Text  style={styles.text}>Occupation *</Text>
            <TextInput editable={false} value={occu} style={[styles.input,{height:25},{fontSize:15,fontWeight:'bold',color:'black'}]} />
            </TouchableOpacity>
            <View style={[Occupation?{display:'none'}:{elevation:10,borderWidth:.001,borderRadius:3,backgroundColor:'white',zIndex:2,marginTop:5,marginTop:-280}]}>
             <TouchableOpacity onPress={()=>setOccu('Housewife')}><Text style={styles.gen}>Housewife</Text></TouchableOpacity> 
             <TouchableOpacity onPress={()=>setOccu('Teacher')}><Text style={styles.gen}>Teacher</Text></TouchableOpacity> 
              <TouchableOpacity onPress={()=>setOccu('Business')}><Text style={styles.gen}>Business</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setOccu('Student')}><Text style={styles.gen}>Student</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setOccu('Job/Service')}><Text style={styles.gen}>Job/Service</Text></TouchableOpacity>  
             <TouchableOpacity onPress={()=>setOccu('Others')}><Text style={styles.gen}>Others</Text></TouchableOpacity>   
              </View>
             
            </View>
            
            <View style={styles.view}>
            <Text  style={pin?styles.focustext:styles.text}>Pin Code *</Text>
            <TextInput  style={[pin?styles.focus:styles.input]} onFocus={()=>setPin(true)} onBlur={()=>setPin(false)} />
            </View>

            


        </View>
        {/* ========Make save button sticky ======= */}
        
        <View  >
              <View  style={{}} />
              <TouchableOpacity style={{height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#f43397',margin:10,borderRadius:5}}>
                <Text style={{color:'white'}}>Save</Text>
              </TouchableOpacity>
        </View>
       
      </ScrollView>

    

      </View>
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
   
      height:38
      ,
      padding:10,
      marginHorizontal:5,
      color:'#0009',
      fontWeight:'700'
    },
    single:{
      
    }

  });