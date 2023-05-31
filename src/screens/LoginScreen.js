import {View, Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <View style={{styles.container}}>
        <View style={{styles.wrapper}}>
            <TextInput placeholder="Enter email"/>
        </View>
      <Text>LoginScreen</Text>
    </View>
  );
}
