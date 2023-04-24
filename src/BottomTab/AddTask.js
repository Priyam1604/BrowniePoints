import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectMultiple from 'react-native-select-multiple';

const groups = ['Group 1', 'Group 2', 'Group 3'];
const rewards = ['Reward 1', 'Reward 2', 'Reward 3'];

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [dueTime, setDueTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedRewards, setSelectedRewards] = useState([]);

  const addTask = () => {
    Alert.alert(
      'Add Task',
      'Are you sure you want to add the task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('Task Added') },
      ],
      { cancelable: false },
    );
  };

  const onSelectionsChange = (name, selectedItems) => {
    if (name === 'group') {
      setSelectedGroups(selectedItems);
    } else {
      setSelectedRewards(selectedItems);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>

      <TextInput
        style={styles.input}
        onChangeText={setTaskName}
        value={taskName}
        placeholder="Task Name"
      />

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateButton}>
          Due Date: {dueDate.toDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={dueDate}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDueDate(selectedDate);
            }
          }}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <Text style={styles.timeButton}>
          Due Time: {dueTime.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          mode="time"
          value={dueTime}
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              setDueTime(selectedTime);
            }
          }}
        />
      )}

      <Text style={styles.pickerLabel}>Select Group:</Text>
      <SelectMultiple
        items={groups}
        selectedItems={selectedGroups}
        onSelectionsChange={(selected) => onSelectionsChange('group', selected)}
      />

      <Text style={styles.pickerLabel}>Select Reward:</Text>
      <SelectMultiple
        items={rewards}
        selectedItems={selectedRewards}
        onSelectionsChange={(selected) => onSelectionsChange('reward', selected)}
      />

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 30,
  },
  dateButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  timeButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default AddTask;

