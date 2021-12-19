import React,{useState} from 'react';
import { StyleSheet, View, Text, TextInput, Pressable,Image } from 'react-native';
import {getAuth,signInWithEmailAndPassword} from '../Sign/Firebase';



export default function Signin({navigation}) {

    const [email,setemail] =useState('');
    const [password,setpassword]=useState('');

     const Login= async()=>{     
    try{
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home')

    }catch(err){
      console.log(err.message)

    }
}

    return (

        <View style={styles.container}>
            <Image source={require('../Images/logo.png')} style={styles.pic}/>
            <TextInput style={styles.input} onChangeText={(email)=>{setemail(email)}} placeholder="Enter your email" />
            <TextInput style={styles.inputx} onChangeText={(password)=>{setpassword(password)}} placeholder="Enter password" />
            <Pressable style={styles.button} onPress={Login} >
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('Signup')}} style={styles.line} >
                <Text style={styles.lntxt} > Don't have an account? <Text style={styles.link}>Signup here</Text></Text>
            </Pressable>
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 25,
        color: 'purple',
        fontWeight: 'bold',
        marginBottom: '20%',
        marginRight: '50%'

    },
    input: {
        width: 200,
        height: 50,
        padding: 2,
        borderWidth: 1,
        borderColor: "blue",
        marginBottom: '10%',
        borderRadius: 20,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    inputx: {
        width: 200,
        height: 50,
        padding: 2,
        borderWidth: 1,
        borderColor: "blue",
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: 'white'

    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(50,205,50)',
        marginTop: '10%',
        marginLeft: '40%'
    },
    text: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    txtt: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: '5%'
    },
    buttonx: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        marginTop: '5%',
        width: '68%'

    },
    buttony: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'orange',
        marginTop: '5%',
        width: '68%'

    },
    pic:{
        width: 190,
        height: 140,
        marginBottom: '10%',

    },
    line:{
        margin: '5%',
        color: 'grey',
    },
    lntxt:{
        color: 'black',
        marginTop: '10%'
    },
    link:{
        textDecorationLine: 'underline',
        color: 'blue',
    }


}
);
