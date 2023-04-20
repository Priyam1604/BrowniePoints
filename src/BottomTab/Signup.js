import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupPress = () => {
    // handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={setGender}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>
          By clicking Signup, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#F76B8A',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F76B8A',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  disclaimerText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  linkText: {
    color: '#F76B8A',
    textDecorationLine: 'underline',
  },
});
