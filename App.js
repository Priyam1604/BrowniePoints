import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
//import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/BottomTab/Home';
import Profile from './src/BottomTab/Profile';
import Detail from './src/Stack/Detail';
import Login from './src/BottomTab/Login';
import Signup from './src/BottomTab/Signup';
import Dashboard from './src/BottomTab/dashboard';
import ManageProfile from './src/BottomTab/ManageProfile';
import AddGroup from './src/BottomTab/AddGroup';
import ManageGroup from './src/BottomTab/ManageGroup';
import AddMember from './src/BottomTab/AddMember';
import ManageMember from './src/BottomTab/ManageMember';
import Rewards from './src/BottomTab/Rewards';
import RewardOptions from './src/BottomTab/RewardOptions';
import AddReward from './src/BottomTab/AddReward';
import Tasks from './src/BottomTab/Tasks';
import AddTask from './src/BottomTab/AddTask';
import DBoard from './src/BottomTab/DBoard';
import DigitalWallet from './src/BottomTab/DigitalWallet';
import GenerateQRCode from './src/BottomTab/GenerateQRCode';
import TaskList from './src/BottomTab/TaskList';
import SettingsPage from './src/BottomTab/SettingsPage';

const Stack = createStackNavigator();

function StackNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Brownie Points' component={Home}  />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Login' component={Login}  />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='ManageProfile' component={ManageProfile} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='AddGroup' component={AddGroup} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='ManageGroup' component={ManageGroup} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='AddMember' component={AddMember} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='ManageMember' component={ManageMember} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='Rewards' component={Rewards} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='RewardOptions' component={RewardOptions} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='AddReward' component={AddReward} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='Tasks' component={Tasks} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='AddTask' component={AddTask} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='DBoard' component={DBoard} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='DigitalWallet' component={DigitalWallet} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='GenerateQRCode' component={GenerateQRCode} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='TaskList' component={TaskList} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='SettingsPage' component={SettingsPage} options={{ headerRight: NotificationsIcon }} />
      <Stack.Screen name='Notifications' component={NotificationsScreen} options={{ headerRight: () => <NotificationsIcon /> }} />
    </Stack.Navigator>
  );
}

const NotificationsIcon = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Notifications');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.notificationsIcon}>
      <MaterialIcons name="notifications" size={24} color="black" />
      <View style={styles.notificationCount}>
        <Text style={styles.notificationCountText}>5+</Text>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = () => {
  const notifications = [
    { id: 1, text: "David has done the 'Feed the Dog' task" },
    { id: 2, text: "Lucy has finished 'Home work'" },
    { id: 3, text: "John has done washing the dishes" },
    { id: 4, text: "Lucy has cleaned her room" },
  ];

  return (
    <View style={styles.container}>
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationItem}>
          <Text style={styles.notificationText}>{notification.text}</Text>
          <View style={styles.buttonsContainer}>
            <Button title="Approve" onPress={() => console.log("Approved")} />
            <Button title="Decline" onPress={() => console.log("Declined")} />
          </View>
        </View>
      ))}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  notificationsIcon: {
    marginRight: 20,
  },
  notificationCount: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#F76B8A',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCountText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  notificationItem: {
    marginBottom: 15,
  },
  notificationText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default App;
