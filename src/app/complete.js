import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';  
import { useRouter } from 'expo-router';


const Complete = () => {

    const router = useRouter ();

  return (
    <View style={styles.container}>

    <View style={styles.iconBox}>
        <Octicons name="verified" size={24} color="black" style={styles.icon} />
    </View>

      <Text style={styles.title}>All done!</Text>

      <Text style={{ fontSize: 15, textAlign:'center', marginTop: 5, marginBottom: 20, color: 'grey', right: 55 }}>
        Your password has been reset. 
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('')}>
        <Text style={styles.buttonText}>Back to log in</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  iconBox: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 20,
    right: 120,
  },
  icon: { 
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
    right: 100,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#0f3c73',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20, 
  },
  backText: {
    marginLeft: 5, 
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Complete;
