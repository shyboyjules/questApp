import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const notifications = [
  {
    id: 1,
    icon: 'checkmark-circle-outline',
    title: 'Quest Completed',
    message: 'You successfully completed the "Deliver Package" quest.',
    time: '2 hours ago',
  },
  {
    id: 2,
    icon: 'gift-outline',
    title: 'Reward Earned',
    message: 'You received 50 coins as a reward for your quest.',
    time: '4 hours ago',
  },
  {
    id: 3,
    icon: 'person-add-outline',
    title: 'New Follower',
    message: 'John Doe started following you.',
    time: '1 day ago',
  },
];

const Notification = () => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Ionicons name={item.icon} size={24} color="#0f3c73" style={styles.notificationIcon} />
      <View style={styles.notificationDetails}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbd2da',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f3c73',
    marginBottom: 15,
  },
  notificationList: {
    paddingBottom: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationIcon: {
    marginRight: 15,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notification;
