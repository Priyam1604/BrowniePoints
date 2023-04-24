import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <View style={styles.logoContainer}>
          <Image source={require('/Users/priyam/Brownie_Points/assets/logo.png')} style={styles.logo} />
        </View> */}
        <Text style={[styles.title, { fontSize: 30 }, { marginBottom: 30 }]}>Brownie Points</Text>
        <Text style={styles.subtitle}>Turn good behaviour into great rewards!</Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
        <Text style={styles.footerText}>© 2023 Brownie Points. All rights reserved.</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  logoContainer: {
    backgroundColor: '#F76B8A',
    borderRadius: 50,
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F76B8A',
    padding: 12,
    borderRadius: 30,
    width: '60%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
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
  getStartedButton: {
    backgroundColor: '#F76B8A',
    marginTop: -25,
  },
  learnMoreContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  learnMoreText: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    marginTop: 50,
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18
  },
  
  learnMoreArrow: {
    marginLeft: 5,
  },
});
