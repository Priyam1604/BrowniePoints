import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const goalsData = [
  {
    name: "Smiggle Backpack",
    group: "A",
    dateAssigned: "2023-01-01",
    browniePoints: 500,
    status: "Not assigned",
  },
  {
    name: "Pencil Case",
    group: "B",
    dateAssigned: "2023-01-15",
    browniePoints: 200,
    status: "Pending",
  },
  {
    name: "Football",
    group: "C",
    dateAssigned: "2023-02-05",
    browniePoints: 300,
    status: "Approved",
  },
  {
    name: "Nike Shoes",
    group: "D",
    dateAssigned: "2023-02-20",
    browniePoints: 800,
    status: "Approved",
  },
];

const DigitalWallet = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleNotificationClick = () => {
    setNotificationVisible(true);
  };

  const handleModalClose = () => {
    setNotificationVisible(false);
  };

  const handleApprove = () => {
    // Perform any necessary actions to approve the task
    setNotificationVisible(false);
  };

  const handleDecline = () => {
    // Perform any necessary actions to decline the task
    setNotificationVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Digital Wallet</Text>
        <TouchableOpacity onPress={handleNotificationClick} style={styles.notificationIcon}>
          <Ionicons name="notifications" size={30} color="#4A90E2" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {goalsData.map((goal, index) => (
          <View key={index} style={styles.goalContainer}>
            <Text style={styles.goalName}>{goal.name}</Text>
            <View style={styles.goalDetails}>
              <Text style={styles.goalInfo}>Group: {goal.group}</Text>
              <Text style={styles.goalInfo}>Date Assigned: {goal.dateAssigned}</Text>
              <Text style={styles.goalInfo}>Brownie Points: {goal.browniePoints}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.goalInfo}>Status: </Text>
              <Text style={styles.statusText}>{goal.status}</Text>
            </View>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemText}>Redeem Voucher</Text>
              <Ionicons name="wallet" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={notificationVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleModalClose}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.notificationModal}
          >
            <Text style={styles.notificationText}>
            Member has finished the task.
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.approveButton]}
                onPress={handleApprove}
              >
                <Text style={styles.actionButtonText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.declineButton]}
                onPress={handleDecline}
              >
                <Text style={styles.actionButtonText}>Decline</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DigitalWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  notificationIcon: {
    padding: 5,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  goalContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  goalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  goalDetails: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  goalInfo: {
    fontSize: 16,
    color: '#666',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  redeemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 30,
  },
  redeemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notificationModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#4A90E2',
    borderWidth: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  approveButton: {
    backgroundColor: '#4A90E2',
  },
  declineButton: {
    backgroundColor: '#FF6B6B',
  },
  actionButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

