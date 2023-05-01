import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const groups = [
  { id: 1, name: 'Group 1', color: '#f5a623' },
  { id: 2, name: 'Group 2', color: '#00bfa5' },
  { id: 3, name: 'Group 3', color: '#1e88e5' },
];

const ManageGroup = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const handleOptionPress = (option) => {
    switch (option) {
      case 'Add Member in group':
        navigation.navigate('AddMember');
        break;
      case 'Delete Member in group':
        Alert.alert('Option Selected', option);
        break;
      case 'Manage Members in group':
        navigation.navigate('ManageMember');
        break;
      case 'Edit Group':
        Alert.alert('Option Selected', option);
        break;
      case 'Delete Group':
        Alert.alert('Option Selected', option);
        break;
      case 'Rename Group':
        Alert.alert('Option Selected', option);
        break;
      default:
        break;
    }
    setMenuOpen(false);
  };
  

  const renderGroup = ({ item }) => (
    <TouchableOpacity 
      style={[styles.groupContainer, {backgroundColor: item.color}]}
      onPress={() => {
        setActiveGroup(item.id);
        setMenuOpen(!menuOpen);
      }}
      >
      <Image
        style={styles.groupImage}
        source={{ uri: 'https://via.placeholder.com/50' }}
      />
      <Text style={[styles.groupText, {color: 'white'}]}>{item.name}</Text>
      <MaterialIcons name="more-vert" size={24} color="white" style={styles.menuIcon} />
      {menuOpen && activeGroup === item.id && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={menuOpen}
          onRequestClose={() => setMenuOpen(false)}
        >
          <TouchableWithoutFeedback onPress={() => setMenuOpen(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.menu}>
                  {[
                    'Add Member in group',
                    'Delete Member in group',
                    'Manage Members in group',
                    'Edit Group',
                    'Delete Group',
                    'Rename Group',
                  ].map((option) => (
                    <TouchableOpacity key={option} onPress={() => handleOptionPress(option)}>
                      <Text style={styles.menuText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Groups</Text>
      <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ManageGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  groupText: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 16,
    paddingVertical: 5,
  },
});