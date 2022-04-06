import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import Card from '../components/Card';
import {AuthContext} from '../context/AuthContextProvider';

const HomeScreen = () => {
  const {user} = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  function Post() {
    // console.log(user);
    firestore()
      .collection('Posts')
      .add({
        message: message,
        author: user.displayName,
        date_created: new Date(),
        user_id: user.uid,
        likes: [],
        comments: [],
      })
      .then(() => {
        Alert.alert('Post created');
        setMessage('');
      });

    getAllPosts();
  }

  async function getAllPosts() {
    let temp_post = [];
    await firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          temp_post.push({
            id: doc.id,
            data: doc.data(),
          });
        });
      });

    setPosts(temp_post);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={{padding: 20}}>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <View style={styles.passwordContainer}>
          <Icon name="pencil" size={20} color="#30887a" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Post"
            value={message}
            onChangeText={value => {
              setMessage(value);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderColor: '#3eaa9b',
          borderWidth: 2,
          width: '80%',
          alignSelf: 'center',
          marginBottom: 10,
        }}
        onPress={Post}>
        <Text
          style={{
            paddingVertical: 5,
            color: '#3eaa9b',
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Post
        </Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 30}}
        data={posts}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
      />
      <View style={{height: 20}}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 17,
  },
});

export default HomeScreen;
