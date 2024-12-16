import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostQuest = () => {
    const navigation = useNavigation();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentmethod, setPaymentMethod] = useState('');

    const Upload = async () => {
      const questData = { description, category, deadline, amount, paymentmethod };
    
       //Check if all fields are filled
      if (!description || !category || !deadline || !amount || !paymentmethod) {
        alert('Please fill in all fields');
        return;
      }
    
      try {
        const response = await fetch('http://192.168.1.4:5000/api/user/quests', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(questData),
        });
        
       
    
        const data = await response.json();
    
        if (response.ok) {
          alert('Quest posted successfully');
          // Navigate to the next screen, if necessary
        } else {
          alert(data.message || 'Failed to post quest');
        }
      } catch (error) {
        console.error(error);
        alert('Error connecting to the server');
      }
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.floatingContainer}>
                <Text style={styles.title}>Create Quest</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        placeholderTextColor="#888"
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Category"
                        placeholderTextColor="#888"
                        value={category}
                        onChangeText={setCategory}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Deadline"
                        placeholderTextColor="#888"
                        value={deadline}
                        onChangeText={setDeadline}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        placeholderTextColor="#888"
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Payment Method"
                        placeholderTextColor="#888"
                        value={paymentmethod}
                        onChangeText={setPaymentMethod}
                    />
                </View>
                <TouchableOpacity style={styles.postButton} onPress={Upload}>
                    <Text style={styles.postButtonText}>Create Quest</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbd2da',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0f3c73',
        marginBottom: 20,
        textAlign: 'left',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 15,
        fontSize: 16,
        color: 'black',
        marginBottom: 20,
    },
    postButton: {
        backgroundColor: '#0f3c73',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    postButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default PostQuest;
