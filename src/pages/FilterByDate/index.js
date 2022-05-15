import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import api from "./../../services/api";
import moment from "moment";
import Fab from "./../../components/Fab";
import DateRangePicker from "rn-select-date-range";

export default function FilterByDate() {
  const [data, setData] = useState([]);
  const [selectedRange, setRange] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    try {
      api
        .get(
          `/articles/?_limit=${50}&publishedAt_gte=${selectedRange.firstDate}&publishedAt_lte=${selectedRange.secondDate}`
        )
        .then((res) => {
          const { data } = res;
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [selectedRange]);

  const renderItem = ({ item }) => (
    <Card>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{moment(item.publishedAt).format("LLLL")}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("Details", {
              id: item.id,
            })
          }
          mode="contained"
        >
          Details
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          minDate={moment().subtract(100, "days")}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <Text>Showing 50 articles from {moment(selectedRange.firstDate).format("LLLL")} to {moment(selectedRange.secondDate).format("LLLL")}
        </Text>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
      <Fab></Fab>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});
