import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ManageProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Profile</Text>

      <TouchableOpacity onPress={() => navigation.navigate('AddGroup')}>
        <View style={[styles.optionContainer, styles.addGroupContainer]}>
          <MaterialIcons name="group-add" size={40} color="#FFF" />
          <Text style={styles.optionText}>Add Group</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ManageGroup')}>
      <View style={[styles.optionContainer, styles.manageGroupContainer]}>
        <MaterialIcons name="group" size={40} color="#FFF" />
        <Text style={styles.optionText}>Manage Group</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
      <View style={[styles.optionContainer, styles.rewardsContainer]}>
        <Ionicons name="trophy-outline" size={40} color="#FFF" />
        <Text style={styles.optionText}>Rewards</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
      <View style={[styles.optionContainer, styles.manageTasksContainer]}>
        <MaterialIcons name="playlist-add-check" size={40} color="#FFF" />
        <Text style={styles.optionText}>Manage Tasks</Text>
      </View>
      </TouchableOpacity>

      <View style={[styles.optionContainer, styles.settingsContainer]}>
        <Ionicons name="settings-outline" size={40} color="#FFF" />
        <Text style={styles.optionText}>Settings</Text>
      </View>

      <View style={styles.bottomNavigation}>
        <Ionicons name="md-home-outline" size={27} color="#999" />
        <MaterialIcons name="account-balance-wallet" size={27} color="#999" />
        <MaterialIcons name="person-outline" size={27} color="#F76B8A" />
        <Ionicons name="trophy-outline" size={27} color="#999" />
        <Ionicons name="md-checkbox-outline" size={27} color="#999" />
      </View>
    </View>
  );
};

export default ManageProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addGroupContainer: {
    backgroundColor: '#FF7B54',
  },
  manageGroupContainer: {
    backgroundColor: '#58CCED',
  },
  rewardsContainer: {
    backgroundColor: '#F76B8A',
  },
  manageTasksContainer: {
    backgroundColor: '#3DDC97',
  },
  settingsContainer: {
    backgroundColor: '#A567F2',
  },
  optionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#FFF',
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
});
