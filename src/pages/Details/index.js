import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { Title } from "react-native-paper";
import moment from "moment";
import * as Linking from "expo-linking";
import { Button } from "react-native-paper";
import Fab from "./../../components/Fab";

export default function Details() {
  const [data, setData] = useState([]);

  const route = useRoute();

  const { id } = route.params;

  useEffect(() => {
    api.get(`/articles/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Title style={style.title}>{data.title}</Title>
        </View>
        <View style={style.dates}>
          <Text>Published at {moment(data.publishedAt).format("LLLL")}</Text>
          <Text>Updated at {moment(data.UpdatedAt).format("LLLL")}</Text>
        </View>
        <View>
          <Image style={style.image} source={{ uri: data.imageUrl }} />
          <Text sttle={style.paragraph}>{data.summary}</Text>
        </View>
        <Text style={style.newsSite}>
          <Button
            title="See more"
            mode="contained"
            onPress={() => Linking.openURL(data.url)}
            style={style.button}
          >
            See more in {data.newsSite}
          </Button>
        </Text>
      </ScrollView>
      <Fab></Fab>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newsSite: {
    fontSize: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  dates: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "normal",
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "stretch",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});
