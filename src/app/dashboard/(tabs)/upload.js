import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator, Button } from 'react-native';

const Upload = () => {
  const [postContent, setPostContent] = useState('');
  const [category, setCategory] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [deadline, setDeadline] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state

  const API_URL = "http://localhost:5038/";

  const onClick = async () => {
    var newquest=document.getElementById("newquest").value;
    const data=new FormData();
    data.append("newquest", newquest);

    fetch(API_URL+'api/QuestApp/addquest', {
      method: 'POST',
     body:data
    })
   .then(res=>res.json())
   .then((result)=>{
    alert(result);
    this.refreshquest

   });
  }


  const handlePost = async () => {
    setLoading(true);  // Set loading to true when post starts
    const questDetails = {
      name: postContent,
      category,
      skillsrequired: skillsRequired,
      date: deadline,
      amount,
      paymentmethod: paymentMethod,
    };



    try {
      const response = await fetch('http://localhost:5038/api/QuestApp/addquest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questDetails),
      });

      if (response.ok) {
        Alert.alert('Success', 'Quest posted successfully!');
        // Clear form after posting
        setPostContent('');
        setCategory('');
        setSkillsRequired('');
        setDeadline('');
        setAmount('');
        setPaymentMethod('');
      } else {
        Alert.alert('Error', 'Failed to post quest.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while posting the quest.');
    } finally {
      setLoading(false);  // Set loading to false once request completes
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Post Quest</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#888"
        value={postContent}
        onChangeText={setPostContent}
        accessibilityLabel="quest-post-content"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Category"
        placeholderTextColor="#888"
        value={category}
        onChangeText={setCategory}
        accessibilityLabel="quest-category"
      />

      <Text style={styles.label}>Skill required</Text>
      <TextInput
        style={styles.input}
        placeholder="Skill required"
        placeholderTextColor="#888"
        value={skillsRequired}
        onChangeText={setSkillsRequired}
        accessibilityLabel="quest-skills-required"
      />

      <Text style={styles.label}>Deadline for completion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter deadline (e.g., 2025-11-22)"
        placeholderTextColor="#888"
        value={deadline}
        onChangeText={setDeadline}
        accessibilityLabel="quest-deadline"
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 100)"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        accessibilityLabel="quest-amount"
      />

      <Text style={styles.label}>Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Payment Method (e.g., on hand)"
        placeholderTextColor="#888"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
        accessibilityLabel="quest-payment-method"
      />

      <TouchableOpacity
        style={[styles.postButton, { opacity: postContent ? 1 : 0.6 }]}
        onPress={postContent ? handlePost : null}
        disabled={!postContent} // Disable button if no content
      >


       <Button onClick={()=>this.addClick()}>Post Quest</Button>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0f3c73" style={styles.loading} />}  {/* Loading indicator */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbd2da',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f3c73',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  postButton: {
    backgroundColor: '#0f3c73',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  postButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  loading: {
    marginTop: 20,
  },
});

export default Upload;
