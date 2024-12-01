import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';  
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router'

const reset = () => {

    const router = useRouter ();

  const [code, setCode] = useState(["", "", "", ""]);

  const handleCodeChange = (text, index) => {
    const updatedCode = [...code];
    updatedCode[index] = text.replace(/[^0-9]/g, ""); 
    setCode(updatedCode);
  };

  return (
    <View style={styles.container}>

    <View style={styles.iconBox}>
     <MaterialCommunityIcons name="email-open-outline" size={24} color="black" style={styles.icon} />
    </View>

      <Text style={styles.title}>Password reset</Text>

      <Text style={{ fontSize: 15, textAlign:'center', marginTop: 5, marginBottom: 10, color: 'grey', right: 60 }}>
        We sent a code to your email.
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1} 
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('set')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 15, marginTop: 15}}>
        Didn't receive the email?{' '}
        <Text style={{color: 'blue'}} onPress={() => { }}>
          Click to resend
        </Text>
      </Text>

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
    right: 60,
  },
  codeContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '60%', 
    marginTop: 15,
    right: 25,
  },
  codeInput: {
    width: 50, 
    height: 50, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 1, 
    textAlign: 'center', 
    fontSize: 25,
    backgroundColor: '#fff',
    marginHorizontal: 5, 
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#0f3c73',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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

export default reset;
