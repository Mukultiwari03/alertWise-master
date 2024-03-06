import { StyleSheet, View, Text, Image, Button,Alert } from 'react-native'
import React from 'react'
import icon from "../assest/alert-wise-logo-icon.png"
import ill from "../assest/ill.png"
import logo from "../assest/alert-wise-logo.png"

import appleIcon from "../assest/Appel Brand.png"
import googleIcon from "../assest/Google Brand.png"
import fbIcon from "../assest/Facebook Brand.png"
import { Link } from 'expo-router'
const index = () => {
  return (
    <View>
      <View className="w-full max-h-[740px] flex flex-column items-center justify-center">
       <Image source={icon} />
       <Image source={ill} className="mt-[50px]"/>
       <Image source={logo} className="mt-[75px]"/>
        
        {/* Sign in start here */}
        <Link href="./LoginPage" className=' mt-9'>
          <View className="bg-green-500 w-[300px]  rounded-xl flex justify-center items-center pointer" >
          <Text className="text-white font-bold text-2xl px-8 py-3 w-full text-center">Sign In</Text>
        </View>
        </Link>
        
        {/* Sign in start ends here */}
       
      <View className="flex flex-row gap-4 mt-4 ">
        <Image source={appleIcon}/>
        <Image source={googleIcon}/>
        <Image source={fbIcon}/>
      </View>
      <View className="flex flex-row gap-1 mt-3">
        <Text>do you not have account?</Text> 
        <Link href="#" className='text-blue-600 underline pointer'>Sign up</Link>
      </View>

      </View>
    </View>
  )
};

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MontserratLight: {
    fontFamily: 'Montserrat-Light',
    fontSize: 20,
  },
  MontserratRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  MontserratItalic: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 20,
  },
  MontserratLight: {
    fontFamily: 'Montserrat-Thin',
    fontSize: 20,
  },
});