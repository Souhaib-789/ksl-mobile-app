import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, ScrollView, } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { db, addDoc, collection } from "../../Sign/Firebase";
import { storage } from "../../Sign/Firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export default function Form({ navigation }) {

    // const [image, setimage] = useState('');
    const [name, setname] = useState('');
    const [fname, setfname] = useState('');
    const [cnic, setcnic] = useState('');
    const [members, setmembers] = useState('');
    const [income, setincome] = useState('');
    const [selectedValue, setSelectedValue] = useState("java");
    const [selectedhelp, setSelectedhelp] = useState("java");


    //onPress function to send data
    const SendData = async () => {
        try{
            var obj = {
                name,
                fname,
                cnic,
                members,
                income,
                selectedValue,
                selectedhelp
            }
            let data = collection(db, 'formdata');
            await addDoc(data, obj);
        }catch(err){
            console.log(err.message)
        }
    }

    //Function to pick image
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    }




    return (
        // <SafeAreaView>
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View style={styles.jh}>
                    <View style={styles.subdiv}>


                        <Text style={styles.head}>Name:</Text>
                        <TextInput onChangeText={(name) => { setname(name) }} style={styles.input} placeholder='Enter name' />

                        <Text style={styles.head}>Father Name:</Text>
                        <TextInput onChangeText={(fname) => { setfname(fname) }} style={styles.input} placeholder='Enter father name' />

                        <Text style={styles.head}>CNIC #:</Text>
                        <TextInput onChangeText={(cnic) => { setcnic(cnic) }} style={styles.input} placeholder='Enter CNIC no.' />

                        <Text style={styles.head}>Total no. of family members:</Text>
                        <TextInput onChangeText={(members) => { setmembers(members) }} style={styles.input} placeholder='Enter no. of family members' />

                        <Text style={styles.head}>Monthly Income</Text>
                        <TextInput onChangeText={(income) => { setincome(income) }} style={styles.input} placeholder='Enter monthly income' />





                        <Text style={styles.head}>Saylani Branch:</Text>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Aliabad" value="Aliabad" />
                            <Picker.Item label="Numaish chowrangi" value="Numaish chowrangi" />
                            <Picker.Item label="Saylani house phase 2" value="Saylani house phase 2" />
                            <Picker.Item label="Touheed commercial" value="Touheed commercial" />
                            <Picker.Item label="Sehar Commercial" value="Sehar Commercial" />
                            <Picker.Item label="Jinnah avenue" value="Jinnah avenue" />
                            <Picker.Item label="Johar chowrangi" value="Johar chowrangi" />
                            <Picker.Item label="Johar chowrangi 2" value="Johar chowrangi 2" />
                            <Picker.Item label="Hill park" value="Hill park" />
                        </Picker>

                        <Text style={styles.head}>Help Category</Text>
                        <Picker
                            selectedValue={selectedhelp}
                            onValueChange={(itemValue, itemIndex) => setSelectedhelp(itemValue)}
                        >
                            <Picker.Item label="Monthly Ration" value="Monthly Ration"/>
                            <Picker.Item label="Daily 1 time food" value="Daily 1 time food" />
                            <Picker.Item label="Daily 2 time food" value="Daily 2 time food" />
                            <Picker.Item label="Daily 3 time food" value="Daily 3 time food" />
                        </Picker>



                        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                            <Text style={styles.buttonText}> Applicant's picture <Entypo name="image" size={17} color="white" /></Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                        <Text style={styles.buttonText}>  CNIC Front Pic <Entypo name="image-inverted" size={18} color="white" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                        <Text style={styles.buttonText}>  CNIC Back Pic <Entypo name="image-inverted" size={18} color="white" /></Text>
                    </TouchableOpacity>

                        <Pressable style={styles.where} onPress={SendData, ()=> navigation.navigate('Response')}>
                            <Text style={styles.h}>  Submit  <Entypo name="publish" size={18} color="white" /></Text>
                        </Pressable>
                    </View>
                    {/* () => navigation.navigate('Response') */}
                </View>

            </View>
        </ScrollView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    head: {
        fontWeight: 'bold',
        fontSize: 13,
        margin: 2,
        color: 'rgb(0,0,205)',
        marginTop: 15
        // marginRight: 120,
    },
    input: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        height: 40,
        marginBottom: 5

    },
    img: {
        width: 50,
        height: 40
    },
    where: {
        backgroundColor: 'rgb(50,205,50)',
        width: '50%',
        height: 50,
        marginLeft: '45%',
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    h: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    jh: {
        marginBottom: 10
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(50,205,50)',
        marginLeft: 30,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        padding: 2,
    },
    scroll: {
        padding: 20,
        backgroundColor: '#eee',
        marginTop: 50
    }
});
