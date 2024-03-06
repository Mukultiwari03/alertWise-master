import { StyleSheet, View, Text, Image, Button,Alert,TextInput, SafeAreaView } from 'react-native'
import React ,{useState} from 'react'
import { Link } from 'expo-router'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , provider } from '../../firebase.js'
import appleIcon from "../../assest/Appel Brand.png"
import googleIcon from "../../assest/Google Brand.png"
import fbIcon from "../../assest/Facebook Brand.png"
import icon from "../../assest/alert-wise-logo-icon.png"
import tab from "../../assest/Tab Bar.png"
import email from "../../assest/emailicon.png"
import eye from "../../assest/eye.png"

const index = () => {
    
        const [text, onChangeText] = useState('alertwise@gmail.com');
        const [number, onChangeNumber] = useState('hello');
    
      const googleAuthh = () =>{
        createUserWithEmailAndPassword(auth, text, number)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
        
      }
    
  return (
    <View>
        {/* Outer view */}
        <Link href="/">
        <View className="text-center w-full">
            <Image source={tab} className="mx-auto ml-6"/>
        </View>
        </Link>
      <View className="flex flex-column items-center justify-center w-full mt-10">
        {/* View for welcome back area */}
        <View className="flex flex-column items-center justify-center w-full">
            <Image source={icon}/>
            <Text className="font-bold text-3xl mt-5">Welcome Back</Text>
            <Text>Your Guardian Against Digital Threats</Text>
        </View>


    {/*google and all three icons  */}
        <View className="flex flex-row gap-4 mt-8 items-center justify-center">
        <Image source={appleIcon}/>
       <Image  source={googleIcon}/>
        <Image source={fbIcon}/>
      </View>
    {/* google and all three icons end */}

    {/* or sign in with */}
    <View className="flex flex-row items-center w-full max-w-[300px] justify-around mt-10">
        <View className="w-[80px] h-[1px] bg-slate-500"></View>
        <Text className="text-slate-400">or sign in with</Text>
        <View className="w-[80px] h-[1px] bg-slate-500"></View>
    </View>


    <View>
         <SafeAreaView>
            <View className="mt-7">
                    <Text className="text-gray-300">Email</Text>
                    <View   className="bg-gray-100 text-lg px-4 py-3 w-[300px] text-start rounded-xl flex flex-row justify-between mb-4">
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={text}
                      keyboardType='email-address'
                    
                      />
                      <Image source={email}/>
                      </View>
            </View>

            <Text className="text-gray-300">Password</Text>   
             <View   className="bg-gray-100 text-lg px-4 py-3 w-[300px] text-start rounded-xl flex flex-row justify-between ">
             <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      keyboardType="default"
                    
                      />
                      <Image source={eye}/>
                      </View>
                    {/* <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      keyboardType='default'
                    
                      />
                      <Image source={eye}/>
                      </View> */}

                    {/* <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder=""
                      keyboardType="default"
                    /> */}
         </SafeAreaView>       
    </View>

{/* sign in button */}
    <Link href="./LoginPage" onPress={ googleAuthh } className=' mt-9'>
          <View className="bg-green-500 w-[300px]  rounded-xl flex justify-center items-center pointer" >
          <Text className="text-white font-bold text-2xl px-8 py-3 w-full text-center">Sign In</Text>
        </View>
        </Link>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})