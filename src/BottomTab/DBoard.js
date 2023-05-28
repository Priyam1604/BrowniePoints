import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, RefreshControl, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DBoard = () => {
    const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const members = [
    {
      id: '1',
      name: 'John Doe',
      photo: require('./p3.png'),
      browniePoints: 150,
      goal: { name: 'Smiggle backpack', progress: 80 },
    },
    {
      id: '2',
      name: 'John Smith',
      photo: require('./p2.png'),
      browniePoints: 235,
      goal: { name: 'Nike shoes', progress: 25 },
    },
    {
        id: '3',
        name: 'John Alex',
        photo: require('./p4.png'),
        browniePoints: 235,
        goal: { name: 'Nike shoes', progress: 48 },
      },
      {
        id: '4',
        name: 'John Smith',
        photo: require('./p2.png'),
        browniePoints: 88,
        goal: { name: 'Football', progress: 79 },
      },
      {
        id: '5',
        name: 'John Doe',
        photo: require('./p3.png'),
        browniePoints: 100,
        goal: { name: 'Football', progress: 80 },
      },
    // Add more members here
  ];

  const onRefresh = () => {
    setRefreshing(true);
    // Add data update logic here
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderMember = ({ item }) => (
    <View style={styles.member}>
      <Image source={item.photo} style={styles.memberPhoto} />
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberPoints}>Brownie Points: {item.browniePoints}</Text>
        <View style={styles.goal}>
          <Text style={styles.goalName}>{item.goal.name}</Text>
          <View style={styles.batteryContainer}>
            <View style={[styles.batteryFill, { width: `${item.goal.progress}%` }]} />
          </View>
          <Text style={styles.goalProgress}>{item.goal.progress}%</Text>
          
        </View>
      </View>
      
    </View>
    
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search members..."
          placeholderTextColor="#999"
        />
        {/* <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('DBoard')}><Ionicons name="md-home-outline" size={27} color="#999" /></TouchableOpacity>
        <MaterialIcons name="account-balance-wallet" size={27} color="#999" />
        <MaterialIcons name="person-outline" size={27} color="#F76B8A" />
        <Ionicons name="trophy-outline" size={27} color="#999" />
        <Ionicons name="md-checkbox-outline" size={27} color="#999" />
      </View> */}
      </View>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      
    </View>
    
    
  );
};

export default DBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#4b9ac9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  member: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  
  memberPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  memberInfo: {
    flex: 1,
    marginLeft: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberPoints: {
    fontSize: 14,
    color: '#999',
  },
  goal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  goalName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  batteryContainer: {
    width: 80,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    marginRight: 5,
  },
  batteryFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#4b9ac9',
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    top: -120,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
