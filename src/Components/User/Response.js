import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Response(){
    return(

        <View style={styles.container}>
            <Text>Response is coming...</Text>
            <Text>Please wait!</Text>
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
  });