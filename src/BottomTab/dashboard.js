import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const kidsData = [
  {
    name: "John Doe",
    browniePoints: 500,
    goalTarget: 1000,
  },
  {
    name: "Jane Smith",
    browniePoints: 1400,
    goalTarget: 2000,
  },
  {
    name: "Bob Johnson",
    browniePoints: 200,
    goalTarget: 800,
  },
  {
    name: "Lucy David",
    browniePoints: 479,
    goalTarget: 500,
  },
];

const Dashboard = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Kids Dashboard</Text>
        {kidsData.map((kid, index) => (
          <View key={index} style={styles.kidContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.kidName}>{kid.name}</Text>
              <View style={styles.browniePointsContainer}>
                <Text style={styles.browniePointsLabel}>Brownie Points:</Text>
                <Text style={styles.browniePoints}>{kid.browniePoints}</Text>
              </View>
            </View>
            <View style={styles.goalContainer}>
              <Text style={styles.goalLabel}>Goal:</Text>
              <View style={styles.goalTrackerContainer}>
                <View style={[styles.goalTrackerProgress, { width: `${(kid.browniePoints / kid.goalTarget) * 100}%` }]} />
              </View>
              <View style={styles.goalDetailsContainer}>
                <Text style={styles.goalProgress}>{((kid.browniePoints / kid.goalTarget) * 100).toFixed(2)}%</Text>
                <Text style={styles.goalTarget}>{kid.browniePoints}/{kid.goalTarget} BP</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavigationIcon} onPress={() => navigation.navigate('DBoard')}>
          <Ionicons name="md-home" size={27} color="#666" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIcon} onPress={() => navigation.navigate('DigitalWallet')}>
          <MaterialIcons name="account-balance-wallet" size={24} color="#666" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIcon} onPress={() => navigation.navigate('ManageProfile')}>
  <MaterialIcons name="person-outline" size={27} color="#666" />
</TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavigationIcon}>
          <Ionicons name="trophy" size={27} color="#666" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavigationIcon} onPress={() => navigation.navigate('TaskList')}>
          <Ionicons name="md-checkbox-outline" size={27} color="#666" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    scrollView: {
      paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 70,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    kidContainer: {
      backgroundColor: '#FFF',
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    kidName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 10,
    },
    browniePointsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    browniePointsLabel: {
      fontSize: 18,
      marginRight: 5,
    },
    browniePoints: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    goalContainer: {
      alignItems: 'center',
    },
    goalLabel: {
      fontSize: 18,
      marginBottom: 10,
    },
    goalTrackerContainer: {
      height: 20,
      backgroundColor: '#ddd',
      borderRadius: 10,
      width: '100%',
      overflow: 'hidden',
    },
    goalTrackerProgress: {
      height: '100%',
      backgroundColor: '#F76B8A',
    },
    goalDetailsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
    },
    goalProgress: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    goalTarget: {
      fontSize: 16,
      color: '#666',
    },
    separator: {
      height: 1,
      backgroundColor: '#CCC',
      marginVertical: 20,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerText: {
      fontSize: 14,
      color: '#999',
    },
    footerLink: {
      fontSize: 14,
      color: '#F76B8A',
      fontWeight: 'bold',
    },
    bottomNavigation: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      paddingHorizontal: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    bottomNavigationIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF'
    },
    bottomNavigationText: {
      fontSize: 10,
      color: '#666',
      marginTop: 5,
    },
    homeIcon: {
      backgroundColor: '#FFF',
      padding: 12,
      borderRadius: 20,
      marginBottom: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    walletIcon: {
        backgroundColor: '#F76B8A',
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
      },
      walletText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
      kidCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      },
      kidDetails: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      kidImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      kidNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      kidName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
      },
      kidBadge: {
        backgroundColor: '#F76B8A',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      kidBadgeText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
      },
      kidPoints: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F76B8A',
        marginTop: 5,
      },
      kidProgressBarContainer: {
        flex: 1,
        marginLeft: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#ddd',
      },
      kidProgressBar: {
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#F76B8A',
      },
      kidProgressBarText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
        marginTop: 5,
      },
    });
    
