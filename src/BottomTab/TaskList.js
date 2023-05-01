// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// const tasks = [
//   {
//     id: 1,
//     memberName: 'John Doe',
//     profilePhoto: require('./p2.png'),
//     task: 'Design website',
//     browniePoints: 30,
//     status: 'Not Completed',
//   },
//   {
//     id: 2,
//     memberName: 'Jane Smith',
//     profilePhoto: require('./p3.png'),
//     task: 'Implement new feature',
//     browniePoints: 40,
//     status: 'In Progress',
//   },
//   {
//     id: 3,
//     memberName: 'William Johnson',
//     profilePhoto: require('./p4.png'),
//     task: 'Bug fixing',
//     browniePoints: 20,
//     status: 'Completed',
//   },
// ];

// const TaskList = () => {
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Not Completed':
//         return 'close-circle-outline';
//       case 'In Progress':
//         return 'time-outline';
//       case 'Completed':
//         return 'checkmark-circle-outline';
//       default:
//         return 'alert-circle-outline';
//     }
//   };

//   const renderTask = ({ item }) => (
//     <LinearGradient
//       colors={['#F0F0F0', '#E0E0E0']}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.taskContainer}
//     >
//       <Image style={styles.profilePhoto} source={item.profilePhoto} />
//       <View style={styles.taskInfo}>
//         <Text style={styles.memberName}>{item.memberName}</Text>
//         <Text style={styles.task}>{item.task}</Text>
//         <View style={styles.browniePointsContainer}>
//           <Text style={styles.browniePoints}>{item.browniePoints} Brownie Points</Text>
//         </View>
//       </View>
//       <TouchableOpacity style={styles.statusContainer}>
//         <Ionicons
//           name={getStatusIcon(item.status)}
//           size={24}
//           color={item.status === 'Completed' ? '#4CAF50' : '#F44336'}
//         />
//         <Text style={styles.statusText}>{item.status}</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Task List</Text>
//       <FlatList
//         data={tasks}
//         renderItem={renderTask}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default TaskList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingHorizontal: 20,
//     paddingTop: 60,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   taskContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginBottom: 15,
//     elevation: 2,
//   },
//   profilePhoto: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   taskInfo: {
//     flex: 1,
//     marginRight: 10,
//   },
//   memberName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   task: {
//     fontSize: 16,
//     color: '#757575',
//   },
//   browniePointsContainer: {
//     backgroundColor: '#FFC107',
//     borderRadius: 5,
//     paddingHorizontal: 5,
//     marginTop: 5,
//   },
//   browniePoints: {
//     fontSize: 14,
//     color: '#212121',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statusText: {
//     fontSize: 14,
//     marginLeft: 5,
//     fontWeight: 'bold',
//     color: '#424242',
//   },
// });


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// ... tasks array remains the same
const tasks = [
    {
      id: 1,
      memberName: 'John Doe',
      profilePhoto: require('./p2.png'),
      task: 'Finish Homework',
      browniePoints: 30,
      status: 'Not Completed',
      dueDate: '2023-05-01 17:00:00',
    },
    {
      id: 2,
      memberName: 'Jane Smith',
      profilePhoto: require('./p3.png'),
      task: 'Clean the Bedroom',
      browniePoints: 40,
      status: 'In Progress',
      dueDate: '2023-05-01 17:00:00',
    },
    {
      id: 3,
      memberName: 'William Johnson',
      profilePhoto: require('./p4.png'),
      task: 'Dog Walk',
      browniePoints: 20,
      status: 'Completed',
      dueDate: '2023-05-01 17:00:00',
    },
    {
        id: 4,
        memberName: 'John Doe',
        profilePhoto: require('./p2.png'),
        task: 'Wash the dishes',
        browniePoints: 30,
        status: 'In Progress',
        dueDate: '2023-05-01 17:00:00',
      },
      {
        id: 5,
        memberName: 'Jane Smith',
        profilePhoto: require('./p3.png'),
        task: 'Take out rubbish',
        browniePoints: 40,
        status: 'Completed',
        dueDate: '2023-05-01 17:00:00',
      },
  ];
const TaskList = () => {
  const getStatusIcon = (status) => {
    switch (status) {
        case 'Not Completed':
          return 'close-circle-outline';
        case 'In Progress':
          return 'time-outline';
        case 'Completed':
          return 'checkmark-circle-outline';
        default:
          return 'alert-circle-outline';
      }
    // ... getStatusIcon function remains the same
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <RectButton style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={24} color="#fff" />
        </RectButton>
      </Animated.View>
    );
  };

  const renderTask = ({ item }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <LinearGradient
        colors={['#F0F0F0', '#E0E0E0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.taskContainer}
      >
        <Image style={styles.profilePhoto} source={item.profilePhoto} />
        <View style={styles.taskInfo}>
          <Text style={styles.memberName}>{item.memberName}</Text>
          <Text style={styles.task}>{item.task}</Text>
          <View style={styles.browniePointsContainer}>
            <Text style={styles.browniePoints}>
              {item.browniePoints} Brownie Points
            </Text>
          </View>
          <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
        </View>
        <TouchableOpacity style={styles.statusContainer}>
          <Ionicons
            name={getStatusIcon(item.status)}
            size={24}
            color={item.status === 'Completed' ? '#4CAF50' : '#F44336'}
          />
          <Text style={styles.statusText}>{item.status}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add-outline" size={30} color="#FFF" />
      </TouchableOpacity> */}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: 40,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 2,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  task: {
    fontSize: 16,
    color: '#757575',
  },
  browniePointsContainer: {
    backgroundColor: '#FFC107',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  browniePoints: {
    fontSize: 14,
    color: '#212121',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#424242',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
  },
  floatingButton: {
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 4,
  },
  dueDate: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
});
