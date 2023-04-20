import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppLoading from 'expo-app-loading';
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
import { useState } from 'react';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Brownie Points' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='ManageProfile' component={ManageProfile}/>
      <Stack.Screen name='AddGroup' component={AddGroup}/>
      <Stack.Screen name='ManageGroup' component={ManageGroup}/>
      <Stack.Screen name='AddMember' component={AddMember}/>

    </Stack.Navigator>
  );
}

export default function App() {
  const [ready, setReady] =  useState(false);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
