import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const GiverPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dotButton}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.taskLabel}>Avril's Task</Text>
      <Text style={styles.title}>Interested Taskers</Text>

      <View style={styles.taskerCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/5.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.taskerName}>Joana Razon</Text>
            <Text style={styles.taskerRank}>Rank: B</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.taskerRating}>Rating: 4.5</Text>
              <Text style={styles.taskerStars}>★★★★☆</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.taskerCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/15.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.taskerName}>Jonnavien Grace Asuelo</Text>
            <Text style={styles.taskerRank}>Rank: E</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.taskerRating}>Rating: 4.3</Text>
              <Text style={styles.taskerStars}>★★★★☆</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.taskerCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/15.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.taskerName}>Jules Gifford Filoteo</Text>
            <Text style={styles.taskerRank}>Rank: E</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.taskerRating}>Rating: 4.3</Text>
              <Text style={styles.taskerStars}>★★★★☆</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.taskerCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/10.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.taskerName}>Shiela Theresa Mosqueda</Text>
            <Text style={styles.taskerRank}>Rank: E</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.taskerRating}>Rating: 4.3</Text>
              <Text style={styles.taskerStars}>★★★★☆</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  dotButton: {
    position: "absolute",
    top: 40,
    right: 10,
  },
  taskLabel: {
    fontSize: 18,
    color: "#333",
    marginTop: 75,
    marginLeft: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 20,
    marginTop: 1,
    marginBottom: 20,
  },
  taskerCard: {
    marginTop: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskerRating: {
    fontSize: 14,
    color: "#555",
    marginRight: 5,
  },
  taskerRank: {
    fontSize: 14,
    color: "#555",
  },
  taskerStars: {
    fontSize: 14,
    color: "#f1c40f",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  viewButton: {
    left: 70,
    top: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "grey",
  },
  viewButtonText: {
    color: "white",
    fontSize: 12,
  },
  acceptButton: {
    top: 5,
    height: 27,
    marginLeft: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#0f3c73",
    borderRadius: 5,
    left: 35,
  },
  acceptButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  declineButton: {
    top: 5,
    marginLeft: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#dc3545",
    borderRadius: 5,
  },
  declineButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default GiverPage;
