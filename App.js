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
      <Stack.Screen name='ManageMember' component={ManageMember}/>
      <Stack.Screen name='Rewards' component={Rewards}/>
      <Stack.Screen name='RewardOptions' component={RewardOptions}/>
      <Stack.Screen name='AddReward' component={AddReward}/>
      <Stack.Screen name='Tasks' component={Tasks}/>
      <Stack.Screen name='AddTask' component={AddTask}/>
      <Stack.Screen name='DBoard' component={DBoard}/>
      <Stack.Screen name='DigitalWallet' component={DigitalWallet}/>
      <Stack.Screen name='GenerateQRCode' component={GenerateQRCode}/>
      <Stack.Screen name='TaskList' component={TaskList}/>
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
