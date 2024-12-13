import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    const userData = { firstName, lastName, age, phoneNumber, email, password, confirmPassword };

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!firstName || !lastName || !age || !phoneNumber || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.40:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('account');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error during registration');
    }
  };

  return (
    <View style={styles.container}> 
      <View style={styles.floatingContainer}>
        <Text style={styles.title}>Create an Account</Text>
        <View style={styles.nameContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#888"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#888"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#888"
            value={age}
            onChangeText={setAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#888"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#888"
            value={password} 
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword} 
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister} 
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => router.back('Login')}>
            Login
          </Text>
        </Text>
      </View>
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
  backButton: {
    position: 'absolute',
    top: 40, 
    left: 10,
    zIndex: 1, 
  },
  floatingContainer: {
    width: '90%',
    backgroundColor: '#cbd2da',
    padding: 30,
    borderRadius: 16,
    elevation: 10,
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginTop:5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignContent:'center',
    color: 'white',
    marginBottom: 30,
  },
  nameContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '105%', 
    marginBottom: 20, 
   },
  inputWrapper: {
    flex: 1, 
    marginRight: 10, 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0f3c73',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#3498db',
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});
export default Register;