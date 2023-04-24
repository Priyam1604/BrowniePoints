import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Alert } from 'react-native';

const RewardOptions = ({ visible, onClose, reward }) => {
  const [option, setOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleOption = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleSave = () => {
    // Perform the necessary action based on the selected option
    // You may want to call an API to update the reward information on the server
    // For now, let's display an alert with the input value
    Alert.alert(option, inputValue);
    setInputValue('');
    setOption('');
    onClose();
  };

  const handleCancel = () => {
    setInputValue('');
    setOption('');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {option ? (
            <>
              <Text style={styles.modalTitle}>{option}</Text>
              <TextInput
                style={styles.modalInput}
                onChangeText={setInputValue}
                value={inputValue}
                autoFocus={true}
                placeholder={`Enter new ${option}`}
              />
              <View style={styles.modalActions}>
                <TouchableOpacity
                  onPress={handleCancel}
                  style={[styles.modalButton, styles.modalButtonCancel]}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSave}
                  style={[styles.modalButton, styles.modalButtonSave]}
                >
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => handleOption('Rename Reward')}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Rename Reward</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleOption('Change Minimum Required Brownie Points')}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Change Minimum Required Brownie Points</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleOption('Delete Reward')}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Delete Reward</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleOption('Get Info')}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Get Info</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  optionButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalButtonCancel: {
    backgroundColor: '#E0E0E0',
  },
  modalButtonSave: {
    backgroundColor: '#4CAF50',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RewardOptions;
