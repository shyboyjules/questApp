import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

const verification = () => {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Please upload a clear photo of your ID, Ensure the ID is well-lit and all text is readable. For best results, take the photo straight on without any glare.</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Valid forms of ID include: Driver's License, Passport, National ID Card, or any government-issued identification.</Text>
            </View>

            <View style={styles.idContainer}>
                <TouchableOpacity style={styles.uploadBox}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                    <Text style={styles.idlabel}>Front of the ID</Text>
                    <Text style={styles.uploadText}>Upload a File</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.idContainer}>
                <TouchableOpacity style={styles.uploadBox}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                    <Text style={styles.idlabel}>Back of the ID</Text>
                    <Text style={styles.uploadText}>Upload a File</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.inputContainer, styles.row]}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                <Text style={styles.termslabel}>I accept the terms and conditions and understand how my information will be used.</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('')}>
                <Text style={styles.buttonText}>REGISTER</Text>
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
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    idContainer: {
        marginTop: 20,
        width: '90%',
        marginBottom: 15,
    },
    idlabel: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    termslabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10, 
    },
    uploadText: {
        fontSize: 15,
        color: 'black',
        marginBottom: 5,
    },
    uploadBox: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdcdd6',
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: 35,
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
});

export default verification;
