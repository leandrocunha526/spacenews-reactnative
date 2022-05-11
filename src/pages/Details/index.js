import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import api from '../../services/api';
import { Title } from "react-native-paper";
import moment from "moment";

export default function Details() {
const [data, setData] = useState([]);

const route = useRoute();

const { id } = route.params;

useEffect(() => {
  api.get(`/articles/${id}`).then((response) => {
    setData(response.data)
  })
}, []);

    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
        <View>
        <Title style={style.title}>{data.title}</Title>
        <Text style={style.newsSite}>{data.newsSite}</Text>
        </View>
        <View style={style.dates}>
           <Text>Published at {moment(data.publishedAt).format('LLLL')}</Text>
           <Text>Updated at {moment(data.UpdatedAt).format('LLLL')}</Text>
        </View>
        <View>
        <Image
          style={style.image}
          source={{uri: data.imageUrl}}
        />
        <Text sttle={style.paragraph}>{data.summary}</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      alignSelf: 'center',
      textAlign: 'center',
    },
    paragraph: {
      fontSize: 20,
      fontWeight: "bold",
    },
    newsSite: {
      fontSize: 15,
      alignSelf: 'center',
      textAlign: 'center',
    },
    dates: {
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: "normal"
    },
    image: {
      width: 400,
      height: 400,
      resizeMode: 'stretch',
  },
});
