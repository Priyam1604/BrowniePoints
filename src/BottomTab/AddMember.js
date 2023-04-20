import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  
  Platform,
  Button,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


// import {Picker} from '@react-native-picker/picker';


const AddMember = () => {
  const [memberName, setMemberName] = useState('');
  const [memberType, setMemberType] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempPin, setTempPin] = useState('');

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(selectedDate || dateOfBirth);
  };

  const generateTempPin = () => {
    const pin = Math.floor(1000 + Math.random() * 9000);
    setTempPin(pin);
  };

  const submitMember = () => {
    if (!memberName || !memberType || !gender) {
      Alert.alert('Error', 'Please fill in all required fields');
    } else {
      const memberId = 'M' + Math.floor(100000 + Math.random() * 900000);
      const newMember = {
        memberId,
        memberName,
        memberType,
        gender,
        dateOfBirth,
        tempPin,
      };
      console.log(newMember);
      Alert.alert('Success', 'Member added successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Member</Text>
      <TextInput
        style={styles.input}
        placeholder="Member Name"
        onChangeText={setMemberName}
        value={memberName}
      />
      <Picker
        selectedValue={memberType}
        style={styles.picker}
        onValueChange={(itemValue) => setMemberType(itemValue)}
      >
        <Picker.Item label="Select Member Type" value="" />
        <Picker.Item label="Administrator" value="Administrator" />
        <Picker.Item label="Redeemer" value="Redeemer" />
        <Picker.Item label="Earner/Recipient" value="Earner/Recipient" />
      </Picker>
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.datePickerText}>
          {`Date of Birth: ${dateOfBirth.toLocaleDateString()}`}
        </Text>
        <MaterialIcons name="date-range" size={24} color="black" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <TouchableOpacity onPress={generateTempPin} style={styles.tempPinButton}>
        <Text style={styles.tempPinButtonText}>
          {tempPin ? `Temporary PIN: ${tempPin}` : 'Generate Temporary PIN'}
        </Text>
      </TouchableOpacity>
      <Button title="Add Member" onPress={submitMember} />
    </View>
  );}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#FFF',
    },
    picker: {
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      marginBottom: 15,
      backgroundColor: '#FFF',
    },
    datePicker: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#FFF',
    },
    datePickerText: {
      fontSize: 16,
    },
    tempPinButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#FFF',
    },
    tempPinButtonText: {
      fontSize: 16,
    },
  });

  export default AddMember;

