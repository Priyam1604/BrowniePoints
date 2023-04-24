import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RewardOptions from './RewardOptions';


const Rewards = () => {
    const [rewards, setRewards] = useState([
      { id: '1', title: 'Reward 1', minBP: 100 },
      { id: '2', title: 'Reward 2', minBP: 200 },
      { id: '3', title: 'Reward 3', minBP: 300 },
    ]);
    const [rewardOptionsVisible, setRewardOptionsVisible] = useState(false);
    const [selectedReward, setSelectedReward] = useState(null);
  
    const navigation = useNavigation();
  
    const toggleRewardOptions = (reward) => {
      setSelectedReward(reward);
      setRewardOptionsVisible(!rewardOptionsVisible);
    };
  
    const handleAddReward = () => {
      navigation.navigate('AddReward');
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.rewardItem}>
        <View>
          <Text style={styles.rewardTitle}>{item.title}</Text>
          <Text style={styles.rewardMinBP}>Min. BP: {item.minBP}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleRewardOptions(item)}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={rewards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddReward}>
          <MaterialCommunityIcons name="plus" size={24} color="white" />
        </TouchableOpacity>
        <RewardOptions
          visible={rewardOptionsVisible}
          onClose={toggleRewardOptions}
          reward={selectedReward}
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  rewardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardMinBP: {
    fontSize: 16,
    color: '#757575',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default Rewards;
