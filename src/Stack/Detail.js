import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const toggleSwitch = () => {
    setDarkMode(previousState => !previousState);
  };

  const containerStyle = darkMode ? styles.darkContainer : styles.container;
  const textStyle = darkMode ? styles.darkText : styles.lightText;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={[styles.title, textStyle]}>Brownie Points</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>
      <Text style={[styles.subtitle, textStyle]}>Turn good behaviour into great rewards!</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/google.png')} style={styles.socialLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/facebook.png')} style={styles.socialLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/twitter.png')} style={styles.socialLogo} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.footerText, textStyle]}>© 2023 Brownie Points. All rights reserved.</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  button: {
    padding: 12,
    borderRadius: 30,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#F76B8A',
  },
  signupButton: {
    backgroundColor: '#4b9ac9',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  socialButton: {
    padding: 12,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  socialLogo: {
    width: 30,
    height: 30,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18,
  },
});

