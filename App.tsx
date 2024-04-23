import React, {useState} from 'react';
import {Text, View,TextInput,Image,Button,} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const YourApp = () => {
  return (
    <View
      style={{
        
        backgroundColor: 'beige'

      }}>
    
      <Text style={{marginTop:50,
        marginLeft:25,fontSize:24}}>Log in to your RAKBANK account</Text>

      <TextInput
        style={{
        
        marginLeft:25,
          marginTop:48,
          height: 75,
          width:380,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor:'white',
          borderRadius: 10
        }}
        placeholder="User ID"
      />

      <TextInput
        style={{
          marginLeft:25,
          marginTop:50,
          height: 75,
          width:380,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor:'white',
          borderRadius: 10
        }}
        placeholder="Password"
      />

      
       
      


      <Text style={{
        marginLeft:25,
        fontSize:22,
        marginTop:30,
        }}>Remember my User ID</Text>

      <Text style={{
        marginLeft:25,
        fontSize:22,
        marginTop:18,
        marginBottom:25,
        color:'darkred',
        textDecorationLine: 'underline'
        }}>Manage User ID / Password</Text>

      <Button 
        title="Log in"
        color='black'
        
        
      />

      <Text style={{
        fontSize:15,
        marginTop:25,
        marginBottom:25
        }}>      ---------------------------------------------- or ------------------------------------------------</Text>

      <Button 
        color='white'
        title="Register"
        
        
        
      />
    </View>
  );
};

export default YourApp;