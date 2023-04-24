import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddReward = ({ navigation }) => {
  const [rewardName, setRewardName] = useState('');
  const [requiredBP, setRequiredBP] = useState('');

  const handleBPChange = (text) => {
    // Ensure that the entered value is an integer
    if (/^\d*$/.test(text)) {
      setRequiredBP(text);
    }
  };
  const handleAddReward = () => {
    Alert.alert(
      'Confirm Reward',
      `Are you sure you want to create the reward "${rewardName}" with ${requiredBP} Brownie Points?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Call an API to add the reward
            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Reward Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setRewardName}
        value={rewardName}
        placeholder="Enter reward name"
      />
      <Text style={styles.label}>Required Brownie Points</Text>
      <TextInput
  style={styles.input}
  onChangeText={handleBPChange}
  value={requiredBP}
  placeholder="Enter required Brownie Points"
  keyboardType="number-pad" // Use 'number-pad' to show only the numeric keyboard
/>

      <TouchableOpacity style={styles.button} onPress={handleAddReward}>
        <Text style={styles.buttonText}>Add Reward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddReward;
