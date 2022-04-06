import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({data}) => {
  // console.log(data.data.date_created.toDate().toString());
  // console.log(new Date(data.data.date_created.seconds));
  return (
    <View style={{backgroundColor: 'white', padding: 10, marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/person.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            overflow: 'hidden',
            marginRight: 6,
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {data.data.author}
        </Text>
      </View>
      <Text style={{fontStyle: 'italic'}}>
        {data.data.date_created.toDate().toDateString()}
      </Text>
      <Text style={{marginBottom: 5}}>{data.data.message}</Text>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#30887a',
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
          }}>
          <Icon name="thumbs-up" size={20} color="#30887a" />
          <Text style={{color: '#30887a', fontWeight: 'bold'}}>
            Likes ( {data.data.likes.length} )
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#106fbd',
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            backgroundColor: '#106fbd',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Comments ({data.data.comments.length})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
