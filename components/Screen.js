import {View, Text} from 'react-native';
import React from 'react';

export default function Screen({route}) {
  const {username} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Hello {username}!!!</Text>
    </View>
  );
}
