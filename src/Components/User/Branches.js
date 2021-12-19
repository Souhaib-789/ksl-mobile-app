import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions,Pressable} from 'react-native'; 
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import data from '../User/data'
export default function Branches({navigation}){

    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location, 'Location aagaiii')
            setLocation(location);
        })();
    }, []);

    
    return(
        <View style={styles.container}>
           {location ?
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    maxZoomLevel={11}
                    minZoomLevel={10}
                >
                
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        
                    >
                        
                        <Entypo name='man' color={'rgb(0,0,256)'} size={50}/>
                    </Marker>
                    {
                        data.map( item=>(
                            <Marker
                            key={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude:  item.longitude,
                            }}
                           
                           >
                               
                                <Text>{item.name}</Text><Entypo name='location-pin' color={'rgb(0,128,0)'} size={50}/>
                           </Marker>
                        )

                        )
                    }

                </MapView> : null

            }
            <Pressable style={styles.where} onPress={()=> navigation.navigate('Form')}>
      <Text style={styles.h}>  Next    <Entypo name="arrow-bold-right" size={20} color="white" /></Text>
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
    },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        where:{
            backgroundColor: 'rgb(50,205,50)',
            width: '90%',
            height: 50,
            marginLeft: 20,
            position: "absolute",
            top: "85%",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
          },
         h:{
           color: 'white',
           fontWeight: 'bold',
           fontSize: 16
         },
  });