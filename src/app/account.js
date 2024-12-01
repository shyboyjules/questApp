import React from "react"; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; 
import { useRouter } from "expo-router";

const Account = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Account Type</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.inputWithIcon}
                        placeholder="Select Account Type"
                        placeholderTextColor="#888"
                    />
                    <AntDesign name="caretdown" size={20} color="black" style={styles.icon} />
                </View>
            </View>
        
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Account Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Account Number or ID"
                    placeholderTextColor="#888"
                />
            </View>
        
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('verification')}>
                <Text style={styles.buttonText}>Next</Text>
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
    inputContainer: {
        width: '90%',  
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        height: 40,
        paddingHorizontal: 10,
    },
    inputWithIcon: {
        flex: 1,
        fontSize: 16,
        color: '#000',
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
        color: '#000',
    },
    icon: {
        marginLeft: 10, 
    },
    button: {
        width: '90%',
        height: 35,
        backgroundColor: '#0f3c73',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Account;
