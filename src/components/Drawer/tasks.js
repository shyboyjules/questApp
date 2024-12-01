import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const TaskerPage = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dotButton}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Avril's Task</Text>

      <View style={styles.taskContainer}>
       
        <View style={styles.row}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/5.jpg" }}
            style={styles.profileImage} 
          />
          <Text style={styles.taskname}>Avril Mahinay</Text>
        </View>

        <Text style={styles.description}>
          I have some printing and copying tasks that need to be completed. If you have access to printing facilities and can help, please let me know.
        </Text>

        <Text style={styles.subDes}>Skill Required:</Text>
        <Text style={styles.sub}>• Printing</Text>
        <Text style={styles.sub}>• Photo Copy</Text>
        <Text style={styles.sub}>• Attention to Detail</Text>
        <Text style={styles.sub}>• Time Management</Text>

        <View style={styles.row}>
          <Text style={styles.subDes}>Deadline: </Text>
          <Text style={styles.trans}>October 04, 2024 - 1:00pm</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subDes}>Payment Amount: </Text>
          <Text style={styles.trans}>Php 50</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subDes}>Payment Method: </Text>
          <Text style={styles.trans}>Gcash</Text>
        </View>

        <Text style={styles.description}>
          Ensure you have the necessary equipment and resources before accepting.
        </Text>
        <Text style={styles.description}>
          If you're interested in this task, you can reach out to the client for more details.
        </Text>

        <TouchableOpacity 
          style={styles.interestedButton} 
          onPress={() => router.push('Upload')}>
          <Text style={styles.interestedButtonText}>INTERESTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  dotButton: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 85,
    marginLeft: 20,
  },
  taskContainer: {
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskname: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5, 
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  subDes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  sub: {
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
  },
  trans: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 30, 
    height: 30, 
    borderRadius: 25, 
    marginRight: 10, 
  },
  interestedButton: {
    width: '45%',
    height: 35,
    backgroundColor: '#0c046a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    alignSelf: 'center',
    left: 70,
    marginTop: 30,
  },
  interestedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskerPage;
