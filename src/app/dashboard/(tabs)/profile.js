import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Profile = () => {
  const userProfile = {
    name: "Avril Mahinay",
    questPosition: "Quest Taker",
    rank: " | B",
    profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
    questsDone: 52,
    followersCount: 200,
    followingCount: 380,
  };

  const posts = [
    { id: 1, image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { id: 2, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 4, image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 8, image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  ];

  const rates = [
    { questGiver: 1, 
      questGiverName: 'Joana R', 
      rate: 5, 
      date: '03 Sep 2024', 
      comment: 'Great service, very professional!' },

    { questGiver: 2, 
      questGiverName: 'Jonnavien Grace A', 
      rate: 4, 
      date: '20 Aug 2024', 
      comment: 'Impressive job!' },

    { questGiver: 3, 
      questGiverName: 'Jules F', 
      rate: 4, 
      date: '05 Aug 2024', 
      comment:     'Amazing work, highly recommend.' },

    { questGiver: 4, 
      questGiverName: 'Shiela M', 
      rate: 3, 
      date: '30 Jul 2024', 
      comment: 'Good, but could improve communication.' },
  ];

  const [activeTab, setActiveTab] = useState('posts');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Ionicons key={`full-${i}`} name="star" size={12} color="#f1c40f" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<Ionicons key="half" name="star-half" size={12} color="#f1c40f" />);
    }
    while (stars.length < 5) {
      stars.push(<Ionicons key={`empty-${stars.length}`} name="star-outline" size={12} color="#f1c40f" />);
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileContainer}>
        <Image source={{ uri: userProfile.profilePicture }} style={styles.profilePicture} />
        <View style={styles.userInfo}>
          <View style={styles.nameContainer}>
                <Text style={styles.userName}>{userProfile.name}</Text>
                <MaterialIcons name="verified" size={20} color="#0f3c73" style={styles.verifiedIcon} />
              </View>
                <View style={styles.positionRankContainer}>
                <Text style={styles.userPosition}>{userProfile.questPosition}</Text>
                <Text style={styles.userRank}>{userProfile.rank}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{userProfile.questsDone}</Text>
          <Text style={styles.statLabel}>Quest Done</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{userProfile.followersCount}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{userProfile.followingCount}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.postsContainer}>
        <View style={styles.postsHeader}>
          <TouchableOpacity onPress={() => toggleTab('posts')}>
            <Text style={[styles.postsTitle, activeTab === 'posts' && styles.activeTab]}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleTab('rates')}>
            <Text style={[styles.postsTitle, activeTab === 'rates' && styles.activeTab]}>Rates</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'posts' && (
          <View style={styles.grid}>
            {posts.map(post => (
              <Image key={post.id} source={{ uri: post.image }} style={styles.gridImage} />
            ))}
          </View>

        )}

            {activeTab === 'rates' && (
            <View style={styles.ratesList}>
                <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Text style={styles.rateStar}>★★★★☆</Text>
                </View>

                <Text style={styles.feedbackTitle}>Client Feedback</Text>
                {rates.map(rate => (
                <View key={rate.questGiver} style={styles.rateItem}>
                    <View style={styles.questGiverContainer}>
                    <Ionicons name="person-circle-outline" size={20} color="black" style={styles.userIcon} />
                    <Text style={styles.questGiverName}>{rate.questGiverName}</Text>
                    </View>
                    <View style={styles.ratingAndDateContainer}>
                    <View style={styles.ratingContainer}>
                        {renderStars(rate.rate)}
                    </View>
                    <Text style={styles.rateDate}>{rate.date}</Text>
                    </View>
                    <Text>{rate.comment}</Text>
                </View>
                ))}
            </View>
            )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    right: 10,
    padding: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedIcon: {
    alignItems: 'center',
    marginLeft: 1, 
    left: '5',
    marginTop: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  positionRankContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userPosition: {
    fontSize: 16,
    color: '#888',
    marginRight: 5,
  },
  userRank: {
    fontSize: 16,
    color: '#666',
  },
  rateStar: {
    fontSize: 35,
    color: "#f1c40f",
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  statItem: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  postsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  postsHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 10,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTab: {
    color: '#0f3c73',
  },
  postsList: {
    marginTop: 10,
  },
  postItem: {
    marginBottom: 15,
  },
  timeText: {
    fontSize: 12,
    color: '#888',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '30%',
    height: 100,
    marginBottom: 10,
    borderRadius: 1,
  },
  ratesList: {
    marginTop: 20,
  },
  rateItem: {
    marginBottom: 10,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  questGiverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 10,
  },
  userIcon: {
    marginRight: 10,
  },
  questGiverName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,  
  },  
  ratingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,  
  },
  starsContainer: {
    flexDirection: 'row',
  },
  ratingAndDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 75,
  },
  rateDate: {
    fontSize: 12,
    color: '#888',
    marginLeft: 10,
  },
  
});

export default Profile;
