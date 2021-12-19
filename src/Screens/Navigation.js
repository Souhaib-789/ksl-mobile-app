import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Branches from '../Components/User/Branches';
import Form from '../Components/User/Form';
import Response from '../Components/User/Response';
import Branch from '../Components/Branch/Branch';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
          {headerShown: false}
      }>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} /> 
         <Stack.Screen name="Home" component={Branches} /> 
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Response" component={Response} />
         <Stack.Screen name="Branch" component={Branch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

