import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./1.png')} style={styles.logo} />
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Welcome to Brownie Points</Animated.Text>
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }, {marginTop: 30}]}>Earn points for doing good deeds and redeem them for rewards!</Animated.Text>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={[styles.button, styles.getStartedButton, { marginBottom: 100 }]} onPress={handleGetStarted}>
  <MaterialIcons name="arrow-forward" size={25} color="#fff" />
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>

        {/* <TouchableOpacity style={[styles.button, styles.learnMoreButton]}>
          <MaterialIcons name="info" size={25} color="#F76B8A" />
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity> */}
        <View style={styles.featureSection}>
          <View style={styles.feature}>
            <MaterialIcons name="redeem" size={55} color="#F76B8A" />
            <Text style={styles.featureTitle}>Redeem Rewards</Text>
            {/* <Text style={styles.featureDescription}>Use your points to redeem rewards like gift cards, discounts, and more.</Text> */}
          </View>
          <View style={styles.feature}>
            <MaterialIcons name="event-available" size={55} color="#F76B8A" />
            <Text style={styles.featureTitle}>Track Progress</Text>
            {/* <Text style={styles.featureDescription}>View your progress and track your achievements on your journey to earning rewards.</Text> */}
          </View>
          <View style={styles.feature}>
            <MaterialIcons name="people" size={55} color="#F76B8A" />
            <Text style={styles.featureTitle}>Join a Community</Text>
            {/* <Text style={styles.featureDescription}>Connect with others who share your passion for doing good and earning rewards.</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F76B8A',
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#F76B8A',
  },
  learnMoreButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F76B8A',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  featureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  feature: {
    alignItems: 'center',
    width: '30%',
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333333',
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
  },
});

