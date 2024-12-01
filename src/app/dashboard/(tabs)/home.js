import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const Home = () => {
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
                {[
                    {
                        name: "Avril Mahinay",
                        description: "I need help with tutoring in subjects like Computer Programming and Information Management. If you have a background in education or tutoring, I'd love to hear from you."
                    },
                    {
                        name: "Joana Razon",
                        description: "I have some printing and copying tasks that need to be completed. If you have access to printing facilities and can help, please let me know."
                    },
                    {
                        name: "Jonnavien Asuelo",
                        description: "I'm planning an event and could use some extra hands for set-up, coordination, and cleanup. If you're organized and enjoy working at events, I'd appreciate your help!"
                    },
                    {
                        name: "Shiela Theresa Mosqueda",
                        description: "I need assistance with picking up and delivering items, like groceries or packages. A reliable vehicle is a must!"
                    },
                    {
                        name: "Jules Gifford Filoteo",
                        description: "I lost my phone and the last place I went is in the cafeteria. If somebody finds it, please let me know."
                    }
                ].map((task, index) => (
                    <TouchableOpacity key={index} style={styles.taskBox}>
                        <View style={styles.row}>
                            <EvilIcons name="user" size={25} color="black" />
                            <Text style={styles.taskTitle}>{task.name}</Text>
                            <Text style={styles.taskPrice}>Php 100</Text>
                            
                        </View>
                        <Text style={styles.taskLabel}>{task.description}</Text>
                    </TouchableOpacity>
                ))}
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
