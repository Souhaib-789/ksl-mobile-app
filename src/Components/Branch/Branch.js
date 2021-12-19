import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Branch() {
    function hello(){
        alert("QR code scanner is not available yet!")
    }
    function pello(){
        alert("Serial No. detector is not available yet!")
    }

    return (

        <View style={styles.container}>

                <View style={styles.head}>
                    <Text style={styles.br}>Welcome,  </Text>
                    <Text style={styles.br}>Branch Manager </Text>
                </View>

            <TouchableOpacity style={styles.btn} onPress={hello}>
                <Text style={styles.btntxt}>Verify by QR Code</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={pello}>
            <Text style={styles.btntxt}>Verify by Serial No.</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head:{
        position: 'absolute',
        bottom: '81%',
        right: '45%'
    },
    btn: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: "rgb(50,205,50)",
        padding: 20,
        margin: 30,
        width: 250,
        height: 90
      },
      btntxt:{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
      },
      br:{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'blue'
      }
});