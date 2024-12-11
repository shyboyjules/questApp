import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Home = () => {
    const [tasks, setTasks] = useState([]); // State to store fetched tasks
    const [loading, setLoading] = useState(true); // State for loading status

    // Fetch data when the component mounts
    useEffect(() => {
        fetch('http://localhost:5038/api/QuestApp/getquest') // Adjust URL if running on a real device
            .then(response => response.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
                setLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search for tasks..."
                    placeholderTextColor="#888"
                />
                <EvilIcons name="search" size={25} color="black" style={styles.searchIcon} />
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>Event Assistant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>Printing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>Pick-up & Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>Lost & Found</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBox}>
                    <Text style={styles.label}>Tutoring</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.taskContainer}>
                {loading ? (
            <Text>Loading tasks...</Text> // Display while loading
            ) : (
            tasks.map((task, index) => (
                <TouchableOpacity key={index} style={styles.taskBox}>
                    <View style={styles.row}>
                        <EvilIcons name="user" size={25} color="black" />
                        <Text style={styles.taskTitle}>{task.name}</Text>
                        <Text style={styles.taskPrice}>Php {task.amount}</Text>
                    </View>
                    <Text style={styles.taskLabel}>
                        Skills Required: {task.skillsrequired || "None"}
                    </Text>
                    <Text style={styles.taskLabel}>
                        Payment Method: {task.paymentmethod}
                    </Text>
                    <Text style={styles.taskLabel}>
                        Date: {new Date(task.date).toLocaleDateString()}
                    </Text>
                </TouchableOpacity>
                ))
            )}

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#cbd2da',
  },
  searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 10,
      height: 35,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 9,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
  },
  searchInput: {
      flex: 1,
      height: '110%',
      fontSize: 15,
  },
  searchIcon: {
      marginLeft: 10,
  },
  scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: 60,
  },
  filterContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  filterBox: {
      backgroundColor: 'white',
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingHorizontal: 15,
      borderRadius: 5,
      margin: 5,
      borderWidth: 1,
      borderColor: '#ddd',
  },
  label: {
      fontSize: 14,
      color: 'grey',
  },
  taskContainer: {
      marginTop: 10,
  },
  taskBox: {
      backgroundColor: 'white',
      width: '100%',
      padding: 15,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'white',
      flexDirection: 'column', 
  },
  row: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: 5, 
  },
  taskLabel: {
      fontSize: 15,
      color: 'grey',
      flexShrink: 1, 
      marginTop: 5,
  },
  taskTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'gray',
      flex: 1, 
      marginRight: 10, 
  },
  taskPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2c7c2c', 
  },
});

export default Home;
