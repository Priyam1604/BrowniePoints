import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', dueDate: '2023-05-01', reward: 'Reward 1' },
    { id: '2', title: 'Task 2', dueDate: '2023-05-10', reward: 'Reward 2' },
    { id: '3', title: 'Task 3', dueDate: '2023-05-20', reward: 'Reward 3' },
  ]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigation = useNavigation();
  const toggleMenu = (task) => {
    setSelectedTask(task);
    setMenuVisible(!menuVisible);
  };

//   const handleAddReward = () => {
//       navigation.navigate('AddReward');
//     };

  const handleRenameTask = () => {
    console.log('Rename Task');
    // Implement renaming functionality here
  };

  const handleDeleteTask = () => {
    console.log('Delete Task');
    // Implement deleting functionality here
  };

  const handleSetDueTime = () => {
    console.log('Set Due Time');
    // Implement setting due time functionality here
  };

  const handleAddTask = () => {
    navigation.navigate('AddTask');
    // Implement adding task functionality here
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <View>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskDueDate}>Due: {item.dueDate}</Text>
        <Text style={styles.taskReward}>Reward: {item.reward}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleMenu(item)}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal animationType="fade" transparent visible={menuVisible}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        />
        <View style={styles.modalMenu}>
          <TouchableOpacity onPress={handleRenameTask}>
            <Text style={styles.modalOption}>Rename Task</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteTask}>
            <Text style={styles.modalOption}>Delete Task</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSetDueTime}>
            <Text style={styles.modalOption}>Set Due Time</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 20,
      },
      taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 10,
        elevation: 5,
      },
      taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      taskDueDate: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
      },
      taskReward: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
      },
      addButton: {
        backgroundColor: '#3DDC97',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
        elevation: 10,
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalMenu: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        elevation: 10,
        minWidth: 200,
      },
      modalOption: {
        fontSize: 18,
        marginBottom: 15,
      },
    });
    
    export default Tasks;
    
