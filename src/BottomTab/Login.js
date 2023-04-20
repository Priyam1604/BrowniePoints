import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
  };

  const navigation = useNavigation();

  const handleSignup = () => {
    // Handle signup logic here
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Brownie Points</Text>
        {/* <Image source={require('/Users/priyam/Brownie_Points/src/BottomTab/1.png')} style={styles.logo} /> */}
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
  <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" style={[styles.visibilityIcon, { marginRight: 10 }]} />
</TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 50,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#F76B8A',
    },
    form: {
      width: '80%',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      color: '#000',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      paddingLeft: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    inputIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
      color: '#000',
    },
    button: {
      backgroundColor: '#F76B8A',
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    switchText: {
      color: '#000',
      marginRight: 10,
    },
    switchButton: {
      padding: 10,
      backgroundColor: '#F76B8A',
      borderRadius: 5,
    },
    switchButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    errorMessage: {
      color: 'red',
      marginTop: 10,
    },
  });
  