import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Upload = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    console.log('Post Submitted:', postContent);

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Post Quest</Text>


      <TextInput
        style={styles.input}
        placeholder="Post a tasks..."
        placeholderTextColor="#888"
        multiline
        height={150}
        numberOfLines={10}
        value={postContent}
        onChangeText={setPostContent}
      />

        <Text style = {{ fontSize: 16, fontWeight: 'bold', alignContent: 'center'}}>Category</Text>
              <View style={styles.filterContainer}>
                  <TouchableOpacity style={styles.filterBox}>
                      <Text style={styles.label}>Personal</Text>
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

            <View style={styles.inputContainer}>
                    <Text style={styles.label}>Skill required</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Skill required"
                        placeholderTextColor="#888"
                    />
            </View>
            <View style={styles.inputContainer}>
                    <Text style={styles.label}>Deadline for completion</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
            </View>
            <View style={styles.inputContainer}>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
            </View>
            <View style={styles.inputContainer}>
                  
                    <Text style={styles.label}>Payment Method</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
            </View>

      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 5,
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
    textAlignVertical: 'top',
    marginBottom: 20,
    elevation: 3,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    elevation: 3,
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
  inputContainer: {
    width: '100%',  
    height: 50,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
},
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4a4a72',
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
});

export default Upload;
