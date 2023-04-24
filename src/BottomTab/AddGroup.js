import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

const AddGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);
  const [maxMembers, setMaxMembers] = useState('');

  const createGroup = () => {
    Alert.alert(
      'Create Group',
      'Are you sure you want to create the group?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('Group Created') },
      ],
      { cancelable: false },
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Group</Text>

      <TextInput
        style={styles.input}
        onChangeText={setGroupName}
        value={groupName}
        placeholder="Group Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={setMaxMembers}
        value={maxMembers}
        placeholder="Max Members (1-10)"
        keyboardType="number-pad"
        maxLength={2}
      />

      {/* Add your picker implementation here */}

      {image ? (
        <Image source={{ uri: image }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <MaterialIcons name="add-a-photo" size={48} color="#F76B8A" />
        </View>
      )}

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton} onPress={createGroup}>
        <Text style={styles.buttonText}>Create Group</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    borderColor: '#F76B8A',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 30,
  },
  pickerContainer: {
    borderColor: '#F76B8A',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  uploadButton: {
    backgroundColor: '#3DDC97',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: '#F76B8A',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
