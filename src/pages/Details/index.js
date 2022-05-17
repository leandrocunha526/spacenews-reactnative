import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import api from "../../services/api";
import { Paragraph, Title, Button } from "react-native-paper";
import moment from "moment";
import * as Linking from "expo-linking";
import Fab from "./../../components/Fab";

export default function Details({route}) {
  const [data, setData] = useState([]);
  const [id, setId] = useState(route.params.id);

  useEffect(() => {
    api.get(`/articles/${id}`).then((response) => {
      setData(response.data);
    });
  }, [data]);

  const nextArticle = () => {
    setId(data.id + 1);
};

const previousArticle = () => {
    setId(data.id - 1);
}

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Title style={style.title}>{data.title}</Title>
        </View>
        <View style={style.dates}>
          <Text>Published at {moment(data.publishedAt).format("LLLL")}</Text>
          <Text>Updated at {moment(data.updatedAt).format("LLLL")}</Text>
        </View>
        <View>
          <Image style={style.image} source={{ uri: data.imageUrl }} />
          <Paragraph style={style.paragraph}>{data.summary}</Paragraph>
        </View>
        <View style={style.newsSite}>
          <Button
            title="See more"
            mode="contained"
            onPress={() => Linking.openURL(data.url)}
            style={style.buttonLink}
          >
            See more in {data.newsSite}
          </Button>
          </View>
          <View>
          <TouchableOpacity
            onPress={() => previousArticle()}
            style={style.buttonPrevious}
          >
            <Text>Previous article</Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
            onPress={() => nextArticle()}
            style={style.buttonNext}
          >
            <Text>Next article</Text>
          </TouchableOpacity>
          </View>
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
  },
  newsSite: {
    alignSelf: "center",
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
  buttonLink: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonPrevious: {
    backgroundColor: "#FF6961",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 0,
    padding: 5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonNext: {
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 0,
    padding: 5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  }
});
