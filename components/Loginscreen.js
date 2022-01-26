import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function Loginscreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const hi = () => {
    let static_username = 'Asanmydeen';
    let static_password = 'Asan123';
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // if (reg.test(email) === true) {
    //   if(password.length>8){
    //     console.log("password and username correct")
    //   }
    // } else {
    //   console.log('email wrong');
    // }
    if (username === static_username && password === static_password) {
      console.log('login Successful');
      navigation.navigate('Home', {username: username});
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/log2.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#000000"
          onChangeText={username => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <Button title="submit" onPress={hi} />
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

  image: {
    marginBottom: 40,
    height: 100,
    width: 100,
  },

  inputView: {
    backgroundColor: '#9AD0EC',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
