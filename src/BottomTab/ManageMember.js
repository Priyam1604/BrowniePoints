import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const memberData = [
  {
    id: '1',
    name: 'John Doe',
    type: 'Administrator',
    image: require('./p1.png'),
  },
  {
    id: '2',
    name: 'Jane Doe',
    type: 'Redeemer',
    image: require('./p2.png'),
  },
  {
    id: '3',
    name: 'Bob Smith',
    type: 'Earner/Recipient',
    image: require('./p3.png'),
  },
];

const ManageMember = () => {
  const navigation = useNavigation();
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberOption = (memberId) => {
    if (selectedMember === memberId) {
      setSelectedMember(null);
    } else {
      setSelectedMember(memberId);
    }
  };

  const renderMemberOptions = (memberId) => {
    if (selectedMember === memberId) {
      return (
        <View style={styles.memberOptionContainer}>
          <TouchableOpacity style={styles.memberOption}>
            <Ionicons name="pencil" size={24} color="#3F51B5" />
            <Text style={styles.memberOptionText}>Edit Member</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberOption}>
            <Ionicons name="trash" size={24} color="#D32F2F" />
            <Text style={styles.memberOptionText}>Delete Member</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberOption}>
            <Ionicons name="card-outline" size={24} color="#4CAF50" />
            <Text style={styles.memberOptionText}>Add Reward</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memberOption} onPress={() => navigation.navigate('GenerateQRCode')}>
            <Ionicons name="qr-code-outline" size={24} color="#FFA000" />
            <Text style={styles.memberOptionText}>Generate QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderMemberList = () => {
    return memberData.map((member, index) => {
      const backgroundColor =
        index % 3 === 0
          ? '#C4E0F9'
          : index % 3 === 1
          ? '#FFCCE5'
          : '#C9E5C1';

      return (
        <View key={member.id}>
          {renderMemberOptions(member.id)}
          <TouchableWithoutFeedback
            onPress={() => handleMemberOption(member.id)}
          >
            <View style={[styles.memberContainer, { backgroundColor }]}>
              <Image source={member.image} style={styles.memberImage} />
              <View style={styles.memberDetails}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberType}>{member.type}</Text>
              </View>
              <TouchableOpacity
                style={styles.memberOptionButton}
                onPress={() => handleMemberOption(member.id)}
              >
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Members</Text>
      {renderMemberList()}
    </View>
  );
};

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
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  memberDetails: {
    flex: 1,
    marginLeft: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberType: {
    fontSize: 14,
    color: '#999',
  },
  memberOptionButton: {
    padding: 10,
  },
  memberOptionContainer: {
    position: 'absolute',
    right: 10,
    top: -90, // Change this value to -90
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  
  
  memberOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  memberOptionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ManageMember;
