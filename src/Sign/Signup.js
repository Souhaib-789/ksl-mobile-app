import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Pressable,Image } from 'react-native';
import {getAuth,  createUserWithEmailAndPassword} from '../Sign/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Signup({navigation}) {

    const [email,setemail] =useState('');
    const [password,setpassword]=useState('');

    const Register= async()=>{
        try{
          const auth = getAuth();
          await createUserWithEmailAndPassword(auth, email, password);
          alert('congrats signed up')
    
        }catch(err){
          console.log(err.message)
    
        }}
    return (

        <View style={styles.container}>
            <Image source={require('../Images/logo.png')} style={styles.pic}/>
             <TextInput style={styles.input} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" />
           <TextInput style={styles.inputx} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
            <Pressable style={styles.button} onPress={Register} >
                <Text style={styles.text}>Register</Text>
            </Pressable>
            


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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
        marginLeft: '40%',
        
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

    }


}
);
